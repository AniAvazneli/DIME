import{r as o,j as e,a,F as g}from"./index.252e8214.js";import{Link as y}from"./9902071a.js";import"./e5f53d84.js";import"./8da5c389.js";import"./012162d8.js";import"./dc2f4f4e.js";import"./3606955f.js";import"./d6f8319b.js";import"./00da654c.js";import{u as F}from"./a9c55e63.js";import{g as w}from"./6eb8b136.js";import"./e1828f3b.js";import"./92add5bc.js";import"./66a845bb.js";import"./da876cac.js";import"./d6282b27.js";function U({shopName:s}){const r=F(),[t,n]=o.exports.useState(!1),[l,d]=o.exports.useState(!0),[c,p]=o.exports.useState(""),[N,m]=o.exports.useState(null),[h,f]=o.exports.useState(""),[v,u]=o.exports.useState(null);function S(i){i.preventDefault(),m(null),n(!1),u(null),l?j(i):E(i)}function j(i){i.currentTarget.email.validity.valid?d(!1):m("Please enter a valid email")}async function E(i){const b=i.currentTarget.password.validity;b.valid?(await P({email:c,password:h})).error?(n(!0),x()):r("/account"):u(b.valueMissing?"Please enter a password":"Passwords must be at least 6 characters")}function x(){d(!0),p(""),m(null),f(""),u(null)}return e("div",{className:"flex justify-center my-24 px-4",children:a("div",{className:"max-w-md w-full",children:[e("h1",{className:"text-4xl",children:"Sign in."}),a("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:S,children:[t&&e("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:e("p",{className:"m-4 text-s text-contrast",children:"Sorry we did not recognize either your email or password. Please try to sign in again or create a new account."})}),l&&e(C,{shopName:s,email:c,setEmail:p,emailError:N}),!l&&e(k,{email:c,resetForm:x}),!l&&e(A,{password:h,setPassword:f,passwordError:v})]})]})})}async function P({email:s,password:r}){try{const t=await fetch("/account/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:s,password:r})});return t.ok?{}:t.json()}catch(t){return{error:t.toString()}}}function C({email:s,setEmail:r,emailError:t,shopName:n}){return a(g,{children:[a("div",{className:"mb-3",children:[e("input",{className:`mb-1 ${w(t)}`,id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0,value:s,onChange:l=>{r(l.target.value)}}),t?a("p",{className:"text-red-500 text-xs",children:[t," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-primary rounded text-contrast py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Next"})}),e("div",{className:"flex items-center mt-8 border-t  border-gray-300",children:a("p",{className:"align-baseline text-sm mt-6",children:["New to ",n,"? \xA0",e(y,{className:"inline underline",to:"/account/register",children:"Create an account"})]})})]})}function k({email:s,resetForm:r}){return a("div",{className:"mb-3 flex items-center justify-between",children:[a("div",{children:[e("p",{children:s}),e("input",{className:"hidden",type:"text",autoComplete:"username",value:s,readOnly:!0})]}),e("div",{children:e("button",{className:"inline-block align-baseline text-sm underline",type:"button",onClick:r,children:"Change email"})})]})}function A({password:s,setPassword:r,passwordError:t}){return a(g,{children:[a("div",{className:"mb-3",children:[e("input",{className:`mb-1 ${w(t)}`,id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",value:s,minLength:8,required:!0,autoFocus:!0,onChange:n=>{r(n.target.value)}}),t?a("p",{className:"text-red-500 text-xs",children:[" ",t," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-primary text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Sign in"})}),a("div",{className:"flex items-center justify-between mt-4",children:[e("div",{className:"flex-1"}),e(y,{className:"inline-block align-baseline text-sm text-primary/50",to:"/account/recover",children:"Forgot password"})]})]})}export{U as AccountLoginForm,P as callLoginApi};
//# sourceMappingURL=821815b4.js.map
