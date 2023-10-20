import{P as V,j as Ft,e as A,c as me,d as K,b9 as jt,l as Je,w as Ae,K as re,bd as U,aP as R,E as $t,M as Ht,V as Vt,bK as zt,bL as Gt,bM as qt,bN as Ut,bO as Yt,_ as mt,bP as Oe,R as yt,ap as Xt,i as It,t as Zt,o as Qt,q as Jt,k as Qe,u as ea,n as ta,bQ as aa,aO as gt,C as na,bR as ia}from"./index-a3873c66.js";import{d as le,k as P,w as be,e as Y,f as v,F as ra,x as tt,s as Fe,o as Re,p as la,c as oa,H as ua,ao as ca,ap as sa}from"./vue-db0e7353.js";var Se={adjustX:1,adjustY:1},xe=[0,0],va={topLeft:{points:["bl","tl"],overflow:Se,offset:[0,-4],targetOffset:xe},topCenter:{points:["bc","tc"],overflow:Se,offset:[0,-4],targetOffset:xe},topRight:{points:["br","tr"],overflow:Se,offset:[0,-4],targetOffset:xe},bottomLeft:{points:["tl","bl"],overflow:Se,offset:[0,4],targetOffset:xe},bottomCenter:{points:["tc","bc"],overflow:Se,offset:[0,4],targetOffset:xe},bottomRight:{points:["tr","br"],overflow:Se,offset:[0,4],targetOffset:xe}};const da=va;var fa=["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"];const ba=le({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:V.string.def("rc-dropdown"),transitionName:String,overlayClassName:V.string.def(""),openClassName:String,animation:V.any,align:V.object,overlayStyle:{type:Object,default:void 0},placement:V.string.def("bottomLeft"),overlay:V.any,trigger:V.oneOfType([V.string,V.arrayOf(V.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:V.array,hideAction:V.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:V.number.def(.15),mouseLeaveDelay:V.number.def(.1)},emits:["visibleChange","overlayClick"],slots:["overlay"],setup:function(e,t){var n=t.slots,a=t.emit,i=t.expose,l=P(!!e.visible);be(function(){return e.visible},function(b){b!==void 0&&(l.value=b)});var c=P();i({triggerRef:c});var u=function(y){e.visible===void 0&&(l.value=!1),a("overlayClick",y)},d=function(y){e.visible===void 0&&(l.value=y),a("visibleChange",y)},s=function(){var y,S=(y=n.overlay)===null||y===void 0?void 0:y.call(n),D={prefixCls:"".concat(e.prefixCls,"-menu"),onClick:u,getPopupContainer:function(){return c.value.getPopupDomNode()}};return v(ra,null,[e.arrow&&v("div",{class:"".concat(e.prefixCls,"-arrow")},null),Je(S,D,!1)])},m=Y(function(){var b=e.minOverlayWidthMatchTrigger,y=b===void 0?!e.alignPoint:b;return y}),g=function(){var y,S=(y=n.default)===null||y===void 0?void 0:y.call(n);return l.value&&S?Je(S[0],{class:e.openClassName||"".concat(e.prefixCls,"-open")},!1):S},_=Y(function(){return!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction});return function(){var b=e.prefixCls,y=e.arrow,S=e.showAction,D=e.overlayStyle,T=e.trigger,f=e.placement,O=e.align,$=e.getPopupContainer,N=e.transitionName,E=e.animation,M=e.overlayClassName,z=Ft(e,fa);return v(jt,A(A({},z),{},{prefixCls:b,ref:c,popupClassName:me(M,K({},"".concat(b,"-show-arrow"),y)),popupStyle:D,builtinPlacements:da,action:T,showAction:S,hideAction:_.value||[],popupPlacement:f,popupAlign:O,popupTransitionName:N,popupAnimation:E,popupVisible:l.value,stretch:m.value?"minWidth":"",onPopupVisibleChange:d,getPopupContainer:$}),{popup:s,default:g})}}});function ma(r){var e=P(),t=P(!1);function n(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];t.value||(Ae.cancel(e.value),e.value=Ae(function(){r.apply(void 0,i)}))}return tt(function(){t.value=!0,Ae.cancel(e.value)}),n}function ya(r){var e=P([]),t=P(typeof r=="function"?r():r),n=ma(function(){var i=t.value;e.value.forEach(function(l){i=l(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),n()}return[t,a]}const ga=le({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var n=t.expose,a=t.attrs,i=P();function l(d){var s;(s=e.tab)!==null&&s!==void 0&&s.disabled||e.onClick(d)}n({domRef:i});function c(d){var s;d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:(s=e.tab)===null||s===void 0?void 0:s.key,event:d})}var u=Y(function(){var d;return e.editable&&e.closable!==!1&&!((d=e.tab)!==null&&d!==void 0&&d.disabled)});return function(){var d,s,m=e.prefixCls,g=e.id,_=e.active,b=e.tab,y=b.key,S=b.tab,D=b.disabled,T=b.closeIcon,f=e.renderWrapper,O=e.removeAriaLabel,$=e.editable,N=e.onFocus,E="".concat(m,"-tab"),M=v("div",{key:y,ref:i,class:me(E,(d={},K(d,"".concat(E,"-with-remove"),u.value),K(d,"".concat(E,"-active"),_),K(d,"".concat(E,"-disabled"),D),d)),style:a.style,onClick:l},[v("div",{role:"tab","aria-selected":_,id:g&&"".concat(g,"-tab-").concat(y),class:"".concat(E,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(y),"aria-disabled":D,tabindex:D?null:0,onClick:function(F){F.stopPropagation(),l(F)},onKeydown:function(F){[re.SPACE,re.ENTER].includes(F.which)&&(F.preventDefault(),l(F))},onFocus:N},[typeof S=="function"?S():S]),u.value&&v("button",{type:"button","aria-label":O||"remove",tabindex:0,class:"".concat(E,"-remove"),onClick:function(F){F.stopPropagation(),c(F)}},[(T==null?void 0:T())||((s=$.removeIcon)===null||s===void 0?void 0:s.call($))||"×"])]);return f?f(M):M}}});var ht={width:0,height:0,left:0,top:0};function ha(r,e){var t=P(new Map);return Fe(function(){for(var n,a=new Map,i=r.value,l=e.value.get((n=i[0])===null||n===void 0?void 0:n.key)||ht,c=l.left+l.width,u=0;u<i.length;u+=1){var d=i[u].key,s=e.value.get(d);if(!s){var m;s=e.value.get((m=i[u-1])===null||m===void 0?void 0:m.key)||ht}var g=a.get(d)||A({},s);g.right=c-g.left-g.width,a.set(d,g)}t.value=new Map(a)}),t}const Et=le({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var n=t.expose,a=t.attrs,i=P();return n({domRef:i}),function(){var l=e.prefixCls,c=e.editable,u=e.locale;return!c||c.showAdd===!1?null:v("button",{ref:i,type:"button",class:"".concat(l,"-nav-add"),style:a.style,"aria-label":(u==null?void 0:u.addAriaLabel)||"Add tab",onClick:function(s){c.onEdit("add",{event:s})}},[c.addIcon?c.addIcon():"+"])}}});var pa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:V.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const Ca=le({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:pa,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var n=t.attrs,a=t.slots,i=U(!1),l=R(i,2),c=l[0],u=l[1],d=U(null),s=R(d,2),m=s[0],g=s[1],_=function(f){for(var O=e.tabs.filter(function(z){return!z.disabled}),$=O.findIndex(function(z){return z.key===m.value})||0,N=O.length,E=0;E<N;E+=1){$=($+f+N)%N;var M=O[$];if(!M.disabled){g(M.key);return}}},b=function(f){var O=f.which;if(!c.value){[re.DOWN,re.SPACE,re.ENTER].includes(O)&&(u(!0),f.preventDefault());return}switch(O){case re.UP:_(-1),f.preventDefault();break;case re.DOWN:_(1),f.preventDefault();break;case re.ESC:u(!1);break;case re.SPACE:case re.ENTER:m.value!==null&&e.onTabClick(m.value,f);break}},y=Y(function(){return"".concat(e.id,"-more-popup")}),S=Y(function(){return m.value!==null?"".concat(y.value,"-").concat(m.value):null}),D=function(f,O){f.preventDefault(),f.stopPropagation(),e.editable.onEdit("remove",{key:O,event:f})};return Re(function(){be(m,function(){var T=document.getElementById(S.value);T&&T.scrollIntoView&&T.scrollIntoView(!1)},{flush:"post",immediate:!0})}),be(c,function(){c.value||g(null)}),function(){var T,f=e.prefixCls,O=e.id,$=e.tabs,N=e.locale,E=e.mobile,M=e.moreIcon,z=M===void 0?((T=a.moreIcon)===null||T===void 0?void 0:T.call(a))||v($t,null,null):M,F=e.moreTransitionName,G=e.editable,ve=e.tabBarGutter,x=e.rtl,o=e.onTabClick,p="".concat(f,"-dropdown"),I=N==null?void 0:N.dropdownAriaLabel,j=K({},x?"marginRight":"marginLeft",ve);$.length||(j.visibility="hidden",j.order=1);var H=me(K({},"".concat(p,"-rtl"),x)),w=E?null:v(ba,{prefixCls:p,trigger:["hover"],visible:c.value,transitionName:F,onVisibleChange:u,overlayClassName:H,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return v(Ht,{onClick:function(L){var X=L.key,oe=L.domEvent;o(X,oe),u(!1)},id:y.value,tabindex:-1,role:"listbox","aria-activedescendant":S.value,selectedKeys:[m.value],"aria-label":I!==void 0?I:"expanded dropdown"},{default:function(){return[$.map(function(L){var X,oe,Pe=G&&L.closable!==!1&&!L.disabled;return v(Vt,{key:L.key,id:"".concat(y.value,"-").concat(L.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(L.key),disabled:L.disabled},{default:function(){return[v("span",null,[typeof L.tab=="function"?L.tab():L.tab]),Pe&&v("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(p,"-menu-item-remove"),onClick:function(de){de.stopPropagation(),D(de,L.key)}},[((X=L.closeIcon)===null||X===void 0?void 0:X.call(L))||((oe=G.removeIcon)===null||oe===void 0?void 0:oe.call(G))||"×"])]}})})]}})},default:function(){return v("button",{type:"button",class:"".concat(f,"-nav-more"),style:j,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y.value,id:"".concat(O,"-more"),"aria-expanded":c.value,onKeydown:b},[z])}});return v("div",{class:me("".concat(f,"-nav-operations"),n.class),style:n.style},[w,v(Et,{prefixCls:f,locale:N,editable:G},null)])}}});var wt=Symbol("tabsContextKey"),Bt=function(e){la(wt,e)},Ot=function(){return oa(wt,{tabs:P([]),prefixCls:P()})};le({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var n=t.slots;return Bt(ua(e)),function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}});var Sa=.1,pt=.01,We=20,Ct=Math.pow(.995,We);function xa(r,e){var t=U(),n=R(t,2),a=n[0],i=n[1],l=U(0),c=R(l,2),u=c[0],d=c[1],s=U(0),m=R(s,2),g=m[0],_=m[1],b=U(),y=R(b,2),S=y[0],D=y[1],T=P();function f(x){var o=x.touches[0],p=o.screenX,I=o.screenY;i({x:p,y:I}),clearInterval(T.value)}function O(x){if(a.value){x.preventDefault();var o=x.touches[0],p=o.screenX,I=o.screenY,j=p-a.value.x,H=I-a.value.y;e(j,H),i({x:p,y:I});var w=Date.now();_(w-u.value),d(w),D({x:j,y:H})}}function $(){if(a.value){var x=S.value;if(i(null),D(null),x){var o=x.x/g.value,p=x.y/g.value,I=Math.abs(o),j=Math.abs(p);if(Math.max(I,j)<Sa)return;var H=o,w=p;T.value=setInterval(function(){if(Math.abs(H)<pt&&Math.abs(w)<pt){clearInterval(T.value);return}H*=Ct,w*=Ct,e(H*We,w*We)},We)}}}var N=P();function E(x){var o=x.deltaX,p=x.deltaY,I=0,j=Math.abs(o),H=Math.abs(p);j===H?I=N.value==="x"?o:p:j>H?(I=o,N.value="x"):(I=p,N.value="y"),e(-I,-I)&&x.preventDefault()}var M=P({onTouchStart:f,onTouchMove:O,onTouchEnd:$,onWheel:E});function z(x){M.value.onTouchStart(x)}function F(x){M.value.onTouchMove(x)}function G(x){M.value.onTouchEnd(x)}function ve(x){M.value.onWheel(x)}Re(function(){var x,o;document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",G,{passive:!1}),(x=r.value)===null||x===void 0||x.addEventListener("touchstart",z,{passive:!1}),(o=r.value)===null||o===void 0||o.addEventListener("wheel",ve,{passive:!1})}),tt(function(){document.removeEventListener("touchmove",F),document.removeEventListener("touchend",G)})}function St(r,e){var t=P(r);function n(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,n]}var Ta=function(){var e=P(new Map),t=function(a){return function(i){e.value.set(a,i)}};return ca(function(){e.value=new Map}),[t,e]};const Pa=Ta;function ka(r,e,t){for(var n=-1,a=e.length,i={};++n<a;){var l=e[n],c=zt(r,l);t(c,l)&&Gt(i,qt(l,r),c)}return i}function Ia(r,e){return ka(r,e,function(t,n){return Ut(r,n)})}var Ea=Yt(function(r,e){return r==null?{}:Ia(r,e)});const At=Ea;var xt={width:0,height:0,left:0,top:0,right:0},wa=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:V.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const Tt=le({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:wa(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var n=t.attrs,a=t.slots,i=Ot(),l=i.tabs,c=i.prefixCls,u=P(),d=P(),s=P(),m=P(),g=Pa(),_=R(g,2),b=_[0],y=_[1],S=Y(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),D=St(0,function(C,k){S.value&&e.onTabScroll&&e.onTabScroll({direction:C>k?"left":"right"})}),T=R(D,2),f=T[0],O=T[1],$=St(0,function(C,k){!S.value&&e.onTabScroll&&e.onTabScroll({direction:C>k?"top":"bottom"})}),N=R($,2),E=N[0],M=N[1],z=U(0),F=R(z,2),G=F[0],ve=F[1],x=U(0),o=R(x,2),p=o[0],I=o[1],j=U(null),H=R(j,2),w=H[0],Te=H[1],he=U(null),L=R(he,2),X=L[0],oe=L[1],Pe=U(0),pe=R(Pe,2),ke=pe[0],de=pe[1],_e=U(0),ee=R(_e,2),je=ee[0],Ne=ee[1],Me=ya(new Map),Ce=R(Me,2),$e=Ce[0],He=Ce[1],Le=ha(l,$e),_t=Y(function(){return"".concat(c.value,"-nav-operations-hidden")}),Ie=P(0),Ee=P(0);Fe(function(){S.value?e.rtl?(Ie.value=0,Ee.value=Math.max(0,G.value-w.value)):(Ie.value=Math.min(0,w.value-G.value),Ee.value=0):(Ie.value=Math.min(0,X.value-p.value),Ee.value=0)});var Ve=function(k){return k<Ie.value?Ie.value:k>Ee.value?Ee.value:k},nt=P(),Nt=U(),it=R(Nt,2),ze=it[0],rt=it[1],Ge=function(){rt(Date.now())},qe=function(){clearTimeout(nt.value)},lt=function(k,h){k(function(W){var B=Ve(W+h);return B})};xa(u,function(C,k){if(S.value){if(w.value>=G.value)return!1;lt(O,C)}else{if(X.value>=p.value)return!1;lt(M,k)}return qe(),Ge(),!0}),be(ze,function(){qe(),ze.value&&(nt.value=setTimeout(function(){rt(0)},100))});var ot=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,h=Le.value.get(k)||{width:0,height:0,left:0,right:0,top:0};if(S.value){var W=f.value;e.rtl?h.right<f.value?W=h.right:h.right+h.width>f.value+w.value&&(W=h.right+h.width-w.value):h.left<-f.value?W=-h.left:h.left+h.width>-f.value+w.value&&(W=-(h.left+h.width-w.value)),M(0),O(Ve(W))}else{var B=E.value;h.top<-E.value?B=-h.top:h.top+h.height>-E.value+X.value&&(B=-(h.top+h.height-X.value)),O(0),M(Ve(B))}},Ue=P(0),Ye=P(0);Fe(function(){var C,k,h,W,B,Z,Q,ye=Le.value;["top","bottom"].includes(e.tabPosition)?(k="width",B=w.value,Z=G.value,Q=ke.value,h=e.rtl?"right":"left",W=Math.abs(f.value)):(k="height",B=X.value,Z=G.value,Q=je.value,h="top",W=-E.value);var te=B;Z+Q>B&&Z<B&&(te=B-Q);var ue=l.value;if(!ue.length){var ce;return ce=[0,0],Ue.value=ce[0],Ye.value=ce[1],ce}for(var ge=ue.length,q=ge,ae=0;ae<ge;ae+=1){var ne=ye.get(ue[ae].key)||xt;if(ne[h]+ne[k]>W+te){q=ae-1;break}}for(var se=0,J=ge-1;J>=0;J-=1){var ie=ye.get(ue[J].key)||xt;if(ie[h]<W){se=J+1;break}}return C=[se,q],Ue.value=C[0],Ye.value=C[1],C});var Xe=function(){var k,h,W,B,Z,Q=((k=u.value)===null||k===void 0?void 0:k.offsetWidth)||0,ye=((h=u.value)===null||h===void 0?void 0:h.offsetHeight)||0,te=((W=m.value)===null||W===void 0?void 0:W.$el)||{},ue=te.offsetWidth||0,ce=te.offsetHeight||0;Te(Q),oe(ye),de(ue),Ne(ce);var ge=(((B=d.value)===null||B===void 0?void 0:B.offsetWidth)||0)-ue,q=(((Z=d.value)===null||Z===void 0?void 0:Z.offsetHeight)||0)-ce;ve(ge),I(q),He(function(){var ae=new Map;return l.value.forEach(function(ne){var se=ne.key,J=y.value.get(se),ie=(J==null?void 0:J.$el)||J;ie&&ae.set(se,{width:ie.offsetWidth,height:ie.offsetHeight,left:ie.offsetLeft,top:ie.offsetTop})}),ae})},ut=Y(function(){return[].concat(mt(l.value.slice(0,Ue.value)),mt(l.value.slice(Ye.value+1)))}),Mt=U(),ct=R(Mt,2),Lt=ct[0],Dt=ct[1],fe=Y(function(){return Le.value.get(e.activeKey)}),st=P(),vt=function(){Ae.cancel(st.value)};be([fe,S,function(){return e.rtl}],function(){var C={};fe.value&&(S.value?(e.rtl?C.right=Oe(fe.value.right):C.left=Oe(fe.value.left),C.width=Oe(fe.value.width)):(C.top=Oe(fe.value.top),C.height=Oe(fe.value.height))),vt(),st.value=Ae(function(){Dt(C)})}),be([function(){return e.activeKey},fe,Le,S],function(){ot()},{flush:"post"}),be([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return l.value}],function(){Xe()},{flush:"post"});var Ze=function(k){var h=k.position,W=k.prefixCls,B=k.extra;if(!B)return null;var Z=B==null?void 0:B({position:h});return Z?v("div",{class:"".concat(W,"-extra-content")},[Z]):null};return tt(function(){qe(),vt()}),function(){var C,k=e.id,h=e.animated,W=e.activeKey,B=e.rtl,Z=e.editable,Q=e.locale,ye=e.tabPosition,te=e.tabBarGutter,ue=e.onTabClick,ce=n.class,ge=n.style,q=c.value,ae=!!ut.value.length,ne="".concat(q,"-nav-wrap"),se,J,ie,dt;S.value?B?(J=f.value>0,se=f.value+w.value<G.value):(se=f.value<0,J=-f.value+w.value<G.value):(ie=E.value<0,dt=-E.value+X.value<p.value);var De={};ye==="top"||ye==="bottom"?De[B?"marginRight":"marginLeft"]=typeof te=="number"?"".concat(te,"px"):te:De.marginTop=typeof te=="number"?"".concat(te,"px"):te;var ft=l.value.map(function(we,bt){var Be=we.key;return v(ga,{id:k,prefixCls:q,key:Be,tab:we,style:bt===0?void 0:De,closable:we.closable,editable:Z,active:Be===W,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:b(Be),onClick:function(Kt){ue(Be,Kt)},onFocus:function(){ot(Be),Ge(),u.value&&(B||(u.value.scrollLeft=0),u.value.scrollTop=0)}},a)});return v("div",{role:"tablist",class:me("".concat(q,"-nav"),ce),style:ge,onKeydown:function(){Ge()}},[v(Ze,{position:"left",prefixCls:q,extra:a.leftExtra},null),v(yt,{onResize:Xe},{default:function(){return[v("div",{class:me(ne,(C={},K(C,"".concat(ne,"-ping-left"),se),K(C,"".concat(ne,"-ping-right"),J),K(C,"".concat(ne,"-ping-top"),ie),K(C,"".concat(ne,"-ping-bottom"),dt),C)),ref:u},[v(yt,{onResize:Xe},{default:function(){return[v("div",{ref:d,class:"".concat(q,"-nav-list"),style:{transform:"translate(".concat(f.value,"px, ").concat(E.value,"px)"),transition:ze.value?"none":void 0}},[ft,v(Et,{ref:m,prefixCls:q,locale:Q,editable:Z,style:A(A({},ft.length===0?void 0:De),{},{visibility:ae?"hidden":null})},null),v("div",{class:me("".concat(q,"-ink-bar"),K({},"".concat(q,"-ink-bar-animated"),h.inkBar)),style:Lt.value},null)])]}})])]}}),v(Ca,A(A({},e),{},{removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:s,prefixCls:q,tabs:ut.value,class:!ae&&_t.value}),At(a,["moreIcon"])),v(Ze,{position:"right",prefixCls:q,extra:a.rightExtra},null),v(Ze,{position:"right",prefixCls:q,extra:a.tabBarExtraContent},null)])}}}),Ba=le({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Ot(),n=t.tabs,a=t.prefixCls;return function(){var i=e.id,l=e.activeKey,c=e.animated,u=e.tabPosition,d=e.rtl,s=e.destroyInactiveTabPane,m=c.tabPane,g=a.value,_=n.value.findIndex(function(b){return b.key===l});return v("div",{class:"".concat(g,"-content-holder")},[v("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(u),K({},"".concat(g,"-content-animated"),m)],style:_&&m?K({},d?"marginRight":"marginLeft","-".concat(_,"00%")):null},[n.value.map(function(b){return Je(b.node,{key:b.key,prefixCls:g,tabKey:b.key,id:i,animated:m,active:b.key===l,destroyInactiveTabPane:s})})])])}}});var Oa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Aa=Oa;function Pt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){Ra(r,a,t[a])})}return r}function Ra(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var at=function(e,t){var n=Pt({},e,t.attrs);return v(Xt,Pt({},n,{icon:Aa}),null)};at.displayName="PlusOutlined";at.inheritAttrs=!1;const _a=at;var kt=0,Rt=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:V.any}};function Na(r){return r.map(function(e){if(Jt(e)){for(var t=A({},e.props||{}),n=0,a=Object.entries(t);n<a.length;n++){var i=R(a[n],2),l=i[0],c=i[1];delete t[l],t[sa(l)]=c}var u=e.children||{},d=e.key!==void 0?e.key:void 0,s=t.tab,m=s===void 0?u.tab:s,g=t.disabled,_=t.forceRender,b=t.closable,y=t.animated,S=t.active,D=t.destroyInactiveTabPane;return A(A({key:d},t),{},{node:e,closeIcon:u.closeIcon,tab:m,disabled:g===""||g,forceRender:_===""||_,closable:b===""||b,animated:y===""||y,active:S===""||S,destroyInactiveTabPane:D===""||D})}return null}).filter(function(e){return e})}var Ma=le({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:A(A({},It(Rt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var n=t.attrs,a=t.slots;Qe(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Qe(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Qe(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=ea("tabs",e),l=i.prefixCls,c=i.direction,u=i.size,d=i.rootPrefixCls,s=Y(function(){return c.value==="rtl"}),m=Y(function(){var o=e.animated,p=e.tabPosition;return o===!1||["left","right"].includes(p)?{inkBar:!1,tabPane:!1}:o===!0?{inkBar:!0,tabPane:!0}:A({inkBar:!0,tabPane:!1},ta(o)==="object"?o:{})}),g=U(!1),_=R(g,2),b=_[0],y=_[1];Re(function(){y(aa())});var S=gt(function(){var o;return(o=e.tabs[0])===null||o===void 0?void 0:o.key},{value:Y(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),D=R(S,2),T=D[0],f=D[1],O=U(function(){return e.tabs.findIndex(function(o){return o.key===T.value})}),$=R(O,2),N=$[0],E=$[1];Fe(function(){var o=e.tabs.findIndex(function(I){return I.key===T.value});if(o===-1){var p;o=Math.max(0,Math.min(N.value,e.tabs.length-1)),f((p=e.tabs[o])===null||p===void 0?void 0:p.key)}E(o)});var M=gt(null,{value:Y(function(){return e.id})}),z=R(M,2),F=z[0],G=z[1],ve=Y(function(){return b.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Re(function(){e.id||(G("rc-tabs-".concat(kt)),kt+=1)});var x=function(p,I){var j;(j=e.onTabClick)===null||j===void 0||j.call(e,p,I);var H=p!==T.value;if(f(p),H){var w;(w=e.onChange)===null||w===void 0||w.call(e,p)}};return Bt({tabs:Y(function(){return e.tabs}),prefixCls:l}),function(){var o,p=e.id,I=e.type,j=e.tabBarGutter,H=e.tabBarStyle,w=e.locale,Te=e.destroyInactiveTabPane,he=e.renderTabBar,L=he===void 0?a.renderTabBar:he,X=e.onTabScroll,oe=e.hideAdd,Pe=e.centered,pe={id:F.value,activeKey:T.value,animated:m.value,tabPosition:ve.value,rtl:s.value,mobile:b.value},ke;I==="editable-card"&&(ke={onEdit:function(Ne,Me){var Ce,$e=Me.key,He=Me.event;(Ce=e.onEdit)===null||Ce===void 0||Ce.call(e,Ne==="add"?He:$e,Ne)},removeIcon:function(){return v(na,null,null)},addIcon:a.addIcon?a.addIcon:function(){return v(_a,null,null)},showAdd:oe!==!0});var de,_e=A(A({},pe),{},{moreTransitionName:"".concat(d.value,"-slide-up"),editable:ke,locale:w,tabBarGutter:j,onTabClick:x,onTabScroll:X,style:H});L?de=L(A(A({},_e),{},{DefaultTabBar:Tt})):de=v(Tt,_e,At(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var ee=l.value;return v("div",A(A({},n),{},{id:p,class:me(ee,"".concat(ee,"-").concat(ve.value),(o={},K(o,"".concat(ee,"-").concat(u.value),u.value),K(o,"".concat(ee,"-card"),["card","editable-card"].includes(I)),K(o,"".concat(ee,"-editable-card"),I==="editable-card"),K(o,"".concat(ee,"-centered"),Pe),K(o,"".concat(ee,"-mobile"),b.value),K(o,"".concat(ee,"-editable"),I==="editable-card"),K(o,"".concat(ee,"-rtl"),s.value),o),n.class)}),[de,v(Ba,A(A({destroyInactiveTabPane:Te},pe),{},{animated:m.value}),null)])}}});const Ke=le({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:It(Rt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var n=t.attrs,a=t.slots,i=t.emit,l=function(u){i("update:activeKey",u),i("change",u)};return function(){var c,u=Na(Zt((c=a.default)===null||c===void 0?void 0:c.call(a)));return v(Ma,A(A(A({},Qt(e,["onUpdate:activeKey"])),n),{},{onChange:l,tabs:u}),a)}}});var La=function(){return{tab:V.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const et=le({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:La(),slots:["closeIcon","tab"],setup:function(e,t){var n=t.attrs,a=t.slots,i=P(e.forceRender);be([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});var l=Y(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var c,u=e.prefixCls,d=e.forceRender,s=e.id,m=e.active,g=e.tabKey;return v("div",{id:s&&"".concat(s,"-panel-").concat(g),role:"tabpanel",tabindex:m?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(g),"aria-hidden":!m,style:[l.value,n.style],class:["".concat(u,"-tabpane"),m&&"".concat(u,"-tabpane-active"),n.class]},[(m||i.value||d)&&((c=a.default)===null||c===void 0?void 0:c.call(a))])}}});Ke.TabPane=et;Ke.install=function(r){return r.component(Ke.name,Ke),r.component(et.name,et),r};const Ka=function(){var r=P(!1);return Re(function(){r.value=ia()}),r};export{ba as D,et as T,Ke as a,Ka as u};
