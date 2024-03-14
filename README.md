# Monibuca 专业版

专业版是在开源版基础上集成了付费（闭源）插件，提供更多的功能和更好的性能。并且提供一个更加专业的可视化 UI 界面。

> 开源版本地址： https://github.com/langhuihui/monibuca

专业版为付费提供，可以先下载体验版，或者在线体验，如果满意可以联系我们购买正式版。

# 功能介绍
- SEI,可以动态插入自定义数据，比如水印，字幕等。
- LLHLS 协议支持。
- 转码，可将 h264 和 h265 互转，音频 aac 和 g711 互转。可以转码成多个分辨率，支持硬件加速。
- 加密，多种加密方式，可配合 jessibuca 进行解密播放
- CDN，转推到阿里云、腾讯云等 CDN 服务商（可以和加密组合）
- 语音对讲，实现公网语音对讲能力（需要购买硬件）
- 级联功能，将多个 Monibuca 服务器级联，有多种级联方式。
- 快速截图，比普通截图快 10 倍速度。
- 高级录制，支持定时任务等。
- GB28181 专业版，可实现 GB 协议的级联等。
- onvif 专业版，支持 onvif 协议的 ptz 功能。
- Admin，精美管理界面，可管理设备，多屏、大屏显示，历史回放，拉流转推等。

# 体验版
## 在线体验
[在线体验](https://test.monibuca.com/ui)

## 下载体验版

- [linux x86](https://download.m7s.live/pro/m7s_linux_amd64.tar.gz)
- [linux arm](https://download.m7s.live/pro/m7s_linux_arm64.tar.gz)
- [windows](https://download.m7s.live/pro/m7s_windows_amd64.zip)
- [mac x86](https://download.m7s.live/pro/m7s_darwin_amd64.tar.gz)
- [mac arm](https://download.m7s.live/pro/m7s_darwin_arm64.tar.gz)

Admin UI 界面访问地址：http://localhost:8080/ui

## Docker体验
  
```bash
docker run -p 8080:8080 8443:8443 1935:1935 9000:9000 554:554 5060:5060/udp 58200-59200:58200-59200 44944:44944/udp monibuca/pro:latest
```

# 编译方式
- 在购买了私有仓库的源码后，可以通过以下方式编译专业版。
- 请按需引入已购买的私有仓库，也可以使用自己的私有仓库，编译方式参考下面的方式。
## 设置 GO 环境变量
私有仓库地址必须配置到 GOPRIVATE 中
```bash
GOPRIVATE=m7s.live/plugin/voice/v4,m7s.live/plugin/snappro/v4,m7s.live/plugin/transcode/v4,m7s.live/plugin/cascade,m7s.live/plugin/cdn,m7s.live/plugin/crypto,m7s.live/plugin/admin,m7s.live/plugin/sei
```

## 设置 git config
由于私有仓库无法通过 https 安装，因此需要使得 go get 通过 ssh 安装仓库代码。如果使用自己的私有仓库需要把下面的地址换成自己的仓库地址。请配置好 ssh 的秘钥，使得git clone 可以通过 ssh 进行。
```bash
git config --global url."git@github.com:Monibuca/".insteadOf "https://github.com/Monibuca/"
```

# 联系我们
请访问官网 https://monibuca.com
扫描官网下方的二维码，（公众号，qq 群，qq 频道）联系我们。
