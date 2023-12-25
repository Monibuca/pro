package main

//go:generate go run gen.go $debug

/*
███    ███  ██████  ███    ██ 👑 ██████  ██    ██  ██████  █████
████  ████ ██    ██ ████   ██ ██ ██   ██ ██    ██ ██      ██   ██
██ ████ ██ ██    ██ ██ ██  ██ ██ ██████  ██    ██ ██      ███████
██  ██  ██ ██    ██ ██  ██ ██ ██ ██   ██ ██    ██ ██      ██   ██
██      ██  ██████  ██   ████ ██ ██████   ██████   ██████ ██   ██

The live stream server for Go
(c) dexter 2019-present
*/

import (
	"context"
	"embed"
	"flag"
	"fmt"
	"net/http"
	"os"
	"time"

	"m7s.live/engine/v4"
	"m7s.live/engine/v4/config"
	"m7s.live/engine/v4/util"

	_ "m7s.live/plugin/cascade/v4"
	_ "m7s.live/plugin/debug/v4"
	_ "m7s.live/plugin/gb28181/v4"
	_ "m7s.live/plugin/hdl/v4"
	_ "m7s.live/plugin/hls/v4"
	_ "m7s.live/plugin/hook/v4"
	_ "m7s.live/plugin/jessica/v4"
	_ "m7s.live/plugin/logrotate/v4"
	_ "m7s.live/plugin/preview/v4"
	_ "m7s.live/plugin/record/v4"
	_ "m7s.live/plugin/room/v4"
	_ "m7s.live/plugin/rtmp/v4"
	_ "m7s.live/plugin/rtsp/v4"

	_ "m7s.live/plugin/transcode/v4"
	_ "m7s.live/plugin/webrtc/v4"
	_ "m7s.live/plugin/webtransport/v4"
)

var (
	version = "dev"
)

//go:embed ui/*
var uiFiles embed.FS
var fileServer = http.FileServer(http.FS(uiFiles))

type UIConfig struct {
	config.HTTP
}

func (UIConfig) OnEvent(event any) {
}

func (UIConfig) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {
		r.URL.Path = "/ui/index.html"
	} else {
		r.URL.Path = "/ui" + r.URL.Path
	}
	file, err := os.Open("./" + r.URL.Path)
	if err == nil {
		defer file.Close()
		http.ServeContent(w, r, r.URL.Path, time.Now(), file)
		return
	}
	fileServer.ServeHTTP(w, r)
}

var UIPlugin = engine.InstallPlugin(&UIConfig{})

func main() {
	fmt.Println("start monibuca pro version:", version)
	conf := flag.String("c", "config.yaml", "config file")
	flag.Parse()
	_ctx := context.WithValue(context.Background(), "version", version)
	// ctx, cancel := context.WithTimeout(_ctx, 3*time.Hour)
	ctx, cancel := context.WithCancel(_ctx)
	go util.WaitTerm(cancel)
	engine.Run(ctx, *conf)
}
