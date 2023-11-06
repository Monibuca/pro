import{d as J,k as W,f as o,t as St,A as wt,h as Tt,o as Me,r as Re,w as De,e as oe,ab as Ot,x as kt,q as qe,s as It,F as Le,J as Pt,E as R,U as ot,V as lt,$ as I,u as m,a4 as Be,a8 as U}from"./vue-0f3866c3.js";import{v as $t,x as Nt,u as Ae,m as he,c as it,h as D,C as Dt,l as Lt,e as Bt,aq as Mt,_ as g,P as ne,ar as Rt,as as At,at as Ft,au as jt,av as Ht,aw as zt,ax as Vt,ay as Ut,a as fe,K as ce,az as Fe,aA as rt,k as le,aB as $e,w as pe,aC as Kt,aD as Gt,o as ie,aE as qt,ab as ue,aF as Wt,aG as Xt,aH as Jt,aI as Ce,am as st,an as We,Y as Yt,ao as Qt,a2 as Zt,B as ae,T as X,al as en,aJ as tn,ap as Xe,aK as nn,aL as an,aM as on,aN as ln}from"./index-0f1216c0.js";import"./dayjs-4778c158.js";import{a as ct,u as rn}from"./index-2339cc6f.js";import{u as ut}from"./formily-0e145bc1.js";import{T as sn}from"./index-4393de8e.js";import{T as Je}from"./index-dd92d4d1.js";import{C as de}from"./Card-b011a411.js";import{S as cn}from"./index-5531bca5.js";import{D as un}from"./DarkModeToggle-ee9b2779.js";import"./mockjs-890b569b.js";import"./index-1881fc2c.js";import"./index-ae87ec0e.js";import"./Checkbox-97923aad.js";import"./useFlexGapSupport-341b3ecd.js";var dn={success:Rt,info:At,error:Ft,warning:jt},pn={success:Ht,info:zt,error:Vt,warning:Ut},fn=Nt("success","info","warning","error"),vn=function(){return{type:ne.oneOf(fn),closable:{type:Boolean,default:void 0},closeText:ne.any,message:ne.any,description:ne.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:ne.any,closeIcon:ne.any,onClose:Function}},mn=J({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:vn(),setup:function(e,n){var a=n.slots,c=n.emit,s=n.attrs,u=n.expose,v=Ae("alert",e),h=v.prefixCls,l=v.direction,b=W(!1),E=W(!1),S=W(),P=function(p){p.preventDefault();var w=S.value;w.style.height="".concat(w.offsetHeight,"px"),w.style.height="".concat(w.offsetHeight,"px"),b.value=!0,c("close",p)},f=function(){var p;b.value=!1,E.value=!0,(p=e.afterClose)===null||p===void 0||p.call(e)};u({animationEnd:f});var y=W({});return function(){var r,p,w=e.banner,V=e.closeIcon,C=V===void 0?(r=a.closeIcon)===null||r===void 0?void 0:r.call(a):V,_=e.closable,T=e.type,$=e.showIcon,Y=he(a,e,"closeText"),A=he(a,e,"description"),Q=he(a,e,"message"),j=he(a,e,"icon");$=w&&$===void 0?!0:$,T=w&&T===void 0?"warning":T||"info";var Z=(A?pn:dn)[T]||null;Y&&(_=!0);var N=h.value,we=it(N,(p={},D(p,"".concat(N,"-").concat(T),!0),D(p,"".concat(N,"-closing"),b.value),D(p,"".concat(N,"-with-description"),!!A),D(p,"".concat(N,"-no-icon"),!$),D(p,"".concat(N,"-banner"),!!w),D(p,"".concat(N,"-closable"),_),D(p,"".concat(N,"-rtl"),l.value==="rtl"),p)),Te=_?o("button",{type:"button",onClick:P,class:"".concat(N,"-close-icon"),tabindex:0},[Y?o("span",{class:"".concat(N,"-close-text")},[Y]):C===void 0?o(Dt,null,null):C]):null,Oe=j&&(Lt(j)?Bt(j,{class:"".concat(N,"-icon")}):o("span",{class:"".concat(N,"-icon")},[j]))||o(Z,{class:"".concat(N,"-icon")},null),ke=Mt("".concat(N,"-motion"),{appear:!1,css:!0,onAfterLeave:f,onBeforeLeave:function(i){i.style.maxHeight="".concat(i.offsetHeight,"px")},onLeave:function(i){i.style.maxHeight="0px"}});return E.value?null:o(Tt,ke,{default:function(){return[St(o("div",g(g({role:"alert"},s),{},{style:[s.style,y.value],class:[s.class,we],"data-show":!b.value,ref:S}),[$?Oe:null,o("div",{class:"".concat(N,"-content")},[Q?o("div",{class:"".concat(N,"-message")},[Q]):null,A?o("div",{class:"".concat(N,"-description")},[A]):null]),Te]),[[wt,!b.value]])]}})}}});const yn=$t(mn);var gn=["noStyle","disabled"],bn={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},hn=J({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,n){var a=n.slots,c=n.emit,s=n.attrs,u=n.expose,v=W(),h=function(f){var y=f.keyCode;y===ce.ENTER&&f.preventDefault()},l=function(f){var y=f.keyCode;y===ce.ENTER&&c("click",f)},b=function(f){c("click",f)},E=function(){v.value&&v.value.focus()},S=function(){v.value&&v.value.blur()};return Me(function(){e.autofocus&&E()}),u({focus:E,blur:S}),function(){var P,f=e.noStyle,y=e.disabled,r=fe(e,gn),p={};return f||(p=g({},bn)),y&&(p.pointerEvents="none"),o("div",g(g(g({role:"button",tabindex:0,ref:v},r),s),{},{onClick:b,onKeydown:h,onKeyup:l,style:g(g({},p),s.style||{})}),[(P=a.default)===null||P===void 0?void 0:P.call(a)])}}});const Ye=hn;var Cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const xn=Cn;function Qe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable}))),a.forEach(function(c){En(t,c,n[c])})}return t}function En(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var je=function(e,n){var a=Qe({},e,n.attrs);return o(Fe,Qe({},a,{icon:xn}),null)};je.displayName="EnterOutlined";je.inheritAttrs=!1;const _n=je;var Sn=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},wn=J({compatConfig:{MODE:3},name:"Editable",props:Sn(),setup:function(e,n){var a=n.emit,c=n.slots,s=Re({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});De(function(){return e.value},function(r){s.current=r});var u=W();Me(function(){if(u.value){var r,p=(r=u.value)===null||r===void 0?void 0:r.resizableTextArea,w=p==null?void 0:p.textArea;w.focus();var V=w.value.length;w.setSelectionRange(V,V)}});function v(r){u.value=r}function h(r){var p=r.target.value;s.current=p.replace(/[\r\n]/g,""),a("change",s.current)}function l(){s.inComposition=!0}function b(){s.inComposition=!1}function E(r){var p=r.keyCode;p===ce.ENTER&&r.preventDefault(),!s.inComposition&&(s.lastKeyCode=p)}function S(r){var p=r.keyCode,w=r.ctrlKey,V=r.altKey,C=r.metaKey,_=r.shiftKey;s.lastKeyCode===p&&!s.inComposition&&!w&&!V&&!C&&!_&&(p===ce.ENTER?(f(),a("end")):p===ce.ESC&&(s.current=e.originContent,a("cancel")))}function P(){f()}function f(){a("save",s.current.trim())}var y=oe(function(){var r;return r={},D(r,"".concat(e.prefixCls),!0),D(r,"".concat(e.prefixCls,"-edit-content"),!0),D(r,"".concat(e.prefixCls,"-rtl"),e.direction==="rtl"),r});return function(){return o("div",{class:y.value},[o(sn,{ref:v,maxlength:e.maxlength,value:s.current,onChange:h,onKeydown:E,onKeyup:S,onCompositionstart:l,onCompositionend:b,onBlur:P,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),c.enterIcon?c.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):o(_n,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}});const Tn=wn;var On=3,kn=8,M,Ne={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function In(t){var e=Array.prototype.slice.apply(t);return e.map(function(n){return"".concat(n,": ").concat(t.getPropertyValue(n),";")}).join("")}function dt(t,e){t.setAttribute("aria-hidden","true");var n=window.getComputedStyle(e),a=In(n);t.setAttribute("style",a),t.style.position="fixed",t.style.left="0",t.style.height="auto",t.style.minHeight="auto",t.style.maxHeight="auto",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.borderTopWidth="0",t.style.borderBottomWidth="0",t.style.top="-999999px",t.style.zIndex="-1000",t.style.textOverflow="clip",t.style.whiteSpace="normal",t.style.webkitLineClamp="none"}function Pn(t){var e=document.createElement("div");dt(e,t),e.appendChild(document.createTextNode("text")),document.body.appendChild(e);var n=e.getBoundingClientRect().height;return document.body.removeChild(e),n}const $n=function(t,e,n,a,c){M||(M=document.createElement("div"),M.setAttribute("aria-hidden","true"),document.body.appendChild(M));var s=e.rows,u=e.suffix,v=u===void 0?"":u,h=Pn(t),l=Math.round(h*s*100)/100;dt(M,t);var b=Ot({render:function(){return o("div",{style:Ne},[o("span",{style:Ne},[n,v]),o("span",{style:Ne},[a])])}});b.mount(M);function E(){var C=Math.round(M.getBoundingClientRect().height*100)/100;return C-.1<=l}if(E())return b.unmount(),{content:n,text:M.innerHTML,ellipsis:!1};var S=Array.prototype.slice.apply(M.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(C){var _=C.nodeType,T=C.data;return _!==kn&&T!==""}),P=Array.prototype.slice.apply(M.childNodes[0].childNodes[1].cloneNode(!0).childNodes);b.unmount();var f=[];M.innerHTML="";var y=document.createElement("span");M.appendChild(y);var r=document.createTextNode(c+v);y.appendChild(r),P.forEach(function(C){M.appendChild(C)});function p(C){y.insertBefore(C,r)}function w(C,_){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,$=arguments.length>3&&arguments[3]!==void 0?arguments[3]:_.length,Y=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,A=Math.floor((T+$)/2),Q=_.slice(0,A);if(C.textContent=Q,T>=$-1)for(var j=$;j>=T;j-=1){var Z=_.slice(0,j);if(C.textContent=Z,E()||!Z)return j===_.length?{finished:!1,vNode:_}:{finished:!0,vNode:Z}}return E()?w(C,_,A,$,A):w(C,_,T,A,Y)}function V(C){var _=C.nodeType;if(_===On){var T=C.textContent||"",$=document.createTextNode(T);return p($),w($,T)}return{finished:!1,vNode:null}}return S.some(function(C){var _=V(C),T=_.finished,$=_.vNode;return $&&f.push($),T}),{content:f,text:M.innerHTML,ellipsis:!0}};var Nn=["prefixCls","class","direction","component"],Dn=function(){return{prefixCls:String,direction:String,component:String}},Ln=J({name:"ATypography",inheritAttrs:!1,props:Dn(),setup:function(e,n){var a=n.slots,c=n.attrs,s=Ae("typography",e),u=s.prefixCls,v=s.direction;return function(){var h,l=g(g({},e),c);l.prefixCls,l.class,l.direction;var b=l.component,E=b===void 0?"article":b,S=fe(l,Nn);return o(E,g({class:it(u.value,D({},"".concat(u.value,"-rtl"),v.value==="rtl"),c.class)},S),{default:function(){return[(h=a.default)===null||h===void 0?void 0:h.call(a)]}})}}});const F=Ln;var Bn=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,a=[],c=0;c<e.rangeCount;c++)a.push(e.getRangeAt(c));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||a.forEach(function(s){e.addRange(s)}),n&&n.focus()}};const Mn=Bn;var Ze={"text/plain":"Text","text/html":"Url",default:"Text"},Rn="Copy to clipboard: #{key}, Enter";function An(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Fn(t,e){var n,a,c,s,u,v=!1;e||(e={});var h=e.debug||!1;try{a=Mn(),c=document.createRange(),s=document.getSelection(),u=document.createElement("span"),u.textContent=t,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(b){if(b.stopPropagation(),e.format)if(b.preventDefault(),typeof b.clipboardData>"u"){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var E=Ze[e.format]||Ze.default;window.clipboardData.setData(E,t)}else b.clipboardData.clearData(),b.clipboardData.setData(e.format,t);e.onCopy&&(b.preventDefault(),e.onCopy(b.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),s.addRange(c);var l=document.execCommand("copy");if(!l)throw new Error("copy command was unsuccessful");v=!0}catch(b){h&&console.error("unable to copy using execCommand: ",b),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),v=!0}catch(E){h&&console.error("unable to copy using clipboardData: ",E),h&&console.error("falling back to prompt"),n=An("message"in e?e.message:Rn),window.prompt(n,t)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(c):s.removeAllRanges()),u&&document.body.removeChild(u),a()}return v}var jn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Hn=jn;function et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable}))),a.forEach(function(c){zn(t,c,n[c])})}return t}function zn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var He=function(e,n){var a=et({},e,n.attrs);return o(Fe,et({},a,{icon:Hn}),null)};He.displayName="CopyOutlined";He.inheritAttrs=!1;const Vn=He;var Un={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const Kn=Un;function tt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable}))),a.forEach(function(c){Gn(t,c,n[c])})}return t}function Gn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ze=function(e,n){var a=tt({},e,n.attrs);return o(Fe,tt({},a,{icon:Kn}),null)};ze.displayName="EditOutlined";ze.inheritAttrs=!1;const qn=ze;var Wn=["type","disabled","content","class","style"],Xn=rt("webkitLineClamp"),Jn=rt("textOverflow"),nt="...",ve=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},Yn=J({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:ve(),setup:function(e,n){var a=n.slots,c=n.attrs,s=n.emit,u=Ae("typography",e),v=u.prefixCls,h=u.direction,l=Re({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),b=W(),E=W(),S=oe(function(){var i=e.ellipsis;return i?g({rows:1,expandable:!1},le(i)==="object"?i:null):{}});Me(function(){l.clientRendered=!0}),kt(function(){clearTimeout(l.copyId),$e.cancel(l.rafId)}),De([function(){return S.value.rows},function(){return e.content}],function(){qe(function(){Q()})},{flush:"post",deep:!0,immediate:!0}),It(function(){e.content===void 0&&(pe(!e.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),pe(!e.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function P(){var i,d;return e.ellipsis||e.editable?e.content:(i=b.value)===null||i===void 0||(d=i.$el)===null||d===void 0?void 0:d.innerText}function f(i){var d=S.value.onExpand;l.expanded=!0,d==null||d(i)}function y(i){i.preventDefault(),l.originContent=e.content,A(!0)}function r(i){p(i),A(!1)}function p(i){var d=C.value.onChange;i!==e.content&&(s("update:content",i),d==null||d(i))}function w(){var i,d;(i=(d=C.value).onCancel)===null||i===void 0||i.call(d),A(!1)}function V(i){i.preventDefault(),i.stopPropagation();var d=e.copyable,x=g({},le(d)==="object"?d:null);x.text===void 0&&(x.text=P()),Fn(x.text||""),l.copied=!0,qe(function(){x.onCopy&&x.onCopy(),l.copyId=setTimeout(function(){l.copied=!1},3e3)})}var C=oe(function(){var i=e.editable;return i?g({},le(i)==="object"?i:null):{editing:!1}}),_=Kt(!1,{value:oe(function(){return C.value.editing})}),T=Gt(_,2),$=T[0],Y=T[1];function A(i){var d=C.value.onStart;i&&d&&d(),Y(i)}De($,function(i){if(!i){var d;(d=E.value)===null||d===void 0||d.focus()}},{flush:"post"});function Q(){$e.cancel(l.rafId),l.rafId=$e(function(){Z()})}var j=oe(function(){var i=S.value,d=i.rows,x=i.expandable,O=i.suffix,B=i.onEllipsis,k=i.tooltip;return O||k||e.editable||e.copyable||x||B?!1:d===1?Jn:Xn}),Z=function(){var d,x,O=l.ellipsisText,B=l.isEllipsis,k=S.value,L=k.rows,H=k.suffix,K=k.onEllipsis;if(!(!L||L<0||!((d=b.value)!==null&&d!==void 0&&d.$el)||l.expanded||e.content===void 0)&&!j.value){var z=$n((x=b.value)===null||x===void 0?void 0:x.$el,{rows:L,suffix:H},e.content,re(!0),nt),se=z.content,ee=z.text,G=z.ellipsis;(O!==ee||l.isEllipsis!==G)&&(l.ellipsisText=ee,l.ellipsisContent=se,l.isEllipsis=G,B!==G&&K&&K(G))}};function N(i,d){var x=i.mark,O=i.code,B=i.underline,k=i.delete,L=i.strong,H=i.keyboard,K=d;function z(se,ee){if(se){var G=function(){return K}();K=o(ee,null,{default:function(){return[G]}})}}return z(L,"strong"),z(B,"u"),z(k,"del"),z(O,"code"),z(x,"mark"),z(H,"kbd"),K}function we(i){var d=S.value,x=d.expandable,O=d.symbol;if(!x||!i&&(l.expanded||!l.isEllipsis))return null;var B=(a.ellipsisSymbol?a.ellipsisSymbol():O)||l.expandStr;return o("a",{key:"expand",class:"".concat(v.value,"-expand"),onClick:f,"aria-label":l.expandStr},[B])}function Te(){if(e.editable){var i=e.editable,d=i.tooltip,x=i.triggerType,O=x===void 0?["icon"]:x,B=a.editableIcon?a.editableIcon():o(qn,{role:"button"},null),k=a.editableTooltip?a.editableTooltip():l.editStr,L=typeof k=="string"?k:"";return O.indexOf("icon")!==-1?o(ue,{key:"edit",title:d===!1?"":k},{default:function(){return[o(Ye,{ref:E,class:"".concat(v.value,"-edit"),onClick:y,"aria-label":L},{default:function(){return[B]}})]}}):null}}function Oe(){if(e.copyable){var i=e.copyable.tooltip,d=l.copied?l.copiedStr:l.copyStr,x=a.copyableTooltip?a.copyableTooltip({copied:l.copied}):d,O=typeof x=="string"?x:"",B=l.copied?o(Xt,null,null):o(Vn,null,null),k=a.copyableIcon?a.copyableIcon({copied:!!l.copied}):B;return o(ue,{key:"copy",title:i===!1?"":x},{default:function(){return[o(Ye,{class:["".concat(v.value,"-copy"),D({},"".concat(v.value,"-copy-success"),l.copied)],onClick:V,"aria-label":O},{default:function(){return[k]}})]}})}}function ke(){var i=c.class,d=c.style,x=C.value,O=x.maxlength,B=x.autoSize,k=x.onEnd;return o(Tn,{class:i,style:d,prefixCls:v.value,value:e.content,originContent:l.originContent,maxlength:O,autoSize:B,onSave:r,onChange:p,onCancel:w,onEnd:k,direction:h.value},{enterIcon:a.editableEnterIcon})}function re(i){return[we(i),Te(),Oe()].filter(function(d){return d})}return function(){var i,d=C.value.triggerType,x=d===void 0?["icon"]:d,O=e.ellipsis||e.editable?e.content!==void 0?e.content:(i=a.default)===null||i===void 0?void 0:i.call(a):a.default?a.default():e.content;return $.value?ke():o(Wt,{componentName:"Text",children:function(k){var L,H=g(g({},e),c),K=H.type,z=H.disabled;H.content;var se=H.class,ee=H.style,G=fe(H,Wn),ye=S.value,q=ye.rows,Ue=ye.suffix,Ie=ye.tooltip,mt=k.edit,yt=k.copy,gt=k.copied,bt=k.expand;l.editStr=mt,l.copyStr=yt,l.copiedStr=gt,l.expandStr=bt;var ht=ie(G,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),ge=j.value,Ct=q===1&&ge,Ke=q&&q>1&&ge,te=O,xt;if(q&&l.isEllipsis&&!l.expanded&&!ge){var Pe,Ge=G.title,be=Ge||"";!Ge&&(typeof O=="string"||typeof O=="number")&&(be=String(O)),be=(Pe=be)===null||Pe===void 0?void 0:Pe.slice(String(l.ellipsisContent||"").length),te=o(Le,null,[Pt(l.ellipsisContent),o("span",{title:be,"aria-hidden":"true"},[nt]),Ue])}else te=o(Le,null,[O,Ue]);te=N(e,te);var Et=Ie&&q&&l.isEllipsis&&!l.expanded&&!ge,_t=a.ellipsisTooltip?a.ellipsisTooltip():Ie;return o(qt,{onResize:Q,disabled:!q},{default:function(){return[o(F,g({ref:b,class:[(L={},D(L,"".concat(v.value,"-").concat(K),K),D(L,"".concat(v.value,"-disabled"),z),D(L,"".concat(v.value,"-ellipsis"),q),D(L,"".concat(v.value,"-single-line"),q===1&&!l.isEllipsis),D(L,"".concat(v.value,"-ellipsis-single-line"),Ct),D(L,"".concat(v.value,"-ellipsis-multiple-line"),Ke),L),se],style:g(g({},ee),{},{WebkitLineClamp:Ke?q:void 0}),"aria-label":xt,direction:h.value,onClick:x.indexOf("text")!==-1?y:function(){}},ht),{default:function(){return[Et?o(ue,{title:Ie===!0?O:_t},{default:function(){return[o("span",null,[te])]}}):te,re()]}})]}})}},null)}}});const me=Yn;var Qn=["ellipsis","rel"],Zn=function(){return ie(g(g({},ve()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"])},xe=function(e,n){var a=n.slots,c=n.attrs,s=g(g({},e),c),u=s.ellipsis,v=s.rel,h=fe(s,Qn);pe(le(u)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var l=g(g({},h),{},{rel:v===void 0&&h.target==="_blank"?"noopener noreferrer":v,ellipsis:!!u,component:"a"});return delete l.navigate,o(me,l,a)};xe.displayName="ATypographyLink";xe.inheritAttrs=!1;xe.props=Zn();const pt=xe;var ea=function(){return ie(ve(),["component"])},Ee=function(e,n){var a=n.slots,c=n.attrs,s=g(g({},e),{},{component:"div"},c);return o(me,s,a)};Ee.displayName="ATypographyParagraph";Ee.inheritAttrs=!1;Ee.props=ea();const Ve=Ee;var ta=function(){return g(g({},ie(ve(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}})},_e=function(e,n){var a=n.slots,c=n.attrs,s=e.ellipsis;pe(le(s)!=="object"||!s||!("expandable"in s)&&!("rows"in s),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var u=g(g({},e),{},{ellipsis:s&&le(s)==="object"?ie(s,["expandable","rows"]):s,component:"span"},c);return o(me,u,a)};_e.displayName="ATypographyText";_e.inheritAttrs=!1;_e.props=ta();const ft=_e;var na=["level"],aa=Jt(1,2,3,4,5),oa=function(){return g(g({},ie(ve(),["component","strong"])),{},{level:Number})},Se=function(e,n){var a=n.slots,c=n.attrs,s=e.level,u=s===void 0?1:s,v=fe(e,na),h;aa.indexOf(u)!==-1?h="h".concat(u):(pe(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),h="h1");var l=g(g({},v),{},{component:h},c);return o(me,l,a)};Se.displayName="ATypographyTitle";Se.inheritAttrs=!1;Se.props=oa();const vt=Se;F.Text=ft;F.Title=vt;F.Paragraph=Ve;F.Link=pt;F.Base=me;F.install=function(t){return t.component(F.name,F),t.component(F.Text.displayName,ft),t.component(F.Title.displayName,vt),t.component(F.Paragraph.displayName,Ve),t.component(F.Link.displayName,pt),t};function la(t){return Ce.get({url:"/list",params:t},{errorMessageMode:"message"})}function ia(t){return Ce.get({url:"/add",params:t},{errorMessageMode:"message"})}function ra(t){return Ce.get({url:"/update",params:t},{errorMessageMode:"message"})}function sa(t){return Ce.get({url:"/del",params:t},{errorMessageMode:"message"})}const ca=()=>({type:"object",properties:{layout:{type:"void","x-component":"FormLayout","x-component-props":{layout:"horizontal",labelCol:6,wrapperCol:14},properties:{name:{type:"string",title:"实例名称","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"请输入实例名称",allowClear:!0},required:!0}}}}}),ua=()=>({type:"object",properties:{layout:{type:"void","x-component":"FormLayout","x-component-props":{layout:"horizontal",labelCol:6,wrapperCol:14},properties:{name:{type:"string",title:"实例名称","x-decorator":"FormItem","x-component":"Input","x-component-props":{placeholder:"请输入实例名称",allowClear:!0},required:!0},resetSecret:{type:"number",title:"是否重置秘钥","x-decorator":"FormItem","x-component":"Checkbox"}}}}}),{FormilyForm:da,form:pa,submit:fa}=ut({schema:ca()}),va=({updateList:t,pause:e,resume:n})=>{e(),ct({content:()=>o(da,null,null),modalConfig:{title:"新增实例",maskClosable:!1,onOk:async()=>{const a=await fa();return a?(await ia(a),st.success("添加成功"),t(),Promise.resolve(!0)):(n(),Promise.reject(!1))},onClose:()=>{pa.reset(),n()}}})},{FormilyForm:ma,form:at,submit:ya}=ut({schema:ua()}),ga=({row:t,updateList:e,pause:n,resume:a})=>{n();const{id:c,name:s}=t;at.setValues({name:s}),ct({content:()=>o(ma,null,null),modalConfig:{title:"新增",maskClosable:!1,onOk:async()=>{const u=await ya();return u?(await ra({id:c,...u}),st.success("编辑成功"),e(),Promise.resolve(!0)):(a(),Promise.reject(!1))},onClose:()=>{at.reset(),a()}}})},ba=J({__name:"list",setup(t){We.renderer.add("LineStatus",{renderDefault(f,y){const{row:r}=y;return[r.Online?o(Je,{color:"#87d068"},{default:()=>[R("在线")]}):o(Je,{color:"#ff99a0"},{default:()=>[R("离线")]})]}}),We.renderer.add("secretCopy",{renderDefault(f,y){const{row:r}=y;return[o(Ve,{copyable:!0,ellipsis:!0,content:r.Secret},null)]}});const e={padding:"4px"},n=Re({pageNum:1,pageSize:10,total:0}),a=rn(),c={height:"596px",pagerConfig:{pageSize:10},columns:[{field:"ID",title:"ID",width:"80px"},{field:"Name",title:"名称",showOverflow:"tooltip",width:"120px"},{field:"Secret",title:"秘钥",showOverflow:"tooltip",cellRender:{name:"secretCopy"}},{field:"Online",title:"状态",cellRender:{name:"LineStatus"},width:"80px"},{field:"CreatedAt",title:"创建时间",formatter:({cellValue:f})=>Xe.toDateString(new Date(f),"yyyy-MM-dd HH:ss:mm")},{field:"UpdatedAt",title:"更新时间",formatter:({cellValue:f})=>Xe.toDateString(new Date(f),"yyyy-MM-dd HH:ss:mm")},{field:"operate",title:"操作",width:"244px",slots:{default:"operate"},fixed:"right"}]},s={pageChange:({currentPage:f,pageSize:y})=>{n.pageNum=f,n.pageSize=y}},u=()=>{la(n).then(f=>{n.total=f.total,a.tableRef.loadData(f.list)}).catch(f=>{console.error(`instance-getList-error: ${f}`)})};u();const{httpRefreshTime:v}=Yt({VITE_PORT:"3000",VITE_GLOB_APP_TITLE:"Monibuca Admin",VITE_GLOB_APP_SHORT_NAME:"m7s_admin",VITE_USE_MOCK:"true",VITE_PUBLIC_PATH:"/ui",VITE_DROP_CONSOLE:"true",VITE_BUILD_COMPRESS:"none",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",VITE_GLOB_HTTP_REFRESH_TIME:"5000",VITE_USE_IMAGEMIN:"true",VITE_LEGACY:"false",VITE_M7S_SERVER:"",BASE_URL:"/ui",MODE:"production",DEV:!1,PROD:!0,SSR:!1}),{pause:h,resume:l}=Qt(()=>{u()},v),b=f=>{h();const{createConfirm:y,createMessage:r}=an();y({iconType:"warning",title:"删除提醒",content:`确定要删除 <b style="color: var(--primary-color)">${f.Name}</b> 实例吗`,onOk:async()=>{await sa({id:f.id}),r.success(`实例 ${f.name} 删除成功`),u(),l()},onCancel:()=>{l()}})},E=Zt(),S=(f,y=!1)=>{if(y)E({path:"/overview/detail",query:{m7sId:f}},!0);else{const{href:r}=nn.resolve({name:"Overview",query:{m7sId:f}});window.open(r,"_blank")}};function P(){E({path:"/overview/detail"})}return(f,y)=>(ot(),lt(Le,null,[o(m(de),{bordered:!1,class:"mb-4px",bodyStyle:e},{default:I(()=>[o(m(yn),{type:"info",banner:"",message:"当前已配置成自动注册，下级m7s可以自动注册到当前实例"})]),_:1}),o(m(de),{bordered:!1,class:"mb-4px",bodyStyle:e},{default:I(()=>[o(m(ae),{onClick:y[0]||(y[0]=r=>m(va)({updateList:u,pause:m(h),resume:m(l)}))},{icon:I(()=>[o(m(X),{icon:"fluent:add-square-20-filled",class:"v-text-bottom"})]),default:I(()=>[R(" 新增实例 ")]),_:1}),o(m(ae),{type:"primary",onClick:y[1]||(y[1]=r=>P())},{icon:I(()=>[o(m(X),{icon:"fluent:rocket-20-filled",class:"v-text-bottom"})]),default:I(()=>[R(" 进入当前实例 ")]),_:1})]),_:1}),o(m(de),{bordered:!1,bodyStyle:e},{default:I(()=>[o(m(en),{emptyText:"当前m7s实例下没有下级m7s实例",uid:m(a).uid,gridOptions:m(c),"grid-event":m(s)},{operate:I(({row:r})=>[o(m(cn),null,{default:I(()=>[o(m(ue),null,{title:I(()=>[R(Be(r.Online?"当前窗口打开":"只有实例状态在线时才可以访问详情"),1)]),default:I(()=>[o(m(ae),{size:"small",type:"link",onClick:p=>S(r.ID,!0),disabled:!r.Online},{default:I(()=>[R(" 详情 "),o(m(X),{icon:"tabler:exchange",class:"v-text-bottom"})]),_:2},1032,["onClick","disabled"])]),_:2},1024),o(m(ue),null,{title:I(()=>[R(Be(r.Online?"新窗口打开":"只有实例状态在线时才可以访问详情"),1)]),default:I(()=>[o(m(ae),{size:"small",type:"link",onClick:p=>S(r.ID),disabled:!r.Online},{default:I(()=>[R(" 详情 "),o(m(X),{class:"v-text-bottom",icon:"fluent:window-new-16-filled"})]),_:2},1032,["onClick","disabled"])]),_:2},1024),o(m(ae),{size:"small",type:"link",onClick:p=>m(ga)({row:r,updateList:u,pause:m(h),resume:m(l)})},{default:I(()=>[R(" 编辑 ")]),_:2},1032,["onClick"]),o(m(ae),{size:"small",type:"link",danger:"",onClick:p=>b(r)},{default:I(()=>[R(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),pager:I(()=>[o(m(tn),{layouts:["Sizes","PrevPage","Number","NextPage","Total"],"current-page":n.pageNum,"onUpdate:currentPage":y[2]||(y[2]=r=>n.pageNum=r),"page-size":n.pageSize,"onUpdate:pageSize":y[3]||(y[3]=r=>n.pageSize=r),total:n.total},null,8,["current-page","page-size","total"])]),_:1},8,["uid","gridOptions","grid-event"])]),_:1})],64))}});const ha={class:"h-100vh w-100vw flex-center",style:{background:"var(--layout-background)"}},Ca={class:"m-auto flex h-800px w-1300px"},xa={class:"h-full flex flex-col justify-between text-center"},Ea=["src"],_a=U("h2",{class:"mt-6px color-text"},"实例管理平台",-1),Sa={class:"color-text"},wa={class:"block mt-10px",href:"https://m7s.live/guide/introduction.html",target:"_blank"},Ta={class:"block mt-10px",href:"https://space.bilibili.com/328443019/channel/collectiondetail?sid=514619",target:"_blank"},Oa={class:"block mt-10px",href:"https://www.bilibili.com/video/BV1jg411H7qE/",target:"_blank"},ka={class:"block mt-10px",href:"https://github.com/Monibuca/plugin-gb28181",target:"_blank"},Ia=J({name:"Instance"}),Wa=J({...Ia,setup(t){const e=on(),n=oe(()=>{const{mail:a="",nickname:c=""}=e.getUserInfo||{};return{mail:a,nickname:c}});return(a,c)=>(ot(),lt("div",ha,[U("div",Ca,[o(m(de),{hoverable:"",class:"flex-1",bodyStyle:{height:"100%"}},{default:I(()=>[o(ba)]),_:1}),o(m(de),{class:"w-200px",hoverable:"",bodyStyle:{height:"100%"}},{default:I(()=>[U("div",xa,[U("div",null,[U("img",{src:m(ln),class:"w-120px"},null,8,Ea),_a,U("h4",Sa,Be(m(n).nickname||m(n).mail),1),o(m(un))]),U("div",null,[U("a",wa,[R(" 官方文档 "),o(m(X),{icon:"fluent:window-new-16-filled",class:"v-text-bottom"})]),U("a",Ta,[R(" 视频教程 "),o(m(X),{icon:"fluent:window-new-16-filled",class:"v-text-bottom"})]),U("a",Oa,[R(" RTS分享 "),o(m(X),{icon:"fluent:window-new-16-filled",class:"v-text-bottom"})]),U("a",ka,[R(" GB28181插件 "),o(m(X),{icon:"fluent:window-new-16-filled",class:"v-text-bottom"})])])])]),_:1})])]))}});export{Wa as default};
