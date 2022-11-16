"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2664],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5627:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={title:"v3.1.0 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},l=void 0,c={permalink:"/tanomimaster-doc/blog/2022/06/16/csv",editUrl:"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2022-06-16-csv.md",source:"@site/blog/2022-06-16-csv.md",title:"v3.1.0 Release",description:"\u6982\u8981",date:"2022-06-16T00:00:00.000Z",formattedDate:"2022\u5e746\u670816\u65e5",tags:[],readingTime:.515,truncated:!1,authors:[{name:"Yuki Matsukura",url:"http://twitter.com/matsubokkuri"}],frontMatter:{title:"v3.1.0 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},prevItem:{title:"v3.2.0 Release",permalink:"/tanomimaster-doc/blog/2022/06/23/csv"},nextItem:{title:"v3.0.0 Release",permalink:"/tanomimaster-doc/blog/2022/06/09/csv"}},s={authorsImageUrls:[void 0]},m=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051",id:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051",level:2},{value:"\u5c0f\u58f2\u5411\u3051",id:"\u5c0f\u58f2\u5411\u3051",level:2},{value:"\u7ba1\u7406\u8005\u5411\u3051",id:"\u7ba1\u7406\u8005\u5411\u3051",level:2},{value:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",id:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",level:2}],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30ab\u30fc\u5411\u3051API\u306e\u6a5f\u80fd\u8ffd\u52a0\u3067\u3059")),(0,o.kt)("h2",{id:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051"},"\u30e1\u30fc\u30ab\u30fc\u5411\u3051"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"{order_code}")," \u306b\u304a\u3044\u3066\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"OrdersMaker.code")," \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3060\u3068\u6ce8\u6587\u3092\u4e00\u610f\u306b\u7279\u5b9a\u3067\u304d\u306a\u3044\u305f\u3081\u3001\n",(0,o.kt)("inlineCode",{parentName:"p"},"OrdersMaker.id")," \u3082\u6307\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/api/v1/maker/orders_makers/{order_code}/order_products\n/api/v1/maker/orders_makers/{order_code}/order_products/{branch_number}\n/api/v1/maker/orders_makers/{order_code}/order_products/{branch_number}/confirm\n/api/v1/maker/orders_makers/{order_code}/order_products/{branch_number}/update_delivery_date\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OrdersMaker.id"),"\u306e\u6307\u5b9a\u306e\u307b\u3046\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u5c0f\u58f2\u5411\u3051"},"\u5c0f\u58f2\u5411\u3051"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u306a\u3057\u3002")),(0,o.kt)("h2",{id:"\u7ba1\u7406\u8005\u5411\u3051"},"\u7ba1\u7406\u8005\u5411\u3051"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u306a\u3057")),(0,o.kt)("h2",{id:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8"},"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tanomimaster/tanomimaster-www/releases/tag/v3.1.0"},"https://github.com/tanomimaster/tanomimaster-www/releases/tag/v3.1.0"))))}d.isMDXComponent=!0}}]);