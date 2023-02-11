package api

import (
	"encoding/json"
	"errors"
	"io"
	"m7s.live/engine/v4/log"
	"m7s.live/plugin/crypto/v4"
	"m7s.live/plugin/rtmp/v4"
	"m7s.live/plugin/transcode/v4"
	"net/http"
	"strconv"
	"strings"
)

type result struct {
	Code int
	Data any
	Msg  string
}

type videoProcess struct {
	StreamPath string
	Trans      *struct {
		FromTrack string
		ToTrack   string
		Args      map[string]string
	} `json:",omitempty"`
	Encrypt *struct {
		FromTrack string
	} `json:",omitempty"`
	RtmpPush *struct {
		Target    string
		FromTrack string
	} `json:",omitempty"`
}

var (
	transcodeMap = make(map[string]*transcode.Transcode) // m7s streamPath => transcode.Transcode
	encryptMap   = make(map[string]bool)                 // m7s streamPath => bool
	pushMap      = make(map[string]struct {
		Rtmp   string
		Pusher *rtmp.RTMPPusher
	}) // rtmp streamPath => {rtmp,pusher}
)

const (
	STOP_TRANS   = 0b1
	STOP_ENCRYPT = 0b10
	STOP_PUSH    = 0b100
)

func Process(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var res result

	if r.Method != "POST" {
		res.Code = -1
		res.Msg = "bat request method"
		makeResp(w, http.StatusBadRequest, res)
		return
	}

	b, err := io.ReadAll(r.Body)
	if err != nil {
		res.Code = -1
		res.Msg = "bat request,no json"
		makeResp(w, http.StatusBadRequest, res)
		return
	}
	var vp videoProcess
	err = json.Unmarshal(b, &vp)
	if err != nil || vp.StreamPath == "" {
		res.Code = -1
		res.Msg = "json param error "
		makeResp(w, http.StatusBadRequest, res)
		return
	}

	if vp.Trans != nil && vp.Trans.FromTrack != "" {
		Transcode(vp.StreamPath, vp.Trans.FromTrack, vp.Trans.ToTrack, vp.Trans.Args)
	}
	if vp.Encrypt != nil && vp.Encrypt.FromTrack != "" {
		err := Encrypt(vp.StreamPath, vp.Encrypt.FromTrack)
		if err != nil {
			res.Code = -1
			res.Msg = "Encrypt error " + err.Error()
			makeResp(w, http.StatusInternalServerError, res)
			return
		}
	}
	if vp.RtmpPush != nil && vp.RtmpPush.Target != "" {
		err := PushRtmp(vp.StreamPath, vp.RtmpPush.Target, vp.RtmpPush.FromTrack, false)
		if err != nil {
			res.Code = -1
			res.Msg = "PushRtmp error " + err.Error()
			makeResp(w, http.StatusInternalServerError, res)
			return
		}
	}

	res.Code = 0
	res.Msg = "ok"
	makeResp(w, http.StatusOK, res)
}

func GetKey(w http.ResponseWriter, r *http.Request) {
	livePath := r.URL.Query().Get("livePath")
	if livePath == "" {
		makeResp(w, http.StatusOK, result{
			Code: -1,
			Data: nil,
			Msg:  "stream path is empty",
		})
		return
	}
	key := getKey(livePath)
	if key == "" {
		makeResp(w, http.StatusOK, result{
			Code: -1,
			Data: nil,
			Msg:  "no such stream",
		})
		return
	}
	makeResp(w, http.StatusOK, result{
		Code: 0,
		Data: key,
		Msg:  "",
	})
	return
}

func Stop(w http.ResponseWriter, r *http.Request) {
	livePath := r.URL.Query().Get("livePath")
	flagStr := r.URL.Query().Get("flag")
	flag, _ := strconv.Atoi(flagStr)
	if livePath == "" || flag == 0 {
		makeResp(w, http.StatusOK, result{
			Code: -1,
			Data: nil,
			Msg:  "live path or flag is empty",
		})
		return
	}
	res := stop(livePath, flag)
	if !res {
		makeResp(w, http.StatusOK, result{
			Code: -1,
			Data: nil,
			Msg:  "stop wrong",
		})
		return
	}
	makeResp(w, http.StatusOK, result{
		Code: 0,
		Data: nil,
		Msg:  "ok",
	})
	return
}

func makeResp(w http.ResponseWriter, status int, res result) {
	w.WriteHeader(status)
	resJson, _ := json.Marshal(res)
	w.Write(resJson)
}

func getStreamPath(livePath string) (string, error) {
	for path, rtmp := range pushMap {
		if strings.Index(rtmp.Rtmp, livePath) != -1 {
			return path, nil
		}
	}
	return "", errors.New("no live path")
}

// 转码  加密  推送
func Transcode(streamPath string, fromTrack string, toTrack string, args map[string]string) {
	if _, ok := transcodeMap[streamPath]; ok {
		log.Info(streamPath + " is transcoded")
		return
	}
	trans := &transcode.Transcode{
		From: fromTrack,
		To:   toTrack,
		Args: args,
	}
	transcodeMap[streamPath] = trans
	transcode.Conf.TransProcess[streamPath] = trans
	go trans.Start(streamPath)
}

func Encrypt(streamPath string, fromTrack string) error {
	encryptMap[streamPath] = true
	return crypto.Conf.OnPublish(streamPath, fromTrack)
}

func PushRtmp(streamPath string, target string, fromTrack string, save bool) error {
	if _, ok := pushMap[streamPath]; ok {
		log.Info(streamPath + " is pushed")
		return nil
	}
	rtmpPusher := new(rtmp.RTMPPusher)
	err := rtmp.RTMPPlugin.Push(streamPath+"?vts="+fromTrack, target, rtmpPusher, save)
	if err != nil {
		return err
	}
	pushMap[streamPath] = struct {
		Rtmp   string
		Pusher *rtmp.RTMPPusher
	}{Rtmp: target, Pusher: rtmpPusher}
	return nil
}

// 直播流地址
func getKey(livePath string) string {
	streamPath, _ := getStreamPath(livePath)
	if streamPath == "" {
		return ""
	}
	if cryptor, ok := crypto.Conf.CryptorMap[streamPath]; ok {
		return cryptor.Cryptor.GetKey()
	}
	return ""
}

func stop(livePath string, flag int) bool {
	streamPath, _ := getStreamPath(livePath)
	if streamPath == "" {
		return false
	}

	//关闭加密
	if flag&STOP_ENCRYPT != 0 {
		if cryptor, ok := crypto.Conf.CryptorMap[streamPath]; ok {
			cryptor.Stop()
			delete(encryptMap, streamPath)
		}
	}
	//关闭推流
	if flag&STOP_PUSH != 0 {
		if pusher, ok := pushMap[streamPath]; ok {
			pusher.Pusher.Pusher.Config.RePush = 0
			pusher.Pusher.Pusher.ReConnectCount = 1
			pusher.Pusher.Stop()
			delete(pushMap, streamPath)
		}
	}
	//关闭转码
	if flag&STOP_TRANS != 0 {
		if _, ok := transcodeMap[streamPath]; ok {
			if err := transcode.Conf.Stop(streamPath); err != nil {
				log.Error("close trans wrong", err)
			} else {
				delete(transcodeMap, streamPath)
			}
		}
	}
	return true
}
