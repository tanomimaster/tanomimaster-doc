"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9052],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,u(u({ref:t},s),{},{components:r})):n.createElement(b,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7989:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),u=["components"],i={title:"Release 0.0.1",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},c=void 0,l={permalink:"/tanomimaster-doc/blog/2019/11/20/csv",editUrl:"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2019-11-20-csv.md",source:"@site/blog/2019-11-20-csv.md",title:"Release 0.0.1",description:"- \u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u756a\u53f7\u3092\u4ed8\u52a0\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002",date:"2019-11-20T00:00:00.000Z",formattedDate:"2019\u5e7411\u670820\u65e5",tags:[],readingTime:.52,truncated:!1,authors:[{name:"Yuki Matsukura",url:"http://twitter.com/matsubokkuri"}],frontMatter:{title:"Release 0.0.1",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},prevItem:{title:"Release 0.0.2",permalink:"/tanomimaster-doc/blog/2019/11/21/color"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u756a\u53f7\u3092\u4ed8\u52a0\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/csv"},"\u7d0d\u671f\u56de\u7b54CSV"),"\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," | \u30ab\u30e9\u30e0 | \u540d\u79f0 | \u578b | \u6587\u5b57\u6570 | PK | FK | \u5fc5\u9808 | \u4f8b | \u5099\u8003 |\n | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n-| 1 | \u53d7\u6ce8\u30b3\u30fc\u30c9 | string | 255 | o | o | o |  | |\n+| 1 | \u6ce8\u6587\u756a\u53f7 | string | 255 | o | o | o |  | |\n | 2 | \u7d0d\u671f\u65e5 | date | o |  | |  | | |\n")))}f.isMDXComponent=!0}}]);