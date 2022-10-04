import{r as o,j as e,a as r}from"./index.252e8214.js";import{Link as N}from"./9902071a.js";import"./e5f53d84.js";import"./8da5c389.js";import"./012162d8.js";import"./dc2f4f4e.js";import"./3606955f.js";import"./d6f8319b.js";import"./00da654c.js";import{u as y}from"./a9c55e63.js";import{e as v,p as E}from"./1ae3511f.js";import{callLoginApi as S}from"./821815b4.js";import{g as w}from"./6eb8b136.js";import"./e1828f3b.js";import"./92add5bc.js";import"./66a845bb.js";import"./da876cac.js";import"./d6282b27.js";function H(){const l=y(),[i,n]=o.exports.useState(null),[s,a]=o.exports.useState(""),[c,x]=o.exports.useState(null),[m,b]=o.exports.useState(""),[u,f]=o.exports.useState(null);async function g(t){t.preventDefault(),x(null),f(null),n(null);const p=v(t.currentTarget.email);p&&x(p);const d=E(t.currentTarget.password);if(d&&f(d),p||d)return;const h=await A({email:s,password:m});if(h.error){n(h.error);return}await S({email:s,password:m}),l("/account")}return e("div",{className:"flex justify-center my-24 px-4",children:r("div",{className:"max-w-md w-full",children:[e("h1",{className:"text-4xl",children:"Create an Account."}),r("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:g,children:[i&&e("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:e("p",{className:"m-4 text-s text-contrast",children:i})}),r("div",{className:"mb-3",children:[e("input",{className:`mb-1 ${w(c)}`,id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0,value:s,onChange:t=>{a(t.target.value)}}),c?r("p",{className:"text-red-500 text-xs",children:[c," \xA0"]}):""]}),r("div",{className:"mb-3",children:[e("input",{className:`mb-1 ${w(u)}`,id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",value:m,minLength:8,required:!0,onChange:t=>{b(t.target.value)}}),u?r("p",{className:"text-red-500 text-xs",children:[u," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Create Account"})}),e("div",{className:"flex items-center mt-4",children:r("p",{className:"align-baseline text-sm",children:["Already have an account? \xA0",e(N,{className:"inline underline",to:"/account",children:"Sign in"})]})})]})]})})}async function A({email:l,password:i,firstName:n,lastName:s}){try{const a=await fetch("/account/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:l,password:i,firstName:n,lastName:s})});return a.status===200?{}:a.json()}catch(a){return{error:a.toString()}}}export{H as AccountCreateForm,A as callAccountCreateApi};
//# sourceMappingURL=81d0c0b2.js.map