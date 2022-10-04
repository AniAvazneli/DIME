import{r as l,a as o,F as g,j as t}from"./index.252e8214.js";import{B as N}from"./7eec9349.js";import"./9902071a.js";import"./e5f53d84.js";import"./8da5c389.js";import"./012162d8.js";import"./dc2f4f4e.js";import"./3606955f.js";import"./d6f8319b.js";import"./00da654c.js";import{u as z}from"./1ae3511f.js";import{g as u}from"./6eb8b136.js";import{T as x}from"./c8ad9aa9.js";import"./9d1a8ee0.js";/* empty css        */import{M as I}from"./c7c8874c.js";import"./a9c55e63.js";import"./e1828f3b.js";import"./92add5bc.js";import"./66a845bb.js";import"./da876cac.js";import"./d6282b27.js";function ve({addresses:e,defaultAddress:n}){const[i,m]=l.exports.useState(null),[s,c]=l.exports.useState(null),{fullDefaultAddress:p,addressesWithoutDefault:v}=l.exports.useMemo(()=>{const r=e.findIndex(y=>y.id===n);return{addressesWithoutDefault:[...e.slice(0,r),...e.slice(r+1,e.length)],fullDefaultAddress:e[r]}},[e,n]);function d(){m(null),c(null)}function h(r){m(r)}return o(g,{children:[s?t(I,{close:d,children:t(H,{addressId:s,close:d})}):null,i?t(I,{close:d,children:t(_,{address:i,defaultAddress:p===i,close:d})}):null,o("div",{className:"grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12",children:[t("h3",{className:"font-bold text-lead",children:"Address Book"}),o("div",{children:[e!=null&&e.length?null:t(x,{className:"mb-1",width:"narrow",as:"p",size:"copy",children:"You haven't saved any addresses yet."}),t("div",{className:"w-48",children:t(N,{className:"mt-2 text-sm w-full mb-6",onClick:()=>{h({})},variant:"secondary",children:"Add an Address"})}),e!=null&&e.length?o("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:[p?t(P,{address:p,defaultAddress:!0,setDeletingAddress:c.bind(null,p.originalId),editAddress:h}):null,v.map(r=>t(P,{address:r,setDeletingAddress:c.bind(null,r.originalId),editAddress:h},r.id))]}):null]})]})]})}function P({address:e,defaultAddress:n,editAddress:i,setDeletingAddress:m}){return o("div",{className:"lg:p-8 p-6 border border-gray-200 rounded flex flex-col",children:[n?t("div",{className:"mb-3 flex flex-row",children:t("span",{className:"px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary/50",children:"Default"})}):null,o("ul",{className:"flex-1 flex-row",children:[e.firstName||e.lastName?t("li",{children:(e.firstName&&e.firstName+" ")+e.lastName}):t(g,{}),e.formatted?e.formatted.map(s=>t("li",{children:s},s)):t(g,{})]}),o("div",{className:"flex flex-row font-medium mt-6",children:[t("button",{onClick:()=>{i(e)},className:"text-left underline text-sm",children:"Edit"}),t("button",{onClick:m,className:"text-left text-primary/50 ml-6 text-sm",children:"Remove"})]})]})}function _({address:e,defaultAddress:n,close:i}){const m=l.exports.useMemo(()=>!Object.keys(e).length,[e]),[s,c]=l.exports.useState(!1),[p,v]=l.exports.useState(null),[d,h]=l.exports.useState((e==null?void 0:e.address1)||""),[r,y]=l.exports.useState((e==null?void 0:e.address2)||""),[f,q]=l.exports.useState((e==null?void 0:e.firstName)||""),[A,F]=l.exports.useState((e==null?void 0:e.lastName)||""),[b,T]=l.exports.useState((e==null?void 0:e.company)||""),[S,B]=l.exports.useState((e==null?void 0:e.country)||""),[w,L]=l.exports.useState((e==null?void 0:e.province)||""),[k,M]=l.exports.useState((e==null?void 0:e.city)||""),[D,R]=l.exports.useState((e==null?void 0:e.zip)||""),[E,O]=l.exports.useState((e==null?void 0:e.phone)||""),[C,U]=l.exports.useState(n),Z=z();async function W(a){a.preventDefault(),c(!0);const j=await $({id:e==null?void 0:e.originalId,firstName:f,lastName:A,company:b,address1:d,address2:r,country:S,province:w,city:k,zip:D,phone:E,isDefaultAddress:C});if(c(!1),j.error){v(j.error);return}Z(),i()}return o(g,{children:[t(x,{className:"mt-4 mb-6",as:"h3",size:"lead",children:m?"Add address":"Edit address"}),t("div",{className:"max-w-lg",children:o("form",{noValidate:!0,onSubmit:W,children:[p&&t("div",{className:"flex items-center justify-center mb-6 bg-red-100 rounded",children:t("p",{className:"m-4 text-sm text-red-900",children:p})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"firstname",name:"firstname",required:!0,type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",value:f,onChange:a=>{q(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"lastname",name:"lastname",required:!0,type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",value:A,onChange:a=>{F(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"company",name:"company",type:"text",autoComplete:"organization",placeholder:"Company","aria-label":"Company",value:b,onChange:a=>{T(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"street1",name:"street1",type:"text",autoComplete:"address-line1",placeholder:"Address line 1*",required:!0,"aria-label":"Address line 1",value:d,onChange:a=>{h(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"address2",name:"address2",type:"text",autoComplete:"address-line2",placeholder:"Addresss line 2","aria-label":"Address line 2",value:r,onChange:a=>{y(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"city",name:"city",type:"text",required:!0,autoComplete:"address-level2",placeholder:"City","aria-label":"City",value:k,onChange:a=>{M(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"state",name:"state",type:"text",autoComplete:"address-level1",placeholder:"State / Province",required:!0,"aria-label":"State",value:w,onChange:a=>{L(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"zip",name:"zip",type:"text",autoComplete:"postal-code",placeholder:"Zip / Postal Code",required:!0,"aria-label":"Zip",value:D,onChange:a=>{R(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"country",name:"country",type:"text",autoComplete:"country-name",placeholder:"Country",required:!0,"aria-label":"Country",value:S,onChange:a=>{B(a.target.value)}})}),t("div",{className:"mt-3",children:t("input",{className:u(),id:"phone",name:"phone",type:"tel",autoComplete:"tel",placeholder:"Phone","aria-label":"Phone",value:E,onChange:a=>{O(a.target.value)}})}),o("div",{className:"mt-4",children:[t("input",{type:"checkbox",value:"",name:"defaultAddress",id:"defaultAddress",checked:C,className:"border-gray-500 rounded-sm cursor-pointer border-1",onChange:()=>U(!C)}),t("label",{className:"inline-block ml-2 text-sm cursor-pointer",htmlFor:"defaultAddress",children:"Set as default address"})]}),t("div",{className:"mt-8",children:t(N,{className:"w-full rounded focus:shadow-outline",type:"submit",variant:"primary",disabled:s,children:"Save"})}),t("div",{children:t(N,{className:"w-full mt-2 rounded focus:shadow-outline",variant:"secondary",onClick:i,children:"Cancel"})})]})})]})}async function $({id:e,firstName:n,lastName:i,company:m,address1:s,address2:c,country:p,province:v,city:d,phone:h,zip:r,isDefaultAddress:y}){try{const f=await fetch(e?`/account/address/${encodeURIComponent(e)}`:"/account/address",{method:e?"PATCH":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:n,lastName:i,company:m,address1:s,address2:c,country:p,province:v,city:d,phone:h,zip:r,isDefaultAddress:y})});return f.ok?{}:f.json()}catch{return{error:"Error saving address. Please try again."}}}function H({addressId:e,close:n}){const i=z();async function m(s){const c=await J(s);if(c.error){alert(c.error);return}i(),n()}return o(g,{children:[t(x,{className:"mb-4",as:"h3",size:"lead",children:"Confirm removal"}),t(x,{as:"p",children:"Are you sure you wish to remove this address?"}),o("div",{className:"mt-6",children:[t(N,{className:"text-sm",onClick:()=>{m(e)},variant:"primary",width:"full",children:"Confirm"}),t(N,{className:"text-sm mt-2",onClick:n,variant:"secondary",width:"full",children:"Cancel"})]})]})}async function J(e){try{const n=await fetch(`/account/address/${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}});return n.ok?{}:n.json()}catch{return{error:"Error removing address. Please try again."}}}export{ve as AccountAddressBook};
//# sourceMappingURL=085d0ac1.js.map
