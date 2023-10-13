import{d as R,k as C,r as I,s as P,o as M,x as V,S as x,a3 as G,t as H,A as F,f as B,u as W,ac as $}from"./vue-12defb16.js";import{C as O,B as L,b as Y,D as w,V as j,A as q,W as z,c as y,d as J,e as K,f as Q,F as A,h as D}from"./device-fff3723f.js";import"./dayjs-4778c158.js";import{bp as T,bq as X,br as Z,a0 as ee}from"./index-c0a17768.js";class te extends O{async _connect(){const e=new WebSocket(this.url);return this.ws=e,e.binaryType="arraybuffer",new Promise((t,n)=>{e.onerror=n,e.onopen=()=>{t(new ReadableStream({start:a=>{e.onclose=r=>a.error(r),e.onmessage=r=>a.enqueue(r.data)}}))}})}_close(){var e;(e=this.ws)==null||e.close(1e3,"close")}_send(e){var t;(t=this.ws)==null||t.send(e)}}class ae extends O{async _connect(){const e=await fetch(this.url,{...this.options.requestInit,signal:this.abortCtrl.signal});if(!e.body)throw new Error("no body");return e.body}}const oe=442,se=443,ne=444,re=480,ie=448,ce=445,de=441,le=27,ue=36,he=15,fe=144,me=145;class pe extends L{constructor(){super(...arguments),this.videoStreamType=0,this.audioStreamType=0,this.pts=0,this.dts=0}pull(){throw new Error("Method not implemented.")}*demux(){var i,c,d,u,p;let e=0;const t=new Uint8Array(4),n=new DataView(t.buffer),a=[];let r=0,o=0;for(;;){yield t;const s=n.getUint32(0);switch(s.toString(16),s){case oe:yield 9,yield t.subarray(0,1),yield n.getUint8(0)&7;break;case se:case ce:yield t.subarray(0,2),yield n.getUint16(0);break;case ne:yield t.subarray(0,2);const _=yield n.getUint16(0);this.decProgramStreamMap(_);break;case re:yield t.subarray(0,2);const E=n.getUint16(0),U=yield E,f=this.parsePESPacket(U);if(f.length,!e)if((f[4]&15)==7)e=Date.now(),o=this.pts;else break;if(o==this.pts){r+=f.length,a.push(f.slice());break}if(a.length&&o!=this.pts){let m=0;(i=this.gotVideo)==null||i.call(this,{type:(a[0][4]&15)==1?"delta":"key",data:a.length==1?a[0]:a.reduce((v,k)=>(v.subarray(m).set(k),m+=k.length,v),new Uint8Array(r)),timestamp:(Date.now()-e)*1e3}),a.length=0}r+=f.length,a.push(f.slice()),o=this.pts;break;case ie:yield t.subarray(0,2);const N=yield n.getUint16(0),S=this.parsePESPacket(N);if(((c=this.audioDecoderConfig)==null?void 0:c.codec)=="aac"&&!((d=this.audioDecoderConfig)!=null&&d.description)){const m=Y(S.subarray(7));this.audioDecoderConfig={codec:"aac",description:m.audioSpecificConfig,sampleRate:m.sampleRate,numberOfChannels:m.channel},this.emit(w.AUDIO_ENCODER_CONFIG_CHANGED,this.audioDecoderConfig)}(p=this.gotAudio)==null||p.call(this,{type:"key",data:((u=this.audioDecoderConfig)==null?void 0:u.codec)=="aac"?S.subarray(7):S,timestamp:this.dts,duration:0});break;case de:return;default:debugger}}}parsePESPacket(e){if(e.length<4)throw new Error("Short buffer");const t=e[1],n=t>>7==1,a=(t&64)>>6==1,r=e[2];if(e.length<r+3)throw new Error("Short buffer");const o=e.subarray(3,3+r);return n&&o.length>4&&(this.pts=(o[0]&14)<<29|o[1]<<22|(o[2]&254)<<14|o[3]<<7|o[4]>>1,a&&o.length>9?this.dts=(o[5]&14)<<29|o[6]<<22|(o[7]&254)<<14|o[8]<<7|o[9]>>1:this.dts=this.pts),e.subarray(3+r)}decProgramStreamMap(e){const t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=e.length;let a=2;const r=t.getUint16(a);a+=2,a+=r;let o=t.getUint16(a);for(a+=2;o>0&&!(n<=a+1);){const i=e[a];a++;const c=e[a];if(a++,c>=224&&c<=239?(this.videoStreamType=i,this.videoDecoderConfig={codec:{[le]:"avc",[ue]:"hevc"}[i]||"unknown"},this.emit(w.VIDEO_ENCODER_CONFIG_CHANGED,this.videoDecoderConfig)):c>=192&&c<=223&&(this.audioStreamType=i,this.audioDecoderConfig={codec:{[he]:"aac",[fe]:"pcma",[me]:"pcmu"}[i]||"unknown",numberOfChannels:1,sampleRate:8e3},this.audioDecoderConfig.codec!="aac"&&this.emit(w.AUDIO_ENCODER_CONFIG_CHANGED,this.audioDecoderConfig)),n<=a+1)break;const d=t.getUint16(a);a+=2,a+=d,o-=4+d}}}const ge={class:"video-container"},we=["srcObject"],be=R({__name:"jb4",props:{streamPath:null,format:null},setup(b){const e=b;let t;const n=C();let a,r;const o=C(),i=new j,c=new q,d=I(new z(""));i.on(y.VideoCodecInfo,s=>{}),i.on(y.VideoFrame,s=>{r.write(s)}),c.on(J.AudioFrame,s=>{a.write(s)}),i.on(y.Error,s=>{console.error(s)}),P(()=>{d.mediaStream&&(o.value=d.mediaStream)}),P(async()=>{if(e.streamPath){switch(t&&(i.close(),c.close(),await t.close()),await i.initialize(),await c.initialize(),e.format){case"ps":t=new te(`${location.protocol.replace("http","ws")}//${location.host}/ps/${e.streamPath}`),u(new pe(t,D.PUSH));break;case"flv":t=new ae(`${T("hdl","")}/${e.streamPath}.flv`),u(new A(t,D.PUSH));break;case"webrtc":const s=new K(`${T("webrtc","/play")}/${e.streamPath}`);t=s;const h=s.webrtc;d.id=e.streamPath,s.addStream(d),h.ondatachannel=g=>{const l=g.channel,_=new Q(l);u(new A(_,D.PUSH)),_.connect()};break}await t.connect()}});function u(s){const h=new MediaStreamTrackGenerator({kind:"audio"});a=h.writable.getWriter();const g=new MediaStreamTrackGenerator({kind:"video"});r=g.writable.getWriter(),o.value=new MediaStream([h,g]),s.on(w.VIDEO_ENCODER_CONFIG_CHANGED,l=>{i.configure(l)}),s.on(w.AUDIO_ENCODER_CONFIG_CHANGED,l=>{c.configure(l)}),s.gotVideo=l=>i.decode(l),s.gotAudio=l=>c.decode(l)}const p=C(!0);return M(()=>{X(n.value,"canplay",()=>{p.value=!1})}),V(()=>t==null?void 0:t.close()),(s,h)=>(x(),G("div",ge,[H(B(W(Z),{class:"loading",size:"large"},null,512),[[F,p.value]]),$("video",{ref_key:"videoEle",ref:n,class:"video",srcObject:o.value,autoplay:""},null,8,we)]))}});const Ee=ee(be,[["__scopeId","data-v-8dde21ae"]]);export{Ee as V};
