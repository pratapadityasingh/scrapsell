(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{3782:function(e,t,r){Promise.resolve().then(r.bind(r,2682))},2682:function(e,t,r){"use strict";r.r(t);var s=r(7437),o=r(6463),a=r(2265),l=r(6648),n=r(8472),c=r(7138),i=r(1991);t.default=()=>{let[e,t]=(0,a.useState)(null),[r,d]=(0,a.useState)(!1),{id:u}=(0,o.useParams)(),h=(0,o.useRouter)(),x=e=>{try{let[t,r]=e.split(".");if(!t||!r)throw Error("Invalid JWT token format");let s=atob(r);return JSON.parse(s)}catch(e){return console.error("Error decoding JWT token:",e.message),null}};(0,a.useEffect)(()=>{(async()=>{x(localStorage.getItem("jwt")||"");try{let e=await fetch("".concat("http://localhost:5000","/api/products/getbyidproduct/").concat(u));if(!e.ok)throw Error("Network response was not ok");let r=await e.json();console.log(r,"data"),t(r)}catch(e){console.error("Error fetching post:",e)}})()},[]);let p=async()=>{let t=x(localStorage.getItem("jwt")||"");if(!(null==t?void 0:t.userId)){console.error("User ID not found in local storage.");return}try{await n.Z.post("".concat("http://localhost:5000","/api/cart/addtocart/").concat(t.userId,"/").concat(e._id)),d(!0),h.push("/addcart")}catch(e){console.error("Error adding product to cart:",e)}};return e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"lg:w-full flex flex-col justify-center h-screen bg-[#060B27]  lg:pt-[150px]  lg:pl-[550px]  px-3",children:[(0,s.jsx)("h1",{className:"text-white text-2xl p-3 font-bold",children:"Product Details"}),(0,s.jsx)("div",{className:" lg:w-[400px] w-full border box_shadow flex justify-center p-5 rounded-3xl  h-[500px]  ",children:(0,s.jsxs)("div",{className:" rounded-lg",children:[(0,s.jsx)(l.default,{alt:e.name,className:"lg:w-[400px] w-full  h-64 object-cover object-center rounded",src:e.url,width:300,height:100}),(0,s.jsxs)("div",{className:"gap-4 flex pt-2 items-center",children:[(0,s.jsx)("p",{className:"text-white text-base p-1  font-bold ",children:"Rating : "}),(0,s.jsx)(i.Z,{starRatedColor:"blue",starDimension:"15px",starSpacing:"5px",numberOfStars:5,name:"rating"})]}),(0,s.jsxs)("div",{className:" w-full     ",children:[(0,s.jsxs)("h1",{className:" text-white text-base p-1  font-bold ",children:["Name :",e.name]}),(0,s.jsxs)("p",{className:"leading-relaxed text-white text-base p-1  font-bold ",children:["About :",e.description]}),(0,s.jsxs)("span",{className:"text-base p-1  font-bold  text-white",children:["Price : $",e.price]}),(0,s.jsxs)("div",{className:"flex justify-between p-1",children:[(0,s.jsx)("button",{onClick:p,className:"bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4  rounded",children:"Add to Cart"}),(0,s.jsx)(c.default,{href:"/pay",className:"bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4  rounded",children:"Buy Now"})]})]})]})})]})})})}}},function(e){e.O(0,[472,291,648,991,971,23,744],function(){return e(e.s=3782)}),_N_E=e.O()}]);