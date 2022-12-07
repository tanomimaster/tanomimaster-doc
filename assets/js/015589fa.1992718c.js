"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6013],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),m=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=m(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=m(r),f=a,k=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return r?n.createElement(k,i(i({ref:e},c),{},{components:r})):n.createElement(k,i({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u[p]="string"==typeof t?t:a,i[1]=u;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},965:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=r(3117),a=(r(7294),r(3905));const o={title:"v3.6.0 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},i=void 0,u={permalink:"/tanomimaster-doc/blog/2022/11/16/csv",editUrl:"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2022-11-16-csv.md",source:"@site/blog/2022-11-16-csv.md",title:"v3.6.0 Release",description:"\u6982\u8981",date:"2022-11-16T00:00:00.000Z",formattedDate:"2022\u5e7411\u670816\u65e5",tags:[],readingTime:.52,hasTruncateMarker:!1,authors:[{name:"Yuki Matsukura",url:"http://twitter.com/matsubokkuri"}],frontMatter:{title:"v3.6.0 Release",author:"Yuki Matsukura",authorURL:"http://twitter.com/matsubokkuri",authorFBID:"matsubokkuri"},prevItem:{title:"v3.7.0 Release",permalink:"/tanomimaster-doc/blog/2022/11/24/"},nextItem:{title:"v3.5.0 Release",permalink:"/tanomimaster-doc/blog/2022/10/27/csv"}},l={authorsImageUrls:[void 0]},m=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",id:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",level:2}],c={toc:m};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30ab\u30fc\u5074Web",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53d7\u6ce8CSV\u30da\u30fc\u30b8\u306e\u52d5\u7dda\u5909\u66f4"),(0,a.kt)("li",{parentName:"ul"},"\u53d7\u6ce8CSV\u30da\u30fc\u30b8\u306e\u5b9f\u884c\u8005\u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306b\u5909\u66f4\u3059\u308b\u306a\u3069\u306e\u6539\u5584"))),(0,a.kt)("li",{parentName:"ul"},"bugfix",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30e1\u30fc\u30ab\u30fc\u5074API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status \u30d5\u30a3\u30eb\u30bf\u304c\u52b9\u3044\u3066\u3044\u306a\u304b\u3063\u305f\u554f\u984c\u3092\u4fee\u6b63"))))),(0,a.kt)("li",{parentName:"ul"},"API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8aac\u660e\u3092\u8ffd\u52a0"),(0,a.kt)("li",{parentName:"ul"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u66f4\u65b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bump puma from 5.6.5 to 6.0.0"),(0,a.kt)("li",{parentName:"ul"},"Bump redis from 4.5.1 to 4.8.0"),(0,a.kt)("li",{parentName:"ul"},"Bump validates_timeliness from 6.0.0.beta2 to 6.0.0"),(0,a.kt)("li",{parentName:"ul"},"Bump aasm from 5.3.1 to 5.4.0")))),(0,a.kt)("h2",{id:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8"},"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tanomimaster/tanomimaster-www/releases/tag/v3.6.0"},"https://github.com/tanomimaster/tanomimaster-www/releases/tag/v3.6.0"))))}p.isMDXComponent=!0}}]);