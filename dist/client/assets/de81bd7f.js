import{Link as p}from"./9902071a.js";import{j as e,r as C,a as c,F as O}from"./index.252e8214.js";import"./e5f53d84.js";import"./8da5c389.js";import{u as j}from"./6831a51f.js";import{u as D}from"./b2bc9157.js";import"./dc2f4f4e.js";import"./3606955f.js";import"./d6f8319b.js";import"./00da654c.js";import"./012162d8.js";import{n as M,D as u,v as d,w as $,x as f,H as S,z as h,A as b}from"./9d1a8ee0.js";import"./1ae3511f.js";/* empty css        */import{u as z,o as I,a as F,i as m,C as B}from"./ee7624dc.js";import{T as H}from"./c8ad9aa9.js";import"./a9c55e63.js";import"./e1828f3b.js";import"./92add5bc.js";import"./66a845bb.js";import"./da876cac.js";import"./d6282b27.js";import"./8d2241ed.js";import"./2dce7371.js";import"./cab3a310.js";import"./098c57dd.js";import"./7eec9349.js";import"./891d49ac.js";import"./cf847101.js";import"./904c1e25.js";import"./38d76324.js";function g({className:t="",type:r,variant:a,...s}){const i=M({search:"bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition border-b-2 border-primary/10 focus:border-primary/90",minisearch:"bg-transparent hidden md:inline-block text-left lg:text-right border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-inherit"}[a],t);return e("input",{type:r,...s,className:i})}var X=function(){var t=z(function(){return{x:m?window.pageXOffset:0,y:m?window.pageYOffset:0}}),r=t[0],a=t[1];return C.exports.useEffect(function(){var s=function(){a(function(o){var i=window.pageXOffset,n=window.pageYOffset;return o.x!==i||o.y!==n?{x:i,y:n}:o})};return s(),I(window,"scroll",s,{capture:!1,passive:!0}),function(){F(window,"scroll",s)}},[]),r},x=X;function Y({isOpen:t,onClose:r}){return e(u,{open:t,onClose:r,heading:"Cart",openFrom:"right",children:e("div",{className:"grid",children:e(B,{layout:"drawer",onClose:r})})})}function q({isOpen:t,onClose:r,menu:a}){return e(u,{open:t,onClose:r,openFrom:"left",heading:"Menu",children:e("div",{className:"grid",children:e(A,{menu:a,onClose:r})})})}function A({menu:t,onClose:r}){return e("nav",{className:"grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8",children:((t==null?void 0:t.items)||[]).map(a=>e(p,{to:a.to,target:a.target,onClick:r,children:e(H,{as:"span",size:"copy",children:a.title})},a.id))})}function ye({title:t,menu:r}){const{pathname:a}=j(),s=/^\/([a-z]{2})(\/|$)/i.exec(a),o=s?s[1]:void 0,i=a===`/${o?o+"/":""}`,{isOpen:n,openDrawer:l,closeDrawer:w}=d(),{isOpen:N,openDrawer:v,closeDrawer:k}=d();return c(O,{children:[e(Y,{isOpen:n,onClose:w}),e(q,{isOpen:N,onClose:k,menu:r}),e(W,{countryCode:o,isHome:i,title:t,menu:r,openCart:l}),e(T,{countryCode:o,isHome:i,title:t,openCart:l,openMenu:v})]})}function T({countryCode:t,title:r,isHome:a,openCart:s,openMenu:o}){const{y:i}=x(),n={button:"relative flex items-center justify-center w-8 h-8",container:`${a?"bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader":"bg-contrast/80 text-primary"} ${i>50&&!a?"shadow-lightHeader ":""}flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`};return c("header",{role:"banner",className:n.container,children:[c("div",{className:"flex items-center justify-start w-full gap-4",children:[e("button",{onClick:o,className:n.button,children:e($,{})}),c("form",{action:`/${t?t+"/":""}search`,className:"items-center gap-2 sm:flex",children:[e("button",{type:"submit",className:n.button,children:e(f,{})}),e(g,{className:a?"focus:border-contrast/20 dark:focus:border-primary/20":"focus:border-primary/20",type:"search",variant:"minisearch",placeholder:"Search",name:"q"})]})]}),e(p,{className:"flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full",to:"/",children:e(S,{className:"font-bold text-center",as:a?"h1":"h2",children:r})}),c("div",{className:"flex items-center justify-end w-full gap-4",children:[e(p,{to:"/account",className:n.button,children:e(h,{})}),c("button",{onClick:s,className:n.button,children:[e(b,{}),e(y,{dark:a})]})]})]})}function W({countryCode:t,isHome:r,menu:a,openCart:s,title:o}){const{y:i}=x(),n={button:"relative flex items-center justify-center w-8 h-8 focus:ring-primary/5",container:`${r?"bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader":"bg-contrast/80 text-primary"} ${i>50&&!r?"shadow-lightHeader ":""}hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`};return c("header",{role:"banner",className:n.container,children:[c("div",{className:"flex gap-12",children:[e(p,{className:"font-bold",to:"/",children:o}),e("nav",{className:"flex gap-8",children:((a==null?void 0:a.items)||[]).map(l=>e(p,{to:l.to,target:l.target,children:l.title},l.id))})]}),c("div",{className:"flex items-center gap-1",children:[c("form",{action:`/${t?t+"/":""}search`,className:"flex items-center gap-2",children:[e(g,{className:r?"focus:border-contrast/20 dark:focus:border-primary/20":"focus:border-primary/20",type:"search",variant:"minisearch",placeholder:"Search",name:"q"}),e("button",{type:"submit",className:n.button,children:e(f,{})})]}),e(p,{to:"/account",className:n.button,children:e(h,{})}),c("button",{onClick:s,className:n.button,children:[e(b,{}),e(y,{dark:r})]})]})]})}function y({dark:t}){const{totalQuantity:r}=D();return r<1?null:e("div",{className:`${t?"text-primary bg-contrast dark:text-contrast dark:bg-primary":"text-contrast bg-primary"} absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`,children:e("span",{children:r})})}export{ye as Header};
//# sourceMappingURL=de81bd7f.js.map
