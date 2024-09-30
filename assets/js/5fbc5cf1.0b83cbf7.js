"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7624],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>s});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},o="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=d(n),u=r,s=o["".concat(g,".").concat(u)]||o[u]||y[u]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const l={id:"api",title:"API\u4ed5\u69d8",tags:["API"]},i=void 0,p={unversionedId:"api",id:"api",title:"API\u4ed5\u69d8",description:"\u6982\u8981",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/tanomimaster-doc/docs/api",draft:!1,editUrl:"https://github.com/tanomimaster/tanomimaster-doc/blob/master/website/docs/api.md",tags:[{label:"API",permalink:"/tanomimaster-doc/docs/tags/api"}],version:"current",frontMatter:{id:"api",title:"API\u4ed5\u69d8",tags:["API"]}},g={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"api\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2},{value:"API\u5b9f\u88c5\u306e\u65b9\u5411\u6027",id:"api\u5b9f\u88c5\u306e\u65b9\u5411\u6027",level:2},{value:"\u52d5\u4f5c\u74b0\u5883",id:"\u52d5\u4f5c\u74b0\u5883",level:2},{value:"API\u30ad\u30fc",id:"api\u30ad\u30fc",level:2},{value:"API\u547c\u3073\u51fa\u3057\u306e\u4ed5\u69d8",id:"api\u547c\u3073\u51fa\u3057\u306e\u4ed5\u69d8",level:2},{value:"\u53d7\u6ce8\u78ba\u5b9a\u51e6\u7406",id:"\u53d7\u6ce8\u78ba\u5b9a\u51e6\u7406",level:3},{value:"\u6ce8\u6587\u72b6\u614b\u306b\u5fdc\u3058\u305f\u6ce8\u6587\u306e\u53d6\u5f97",id:"\u6ce8\u6587\u72b6\u614b\u306b\u5fdc\u3058\u305f\u6ce8\u6587\u306e\u53d6\u5f97",level:3},{value:"\u30e1\u30fc\u30ab\u30fc",id:"\u30e1\u30fc\u30ab\u30fc",level:4},{value:"\u53d7\u6ce8CSV\u3068REST API\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5bfe\u5fdc\u8868",id:"\u53d7\u6ce8csv\u3068rest-api\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5bfe\u5fdc\u8868",level:2},{value:"API\u547c\u3073\u51fa\u3057\u4f8b",id:"api\u547c\u3073\u51fa\u3057\u4f8b",level:2},{value:"\u5171\u901a",id:"\u5171\u901a",level:3},{value:"\u30e1\u30fc\u30ab\u30fc",id:"\u30e1\u30fc\u30ab\u30fc-1",level:3},{value:"\u5c0f\u58f2\u308a",id:"\u5c0f\u58f2\u308a",level:3}],m={toc:d},o="wrapper";function y(e){let{components:t,...l}=e;return(0,r.yg)(o,(0,a.A)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u30bf\u30ce\u30df\u30de\u30b9\u30bf\u30fc\u3092\u5229\u7528\u3059\u308b\u969b\u306bWeb\u304b\u3089\u306e\u64cd\u4f5c\u3060\u3051\u3067\u306a\u304f\u3001REST API\u306b\u3088\u3063\u3066\u3082\u60c5\u5831\u3092\u53d6\u5f97\u3084\u66f4\u65b0\u3092\u884c\u3048\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},"REST API\u306e\u7a2e\u5225\u306f\u5927\u304d\u304f3\u7a2e\u985e\u3001\u5c0f\u58f2\u5411\u3051\u3001\u30e1\u30fc\u30ab\u30fc\u5411\u3051\u3001\u5171\u901a\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\u3002",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5c0f\u58f2\u5411\u3051\u306eAPI\u306f\u767a\u6ce8\u3001\u7d0d\u54c1\u901a\u77e5\u306a\u3069\u3092\u884c\u3048\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u30e1\u30fc\u30ab\u30fc\u5411\u3051\u306eAPI\u306f\u53d7\u6ce8\u51e6\u7406\u3001\u7d0d\u671f\u56de\u7b54\u306a\u3069\u3092\u884c\u3048\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5171\u901aAPI\u306f\u3001\u30bf\u30ce\u30df\u30de\u30b9\u30bf\u30fc\u3067\u5229\u7528\u3057\u3066\u3044\u308b\u30ab\u30c6\u30b4\u30ea\u306a\u3069\u306e\u30de\u30b9\u30bf\u306e\u53d6\u5f97\u3092\u884c\u3048\u307e\u3059\u3002")))),(0,r.yg)("h2",{id:"api\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,r.yg)("p",null,"\u7a3c\u50cd\u4e2d\u306eAPI\u4ed5\u69d8\u306f\u4ee5\u4e0b\u306eURL\u3067\u95b2\u89a7\u3067\u304d\u307e\u3059\u3002\u5404\u74b0\u5883\u3054\u3068\u306bAPI\u306e\u5b9f\u88c5\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308b\u306e\u3067API\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u672c\u756a\u74b0\u5883: ",(0,r.yg)("a",{parentName:"li",href:"https://tanomimaster.com/docs/api"},"https://tanomimaster.com/docs/api")),(0,r.yg)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883: ",(0,r.yg)("a",{parentName:"li",href:"https://staging.tanomimaster.com/docs/api"},"https://staging.tanomimaster.com/docs/api")),(0,r.yg)("li",{parentName:"ul"},"\u958b\u767a\u74b0\u5883: ",(0,r.yg)("a",{parentName:"li",href:"https://development.tanomimaster.com/docs/api"},"https://development.tanomimaster.com/docs/api"))),(0,r.yg)("p",null,"\u4e0a\u8a18\u306e\u30da\u30fc\u30b8\u306fOpenAPI Specification\u3067\u66f8\u304b\u308c\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u4e00\u90e8\u304c\u629c\u7c8b\u3055\u308c\u3066\u898b\u3084\u3059\u304f\u7c21\u6613\u7684\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u958b\u767a\u8005\u3084\u3001\u958b\u767a\u6642\u306b\u53c2\u7167\u3059\u308b\u76ee\u7684\u306e\u5834\u5408\u306f\u3001OpenAPI Speification\u306eyml\u30d5\u30a1\u30a4\u30eb\u3092\u4e0a\u8a18\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001Swagger Editor\u306a\u3069\u3092\u5229\u7528\u3057\u3066\u53ef\u8996\u5316\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002\n\u53c2\u8003: ",(0,r.yg)("a",{parentName:"p",href:"https://editor.swagger.io/"},"Swagger Editor")),(0,r.yg)("p",null,"API\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3084\u30ec\u30b9\u30dd\u30f3\u30b9\u3092CLI\u304b\u3089\u7c21\u6613\u7684\u306b\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u4ee5\u4e0b\u306b\u63b2\u8f09\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tanomimaster/tanomimaster-openapi/wiki"},"https://github.com/tanomimaster/tanomimaster-openapi/wiki")),(0,r.yg)("h2",{id:"api\u5b9f\u88c5\u306e\u65b9\u5411\u6027"},"API\u5b9f\u88c5\u306e\u65b9\u5411\u6027"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Web\u4e0a\u3067\u884c\u3048\u308b\u64cd\u4f5c\u306fREST API\u3067\u3082\u540c\u69d8\u306b\u64cd\u4f5c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},"API\u4ed5\u69d8\u306f\u5e45\u5e83\u304f\u610f\u898b\u3084\u53c2\u52a0\u8005\u3092\u52df\u96c6\u3057\u305f\u3044\u306e\u3067OSS\u3068\u3057\u3066\u516c\u958b\u3057\u3066\u304a\u308a\u307e\u3059\u3002",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u5177\u5408\u5831\u544a\u3001\u6a5f\u80fd\u63d0\u6848\u306a\u3069\u306f\u3053\u3061\u3089\u304b\u3089\u884c\u3048\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/tanomimaster/tanomimaster-openapi"},"https://github.com/tanomimaster/tanomimaster-openapi"))))),(0,r.yg)("h2",{id:"\u52d5\u4f5c\u74b0\u5883"},"\u52d5\u4f5c\u74b0\u5883"),(0,r.yg)("p",null,"\u958b\u767a\u74b0\u5883\u3001\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u74b0\u5883\u3001\u672c\u756a\u74b0\u5883\u306e3\u3064\u306e\u74b0\u5883\u304c\u3042\u308a\u307e\u3059\u3002\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306fAPI\u4ed5\u69d8\u306b\u8a18\u8f09\u3057\u3066\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"api\u30ad\u30fc"},"API\u30ad\u30fc"),(0,r.yg)("p",null,"REST API\u3092\u547c\u3073\u51fa\u3059\u305f\u3081\u306b\u306f\u30ad\u30fc\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\u5c0f\u58f2\u5358\u4f4d\u3001\u30e1\u30fc\u30ab\u30fc\u5358\u4f4d\u30671\u3064\u767a\u884c\u3067\u304d\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"api\u547c\u3073\u51fa\u3057\u306e\u4ed5\u69d8"},"API\u547c\u3073\u51fa\u3057\u306e\u4ed5\u69d8"),(0,r.yg)("h3",{id:"\u53d7\u6ce8\u78ba\u5b9a\u51e6\u7406"},"\u53d7\u6ce8\u78ba\u5b9a\u51e6\u7406"),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u5411\u3051\u306b\u53d7\u6ce8\u78ba\u5b9a\u3092\u884c\u3046\u969b\u306e\u63a8\u5968\u4e8b\u9805\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u304c\u53d7\u6ce8\u78ba\u5b9a\u3092\u3057\u3066\u3044\u306a\u3044\u6ce8\u6587\u306f\u3001\u5c0f\u58f2\u5074\u304b\u3089\u30ad\u30e3\u30f3\u30bb\u30eb\u304c\u53ef\u80fd\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u4e0b\u306e\u56f3\u3067\u793a\u30592\u30683\u306e\u9593\u306b\u5c0f\u58f2\u304b\u3089\u30ad\u30e3\u30f3\u30bb\u30eb\u304c\u884c\u308f\u308c\u307e\u3059\u3002\u3067\u304d\u308b\u3060\u3051\u305d\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u6e1b\u3089\u3059\u305f\u3081\u306b2\u30683\u306e\u547c\u3073\u51fa\u3057\u306e\u9593\u9694\u306f\u77ed\u304f\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u307e\u305f\u3001\u53d7\u6ce8\u78ba\u5b9a\u3092\u3059\u308b\u524d\u306b\u30e1\u30fc\u30ab\u30fc\u5185\u3067\u306e\u53d7\u6ce8\u51e6\u7406\u3092\u884c\u3063\u3066\u3057\u307e\u3046\u3068\u5c0f\u58f2\u304b\u3089\u30ad\u30e3\u30f3\u30bb\u30eb\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u30bf\u30ce\u30df\u30de\u30b9\u30bf\u30fc\u4e0a\u3067\u53d7\u6ce8\u78ba\u5b9a\u3092\u884c\u3063\u3066\u304b\u3089\u30e1\u30fc\u30ab\u30fc\u5185\u3067\u53d7\u6ce8\u306b\u95a2\u3059\u308b\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"alt-text",src:n(1652).A,width:"762",height:"584"})),(0,r.yg)("h3",{id:"\u6ce8\u6587\u72b6\u614b\u306b\u5fdc\u3058\u305f\u6ce8\u6587\u306e\u53d6\u5f97"},"\u6ce8\u6587\u72b6\u614b\u306b\u5fdc\u3058\u305f\u6ce8\u6587\u306e\u53d6\u5f97"),(0,r.yg)("h4",{id:"\u30e1\u30fc\u30ab\u30fc"},"\u30e1\u30fc\u30ab\u30fc"),(0,r.yg)("p",null,"\u6ce8\u6587\u306e\u72b6\u614b\u306b\u5bfe\u3057\u3066\u3001\u305d\u306e\u6ce8\u6587\u3092\u53d6\u5f97\u3059\u308b\u969b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4e00\u89a7\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u30b9\u30c6\u30fc\u30bf\u30b9"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"API Query string parameter"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7d0d\u671f\u672a\u56de\u7b54"),(0,r.yg)("td",{parentName:"tr",align:null},"\u767a\u6ce8\u6e08\u307f"),(0,r.yg)("td",{parentName:"tr",align:null},"status=0&is_confirmed=false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ed2\u4f1d\u9023\u643a\u6e08\u307f"),(0,r.yg)("td",{parentName:"tr",align:null},"status=0&is_confirmed=true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u51fa\u8377\u5f85\u3061"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"status=2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u51fa\u8377\u6e08\u307f"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"status=3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7d0d\u54c1\u6e08\u307f"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"status=4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30f3\u30bb\u30eb"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ed2\u4f1d\u9023\u643a\u524d\u30ad\u30e3\u30f3\u30bb\u30eb"),(0,r.yg)("td",{parentName:"tr",align:null},"status=99&is_confirmed=false&is_cancel_confirmed=false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u9023\u643a\u524d\u30ad\u30e3\u30f3\u30bb\u30eb\u9023\u643a\u6e08\u307f"),(0,r.yg)("td",{parentName:"tr",align:null},"status=99&is_confirmed=false&is_cancel_confirmed=true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8d64\u4f1d\u30ad\u30e3\u30f3\u30bb\u30eb"),(0,r.yg)("td",{parentName:"tr",align:null},"status=99&is_confirmed=true&is_cancel_confirmed=false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u8d64\u4f1d\u30ad\u30e3\u30f3\u30bb\u30eb\u9023\u643a\u6e08\u307f"),(0,r.yg)("td",{parentName:"tr",align:null},"status=99&is_confirmed=true&is_cancel_confirmed=true")))),(0,r.yg)("h2",{id:"\u53d7\u6ce8csv\u3068rest-api\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5bfe\u5fdc\u8868"},"\u53d7\u6ce8CSV\u3068REST API\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5bfe\u5fdc\u8868"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/tanomimaster-doc/docs/csv#%E5%8F%97%E6%B3%A8CSV"},"\u53d7\u6ce8CSV"),"\u306b\u3042\u308bCSV\u30ab\u30e9\u30e0\u304cREST API\u306e\u3069\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30a2\u30c8\u30ea\u30d3\u30e5\u30fc\u30c8\u306b\u5bfe\u5fdc\u3059\u308b\u304b\u3092\u8868\u306b\u3057\u307e\u3059\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u30ab\u30e9\u30e0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3"),(0,r.yg)("th",{parentName:"tr",align:null},"\u30a2\u30c8\u30ea\u30d3\u30e5\u30fc\u30c8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u767a\u6ce8\u4f9d\u983c\u533a\u5206"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u30b3\u30fc\u30c9"),(0,r.yg)("td",{parentName:"tr",align:null},"Retail"),(0,r.yg)("td",{parentName:"tr",align:null},"code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"Retail"),(0,r.yg)("td",{parentName:"tr",align:null},"name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u652f\u5e97\u30b3\u30fc\u30c9"),(0,r.yg)("td",{parentName:"tr",align:null},"RetailBranch"),(0,r.yg)("td",{parentName:"tr",align:null},"code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u652f\u5e97\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"RetailBranch"),(0,r.yg)("td",{parentName:"tr",align:null},"name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u55b6\u696d\u6240\u30b3\u30fc\u30c9"),(0,r.yg)("td",{parentName:"tr",align:null},"RetailSalesOffice"),(0,r.yg)("td",{parentName:"tr",align:null},"code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u55b6\u696d\u6240\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"RetailSalesOffice"),(0,r.yg)("td",{parentName:"tr",align:null},"name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u767a\u6ce8\u65e5\u6642"),(0,r.yg)("td",{parentName:"tr",align:null},"Order"),(0,r.yg)("td",{parentName:"tr",align:null},"ordered_at")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"9"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ed5\u5165\u5148\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"Maker"),(0,r.yg)("td",{parentName:"tr",align:null},"name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6ce8\u6587\u756a\u53f7"),(0,r.yg)("td",{parentName:"tr",align:null},"Order"),(0,r.yg)("td",{parentName:"tr",align:null},"code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6ce8\u6587\u660e\u7d30No"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"branch_number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"\u578b\u5f0f\uff08\u54c1\u756a\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"13"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30e1\u30fc\u30ab\u30fc\u5185\u90e8\u30b3\u30fc\u30c9"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"internal_code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"14"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30ac\u30b9\u7a2e"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"gas_type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30ab\u30bf\u30ed\u30b0URL"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"catalog_url")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"\u627f\u8a8d\u56f3URL"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"approved_drawing_url")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"17"),(0,r.yg)("td",{parentName:"tr",align:null},"\u767a\u6ce8\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"number_of_items")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"18"),(0,r.yg)("td",{parentName:"tr",align:null},"\u767a\u6ce8\u5358\u4fa1"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"maker_price_for_retail")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"19"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e0c\u671b\u7d0d\u671f"),(0,r.yg)("td",{parentName:"tr",align:null},"OrdersMaker"),(0,r.yg)("td",{parentName:"tr",align:null},"desired_delivery_date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30e1\u30fc\u30ab\u30fc\u55b6\u696d\u6240\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"MakerSalesOffice"),(0,r.yg)("td",{parentName:"tr",align:null},"name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"21"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30e1\u30fc\u30ab\u30fc\u55b6\u696d\u6240\u96fb\u8a71\u756a\u53f7"),(0,r.yg)("td",{parentName:"tr",align:null},"MakerSalesOffice"),(0,r.yg)("td",{parentName:"tr",align:null},"tel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"22"),(0,r.yg)("td",{parentName:"tr",align:null},"\u30e1\u30fc\u30ab\u30fc\u55b6\u696d\u6240FAX"),(0,r.yg)("td",{parentName:"tr",align:null},"MakerSalesOffice"),(0,r.yg)("td",{parentName:"tr",align:null},"fax")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"23"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5c0f\u58f2\u62c5\u5f53\u8005\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"RetailUser"),(0,r.yg)("td",{parentName:"tr",align:null},"last_name first_name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"24"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d0d\u54c1\u5148\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"shipping_office_name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"25"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d0d\u54c1\u5148\u4f4f\u6240"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"shipping_address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"26"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d0d\u54c1\u5148TEL"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"shipping_tel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"27"),(0,r.yg)("td",{parentName:"tr",align:null},"\u660e\u7d30\u5358\u4f4d\u306e\u5099\u8003"),(0,r.yg)("td",{parentName:"tr",align:null},"OrderProduct"),(0,r.yg)("td",{parentName:"tr",align:null},"memo")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"28"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6ce8\u6587\u5358\u4f4d\u306e\u5099\u8003"),(0,r.yg)("td",{parentName:"tr",align:null},"Order"),(0,r.yg)("td",{parentName:"tr",align:null},"memo")))),(0,r.yg)("h2",{id:"api\u547c\u3073\u51fa\u3057\u4f8b"},"API\u547c\u3073\u51fa\u3057\u4f8b"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u306bAPI\u547c\u3073\u51fa\u3057\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"curl")," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u308b\u5b9f\u884c\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002\n\u30b5\u30f3\u30d7\u30eb\u3092\u5b9f\u884c\u3059\u308b\u306b\u3042\u305f\u308a\u3001API\u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3068\u63a5\u7d9a\u5148\u306e\u30db\u30b9\u30c8\u540d\u306f\u5909\u6570\u306b\u3057\u3066\u3042\u308b\u306e\u3067\u9069\u5b9c\u74b0\u5883\u5909\u6570\u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("p",null,"bash, zsh"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'maker_token "<maker token>"\nretail_token "<retail token>"\ntoken "<maker or retail token>"\nhost="https://development.tanomimaster.com"\n#host="https://staging.tanomimaster.com"\n#host="https://tanomimaster.com"\n')),(0,r.yg)("p",null,"fish"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csh"},'set maker_token "<maker token>"\nset retail_token "<retail token>"\nset token "<maker or retail token>"\nset host "https://development.tanomimaster.com"\n#set host "https://staging.tanomimaster.com"\n#set host "https://tanomimaster.com"\n')),(0,r.yg)("p",null,"\u307e\u305f\u3001\u30b5\u30fc\u30d0\u304b\u3089\u306e\u51fa\u529b\u306f",(0,r.yg)("inlineCode",{parentName:"p"},"jq"),"\u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u6574\u5f62\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("h3",{id:"\u5171\u901a"},"\u5171\u901a"),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u4e00\u89a7\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $token" "$host/api/v1/master/makers" | jq\n')),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u30b3\u30fc\u30c9 ",(0,r.yg)("inlineCode",{parentName:"p"},"anedd1bup5")," \u306e\u8a73\u7d30\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $token" "$host/api/v1/master/makers/anedd1bup5" | jq\n')),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u30b3\u30fc\u30c9 ",(0,r.yg)("inlineCode",{parentName:"p"},"anedd1bup5")," \u306e\u652f\u5e97\u4e00\u89a7\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $token" "$host/api/v1/master/makers/anedd1bup5/maker_branches" | jq\n')),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u30b3\u30fc\u30c9 ",(0,r.yg)("inlineCode",{parentName:"p"},"anedd1bup5")," \u306e\u652f\u5e97\u30b3\u30fc\u30c9",(0,r.yg)("inlineCode",{parentName:"p"},"c6ef06fc9a7efd6045cf9e05c4"),"\u306e\u8a73\u7d30\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $token" "$host/api/v1/master/makers/anedd1bup5/maker_branches/c6ef06fc9a7efd6045cf9e05c4" | jq\n')),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u30b3\u30fc\u30c9 ",(0,r.yg)("inlineCode",{parentName:"p"},"anedd1bup5")," \u306e\u652f\u5e97\u30b3\u30fc\u30c9",(0,r.yg)("inlineCode",{parentName:"p"},"c6ef06fc9a7efd6045cf9e05c4"),"\u306b\u5c5e\u3059\u308b\u55b6\u696d\u6240\u4e00\u89a7\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $token" "$host/api/v1/master/makers/anedd1bup5/maker_branches/c6ef06fc9a7efd6045cf9e05c4/maker_sales_offices" | jq\n')),(0,r.yg)("p",null,"\u30e1\u30fc\u30ab\u30fc\u30b3\u30fc\u30c9 ",(0,r.yg)("inlineCode",{parentName:"p"},"anedd1bup5")," \u306e\u652f\u5e97\u30b3\u30fc\u30c9",(0,r.yg)("inlineCode",{parentName:"p"},"c6ef06fc9a7efd6045cf9e05c4"),"\u306b\u5c5e\u3059\u308b\u55b6\u696d\u6240\u30b3\u30fc\u30c9",(0,r.yg)("inlineCode",{parentName:"p"},"b69980937ff8da735504c690bc"),"\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $token" "$host/api/v1/master/makers/anedd1bup5/maker_branches/c6ef06fc9a7efd6045cf9e05c4/maker_sales_offices/b69980937ff8da735504c690bc" | jq\n')),(0,r.yg)("h3",{id:"\u30e1\u30fc\u30ab\u30fc-1"},"\u30e1\u30fc\u30ab\u30fc"),(0,r.yg)("p",null,"\u3059\u3079\u3066\u306e\u6ce8\u6587\u306e\u4e00\u89a7\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $maker_token" "$host/api/v1/maker/orders_makers" | jq\n')),(0,r.yg)("p",null,"\u7d0d\u671f\u672a\u56de\u7b54\u306e\u767a\u6ce8\u6e08\u307f\u6ce8\u6587\u306e\u4e00\u89a7\u3092\u53d6\u5f97"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $maker_token" "$host/api/v1/maker/orders_makers?status=0&is_confirmed=false" | jq\n')),(0,r.yg)("p",null,"\u7d0d\u671f\u672a\u56de\u7b54\u306e\u767a\u6ce8\u6e08\u307f\u6ce8\u6587\u306e\u4e00\u89a7\u3092\u53d6\u5f97(100\u4ef6\u305a\u30641\u30da\u30fc\u30b8\u76ee\u3092\u53d6\u5f97)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -H "Authorization: Token $maker_token" "$host/api/v1/maker/orders_makers?status=0&is_confirmed=false&limit=100&page=1" | jq\n')),(0,r.yg)("p",null,"\u6ce8\u6587ID",(0,r.yg)("inlineCode",{parentName:"p"},"Z2lkOi8vdGFub21pbWFzdGVyLXd3dy9PcmRlcnNNYWtlci8zNQ"),"\u306e\u660e\u7d30\u756a\u53f7",(0,r.yg)("inlineCode",{parentName:"p"},"1"),"\u306b\u5bfe\u3057\u3066\u53d7\u6ce8\u78ba\u5b9a\u3092\u884c\u3046"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -X POST -H "Authorization: Token $maker_token" "$host/api/v1/maker/orders_makers/Z2lkOi8vdGFub21pbWFzdGVyLXd3dy9PcmRlcnNNYWtlci8zNQ/order_products/1/confirm" | jq\n')),(0,r.yg)("p",null,"\u6ce8\u6587ID",(0,r.yg)("inlineCode",{parentName:"p"},"Z2lkOi8vdGFub21pbWFzdGVyLXd3dy9PcmRlcnNNYWtlci8zNQ"),"\u306e\u660e\u7d30\u756a\u53f7",(0,r.yg)("inlineCode",{parentName:"p"},"1"),"\u306b\u5bfe\u3057\u3066\u30ad\u30e3\u30f3\u30bb\u30eb\u53d7\u6ce8\u78ba\u5b9a\u3092\u884c\u3046"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -X POST -H "Authorization: Token $maker_token" "$host/api/v1/maker/orders_makers/Z2lkOi8vdGFub21pbWFzdGVyLXd3dy9PcmRlcnNNYWtlci8zNQ/order_products/1/confirm_cancel" | jq\n')),(0,r.yg)("p",null,"\u6ce8\u6587ID",(0,r.yg)("inlineCode",{parentName:"p"},"Z2lkOi8vdGFub21pbWFzdGVyLXd3dy9PcmRlcnNNYWtlci8zNQ"),"\u306e\u660e\u7d30\u756a\u53f7",(0,r.yg)("inlineCode",{parentName:"p"},"1"),"\u306b\u5bfe\u3057\u3066\u914d\u9001\u6e08\u307f\u30b9\u30c6\u30fc\u30bf\u30b9\u3078\u5909\u66f4\u3059\u308b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -s -X POST \\\n-H "Authorization: Token $maker_token" \\\n-H "Content-Type: application/json" \\\n-d \'{"delivery_company_id": 1, "shipping_slip_number", "xxxx-xxxx-xxxx-xxxx"}\' \\\n"$host/api/v1/maker/orders_makers/Z2lkOi8vdGFub21pbWFzdGVyLXd3dy9PcmRlcnNNYWtlci8zNQ/order_products/1/confirm" | jq\n')),(0,r.yg)("h3",{id:"\u5c0f\u58f2\u308a"},"\u5c0f\u58f2\u308a"),(0,r.yg)("p",null,"\u767a\u6ce8\u3092\u884c\u3046"),(0,r.yg)("p",null,"(bash\u306e\u5834\u5408)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# Generate a random number between 1000000000 and 9999999999\ncode=$(( 1000000000 + RANDOM % (9999999999 - 1000000000) ))\n\n# Prepare the JSON body for the POST request\norder_body="\n{\n  \\"code\\": \\"$code\\",\n  \\"makers\\": [\n    {\n      \\"maker_code\\": \\"maker_code\\",\n      \\"retail_sales_office_code\\": \\"a32a0c942926de863083e3598c\\",\n      \\"retail_user_code\\": \\"ftlkqvkkvs\\",\n      \\"desired_delivery_date\\": \\"2023-08-10\\",\n      \\"shipping_postcode\\": \\"1060031\\",\n      \\"shipping_city\\": \\"city\\",\n      \\"shipping_street_address\\": \\"street\\",\n      \\"shipping_building\\": \\"building\\",\n      \\"shipping_office_name\\": \\"office name\\",\n      \\"shipping_tel\\": \\"03-0000-1111\\",\n      \\"shipping_prefecture_code\\": 1,\n      \\"products\\": [\n        {\n          \\"code\\": \\"qghdvhjabusntjmanslz\\",\n          \\"branch_number\\": 1,\n          \\"number_of_items\\": 2,\n          \\"memo\\": \\"memo\\"\n        }\n      ]\n    }\n  ]\n}"\n\ncurl -s -X POST \\\n  -H "Authorization: Token $retail_token" \\\n  -H "Content-Type: application/json" \\\n  -d "$order_body" \\\n  "$host/api/v1/retail/orders" | jq\n')),(0,r.yg)("p",null,"(fish\u306e\u5834\u5408)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'set order_body "\n{\n  \\"code\\": \\"$(random 1000000000 9999999999)\\",\n  \\"makers\\": [\n    {\n      \\"maker_code\\": \\"maker_code\\",\n      \\"retail_sales_office_code\\": \\"a32a0c942926de863083e3598c\\",\n      \\"retail_user_code\\": \\"ftlkqvkkvs\\",\n      \\"desired_delivery_date\\": \\"2023-08-10\\",\n      \\"shipping_postcode\\": \\"1060031\\",\n      \\"shipping_city\\": \\"city\\",\n      \\"shipping_street_address\\": \\"street\\",\n      \\"shipping_building\\": \\"building\\",\n      \\"shipping_office_name\\": \\"office name\\",\n      \\"shipping_tel\\": \\"03-0000-1111\\",\n      \\"shipping_prefecture_code\\": 1,\n      \\"products\\": [\n        {\n          \\"code\\": \\"qghdvhjabusntjmanslz\\",\n          \\"branch_number\\": 1,\n          \\"number_of_items\\": 2,\n          \\"memo\\": \\"memo\\"\n        }\n      ]\n    }\n  ]\n}\n"\n\n\ncurl -s -X POST \\\n  -H "Authorization: Token $retail_token" \\\n  -H "Content-Type: application/json" \\\n  -d $order_body \\\n  "$host/api/v1/retail/orders" | jq\n')))}y.isMDXComponent=!0},1652:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/order-confirm-sequence-85b816ee84b5ec2a60f6edff07a66e70.png"}}]);