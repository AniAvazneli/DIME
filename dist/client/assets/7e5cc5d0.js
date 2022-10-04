import{r as m,a as u,F as I,j as t}from"./index.252e8214.js";import"./9902071a.js";import"./e5f53d84.js";import"./8da5c389.js";import"./012162d8.js";import{u as N,S as $}from"./b2bc9157.js";import{BaseButton as L}from"./38d76324.js";import{M as P}from"./cab3a310.js";import"./3606955f.js";import{u as k}from"./6831a51f.js";import{P as A}from"./dc2f4f4e.js";import"./d6f8319b.js";import"./00da654c.js";import{B as v}from"./7eec9349.js";import{H as B,I as T,a as U}from"./9d1a8ee0.js";import"./1ae3511f.js";import{T as S}from"./c8ad9aa9.js";/* empty css        */import{p as y}from"./0c249477.js";import"./a9c55e63.js";import"./e1828f3b.js";import"./92add5bc.js";import"./66a845bb.js";import"./da876cac.js";import"./d6282b27.js";import"./8d2241ed.js";import"./2dce7371.js";import"./098c57dd.js";import"./c98bad36.js";function R(){return typeof document!="undefined"}function C(){const n=m.exports.useContext(A);if(!n)throw new Error("'useProductOptions' must be a child of <ProductOptionsProvider/>");return n}function j(n){var w;const[e,o]=m.exports.useState(!1),{variantId:c,quantity:s=1,attributes:a,sellingPlanId:p,onClick:r,children:d,accessibleAddingToCartLabel:f,...b}=n,{status:h,linesAdd:x}=N(),{selectedVariant:i}=C(),l=(w=c!=null?c:i==null?void 0:i.id)!=null?w:"",g=c===null||l===""||i===null||e||b.disabled;m.exports.useEffect(()=>{e&&h==="idle"&&o(!1)},[h,e]);const O=m.exports.useCallback(()=>{o(!0),x([{quantity:s,merchandiseId:l,attributes:a,sellingPlanId:p}])},[x,s,l,a,p]);return u(I,{children:[t(L,{...b,disabled:g,onClick:r,defaultOnClick:O,children:d}),f?t("p",{style:{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},role:"alert","aria-live":"assertive",children:e?f:null}):null]})}function ft(){var h,x;const{pathname:n,search:e}=k(),[o,c]=m.exports.useState(new URLSearchParams(e)),{options:s,setSelectedOption:a,selectedOptions:p,selectedVariant:r}=C(),d=!(r!=null&&r.availableForSale)||!1,f=((h=r==null?void 0:r.priceV2)==null?void 0:h.amount)<((x=r==null?void 0:r.compareAtPriceV2)==null?void 0:x.amount)||!1;m.exports.useEffect(()=>{o||!e||c(new URLSearchParams(e))},[o,e]),m.exports.useEffect(()=>{s.map(({name:i,values:l})=>{if(!o)return;const g=o.get(i.toLowerCase())||null;if(g){const O=l.filter(w=>encodeURIComponent(w.toLowerCase())===g);a(i,O[0])}else o.set(encodeURIComponent(i.toLowerCase()),encodeURIComponent(p[i].toLowerCase())),window.history.replaceState(null,"",`${n}?${o.toString()}`)})},[]);const b=m.exports.useCallback((i,l)=>{a(i,l),o&&(o.set(encodeURIComponent(i.toLowerCase()),encodeURIComponent(l.toLowerCase())),R()&&window.history.replaceState(null,"",`${n}?${o.toString()}`))},[a,o,n]);return u("form",{className:"grid gap-10",children:[t("div",{className:"grid gap-4",children:s.map(({name:i,values:l})=>l.length===1?null:u("div",{className:"flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0",children:[t(B,{as:"legend",size:"lead",className:"min-w-[4rem]",children:i}),t("div",{className:"flex flex-wrap items-baseline gap-4",children:t(F,{name:i,handleChange:b,values:l})})]},i))}),u("div",{className:"grid items-stretch gap-4",children:[t(j,{variantId:r==null?void 0:r.id,quantity:1,accessibleAddingToCartLabel:"Adding item to your cart",disabled:d,type:"button",children:t(v,{width:"full",variant:d?"secondary":"primary",as:"span",children:d?t(S,{children:"Sold out"}):u(S,{as:"span",className:"flex items-center justify-center gap-2",children:[t("span",{children:"Add to bag"})," ",t("span",{children:"\xB7"})," ",t(P,{withoutTrailingZeros:!0,data:r.priceV2,as:"span"}),f&&t(P,{withoutTrailingZeros:!0,data:r.compareAtPriceV2,as:"span",className:"opacity-50 strike"})]})})}),!d&&t($,{variantIds:[r.id]})]})]})}function F({values:n,...e}){return n.length>7?t(D,{values:n,...e}):t(E,{values:n,...e})}function E({values:n,name:e,handleChange:o}){const{selectedOptions:c}=C();return t(I,{children:n.map(s=>{const a=c[e]===s,p=`option-${e}-${s}`;return u(S,{as:"label",htmlFor:p,children:[t("input",{className:"sr-only",type:"radio",id:p,name:`option[${e}]`,value:s,checked:a,onChange:()=>o(e,s)}),t("div",{className:`leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200 ${a?"border-primary/50":"border-primary/0"}`,children:s})]},p)})})}function D({values:n,name:e,handleChange:o}){const[c,s]=m.exports.useState(!1),{selectedOptions:a}=C(),p=m.exports.useCallback(r=>{o(e,r)},[e,o]);return t("div",{className:"relative w-full",children:t(y,{onChange:p,value:"",children:({open:r})=>(setTimeout(()=>s(r)),u(I,{children:[u(y.Button,{className:`flex items-center justify-between w-full py-3 px-4 border border-primary ${r?"rounded-b md:rounded-t md:rounded-b-none":"rounded"}`,children:[t("span",{children:a[e]}),t(T,{direction:r?"up":"down"})]}),t(y.Options,{className:`border-primary bg-contrast absolute bottom-12 z-30 grid
                h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height]
                duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b ${c?"max-h-48":"max-h-0"}`,children:n.map(d=>{const f=a[e]===d,b=`option-${e}-${d}`;return t(y.Option,{value:d,children:({active:h})=>u("div",{className:`text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer ${h?"bg-primary/10":null}`,children:[d,f?t("span",{className:"ml-2",children:t(U,{})}):null]})},b)})})]}))})})}export{ft as ProductForm};
//# sourceMappingURL=7e5cc5d0.js.map
