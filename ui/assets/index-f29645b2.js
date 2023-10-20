import{ap as E,u as D,bk as re,d as y,e as j,_ as ge,i as pe,bl as me,c as Q,P as f,z as X,f as he}from"./index-a3873c66.js";import{f as s,d as B,k as w,p as ae,e as be,c as ye,w as Y,o as Oe,x as xe}from"./vue-db0e7353.js";var Ce=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};const Se=Ce;var we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};const Le=we;function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Pe(t,a,n[a])})}return t}function Pe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var F=function(e,n){var r=Z({},e,n.attrs);return s(E,Z({},r,{icon:Le}),null)};F.displayName="RightOutlined";F.inheritAttrs=!1;const K=F;var Ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};const je=Ne;function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){Be(t,a,n[a])})}return t}function Be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=function(e,n){var r=q({},e,n.attrs);return s(E,q({},r,{icon:je}),null)};T.displayName="LeftOutlined";T.inheritAttrs=!1;const ee=T;var R=function(){return{prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String}};function A(t){var e=t.suffixCls,n=t.tagName,r=t.name;return function(a){var v=B({compatConfig:{MODE:3},name:r,props:R(),setup:function(O,p){var i=p.slots,u=D(e,O),d=u.prefixCls;return function(){var $=j(j({},O),{},{prefixCls:d.value,tagName:n});return s(a,$,i)}}});return v}}var I=B({compatConfig:{MODE:3},props:R(),setup:function(e,n){var r=n.slots;return function(){return s(e.tagName,{class:e.prefixCls},r)}}}),Ae=B({compatConfig:{MODE:3},props:R(),setup:function(e,n){var r=n.slots,a=D("",e),v=a.direction,g=w([]),O={addSider:function(u){g.value=[].concat(ge(g.value),[u])},removeSider:function(u){g.value=g.value.filter(function(d){return d!==u})}};ae(re,O);var p=be(function(){var i,u=e.prefixCls,d=e.hasSider;return i={},y(i,"".concat(u),!0),y(i,"".concat(u,"-has-sider"),typeof d=="boolean"?d:g.value.length>0),y(i,"".concat(u,"-rtl"),v.value==="rtl"),i});return function(){var i=e.tagName;return s(i,{class:p.value},r)}}}),$e=A({suffixCls:"layout",tagName:"section",name:"ALayout"})(Ae),L=A({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(I),W=A({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(I),P=A({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(I);const M=$e;var ze={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const ke=ze;function te(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){He(t,a,n[a])})}return t}function He(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(e,n){var r=te({},e,n.attrs);return s(E,te({},r,{icon:ke}),null)};_.displayName="BarsOutlined";_.inheritAttrs=!1;const We=_;var ne={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},Me=function(){return{prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:f.any,width:f.oneOfType([f.number,f.string]),collapsedWidth:f.oneOfType([f.number,f.string]),breakpoint:f.oneOf(X("xs","sm","md","lg","xl","xxl","xxxl")),theme:f.oneOf(X("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}},Ee=function(){var t=0;return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t+=1,"".concat(e).concat(t)}}();const N=B({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:pe(Me(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup:function(e,n){var r=n.emit,a=n.attrs,v=n.slots,g=D("layout-sider",e),O=g.prefixCls,p=ye(re,void 0),i=w(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),u=w(!1);Y(function(){return e.collapsed},function(){i.value=!!e.collapsed}),ae(me,i);var d=function(l,h){e.collapsed===void 0&&(i.value=l),r("update:collapsed",l),r("collapse",l,h)},$=w(function(o){u.value=o.matches,r("breakpoint",o.matches),i.value!==o.matches&&d(o.matches,"responsive")}),m;function b(o){return $.value(o)}var V=Ee("ant-sider-");p&&p.addSider(V),Oe(function(){Y(function(){return e.breakpoint},function(){try{var o;(o=m)===null||o===void 0||o.removeEventListener("change",b)}catch{var l;(l=m)===null||l===void 0||l.removeListener(b)}if(typeof window<"u"){var h=window,c=h.matchMedia;if(c&&e.breakpoint&&e.breakpoint in ne){m=c("(max-width: ".concat(ne[e.breakpoint],")"));try{m.addEventListener("change",b)}catch{m.addListener(b)}b(m)}}},{immediate:!0})}),xe(function(){try{var o;(o=m)===null||o===void 0||o.removeEventListener("change",b)}catch{var l;(l=m)===null||l===void 0||l.removeListener(b)}p&&p.removeSider(V)});var U=function(){d(!i.value,"clickTrigger")};return function(){var o,l,h,c=O.value,C=e.collapsedWidth,ie=e.width,z=e.reverseArrow,oe=e.zeroWidthTriggerStyle,G=e.trigger,S=G===void 0?(o=v.trigger)===null||o===void 0?void 0:o.call(v):G,J=e.collapsible,le=e.theme,k=i.value?C:ie,x=Se(k)?"".concat(k,"px"):String(k),H=parseFloat(String(C||0))===0?s("span",{onClick:U,class:Q("".concat(c,"-zero-width-trigger"),"".concat(c,"-zero-width-trigger-").concat(z?"right":"left")),style:oe},[S||s(We,null,null)]):null,se={expanded:z?s(K,null,null):s(ee,null,null),collapsed:z?s(ee,null,null):s(K,null,null)},ue=i.value?"collapsed":"expanded",ce=se[ue],de=S!==null?H||s("div",{class:"".concat(c,"-trigger"),onClick:U,style:{width:x}},[S||ce]):null,fe=[a.style,{flex:"0 0 ".concat(x),maxWidth:x,minWidth:x,width:x}],ve=Q(c,"".concat(c,"-").concat(le),(l={},y(l,"".concat(c,"-collapsed"),!!i.value),y(l,"".concat(c,"-has-trigger"),J&&S!==null&&!H),y(l,"".concat(c,"-below"),!!u.value),y(l,"".concat(c,"-zero-width"),parseFloat(x)===0),l),a.class);return s("aside",j(j({},a),{},{class:ve,style:fe}),[s("div",{class:"".concat(c,"-children")},[(h=v.default)===null||h===void 0?void 0:h.call(v)]),J||u.value&&H?de:null])}}});var Te=L,Re=N,Ie=P;const _e=he(M,{Header:L,Footer:W,Content:P,Sider:N,install:function(e){return e.component(M.name,M),e.component(L.name,L),e.component(W.name,W),e.component(N.name,N),e.component(P.name,P),e}});export{Re as L,K as R,_e as a,Te as b,Ie as c};
