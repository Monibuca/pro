import{ay as E,e as $,b4 as q,s as W,l as J,u as K,i as Q,d as X,o as Y,b as L,aB as Z,b1 as U}from"./index-aad18627.js";import{d as k,k as z,r as ee,g as te,e as I,w as F,o as ne,a as ae,b as ie,f as b}from"./vue-c6b19427.js";function H(n){var e,t=function(l){return function(){e=null,n.apply(void 0,$(l))}},a=function(){if(e==null){for(var l=arguments.length,d=new Array(l),c=0;c<l;c++)d[c]=arguments[c];e=E(t(d))}};return a.cancel=function(){return E.cancel(e)},a}function T(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function R(n,e,t){if(t!==void 0&&e.top>n.top-t)return"".concat(t+e.top,"px")}function M(n,e,t){if(t!==void 0&&e.bottom<n.bottom+t){var a=window.innerHeight-e.bottom;return"".concat(t+a,"px")}}var G=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],y=[];function j(n,e){if(n){var t=y.find(function(a){return a.target===n});t?t.affixList.push(e):(t={target:n,affixList:[e],eventHandlers:{}},y.push(t),G.forEach(function(a){t.eventHandlers[a]=q(n,a,function(){t.affixList.forEach(function(s){var l=s.exposed.lazyUpdatePosition;l()},(a==="touchstart"||a==="touchmove")&&W?{passive:!0}:!1)})}))}}function D(n){var e=y.find(function(t){var a=t.affixList.some(function(s){return s===n});return a&&(t.affixList=t.affixList.filter(function(s){return s!==n})),a});e&&e.affixList.length===0&&(y=y.filter(function(t){return t!==e}),G.forEach(function(t){var a=e.eventHandlers[t];a&&a.remove&&a.remove()}))}function re(){return typeof window<"u"?window:null}var g;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(g||(g={}));var oe=function(){return{offsetTop:Number,offsetBottom:Number,target:{type:Function,default:re},prefixCls:String,onChange:Function,onTestUpdatePosition:Function}},fe=k({compatConfig:{MODE:3},name:"AAffix",props:oe(),setup:function(e,t){var a=t.slots,s=t.emit,l=t.expose,d=z(),c=z(),f=ee({affixStyle:void 0,placeholderStyle:void 0,status:g.None,lastAffix:!1,prevTarget:null,timeout:null}),m=te(),P=I(function(){return e.offsetBottom===void 0&&e.offsetTop===void 0?0:e.offsetTop}),S=I(function(){return e.offsetBottom}),O=function(){var r=f.status,x=f.lastAffix,v=e.target;if(!(r!==g.Prepare||!c.value||!d.value||!v)){var p=v();if(p){var o={status:g.None},w=T(p),u=T(d.value),N=R(u,w,P.value),B=M(u,w,S.value);N!==void 0?(o.affixStyle={position:"fixed",top:N,width:u.width+"px",height:u.height+"px"},o.placeholderStyle={width:u.width+"px",height:u.height+"px"}):B!==void 0&&(o.affixStyle={position:"fixed",bottom:B,width:u.width+"px",height:u.height+"px"},o.placeholderStyle={width:u.width+"px",height:u.height+"px"}),o.lastAffix=!!o.affixStyle,x!==o.lastAffix&&s("change",o.lastAffix),U(f,o)}}},A=function(){U(f,{status:g.Prepare,affixStyle:void 0,placeholderStyle:void 0}),m.update()},h=H(function(){A()}),C=H(function(){var i=e.target,r=f.affixStyle;if(i&&r){var x=i();if(x&&d.value){var v=T(x),p=T(d.value),o=R(p,v,P.value),w=M(p,v,S.value);if(o!==void 0&&r.top===o||w!==void 0&&r.bottom===w)return}}A()});l({updatePosition:h,lazyUpdatePosition:C}),F(function(){return e.target},function(i){var r=(i==null?void 0:i())||null;f.prevTarget!==r&&(D(m),r&&(j(r,m),h()),f.prevTarget=r)}),F(function(){return[e.offsetTop,e.offsetBottom]},h),ne(function(){var i=e.target;i&&(f.timeout=setTimeout(function(){j(i(),m),h()}))}),ae(function(){O()}),ie(function(){clearTimeout(f.timeout),D(m),h.cancel(),C.cancel()});var V=K("affix",e),_=V.prefixCls;return function(){var i,r=f.affixStyle,x=f.placeholderStyle,v=Q(X({},_.value,r)),p=Y(e,["prefixCls","offsetTop","offsetBottom","target","onChange","onTestUpdatePosition"]);return b(Z,{onResize:h},{default:function(){return[b("div",L(L({},p),{},{style:x,ref:d}),[b("div",{class:v,ref:c,style:r},[(i=a.default)===null||i===void 0?void 0:i.call(a)])])]}})}}});const le=J(fe);export{le as A};