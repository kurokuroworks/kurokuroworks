webpackJsonp([2],{141:function(t,e,n){function i(t){n(212)}var o=n(18)(n(176),n(200),i,null,null);t.exports=o.exports},145:function(t,e,n){t.exports=n.p+"img/logo_white.8eff58f.png"},146:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,"footer{background-color:#555;color:#fff;padding:15px 10px 20px;text-align:center}footer .title{width:180px;margin:0 auto}footer .copyright{font-size:14px;line-height:16px}@media screen and (min-width:735px){footer{text-align:left}footer .title{margin:0}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/footer.vue"],names:[],mappings:"AACA,OAAO,sBAAyB,WAAc,uBAAuB,iBAAiB,CACrF,AACD,cAAc,YAAY,aAAa,CACtC,AACD,kBAAkB,eAAe,gBAAgB,CAChD,AACD,oCACA,OAAO,eAAe,CACrB,AACD,cAAc,QAAQ,CACrB,CACA",file:"footer.vue",sourcesContent:["\nfooter{background-color:#555555;color:#ffffff;padding:15px 10px 20px;text-align:center\n}\nfooter .title{width:180px;margin:0 auto\n}\nfooter .copyright{font-size:14px;line-height:16px\n}\n@media screen and (min-width: 735px){\nfooter{text-align:left\n}\nfooter .title{margin:0\n}\n}\n"],sourceRoot:""}])},147:function(t,e,n){t.exports=n.p+"img/cover_welcome.b4d199f.jpg"},148:function(t,e,n){function i(t){n(150)}var o=n(18)(null,n(149),i,null,null);t.exports=o.exports},149:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"container"},[i("p",{staticClass:"title"},[i("img",{attrs:{src:n(145)}})]),i("div",{staticClass:"copyright"},[i("p",[i("small",[t._v("2011 - 2017 kurokuroworks.")])]),i("p",[i("small",[t._v("Made with ♥ in Akiahbara & Nagoya")])])])])])}]}},150:function(t,e,n){var i=n(146);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("08b4045e",i,!0)},151:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(154),o=n.n(i);e.default={data:function(){return{isVisible:!0,currentPosition:0}},mounted:function(){var t=this;window&&window.addEventListener("scroll",o()(function(){t.isVisible=300>window.pageYOffset||window.pageYOffset<t.currentPosition,t.currentPosition=window.pageYOffset},100))}}},152:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,".header-parts+*{margin-top:80px}.header-parts{position:fixed;z-index:100;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#3bf;background-size:cover;background-image:url("+n(147)+");color:#fff;overflow:hidden;text-align:center}.header-parts.is-visible{top:0}.header-parts a{display:inline-block}.header-parts .logo{height:50px;padding:7px}.header-parts .logo img{height:100%}.header-parts nav{background-color:rgba(0,0,0,.3)}.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.header-parts nav ul li a{color:#fff}.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px}.header-parts nav ul li p i{display:none}@media screen and (min-width:735px){.header-parts{text-align:inherit}.header-parts .logo{float:left;height:80px;padding:20px}.header-parts .logo img{height:100%}.header-parts nav{float:right;background:none}.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex}.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px}.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem}.header-parts nav ul li p:hover{border-bottom:4px solid #fff}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/header.vue"],names:[],mappings:"AACA,gBAAgB,eAAe,CAC9B,AACD,cAAc,eAAe,YAAY,8CAA+C,sCAAuC,gCAAgC,2BAA2B,wBAAwB,WAAW,OAAO,QAAQ,YAAY,sBAAyB,sBAAsB,+CAAyD,WAAc,gBAAgB,iBAAiB,CAC9Y,AACD,yBAAyB,KAAK,CAC7B,AACD,gBAAgB,oBAAoB,CACnC,AACD,oBAAoB,YAAY,WAAW,CAC1C,AACD,wBAAwB,WAAW,CAClC,AACD,kBAAkB,+BAAgC,CACjD,AACD,qBAAqB,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CAC5I,AACD,0BAA0B,UAAa,CACtC,AACD,0BAA0B,kBAAkB,YAAY,YAAY,eAAe,gBAAgB,CAClG,AACD,4BAA4B,YAAY,CACvC,AACD,oCACA,cAAc,kBAAkB,CAC/B,AACD,oBAAoB,WAAW,YAAY,YAAY,CACtD,AACD,wBAAwB,WAAW,CAClC,AACD,kBAAkB,YAAY,eAAe,CAC5C,AACD,qBAAqB,oBAAoB,oBAAoB,YAAY,CACxE,AACD,0BAA0B,kBAAkB,YAAY,YAAY,YAAY,CAC/E,AACD,4BAA4B,cAAc,WAAW,gBAAgB,CACpE,AACD,gCAAgC,4BAA+B,CAC9D,CACA",file:"header.vue",sourcesContent:['\n.header-parts+*{margin-top:80px\n}\n.header-parts{position:fixed;z-index:100;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#33bbff;background-size:cover;background-image:url("~assets/images/cover_welcome.jpg");color:#ffffff;overflow:hidden;text-align:center\n}\n.header-parts.is-visible{top:0\n}\n.header-parts a{display:inline-block\n}\n.header-parts .logo{height:50px;padding:7px\n}\n.header-parts .logo img{height:100%\n}\n.header-parts nav{background-color:rgba(0,0,0,0.3)\n}\n.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.header-parts nav ul li a{color:#ffffff\n}\n.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px\n}\n.header-parts nav ul li p i{display:none\n}\n@media screen and (min-width: 735px){\n.header-parts{text-align:inherit\n}\n.header-parts .logo{float:left;height:80px;padding:20px\n}\n.header-parts .logo img{height:100%\n}\n.header-parts nav{float:right;background:none\n}\n.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px\n}\n.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem\n}\n.header-parts nav ul li p:hover{border-bottom:4px solid #ffffff\n}\n}\n'],sourceRoot:""}])},153:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,".ads-container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ads-container .ads{width:336px;height:280px;background-color:#333;color:red;margin:0 5px 10px}.ads-container .ads.secondary{display:none}@media (min-width:735px){.ads-container .ads.secondary{display:block}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/advertisement.vue"],names:[],mappings:"AACA,eAAe,kBAAkB,oBAAoB,oBAAoB,aAAa,mBAAmB,eAAe,wBAAwB,qBAAqB,sBAAsB,CAC1L,AACD,oBAAoB,YAAY,aAAa,sBAAyB,UAAc,iBAAiB,CACpG,AACD,8BAA8B,YAAY,CACzC,AACD,yBACA,8BAA8B,aAAa,CAC1C,CACA",file:"advertisement.vue",sourcesContent:["\n.ads-container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.ads-container .ads{width:336px;height:280px;background-color:#333333;color:#ff0000;margin:0 5px 10px\n}\n.ads-container .ads.secondary{display:none\n}\n@media (min-width: 735px){\n.ads-container .ads.secondary{display:block\n}\n}\n"],sourceRoot:""}])},154:function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=C,i=f;return C=f=void 0,k=e,B=t.apply(i,n)}function a(t){return k=t,m=setTimeout(l,e),D?i(t):B}function r(t){var n=t-h,i=t-k,o=e-n;return y?v(o,u-i):o}function s(t){var n=t-h,i=t-k;return void 0===h||n>=e||n<0||y&&i>=u}function l(){var t=w();if(s(t))return p(t);m=setTimeout(l,r(t))}function p(t){return m=void 0,Y&&C?i(t):(C=f=void 0,B)}function d(){void 0!==m&&clearTimeout(m),k=0,C=h=f=m=void 0}function g(){return void 0===m?B:p(w())}function x(){var t=w(),n=s(t);if(C=arguments,f=this,h=t,n){if(void 0===m)return a(h);if(y)return m=setTimeout(l,e),i(h)}return void 0===m&&(m=setTimeout(l,e)),B}var C,f,u,B,m,h,k=0,D=!1,y=!1,Y=!0;if("function"!=typeof t)throw new TypeError(c);return e=A(e)||0,o(n)&&(D=!!n.leading,y="maxWait"in n,u=y?b(A(n.maxWait)||0,e):u,Y="trailing"in n?!!n.trailing:Y),x.cancel=d,x.flush=g,x}function i(t,e,i){var a=!0,r=!0;if("function"!=typeof t)throw new TypeError(c);return o(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),n(t,e,{leading:a,maxWait:e,trailing:r})}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return!!t&&"object"==typeof t}function r(t){return"symbol"==typeof t||a(t)&&h.call(t)==l}function A(t){if("number"==typeof t)return t;if(r(t))return s;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var n=g.test(t);return n||x.test(t)?C(t.slice(2),n?2:8):d.test(t)?s:+t}var c="Expected a function",s=NaN,l="[object Symbol]",p=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,x=/^0o[0-7]+$/i,C=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,B=f||u||Function("return this")(),m=Object.prototype,h=m.toString,b=Math.max,v=Math.min,w=function(){return B.Date.now()};t.exports=i}).call(e,n(13))},155:function(t,e,n){function i(t){n(161)}var o=n(18)(null,n(159),i,null,null);t.exports=o.exports},156:function(t,e,n){function i(t){n(160)}var o=n(18)(n(151),n(158),i,null,null);t.exports=o.exports},158:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-parts",class:{"is-visible":t.isVisible}},[i("div",{staticClass:"container"},[i("nuxt-link",{attrs:{to:"/"}},[i("h1",{staticClass:"logo"},[i("img",{attrs:{src:n(145)}})])]),i("nav",[i("ul",[i("li",[i("nuxt-link",{attrs:{to:"/articles"}},[i("p",[i("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}}),t._v("記事")])])],1),i("li",[i("nuxt-link",{attrs:{to:"/"}},[i("p",[i("i",{staticClass:"fa fa-magic",attrs:{"aria-hidden":"true"}}),t._v("アプリ")])])],1),i("li",[i("nuxt-link",{attrs:{to:"/"}},[i("p",[i("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("同人誌")])])],1),i("li",[i("nuxt-link",{attrs:{to:"/"}},[i("p",[i("i",{staticClass:"fa fa-hashtag",attrs:{"aria-hidden":"true"}}),t._v("サークル")])])],1)])])],1)])},staticRenderFns:[]}},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ads-container"},[n("div",{staticClass:"ads primary"},[n("p",[t._v("big rectangle ads 336x280")])]),n("div",{staticClass:"ads secondary"},[n("p",[t._v("big rectangle ads 336x280")])])])}]}},160:function(t,e,n){var i=n(152);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("068d4f0e",i,!0)},161:function(t,e,n){var i=n(153);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("5944f257",i,!0)},176:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),o=n.n(i),a=n(46),r=n.n(a),A=n(47),c=n.n(A),s=n(156),l=n.n(s),p=n(148),d=n.n(p),g=n(155),x=n.n(g);e.default={components:{AdvertisementParts:x.a,HeaderParts:l.a,FooterParts:d.a},computed:{splittedMetaTag:function(){return this.meta.meta.split(",")}},validate:function(t){var e=void 0;return t.isClient&&sessionStorage&&(e=JSON.parse(sessionStorage.getItem("articlesData"))),!e||!!e.find(function(e){return e.id===t.params.id})},asyncData:function(t){var e=void 0,n=void 0;t.isClient&&sessionStorage&&(e=sessionStorage.getItem("articlesData"),n=sessionStorage.getItem("articles/"+t.params.id));var i=[e||r.a.get(t.env.staticBaseUrl+"/www/articles.json").then(function(t){return t.text}),n||r.a.get(t.env.staticBaseUrl+"/www/articles/"+t.params.id+"/"+t.params.id+".md").then(function(t){return t.text})];return o.a.all(i).then(function(i){return t.isClient&&sessionStorage&&(e||sessionStorage.setItem("articlesData",i[0]),n||sessionStorage.setItem("articles/"+t.params.id,i[1])),{meta:JSON.parse(i[0]).filter(function(e){return e.id===t.params.id})[0],content:c()(i[1])}})},data:function(){return{content:null,meta:null}}}},180:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,".article-section{padding-top:0}.article-section .cover{position:relative;z-index:0;left:0;right:0;margin-bottom:-80px}@media screen and (min-width:735px){.article-section .cover{margin-bottom:-100px}}@media screen and (min-width:1095px){.article-section .cover{margin-bottom:-300px}}.article-section .cover img{width:100%}.article-section .paper{position:relative;padding-bottom:20px;margin:10px;z-index:1;background-color:#fff;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1)}.article-section .meta{text-align:center;padding:80px 0 40px}.article-section .meta .meta-title{font-size:30px;color:#444}.article-section .meta .meta-description{font-size:22px;padding:10px}.article-section .meta .meta-tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.article-section .meta .meta-tag li{border:1px solid #4183c4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183c4;font-size:14px}@media screen and (min-width:735px){.article-section .meta .meta-title{font-size:40px}}.article-section .content{padding:20px;max-width:800px;margin:0 auto}.article-section .content a{color:#4183c4}.article-section .content h1,.article-section .content h2,.article-section .content h3{margin:20px 0 10px;padding:0;cursor:text;position:relative}.article-section .content h1{display:none}.article-section .content h2{margin-top:50px;font-size:26px;color:#444}.article-section .content h3{font-size:18px}.article-section .content blockquote,.article-section .content dl,.article-section .content li,.article-section .content ol,.article-section .content p,.article-section .content pre,.article-section .content table,.article-section .content ul{margin:15px 0;font-size:18px;line-height:23px}.article-section .content hr{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;border:0 none;color:#ccc;height:4px;padding:0}.article-section .content ol,.article-section .content ul{padding-left:30px}.article-section .content dl{padding:0}.article-section .content dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}.article-section .content dl dd{margin:0 0 15px;padding:0 15px}.article-section .content blockquote{border-left:4px solid #ddd;padding:0 15px;color:#777}.article-section .content table{padding:0}.article-section .content table tr{border-top:1px solid #ccc;background-color:#fff;margin:0;padding:0}.article-section .content table tr:nth-child(2n){background-color:#f8f8f8}.article-section .content table tr th{font-weight:700}.article-section .content table tr td,.article-section .content table tr th{border:1px solid #ccc;text-align:left;margin:0;padding:6px 13px}.article-section .content img{max-width:100%;margin:10px 0 20px}.article-section .content code,.article-section .content tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px;font-size:16px;font-family:Courier New,sans-serif}.article-section .content pre code{margin:0;padding:0;white-space:pre;border:none;background:transparent}.article-section .content pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}.article-section .content pre code,.article-section .content pre tt{background-color:transparent;border:none}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/pages/articles/_id.vue"],names:[],mappings:"AACA,iBAAiB,aAAa,CAC7B,AACD,wBAAwB,kBAAkB,UAAU,OAAO,QAAQ,mBAAmB,CACrF,AACD,oCACA,wBAAwB,oBAAoB,CAC3C,CACA,AACD,qCACA,wBAAwB,oBAAoB,CAC3C,CACA,AACD,4BAA4B,UAAU,CACrC,AACD,wBAAwB,kBAAkB,oBAAoB,YAAY,UAAU,sBAAyB,8CAA+C,qCAAsC,CACjM,AACD,uBAAuB,kBAAkB,mBAAmB,CAC3D,AACD,mCAAmC,eAAe,UAAa,CAC9D,AACD,yCAAyC,eAAe,YAAY,CACnE,AACD,iCAAiC,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CACxJ,AACD,oCAAoC,yBAAyB,kBAAkB,cAAc,qBAAqB,cAAc,cAAc,CAC7I,AACD,oCACA,mCAAmC,cAAc,CAChD,CACA,AACD,0BAA0B,aAAa,gBAAgB,aAAa,CACnE,AACD,4BAA4B,aAAa,CACxC,AACD,uFAAuF,mBAAmB,UAAU,YAAY,iBAAiB,CAChJ,AACD,6BAA6B,YAAY,CACxC,AACD,6BAA6B,gBAAgB,eAAe,UAAa,CACxE,AACD,6BAA6B,cAAc,CAC1C,AACD,mPAAmP,cAAc,eAAe,gBAAgB,CAC/R,AACD,6BAA6B,oyCAAoyC,cAAc,WAAc,WAAW,SAAS,CACh3C,AACD,0DAA0D,iBAAiB,CAC1E,AACD,6BAA6B,SAAS,CACrC,AACD,gCAAgC,eAAe,gBAAiB,kBAAkB,UAAU,iBAAiB,CAC5G,AACD,gCAAgC,gBAAgB,cAAc,CAC7D,AACD,qCAAqC,2BAA8B,eAAe,UAAa,CAC9F,AACD,gCAAgC,SAAS,CACxC,AACD,mCAAmC,0BAA6B,sBAAuB,SAAS,SAAS,CACxG,AACD,iDAAiD,wBAAwB,CACxE,AACD,sCAAsC,eAAiB,CACtD,AACD,4EAFuD,sBAAyB,gBAAgB,SAAS,gBAAgB,CAGxH,AACD,8BAA8B,eAAe,kBAAkB,CAC9D,AACD,4DAA4D,aAAa,cAAc,mBAAmB,yBAAyB,yBAAyB,kBAAkB,eAAe,kCAAqC,CACjO,AACD,mCAAmC,SAAS,UAAU,gBAAgB,YAAY,sBAAsB,CACvG,AACD,8BAA8B,yBAAyB,sBAAyB,eAAe,iBAAiB,cAAc,iBAAiB,iBAAiB,CAC/J,AACD,oEAAoE,6BAA6B,WAAW,CAC3G",file:"_id.vue",sourcesContent:['\n.article-section{padding-top:0\n}\n.article-section .cover{position:relative;z-index:0;left:0;right:0;margin-bottom:-80px\n}\n@media screen and (min-width: 735px){\n.article-section .cover{margin-bottom:-100px\n}\n}\n@media screen and (min-width: 1095px){\n.article-section .cover{margin-bottom:-300px\n}\n}\n.article-section .cover img{width:100%\n}\n.article-section .paper{position:relative;padding-bottom:20px;margin:10px;z-index:1;background-color:#ffffff;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);box-shadow:0 1px 1px 0 rgba(0,0,0,0.1)\n}\n.article-section .meta{text-align:center;padding:80px 0 40px\n}\n.article-section .meta .meta-title{font-size:30px;color:#444444\n}\n.article-section .meta .meta-description{font-size:22px;padding:10px\n}\n.article-section .meta .meta-tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.article-section .meta .meta-tag li{border:1px solid #4183C4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183C4;font-size:14px\n}\n@media screen and (min-width: 735px){\n.article-section .meta .meta-title{font-size:40px\n}\n}\n.article-section .content{padding:20px;max-width:800px;margin:0 auto\n}\n.article-section .content a{color:#4183C4\n}\n.article-section .content h1,.article-section .content h2,.article-section .content h3{margin:20px 0 10px;padding:0;cursor:text;position:relative\n}\n.article-section .content h1{display:none\n}\n.article-section .content h2{margin-top:50px;font-size:26px;color:#444444\n}\n.article-section .content h3{font-size:18px\n}\n.article-section .content p,.article-section .content blockquote,.article-section .content ul,.article-section .content ol,.article-section .content dl,.article-section .content li,.article-section .content table,.article-section .content pre{margin:15px 0;font-size:18px;line-height:23px\n}\n.article-section .content hr{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;border:0 none;color:#cccccc;height:4px;padding:0\n}\n.article-section .content ul,.article-section .content ol{padding-left:30px\n}\n.article-section .content dl{padding:0\n}\n.article-section .content dl dt{font-size:14px;font-weight:bold;font-style:italic;padding:0;margin:15px 0 5px\n}\n.article-section .content dl dd{margin:0 0 15px;padding:0 15px\n}\n.article-section .content blockquote{border-left:4px solid #dddddd;padding:0 15px;color:#777777\n}\n.article-section .content table{padding:0\n}\n.article-section .content table tr{border-top:1px solid #cccccc;background-color:white;margin:0;padding:0\n}\n.article-section .content table tr:nth-child(2n){background-color:#f8f8f8\n}\n.article-section .content table tr th{font-weight:bold;border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px\n}\n.article-section .content table tr td{border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px\n}\n.article-section .content img{max-width:100%;margin:10px 0 20px\n}\n.article-section .content code,.article-section .content tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px;font-size:16px;font-family:"Courier New", sans-serif\n}\n.article-section .content pre code{margin:0;padding:0;white-space:pre;border:none;background:transparent\n}\n.article-section .content pre{background-color:#f8f8f8;border:1px solid #cccccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px\n}\n.article-section .content pre code,.article-section .content pre tt{background-color:transparent;border:none\n}\n'],sourceRoot:""}])},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-parts"),n("section",{staticClass:"article-section"},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:t.meta.thumbnail}})]),n("div",{staticClass:"container"},[n("div",{staticClass:"paper"},[n("div",{staticClass:"meta"},[n("h1",{staticClass:"meta-title"},[t._v(t._s(t.meta.title))]),n("p",{staticClass:"meta-description"},[t._v(t._s(t.meta.description))]),n("ul",{staticClass:"meta-tag"},t._l(t.splittedMetaTag,function(e){return n("li",[t._v(t._s(e))])}))]),n("advertisement-parts"),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),n("advertisement-parts")],1)])]),n("footer-parts")],1)},staticRenderFns:[]}},212:function(t,e,n){var i=n(180);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("32a5614a",i,!0)}});