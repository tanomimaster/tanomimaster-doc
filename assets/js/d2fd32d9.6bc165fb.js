"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9497],{6478:e=>{e.exports=JSON.parse('{"permalink":"/tanomimaster-doc/blog/2022/04/06/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/blob/develop/website/blog/2022-04-06-csv.md","source":"@site/blog/2022-04-06-csv.md","title":"v2.2.1.2 Release","description":"\u30e1\u30fc\u30ab\u30fc\u5411\u3051","date":"2022-04-06T00:00:00.000Z","tags":[],"readingTime":1.345,"hasTruncateMarker":false,"authors":[{"name":"Yuki Matsukura","url":"https://x.com/matsubokkuri","key":null,"page":null}],"frontMatter":{"title":"v2.2.1.2 Release","author":"Yuki Matsukura","authorURL":"https://x.com/matsubokkuri","authorFBID":"matsubokkuri"},"unlisted":false,"prevItem":{"title":"v2.2.1.2 Release","permalink":"/tanomimaster-doc/blog/2022/04/14/csv"},"nextItem":{"title":"\u5546\u54c1\u306eCSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5546\u54c1\u8aac\u660e\u30ab\u30e9\u30e0\u3092\u8ffd\u52a0","permalink":"/tanomimaster-doc/blog/2022/03/25/csv"}}')},8133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var s=t(6478),l=t(4848),i=t(8453);const r={title:"v2.2.1.2 Release",author:"Yuki Matsukura",authorURL:"https://x.com/matsubokkuri",authorFBID:"matsubokkuri"},o=void 0,a={authorsImageUrls:[void 0]},c=[{value:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051",id:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051",level:2},{value:"\u5c0f\u58f2\u5411\u3051",id:"\u5c0f\u58f2\u5411\u3051",level:2},{value:"\u7ba1\u7406\u8005\u5411\u3051",id:"\u7ba1\u7406\u8005\u5411\u3051",level:2},{value:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",id:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051",children:"\u30e1\u30fc\u30ab\u30fc\u5411\u3051"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5546\u54c1\u5165\u7a3f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u5909\u66f4","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/csv",children:"CSV\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"}),"\u306e\u30ab\u30e9\u30e0\u540d\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:' | 1 | \u578b\u5f0f\uff08\u54c1\u756a\uff09 | string | 255 | o |  | o | 1234567890 | ASCII\u6587\u5b57\uff08 `\\:*?"<>` \u4ee5\u5916\uff09 |\n | 2 | \u30ab\u30c6\u30b4\u30eaID | bigint |  |  | o | o | 1 |  |\n | 3 | \u30e1\u30fc\u30ab\u30fc\u5185\u90e8\u30b3\u30fc\u30c9 | string | 255 |  |  |  |  |  |\n-| 4 | \u88fd\u54c1\u540d | string | 255 |  |  | o |  |  |\n+| 4 | \u5546\u54c1\u540d | string | 255 |  |  | o |  |  |\n | 5 | \u30e1\u30fc\u30ab\u30fc\u5e0c\u671b\u5c0f\u58f2\u4fa1\u683c(\u7a0e\u629c)        | integer | 2,147,483,647 |  |  |  |  | \u5358\u4f4d\u306f\u65e5\u672c\u5186\u3002\u7a0e\u629c\u3002\u7a7a\u767d\u306e\u5834\u5408\u306f\u30aa\u30fc\u30d7\u30f3\u30d7\u30e9\u30a4\u30b9\u3002 |\n | 6 | \u76ee\u5b89\u7d0d\u671f\u65e5\u6570 | integer| 2,147,483,647|  |  | o | 3 | \u55b6\u696d\u65e5\u306e\u6570\u5b57\u3092\u8a18\u8f09 |\n | 7 | \u30ac\u30b9\u30de\u30b9\u30bf\u3092\u4f7f\u3046\u304b\u3069\u3046\u304b\u30d5\u30e9\u30b0 | boolean |  |  |  | o | 1 | \u6ce8\u6587\u6642\u306bLP\u304b\u90fd\u5e02\u30ac\u30b9\u304b\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5546\u54c1 |~\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["API","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6ce8\u6587\u306e\u5099\u8003\u3092\u8ffd\u52a0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5c0f\u58f2\u5411\u3051",children:"\u5c0f\u58f2\u5411\u3051"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["API","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6ce8\u6587\u306e\u5099\u8003\u3092\u8ffd\u52a0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ba1\u7406\u8005\u5411\u3051",children:"\u7ba1\u7406\u8005\u5411\u3051"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30d1\u30f3\u304f\u305a\u30ea\u30b9\u30c8\u8ffd\u52a0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8",children:"\u30b7\u30b9\u30c6\u30e0\u5185\u90e8"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30e9\u30a4\u30d6\u30e9\u30ea\u66f4\u65b0","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"puma\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u66f4\u65b0"}),"\n",(0,l.jsx)(n.li,{children:"rspec\u95a2\u4fc2\u30e9\u30a4\u30d6\u30e9\u30ea\u66f4\u65b0"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"docker\u30a4\u30e1\u30fc\u30b8\u8efd\u91cf\u5316"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);