"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{2667:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(6540),l=a(870),r=a(4586),i=a(1003),o=a(7559),s=a(6669),m=a(1312),c=a(9022);function g(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.A,{permalink:a,title:n.createElement(m.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(c.A,{permalink:l,title:n.createElement(m.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(1463),u=a(7131),b=a(8258);function E(e){let{items:t,component:a=b.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(u.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:l,blogTitle:o,permalink:s}=t,m="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.be,{title:m,description:l}),n.createElement(p.A,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.A,{sidebar:l},n.createElement(E,{items:a}),n.createElement(g,{metadata:t}))}function A(e){return n.createElement(i.e3,{className:(0,l.A)(o.G.wrapper.blogPages,o.G.page.blogListPage)},n.createElement(d,e),n.createElement(h,e))}}}]);