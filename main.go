package main

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
	"flag"
	"fmt"
	"os"
	"time"

	"m7s.live/engine/v4"
	"m7s.live/engine/v4/util"
	_ "m7s.live/plugin/admin/v4"
	_ "m7s.live/plugin/cascade/v4"
	_ "m7s.live/plugin/cdn/v4"
	_ "m7s.live/plugin/crypto/v4"
	_ "m7s.live/plugin/debug/v4"
	_ "m7s.live/plugin/ffmpeg/v4"
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
	_ "m7s.live/plugin/sei/v4"
	_ "m7s.live/plugin/transcode/v4"
	_ "m7s.live/plugin/voice/v4"
	_ "m7s.live/plugin/webrtc/v4"
	_ "m7s.live/plugin/webtransport/v4"
)

var (
	version = "dev"
)

func main() {
	if len(os.Args) > 1 && os.Args[1] == "version" {
		fmt.Print(version)
		return
	}
	fmt.Println("start monibuca pro version:", version)
	conf := flag.String("c", "config.yaml", "config file")
	flag.Parse()
	_ctx := context.WithValue(context.Background(), "version", version)
	ctx, cancel := context.WithTimeout(_ctx, time.Hour)
	// ctx, cancel := context.WithDeadline(_ctx, time.Date(2025, 3, 1, 0, 0, 0, 0, time.UTC))
	// ctx, cancel := context.WithCancel(_ctx)
	go util.WaitTerm(cancel)
	engine.Run(ctx, *conf)
}
