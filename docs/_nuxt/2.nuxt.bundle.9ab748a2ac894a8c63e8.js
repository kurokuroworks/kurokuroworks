webpackJsonp([2],{145:function(t,e,i){function n(t){i(227)}var a=i(18)(i(182),i(213),n,null,null);t.exports=a.exports},147:function(t,e,i){t.exports=i.p+"img/logo_white.8eff58f.png"},148:function(t,e,i){t.exports=i.p+"img/ads.25eed29.jpg"},149:function(t,e,i){e=t.exports=i(44)(!0),e.push([t.i,"footer{background-color:#555;color:#fff;padding:15px 20px 40px;text-align:center}footer .title{width:160px;margin:0 auto}footer .copyright p{font-size:12px;line-height:16px}@media screen and (min-width:735px){footer{text-align:left}footer .title{margin:0}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/footer.vue"],names:[],mappings:"AACA,OAAO,sBAAyB,WAAc,uBAAuB,iBAAiB,CACrF,AACD,cAAc,YAAY,aAAa,CACtC,AACD,oBAAoB,eAAe,gBAAgB,CAClD,AACD,oCACA,OAAO,eAAe,CACrB,AACD,cAAc,QAAQ,CACrB,CACA",file:"footer.vue",sourcesContent:["\nfooter{background-color:#555555;color:#ffffff;padding:15px 20px 40px;text-align:center\n}\nfooter .title{width:160px;margin:0 auto\n}\nfooter .copyright p{font-size:12px;line-height:16px\n}\n@media screen and (min-width: 735px){\nfooter{text-align:left\n}\nfooter .title{margin:0\n}\n}\n"],sourceRoot:""}])},150:function(t,e,i){t.exports=i.p+"img/cover_welcome.b4d199f.jpg"},151:function(t,e,i){function n(t){i(153)}var a=i(18)(null,i(152),n,null,null);t.exports=a.exports},152:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("p",{staticClass:"title"},[n("img",{attrs:{src:i(147)}})]),n("div",{staticClass:"copyright"},[n("p",[t._v("2011 - 2017 kurokuroworks.")]),n("p",[t._v("Made with "),n("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),t._v(" in Tokyo & Nagoya")])])])])}]}},153:function(t,e,i){var n=i(149);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(45)("08b4045e",n,!0)},154:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(157),a=i.n(n);e.default={data:function(){return{isVisible:!0,currentPosition:0}},mounted:function(){var t=this;window&&window.addEventListener("scroll",a()(function(){t.isVisible=250>window.pageYOffset||window.pageYOffset<t.currentPosition,t.currentPosition=window.pageYOffset},100))}}},155:function(t,e,i){e=t.exports=i(44)(!0),e.push([t.i,".header-parts+*{margin-top:80px}.header-parts{position:fixed;z-index:100;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#3bf;background-size:cover;background-image:url("+i(150)+");color:#fff;overflow:hidden;text-align:center}.header-parts.is-visible{top:0}.header-parts a{display:inline-block}.header-parts .logo{height:50px;padding:7px}.header-parts .logo img{height:100%}.header-parts nav{background-color:rgba(0,0,0,.3)}.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.header-parts nav ul li a{color:#fff}.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px}.header-parts nav ul li p i{display:none}@media screen and (min-width:735px){.header-parts{text-align:inherit}.header-parts .logo{float:left;height:80px;padding:20px}.header-parts .logo img{height:100%}.header-parts nav{float:right;background:none}.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex}.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px}.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem}.header-parts nav ul li p:hover{border-bottom:4px solid #fff}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/header.vue"],names:[],mappings:"AACA,gBAAgB,eAAe,CAC9B,AACD,cAAc,eAAe,YAAY,8CAA+C,sCAAuC,gCAAgC,2BAA2B,wBAAwB,WAAW,OAAO,QAAQ,YAAY,sBAAyB,sBAAsB,+CAAyD,WAAc,gBAAgB,iBAAiB,CAC9Y,AACD,yBAAyB,KAAK,CAC7B,AACD,gBAAgB,oBAAoB,CACnC,AACD,oBAAoB,YAAY,WAAW,CAC1C,AACD,wBAAwB,WAAW,CAClC,AACD,kBAAkB,+BAAgC,CACjD,AACD,qBAAqB,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CAC5I,AACD,0BAA0B,UAAa,CACtC,AACD,0BAA0B,kBAAkB,YAAY,YAAY,eAAe,gBAAgB,CAClG,AACD,4BAA4B,YAAY,CACvC,AACD,oCACA,cAAc,kBAAkB,CAC/B,AACD,oBAAoB,WAAW,YAAY,YAAY,CACtD,AACD,wBAAwB,WAAW,CAClC,AACD,kBAAkB,YAAY,eAAe,CAC5C,AACD,qBAAqB,oBAAoB,oBAAoB,YAAY,CACxE,AACD,0BAA0B,kBAAkB,YAAY,YAAY,YAAY,CAC/E,AACD,4BAA4B,cAAc,WAAW,gBAAgB,CACpE,AACD,gCAAgC,4BAA+B,CAC9D,CACA",file:"header.vue",sourcesContent:['\n.header-parts+*{margin-top:80px\n}\n.header-parts{position:fixed;z-index:100;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#33bbff;background-size:cover;background-image:url("~assets/images/cover_welcome.jpg");color:#ffffff;overflow:hidden;text-align:center\n}\n.header-parts.is-visible{top:0\n}\n.header-parts a{display:inline-block\n}\n.header-parts .logo{height:50px;padding:7px\n}\n.header-parts .logo img{height:100%\n}\n.header-parts nav{background-color:rgba(0,0,0,0.3)\n}\n.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.header-parts nav ul li a{color:#ffffff\n}\n.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px\n}\n.header-parts nav ul li p i{display:none\n}\n@media screen and (min-width: 735px){\n.header-parts{text-align:inherit\n}\n.header-parts .logo{float:left;height:80px;padding:20px\n}\n.header-parts .logo img{height:100%\n}\n.header-parts nav{float:right;background:none\n}\n.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px\n}\n.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem\n}\n.header-parts nav ul li p:hover{border-bottom:4px solid #ffffff\n}\n}\n'],sourceRoot:""}])},156:function(t,e,i){e=t.exports=i(44)(!0),e.push([t.i,".ads-container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ads-container .ads{width:336px;height:280px;margin:0 5px 10px}.ads-container .ads.secondary{display:none}@media (min-width:735px){.ads-container .ads.secondary{display:block}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/advertisement.vue"],names:[],mappings:"AACA,eAAe,kBAAkB,oBAAoB,oBAAoB,aAAa,mBAAmB,eAAe,wBAAwB,qBAAqB,sBAAsB,CAC1L,AACD,oBAAoB,YAAY,aAAa,iBAAiB,CAC7D,AACD,8BAA8B,YAAY,CACzC,AACD,yBACA,8BAA8B,aAAa,CAC1C,CACA",file:"advertisement.vue",sourcesContent:["\n.ads-container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.ads-container .ads{width:336px;height:280px;margin:0 5px 10px\n}\n.ads-container .ads.secondary{display:none\n}\n@media (min-width: 735px){\n.ads-container .ads.secondary{display:block\n}\n}\n"],sourceRoot:""}])},157:function(t,e,i){(function(e){function i(t,e,i){function n(e){var i=x,n=g;return x=g=void 0,w=e,h=t.apply(n,i)}function o(t){return w=t,m=setTimeout(l,e),y?n(t):h}function r(t){var i=t-b,n=t-w,a=e-i;return _?v(a,C-n):a}function p(t){var i=t-b,n=t-w;return void 0===b||i>=e||i<0||_&&n>=C}function l(){var t=k();if(p(t))return c(t);m=setTimeout(l,r(t))}function c(t){return m=void 0,D&&x?n(t):(x=g=void 0,h)}function d(){void 0!==m&&clearTimeout(m),w=0,x=b=g=m=void 0}function f(){return void 0===m?h:c(k())}function u(){var t=k(),i=p(t);if(x=arguments,g=this,b=t,i){if(void 0===m)return o(b);if(_)return m=setTimeout(l,e),n(b)}return void 0===m&&(m=setTimeout(l,e)),h}var x,g,C,h,m,b,w=0,y=!1,_=!1,D=!0;if("function"!=typeof t)throw new TypeError(A);return e=s(e)||0,a(i)&&(y=!!i.leading,_="maxWait"in i,C=_?B(s(i.maxWait)||0,e):C,D="trailing"in i?!!i.trailing:D),u.cancel=d,u.flush=f,u}function n(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(A);return a(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),i(t,e,{leading:o,maxWait:e,trailing:r})}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==typeof t}function r(t){return"symbol"==typeof t||o(t)&&b.call(t)==l}function s(t){if("number"==typeof t)return t;if(r(t))return p;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var i=f.test(t);return i||u.test(t)?x(t.slice(2),i?2:8):d.test(t)?p:+t}var A="Expected a function",p=NaN,l="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,x=parseInt,g="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,h=g||C||Function("return this")(),m=Object.prototype,b=m.toString,B=Math.max,v=Math.min,k=function(){return h.Date.now()};t.exports=n}).call(e,i(13))},158:function(t,e,i){function n(t){i(164)}var a=i(18)(null,i(162),n,null,null);t.exports=a.exports},159:function(t,e,i){function n(t){i(163)}var a=i(18)(i(154),i(161),n,null,null);t.exports=a.exports},160:function(t,e,i){function n(t){i(168)}var a=i(18)(i(165),i(167),n,null,null);t.exports=a.exports},161:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-parts",class:{"is-visible":t.isVisible}},[n("div",{staticClass:"container"},[n("nuxt-link",{attrs:{to:"/"}},[n("h1",{staticClass:"logo"},[n("img",{attrs:{src:i(147)}})])]),n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/articles"}},[n("p",[n("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}}),t._v("記事")])])],1),n("li",[n("nuxt-link",{attrs:{to:"/books"}},[n("p",[n("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("同人誌")])])],1),n("li",[n("nuxt-link",{attrs:{to:"/abouts"}},[n("p",[n("i",{staticClass:"fa fa-hashtag",attrs:{"aria-hidden":"true"}}),t._v("サークル")])])],1)])])],1)])},staticRenderFns:[]}},162:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ads-container"},[n("div",{staticClass:"ads primary"},[n("img",{attrs:{src:i(148)}})]),n("div",{staticClass:"ads secondary"},[n("img",{attrs:{src:i(148)}})])])}]}},163:function(t,e,i){var n=i(155);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(45)("068d4f0e",n,!0)},164:function(t,e,i){var n=i(156);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(45)("5944f257",n,!0)},165:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["type","id","href","thumbnail","title","tag","description"],computed:{splittedMetaTag:function(){return this.tag.split(",")}}}},166:function(t,e,i){e=t.exports=i(44)(!0),e.push([t.i,".item-parts .thumbnail{display:block}.item-parts .text{padding:10px;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1)}.item-parts .text .title{font-weight:700;font-size:18px;line-height:22px;margin-bottom:3px}.item-parts .text .tag{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.item-parts .text .tag li{border:1px solid #4183c4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183c4;font-size:14px}.item-parts .text .description,.item-parts .text .tag{font-size:15px;line-height:18px;margin-bottom:3px}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/item.vue"],names:[],mappings:"AACA,uBAAuB,aAAa,CACnC,AACD,kBAAkB,aAAa,8CAA+C,qCAAsC,CACnH,AACD,yBAAyB,gBAAiB,eAAe,iBAAiB,iBAAiB,CAC1F,AACD,uBAAuB,oBAAoB,oBAAoB,aAAa,mBAAmB,cAAc,CAC5G,AACD,0BAA0B,yBAAyB,kBAAkB,cAAc,qBAAqB,cAAc,cAAc,CACnI,AACD,sDAAsD,eAAe,iBAAiB,iBAAiB,CACtG",file:"item.vue",sourcesContent:["\n.item-parts .thumbnail{display:block\n}\n.item-parts .text{padding:10px;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);box-shadow:0 1px 1px 0 rgba(0,0,0,0.1)\n}\n.item-parts .text .title{font-weight:bold;font-size:18px;line-height:22px;margin-bottom:3px\n}\n.item-parts .text .tag{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap\n}\n.item-parts .text .tag li{border:1px solid #4183C4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183C4;font-size:14px\n}\n.item-parts .text .tag,.item-parts .text .description{font-size:15px;line-height:18px;margin-bottom:3px\n}\n"],sourceRoot:""}])},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"item-parts",class:t.type},[i("div",[t.id?[i("nuxt-link",{attrs:{to:"/"+t.type+"/"+t.id}},[t.thumbnail?i("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}}):t._e(),i("div",{staticClass:"text"},[i("h4",{staticClass:"title"},[t._v(t._s(t.title))]),i("p",{staticClass:"description"},[t._v(t._s(t.description))]),i("ul",{staticClass:"tag"},t._l(t.splittedMetaTag,function(e){return i("li",[t._v(t._s(e))])}))])])]:t.href?[i("a",{attrs:{href:t.href}},[t.thumbnail?i("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}}):t._e(),i("div",{staticClass:"text"},[i("h4",{staticClass:"title"},[t._v(t._s(t.title))]),i("p",{staticClass:"description"},[t._v(t._s(t.description))]),i("ul",{staticClass:"tag"},t._l(t.splittedMetaTag,function(e){return i("li",[t._v(t._s(e))])}))])])]:[i("div",[t.thumbnail?i("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}}):t._e(),i("div",{staticClass:"text"},[i("h4",{staticClass:"title"},[t._v(t._s(t.title))]),i("p",{staticClass:"description"},[t._v(t._s(t.description))]),i("ul",{staticClass:"tag"},t._l(t.splittedMetaTag,function(e){return i("li",[t._v(t._s(e))])}))])])]],2)])},staticRenderFns:[]}},168:function(t,e,i){var n=i(166);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(45)("13d86dee",n,!0)},182:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(10),a=i.n(n),o=i(46),r=i.n(o),s=i(160),A=i.n(s),p=i(159),l=i.n(p),c=i(151),d=i.n(c),f=i(158),u=i.n(f);e.default={components:{AdvertisementParts:u.a,ItemParts:A.a,HeaderParts:l.a,FooterParts:d.a},asyncData:function(t){var e=void 0;t.isClient&&sessionStorage&&(e=sessionStorage.getItem("booksData"));var i=[e||r.a.get(t.env.staticBaseUrl+"/www/books.json").then(function(t){return t.text})];return a.a.all(i).then(function(i){return t.isClient&&sessionStorage&&(e||sessionStorage.setItem("booksData",i[0])),{books:JSON.parse(i[0])}})},data:function(){return{books:null}}}},190:function(t,e,i){e=t.exports=i(44)(!0),e.push([t.i,".books-page{padding-top:0;padding-bottom:50px}.books-page .books-header{text-align:center;background-color:#444;background-size:cover;background-repeat:no-repeat;color:#fff}.books-page .books-header .section-title{padding:100px 0 40px;text-align:center;color:#fff}.books-page .books-header .section-title h2{font-size:32px;line-height:40px}.books-page .books-header .section-title p{font-size:20px;line-height:30px}.books-page .item-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:-10px}.books-page .item-container .item-parts{width:50%;padding:10px}.books-page .item-container .item-parts .text{background-color:#fff}@media (min-width:735px){.books-page .item-container .item-parts{width:180px}}@media (min-width:1095px){.books-page .item-container .item-parts{width:216px}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/pages/books/index.vue"],names:[],mappings:"AACA,YAAY,cAAc,mBAAmB,CAC5C,AACD,0BAA0B,kBAAkB,sBAAyB,sBAAsB,4BAA4B,UAAa,CACnI,AACD,yCAAyC,qBAAqB,kBAAkB,UAAa,CAC5F,AACD,4CAA4C,eAAe,gBAAgB,CAC1E,AACD,2CAA2C,eAAe,gBAAgB,CACzE,AACD,4BAA4B,oBAAoB,oBAAoB,aAAa,mBAAmB,eAAe,gBAAgB,CAClI,AACD,wCAAwC,UAAU,YAAY,CAC7D,AACD,8CAA8C,qBAAwB,CACrE,AACD,yBACA,wCAAwC,WAAW,CAClD,CACA,AACD,0BACA,wCAAwC,WAAW,CAClD,CACA",file:"index.vue",sourcesContent:["\n.books-page{padding-top:0;padding-bottom:50px\n}\n.books-page .books-header{text-align:center;background-color:#444444;background-size:cover;background-repeat:no-repeat;color:#ffffff\n}\n.books-page .books-header .section-title{padding:100px 0 40px;text-align:center;color:#ffffff\n}\n.books-page .books-header .section-title h2{font-size:32px;line-height:40px\n}\n.books-page .books-header .section-title p{font-size:20px;line-height:30px\n}\n.books-page .item-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:-10px\n}\n.books-page .item-container .item-parts{width:50%;padding:10px\n}\n.books-page .item-container .item-parts .text{background-color:#ffffff\n}\n@media (min-width: 735px){\n.books-page .item-container .item-parts{width:180px\n}\n}\n@media (min-width: 1095px){\n.books-page .item-container .item-parts{width:216px\n}\n}\n"],sourceRoot:""}])},213:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header-parts"),i("section",{staticClass:"books-page"},[t._m(0),i("div",{staticClass:"container"},[i("ul",{staticClass:"item-container"},[t._l(t.books,function(t){return[i("item-parts",{attrs:{type:"books",id:t.id,href:t.href,thumbnail:t.thumbnail,title:t.title,tag:t.tag}})]})],2)])]),i("advertisement-parts"),i("footer-parts")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"books-header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-title"},[i("h2",[t._v("技術誌・同人誌")]),i("p",[t._v("Books")])])])])}]}},227:function(t,e,i){var n=i(190);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(45)("4b0cc2f6",n,!0)}});