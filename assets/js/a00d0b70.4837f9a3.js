"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[371],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,f=p["".concat(s,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={title:"v3.9.0 Release",author:"Yuki Matsukura",authorURL:"https://x.com/matsubokkuri",authorFBID:"matsubokkuri"},i=void 0,l={permalink:"/tanomimaster-doc/blog/2023/01/23/csv",editUrl:"https://github.com/tanomimaster/tanomimaster-doc/blob/develop/website/blog/2023-01-23-csv.md",source:"@site/blog/2023-01-23-csv.md",title:"v3.9.0 Release",description:"- \u30e6\u30fc\u30b6\u30de\u30b9\u30bf\u306e\u4ed5\u69d8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",date:"2023-01-23T00:00:00.000Z",formattedDate:"2023\u5e741\u670823\u65e5",tags:[],readingTime:1.7,hasTruncateMarker:!1,authors:[{name:"Yuki Matsukura",url:"https://x.com/matsubokkuri"}],frontMatter:{title:"v3.9.0 Release",author:"Yuki Matsukura",authorURL:"https://x.com/matsubokkuri",authorFBID:"matsubokkuri"},prevItem:{title:"v3.9.1 Release",permalink:"/tanomimaster-doc/blog/2023/01/25/csv"},nextItem:{title:"v3.8.0 Release",permalink:"/tanomimaster-doc/blog/2022/12/07/"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/csv"},"\u30e6\u30fc\u30b6\u30de\u30b9\u30bf"),"\u306e\u4ed5\u69d8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4ee5\u4e0b\u306b\u91cd\u8981\u90e8\u5206\u3092\u629c\u7c8b\u3057\u307e\u3059")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"}," | \u30ab\u30e9\u30e0 | \u540d\u79f0 | \u578b | \u9577\u3055 | PK | FK | \u5fc5\u9808 | \u4f8b | \u5099\u8003 |\n | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n | 1 | \u55b6\u696d\u54e1\u30b3\u30fc\u30c9 | string | 255 | o |  | o | 1 |  |\n-| 2 | \u55b6\u696d\u6240\u30b3\u30fc\u30c9 | string | 255 |  | o |  | 11 | `\u55b6\u696d\u6240\u30b3\u30fc\u30c9` \u306f `\u6a29\u9650` \u304c`sales` \u306e\u5834\u5408\u306b\u5fc5\u9808\u3067\u3059\u3002 |\n+| 2 | \u55b6\u696d\u6240\u30b3\u30fc\u30c9 | string | 255 |  | o |  | 11 |  |\n | 3 | \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9 | string | 255 |  |  | o | example@example.com |  |\n | 4 | \u30d1\u30b9\u30ef\u30fc\u30c9 | string | 255 |  |  |  |  | \u7a7a\u306e\u5834\u5408\u306f\u66f4\u65b0\u3055\u308c\u307e\u305b\u3093 |\n | 5 | \u59d3 | string | 255 |  |  | o | \u4f50\u85e4 |  |\n | 6 | \u540d | string | 255 |  |  | o | \u592a\u90ce |  |\n | 7 | \u59d3\uff08\u304b\u306a\uff09 | string | 255 |  |  | o | \u3055\u3068\u3046 |  |\n | 8 | \u540d\uff08\u304b\u306a\uff09 | string | 255 |  |  | o | \u305f\u308d\u3046 |  |\n-| 9 | \u6a29\u9650 | string | 255 |  |  | o | sales | admin: \u7ba1\u7406\u8005\u6a29\u9650<br />clerk: \u4e8b\u52d9\u54e1<br />sales: \u55b6\u696d\u54e1 |\n+| 9 | \u6a29\u9650 | string | 255 |  |  | o | general | admin: \u7ba1\u7406\u8005<br />general: \u4e00\u822c |\n | 10 | \u96fb\u8a71\u756a\u53f7 | string | 255 |  |  |  | 090-0000-0000 |  |\n")),(0,a.yg)("p",null,"\u4e0b\u4f4d\u4e92\u63db\u6027\u7dad\u6301\u306e\u305f\u3081\u306bv3.8.0\u4ee5\u524d\u306b\u5229\u7528\u3057\u3066\u3044\u305fclerk, sales\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306fgeneral\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002v4\u3067\u3053\u306e\u4e0b\u4f4d\u4e92\u63db\u6027\u306f\u524a\u9664\u4e88\u5b9a\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);