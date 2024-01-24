"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,b=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(b,i(i({ref:t},m),{},{components:r})):n.createElement(b,i({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"v3.10.0 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},i=void 0,l={permalink:"/tanomimaster-doc/blog/2024/01/24/",editUrl:"https://github.com/tanomimaster/tanomimaster-doc/blob/develop/website/blog/2024-01-24.md",source:"@site/blog/2024-01-24.md",title:"v3.10.0 Release",description:"\u30e1\u30fc\u30ab\u30fc\u30fb\u5c0f\u58f2",date:"2024-01-24T00:00:00.000Z",formattedDate:"2024\u5e741\u670824\u65e5",tags:[],readingTime:.285,hasTruncateMarker:!1,authors:[{name:"Yuki Matsukura",url:"http://twitter.com/matsubokkuri"}],frontMatter:{title:"v3.10.0 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},nextItem:{title:"v3.9.32 Release",permalink:"/tanomimaster-doc/blog/2023/12/06/"}},u={authorsImageUrls:[void 0]},c=[{value:"\u30e1\u30fc\u30ab\u30fc\u30fb\u5c0f\u58f2",id:"\u30e1\u30fc\u30ab\u30fc\u5c0f\u58f2",level:2},{value:"\u30b7\u30b9\u30c6\u30e0",id:"\u30b7\u30b9\u30c6\u30e0",level:2}],m={toc:c},p="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u30e1\u30fc\u30ab\u30fc\u5c0f\u58f2"},"\u30e1\u30fc\u30ab\u30fc\u30fb\u5c0f\u58f2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30c0\u30df\u30fc\u30da\u30fc\u30b8(\u30c1\u30e3\u30c3\u30c8)\u3092\u524a\u9664")),(0,a.kt)("h2",{id:"\u30b7\u30b9\u30c6\u30e0"},"\u30b7\u30b9\u30c6\u30e0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ruby\u66f4\u65b0 3.2.2 => 3.3.0"),(0,a.kt)("li",{parentName:"ul"},"YJIT\u3092\u6709\u52b9\u5316\u3002\u5168\u4f53\u7684\u306b\u51e6\u7406\u306e\u9ad8\u901f\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"npm\u66f4\u65b0, gem\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"yarn v1 => v4 \u66f4\u65b0\u3002\u30d3\u30eb\u30c9\u306e\u9ad8\u901f\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"GitHub Actions \u95a2\u9023\u30e9\u30a4\u30d6\u30e9\u30ea\u66f4\u65b0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tanomimaster/tanomimaster-www/compare/v3.9.32...v3.10.0"},"https://github.com/tanomimaster/tanomimaster-www/compare/v3.9.32...v3.10.0")))}s.isMDXComponent=!0}}]);