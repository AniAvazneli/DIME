import{R as e}from"./index.252e8214.js";import{u as F}from"./6831a51f.js";import{H as l}from"./d6f8319b.js";import{u as C}from"./098c57dd.js";import{f as O}from"./92add5bc.js";import"./012162d8.js";import"./e1828f3b.js";import"./8da5c389.js";function g({title:t}){return t?e.createElement(l,null,e.createElement("title",null,t),e.createElement("meta",{property:"og:title",content:t})):null}function s({description:t}){return t?e.createElement(l,null,e.createElement("meta",{name:"description",content:t}),e.createElement("meta",{property:"og:description",content:t})):null}function y({site:t,title:n,description:r}){return e.createElement(l,null,e.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),t&&e.createElement("meta",{name:"twitter:site",content:t}),n&&e.createElement("meta",{name:"twitter:title",content:n}),r&&e.createElement("meta",{name:"twitter:description",content:r}))}function V({title:t,description:n,url:r,titleTemplate:c,lang:a}){const{language:{isoCode:o}}=C();return e.createElement(e.Fragment,null,e.createElement(l,{defaultTitle:t!=null?t:"",titleTemplate:c!=null?c:`%s - ${t}`},e.createElement("html",{lang:a!=null?a:o}),e.createElement("meta",{property:"og:type",content:"website"}),e.createElement("meta",{property:"og:site_name",content:t!=null?t:""}),e.createElement("meta",{property:"og:url",content:r})),e.createElement(g,{title:t}),e.createElement(s,{description:n}),e.createElement(y,{title:t,description:n}))}function x({title:t,description:n,url:r,titleTemplate:c}){const a={"@context":"http://schema.org","@type":"Organization",name:t,url:r},o={"@context":"http://schema.org","@type":"WebSite",name:t,url:r};return e.createElement(e.Fragment,null,e.createElement(l,{defaultTitle:t!=null?t:"",titleTemplate:c!=null?c:"%s"},e.createElement("meta",{property:"og:url",content:r}),e.createElement("script",{type:"application/ld+json"},JSON.stringify(a)),e.createElement("script",{type:"application/ld+json"},JSON.stringify(o))),e.createElement(g,{title:t}),n&&e.createElement(s,{description:n}))}function b({url:t,width:n,height:r,altText:c}){return e.createElement(l,null,t&&e.createElement("meta",{property:"og:image",content:t}),t&&e.createElement("meta",{property:"og:image:secure_url",content:t}),n&&e.createElement("meta",{property:"og:image:width",content:`${n}`}),r&&e.createElement("meta",{property:"og:image:height",content:`${r}`}),c&&e.createElement("meta",{property:"og:image:alt",content:c}))}function $({url:t,title:n,description:r,seo:c,vendor:a,featuredImage:o,variants:i}){var w,k;const p=(w=c==null?void 0:c.title)!=null?w:n,h=(k=c==null?void 0:c.description)!=null?k:r;let E;const f={"@context":"http://schema.org/","@type":"Product",name:n,description:r,brand:{"@type":"Thing",name:a},url:t};o&&(f.image=o.url);const d=O(i!=null?i:{});if(d.length){const u=d[0];E=u==null?void 0:u.priceV2,u&&u.sku&&(f.sku=u.sku),f.offers=d.map(m=>{var P;if(!m||!((P=m.priceV2)!=null&&P.amount)||!m.priceV2.currencyCode)throw new Error("<ProductSeo/> requires variant.PriceV2 'amount' and 'currency");const S={"@type":"Offer",availability:`https://schema.org/${m.availableForSale?"InStock":"OutOfStock"}`,price:m.priceV2.amount,priceCurrency:m.priceV2.currencyCode};return m.sku&&(S.sku=m.sku),m.image&&m.image.url&&(S.image=m.image.url),S})}return e.createElement(e.Fragment,null,e.createElement(l,null,e.createElement("meta",{property:"og:type",content:"og:product"}),E&&e.createElement("meta",{property:"og:price:amount",content:`${E.amount}`}),E&&e.createElement("meta",{property:"og:price:currency",content:E.currencyCode}),e.createElement("script",{type:"application/ld+json"},JSON.stringify(f))),e.createElement(g,{title:p}),e.createElement(s,{description:h}),e.createElement(y,{title:p,description:h}),o&&e.createElement(b,{...o}))}function D({title:t,description:n,seo:r,image:c}){var i,p;const a=(i=r==null?void 0:r.title)!=null?i:t,o=(p=r==null?void 0:r.description)!=null?p:n;return e.createElement(e.Fragment,null,e.createElement(g,{title:a}),e.createElement(s,{description:o}),e.createElement(y,{title:a,description:o}),c&&e.createElement(b,{...c}))}function N({title:t,seo:n}){var a;const r=(a=n==null?void 0:n.title)!=null?a:t,c=n==null?void 0:n.description;return e.createElement(e.Fragment,null,e.createElement(g,{title:r}),e.createElement(s,{description:c}),e.createElement(y,{title:r,description:c}))}function _({title:t,titleTemplate:n,lang:r}){const{language:{isoCode:c}}=C();return e.createElement(e.Fragment,null,e.createElement(l,{defaultTitle:t!=null?t:"",titleTemplate:n!=null?n:`%s - ${t}`},e.createElement("html",{lang:r!=null?r:c}),e.createElement("meta",{name:"robots",content:"noindex"})))}function U(t){const n=F().href;switch(t.type){case"defaultSeo":return e.createElement(V,{url:n,...t.data});case"homepage":return e.createElement(x,{url:n,...t.data});case"product":return e.createElement($,{url:n,...t.data});case"collection":return e.createElement(D,{...t.data});case"page":return e.createElement(N,{...t.data});case"noindex":return e.createElement(_,{...t.data});default:return console.warn("The <Seo/> only accepts type prop with values of defaultSeo, homepage, product, collection, or page."),null}}export{U as Seo};
//# sourceMappingURL=9c6f3bac.js.map
