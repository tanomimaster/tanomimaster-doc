"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5425],{3829:e=>{e.exports=JSON.parse('{"permalink":"/tanomimaster-doc/blog/2023/01/23/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/blob/develop/website/blog/2023-01-23-csv.md","source":"@site/blog/2023-01-23-csv.md","title":"v3.9.0 Release","description":"- \u30e6\u30fc\u30b6\u30de\u30b9\u30bf\u306e\u4ed5\u69d8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2023-01-23T00:00:00.000Z","tags":[],"readingTime":1.7,"hasTruncateMarker":false,"authors":[{"name":"Yuki Matsukura","url":"https://x.com/matsubokkuri","key":null,"page":null}],"frontMatter":{"title":"v3.9.0 Release","author":"Yuki Matsukura","authorURL":"https://x.com/matsubokkuri","authorFBID":"matsubokkuri"},"unlisted":false,"prevItem":{"title":"v3.9.1 Release","permalink":"/tanomimaster-doc/blog/2023/01/25/csv"},"nextItem":{"title":"v3.8.0 Release","permalink":"/tanomimaster-doc/blog/2022/12/07/"}}')},6314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var s=n(3829),r=n(4848),o=n(8453);const a={title:"v3.9.0 Release",author:"Yuki Matsukura",authorURL:"https://x.com/matsubokkuri",authorFBID:"matsubokkuri"},i=void 0,l={authorsImageUrls:[void 0]},c=[];function u(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/csv",children:"\u30e6\u30fc\u30b6\u30de\u30b9\u30bf"}),"\u306e\u4ed5\u69d8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,r.jsx)(t.li,{children:"\u4ee5\u4e0b\u306b\u91cd\u8981\u90e8\u5206\u3092\u629c\u7c8b\u3057\u307e\u3059"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:" | \u30ab\u30e9\u30e0 | \u540d\u79f0 | \u578b | \u9577\u3055 | PK | FK | \u5fc5\u9808 | \u4f8b | \u5099\u8003 |\n | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n | 1 | \u55b6\u696d\u54e1\u30b3\u30fc\u30c9 | string | 255 | o |  | o | 1 |  |\n-| 2 | \u55b6\u696d\u6240\u30b3\u30fc\u30c9 | string | 255 |  | o |  | 11 | `\u55b6\u696d\u6240\u30b3\u30fc\u30c9` \u306f `\u6a29\u9650` \u304c`sales` \u306e\u5834\u5408\u306b\u5fc5\u9808\u3067\u3059\u3002 |\n+| 2 | \u55b6\u696d\u6240\u30b3\u30fc\u30c9 | string | 255 |  | o |  | 11 |  |\n | 3 | \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9 | string | 255 |  |  | o | example@example.com |  |\n | 4 | \u30d1\u30b9\u30ef\u30fc\u30c9 | string | 255 |  |  |  |  | \u7a7a\u306e\u5834\u5408\u306f\u66f4\u65b0\u3055\u308c\u307e\u305b\u3093 |\n | 5 | \u59d3 | string | 255 |  |  | o | \u4f50\u85e4 |  |\n | 6 | \u540d | string | 255 |  |  | o | \u592a\u90ce |  |\n | 7 | \u59d3\uff08\u304b\u306a\uff09 | string | 255 |  |  | o | \u3055\u3068\u3046 |  |\n | 8 | \u540d\uff08\u304b\u306a\uff09 | string | 255 |  |  | o | \u305f\u308d\u3046 |  |\n-| 9 | \u6a29\u9650 | string | 255 |  |  | o | sales | admin: \u7ba1\u7406\u8005\u6a29\u9650<br />clerk: \u4e8b\u52d9\u54e1<br />sales: \u55b6\u696d\u54e1 |\n+| 9 | \u6a29\u9650 | string | 255 |  |  | o | general | admin: \u7ba1\u7406\u8005<br />general: \u4e00\u822c |\n | 10 | \u96fb\u8a71\u756a\u53f7 | string | 255 |  |  |  | 090-0000-0000 |  |\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u4f4d\u4e92\u63db\u6027\u7dad\u6301\u306e\u305f\u3081\u306bv3.8.0\u4ee5\u524d\u306b\u5229\u7528\u3057\u3066\u3044\u305fclerk, sales\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306fgeneral\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002v4\u3067\u3053\u306e\u4e0b\u4f4d\u4e92\u63db\u6027\u306f\u524a\u9664\u4e88\u5b9a\u3067\u3059\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);