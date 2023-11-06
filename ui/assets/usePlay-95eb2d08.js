import{bn as b}from"./index-0f1216c0.js";import{O as C,r as y}from"./vue-0f3866c3.js";import"./dayjs-4778c158.js";import{W as A,b as N,D as E,F as L,c as k,d as R,A as T,e as g,f as v,h as I}from"./jb4-df322d33.js";const M=C({id:"screen-store",persist:{paths:["customInfo"]},state:()=>({activeInfo:{ID:"",DeviceID:"",DeviceName:"",Name:"",LiveStatus:0},customInfo:{collapsed:!1,rowNum:1,screenNum:1,selectNum:0}}),getters:{getActiveInfo(){return this.activeInfo}},actions:{setActiveInfo(t){this.activeInfo=t},setCustomInfo(t){const d=Object.assign(this.customInfo,t);this.customInfo=d}}});function O(){const t=y([]);if(location.protocol==="http:"&&location.hostname!=="localhost")return{webrtc:!1,streamList:t,changeStreamList:e=>{t.length=0,t.push(...e)},delItem:e=>{t[e].path="",delete t[e].item,delete t[e].stream},closeAll:()=>{t.length=0},updateItem:async(e,a)=>{let s,o;typeof e!="string"?(s=e,o=`${e.ID}/${e.DeviceID}`):o=e,t[a].path=o,t[a].item=s}};let d;const l=new Map;let i,c;const p=async()=>{const e=t.filter(a=>a.path);for(const a of e)if(l.has(a.path))a.stream||(a.stream=l.get(a.path));else{const s=new A(a.path);i||await S(),i.addStream(s),a.stream=s,l.set(a.path,a.stream)}if(e.length){const a=new Set(e.map(o=>o.path)),s=await c.createOffer();await c.setLocalDescription(s),d.send(JSON.stringify({type:"subscribe",offer:s.sdp,streamList:[...a]}))}else i&&(i.close(),i=null,l.clear())},S=async()=>new Promise(e=>{i=new N(b("webrtc","/batch")),c=i.webrtc,d=c.createDataChannel("signal"),d.onmessage=async a=>{const s=JSON.parse(a.data);switch(s.type){case"answer":c.setRemoteDescription(new RTCSessionDescription(s));break;case"remove":i.deleteStream(s.streamPath),l.delete(s.streamPath);break;case"offer":await c.setRemoteDescription(new RTCSessionDescription(s));const o=await c.createAnswer();await c.setLocalDescription(o),d.send(JSON.stringify(o))}},d.onopen=e,c.ondatachannel=async a=>{const s=a.channel,o=l.get(s.label);if(o){let h,D;const u=new E(s),w=new L(u,k.PUSH);w.gotVideo=n=>m.decode(n),w.gotAudio=n=>f.decode(n);const m=new R,f=new T;await m.initialize(),await f.initialize(),w.on(g.VIDEO_ENCODER_CONFIG_CHANGED,n=>{m.configure(n)}),w.on(g.AUDIO_ENCODER_CONFIG_CHANGED,n=>{f.configure(n)}),m.on(v.Error,n=>{console.error(n),m.initialize()}),m.on(v.VideoFrame,n=>{if(!h){const r=new MediaStreamTrackGenerator({kind:"video"});o.videoTrack=r,h=r.writable.getWriter()}h.write(n).catch(r=>{console.error(r),m.close(),u.close()})}),f.on(I.Error,n=>{console.error(n),f.initialize()}),f.on(I.AudioFrame,n=>{if(!D){const r=new MediaStreamTrackGenerator({kind:"audio"});o.audioTrack=r,D=r.writable.getWriter()}D.write(n).catch(r=>{console.error(r),f.close(),u.close()})}),u.connect()}},i.connect()});return{webrtc:!0,changeStreamList:e=>{t.length=0,t.push(...e),p()},streamList:t,updateItem:async(e,a)=>{let s,o;typeof e!="string"?(s=e,o=`${e.ID}/${e.DeviceID}`):o=e,t[a].path=o,t[a].item=s,t[a].stream=l.get(o),await p()},delItem:async e=>{t[e].path="",delete t[e].item,delete t[e].stream,await p()},closeAll:()=>{i==null||i.close(),i=null,t.length=0,l.clear()}}}export{O as a,M as u};
