(()=>{var e={};e.id=556,e.ids=[556],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7654:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(1766),r(3816),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["productupload",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1766)),"C:\\Users\\Aditya Pratap\\code\\Wastepursue\\wastepursue-frontened\\src\\app\\productupload\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3816)),"C:\\Users\\Aditya Pratap\\code\\Wastepursue\\wastepursue-frontened\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Aditya Pratap\\code\\Wastepursue\\wastepursue-frontened\\src\\app\\productupload\\page.tsx"],u="/productupload/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/productupload/page",pathname:"/productupload",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5208:(e,t,r)=>{Promise.resolve().then(r.bind(r,2054))},2054:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(326),s=r(5047),n=r(7577);let i=()=>{let e=(0,s.useRouter)(),[t,r]=(0,n.useState)({name:"",category:"",price:"",image:null,description:"",quantity:""}),i=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:a}))},o=async a=>{a.preventDefault();try{let a=new FormData;for(let e in t)a.append(e,t[e]);(await fetch("http://localhost:5000/api/products/create",{method:"POST",body:a})).ok?(r({name:"",category:"",price:"",image:null,description:"",quantity:""}),e.push("/home"),alert("added successfully")):console.error("Failed to upload product")}catch(e){console.error("Error uploading product:",e)}};return(0,a.jsxs)("form",{onSubmit:o,className:"max-w-md mx-auto pt-[100px]",children:[(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"block mb-2",htmlFor:"name",children:"Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:i,className:"border px-3 py-2 w-full",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"block mb-2",htmlFor:"category",children:"Category"}),a.jsx("input",{type:"text",id:"category",name:"category",value:t.category,onChange:i,className:"border px-3 py-2 w-full",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"block mb-2",htmlFor:"price",children:"Price"}),a.jsx("input",{type:"number",id:"price",name:"price",value:t.price,onChange:i,className:"border px-3 py-2 w-full",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"block mb-2",htmlFor:"image",children:"Image"}),a.jsx("input",{type:"file",id:"image",name:"image",onChange:e=>{let t=e.target.files?.[0];r(e=>({...e,image:t}))},className:"border px-3 py-2 w-full",accept:"image/*",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"block mb-2",htmlFor:"description",children:"Description"}),a.jsx("textarea",{id:"description",name:"description",value:t.description,onChange:i,className:"border px-3 py-2 w-full",required:!0})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"block mb-2",htmlFor:"quantity",children:"Quantity"}),a.jsx("input",{type:"number",id:"quantity",name:"quantity",value:t.quantity,onChange:i,className:"border px-3 py-2 w-full",required:!0})]}),a.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Submit"})]})}},1766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(9510);r(1159);var s=r(8570);let n=(0,s.createProxy)(String.raw`C:\Users\Aditya Pratap\code\Wastepursue\wastepursue-frontened\src\components\Productform\index.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let l=(0,s.createProxy)(String.raw`C:\Users\Aditya Pratap\code\Wastepursue\wastepursue-frontened\src\components\Productform\index.tsx#default`),c=()=>a.jsx("div",{children:a.jsx(l,{})})},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,55,621,381],()=>r(7654));module.exports=a})();