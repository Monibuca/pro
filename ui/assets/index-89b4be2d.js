import{v as _,i as $,_ as o,bE as h,u as A,bF as T,o as E,ab as j,P as m,bG as F,be as g}from"./index-11d05838.js";import{d as I,k as O,e as R,f as i,F as z}from"./vue-c6b19427.js";var k=function(){return o(o({},F()),{},{content:m.any,title:m.any})},w=I({compatConfig:{MODE:3},name:"APopover",props:$(k(),o(o({},h()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(a,v){var y=v.expose,n=v.slots,p=O();y({getPopupDomNode:function(){var t,e;return(t=p.value)===null||t===void 0||(e=t.getPopupDomNode)===null||e===void 0?void 0:e.call(t)}});var u=A("popover",a),l=u.prefixCls,C=u.configProvider,b=R(function(){return C.getPrefixCls()}),x=function(){var t,e,c=a.title,r=c===void 0?g((t=n.title)===null||t===void 0?void 0:t.call(n)):c,f=a.content,s=f===void 0?g((e=n.content)===null||e===void 0?void 0:e.call(n)):f,d=!!(Array.isArray(r)?r.length:r),N=!!(Array.isArray(s)?s.length:r);if(!(!d&&!N))return i(z,null,[d&&i("div",{class:"".concat(l.value,"-title")},[r]),i("div",{class:"".concat(l.value,"-inner-content")},[s])])};return function(){return i(j,o(o({},E(a,["title","content"])),{},{prefixCls:l.value,ref:p,transitionName:T(b.value,"zoom-big",a.transitionName)}),{title:x,default:n.default})}}});const M=_(w);export{M as P};
