webpackJsonp([1],{143:function(t,e,i){i(236);var o=i(16)(i(183),i(219),null,null);t.exports=o.exports},146:function(t,e,i){t.exports=i.p+"img/logo_white.8eff58f.png"},148:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,"footer{background-color:#555;color:#fff;padding:15px 20px;text-align:center}footer .title{width:160px;margin:0 auto}footer .copyright p{font-size:12px;line-height:16px}@media screen and (min-width:735px){footer{text-align:left}footer .title{margin:0}}",""])},149:function(t,e,i){t.exports=i.p+"img/cover_welcome.b4d199f.jpg"},150:function(t,e,i){i(152);var o=i(16)(null,i(151),null,null);t.exports=o.exports},151:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"container"},[o("p",{staticClass:"title"},[o("img",{attrs:{src:i(146)}})]),o("div",{staticClass:"copyright"},[o("p",[t._v("2011 - 2017 kurokuroworks.")]),o("p",[t._v("Made with "),o("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),t._v(" in Tokyo & Nagoya")])])])])}]}},152:function(t,e,i){var o=i(148);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(43)("4e660cb8",o,!0)},153:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(156),n=i.n(o);e.default={data:function(){return{isVisible:!0,currentPosition:0}},mounted:function(){var t=this;window&&window.addEventListener("scroll",n()(function(){t.isVisible=250>window.pageYOffset||window.pageYOffset<t.currentPosition,t.currentPosition=window.pageYOffset},100))}}},154:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".header-parts+*{margin-top:80px}.header-parts{position:fixed;z-index:100;box-shadow:0 1px 1px 0 rgba(0,0,0,.1);transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#3bf;background-size:cover;background-image:url("+i(149)+");color:#fff;overflow:hidden;text-align:center}.header-parts.is-visible{top:0}.header-parts a{display:inline-block}.header-parts .logo{height:50px;padding:7px}.header-parts .logo img{height:100%}.header-parts nav{background-color:rgba(0,0,0,.3);margin:0 -15px}.header-parts nav ul{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header-parts nav ul li a{color:#fff}.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px}.header-parts nav ul li p i{display:none}@media screen and (min-width:735px){.header-parts{text-align:inherit}.header-parts .logo{float:left;height:80px;padding:20px}.header-parts .logo img{height:100%}.header-parts nav{float:right;background:none}.header-parts nav ul{display:-ms-flexbox;display:flex}.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px}.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem}.header-parts nav ul li p:hover{border-bottom:4px solid #fff}}",""])},156:function(t,e,i){(function(e){function i(t,e,i){function o(e){var i=v,o=x;return v=x=void 0,C=e,b=t.apply(o,i)}function a(t){return C=t,h=setTimeout(c,e),S?o(t):b}function r(t){var i=t-k,o=t-C,n=e-i;return O?y(n,g-o):n}function p(t){var i=t-k,o=t-C;return void 0===k||i>=e||i<0||O&&o>=g}function c(){var t=_();if(p(t))return d(t);h=setTimeout(c,r(t))}function d(t){return h=void 0,j&&v?o(t):(v=x=void 0,b)}function u(){void 0!==h&&clearTimeout(h),C=0,v=k=x=h=void 0}function f(){return void 0===h?b:d(_())}function m(){var t=_(),i=p(t);if(v=arguments,x=this,k=t,i){if(void 0===h)return a(k);if(O)return h=setTimeout(c,e),o(k)}return void 0===h&&(h=setTimeout(c,e)),b}var v,x,g,b,h,k,C=0,S=!1,O=!1,j=!0;if("function"!=typeof t)throw new TypeError(l);return e=s(e)||0,n(i)&&(S=!!i.leading,O="maxWait"in i,g=O?w(s(i.maxWait)||0,e):g,j="trailing"in i?!!i.trailing:j),m.cancel=u,m.flush=f,m}function o(t,e,o){var a=!0,r=!0;if("function"!=typeof t)throw new TypeError(l);return n(o)&&(a="leading"in o?!!o.leading:a,r="trailing"in o?!!o.trailing:r),i(t,e,{leading:a,maxWait:e,trailing:r})}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return!!t&&"object"==typeof t}function r(t){return"symbol"==typeof t||a(t)&&k.call(t)==c}function s(t){if("number"==typeof t)return t;if(r(t))return p;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var i=f.test(t);return i||m.test(t)?v(t.slice(2),i?2:8):u.test(t)?p:+t}var l="Expected a function",p=NaN,c="[object Symbol]",d=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,x="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,b=x||g||Function("return this")(),h=Object.prototype,k=h.toString,w=Math.max,y=Math.min,_=function(){return b.Date.now()};t.exports=o}).call(e,i(25))},158:function(t,e,i){i(162);var o=i(16)(i(153),i(160),null,null);t.exports=o.exports},160:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-parts",class:{"is-visible":t.isVisible}},[o("div",{staticClass:"container"},[o("nuxt-link",{attrs:{to:"/"}},[o("h1",{staticClass:"logo"},[o("img",{attrs:{src:i(146)}})])]),o("nav",[o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/articles"}},[o("p",[o("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}}),t._v("記事")])])],1),o("li",[o("nuxt-link",{attrs:{to:"/books"}},[o("p",[o("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("同人誌")])])],1),o("li",[o("nuxt-link",{attrs:{to:"/abouts"}},[o("p",[o("i",{staticClass:"fa fa-hashtag",attrs:{"aria-hidden":"true"}}),t._v("サークル")])])],1)])])],1)])},staticRenderFns:[]}},162:function(t,e,i){var o=i(154);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(43)("40b2f6d4",o,!0)},171:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["image","data"]}},172:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["data"]}},173:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["data"]}},183:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(17),n=i.n(o),a=i(44),r=i.n(a),s=i(45),l=i.n(s),p=i(158),c=i.n(p),d=i(150),u=i.n(d),f=i(207),m=i.n(f),v=i(209),x=i.n(v),g=i(208),b=i.n(g);e.default={components:{HeaderParts:c.a,FooterParts:u.a,BookDescriptionSection:m.a,BookSampleSection:x.a,BookOverviewSection:b.a},computed:{splittedMetaTag:function(){return this.meta.tag.split(",")}},validate:function(t){window.ga("set","page","/books/"+t.params.id),window.ga("send","pageview");var e=void 0;return t.isClient&&sessionStorage&&(e=JSON.parse(sessionStorage.getItem("articlesData"))),!e||!!e.find(function(e){return e.id===t.params.id})},asyncData:function(t){var e=void 0,i=void 0,o=void 0,a=void 0;t.isClient&&sessionStorage&&(e=sessionStorage.getItem("booksData"),i=sessionStorage.getItem("books/"+t.params.id+"/description"),o=sessionStorage.getItem("books/"+t.params.id+"/sample"),a=sessionStorage.getItem("books/"+t.params.id+"/overview"));var s=[e||r.a.get(t.env.staticBaseUrl+"/www/books.json").then(function(t){return t.text}),i||r.a.get(t.env.staticBaseUrl+"/www/books/"+t.params.id+"/description.md").then(function(t){return t.text}),o||r.a.get(t.env.staticBaseUrl+"/www/books/"+t.params.id+"/sample.md").then(function(t){return t.text}),a||r.a.get(t.env.staticBaseUrl+"/www/books/"+t.params.id+"/overview.md").then(function(t){return t.text})];return n.a.all(s).then(function(n){return t.isClient&&sessionStorage&&(e||sessionStorage.setItem("booksData",n[0]),i||sessionStorage.setItem("books/"+t.params.id+"/description",n[1]),o||sessionStorage.setItem("books/"+t.params.id+"/sample",n[2]),a||sessionStorage.setItem("books/"+t.params.id+"/overview",n[3])),{meta:JSON.parse(n[0]).filter(function(e){return e.id===t.params.id})[0],bookDescription:l()(n[1]),bookSample:l()(n[2]),bookOverview:l()(n[3])}})},data:function(){return{}}}},190:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".book .container{padding:0 15px}.book .meta{text-align:center;padding:80px 0 100px}.book .meta .meta-title{font-size:4rem;margin:10px}.book .meta .meta-description{margin:10px}.book .meta .meta-tag{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.book .meta .meta-tag li{border:1px solid #4183c4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183c4;font-size:14px}.book h2{font-size:26px;margin-bottom:10px}.book h3{font-size:22px;line-height:26px}.book li,.book p{font-size:18px}",""])},195:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".book-overview-section{margin-bottom:50px}",""])},197:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".book-description-section{overflow:hidden;margin-bottom:50px}.book-description-section .book-description-section-thumbnail{float:left;margin-right:10px;width:100%;padding:15px}@media (min-width:735px){.book-description-section .book-description-section-thumbnail{width:250px;padding:0}}@media (min-width:1095px){.book-description-section .book-description-section-thumbnail{width:350px}}",""])},199:function(t,e,i){e=t.exports=i(42)(void 0),e.push([t.i,".book-sample-section{margin-bottom:50px;padding:40px 0;background-color:#555;color:#fff}.book-sample-section .book-sample ul{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width:735px){.book-sample-section .book-sample ul{-ms-flex-wrap:nowrap;flex-wrap:nowrap}}.book-sample-section .book-sample ul li{width:50%;padding:5px}",""])},207:function(t,e,i){i(243);var o=i(16)(i(171),i(226),null,null);t.exports=o.exports},208:function(t,e,i){i(241);var o=i(16)(i(172),i(224),null,null);t.exports=o.exports},209:function(t,e,i){i(245);var o=i(16)(i(173),i(228),null,null);t.exports=o.exports},219:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book"},[i("header-parts"),i("div",{staticClass:"meta"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"meta-title"},[t._v(t._s(t.meta.title))]),i("p",{staticClass:"meta-description"},[t._v(t._s(t.meta.description))]),i("ul",{staticClass:"meta-tag"},t._l(t.splittedMetaTag,function(e){return i("li",[t._v(t._s(e))])}))])]),i("book-description-section",{attrs:{image:t.meta.thumbnail,data:t.bookDescription}}),i("book-sample-section",{attrs:{data:t.bookSample}}),i("book-overview-section",{attrs:{data:t.bookOverview}}),i("footer-parts")],1)},staticRenderFns:[]}},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-overview-section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"book-overview",domProps:{innerHTML:t._s(t.data)}})])])},staticRenderFns:[]}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-description-section"},[i("div",{staticClass:"container"},[i("img",{staticClass:"book-description-section-thumbnail",attrs:{src:t.image}}),i("div",{staticClass:"book-description-section-data",domProps:{innerHTML:t._s(t.data)}})])])},staticRenderFns:[]}},228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"book-sample-section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"book-sample",domProps:{innerHTML:t._s(t.data)}})])])},staticRenderFns:[]}},236:function(t,e,i){var o=i(190);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(43)("6f5514d7",o,!0)},241:function(t,e,i){var o=i(195);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(43)("688e047c",o,!0)},243:function(t,e,i){var o=i(197);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(43)("3a15c44e",o,!0)},245:function(t,e,i){var o=i(199);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(43)("25327d1e",o,!0)}});