import{f as t,E as r,d,k as x,w as S,S as f,a3 as g,W as _,an as w,U as y,V as p,u as o}from"./vue-db0e7353.js";import{W as n,ay as b,aA as D,az as B,B as v,aC as P}from"./index-a3873c66.js";import{u as k}from"./index-8b532adb.js";import"./dayjs-4778c158.js";import{_ as C}from"./scroll-tip.vue_vue_type_script_setup_true_lang-3bd94e76.js";import{c as E,a as T}from"./global-7782a904.js";import{c as O}from"./utils-6b60a9ac.js";import{S as F}from"./index-e495502e.js";import{C as W}from"./Card-3e30f616.js";import"./mockjs-890b569b.js";import"./useFlexGapSupport-a31804f7.js";const $={0:t("span",null,[t(n,{icon:"streamline:interface-page-controller-loading-half-progress-loading-load-half-wait-waiting",class:"v-text-bottom mr-8px"},null),r("等待发布者")]),1:t("span",null,[t(n,{icon:"guidance:waiting-room",class:"v-text-bottom mr-8px"},null),r("等待激活")]),2:t("span",null,[t(n,{icon:"ic:round-published-with-changes",color:"green",class:"v-text-bottom mr-8px"},null),r("发布中")]),3:t("span",null,[t(n,{icon:"bx:lock-open",class:"v-text-bottom mr-8px"},null),r("等待关闭")]),4:t("span",null,[t(n,{icon:"ic:baseline-lock",color:"red",class:"v-text-bottom mr-8px"},null),r("已关闭")])},M=d({__name:"detail",props:{streamPath:null},setup(s){const u=s,c=x({});return S(()=>u.streamPath,a=>{a&&E({streamPath:a}).then(m=>{c.value=m||{}})},{immediate:!0}),(a,m)=>(f(),g("p",null,"详情"+_(c.value),1))}}),V=({row:s})=>{b({content:t(M,{streamPath:s.Path},null),modalConfig:{width:"90%",title:`${s.Path} 流详情`,okButtonProps:{style:{display:"none"}},cancelText:"关闭",maskClosable:!1}})},z=d({name:"StreamPush"}),J=d({...z,setup(s){D.renderer.add("State",{renderDefault(e,l){const{row:i}=l;return $[i.State]}});const u=k(),c=e=>{e.length>1&&(e=e.sort((l,i)=>Date.parse(l.StartTime)-Date.parse(i.StartTime))),u.tableRef.reloadData(e)};let a;function m(){a=T(e=>{c(e.Streams||[])})}m(),w(e=>{const{path:l}=e;l!=="/overview/detail"&&(a==null||a())});const h={maxHeight:"100%",rowConfig:{keyField:"Path",useKey:!0},columnConfig:{useKey:!0},columns:[{field:"Path",title:"StreamPath",showOverflow:"tooltip",minWidth:"340px"},{field:"State",title:"状态",showOverflow:"tooltip",cellRender:{name:"State"}},{field:"Type",title:"类型",showOverflow:"tooltip"},{field:"Subscribers",title:"订阅数量",showOverflow:"tooltip",width:"100px"},{field:"StartTime",title:"创建时间",minWidth:"100px",formatter:({cellValue:e})=>P.toDateString(new Date(e),"yyyy-MM-dd HH:ss:mm")},{field:"BPS",title:"BPS",formatter:({cellValue:e})=>`${O(e)}/s`},{field:"operate",title:"操作",width:"80px",fixed:"right",slots:{default:"operate"}}],data:[]};return(e,l)=>(f(),y(o(W),{bordered:!1,bodyStyle:{padding:"10px",height:"calc(100% - 50px)"},style:{height:"calc(100% - 100px)"}},{default:p(()=>[t(o(C),{windowWidth:1716}),t(o(B),{uid:o(u).uid,gridOptions:o(h)},{operate:p(({row:i})=>[t(o(F),null,{default:p(()=>[t(o(v),{size:"small",type:"link",onClick:()=>o(V)({row:i})},{default:p(()=>[r(" 详情 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["uid","gridOptions"])]),_:1},8,["bodyStyle"]))}});export{J as default};