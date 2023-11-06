import{d as p,an as S,U as _,_ as w,$ as i,f as r,u as e,E as n}from"./vue-0f3866c3.js";import{an as y,a2 as g,al as x,B as m,ap as C}from"./index-0f1216c0.js";import{u as k}from"./index-2339cc6f.js";import"./dayjs-4778c158.js";import{_ as P,u as b}from"./usePlay-f4275dfe.js";import{a as B}from"./global-aaa411ed.js";import{c as D}from"./utils-2662f14c.js";import{s as v}from"./state-80a743f5.js";import{S as O}from"./index-5531bca5.js";import{C as T}from"./Card-b011a411.js";import"./mockjs-890b569b.js";import"./index-4409a03f.js";import"./index-3a414516.js";import"./index-b778e87c.js";import"./index-1881fc2c.js";import"./useFlexGapSupport-341b3ecd.js";import"./jb4-df322d33.js";import"./index-a3a00587.js";const $=p({name:"StreamPush"}),Y=p({...$,setup(E){y.renderer.add("State",{renderDefault(t,o){const{row:a}=o;return v[a.State]}});const l=k(),d=t=>{t.length>1&&(t=t.sort((o,a)=>Date.parse(o.StartTime)-Date.parse(a.StartTime))),l.tableRef.reloadData(t)};let s;function f(){s=B(t=>{d(t.Streams||[])})}f(),S(t=>{const{path:o}=t;o!=="/overview/detail"&&(s==null||s())});const u={maxHeight:"100%",rowConfig:{keyField:"Path",useKey:!0},columnConfig:{useKey:!0},columns:[{field:"Path",title:"StreamPath",showOverflow:"tooltip",minWidth:"340px"},{field:"State",title:"状态",showOverflow:"tooltip",cellRender:{name:"State"}},{field:"Type",title:"类型",showOverflow:"tooltip"},{field:"Subscribers",title:"订阅数量",showOverflow:"tooltip",width:"100px"},{field:"StartTime",title:"创建时间",minWidth:"100px",formatter:({cellValue:t})=>C.toDateString(new Date(t),"yyyy-MM-dd HH:ss:mm")},{field:"BPS",title:"BPS",formatter:({cellValue:t})=>`${D(t)}/s`},{field:"operate",title:"操作",width:"120px",align:"center",slots:{default:"operate"}}],data:[]},c=g(),h=t=>{c(`/stream-push/detail/${encodeURIComponent(t)}`)};return(t,o)=>(_(),w(e(T),{bordered:!1,bodyStyle:{padding:"10px",height:"100%"},style:{height:"100% - 100px)"}},{default:i(()=>[r(e(P),{windowWidth:1716}),r(e(x),{uid:e(l).uid,gridOptions:e(u)},{operate:i(({row:a})=>[r(e(O),null,{default:i(()=>[r(e(m),{size:"small",type:"link",onClick:()=>e(b)({path:a.Path})},{default:i(()=>[n(" 播放 ")]),_:2},1032,["onClick"]),r(e(m),{size:"small",type:"link",onClick:()=>h(a.Path)},{default:i(()=>[n(" 详情 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["uid","gridOptions"])]),_:1}))}});export{Y as default};