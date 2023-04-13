"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),m=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,b=c["".concat(u,".").concat(f)]||c[f]||s[f]||o;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={title:"v3.9.14 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},l=void 0,i={permalink:"/tanomimaster-doc/blog/2023/04/12/",editUrl:"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2023-04-12.md",source:"@site/blog/2023-04-12.md",title:"v3.9.14 Release",description:"\u5171\u901a",date:"2023-04-12T00:00:00.000Z",formattedDate:"2023\u5e744\u670812\u65e5",tags:[],readingTime:.215,hasTruncateMarker:!1,authors:[{name:"Yuki Matsukura",url:"http://twitter.com/matsubokkuri"}],frontMatter:{title:"v3.9.14 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},nextItem:{title:"v3.9.13 Release",permalink:"/tanomimaster-doc/blog/2023/03/22/"}},u={authorsImageUrls:[void 0]},m=[{value:"\u5171\u901a",id:"\u5171\u901a",level:2},{value:"\u30b7\u30b9\u30c6\u30e0",id:"\u30b7\u30b9\u30c6\u30e0",level:2},{value:"Release note",id:"release-note",level:2}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5171\u901a"},"\u5171\u901a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c7\u30b6\u30a4\u30f3\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8(Adminator)\u66f4\u65b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"v1.0.0 => v1.1.0"),(0,n.kt)("li",{parentName:"ul"},"\u95a2\u9023\u3059\u308bnpm\u66f4\u65b0")))),(0,n.kt)("h2",{id:"\u30b7\u30b9\u30c6\u30e0"},"\u30b7\u30b9\u30c6\u30e0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ruby\u66f4\u65b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"3.2.1 => 3.2.2"))),(0,n.kt)("li",{parentName:"ul"},"gem\u66f4\u65b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"connection_pool, devise, googleauth, msgpack, phonelib, puma, rubocop\u306a\u3069"))),(0,n.kt)("li",{parentName:"ul"},"rspec\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0")),(0,n.kt)("h2",{id:"release-note"},"Release note"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tanomimaster/tanomimaster-www/releases/tag/v3.9.14"},"https://github.com/tanomimaster/tanomimaster-www/releases/tag/v3.9.14")))}c.isMDXComponent=!0}}]);