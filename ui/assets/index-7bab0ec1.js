import{l as $,j as _,b as o,bT as h,u as T,bU as A,o as j,a4 as E,P as m,bV as I,ba as g}from"./index-aad18627.js";import{d as O,k as R,e as z,f as i,F}from"./vue-c6b19427.js";var V=function(){return o(o({},I()),{},{content:m.any,title:m.any})},k=O({compatConfig:{MODE:3},name:"APopover",props:_(V(),o(o({},h()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(a,p){var y=p.expose,n=p.slots,v=R();y({getPopupDomNode:function(){var t,e;return(t=v.value)===null||t===void 0||(e=t.getPopupDomNode)===null||e===void 0?void 0:e.call(t)}});var u=T("popover",a),l=u.prefixCls,C=u.configProvider,b=z(function(){return C.getPrefixCls()}),x=function(){var t,e,c=a.title,r=c===void 0?g((t=n.title)===null||t===void 0?void 0:t.call(n)):c,f=a.content,s=f===void 0?g((e=n.content)===null||e===void 0?void 0:e.call(n)):f,d=!!(Array.isArray(r)?r.length:r),N=!!(Array.isArray(s)?s.length:r);if(!(!d&&!N))return i(F,null,[d&&i("div",{class:"".concat(l.value,"-title")},[r]),i("div",{class:"".concat(l.value,"-inner-content")},[s])])};return function(){return i(E,o(o({},j(a,["title","content"])),{},{prefixCls:l.value,ref:v,transitionName:A(b.value,"zoom-big",a.transitionName)}),{title:x,default:n.default})}}});const M=$(k);export{M as P};