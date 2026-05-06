import{a as Qn,b as go,c as rn,d as _o,f as bo,g as vo,h as yo}from"./chunk-FJFCBDTF.js";import{a as xo}from"./chunk-NTQ5D26X.js";import{$a as w,$b as ve,Aa as eo,Ab as xt,B as ue,Bb as N,C as Ue,Cb as lo,D as he,Db as Nt,E as Xi,Eb as L,F as qi,Fb as B,Gb as co,Hb as Lt,I as qn,Ib as Et,J as Zi,Jb as _e,K as fe,Kb as Dt,L as Ki,La as te,Lb as E,M as Qi,Ma as no,Mb as Bt,N as Zn,Na as p,Nb as U,O as Ft,Ob as Ke,P as T,Pb as Qe,Q as G,Qb as Je,R as Ht,Ra as Tt,Rb as tn,Sa as it,Sb as mo,T as Ut,Ta as X,Tb as tt,U as _,Ua as z,Ub as en,V as gt,Va as ge,Wa as io,Wb as ht,X as g,Xb as Y,Y as pe,Yb as nn,Z as s,Za as v,Zb as uo,_a as bt,_b as be,a as h,aa as Jt,ab as Q,ac as ct,b as R,bb as ee,bc as ho,c as Gi,ca as st,cc as fo,d as At,da as lt,db as oo,dc as Yt,ea as Kn,eb as ro,f as Qt,fa as Ji,fc as et,g as C,ga as $,gb as ne,gc as ie,h as Be,ha as I,hb as W,hc as po,i as Ot,ia as _t,ib as A,ic as on,j as Yi,jb as O,k as K,ka as dt,kb as ao,l as $i,la as y,lb as $e,ma as We,mb as Xe,nb as k,o as P,ob as m,pa as V,pb as f,qb as J,ra as kt,rb as Vt,sa as Pt,sb as Gt,t as ze,ta as Wt,tb as vt,u as H,ua as b,ub as qe,v as je,vb as yt,w as pt,wa as Ge,wb as Ze,x as wt,xb as M,y as Xn,ya as to,yb as so,z as He,za as Ye,zb as F}from"./chunk-M5Q5DSYX.js";function ft(i){i||(i=s(_t));let n=new Qt(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(T(n))}function Co(i,n){let e=!n?.manualCleanup?n?.injector?.get(_t)??s(_t):null,o=da(n?.equal),r;n?.requireSync?r=V({kind:0},{equal:o}):r=V({kind:1,value:n?.initialValue},{equal:o});let a,l=i.subscribe({next:d=>r.set({kind:1,value:d}),error:d=>{r.set({kind:2,error:d}),a?.()},complete:()=>{a?.()}});if(n?.requireSync&&r().kind===0)throw new Ht(601,!1);return a=e?.onDestroy(l.unsubscribe.bind(l)),Y(()=>{let d=r();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new Ht(601,!1)}},{equal:n?.equal})}function da(i=Object.is){return(n,t)=>n.kind===1&&t.kind===1&&i(n.value,t.value)}function ye(i){return i.buttons===0||i.detail===0}function xe(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Jn;function wo(){if(Jn==null){let i=typeof document<"u"?document.head:null;Jn=!!(i&&(i.createShadowRoot||i.attachShadow))}return Jn}function ti(i){if(wo()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function nt(i){return i.composedPath?i.composedPath()[0]:i.target}var ei;try{ei=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ei=!1}var S=(()=>{class i{_platformId=s(to);isBrowser=this._platformId?_o(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ei)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ce;function Eo(){if(Ce==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ce=!0}))}finally{Ce=Ce||!1}return Ce}function oe(i){return Eo()?i:!!i.capture}function re(i,n=0){return Do(i)?Number(i):arguments.length===2?n:0}function Do(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function ot(i){return i instanceof b?i.nativeElement:i}var Mo=new g("cdk-input-modality-detector-options"),So={ignoreKeys:[18,17,224,91,16]},Ro=650,ni={passive:!0,capture:!0},Io=(()=>{class i{_platform=s(S);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Be(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=nt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Ro||(this._modality.next(ye(t)?"keyboard":"mouse"),this._mostRecentTarget=nt(t))};_onTouchstart=t=>{if(xe(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=nt(t)};constructor(){let t=s(y),e=s(I),o=s(Mo,{optional:!0});if(this._options=h(h({},So),o),this.modalityDetected=this._modality.pipe(Ki(1)),this.modalityChanged=this.modalityDetected.pipe(he()),this._platform.isBrowser){let r=s(it).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,ni),r.listen(e,"mousedown",this._onMousedown,ni),r.listen(e,"touchstart",this._onTouchstart,ni)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),we=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(we||{}),Ao=new g("cdk-focus-monitor-default-options"),an=oe({passive:!0,capture:!0}),Ee=(()=>{class i{_ngZone=s(y);_platform=s(S);_inputModalityDetector=s(Io);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(I);_stopInputModalityDetector=new C;constructor(){let t=s(Ao,{optional:!0});this._detectionMode=t?.detectionMode||we.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=nt(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=ot(t);if(!this._platform.isBrowser||o.nodeType!==1)return K();let r=ti(o)||this._document,a=this._elementInfo.get(o);if(a)return e&&(a.checkChildren=!0),a.subject;let l={checkChildren:e,subject:new C,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=ot(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=ot(t),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,d])=>this._originChanged(l,e,d)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===we.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===we.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Ro:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=nt(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,an),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,an)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(T(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,an),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,an),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var sn=new WeakMap,mt=(()=>{class i{_appRef;_injector=s($);_environmentInjector=s(Jt);load(t){let e=this._appRef=this._appRef||this._injector.get(ne),o=sn.get(e);o||(o={loaders:new Set,refs:[]},sn.set(e,o),e.onDestroy(()=>{sn.get(e)?.refs.forEach(r=>r.destroy()),sn.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(on(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Oo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),ln;function ca(){if(ln===void 0&&(ln=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(ln=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return ln}function ae(i){return ca()?.createHTML(i)||i}function ii(i){return Array.isArray(i)?i:[i]}var Fo=new Set,$t,De=(()=>{class i{_platform=s(S);_nonce=s(eo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ua}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ma(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ma(i,n){if(!Fo.has(i))try{$t||($t=document.createElement("style"),n&&$t.setAttribute("nonce",n),$t.setAttribute("type","text/css"),document.head.appendChild($t)),$t.sheet&&($t.sheet.insertRule(`@media ${i} {body{ }}`,0),Fo.add(i))}catch(t){console.error(t)}}function ua(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}function ko(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var oi={},Ct=class i{_appId=s(Ge);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),oi.hasOwnProperty(n)||(oi[n]=0),`${n}${t?i._infix+"-":""}${oi[n]++}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})};var To=" ";function ha(i,n,t){let e=cn(i,n);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),i.setAttribute(n,e.join(To)))}function fa(i,n,t){let e=cn(i,n);t=t.trim();let o=e.filter(r=>r!==t);o.length?i.setAttribute(n,o.join(To)):i.removeAttribute(n)}function cn(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var Vo="cdk-describedby-message",dn="cdk-describedby-host",ai=0,No=(()=>{class i{_platform=s(S);_document=s(I);_messageRegistry=new Map;_messagesContainer=null;_id=`${ai++}`;constructor(){s(mt).load(Oo),this._id=s(Ge)+"-"+ai++}describe(t,e,o){if(!this._canBeDescribed(t,e))return;let r=ri(e,o);typeof e!="string"?(Po(e,this._id),this._messageRegistry.set(r,{messageElement:e,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(e,o),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r)}removeDescription(t,e,o){if(!e||!this._isElementNode(t))return;let r=ri(e,o);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof e=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${dn}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(dn);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let o=this._document.createElement("div");Po(o,this._id),o.textContent=t,e&&o.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(ri(t,e),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<e.length;r++)e[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(t),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let e=cn(t,"aria-describedby").filter(o=>o.indexOf(Vo)!=0);t.setAttribute("aria-describedby",e.join(" "))}_addMessageReference(t,e){let o=this._messageRegistry.get(e);ha(t,"aria-describedby",o.messageElement.id),t.setAttribute(dn,this._id),o.referenceCount++}_removeMessageReference(t,e){let o=this._messageRegistry.get(e);o.referenceCount--,fa(t,"aria-describedby",o.messageElement.id),t.removeAttribute(dn)}_isElementDescribedByMessage(t,e){let o=cn(t,"aria-describedby"),r=this._messageRegistry.get(e),a=r&&r.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e=="object")return!0;let o=e==null?"":`${e}`.trim(),r=t.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ri(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function Po(i,n){i.id||(i.id=`${Vo}-${n}-${ai++}`)}function si(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var se,Lo=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function li(){if(se)return se;if(typeof document!="object"||!document)return se=new Set(Lo),se;let i=document.createElement("input");return se=new Set(Lo.filter(n=>(i.setAttribute("type",n),i.type===n))),se}var pa=new g("MATERIAL_ANIMATIONS"),Bo=null;function di(){return s(pa,{optional:!0})?.animationsDisabled||s(Ye,{optional:!0})==="NoopAnimations"?"di-disabled":(Bo??=s(De).matchMedia("(prefers-reduced-motion)").matches,Bo?"reduced-motion":"enabled")}function Mt(){return di()!=="enabled"}function j(i){return i==null?"":typeof i=="string"?i:`${i}px`}function St(i){return i!=null&&`${i}`!="false"}var ut=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ut||{}),ci=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ut.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},zo=oe({passive:!0,capture:!0}),mi=class{_events=new Map;addHandler(n,t,e,o){let r=this._events.get(t);if(r){let a=r.get(e);a?a.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,zo)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,zo)))}_delegateEventHandler=n=>{let t=nt(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(n))})}},Me={enterDuration:225,exitDuration:150},ga=800,jo=oe({passive:!0,capture:!0}),Ho=["mousedown","touchstart"],Uo=["mouseup","mouseleave","touchend","touchcancel"],_a=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),mn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new mi;constructor(n,t,e,o,r){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=ot(e)),r&&r.get(mt).load(_a)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=h(h({},Me),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let a=e.radius||ba(n,t,o),l=n-o.left,d=t-o.top,u=r.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-a}px`,c.style.top=`${d-a}px`,c.style.height=`${a*2}px`,c.style.width=`${a*2}px`,e.color!=null&&(c.style.backgroundColor=e.color),c.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(c);let D=window.getComputedStyle(c),q=D.transitionProperty,rt=D.transitionDuration,Z=q==="none"||rt==="0s"||rt==="0s, 0s"||o.width===0&&o.height===0,at=new ci(this,c,e,Z);c.style.transform="scale3d(1, 1, 1)",at.state=ut.FADING_IN,e.persistent||(this._mostRecentTransientRipple=at);let jt=null;return!Z&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ui=()=>{jt&&(jt.fallbackTimer=null),clearTimeout(Wi),this._finishRippleTransition(at)},$n=()=>this._destroyRipple(at),Wi=setTimeout($n,u+100);c.addEventListener("transitionend",Ui),c.addEventListener("transitioncancel",$n),jt={onTransitionEnd:Ui,onTransitionCancel:$n,fallbackTimer:Wi}}),this._activeRipples.set(at,jt),(Z||!u)&&this._finishRippleTransition(at),at}fadeOutRipple(n){if(n.state===ut.FADING_OUT||n.state===ut.HIDDEN)return;let t=n.element,e=h(h({},Me),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=ut.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=ot(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Ho.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Uo.forEach(t=>{this._triggerElement.addEventListener(t,this,jo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===ut.FADING_IN?this._startFadeOutTransition(n):n.state===ut.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=ut.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ut.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ye(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ga;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!xe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===ut.VISIBLE||n.config.terminateOnPointerUp&&n.state===ut.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Ho.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Uo.forEach(t=>n.removeEventListener(t,this,jo)),this._pointerUpEventsRegistered=!1))}};function ba(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var Wo=new g("mat-ripple-global-options");var va={capture:!0},ya=["focus","mousedown","mouseenter","touchstart"],ui="mat-ripple-loader-uninitialized",hi="mat-ripple-loader-class-name",Go="mat-ripple-loader-centered",un="mat-ripple-loader-disabled",Yo=(()=>{class i{_document=s(I);_animationsDisabled=Mt();_globalRippleOptions=s(Wo,{optional:!0});_platform=s(S);_ngZone=s(y);_injector=s($);_eventCleanups;_hosts=new Map;constructor(){let t=s(it).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ya.map(e=>t.listen(this._document,e,this._onInteraction,va)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(ui,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(hi))&&t.setAttribute(hi,e.className||""),e.centered&&t.setAttribute(Go,""),e.disabled&&t.setAttribute(un,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(un,""):t.removeAttribute(un)}_onInteraction=t=>{let e=nt(t);if(e instanceof HTMLElement){let o=e.closest(`[${ui}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(hi)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Me.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Me.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(un),rippleConfig:{centered:t.hasAttribute(Go),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new mn(l,this._ngZone,e,this._platform,this._injector),u=!l.rippleDisabled;u&&d.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:d,hasSetUpEvents:u}),t.removeAttribute(ui)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var $o=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var xa=["mat-icon-button",""],Ca=["*"],wa=new g("MAT_BUTTON_CONFIG");function Xo(i){return i==null?void 0:ie(i)}var fi=(()=>{class i{_elementRef=s(b);_ngZone=s(y);_animationsDisabled=Mt();_config=s(wa,{optional:!0});_focusMonitor=s(Ee);_cleanupClick;_renderer=s(X);_rippleLoader=s(Yo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(mt).load($o);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(W("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Bt(o.color?"mat-"+o.color:""),E("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",et],disabled:[2,"disabled","disabled",et],ariaDisabled:[2,"aria-disabled","ariaDisabled",et],disabledInteractive:[2,"disabledInteractive","disabledInteractive",et],tabIndex:[2,"tabIndex","tabIndex",Xo],_tabindex:[2,"tabindex","_tabindex",Xo]}})}return i})(),Se=(()=>{class i extends fi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Q],attrs:xa,ngContentSelectors:Ca,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(xt(),vt(0,"span",0),N(1),vt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ea=new g("cdk-dir-doc",{providedIn:"root",factory:()=>s(I)}),Da=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qo(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Da.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xt=(()=>{class i{get value(){return this.valueSignal()}valueSignal=V("ltr");change=new dt;constructor(){let t=s(Ea,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(qo(e||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ma=["matButton",""],Sa=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ra=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ko=(()=>{class i extends fi{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Ia(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Zo.get(this._appearance):null,r=Zo.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Q],attrs:Ma,ngContentSelectors:Ra,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(xt(Sa),vt(0,"span",0),N(1),Vt(2,"span",1),N(3,1),Gt(),N(4,2),vt(5,"span",2)(6,"span",3)),e&2&&E("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Ia(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}function Qo(i){return Error(`Unable to find icon with the name "${i}"`)}function Aa(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Jo(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function tr(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Rt=class{url;svgText;options;svgElement=null;constructor(n,t,e){this.url=n,this.svgText=t,this.options=e}},nr=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,o,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._document=o}addSvgIcon(t,e,o){return this.addSvgIconInNamespace("",t,e,o)}addSvgIconLiteral(t,e,o){return this.addSvgIconLiteralInNamespace("",t,e,o)}addSvgIconInNamespace(t,e,o,r){return this._addSvgIconConfig(t,e,new Rt(o,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,o,r){let a=this._sanitizer.sanitize(te.HTML,o);if(!a)throw tr(o);let l=ae(a);return this._addSvgIconConfig(t,e,new Rt("",l,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,o){return this._addSvgIconSetConfig(t,new Rt(e,null,o))}addSvgIconSetLiteralInNamespace(t,e,o){let r=this._sanitizer.sanitize(te.HTML,e);if(!r)throw tr(e);let a=ae(r);return this._addSvgIconSetConfig(t,new Rt("",a,o))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(te.RESOURCE_URL,t);if(!e)throw Jo(t);let o=this._cachedIconsByUrl.get(e);return o?K(hn(o)):this._loadSvgIconFromConfig(new Rt(t,null)).pipe(G(r=>this._cachedIconsByUrl.set(e,r)),P(r=>hn(r)))}getNamedSvgIcon(t,e=""){let o=er(e,t),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):$i(Qo(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?K(hn(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(P(e=>hn(e)))}_getSvgFromIconSetConfigs(t,e){let o=this._extractIconWithNameFromAnySet(t,e);if(o)return K(o);let r=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(He(l=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(te.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(u)),K(null)})));return ze(r).pipe(P(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw Qo(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let o=e.length-1;o>=0;o--){let r=e[o];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,t,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(G(e=>t.svgText=e),P(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?K(null):this._fetchIcon(t).pipe(G(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,o){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let l=this._svgElementFromString(ae("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,o)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let o=e.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(t){let e=this._svgElementFromString(ae("<svg></svg>")),o=t.attributes;for(let r=0;r<o.length;r++){let{name:a,value:l}=o[r];a!=="id"&&e.setAttribute(a,l)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:o}=t,r=o?.withCredentials??!1;if(!this._httpClient)throw Aa();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(te.RESOURCE_URL,e);if(!a)throw Jo(e);let l=this._inProgressUrlFetches.get(a);if(l)return l;let d=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(P(u=>ae(u)),qi(()=>this._inProgressUrlFetches.delete(a)),Zi());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(t,e,o){return this._svgIconConfigs.set(er(t,e),o),this}_addSvgIconSetConfig(t,e){let o=this._iconSetConfigs.get(t);return o?o.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](e,t);if(r)return Oa(r)?new Rt(r.url,null,r.options):new Rt(r,null)}}static \u0275fac=function(e){return new(e||i)(pe(bo,8),pe(vo),pe(I,8),pe(We))};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function hn(i){return i.cloneNode(!0)}function er(i,n){return i+":"+n}function Oa(i){return!!(i.url&&i.options)}var Fa=["*"],ka=new g("MAT_ICON_DEFAULT_OPTIONS"),Pa=new g("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(I),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),ir=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ta=ir.map(i=>`[${i}]`).join(", "),Va=/^url\(['"]?#(.*?)['"]?\)$/,le=(()=>{class i{_elementRef=s(b);_iconRegistry=s(nr);_location=s(Pa);_errorHandler=s(We);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=At.EMPTY;constructor(){let t=s(new uo("aria-hidden"),{optional:!0}),e=s(ka,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let o=t.childNodes[e];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),e.forEach(o=>t.classList.add(o)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Ta),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)ir.forEach(a=>{let l=e[r],d=l.getAttribute(a),u=d?d.match(Va):null;if(u){let c=o.get(l);c||(c=[],o.set(l,c)),c.push({name:a,value:u[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,o]=this._splitIconName(t);e&&(this._svgNamespace=e),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,e).pipe(ue(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${e}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,o){e&2&&(W("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Bt(o.color?"mat-"+o.color:""),E("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",et],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Fa,decls:1,vars:0,template:function(e,o){e&1&&(xt(),N(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})();var Na=["determinateSpinner"];function La(i,n){if(i&1&&(Kn(),m(0,"svg",11),J(1,"circle",12),f()),i&2){let t=F();W("viewBox",t._viewBox()),p(),Dt("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),W("r",t._circleRadius())}}var Ba=new g("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:or})}),or=100,za=10,fn=(()=>{class i{_elementRef=s(b);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=s(Ba),e=di(),o=this._elementRef.nativeElement;this._noopAnimations=e==="di-disabled"&&!!t&&!t._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&e==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=or;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-za)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(e,o){if(e&1&&Nt(Na,5),e&2){let r;L(r=B())&&(o._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(e,o){e&2&&(W("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),Bt("mat-"+o.color),Dt("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),E("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",ie],diameter:[2,"diameter","diameter",ie],strokeWidth:[2,"strokeWidth","strokeWidth",ie]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(e,o){if(e&1&&(ee(0,La,2,8,"ng-template",null,0,en),m(2,"div",2,1),Kn(),m(4,"svg",3),J(5,"circle",4),f()(),Ji(),m(6,"div",5)(7,"div",6)(8,"div",7),qe(9,8),f(),m(10,"div",9),qe(11,8),f(),m(12,"div",10),qe(13,8),f()()()),e&2){let r=_e(1);p(4),W("viewBox",o._viewBox()),p(),Dt("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),W("r",o._circleRadius()),p(4),k("ngTemplateOutlet",r),p(2),k("ngTemplateOutlet",r),p(2),k("ngTemplateOutlet",r)}},dependencies:[rn],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ur=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||i)(z(X),z(b))};static \u0275dir=w({type:i})}return i})(),ja=(()=>{class i extends ur{static \u0275fac=(()=>{let t;return function(o){return(t||(t=Wt(i)))(o||i)}})();static \u0275dir=w({type:i,features:[Q]})}return i})(),hr=new g("");var Ha={provide:hr,useExisting:Ut(()=>me),multi:!0};function Ua(){let i=Qn()?Qn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Wa=new g(""),me=(()=>{class i extends ur{_compositionMode;_composing=!1;constructor(t,e,o){super(t,e),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Ua())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||i)(z(X),z(b),z(Wa,8))};static \u0275dir=w({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){e&1&&M("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[tt([Ha]),Q]})}return i})();function _i(i){return i==null||bi(i)===0}function bi(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Rn=new g(""),vi=new g(""),Ga=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,gn=class{static min(n){return Ya(n)}static max(n){return $a(n)}static required(n){return Xa(n)}static requiredTrue(n){return qa(n)}static email(n){return Za(n)}static minLength(n){return Ka(n)}static maxLength(n){return Qa(n)}static pattern(n){return fr(n)}static nullValidator(n){return _n()}static compose(n){return yr(n)}static composeAsync(n){return xr(n)}};function Ya(i){return n=>{if(n.value==null||i==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<i?{min:{min:i,actual:n.value}}:null}}function $a(i){return n=>{if(n.value==null||i==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>i?{max:{max:i,actual:n.value}}:null}}function Xa(i){return _i(i.value)?{required:!0}:null}function qa(i){return i.value===!0?null:{required:!0}}function Za(i){return _i(i.value)||Ga.test(i.value)?null:{email:!0}}function Ka(i){return n=>{let t=n.value?.length??bi(n.value);return t===null||t===0?null:t<i?{minlength:{requiredLength:i,actualLength:t}}:null}}function Qa(i){return n=>{let t=n.value?.length??bi(n.value);return t!==null&&t>i?{maxlength:{requiredLength:i,actualLength:t}}:null}}function fr(i){if(!i)return _n;let n,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=i.toString(),n=i),e=>{if(_i(e.value))return null;let o=e.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function _n(i){return null}function pr(i){return i!=null}function gr(i){return ro(i)?Yi(i):i}function _r(i){let n={};return i.forEach(t=>{n=t!=null?h(h({},n),t):n}),Object.keys(n).length===0?null:n}function br(i,n){return n.map(t=>t(i))}function Ja(i){return!i.validate}function vr(i){return i.map(n=>Ja(n)?n:t=>n.validate(t))}function yr(i){if(!i)return null;let n=i.filter(pr);return n.length==0?null:function(t){return _r(br(t,n))}}function yi(i){return i!=null?yr(vr(i)):null}function xr(i){if(!i)return null;let n=i.filter(pr);return n.length==0?null:function(t){let e=br(t,n).map(gr);return ze(e).pipe(P(_r))}}function xi(i){return i!=null?xr(vr(i)):null}function rr(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Cr(i){return i._rawValidators}function wr(i){return i._rawAsyncValidators}function pi(i){return i?Array.isArray(i)?i:[i]:[]}function bn(i,n){return Array.isArray(i)?i.includes(n):i===n}function ar(i,n){let t=pi(n);return pi(i).forEach(o=>{bn(t,o)||t.push(o)}),t}function sr(i,n){return pi(n).filter(t=>!bn(i,t))}var vn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=yi(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=xi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},qt=class extends vn{name;get formDirective(){return null}get path(){return null}},Zt=class extends vn{_parent=null;name=null;valueAccessor=null},gi=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var In=(()=>{class i extends gi{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(z(Zt,2))};static \u0275dir=w({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){e&2&&E("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[Q]})}return i})();var Re="VALID",pn="INVALID",de="PENDING",Ie="DISABLED",zt=class{},yn=class extends zt{value;source;constructor(n,t){super(),this.value=n,this.source=t}},Oe=class extends zt{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Fe=class extends zt{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},ce=class extends zt{status;source;constructor(n,t){super(),this.status=n,this.source=t}},xn=class extends zt{source;constructor(n){super(),this.source=n}},Cn=class extends zt{source;constructor(n){super(),this.source=n}};function Er(i){return(An(i)?i.validators:i)||null}function ts(i){return Array.isArray(i)?yi(i):i||null}function Dr(i,n){return(An(n)?n.asyncValidators:i)||null}function es(i){return Array.isArray(i)?xi(i):i||null}function An(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ns(i,n,t){let e=i.controls;if(!(n?Object.keys(e):e).length)throw new Ht(1e3,"");if(!e[t])throw new Ht(1001,"")}function is(i,n,t){i._forEachChild((e,o)=>{if(t[o]===void 0)throw new Ht(-1002,"")})}var wn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ht(this.statusReactive)}set status(n){ht(()=>this.statusReactive.set(n))}_status=Y(()=>this.statusReactive());statusReactive=V(void 0);get valid(){return this.status===Re}get invalid(){return this.status===pn}get pending(){return this.status===de}get disabled(){return this.status===Ie}get enabled(){return this.status!==Ie}errors;get pristine(){return ht(this.pristineReactive)}set pristine(n){ht(()=>this.pristineReactive.set(n))}_pristine=Y(()=>this.pristineReactive());pristineReactive=V(!0);get dirty(){return!this.pristine}get touched(){return ht(this.touchedReactive)}set touched(n){ht(()=>this.touchedReactive.set(n))}_touched=Y(()=>this.touchedReactive());touchedReactive=V(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(ar(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(ar(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(sr(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(sr(n,this._rawAsyncValidators))}hasValidator(n){return bn(this._rawValidators,n)}hasAsyncValidator(n){return bn(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let e=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(R(h({},n),{sourceControl:e})),t&&n.emitEvent!==!1&&this._events.next(new Fe(!0,e))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:e})}),n.onlySelf||this._parent?._updateTouched(n,e),t&&n.emitEvent!==!1&&this._events.next(new Fe(!1,e))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let e=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(R(h({},n),{sourceControl:e})),t&&n.emitEvent!==!1&&this._events.next(new Oe(!1,e))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,e),t&&n.emitEvent!==!1&&this._events.next(new Oe(!0,e))}markAsPending(n={}){this.status=de;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ce(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(R(h({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Ie,this.errors=null,this._forEachChild(o=>{o.disable(R(h({},n),{onlySelf:!0}))}),this._updateValue();let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yn(this.value,e)),this._events.next(new ce(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(R(h({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Re,this._forEachChild(e=>{e.enable(R(h({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(R(h({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Re||this.status===de)&&this._runAsyncValidator(e,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yn(this.value,t)),this._events.next(new ce(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(R(h({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ie:Re}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=de,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let e=gr(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,o)=>e&&e._find(o),this)}getError(n,t){let e=t?this.get(t):this;return e?.errors?e.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,e){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||e)&&this._events.next(new ce(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,e)}_initObservables(){this.valueChanges=new dt,this.statusChanges=new dt}_calculateStatus(){return this._allControlsDisabled()?Ie:this.errors?pn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(de)?de:this._anyControlsHaveStatus(pn)?pn:Re}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let e=!this._anyControlsDirty(),o=this.pristine!==e;this.pristine=e,n.onlySelf||this._parent?._updatePristine(n,t),o&&this._events.next(new Oe(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Fe(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){An(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=ts(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=es(this._rawAsyncValidators)}},En=class extends wn{constructor(n,t,e){super(Er(t),Dr(e,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,e={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){is(this,!0,n),Object.keys(n).forEach(e=>{ns(this,!0,e),this.controls[e].setValue(n[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(e=>{let o=this.controls[e];o&&o.patchValue(n[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((e,o)=>{e.reset(n?n[o]:null,R(h({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Cn(this))}getRawValue(){return this._reduceChildren({},(n,t,e)=>(n[e]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&n(e,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&n(e))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(n,t){let e=n;return this._forEachChild((o,r)=>{e=t(e,o,r)}),e}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var On=new g("",{factory:()=>Ci}),Ci="always";function os(i,n){return[...n.path,i]}function Dn(i,n,t=Ci){wi(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),as(i,n),ls(i,n),ss(i,n),rs(i,n)}function lr(i,n,t=!0){let e=()=>{};n?.valueAccessor?.registerOnChange(e),n?.valueAccessor?.registerOnTouched(e),Sn(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Mn(i,n){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function rs(i,n){if(n.valueAccessor.setDisabledState){let t=e=>{n.valueAccessor.setDisabledState(e)};i.registerOnDisabledChange(t),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function wi(i,n){let t=Cr(i);n.validator!==null?i.setValidators(rr(t,n.validator)):typeof t=="function"&&i.setValidators([t]);let e=wr(i);n.asyncValidator!==null?i.setAsyncValidators(rr(e,n.asyncValidator)):typeof e=="function"&&i.setAsyncValidators([e]);let o=()=>i.updateValueAndValidity();Mn(n._rawValidators,o),Mn(n._rawAsyncValidators,o)}function Sn(i,n){let t=!1;if(i!==null){if(n.validator!==null){let o=Cr(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.validator);r.length!==o.length&&(t=!0,i.setValidators(r))}}if(n.asyncValidator!==null){let o=wr(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.asyncValidator);r.length!==o.length&&(t=!0,i.setAsyncValidators(r))}}}let e=()=>{};return Mn(n._rawValidators,e),Mn(n._rawAsyncValidators,e),t}function as(i,n){n.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Mr(i,n)})}function ss(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Mr(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function Mr(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ls(i,n){let t=(e,o)=>{n.valueAccessor.writeValue(e),o&&n.viewToModelUpdate(e)};i.registerOnChange(t),n._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Sr(i,n){i==null,wi(i,n)}function ds(i,n){return Sn(i,n)}function cs(i,n){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function ms(i){return Object.getPrototypeOf(i.constructor)===ja}function Rr(i,n){i._syncPendingControls(),n.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function us(i,n){if(!n)return null;Array.isArray(n);let t,e,o;return n.forEach(r=>{r.constructor===me?t=r:ms(r)?e=r:o=r}),o||e||t||null}function hs(i,n){let t=i.indexOf(n);t>-1&&i.splice(t,1)}var fs={provide:qt,useExisting:Ut(()=>Ei)},Ae=Promise.resolve(),Ei=(()=>{class i extends qt{callSetDisabledState;get submitted(){return ht(this.submittedReactive)}_submitted=Y(()=>this.submittedReactive());submittedReactive=V(!1);_directives=new Set;form;ngSubmit=new dt;options;constructor(t,e,o){super(),this.callSetDisabledState=o,this.form=new En({},yi(t),xi(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ae.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),Dn(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ae.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Ae.then(()=>{let e=this._findContainer(t.path),o=new En({});Sr(o,t),e.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ae.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){Ae.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Rr(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new xn(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||i)(z(Rn,10),z(vi,10),z(On,8))};static \u0275dir=w({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,o){e&1&&M("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[tt([fs]),Q]})}return i})();function dr(i,n){let t=i.indexOf(n);t>-1&&i.splice(t,1)}function cr(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ir=class extends wn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,e){super(Er(t),Dr(e,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),An(t)&&(t.nonNullable||t.initialValueIsDefault)&&(cr(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Cn(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){dr(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){dr(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){cr(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var ps=i=>i instanceof Ir;var gs={provide:Zt,useExisting:Ut(()=>ke)},mr=Promise.resolve(),ke=(()=>{class i extends Zt{_changeDetectorRef;callSetDisabledState;control=new Ir;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new dt;constructor(t,e,o,r,a,l){super(),this._changeDetectorRef=a,this.callSetDisabledState=l,this._parent=t,this._setValidators(e),this._setAsyncValidators(o),this.valueAccessor=us(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let e=t.name.previousValue;this.formDirective.removeControl({name:e,path:this._getPath(e)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),cs(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Dn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){mr.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let e=t.isDisabled.currentValue,o=e!==0&&et(e);mr.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?os(t,this._parent):[t]}static \u0275fac=function(e){return new(e||i)(z(qt,9),z(Rn,10),z(vi,10),z(hr,10),z(Yt,8),z(On,8))};static \u0275dir=w({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[tt([gs]),Q,Pt]})}return i})();var _s=(()=>{class i extends qt{callSetDisabledState;get submitted(){return ht(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Y(()=>this._submittedReactive());_submittedReactive=V(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Sn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return Dn(e,t,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){lr(t.control||null,t,!1),hs(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Rr(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new xn(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,o=this.form.get(t.path);e!==o&&(lr(e||null,t),ps(o)&&(Dn(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);Sr(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&ds(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){wi(this.form,this),this._oldForm&&Sn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(e){return new(e||i)(z(Rn,10),z(vi,10),z(On,8))};static \u0275dir=w({type:i,features:[Q,Pt]})}return i})();var bs={provide:qt,useExisting:Ut(()=>Di)},Di=(()=>{class i extends _s{form=null;ngSubmit=new dt;get control(){return this.form}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Wt(i)))(o||i)}})();static \u0275dir=w({type:i,selectors:[["","formGroup",""]],hostBindings:function(e,o){e&1&&M("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[tt([bs]),Q]})}return i})();var vs=(()=>{class i{_validator=_n;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):_n,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,features:[Pt]})}return i})();var ys={provide:Rn,useExisting:Ut(()=>Mi),multi:!0},Mi=(()=>{class i extends vs{pattern;inputName="pattern";normalizeInput=t=>t;createValidator=t=>fr(t);static \u0275fac=(()=>{let t;return function(o){return(t||(t=Wt(i)))(o||i)}})();static \u0275dir=w({type:i,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(e,o){e&2&&W("pattern",o._enabled?o.pattern:null)},inputs:{pattern:"pattern"},standalone:!1,features:[tt([ys]),Q]})}return i})();var xs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=bt({type:i});static \u0275inj=gt({})}return i})();var Fn=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:On,useValue:t.callSetDisabledState??Ci}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=bt({type:i});static \u0275inj=gt({imports:[xs]})}return i})();var Cs=20,Pe=(()=>{class i{_ngZone=s(y);_platform=s(S);_renderer=s(it).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Cs){return this._platform.isBrowser?new Qt(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Xn(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):K()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(wt(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let o=ot(e),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ws=20,kn=(()=>{class i{_platform=s(S);_listeners;_viewportSize=null;_change=new C;_document=s(I);constructor(){let t=s(y),e=s(it).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),a=-r.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:a,left:l}}change(t=ws){return t>0?this._change.pipe(Xn(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Te=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ve=class extends Te{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,t,e,o,r){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=r||null}},Pn=class extends Te{templateRef;viewContainerRef;context;injector;constructor(n,t,e,o){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Si=class extends Te{element;constructor(n){super(),this.element=n instanceof b?n.nativeElement:n}},Ri=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ve)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Pn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Si)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Tn=class extends Ri{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,o=e.get(io,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=n.injector||this._defaultInjector||$.NULL,r=o.get(Jt,e.injector);t=on(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Vn=class{enable(){}disable(){}attach(){}};function Ii(i,n){return n.some(t=>{let e=i.bottom<t.top,o=i.top>t.bottom,r=i.right<t.left,a=i.left>t.right;return e||o||r||a})}function Fr(i,n){return n.some(t=>{let e=i.top<t.top,o=i.bottom>t.bottom,r=i.left<t.left,a=i.right>t.right;return e||o||r||a})}function Oi(i,n){return new Nn(i.get(Pe),i.get(kn),i.get(y),n)}var Nn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,o){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();Ii(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Ln=class{positionStrategy;scrollStrategy=new Vn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Bn=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var Nr=(()=>{class i{_attachedOverlays=[];_document=s(I);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Lr=(()=>{class i extends Nr{_ngZone=s(y);_renderer=s(it).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let r=e[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=Wt(i)))(o||i)}})();static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Br=(()=>{class i extends Nr{_platform=s(S);_ngZone=s(y);_renderer=s(it).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,o),r.listen(e,"click",this._clickListener,o),r.listen(e,"auxclick",this._clickListener,o),r.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=nt(t)};_clickListener=t=>{let e=nt(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,d))){if(kr(l.overlayElement,e)||kr(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=Wt(i)))(o||i)}})();static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function kr(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var zr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),jr=(()=>{class i{_platform=s(S);_containerElement;_document=s(I);_styleLoader=s(mt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||si()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let e=this._document.createElement("div");e.classList.add(t),si()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(zr)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ai=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,o){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Fi(i){return i&&i.nodeType===1}var zn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=At.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,t,e,o,r,a,l,d,u,c=!1,D,q){this._portalOutlet=n,this._host=t,this._pane=e,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=d,this._outsideClickDispatcher=u,this._animationsDisabled=c,this._injector=D,this._renderer=q,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Tt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=h(h({},this._config),n),this._updateElementSize()}setDirection(n){this._config=R(h({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=j(this._config.width),n.height=j(this._config.height),n.minWidth=j(this._config.minWidth),n.minHeight=j(this._config.minHeight),n.maxWidth=j(this._config.maxWidth),n.maxHeight=j(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Fi(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ai(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let o=ii(t||[]).filter(r=>!!r);o.length&&(e?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Tt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Pr="cdk-overlay-connected-position-bounding-box",Es=/([A-Za-z%]+)$/;function ki(i,n){return new jn(n,i.get(kn),i.get(I),i.get(S),i.get(jr))}var jn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=At.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,o,r){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Pr),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,r=[],a;for(let l of this._preferredPositions){let d=this._getOriginPoint(n,o,l),u=this._getOverlayPoint(d,t,l),c=this._getOverlayFit(u,t,e,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,u,e)){r.push({position:l,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!a||a.overlayFit.visibleArea<c.visibleArea)&&(a={overlayFit:c,overlayPoint:u,originPoint:d,position:l,overlayRect:t})}if(r.length){let l=null,d=-1;for(let u of r){let c=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);c>d&&(d=c,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Kt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Pr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof b?this._origin.nativeElement:Fi(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let o;if(e.originX=="center")o=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=e.originX=="start"?a:l}t.left<0&&(o-=t.left);let r;return e.originY=="center"?r=n.top+n.height/2:r=e.originY=="top"?n.top:n.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(n,t,e){let o;e.overlayX=="center"?o=-t.width/2:e.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,t,e,o){let r=Vr(t),{x:a,y:l}=n,d=this._getOffset(o,"x"),u=this._getOffset(o,"y");d&&(a+=d),u&&(l+=u);let c=0-a,D=a+r.width-e.width,q=0-l,rt=l+r.height-e.height,Z=this._subtractOverflows(r.width,c,D),at=this._subtractOverflows(r.height,q,rt),jt=Z*at;return{visibleArea:jt,isCompletelyWithinViewport:r.width*r.height===jt,fitsInViewportVertically:at===r.height,fitsInViewportHorizontally:Z==r.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,r=e.right-t.x,a=Tr(this._overlayRef.getConfig().minHeight),l=Tr(this._overlayRef.getConfig().minWidth),d=n.fitsInViewportVertically||a!=null&&a<=o,u=n.fitsInViewportHorizontally||l!=null&&l<=r;return d&&u}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Vr(t),r=this._viewportRect,a=Math.max(n.x+o.width-r.width,0),l=Math.max(n.y+o.height-r.height,0),d=Math.max(r.top-e.top-n.y,0),u=Math.max(r.left-e.left-n.x,0),c=0,D=0;return o.width<=r.width?c=u||-a:c=n.x<this._getViewportMarginStart()?r.left-e.left-n.x:0,o.height<=r.height?D=d||-l:D=n.y<this._getViewportMarginTop()?r.top-e.top-n.y:0,this._previousPushAmount={x:c,y:D},{x:n.x+c,y:n.y+D}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Ds(this._lastScrollVisibility,e)){let o=new Bn(n,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,o=this._isRtl(),r,a,l;if(t.overlayY==="top")a=n.y,r=e.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-l+this._getViewportMarginTop();else{let rt=Math.min(e.bottom-n.y+e.top,n.y),Z=this._lastBoundingBoxSize.height;r=rt*2,a=n.y-rt,r>Z&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-Z/2)}let d=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,u=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,c,D,q;if(u)q=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=n.x-this._getViewportMarginStart();else if(d)D=n.x,c=e.right-n.x-this._getViewportMarginEnd();else{let rt=Math.min(e.right-n.x+e.left,n.x),Z=this._lastBoundingBoxSize.width;c=rt*2,D=n.x-rt,c>Z&&!this._isInitialRender&&!this._growAfterOpen&&(D=n.x-Z/2)}return{top:a,left:D,bottom:l,right:q,width:c,height:r}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=j(e.width),o.height=j(e.height),o.top=j(e.top)||"auto",o.bottom=j(e.bottom)||"auto",o.left=j(e.left)||"auto",o.right=j(e.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=j(r)),a&&(o.maxWidth=j(a))}this._lastBoundingBoxSize=e,Kt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Kt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Kt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();Kt(e,this._getExactOverlayY(t,n,c)),Kt(e,this._getExactOverlayX(t,n,c))}else e.position="static";let l="",d=this._getOffset(t,"x"),u=this._getOffset(t,"y");d&&(l+=`translateX(${d}px) `),u&&(l+=`translateY(${u}px)`),e.transform=l.trim(),a.maxHeight&&(o?e.maxHeight=j(a.maxHeight):r&&(e.maxHeight="")),a.maxWidth&&(o?e.maxWidth=j(a.maxWidth):r&&(e.maxWidth="")),Kt(this._pane.style,e)}_getExactOverlayY(n,t,e){let o={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=j(r.y);return o}_getExactOverlayX(n,t,e){let o={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(r.x+this._overlayRect.width)}px`}else o.left=j(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Fr(n,e),isOriginOutsideView:Ii(n,e),isOverlayClipped:Fr(t,e),isOverlayOutsideView:Ii(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,o)=>e-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ii(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof b)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function Kt(i,n){for(let t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function Tr(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(Es);return!t||t==="px"?parseFloat(n):null}return i||null}function Vr(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Ds(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Hr=new g("OVERLAY_DEFAULT_CONFIG");function Pi(i,n){i.get(mt).load(zr);let t=i.get(jr),e=i.get(I),o=i.get(Ct),r=i.get(ne),a=i.get(Xt),l=i.get(X,null,{optional:!0})||i.get(it).createRenderer(null,null),d=new Ln(n),u=i.get(Hr,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,"showPopover"in e.body?d.usePopover=n?.usePopover??u:d.usePopover=!1;let c=e.createElement("div"),D=e.createElement("div");c.id=o.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),D.appendChild(c),d.usePopover&&(D.setAttribute("popover","manual"),D.classList.add("cdk-overlay-popover"));let q=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Fi(q)?q.after(D):q?.type==="parent"?q.element.appendChild(D):t.getContainerElement().appendChild(D),new zn(new Tn(c,r,i),D,c,d,i.get(y),i.get(Lr),e,i.get(go),i.get(Br),n?.disableAnimations??i.get(Ye,null,{optional:!0})==="NoopAnimations",i.get(Jt),l)}var Ss=["tooltip"],Rs=20;var Is=new g("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s($);return()=>Oi(i,{scrollThrottle:Rs})}}),As=new g("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ur="tooltip-panel",Os={passive:!0},Fs=8,ks=8,Ps=24,Ts=200,Ne=(()=>{class i{_elementRef=s(b);_ngZone=s(y);_platform=s(S);_ariaDescriber=s(No);_focusMonitor=s(Ee);_dir=s(Xt);_injector=s($);_viewContainerRef=s(ge);_mediaMatcher=s(De);_document=s(I);_renderer=s(X);_animationsDisabled=Mt();_defaultOptions=s(As,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Wr;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=St(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=St(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=re(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=re(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new C;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Fs}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(T(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(e);this._detach(),this._portal=this._portal||new Ve(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(T(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&a._origin instanceof b)return this._overlayRef;this._detach()}let e=this._injector.get(Pe).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Ur}`,r=ki(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return r.positionChanges.pipe(T(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Pi(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(Is)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(T(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(T(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(T(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(T(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();e.withPositions([this._addOffset(h(h({},o.main),r.main)),this._addOffset(h(h({},o.fallback),r.fallback))])}_addOffset(t){let e=ks,o=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=o?-e:e:t.originX==="end"&&(t.offsetX=o?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,o;e=="above"||e=="below"?o={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?o={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,o;e=="above"?o={overlayX:"center",overlayY:"bottom"}:e=="below"?o={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?o={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Tt(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:o,originY:r}=t,a;if(e==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=e==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${Ur}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],o=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;e!==o&&!o.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Os))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,o=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(t==="on"||!e.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||Tt({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!ko(t):!0;static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,o){e&2&&E("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Wr=(()=>{class i{_changeDetectorRef=s(Yt);_elementRef=s(b);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Mt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new C;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Ps&&t.width>=Ts}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(e.classList.remove(t?r:o),e.classList.add(t?o:r),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(e);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(e,o){if(e&1&&Nt(Ss,7),e&2){let r;L(r=B())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,o){e&1&&M("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,o){e&1&&(Vt(0,"div",1,0),so("animationend",function(a){return o._handleAnimationEnd(a)}),Vt(2,"div",2),U(3),Gt()()),e&2&&(Bt(o.tooltipClass),E("mdc-tooltip--multiline",o._isMultiline),p(3),Ke(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var It=class i{#t;#i=new C;updateAnnotationPosition$=this.#i.asObservable();#n=550;#e=.9;#o=16;setDocumentContainer(n){this.#t=n}getAnnotationHorizontalPosition(n,t){if(!this.#t)return{x:0,width:0};let e=this.#t.getBoundingClientRect(),o=Math.min(this.#n,this.#t.clientWidth*this.#e),r=this.#t.scrollLeft,a=Math.min(this.#o,(this.#t.clientWidth-o)/2),l=n.x-e.x+r,d=l+t-o/2;return d=Math.max(r+a,d),d=Math.min(r+this.#t.clientWidth-a-o,d),{x:d-l,width:o}}getPointerPositionPercentByEvent(n,t){let e=(n.clientX-t.left)/t.width,o=(n.clientY-t.top)/t.height;return{x:Math.min(Math.max(0,e),1)*100,y:Math.min(Math.max(0,o),1)*100}}dispatchUpdateAnnotationPosition(){this.#i.next()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac})};var Vs=["pointer"],Ns=["textContainer"];function Ls(i,n){if(i&1){let t=yt();m(0,"div",4)(1,"button",8),M("click",function(){st(t);let o=F();return lt(o.onRemove())}),m(2,"mat-icon"),U(3,"delete_outline"),f()(),m(4,"button",9),M("click",function(){st(t);let o=F();return lt(o.onClose())}),m(5,"mat-icon"),U(6,"close"),f()()()}}var Hn=class i{#t=s(b);#i=s(It);#n=s(_t);pageContainerRef=ve.required();annotation=ve.required();annotationChange=be();remove=be();pointerPositionRatio=Y(()=>({x:this.annotation().x/100,y:this.annotation().y/100}));annotationPositionPx=nn(()=>this.#o(this.pointerPositionRatio()));pointerRef=ct.required("pointer");textContainerRef=ct.required("textContainer");#e=new Be("CLOSED");status=Co(this.#e);constructor(){kt(()=>{if(this.annotation().isActive){this.#e.next("ACTIVE");let n=this.annotation(),{isActive:t}=n,e=Gi(n,["isActive"]);this.annotationChange.emit(e)}})}ngOnInit(){let n=this.#e.pipe(P(t=>t==="ACTIVE"),he(),fe({bufferSize:1,refCount:!0}));pt(H(this.pointerRef().nativeElement,"mousedown"),H(this.pointerRef().nativeElement,"touchstart").pipe(P(t=>t.touches[0]))).pipe(Xi(t=>{let e=pt(H(window,"mousemove"),H(window,"touchmove",{passive:!1}).pipe(P(r=>(r.preventDefault(),r.touches[0]))));this.#e.value!=="ACTIVE"&&(e=e.pipe(Qi(a=>Math.pow(t.clientX-a.clientX,2)+Math.pow(t.clientX-a.clientY,2)<=Math.pow(10,2))));let o=!1;return e.pipe(G(r=>{o=!0,this.#s(r)}),T(pt(H(window,"mouseup"),H(window,"touchend").pipe(P(r=>r.touches[0]))).pipe(G(()=>{o&&H(window,"click",{capture:!0}).pipe(G(r=>r.stopPropagation()),T(je(0))).subscribe()}))),wt(()=>this.#e.value!=="ACTIVE"),G(()=>this.#e.next("ACTIVE")))}),ft(this.#n)).subscribe(),n.pipe(Ft(t=>t?Ot:H(this.#t.nativeElement,"mouseenter").pipe(G(()=>this.#e.next("HOVER")),Ft(()=>H(this.#t.nativeElement,"mouseleave").pipe(Ue(100),G(()=>this.#e.next("CLOSED")),ue(1))))),ft(this.#n)).subscribe(),H(this.#t.nativeElement,"click").pipe(G(()=>this.#e.next("ACTIVE")),ft(this.#n)).subscribe(),n.pipe(Ft(t=>t?pt(H(window,"mousedown"),H(window,"touchstart")).pipe(wt(e=>!this.#a(e.target)),G(()=>this.#e.next("CLOSED"))):Ot),ft(this.#n)).subscribe(),this.#e.pipe(Ft(t=>t==="ACTIVE"?this.#i.updateAnnotationPosition$:t==="HOVER"?K(void 0):Ot),ft(this.#n)).subscribe(()=>this.annotationPositionPx.set(this.#o(this.pointerPositionRatio())))}onRemove(){requestAnimationFrame(()=>this.#r())}onClose(){requestAnimationFrame(()=>this.#e.next("CLOSED"))}onCommentChange(n){this.annotationChange.emit(R(h({},this.annotation()),{comment:n}))}#o(n){let t=this.pageContainerRef().nativeElement.getBoundingClientRect();return this.#i.getAnnotationHorizontalPosition(t,n.x*t.width)}#r(){pt(H(this.textContainerRef().nativeElement,"animationend"),H(this.textContainerRef().nativeElement,"animationcancel")).pipe(ue(1),ft(this.#n)).subscribe(()=>this.remove.emit()),this.#e.next("CLOSED")}#a(n){return this.#t.nativeElement.contains(n)}#s(n){this.annotationChange.emit(h(h({},this.annotation()),this.#i.getPointerPositionPercentByEvent(n,this.pageContainerRef().nativeElement.getBoundingClientRect())))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["db-annotation"]],viewQuery:function(t,e){t&1&&Lt(e.pointerRef,Vs,5)(e.textContainerRef,Ns,5),t&2&&Et(2)},hostVars:12,hostBindings:function(t,e){t&2&&(Dt("--pointer-x-ratio",e.pointerPositionRatio().x)("--pointer-y-ratio",e.pointerPositionRatio().y)("--annotation-x",`${e.annotationPositionPx().x}px`)("--annotation-width",`${e.annotationPositionPx().width}px`),E("__hover",e.status()==="HOVER")("__active",e.status()==="ACTIVE"))},inputs:{pageContainerRef:[1,"pageContainerRef"],annotation:[1,"annotation"]},outputs:{annotationChange:"annotationChange",remove:"remove"},decls:8,vars:3,consts:[["textContainer",""],["textarea",""],["pointer",""],[1,"text-container"],[1,"panel"],["placeholder","Add some annotation here...",3,"ngModelChange","ngModel"],[1,"pointer"],[3,"fontIcon"],["matIconButton","","aria-label","Remove annotation","matTooltip","Remove annotation",1,"icon-button","__close",3,"click"],["matIconButton","","aria-label","Close annotation","matTooltip","Close annotation",1,"icon-button",3,"click"]],template:function(t,e){t&1&&(m(0,"div",3,0),A(2,Ls,7,0,"div",4),m(3,"textarea",5,1),M("ngModelChange",function(r){return e.onCommentChange(r)}),f()(),m(5,"div",6,2),J(7,"mat-icon",7),f()),t&2&&(p(2),O(e.status()==="ACTIVE"?2:-1),p(),k("ngModel",e.annotation().comment),p(4),k("fontIcon",e.status()==="ACTIVE"?"open_with":"chat"))},dependencies:[Fn,me,In,ke,le,Se,Ne],styles:["[_nghost-%COMP%]{position:absolute;top:calc(var(--pointer-y-ratio) * 100%);width:100%;z-index:1}.__hover[_nghost-%COMP%], .__active[_nghost-%COMP%]{z-index:2}.__hover[_nghost-%COMP%]   .pointer[_ngcontent-%COMP%], .__active[_nghost-%COMP%]   .pointer[_ngcontent-%COMP%]{opacity:1}.__hover[_nghost-%COMP%]   .text-container[_ngcontent-%COMP%], .__active[_nghost-%COMP%]   .text-container[_ngcontent-%COMP%]{opacity:1;display:block;animation:_ngcontent-%COMP%_fade-in .2s}.__active[_nghost-%COMP%]{z-index:3}.panel[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;margin-top:-4px}.icon-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%}.icon-button.__close[_ngcontent-%COMP%]{color:var(--mat-sys-error)}.pointer[_ngcontent-%COMP%]{position:absolute;left:calc(var(--pointer-x-ratio) * 100%);cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:50%;width:36px;height:36px;background-color:var(--mat-sys-primary);color:var(--mat-sys-on-primary);transform:translate(-18px,-18px);opacity:.5;transition:opacity .2s}.text-container[_ngcontent-%COMP%]{position:absolute;display:none;top:24px;left:var(--annotation-x);width:var(--annotation-width);border-radius:8px;padding:8px;background-color:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary);opacity:0;transform:translateY(-18px);transition:opacity .2s;animation:_ngcontent-%COMP%_fade-out .2s}.text-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:block;height:100px;width:100%;resize:vertical}@keyframes _ngcontent-%COMP%_fade-out{0%{opacity:1;display:block}to{opacity:0;display:none}}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0;display:none}to{opacity:1;display:block}}"]})};var Bs=["pageContainer"];function zs(i,n){if(i&1){let t=yt();m(0,"db-annotation",6),M("annotationChange",function(o){let r=st(t).$index,a=F(2);return lt(a.onAnnotationChange(o,r))})("remove",function(){let o=st(t).$index,r=F(2);return lt(r.onAnnotationRemove(o))}),f()}if(i&2){let t=n.$implicit,e=F(2);k("pageContainerRef",e.pageContainerRef())("annotation",t)}}function js(i,n){if(i&1&&$e(0,zs,1,2,"db-annotation",5,ao),i&2){let t=F();Xe(t.page().annotations)}}function Hs(i,n){i&1&&J(0,"mat-spinner",2),i&2&&k("diameter",24)}function Us(i,n){i&1&&(m(0,"p",4),U(1,"A loading error has occurred."),f())}var Un=class i{#t=s(It);page=ve.required();pageChange=be();status=V("LOADING");pageContainerRef=ct.required("pageContainer");onImageLoadingError(){this.status.set("ERROR")}onImageLoadingEnd(){this.status.set("LOADED")}onAnnotationChange(n,t){let e=[...this.page().annotations];e[t]=n,this.pageChange.emit(R(h({},this.page()),{annotations:e}))}onAnnotationRemove(n){this.pageChange.emit(R(h({},this.page()),{annotations:[...this.page().annotations.slice(0,n),...this.page().annotations.slice(n+1)]}))}onHostClick(n){let t=n.target;t instanceof HTMLElement&&t.closest("db-annotation")||this.pageChange.emit(R(h({},this.page()),{annotations:[...this.page().annotations,R(h({},this.#t.getPointerPositionPercentByEvent(n,this.pageContainerRef().nativeElement.getBoundingClientRect())),{comment:"",isActive:!0})]}))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["db-page-image"]],viewQuery:function(t,e){t&1&&Lt(e.pageContainerRef,Bs,5),t&2&&Et()},hostVars:4,hostBindings:function(t,e){t&1&&M("click",function(r){return e.onHostClick(r)}),t&2&&E("__has-error",e.status()==="ERROR")("__loading",e.status()==="LOADING")},inputs:{page:[1,"page"]},outputs:{pageChange:"pageChange"},decls:6,vars:6,consts:[["pageContainer",""],[1,"container"],[1,"loader",3,"diameter"],[3,"load","error","src","alt"],[1,"error"],[3,"pageContainerRef","annotation"],[3,"annotationChange","remove","pageContainerRef","annotation"]],template:function(t,e){t&1&&(m(0,"div",1,0),A(2,js,2,0),A(3,Hs,1,1,"mat-spinner",2),m(4,"img",3),M("load",function(){return e.onImageLoadingEnd()})("error",function(){return e.onImageLoadingError()}),f(),A(5,Us,2,0,"p",4),f()),t&2&&(p(2),O(e.status()==="LOADED"?2:-1),p(),O(e.status()==="LOADING"?3:-1),p(),k("alt",mo("Page number ",e.page().number))("src",e.page().imageUrl,no),p(),O(e.status()==="ERROR"?5:-1))},dependencies:[Hn,fn],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;padding:calc(8px * var(--page-zoom-ratio)) var(--db_page-space-x)}.__has-error[_nghost-%COMP%]   .container[_ngcontent-%COMP%], .__loading[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{min-height:56px;background-color:var(--db_card-background-color);padding:16px var(--db_card-space-x)}.container[_ngcontent-%COMP%]{position:relative;display:block;box-shadow:0 0 6px #999;width:var(--page-width)}img[_ngcontent-%COMP%]{display:block;width:100%}.loader[_ngcontent-%COMP%]{position:absolute}.error[_ngcontent-%COMP%]{margin:8px 0 0;display:block;color:var(--db_error-color)}"]})};var Vi=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Qt(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),e.unsubscribe(),this._elementObservables.delete(n)}}).pipe(wt(t=>t.some(e=>e.target===n)),fe({bufferSize:1,refCount:!0}),T(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Gr=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(y);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let o=e?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Vi(o)),this._observers.get(o).observe(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ws=["notch"],Gs=["matFormFieldNotchedOutline",""],Ys=["*"],Yr=["iconPrefixContainer"],$r=["textPrefixContainer"],Xr=["iconSuffixContainer"],qr=["textSuffixContainer"],$s=["textField"],Xs=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],qs=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Zs(i,n){i&1&&J(0,"span",21)}function Ks(i,n){if(i&1&&(m(0,"label",20),N(1,1),A(2,Zs,1,0,"span",21),f()),i&2){let t=F(2);k("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),W("for",t._control.disableAutomaticLabeling?null:t._control.id),p(2),O(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Qs(i,n){if(i&1&&A(0,Ks,3,5,"label",20),i&2){let t=F();O(t._hasFloatingLabel()?0:-1)}}function Js(i,n){i&1&&J(0,"div",7)}function tl(i,n){}function el(i,n){if(i&1&&ee(0,tl,0,0,"ng-template",13),i&2){F(2);let t=_e(1);k("ngTemplateOutlet",t)}}function nl(i,n){if(i&1&&(m(0,"div",9),A(1,el,1,1,null,13),f()),i&2){let t=F();k("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),p(),O(t._forceDisplayInfixLabel()?-1:1)}}function il(i,n){i&1&&(m(0,"div",10,2),N(2,2),f())}function ol(i,n){i&1&&(m(0,"div",11,3),N(2,3),f())}function rl(i,n){}function al(i,n){if(i&1&&ee(0,rl,0,0,"ng-template",13),i&2){F();let t=_e(1);k("ngTemplateOutlet",t)}}function sl(i,n){i&1&&(m(0,"div",14,4),N(2,4),f())}function ll(i,n){i&1&&(m(0,"div",15,5),N(2,5),f())}function dl(i,n){i&1&&J(0,"div",16)}function cl(i,n){i&1&&(m(0,"div",18),N(1,6),f())}function ml(i,n){if(i&1&&(m(0,"mat-hint",22),U(1),f()),i&2){let t=F(2);k("id",t._hintLabelId),p(),Ke(t.hintLabel)}}function ul(i,n){if(i&1&&(m(0,"div",19),A(1,ml,2,2,"mat-hint",22),N(2,7),J(3,"div",23),N(4,8),f()),i&2){let t=F();p(),O(t.hintLabel?1:-1)}}var Ni=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["mat-label"]]})}return i})(),hl=new g("MatError");var Li=(()=>{class i{align="start";id=s(Ct).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,o){e&2&&(Ze("id",o.id),W("align",null),E("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),fl=new g("MatPrefix");var na=new g("MatSuffix"),Bi=(()=>{class i{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[tt([{provide:na,useExisting:i}])]})}return i})(),ia=new g("FloatingLabelParent"),Zr=(()=>{class i{_elementRef=s(b);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Gr);_ngZone=s(y);_parent=s(ia);_resizeSubscription=new At;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,o){e&2&&E("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function pl(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var Kr="mdc-line-ripple--active",Wn="mdc-line-ripple--deactivating",Qr=(()=>{class i{_elementRef=s(b);_cleanupTransitionEnd;constructor(){let t=s(y),e=s(X);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Wn),t.add(Kr)}deactivate(){this._elementRef.nativeElement.classList.add(Wn)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,o=e.contains(Wn);t.propertyName==="opacity"&&o&&e.remove(Kr,Wn)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Jr=(()=>{class i{_elementRef=s(b);_ngZone=s(y);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,o){if(e&1&&Nt(Ws,5),e&2){let r;L(r=B())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,o){e&2&&E("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Gs,ngContentSelectors:Ys,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,o){e&1&&(xt(),vt(0,"div",1),Vt(1,"div",2,0),N(3),Gt(),vt(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),zi=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i})}return i})();var ji=new g("MatFormField"),gl=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ta="fill",_l="auto",ea="fixed",bl="translateY(-50%)",Hi=(()=>{class i{_elementRef=s(b);_changeDetectorRef=s(Yt);_platform=s(S);_idGenerator=s(Ct);_ngZone=s(y);_defaults=s(gl,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ct("iconPrefixContainer");_textPrefixContainerSignal=ct("textPrefixContainer");_iconSuffixContainerSignal=ct("iconSuffixContainer");_textSuffixContainerSignal=ct("textSuffixContainer");_prefixSuffixContainers=Y(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ho(Ni);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=St(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||_l}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||ta;this._appearanceSignal.set(e)}_appearanceSignal=V(ta);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ea}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||ea}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Mt();constructor(){let t=this._defaults,e=s(Xt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),kt(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Y(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(o+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Zn([void 0,void 0]),P(()=>[e.errorState,e.userAriaDescribedBy]),qn(),wt(([[r,a],[l,d]])=>r!==l||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(T(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),pt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){po({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Y(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,o;if(e){let r=this._describedByIds||t;o=t.concat(e.filter(a=>a&&!r.includes(a)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=e?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=r?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",D=`${a+l}px`,rt=`calc(${c} * (${D} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Z=`var(--mat-mdc-form-field-label-transform, ${bl} translateX(${rt}))`,at=a+l+d+u;return[Z,at]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-form-field"]],contentQueries:function(e,o,r){if(e&1&&(co(r,o._labelChild,Ni,5),lo(r,zi,5)(r,fl,5)(r,na,5)(r,hl,5)(r,Li,5)),e&2){Et();let a;L(a=B())&&(o._formFieldControl=a.first),L(a=B())&&(o._prefixChildren=a),L(a=B())&&(o._suffixChildren=a),L(a=B())&&(o._errorChildren=a),L(a=B())&&(o._hintChildren=a)}},viewQuery:function(e,o){if(e&1&&(Lt(o._iconPrefixContainerSignal,Yr,5)(o._textPrefixContainerSignal,$r,5)(o._iconSuffixContainerSignal,Xr,5)(o._textSuffixContainerSignal,qr,5),Nt($s,5)(Yr,5)($r,5)(Xr,5)(qr,5)(Zr,5)(Jr,5)(Qr,5)),e&2){Et(4);let r;L(r=B())&&(o._textField=r.first),L(r=B())&&(o._iconPrefixContainer=r.first),L(r=B())&&(o._textPrefixContainer=r.first),L(r=B())&&(o._iconSuffixContainer=r.first),L(r=B())&&(o._textSuffixContainer=r.first),L(r=B())&&(o._floatingLabel=r.first),L(r=B())&&(o._notchedOutline=r.first),L(r=B())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,o){e&2&&E("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[tt([{provide:ji,useExisting:i},{provide:ia,useExisting:i}])],ngContentSelectors:qs,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,o){if(e&1&&(xt(Xs),ee(0,Qs,1,1,"ng-template",null,0,en),m(2,"div",6,1),M("click",function(a){return o._control.onContainerClick(a)}),A(4,Js,1,0,"div",7),m(5,"div",8),A(6,nl,2,2,"div",9),A(7,il,3,0,"div",10),A(8,ol,3,0,"div",11),m(9,"div",12),A(10,al,1,1,null,13),N(11),f(),A(12,sl,3,0,"div",14),A(13,ll,3,0,"div",15),f(),A(14,dl,1,0,"div",16),f(),m(15,"div",17),A(16,cl,2,0,"div",18)(17,ul,5,1,"div",19),f()),e&2){let r;p(2),E("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),p(2),O(!o._hasOutline()&&!o._control.disabled?4:-1),p(2),O(o._hasOutline()?6:-1),p(),O(o._hasIconPrefix?7:-1),p(),O(o._hasTextPrefix?8:-1),p(2),O(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),p(2),O(o._hasTextSuffix?12:-1),p(),O(o._hasIconSuffix?13:-1),p(),O(o._hasOutline()?-1:14),p(),E("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();p(),O((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Zr,Jr,rn,Qr,Li],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var vl=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),yl={passive:!0},oa=(()=>{class i{_platform=s(S);_ngZone=s(y);_renderer=s(it).createRenderer(null,null);_styleLoader=s(mt);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return Ot;this._styleLoader.load(vl);let e=ot(t),o=this._monitoredElements.get(e);if(o)return o.subject;let r=new C,a="cdk-text-field-autofilled",l=u=>{u.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(a)?(e.classList.add(a),this._ngZone.run(()=>r.next({target:u.target,isAutofilled:!0}))):u.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(a)&&(e.classList.remove(a),this._ngZone.run(()=>r.next({target:u.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",l,yl)));return this._monitoredElements.set(e,{subject:r,unlisten:d}),r}stopMonitoring(t){let e=ot(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ra=new g("MAT_INPUT_VALUE_ACCESSOR");var aa=(()=>{class i{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=_({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gn=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,t,e,o,r){this._defaultMatcher=n,this.ngControl=t,this._parentFormGroup=e,this._parentForm=o,this._stateChanges=r}updateErrorState(){let n=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=e?.isErrorState(o,t)??!1;r!==n&&(this.errorState=r,this._stateChanges.next())}};var xl=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Cl=new g("MAT_INPUT_CONFIG"),sa=(()=>{class i{_elementRef=s(b);_platform=s(S);ngControl=s(Zt,{optional:!0,self:!0});_autofillMonitor=s(oa);_ngZone=s(y);_formField=s(ji,{optional:!0});_renderer=s(X);_uid=s(Ct).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Cl,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=St(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(gn.required)??!1}set required(t){this._required=St(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&li().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=St(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>li().has(t));constructor(){let t=s(Ei,{optional:!0}),e=s(Di,{optional:!0}),o=s(aa),r=s(ra,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?oo(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Gn(o,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&kt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){xl.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=w({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,o){e&1&&M("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(Ze("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),W("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),E("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",et]},exportAs:["matInput"],features:[tt([{provide:zi,useExisting:i}]),Pt]})}return i})();var Yn=class i{#t=100;MIN_ZOOM=25;MAX_ZOOM=500;ZOOM_STEP=25;value=fo.required();textValue=nn(()=>`${this.value()}`);shiftValue(n){let t=this.value()+n;this.applyValue(t)}onInputFocus(){this.#t=this.value()}applyValue(n){let t=parseInt(n,10);isNaN(t)?this.value.set(this.#t):this.value.set(Math.min(Math.max(this.MIN_ZOOM,t),this.MAX_ZOOM)),this.textValue.set(`${this.value()}`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["db-zoom-panel"]],inputs:{value:[1,"value"]},outputs:{value:"valueChange"},decls:11,vars:1,consts:[["input",""],["matIconButton","","aria-label","Zoom out","matTooltip","Zoom out",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"zoom-input-field"],["matInput","","type","text","inputmode","numeric","pattern","[0-9]*",3,"ngModelChange","focus","blur","keydown.enter","ngModel"],["matTextSuffix",""],["matIconButton","","aria-label","Zoom in","matTooltip","Zoom in",3,"click"]],template:function(t,e){if(t&1){let o=yt();m(0,"button",1),M("click",function(){return e.shiftValue(-e.ZOOM_STEP)}),m(1,"mat-icon"),U(2,"remove"),f()(),m(3,"mat-form-field",2)(4,"input",3,0),tn("ngModelChange",function(a){return st(o),Je(e.textValue,a)||(e.textValue=a),lt(a)}),M("focus",function(){return e.onInputFocus()})("blur",function(){return e.applyValue(e.textValue())})("keydown.enter",function(){return e.applyValue(e.textValue())}),f(),m(6,"span",4),U(7,"\xA0%"),f()(),m(8,"button",5),M("click",function(){return e.shiftValue(e.ZOOM_STEP)}),m(9,"mat-icon"),U(10,"add"),f()()}t&2&&(p(4),Qe("ngModel",e.textValue))},dependencies:[Fn,me,In,Mi,ke,Se,le,Ne,Hi,Bi,sa],styles:["[_nghost-%COMP%]{display:flex;gap:4px}.zoom-input-field[_ngcontent-%COMP%]{width:80px;--mat-form-field-container-height: 40px;--mat-form-field-filled-label-display: none;--mat-form-field-container-vertical-padding: 8px;--mat-form-field-filled-with-label-container-padding-top: 8px;--mat-form-field-filled-with-label-container-padding-bottom: 8px}"]})};var Le=class i{getDocument(n){return K({name:"test doc",pages:[{number:1,imageUrl:"pages/1.png"},{number:2,imageUrl:"pages/2.png"},{number:3,imageUrl:"pages/3.png"},{number:4,imageUrl:"pages/4.png"},{number:5,imageUrl:"pages/5.png"}]}).pipe(Ue(Math.floor(Math.random()*1e3)),P(t=>this.#t(t)))}saveDocument(n){return console.log(n),je(Math.floor(Math.random()*1e3)).pipe(P(()=>{}))}#t(n){return R(h({},n),{pages:n.pages.map(t=>R(h({},t),{imageUrl:`images/${t.imageUrl}`,annotations:[]}))})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=_({token:i,factory:i.\u0275fac})};var wl=["documentContainer"],El=(i,n)=>n.number;function Dl(i,n){if(i&1){let t=yt();m(0,"button",9),M("click",function(){st(t);let o=F();return lt(o.onSave())}),m(1,"mat-icon"),U(2,"save"),f(),U(3," Save "),f()}}function Ml(i,n){i&1&&(m(0,"div",7),J(1,"mat-spinner",10),m(2,"h3"),U(3,"Loading..."),f()()),i&2&&(p(),k("diameter",24))}function Sl(i,n){i&1&&(m(0,"div",8)(1,"h3"),U(2,"An error occurred while uploading the document, please try again later..."),f()())}function Rl(i,n){if(i&1){let t=yt();m(0,"db-page-image",12),M("pageChange",function(o){let r=st(t).$index,a=F(3);return lt(a.onPageChange(o,r))}),f()}if(i&2){let t=n.$implicit;k("page",t)}}function Il(i,n){i&1&&$e(0,Rl,1,1,"db-page-image",11,El),i&2&&Xe(n.pages)}function Al(i,n){if(i&1&&A(0,Il,2,0),i&2){let t,e=F();O((t=e.document())?0:-1,t)}}var la=class i{#t=s(It);#i=s(Le);#n=s(_t);DEFAULT_PAGE_WIDTH_PX=794;zoomPercent=V(this.#e(window.innerWidth));zoomRatio=Y(()=>this.zoomPercent()/100);loadingState=V("LADING");document=V(null);documentId$=s(yo).params.pipe(P(n=>n.id));documentContainerRef=ct.required("documentContainer");ngOnInit(){this.#t.setDocumentContainer(this.documentContainerRef().nativeElement),this.documentId$.pipe(G(()=>this.loadingState.set("LADING")),Ft(n=>this.#i.getDocument(n).pipe(G(t=>{this.document.set(t),this.loadingState.set("LOADED")}),He(t=>(this.loadingState.set("ERROR"),this.document.set(null),console.error(t),Ot)))),ft(this.#n)).subscribe(),pt(H(window,"resize"),H(this.documentContainerRef().nativeElement,"scroll")).pipe(ft(this.#n)).subscribe(()=>this.#t.dispatchUpdateAnnotationPosition())}onPageChange(n,t){let e=[...this.document().pages];e[t]=n,this.document.set(R(h({},this.document()),{pages:e}))}onSave(){this.#i.saveDocument(this.document()).pipe(ft(this.#n)).subscribe()}#e(n){return Math.min(Math.floor((n-15-32)/this.DEFAULT_PAGE_WIDTH_PX*100),100)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=v({type:i,selectors:[["db-doc-board-page"]],viewQuery:function(t,e){t&1&&Lt(e.documentContainerRef,wl,5),t&2&&Et()},hostVars:4,hostBindings:function(t,e){t&2&&Dt("--default-page-width",`${e.DEFAULT_PAGE_WIDTH_PX}px`)("--page-zoom-ratio",e.zoomRatio())},features:[tt([Le,It])],decls:10,vars:4,consts:[["documentContainer",""],[3,"title"],[1,"header-panel"],["matButton","filled"],[3,"valueChange","value"],[1,"document-container"],[1,"document-content"],[1,"card","loader"],[1,"card","error"],["matButton","filled",3,"click"],[3,"diameter"],[3,"page"],[3,"pageChange","page"]],template:function(t,e){if(t&1){let o=yt();m(0,"db-header",1)(1,"div",2),A(2,Dl,4,0,"button",3),m(3,"db-zoom-panel",4),tn("valueChange",function(a){return st(o),Je(e.zoomPercent,a)||(e.zoomPercent=a),lt(a)}),f()()(),m(4,"div",5,0)(6,"div",6),A(7,Ml,4,1,"div",7)(8,Sl,3,0,"div",8)(9,Al,1,1),f()()}if(t&2){let o,r;k("title",((o=e.document())==null?null:o.name)||"Loading..."),p(2),O(e.loadingState()==="LOADED"?2:-1),p(),Qe("value",e.zoomPercent),p(4),O((r=e.loadingState())==="LADING"?7:r==="ERROR"?8:r==="LOADED"?9:-1)}},dependencies:[fn,Ko,le,xo,Yn,Un],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:var(--db_page-background-color);height:100%;--page-width: calc(var(--page-zoom-ratio) * var(--default-page-width))}.header-panel[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:auto;gap:8px}.card[_ngcontent-%COMP%]{margin:16px var(--db_page-space-x);padding:32px var(--db_card-space-x);background-color:var(--db_card-background-color)}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.loader[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.error[_ngcontent-%COMP%]{color:var(--db_error-color)}.document-container[_ngcontent-%COMP%]{flex-grow:1;overflow:auto;width:100%}.document-content[_ngcontent-%COMP%]{display:inline-block;min-width:100%}db-page-image[_ngcontent-%COMP%]:first-child{padding-top:16px}"]})};export{la as DocBoardPageComponent};
