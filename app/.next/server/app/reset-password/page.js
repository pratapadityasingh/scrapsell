(()=>{var e={};e.id=823,e.ids=[823],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1825:()=>{},6376:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>p}),s(7288),s(3816),s(5866);var r=s(3191),a=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let p=["",{children:["reset-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7288)),"C:\\Users\\Aditya Pratap\\code\\scrapsell\\app\\src\\app\\reset-password\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3816)),"C:\\Users\\Aditya Pratap\\code\\scrapsell\\app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Aditya Pratap\\code\\scrapsell\\app\\src\\app\\reset-password\\page.tsx"],c="/reset-password/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/reset-password/page",pathname:"/reset-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},5640:(e,t,s)=>{Promise.resolve().then(s.bind(s,1142))},1142:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(326),a=s(7577),i=s(5047),l=s(4099),n=s(9394);s(5996);let o=()=>{let[e,t]=(0,a.useState)(""),[s,o]=(0,a.useState)(""),[p,d]=(0,a.useState)(""),c=(0,i.useRouter)(),u=async t=>{t.preventDefault();try{let t="http://localhost:5000",r=`${t}/api/admin/getuserpresnt`,a=(await l.Z.get(r)).data.find(t=>t.email===e);if(!a){n.Am.error("Email not found. Please try again.");return}let i=a._id,o=a.resetPasswordToken,p=await l.Z.post(`${t}/api/user/reset-password/${i}/${o}`,{email:e,password:s});n.Am.success(p.data.message),c.push("/login")}catch(e){d(e.response.data.message)}};return r.jsx("div",{className:"h-screen bg-[#060B27] lg:flex lg:justify-center bgghk   lg:items-center lg:px-4 p-5 overflow-hidden lg:pt-0 pt-[150px]",children:(0,r.jsxs)("div",{className:"border h-fit lg:px-4 lg:py-7   rounded-3xl bos_design",children:[r.jsx("div",{className:"w-full justify-center flex",children:r.jsx("h1",{className:"text-white text-center font-bold text-xl m-3",children:"Reset Your Password"})}),r.jsx("form",{onSubmit:u,children:(0,r.jsxs)("div",{className:"w-full p-2  ",children:[(0,r.jsxs)("div",{className:"p-2",children:[r.jsx("p",{className:"text-white mb-2",children:"Email:"}),r.jsx("input",{type:"email",id:"email",value:e,onChange:e=>t(e.target.value),className:"rounded-full w-full py-2 px-4"})]}),(0,r.jsxs)("div",{className:"p-2",children:[r.jsx("p",{className:"text-white mb-2",children:"New Password:"}),r.jsx("input",{type:"password",id:"newPassword",value:s,onChange:e=>o(e.target.value),className:"rounded-full w-full py-2 px-4"})]}),p&&r.jsx("p",{style:{color:"red"},children:p}),r.jsx("button",{type:"submit",className:"bg-[#cfff13] p-3 rounded-full w-full mt-5 mb-5",children:"Reset Password"})]})})]})})}},9834:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\Users\Aditya Pratap\code\scrapsell\app\src\app\reset-password\[ids]\[token]\page.tsx`),{__esModule:i,$$typeof:l}=a;a.default;let n=(0,r.createProxy)(String.raw`C:\Users\Aditya Pratap\code\scrapsell\app\src\app\reset-password\[ids]\[token]\page.tsx#default`)},7274:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(9510);s(1159);var a=s(9834);let i=()=>r.jsx("div",{children:r.jsx(a.default,{})})},7288:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(9510);s(1159);var a=s(7274);let i=()=>r.jsx("div",{children:r.jsx(a.default,{})})},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5996:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,710,621,99,971],()=>s(6376));module.exports=r})();