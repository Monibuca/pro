import"./index-0f1216c0.js";import{O as v}from"./vue-0f3866c3.js";import"./dayjs-4778c158.js";import{j as o}from"./jb4-df322d33.js";const I=v({id:"app-device-store",state:()=>({deviceList:[],deviceTree:[],deviceArr:[]}),actions:{setDeviceList(e){this.deviceList=e},setDeviceTree(e){this.deviceTree=e},setDeviceArr(e){this.deviceArr=e},async fetchDeviceList(){const e=await o();e.length>1&&e.sort((t,r)=>Number(t.ID)-Number(r.ID)),e.map(t=>{var r;return((r=t.Channels)==null?void 0:r.length)>1&&t.Channels.sort((s,n)=>Number(s.Name)-Number(n.Name)),t}),this.setDeviceList(e||[])},async fetchdeviceTree(){const e=await o();e.length>1&&e.sort((s,n)=>Number(s.ID)-Number(n.ID)),e.map(s=>{var n;return((n=s.Channels)==null?void 0:n.length)>1&&s.Channels.sort((c,i)=>Number(c.Name)-Number(i.Name)),s});const t=l(e)||[];this.setDeviceTree(t);const r=u(t);this.setDeviceArr(r)}}});function l(e){const t=[];return e!=null&&e.length&&e.map(({Channels:r,ID:s,Name:n})=>{t.push({title:n||s,key:s,ID:s,DeviceName:n,children:h(r,{ID:s,DeviceName:n}),selectable:!1})}),t}const h=(e,t)=>{const r=[];if(e!=null&&e.length){const s=JSON.parse(JSON.stringify(e)),n=s.reduce((c,i)=>(i.children=[],c[i.DeviceID]=i,c),{});s.forEach(c=>{const i={title:c.Name||c.DeviceID,key:`${c.DeviceID}-${c.ParentID||t.ID}`,children:[],Name:c.Name,DeviceID:c.DeviceID,ID:t.ID,DeviceName:t.DeviceName,selectable:!0,LiveStatus:c==null?void 0:c.LiveStatus,disabled:!1};let a=null;r!=null&&r.length&&!(a=r.filter(D=>D.DeviceID===D.ParentID)[0])&&(a=n[c.DeviceID]),a?(a.selectable=!1,a.children.push(i),(!r.length||!r.some(D=>D.DeviceID===a.DeviceID))&&r.push(i)):r.push(i)})}return r};function u(e){return e.reduce((t,r)=>{const{children:s=[],...n}=r;return t.concat([{...n}],u(s))},[])}export{I as u};
