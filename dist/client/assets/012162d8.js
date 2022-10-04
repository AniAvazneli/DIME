import{r as f,S as N,j as D,R as K}from"./index.252e8214.js";import{M as Y}from"./e1828f3b.js";function k(){return k=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}var w;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(w||(w={}));var A=function(e){return e},M="beforeunload",G="popstate";function J(e){e===void 0&&(e={});var a=e,n=a.window,r=n===void 0?document.defaultView:n,s=r.history;function c(){var t=r.location,o=t.pathname,u=t.search,v=t.hash,l=s.state||{};return[l.idx,A({pathname:o,search:u,hash:v,state:l.usr||null,key:l.key||"default"})]}var i=null;function m(){if(i)d.call(i),i=null;else{var t=w.Pop,o=c(),u=o[0],v=o[1];if(d.length){if(u!=null){var l=h-u;l&&(i={action:t,location:v,retry:function(){b(l*-1)}},b(l))}}else L(t)}}r.addEventListener(G,m);var x=w.Pop,g=c(),h=g[0],p=g[1],S=V(),d=V();h==null&&(h=0,s.replaceState(k({},s.state,{idx:h}),""));function R(t){return typeof t=="string"?t:W(t)}function P(t,o){return o===void 0&&(o=null),A(k({pathname:p.pathname,hash:"",search:""},typeof t=="string"?X(t):t,{state:o,key:Q()}))}function C(t,o){return[{usr:t.state,key:t.key,idx:o},R(t)]}function T(t,o,u){return!d.length||(d.call({action:t,location:o,retry:u}),!1)}function L(t){x=t;var o=c();h=o[0],p=o[1],S.call({action:x,location:p})}function B(t,o){var u=w.Push,v=P(t,o);function l(){B(t,o)}if(T(u,v,l)){var y=C(v,h+1),O=y[0],E=y[1];try{s.pushState(O,"",E)}catch{r.location.assign(E)}L(u)}}function j(t,o){var u=w.Replace,v=P(t,o);function l(){j(t,o)}if(T(u,v,l)){var y=C(v,h),O=y[0],E=y[1];s.replaceState(O,"",E),L(u)}}function b(t){s.go(t)}var z={get action(){return x},get location(){return p},createHref:R,push:B,replace:j,go:b,back:function(){b(-1)},forward:function(){b(1)},listen:function(o){return S.push(o)},block:function(o){var u=d.push(o);return d.length===1&&r.addEventListener(M,$),function(){u(),d.length||r.removeEventListener(M,$)}}};return z}function $(e){e.preventDefault(),e.returnValue=""}function V(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function Q(){return Math.random().toString(36).substr(2,8)}function W(e){var a=e.pathname,n=a===void 0?"/":a,r=e.search,s=r===void 0?"":r,c=e.hash,i=c===void 0?"":c;return s&&s!=="?"&&(n+=s.charAt(0)==="?"?s:"?"+s),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function X(e){var a={};if(e){var n=e.indexOf("#");n>=0&&(a.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(a.search=e.substr(r),e=e.substr(0,r)),e&&(a.pathname=e)}return a}function ae(){const e=f.exports.useContext(N);return e?{serverProps:e.serverProps,setServerProps:e.setServerProps,pending:e.pending}:{}}function Z(){var e;return(e=f.exports.useContext(N))!=null?e:{}}const _=f.exports.createContext(void 0);let H=!0;const U={},F=({history:e,children:a})=>{const n=f.exports.useMemo(()=>e||J(),[e]),[r,s]=f.exports.useState(n.location),[c,i]=f.exports.useState(!1),{pending:m,locationServerProps:x,setLocationServerProps:g}=Z();return te({location:r,pending:m,serverProps:x,scrollNeedsRestoration:c,onFinishNavigating:()=>i(!1)}),f.exports.useLayoutEffect(()=>{const h=n.listen(({location:p,action:S})=>{var P;U[r.key]=window.scrollY,g({pathname:p.pathname,search:p.search}),s(p);const d=(P=p.state)!=null?P:{},R=S==="POP"||!!d.scroll;i(R)});return()=>h()},[n,r,i,s,g]),D(_.Provider,{value:{history:n,location:r},children:a})};function q(){if(Y)return{location:{},history:{}};const e=f.exports.useContext(_);if(e)return e;throw new Error("Router hooks and <Link> component must be used within a <Router> component")}function I(){return q().location}function ee(e){K.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[e])}function te({location:e,pending:a,serverProps:n,scrollNeedsRestoration:r,onFinishNavigating:s}){f.exports.useEffect(()=>{window.history.scrollRestoration="manual"},[]),ee(f.exports.useCallback(()=>{window.history.scrollRestoration="auto"},[])),f.exports.useLayoutEffect(()=>{if(H||!r){H=!1;return}const c=U[e.key];if(!a&&e.pathname===n.pathname&&e.search===n.search){if(e.hash){const m=document.querySelector(e.hash);if(m){m.scrollIntoView(),s();return}}if(c){window.scrollTo(0,c),s();return}window.scrollTo(0,0),s()}},[e.pathname,e.search,e.hash,e.key,a,n.pathname,n.search,r,s])}var se=Object.freeze(Object.defineProperty({__proto__:null,RouterContext:_,BrowserRouter:F,useRouter:q,useLocation:I},Symbol.toStringTag,{value:"Module"}));export{se as B,_ as R,Z as a,ae as b,W as c,q as d,I as u};
//# sourceMappingURL=012162d8.js.map
