import{d as k,k as z,s as Q,o as X,b as Y,S as y,a3 as b,t as ee,A as te,f as s,u as t,ac as E,V as v,r as J,O as ae,e as K,a6 as P,w as W,x as se,E as I,U as F,ab as ne,F as B,_ as oe,a4 as ce,W as L,a5 as le}from"./vue-12defb16.js";import{a as re,_ as ie}from"./index.vue_vue_type_script_setup_true_lang-bef46352.js";import"./dayjs-4778c158.js";import{bq as de,br as ue,Z as C,ah as j,bp as pe,ag as fe,B as G,a0 as ve,aA as V}from"./index-c0a17768.js";import{e as me,f as _e,F as De,h as he,V as ye,A as ge,D as U,c as H,d as M,W as we,i as Ie,s as q}from"./device-fff3723f.js";import{a as Se,R as be,C as $}from"./Card-78023e69.js";import{D as Z}from"./index-8b1011e4.js";import{b as R,a as xe,D as Ce,p as ke}from"./index-01110c73.js";import"./mockjs-890b569b.js";import"./overview-6a65cc93.js";import"./useFlexGapSupport-563fd2e9.js";import"./index-c5bbdf96.js";import"./index-d94df19e.js";const Ne={class:"video-player-container"},Ae=k({__name:"video",props:{title:null,stream:null},setup(m){const e=m,c=z();function n(){e.stream&&c.value&&e.stream.mediaStream&&(c.value.srcObject=e.stream.mediaStream)}Q(()=>{var u;e.stream&&(n(),(u=e.stream)==null||u.on("change",n))});const l=z(!0);X(()=>{de(c.value,"canplay",()=>{l.value=!1})}),Y(()=>{var u;(u=e.stream)==null||u.off("change",n)});const _=()=>document.querySelector(".video-player-container");return(u,S)=>(y(),b("div",Ne,[ee(s(t(ue),{class:"loading"},null,512),[[te,l.value]]),E("video",{class:"player",ref_key:"videoEle",ref:c,autoplay:""},null,512),s(t(j),{class:"info",title:m.title,getPopupContainer:_},{default:v(()=>[s(t(C),{icon:"octicon:ellipsis-16",size:20,color:"#dedede",hoverColor:"#9dcefc"})]),_:1},8,["title"])]))}});function Ee(){let m;const e=J([]),c=new Map;let n,l;const _=async()=>{const r=e.filter(o=>o.path);for(const o of r)if(c.has(o.path))o.stream||(o.stream=c.get(o.path));else{const i=new we(o.path);n||await u(),n.addStream(i),o.stream=i,c.set(o.path,o.stream)}if(r.length){const o=new Set(r.map(d=>d.path)),i=await l.createOffer();await l.setLocalDescription(i),m.send(JSON.stringify({type:"subscribe",offer:i.sdp,streamList:[...o]}))}else n&&(n.close(),n=null,c.clear())},u=async()=>new Promise(r=>{n=new me(pe("webrtc","/batch")),l=n.webrtc,m=l.createDataChannel("signal"),m.onmessage=async o=>{const i=JSON.parse(o.data);switch(i.type){case"answer":l.setRemoteDescription(new RTCSessionDescription(i));break;case"remove":n.deleteStream(i.streamPath),c.delete(i.streamPath);break;case"offer":await l.setRemoteDescription(new RTCSessionDescription(i));const d=await l.createAnswer();await l.setLocalDescription(d),m.send(JSON.stringify(d))}},m.onopen=r,l.ondatachannel=async o=>{const i=o.channel,d=c.get(i.label);if(d){let A,a;const h=new _e(i),f=new De(h,he.PUSH);f.gotVideo=p=>D.decode(p),f.gotAudio=p=>g.decode(p);const D=new ye,g=new ge;await D.initialize(),await g.initialize(),f.on(U.VIDEO_ENCODER_CONFIG_CHANGED,p=>{D.configure(p)}),f.on(U.AUDIO_ENCODER_CONFIG_CHANGED,p=>{g.configure(p)}),D.on(H.Error,p=>{console.error(p),D.initialize()}),D.on(H.VideoFrame,p=>{if(!A){const w=new MediaStreamTrackGenerator({kind:"video"});d.videoTrack=w,A=w.writable.getWriter()}A.write(p).catch(w=>{console.error(w),D.close(),h.close()})}),g.on(M.Error,p=>{console.error(p),g.initialize()}),g.on(M.AudioFrame,p=>{if(!a){const w=new MediaStreamTrackGenerator({kind:"audio"});d.audioTrack=w,a=w.writable.getWriter()}a.write(p).catch(w=>{console.error(w),g.close(),h.close()})}),h.connect()}},n.connect()});return{init:u,changeStreamList:r=>{e.length=0,e.push(...r),_()},streamList:e,updateItem:async(r,o)=>{let i,d;typeof r!="string"?(i=r,d=`${r.ID}/${r.DeviceID}`):d=r,e[o].path=d,e[o].item=i,e[o].stream=c.get(d),await _()},delItem:async r=>{e[r].path="",delete e[r].item,delete e[r].stream,await _()},closeAll:()=>{n==null||n.close(),n=null,e.length=0,c.clear()}}}const T=ae({id:"screen-store",state:()=>({activeInfo:{ID:"",DeviceID:"",DeviceName:"",Name:"",LiveStatus:0}}),getters:{getActiveInfo(){return this.activeInfo}},actions:{setActiveInfo(m){this.activeInfo=m}}}),Le={class:"text-center"},$e={key:1,class:"video-player-placeholder"},Re=k({__name:"content",setup(m){const e=z(1),c=[{label:"单屏",value:1},{label:"四分屏",value:4},{label:"九分屏",value:9},{label:"十六分屏",value:16}],n=K(()=>{switch(e.value){case 1:return 24;case 4:return 12;case 9:return 8;case 16:return 6;default:return 24}}),l=()=>document.querySelector(".video-player-placeholder"),_=z(null),{toggle:u,isFullscreen:S}=fe(_),x=T(),{getActiveInfo:N}=P(x),{updateItem:O,streamList:r,changeStreamList:o,closeAll:i}=Ee(),d=J({selectNum:1});W(e,async()=>{d.selectNum=0,x.setActiveInfo({ID:"",DeviceID:"",DeviceName:"",Name:"",LiveStatus:0});const a=new Array(e.value).fill({}).map(()=>({path:""}));o(a)},{immediate:!0}),se(()=>i()),W(()=>t(N),(a,h)=>{const{ID:f,DeviceID:D}=N.value,g=`${a.ID}/${a.DeviceID}`,p=`${h.ID}/${h.DeviceID}`;a.DeviceID&&g!==p&&Ie({id:f,channel:D}).finally(()=>{O(N.value,d.selectNum)})});const A=({item:a},h)=>{d.selectNum=h,N.value.DeviceID!==(a==null?void 0:a.DeviceID)&&x.setActiveInfo({ID:(a==null?void 0:a.ID)??"",DeviceID:(a==null?void 0:a.DeviceID)??"",DeviceName:(a==null?void 0:a.DeviceName)??"",Name:(a==null?void 0:a.Name)??"",LiveStatus:(a==null?void 0:a.LiveStatus)??0})};return(a,h)=>(y(),b("div",Le,[s(t(re),{value:e.value,"onUpdate:value":h[0]||(h[0]=f=>e.value=f),buttonStyle:"solid",options:c,optionType:"button"},null,8,["value"]),s(t(G),{onClick:t(u)},{default:v(()=>[s(t(C),{icon:"ant-design:fullscreen-outlined",class:"v-text-bottom"}),I("全屏 ")]),_:1},8,["onClick"]),s(t(be),{gutter:4,class:"mt-10px",ref_key:"screenRef",ref:_},{default:v(()=>[t(S)?(y(),F(t(G),{key:0,onClick:t(u),type:"link",class:"absolute right-2 top-2 z-10 text-white"},{default:v(()=>[s(t(C),{icon:"ant-design:fullscreen-exit-outlined",class:"v-text-bottom"}),I(" 退出全屏 ")]),_:1},8,["onClick"])):ne("",!0),(y(!0),b(B,null,oe(t(r),(f,D)=>(y(),F(t(Se),{span:t(n),key:D,class:ce(["mt-4px flex-center",{active:e.value>1&&d.selectNum===D&&!t(S),isFullscreen:t(S)}]),onClick:()=>A(f,D)},{default:v(()=>[f!=null&&f.stream?(y(),F(Ae,{key:0,title:f.path,stream:f.stream},null,8,["title","stream"])):(y(),b("div",$e,[s(t(j),{title:"当前无信号，请先选择通道",class:"tip cursor-pointer",getPopupContainer:l},{default:v(()=>[s(t(C),{icon:"pepicons-pop:television-play-off",size:e.value===1?50:24},null,8,["size"])]),_:1})]))]),_:2},1032,["span","class","onClick"]))),128))]),_:1},512)]))}});const ze=ve(Re,[["__scopeId","data-v-340b5442"]]),Te={class:"p-16px m0 text-text"},Fe=k({__name:"deviceInfo",setup(m){const{getActiveInfo:e}=P(T());return(c,n)=>(y(),b(B,null,[E("h4",Te,[s(t(C),{icon:"icon-park-solid:view-grid-detail",class:"v-text-bottom"}),I(" 设备信息 ")]),s(t(Z),{class:"m0"}),s(t(xe),{class:"p-16px p-b-0",column:1},{default:v(()=>[s(t(R),{label:"设备名称"},{default:v(()=>[I(L(t(e).DeviceName||"--"),1)]),_:1}),s(t(R),{label:"设备编号"},{default:v(()=>[I(L(t(e).ID||"--"),1)]),_:1}),s(t(R),{label:"通道名称"},{default:v(()=>[I(L(t(e).Name||"--"),1)]),_:1}),s(t(R),{label:"通道编号"},{default:v(()=>[I(L(t(e).DeviceID||"--"),1)]),_:1})]),_:1})],64))}}),Ve={class:"p-16px m0 text-text"},Pe={class:"pt-30px"},Be=k({__name:"operate",setup(m){const{getActiveInfo:e}=P(T()),c=K(()=>!!e.value.ID),n=async _=>{V.destroy(),await q({id:e.value.ID,channel:e.value.DeviceID,ptzcmd:_}).then(async u=>{V.success("指令发送成功"),l()}).catch(u=>{V.success("指令发送失败")})},l=()=>{setTimeout(async()=>{await q({id:e.value.ID,channel:e.value.DeviceID,ptzcmd:ke()})})};return(_,u)=>(y(),b(B,null,[E("h4",Ve,[s(t(C),{icon:"icon-park-solid:scan-setting",class:"v-text-bottom"}),I(" 设备操作 ")]),s(t(Z),{class:"m0"}),E("div",Pe,[s(Ce,{hanldeClick:n,allowed:t(c)},null,8,["allowed"])])],64))}}),Oe={class:"w-300px m-l-8px h-full flex-shrink-0"},We=k({name:"Screen"}),tt=k({...We,setup(m){const e=T(),c=n=>{const{ID:l,DeviceID:_,DeviceName:u,Name:S,LiveStatus:x}=n;e.setActiveInfo({ID:l,DeviceID:_,DeviceName:u,Name:S,LiveStatus:x})};return(n,l)=>(y(),b("div",{class:"flex",style:le({height:"calc(100% - 8px)"})},[s(t($),{class:"w-342px m-r-8px flex-shrink-0",bordered:!1,bodyStyle:{height:"100%",padding:0}},{default:v(()=>[s(ie,{onSelect:c})]),_:1}),s(t($),{class:"flex-1",bordered:!1,bodyStyle:{height:"100%",padding:"16px"}},{default:v(()=>[s(ze)]),_:1}),E("div",Oe,[s(t($),{class:"m-b-8px",bordered:!1,bodyStyle:{height:"230px",padding:0}},{default:v(()=>[s(Fe)]),_:1}),s(t($),{style:{height:"calc(100% - 238px)"},bordered:!1,bodyStyle:{height:"100%",padding:0}},{default:v(()=>[s(Be)]),_:1})])],4))}});export{tt as default};