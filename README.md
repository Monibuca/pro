# Monibuca 专业版

专业版是在开源版基础上集成了付费（闭源）插件，提供更多的功能和更好的性能。并且提供一个更加专业的可视化 UI 界面。

> 开源版本地址： https://github.com/langhuihui/monibuca

专业版为付费提供，可以先下载体验版，或者在线体验，如果满意可以联系我们购买正式版。

# 体验版
## 在线体验
[在线体验](https://test.monibuca.com/ui)

## 下载体验版

- [linux x86](https://download.m7s.live/pro/m7s_linux_amd64.tar.gz)
- [linux arm](https://download.m7s.live/pro/m7s_linux_arm64.tar.gz)
- [windows](https://download.m7s.live/pro/m7s_windows_amd64.zip)
- [mac x86](https://download.m7s.live/pro/m7s_darwin_amd64.tar.gz)
- [mac arm](https://download.m7s.live/pro/m7s_darwin_arm64.tar.gz)

UI 界面访问地址：http://localhost:8080/ui

## Docker体验
  
```bash
docker run -p 8080:8080 1935:1935 9000:9000 554:554 5060:5060 58200-59200:58200-59200/udp 44944:44944/udp monibuca/pro:latest
```
## 桌面体验
- [windows](https://download.m7s.live/pro/m7s-pro_0.1.3_x64_en-US.msi)
- [mac x86](https://download.m7s.live/pro/m7s-pro.app.tar.gz)
- [mac arm](https://download.m7s.live/pro/m7s-pro_aarch64.app.tar.gz)
> mac 下运行出现移入废纸篓问题：https://zhuanlan.zhihu.com/p/135948430

# 编译方式
- 在购买了私有仓库的源码后，可以通过以下方式编译专业版。
- 请按需引入已购买的私有仓库，也可以使用自己的私有仓库，编译方式参考下面的方式。
## 设置 GO 环境变量
私有仓库地址必须配置到 GOPRIVATE 中
```bash
GOPRIVATE=m7s.live/plugin/voice/v4,m7s.live/plugin/snappro/v4,m7s.live/plugin/transcode/v4,m7s.live/plugin/cascade,m7s.live/plugin/cdn,m7s.live/plugin/crypto,m7s.live/plugin/admin
```

## 设置 git config
由于私有仓库无法通过 https 安装，因此需要使得 go get 通过 ssh 安装仓库代码。如果使用自己的私有仓库需要把下面的地址换成自己的仓库地址。请配置好 ssh 的秘钥，使得git clone 可以通过 ssh 进行。
```bash
git config --global url."git@github.com:Monibuca/".insteadOf "https://github.com/Monibuca/"
```

# 联系我们
请访问官网 https://monibuca.com
扫描官网下方的二维码，（公众号，qq 群，qq 频道）联系我们。
