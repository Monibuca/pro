import{d as x,k as B,e as T,a6 as A,r as H,w as L,x as J,u as e,S as c,a3 as d,f as a,V as l,E as n,U as b,ab as M,F as N,_ as O,a4 as Q,ac as w,W as S,a5 as X}from"./vue-db0e7353.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-d9538b62.js";import"./dayjs-4778c158.js";import{ad as ee,W as D,B as V,ae as te,Y as ae,ax as z}from"./index-a3873c66.js";import{u as C,a as se}from"./usePlay-09a5eb25.js";import{i as le,s as R}from"./device-f2176f90.js";import{V as F}from"./jb4-6a025928.js";import{a as ce}from"./Group-e671600e.js";import{a as oe,R as ne,C as g}from"./Card-3e30f616.js";import{D as P}from"./index-e55b8189.js";import{b as k,a as re,D as ie,p as ue}from"./index-6396b3d8.js";import"./mockjs-890b569b.js";import"./global-7782a904.js";import"./useFlexGapSupport-a31804f7.js";import"./index-cfe68d2a.js";import"./index-e495502e.js";const pe={class:"text-center"},de={key:1,class:"video-player-placeholder"},_e=x({__name:"content",setup($){const s=B(1),_=[{label:"单屏",value:1},{label:"四分屏",value:4},{label:"九分屏",value:9},{label:"十六分屏",value:16}],r=T(()=>{switch(s.value){case 1:return 24;case 4:return 12;case 9:return 8;case 16:return 6;default:return 24}}),f=()=>document.querySelector(".video-player-placeholder"),i=B(null),{toggle:u,isFullscreen:v}=ee(i),m=C(),{getActiveInfo:y}=A(m),{updateItem:U,streamList:E,changeStreamList:K,closeAll:W,webrtc:q}=se(),I=H({selectNum:1});L(s,async()=>{I.selectNum=0,m.setActiveInfo({ID:"",DeviceID:"",DeviceName:"",Name:"",LiveStatus:0});const t=new Array(s.value).fill({}).map(()=>({path:""}));K(t)},{immediate:!0}),J(()=>W()),L(()=>e(y),(t,p)=>{const{ID:o,DeviceID:h}=y.value,Y=`${t.ID}/${t.DeviceID}`,j=`${p.ID}/${p.DeviceID}`;t.DeviceID&&Y!==j&&le({id:o,channel:h}).finally(()=>{U(y.value,I.selectNum)})});const G=({item:t},p)=>{I.selectNum=p,y.value.DeviceID!==(t==null?void 0:t.DeviceID)&&m.setActiveInfo({ID:(t==null?void 0:t.ID)??"",DeviceID:(t==null?void 0:t.DeviceID)??"",DeviceName:(t==null?void 0:t.DeviceName)??"",Name:(t==null?void 0:t.Name)??"",LiveStatus:(t==null?void 0:t.LiveStatus)??0})};return(t,p)=>(c(),d("div",pe,[a(e(ce),{value:s.value,"onUpdate:value":p[0]||(p[0]=o=>s.value=o),buttonStyle:"solid",options:_,optionType:"button"},null,8,["value"]),a(e(V),{onClick:e(u)},{default:l(()=>[a(e(D),{icon:"ant-design:fullscreen-outlined",class:"v-text-bottom"}),n("全屏 ")]),_:1},8,["onClick"]),a(e(ne),{gutter:4,class:"mt-10px",ref_key:"screenRef",ref:i},{default:l(()=>[e(v)?(c(),b(e(V),{key:0,onClick:e(u),type:"link",class:"absolute right-2 top-2 z-10 text-white"},{default:l(()=>[a(e(D),{icon:"ant-design:fullscreen-exit-outlined",class:"v-text-bottom"}),n(" 退出全屏 ")]),_:1},8,["onClick"])):M("",!0),(c(!0),d(N,null,O(e(E),(o,h)=>(c(),b(e(oe),{span:e(r),key:h,class:Q(["mt-4px flex-center",{active:s.value>1&&I.selectNum===h&&!e(v),isFullscreen:e(v)}]),onClick:()=>G(o,h)},{default:l(()=>[o.path?(c(),d(N,{key:0},[e(q)?(c(),b(F,{key:0,title:o.path,webrtcStream:o.stream},null,8,["title","webrtcStream"])):(c(),b(F,{key:1,title:o.path,format:"ws-flv","stream-path":o.path},null,8,["title","stream-path"]))],64)):(c(),d("div",de,[a(e(te),{title:"当前无信号，请先选择通道",class:"tip cursor-pointer",getPopupContainer:f},{default:l(()=>[a(e(D),{icon:"pepicons-pop:television-play-off",size:s.value===1?50:24},null,8,["size"])]),_:1})]))]),_:2},1032,["span","class","onClick"]))),128))]),_:1},512)]))}});const fe=ae(_e,[["__scopeId","data-v-93923aa7"]]),ve={class:"p-16px m0 text-text"},me=x({__name:"deviceInfo",setup($){const{getActiveInfo:s}=A(C());return(_,r)=>(c(),d(N,null,[w("h4",ve,[a(e(D),{icon:"icon-park-solid:view-grid-detail",class:"v-text-bottom"}),n(" 设备信息 ")]),a(e(P),{class:"m0"}),a(e(re),{class:"p-16px p-b-0",column:1},{default:l(()=>[a(e(k),{label:"设备名称"},{default:l(()=>[n(S(e(s).DeviceName||"--"),1)]),_:1}),a(e(k),{label:"设备编号"},{default:l(()=>[n(S(e(s).ID||"--"),1)]),_:1}),a(e(k),{label:"通道名称"},{default:l(()=>[n(S(e(s).Name||"--"),1)]),_:1}),a(e(k),{label:"通道编号"},{default:l(()=>[n(S(e(s).DeviceID||"--"),1)]),_:1})]),_:1})],64))}}),he={class:"p-16px m0 text-text"},De={class:"pt-30px"},xe=x({__name:"operate",setup($){const{getActiveInfo:s}=A(C()),_=T(()=>!!s.value.ID),r=async i=>{z.destroy(),await R({id:s.value.ID,channel:s.value.DeviceID,ptzcmd:i}).then(async u=>{z.success("指令发送成功"),f()}).catch(u=>{z.success("指令发送失败")})},f=()=>{setTimeout(async()=>{await R({id:s.value.ID,channel:s.value.DeviceID,ptzcmd:ue()})})};return(i,u)=>(c(),d(N,null,[w("h4",he,[a(e(D),{icon:"icon-park-solid:scan-setting",class:"v-text-bottom"}),n(" 设备操作 ")]),a(e(P),{class:"m0"}),w("div",De,[a(ie,{hanldeClick:r,allowed:e(_)},null,8,["allowed"])])],64))}}),ye={class:"w-300px m-l-8px h-full flex-shrink-0"},Ie=x({name:"Screen"}),Pe=x({...Ie,setup($){const s=C(),_=r=>{const{ID:f,DeviceID:i,DeviceName:u,Name:v,LiveStatus:m}=r;s.setActiveInfo({ID:f,DeviceID:i,DeviceName:u,Name:v,LiveStatus:m})};return(r,f)=>(c(),d("div",{class:"flex",style:X({height:"calc(100% - 8px)"})},[a(e(g),{class:"w-342px m-r-8px flex-shrink-0",bordered:!1,bodyStyle:{height:"100%",padding:0}},{default:l(()=>[a(Z,{onSelect:_})]),_:1}),a(e(g),{class:"flex-1",bordered:!1,bodyStyle:{height:"100%",padding:"16px"}},{default:l(()=>[a(fe)]),_:1}),w("div",ye,[a(e(g),{class:"m-b-8px",bordered:!1,bodyStyle:{height:"230px",padding:0}},{default:l(()=>[a(me)]),_:1}),a(e(g),{style:{height:"calc(100% - 238px)"},bordered:!1,bodyStyle:{height:"100%",padding:0}},{default:l(()=>[a(xe)]),_:1})])],4))}});export{Pe as default};