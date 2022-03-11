"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2681],{1835:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/23/api","metadata":{"permalink":"/tanomimaster-doc/blog/2021/12/23/api","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2021-12-23-api.md","source":"@site/blog/2021-12-23-api.md","title":"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u6700\u65b0\u5316","description":"- \u30bf\u30ce\u30df\u30de\u30b9\u30bf\u30fc\u306e\u6a5f\u80fd\u6982\u8981\u306b\u95a2\u3057\u3066\u53e4\u3044\u8a18\u8ff0\u304c\u3042\u3063\u305f\u306e\u3067\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002","date":"2021-12-23T00:00:00.000Z","formattedDate":"2021\u5e7412\u670823\u65e5","tags":[],"readingTime":0.325,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"nextItem":{"title":"Release 0.5.1","permalink":"/tanomimaster-doc/blog/2021/08/24/csv"}},"content":"- \u30bf\u30ce\u30df\u30de\u30b9\u30bf\u30fc\u306e\u6a5f\u80fd\u6982\u8981\u306b\u95a2\u3057\u3066\u53e4\u3044\u8a18\u8ff0\u304c\u3042\u3063\u305f\u306e\u3067\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002\\n- \u6ce8\u6587\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u95a2\u3059\u308b\u56f3\u306a\u3069\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002\\n- Open API\u306e\u4ed5\u69d8\u3092\u62db\u5f85\u5236\u304b\u3089\u516c\u958b\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n  - https://github.com/tanomimaster/tanomimaster-openapi"},{"id":"/2021/08/24/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2021/08/24/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2021-08-24-csv.md","source":"@site/blog/2021-08-24-csv.md","title":"Release 0.5.1","description":"- CSV\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u9577\u3055\u3092\u5b9f\u88c5\u306b\u5408\u308f\u305b\u3066\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2021-08-24T00:00:00.000Z","formattedDate":"2021\u5e748\u670824\u65e5","tags":[],"readingTime":2.06,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u6700\u65b0\u5316","permalink":"/tanomimaster-doc/blog/2021/12/23/api"},"nextItem":{"title":"Release 0.5.0","permalink":"/tanomimaster-doc/blog/2021/03/17/category"}},"content":"- [CSV\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8](/docs/csv)\u306e\u9577\u3055\u3092\u5b9f\u88c5\u306b\u5408\u308f\u305b\u3066\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n  - \u5b9f\u88c5\u306b\u5408\u308f\u305b\u3066\u4ed5\u69d8\u66f8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n\\n```diff\\n | 9 | \u4ed5\u5165\u5148\u540d | \u6587\u5b57\u5217 | 32 | o | o | o |  |  |\\n | 10 | \u6ce8\u6587\u756a\u53f7 | \u534a\u89d2\u82f1\u6570\u5b57 | 10 |  |  | o |  | \u6ce8\u6587\u756a\u53f7 |\\n | 11 | \u6ce8\u6587\u660e\u7d30No | \u534a\u89d2\u82f1\u6570\u5b57 | 3 |  |  | o |  | \u660e\u7d30No |\\n-| 12 | \u5546\u54c1\u30b3\u30fc\u30c9 | \u6587\u5b57\u5217 | 30 |  |  | o |  |  |\\n-| 13 | \u30e1\u30fc\u30ab\u30fc\u5185\u90e8\u30b3\u30fc\u30c9 | \u534a\u89d2\u82f1\u6570\u5b57 | 10 |  |  | o |  |  |\\n+| 12 | \u5546\u54c1\u30b3\u30fc\u30c9 | \u6587\u5b57\u5217 | 255 |  |  | o |  |  |\\n+| 13 | \u30e1\u30fc\u30ab\u30fc\u5185\u90e8\u30b3\u30fc\u30c9 | \u534a\u89d2\u82f1\u6570\u5b57 | 255 |  |  | o |  |  |\\n | 14 | \u30ac\u30b9\u7a2e | \u534a\u89d2\u82f1\u6570\u5b57 | 10 |  |  |  |  | LP, 13A\u306a\u3069 |\\n | 15 | \u767a\u6ce8\u6570 | \u6570\u5024 | 4 |  |  | o |  |  |\\n | 16 | \u767a\u6ce8\u5358\u4fa1 | int | 9 |  |  | o |  |  |\\n | 17 | \u5e0c\u671b\u7d0d\u671f | date | 10 |  |  |  |  |  |\\n-| 18 | \u55b6\u696d\u6240\u540d | string | 50 |  |  | o |  |  |\\n+| 18 | \u55b6\u696d\u6240\u540d | string | 255 |  |  | o |  |  |\\n | 19 | \u55b6\u696d\u6240\u96fb\u8a71\u756a\u53f7 | string | 15 |  |  | o |  |  |\\n | 20 | \u55b6\u696d\u6240FAX | string | 15 |  |  | o |  |  |\\n-| 21 | \u62c5\u5f53\u8005\u540d | string | 30 |  |  | o |  |  |\\n+| 21 | \u62c5\u5f53\u8005\u540d | string | 255 |  |  | o |  |  |\\n | 22 | \u7d0d\u54c1\u5148\u540d | string | 20 |  |  | o |  |  |\\n | 23 | \u7d0d\u54c1\u5148\u4f4f\u6240 | string | 152 |  |  | o |  |  |\\n | 24 | \u7d0d\u54c1\u5148TEL | string | 15 |  |  | o |  |  |\\n```"},{"id":"/2021/03/17/category","metadata":{"permalink":"/tanomimaster-doc/blog/2021/03/17/category","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2021-03-17-category.md","source":"@site/blog/2021-03-17-category.md","title":"Release 0.5.0","description":"- \u30e1\u30fc\u30ab\u30fc\u5411\u3051","date":"2021-03-17T00:00:00.000Z","formattedDate":"2021\u5e743\u670817\u65e5","tags":[],"readingTime":0.185,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.5.1","permalink":"/tanomimaster-doc/blog/2021/08/24/csv"},"nextItem":{"title":"Release 0.4.0","permalink":"/tanomimaster-doc/blog/2021/02/25/csv"}},"content":"- \u30e1\u30fc\u30ab\u30fc\u5411\u3051\\n  - \u30ab\u30c6\u30b4\u30ea\u30de\u30b9\u30bf\u306e\u9805\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002 \u4eca\u5f8c\u306f\u5546\u54c1\u30c7\u30fc\u30bf\u7ba1\u7406\u753b\u9762\u306b\u3042\u308b\u30ea\u30f3\u30af\u304b\u3089\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"},{"id":"/2021/02/25/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2021/02/25/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2021-02-25-csv.md","source":"@site/blog/2021-02-25-csv.md","title":"Release 0.4.0","description":"- \u7d0d\u671f\u56de\u7b54\u306eCSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5c0f\u58f2\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002","date":"2021-02-25T00:00:00.000Z","formattedDate":"2021\u5e742\u670825\u65e5","tags":[],"readingTime":0.21,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.5.0","permalink":"/tanomimaster-doc/blog/2021/03/17/category"},"nextItem":{"title":"Release 0.3.0","permalink":"/tanomimaster-doc/blog/2021/01/06/csv"}},"content":"- [\u7d0d\u671f\u56de\u7b54\u306eCSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8](/docs/csv)\u306b`\u5c0f\u58f2\u30b3\u30fc\u30c9`\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\\n- \u5546\u54c1CSV\u3068\u65b0\u898f\u53d7\u6ce8CSV\u306b`\u30ab\u30bf\u30ed\u30b0URL`\u3068`\u627f\u8a8d\u56f3URL`\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002"},{"id":"/2021/01/06/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2021/01/06/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2021-01-06-csv.md","source":"@site/blog/2021-01-06-csv.md","title":"Release 0.3.0","description":"- CSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u9805\u76ee\u540d\u5546\u54c1\u30b3\u30fc\u30c9\u3092\u578b\u5f0f\uff08\u54c1\u756a\uff09\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2021-01-06T00:00:00.000Z","formattedDate":"2021\u5e741\u67086\u65e5","tags":[],"readingTime":0.105,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.4.0","permalink":"/tanomimaster-doc/blog/2021/02/25/csv"},"nextItem":{"title":"Release 0.2.0","permalink":"/tanomimaster-doc/blog/2020/03/10/csv"}},"content":"- [CSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8](/docs/csv)\u306e\u9805\u76ee\u540d`\u5546\u54c1\u30b3\u30fc\u30c9`\u3092`\u578b\u5f0f\uff08\u54c1\u756a\uff09`\u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"},{"id":"/2020/03/10/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2020/03/10/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2020-03-10-csv.md","source":"@site/blog/2020-03-10-csv.md","title":"Release 0.2.0","description":"\u7d0d\u671f\u56de\u7b54CSV\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2020-03-10T00:00:00.000Z","formattedDate":"2020\u5e743\u670810\u65e5","tags":[],"readingTime":0.08,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.3.0","permalink":"/tanomimaster-doc/blog/2021/01/06/csv"},"nextItem":{"title":"Release 0.1.0","permalink":"/tanomimaster-doc/blog/2020/02/28/csv"}},"content":"[\u7d0d\u671f\u56de\u7b54CSV](/docs/csv)\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"},{"id":"/2020/02/28/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2020/02/28/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2020-02-28-csv.md","source":"@site/blog/2020-02-28-csv.md","title":"Release 0.1.0","description":"\u7d0d\u671f\u56de\u7b54CSV\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2020-02-28T00:00:00.000Z","formattedDate":"2020\u5e742\u670828\u65e5","tags":[],"readingTime":0.48,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.2.0","permalink":"/tanomimaster-doc/blog/2020/03/10/csv"},"nextItem":{"title":"Release 0.0.4","permalink":"/tanomimaster-doc/blog/2019/12/09/csv"}},"content":"[\u7d0d\u671f\u56de\u7b54CSV](/docs/csv)\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n\\n- \u53d7\u6ce8CSV\u306e2\u5217\u76ee\u306b6\u5217\u5206\u306e\u30ab\u30e9\u30e0\u3092\u8ffd\u52a0\\n  - \u5c0f\u58f2\u30b3\u30fc\u30c9\\n  - \u5c0f\u58f2\u540d\\n  - \u652f\u5e97\u30b3\u30fc\u30c9\\n  - \u652f\u5e97\u540d\\n  - \u55b6\u696d\u6240\u30b3\u30fc\u30c9\\n  - \u55b6\u696d\u6240\u540d\\n\\n## \u7d30\u304b\u3044\u4fee\u6b63\u70b9\\n\\n### 0.0.6 2020/1/28\\n\\n- \u5546\u54c1\u30de\u30b9\u30bf\u306eCSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u30ab\u30e9\u30e0\u3092\u8ffd\u52a0\u3002\\n- CSV\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u8aac\u660e\u3092\u52a0\u7b46\u3002\\n\\n### 0.0.5 2019/12/25\\n\\n- \u5229\u7528\u8005\u5411\u3051\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\\n\\n### 0.0.4 2019/12/9"},{"id":"/2019/12/09/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2019/12/09/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2019-12-09-csv.md","source":"@site/blog/2019-12-09-csv.md","title":"Release 0.0.4","description":"- \u7d0d\u671f\u56de\u7b54CSV\u306e\u4ed5\u69d8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2019-12-09T00:00:00.000Z","formattedDate":"2019\u5e7412\u67089\u65e5","tags":[],"readingTime":2.15,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.1.0","permalink":"/tanomimaster-doc/blog/2020/02/28/csv"},"nextItem":{"title":"Release 0.0.3","permalink":"/tanomimaster-doc/blog/2019/11/22/csv"}},"content":"- [\u7d0d\u671f\u56de\u7b54CSV](/docs/csv)\u306e\u4ed5\u69d8\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n- \u4ee5\u4e0b\u306b\u91cd\u8981\u90e8\u5206\u3092\u629c\u7c8b\u3057\u307e\u3059\\n\\n```diff\\n | --- | --- | --- | --- | --- | --- | --- | --- | --- |\\n | 1 | \u55b6\u696d\u54e1\u30b3\u30fc\u30c9 | string | 255 | o |  | o | 1 |  |\\n-| 2 | \u55b6\u696d\u6240\u30b3\u30fc\u30c9 | string | 255 |  | o |  | 11 |  |\\n+| 2 | \u55b6\u696d\u6240\u30b3\u30fc\u30c9 | string | 255 |  | o |  | 11 | `\u55b6\u696d\u6240\u30b3\u30fc\u30c9` \u306f `\u6a29\u9650` \u304c`sales` \u306e\u5834\u5408\u306b\u5fc5\u9808\u3067\u3059\u3002 |\\n | 3 | \u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9 | string | 255 |  |  | o | example@example.com |  |\\n | 4 | \u30d1\u30b9\u30ef\u30fc\u30c9 | string | 255 |  |  |  |  | \u7a7a\u306e\u5834\u5408\u306f\u66f4\u65b0\u3055\u308c\u307e\u305b\u3093 |\\n | 5 | \u59d3 | string | 255 |  |  | o | \u4f50\u85e4 |  |\\n@@ -133,18 +137,19 @@ sidebar_label: \u5165\u7a3f\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\\n\\n | 3 | \u30e1\u30fc\u30ab\u30fc\u5185\u90e8\u30b3\u30fc\u30c9 | string | 255 |  |  |  |  |  |\\n | 4 | \u88fd\u54c1\u540d | string | 255 |  |  | o |  |  |\\n-| 5 | \u30ac\u30b9\u30de\u30b9\u30bf\u3092\u4f7f\u3046\u304b\u3069\u3046\u304b\u30d5\u30e9\u30b0 | boolean |  |  |  | o | 1 | \u6ce8\u6587\u6642\u306bLP\u304b\u90fd\u5e02\u30ac\u30b9\u304b\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5546\u54c1 |\\n+| 5 | \u76ee\u5b89\u7d0d\u671f\u65e5\u6570 | integer| 2,147,483,647|  |  | o | 3 | \u55b6\u696d\u65e5\u306e\u6570\u5b57\u3092\u8a18\u8f09 |\\n+| 6 | \u30ac\u30b9\u30de\u30b9\u30bf\u3092\u4f7f\u3046\u304b\u3069\u3046\u304b\u30d5\u30e9\u30b0 | boolean |  |  |  | o | 1 | \u6ce8\u6587\u6642\u306bLP\u304b\u90fd\u5e02\u30ac\u30b9\u304b\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5546\u54c1 |\\n@@ -155,11 +160,11 @@ sidebar_label: \u5165\u7a3f\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\\n\\n | 2 | \u5c0f\u58f2\u30b3\u30fc\u30c9 | string | 255 | o | o | o |  | |\\n-| 3 | \u5951\u7d04\u91d1\u984d | mediumtext | 16,777,215 | | | o |  | \u7a0e\u629c |\\n+| 3 | \u5951\u7d04\u91d1\u984d | integer | 2,147,483,647 | | | o |  | \u7a0e\u629c |\\n | 4 | \u958b\u59cb\u65e5\u6642 | datetime | | o | | | | |\\n | 5 | \u7d42\u4e86\u65e5\u6642 | datetime | |   | | | | |\\n\\n@@ -167,7 +172,7 @@ sidebar_label: \u5165\u7a3f\u30c7\u30fc\u30bf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\\n```"},{"id":"/2019/11/22/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2019/11/22/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2019-11-22-csv.md","source":"@site/blog/2019-11-22-csv.md","title":"Release 0.0.3","description":"- \u7d0d\u671f\u56de\u7b54CSV\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002","date":"2019-11-22T00:00:00.000Z","formattedDate":"2019\u5e7411\u670822\u65e5","tags":[],"readingTime":0.675,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.0.4","permalink":"/tanomimaster-doc/blog/2019/12/09/csv"},"nextItem":{"title":"Release 0.0.2","permalink":"/tanomimaster-doc/blog/2019/11/21/color"}},"content":"- [\u7d0d\u671f\u56de\u7b54CSV](/docs/csv)\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n  - \u7528\u8a9e\u3092\u7d71\u4e00\u3057\u307e\u3057\u305f\u3002\\n  - \u7528\u8a9e\u306e\u5b9a\u7fa9\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\\n  - \u753b\u50cf\u306e\u5927\u304d\u3055\u306b\u95a2\u3057\u3066\u306e\u76ee\u5b89\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002\\n\\n```diff\\n-| 6 | \u5668\u5177\u578b\u5f0f | \u6f22\u5b57 | 30 |  |  | o |  |  |\\n+| 6 | \u5546\u54c1\u30b3\u30fc\u30c9 | \u6f22\u5b57 | 30 |  |  | o |  |  |\\n-| 7 | \u54c1\u76ee\u30b3\u30fc\u30c9 | \u534a\u89d2\u82f1\u6570\u5b57 | 10 |  |  | o |  |  |\\n+| 7 | \u30e1\u30fc\u30ab\u30fc\u5185\u90e8\u30b3\u30fc\u30c9 | \u534a\u89d2\u82f1\u6570\u5b57 | 10 |  |  | o |  |  |\\n```"},{"id":"/2019/11/21/color","metadata":{"permalink":"/tanomimaster-doc/blog/2019/11/21/color","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2019-11-21-color.md","source":"@site/blog/2019-11-21-color.md","title":"Release 0.0.2","description":"- \u30ab\u30e9\u30fc\u30b9\u30ad\u30fc\u30de\u306b\u6e96\u62e0\u3057\u307e\u3057\u305f\u3002","date":"2019-11-21T00:00:00.000Z","formattedDate":"2019\u5e7411\u670821\u65e5","tags":[],"readingTime":0.115,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.0.3","permalink":"/tanomimaster-doc/blog/2019/11/22/csv"},"nextItem":{"title":"Release 0.0.1","permalink":"/tanomimaster-doc/blog/2019/11/20/csv"}},"content":"- \u30ab\u30e9\u30fc\u30b9\u30ad\u30fc\u30de\u306b\u6e96\u62e0\u3057\u307e\u3057\u305f\u3002\\n- [\u5909\u66f4\u5c65\u6b74](/blog)\u306e\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"},{"id":"/2019/11/20/csv","metadata":{"permalink":"/tanomimaster-doc/blog/2019/11/20/csv","editUrl":"https://github.com/tanomimaster/tanomimaster-doc/edit/master/website/blog/blog/2019-11-20-csv.md","source":"@site/blog/2019-11-20-csv.md","title":"Release 0.0.1","description":"- \u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u756a\u53f7\u3092\u4ed8\u52a0\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002","date":"2019-11-20T00:00:00.000Z","formattedDate":"2019\u5e7411\u670820\u65e5","tags":[],"readingTime":0.52,"truncated":false,"authors":[{"name":"Yuki Matsukura","url":"http://twitter.com/matsubokkuri"}],"prevItem":{"title":"Release 0.0.2","permalink":"/tanomimaster-doc/blog/2019/11/21/color"}},"content":"- \u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u756a\u53f7\u3092\u4ed8\u52a0\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002\\n- [\u7d0d\u671f\u56de\u7b54CSV](/docs/csv)\u306e\u8868\u8a18\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\\n\\n```diff\\n | \u30ab\u30e9\u30e0 | \u540d\u79f0 | \u578b | \u6587\u5b57\u6570 | PK | FK | \u5fc5\u9808 | \u4f8b | \u5099\u8003 |\\n | --- | --- | --- | --- | --- | --- | --- | --- | --- |\\n-| 1 | \u53d7\u6ce8\u30b3\u30fc\u30c9 | string | 255 | o | o | o |  | |\\n+| 1 | \u6ce8\u6587\u756a\u53f7 | string | 255 | o | o | o |  | |\\n | 2 | \u7d0d\u671f\u65e5 | date | o |  | |  | | |\\n```"}]}')}}]);