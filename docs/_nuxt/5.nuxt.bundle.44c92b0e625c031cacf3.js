webpackJsonp([5],{141:function(t,e,i){i(233);var a=i(16)(i(181),i(216),null,null);t.exports=a.exports},146:function(t,e,i){t.exports=i.p+"img/logo_white.8eff58f.png"},147:function(t,e,i){t.exports=i.p+"img/ads.25eed29.jpg"},148:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,"footer{background-color:#555;color:#fff;padding:15px 20px 40px;text-align:center}footer .title{width:160px;margin:0 auto}footer .copyright p{font-size:12px;line-height:16px}@media screen and (min-width:735px){footer{text-align:left}footer .title{margin:0}}",""])},149:function(t,e,i){t.exports=i.p+"img/cover_welcome.b4d199f.jpg"},150:function(t,e,i){i(152);var a=i(16)(null,i(151),null,null);t.exports=a.exports},151:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("p",{staticClass:"title"},[a("img",{attrs:{src:i(146)}})]),a("div",{staticClass:"copyright"},[a("p",[t._v("2011 - 2017 kurokuroworks.")]),a("p",[t._v("Made with "),a("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),t._v(" in Tokyo & Nagoya")])])])])}]}},152:function(t,e,i){var a=i(148);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(43)("4e660cb8",a,!0)},153:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(156),r=i.n(a);e.default={data:function(){return{isVisible:!0,currentPosition:0}},mounted:function(){var t=this;window&&window.addEventListener("scroll",r()(function(){t.isVisible=250>window.pageYOffset||window.pageYOffset<t.currentPosition,t.currentPosition=window.pageYOffset},100))}}},154:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".header-parts+*{margin-top:80px}.header-parts{position:fixed;z-index:100;box-shadow:0 1px 1px 0 rgba(0,0,0,.1);transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#3bf;background-size:cover;background-image:url("+i(149)+");color:#fff;overflow:hidden;text-align:center}.header-parts.is-visible{top:0}.header-parts a{display:inline-block}.header-parts .logo{height:50px;padding:7px}.header-parts .logo img{height:100%}.header-parts nav{background-color:rgba(0,0,0,.3)}.header-parts nav ul{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header-parts nav ul li a{color:#fff}.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px}.header-parts nav ul li p i{display:none}@media screen and (min-width:735px){.header-parts{text-align:inherit}.header-parts .logo{float:left;height:80px;padding:20px}.header-parts .logo img{height:100%}.header-parts nav{float:right;background:none}.header-parts nav ul{display:-ms-flexbox;display:flex}.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px}.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem}.header-parts nav ul li p:hover{border-bottom:4px solid #fff}}",""])},155:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".ads-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}.ads-container .ads{width:336px;height:280px;margin:0 5px 10px}.ads-container .ads.secondary{display:none}@media (min-width:735px){.ads-container .ads.secondary{display:block}}",""])},156:function(t,e,i){(function(e){function i(t,e,i){function a(e){var i=g,a=x;return g=x=void 0,M=e,v=t.apply(a,i)}function n(t){return M=t,w=setTimeout(d,e),j?a(t):v}function o(t){var i=t-b,a=t-M,r=e-i;return C?y(r,h-a):r}function l(t){var i=t-b,a=t-M;return void 0===b||i>=e||i<0||C&&a>=h}function d(){var t=A();if(l(t))return p(t);w=setTimeout(d,o(t))}function p(t){return w=void 0,N&&g?a(t):(g=x=void 0,v)}function f(){void 0!==w&&clearTimeout(w),M=0,g=b=x=w=void 0}function u(){return void 0===w?v:p(A())}function m(){var t=A(),i=l(t);if(g=arguments,x=this,b=t,i){if(void 0===w)return n(b);if(C)return w=setTimeout(d,e),a(b)}return void 0===w&&(w=setTimeout(d,e)),v}var g,x,h,v,w,b,M=0,j=!1,C=!1,N=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(i)&&(j=!!i.leading,C="maxWait"in i,h=C?k(s(i.maxWait)||0,e):h,N="trailing"in i?!!i.trailing:N),m.cancel=f,m.flush=u,m}function a(t,e,a){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError(c);return r(a)&&(n="leading"in a?!!a.leading:n,o="trailing"in a?!!a.trailing:o),i(t,e,{leading:n,maxWait:e,trailing:o})}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function n(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||n(t)&&b.call(t)==d}function s(t){if("number"==typeof t)return t;if(o(t))return l;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var i=u.test(t);return i||m.test(t)?g(t.slice(2),i?2:8):f.test(t)?l:+t}var c="Expected a function",l=NaN,d="[object Symbol]",p=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,x="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,v=x||h||Function("return this")(),w=Object.prototype,b=w.toString,k=Math.max,y=Math.min,A=function(){return v.Date.now()};t.exports=a}).call(e,i(25))},157:function(t,e,i){i(163);var a=i(16)(null,i(161),null,null);t.exports=a.exports},158:function(t,e,i){i(162);var a=i(16)(i(153),i(160),null,null);t.exports=a.exports},160:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-parts",class:{"is-visible":t.isVisible}},[a("div",{staticClass:"container"},[a("nuxt-link",{attrs:{to:"/"}},[a("h1",{staticClass:"logo"},[a("img",{attrs:{src:i(146)}})])]),a("nav",[a("ul",[a("li",[a("nuxt-link",{attrs:{to:"/articles"}},[a("p",[a("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}}),t._v("記事")])])],1),a("li",[a("nuxt-link",{attrs:{to:"/books"}},[a("p",[a("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("同人誌")])])],1),a("li",[a("nuxt-link",{attrs:{to:"/abouts"}},[a("p",[a("i",{staticClass:"fa fa-hashtag",attrs:{"aria-hidden":"true"}}),t._v("サークル")])])],1)])])],1)])},staticRenderFns:[]}},161:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ads-container"},[a("div",{staticClass:"ads primary"},[a("img",{attrs:{src:i(147)}})]),a("div",{staticClass:"ads secondary"},[a("img",{attrs:{src:i(147)}})])])}]}},162:function(t,e,i){var a=i(154);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(43)("40b2f6d4",a,!0)},163:function(t,e,i){var a=i(155);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(43)("b4e5b0de",a,!0)},181:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(17),r=i.n(a),n=i(44),o=i.n(n),s=i(45),c=i.n(s),l=i(158),d=i.n(l),p=i(150),f=i.n(p),u=i(157),m=i.n(u);e.default={components:{AdvertisementParts:m.a,HeaderParts:d.a,FooterParts:f.a},computed:{splittedMetaTag:function(){return this.meta.tag.split(",")}},validate:function(t){var e=void 0;return t.isClient&&sessionStorage&&(e=JSON.parse(sessionStorage.getItem("articlesData"))),!e||!!e.find(function(e){return e.id===t.params.id})},asyncData:function(t){var e=void 0,i=void 0;t.isClient&&sessionStorage&&(e=sessionStorage.getItem("articlesData"),i=sessionStorage.getItem("articles/"+t.params.id));var a=[e||o.a.get(t.env.staticBaseUrl+"/www/articles.json").then(function(t){return t.text}),i||o.a.get(t.env.staticBaseUrl+"/www/articles/"+t.params.id+"/"+t.params.id+".md").then(function(t){return t.text})];return r.a.all(a).then(function(a){return t.isClient&&sessionStorage&&(e||sessionStorage.setItem("articlesData",a[0]),i||sessionStorage.setItem("articles/"+t.params.id,a[1])),{meta:JSON.parse(a[0]).filter(function(e){return e.id===t.params.id})[0],content:c()(a[1])}})},data:function(){return{content:null,meta:null}}}},187:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".article-section{padding-top:0}.article-section .cover{position:relative;z-index:0;left:0;right:0;margin-bottom:-80px}@media screen and (min-width:735px){.article-section .cover{margin-bottom:-100px}}@media screen and (min-width:1095px){.article-section .cover{margin-bottom:-500px}}.article-section .cover img{width:100%}.article-section .paper{position:relative;padding-bottom:20px;margin:10px;z-index:1;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.1)}.article-section .meta{text-align:center;padding:80px 0 40px}.article-section .meta .meta-title{font-size:30px;color:#444}.article-section .meta .meta-description{font-size:22px;padding:10px}.article-section .meta .meta-tag{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.article-section .meta .meta-tag li{border:1px solid #4183c4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183c4;font-size:14px}@media screen and (min-width:735px){.article-section .meta .meta-title{font-size:40px}}.article-section .articles-markdown{padding:20px;max-width:800px;margin:0 auto}.article-section .articles-markdown a{color:#4183c4}.article-section .articles-markdown h1,.article-section .articles-markdown h2,.article-section .articles-markdown h3{margin:20px 0 10px;padding:0;cursor:text;position:relative}.article-section .articles-markdown h1{display:none}.article-section .articles-markdown h2{margin-top:50px;font-size:26px;color:#444}.article-section .articles-markdown h3{font-size:18px}.article-section .articles-markdown blockquote,.article-section .articles-markdown dl,.article-section .articles-markdown li,.article-section .articles-markdown ol,.article-section .articles-markdown p,.article-section .articles-markdown pre,.article-section .articles-markdown table,.article-section .articles-markdown ul{margin:15px 0;font-size:18px;line-height:23px}.article-section .articles-markdown hr{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;border:0 none;color:#ccc;height:4px;padding:0}.article-section .articles-markdown ol,.article-section .articles-markdown ul{padding-left:30px}.article-section .articles-markdown dl{padding:0}.article-section .articles-markdown dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}.article-section .articles-markdown dl dd{margin:0 0 15px;padding:0 15px}.article-section .articles-markdown blockquote{border-left:4px solid #ddd;padding:0 15px;color:#777}.article-section .articles-markdown table{padding:0}.article-section .articles-markdown table tr{border-top:1px solid #ccc;background-color:#fff;margin:0;padding:0}.article-section .articles-markdown table tr:nth-child(2n){background-color:#f8f8f8}.article-section .articles-markdown table tr th{font-weight:700}.article-section .articles-markdown table tr td,.article-section .articles-markdown table tr th{border:1px solid #ccc;text-align:left;margin:0;padding:6px 13px}.article-section .articles-markdown img{max-width:100%;margin:10px 0 20px}.article-section .articles-markdown code,.article-section .articles-markdown tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px;font-size:16px;font-family:Courier New,sans-serif}.article-section .articles-markdown pre code{margin:0;padding:0;white-space:pre;border:none;background:transparent}.article-section .articles-markdown pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}.article-section .articles-markdown pre code,.article-section .articles-markdown pre tt{background-color:transparent;border:none}",""])},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header-parts"),i("section",{staticClass:"article-section"},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:t.meta.thumbnail}})]),i("div",{staticClass:"container"},[i("div",{staticClass:"paper"},[i("div",{staticClass:"meta"},[i("h1",{staticClass:"meta-title"},[t._v(t._s(t.meta.title))]),i("p",{staticClass:"meta-description"},[t._v(t._s(t.meta.description))]),i("ul",{staticClass:"meta-tag"},t._l(t.splittedMetaTag,function(e){return i("li",[t._v(t._s(e))])}))]),i("div",{staticClass:"articles-markdown",domProps:{innerHTML:t._s(t.content)}}),i("advertisement-parts")],1)])]),i("footer-parts")],1)},staticRenderFns:[]}},233:function(t,e,i){var a=i(187);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(43)("7135c055",a,!0)}});