webpackJsonp([2],{142:function(t,e,n){function i(t){n(211)}var r=n(18)(n(169),n(198),i,null,null);t.exports=r.exports},144:function(t,e,n){t.exports=n.p+"img/logo_white.8eff58f.png"},145:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,"footer{background-color:#555;color:#fff;padding:15px 10px 20px;text-align:center}footer .title{width:180px;margin:0 auto}footer .copyright{font-size:14px;line-height:16px}@media screen and (min-width:735px){footer{text-align:left}footer .title{margin:0}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/footer.vue"],names:[],mappings:"AACA,OAAO,sBAAyB,WAAc,uBAAuB,iBAAiB,CACrF,AACD,cAAc,YAAY,aAAa,CACtC,AACD,kBAAkB,eAAe,gBAAgB,CAChD,AACD,oCACA,OAAO,eAAe,CACrB,AACD,cAAc,QAAQ,CACrB,CACA",file:"footer.vue",sourcesContent:["\nfooter{background-color:#555555;color:#ffffff;padding:15px 10px 20px;text-align:center\n}\nfooter .title{width:180px;margin:0 auto\n}\nfooter .copyright{font-size:14px;line-height:16px\n}\n@media screen and (min-width: 735px){\nfooter{text-align:left\n}\nfooter .title{margin:0\n}\n}\n"],sourceRoot:""}])},146:function(t,e,n){t.exports=n.p+"img/cover_welcome.b4d199f.jpg"},147:function(t,e,n){function i(t){n(149)}var r=n(18)(null,n(148),i,null,null);t.exports=r.exports},148:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"container"},[i("p",{staticClass:"title"},[i("img",{attrs:{src:n(144)}})]),i("div",{staticClass:"copyright"},[i("p",[i("small",[t._v("2011 - 2017 kurokuroworks.")])]),i("p",[i("small",[t._v("Made with ♥ in Akiahbara & Nagoya")])])])])])}]}},149:function(t,e,n){var i=n(145);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("08b4045e",i,!0)},150:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(152),r=n.n(i);e.default={data:function(){return{isVisible:!1,currentPosition:0}},mounted:function(){var t=this;window&&window.addEventListener("scroll",r()(function(){t.isVisible=500>window.pageYOffset||window.pageYOffset<t.currentPosition,t.currentPosition=window.pageYOffset},100))}}},151:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,".header-parts{position:fixed;z-index:100;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#3bf;background-size:cover;background-image:url("+n(146)+");color:#fff;overflow:hidden}.header-parts.is-visible{top:0}.header-parts .logo{height:50px;padding:5px;text-align:center}.header-parts .logo img{height:100%}.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.header-parts nav ul li{text-align:center;width:110px;height:30px;line-height:25px}.header-parts nav ul li i{display:none}@media screen and (min-width:735px){.header-parts .logo{float:left;height:80px;padding:20px}.header-parts .logo img{height:100%}.header-parts nav{float:right}.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex}.header-parts nav ul li{text-align:center;width:110px;height:80px;padding:18px}.header-parts nav ul li i{display:block;width:100%;font-size:2.2rem;margin-bottom:3px}.header-parts nav ul li:hover{border-bottom:4px solid #fff}}","",{version:3,sources:["/Users/nanocloudx/Development/kurokuroworks/components/parts/header.vue"],names:[],mappings:"AACA,cAAc,eAAe,YAAY,8CAA+C,sCAAuC,gCAAgC,2BAA2B,wBAAwB,WAAW,OAAO,QAAQ,YAAY,sBAAyB,sBAAsB,+CAAyD,WAAc,eAAe,CAC5X,AACD,yBAAyB,KAAK,CAC7B,AACD,oBAAoB,YAAY,YAAY,iBAAiB,CAC5D,AACD,wBAAwB,WAAW,CAClC,AACD,qBAAqB,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CAC5I,AACD,wBAAwB,kBAAkB,YAAY,YAAY,gBAAgB,CACjF,AACD,0BAA0B,YAAY,CACrC,AACD,oCACA,oBAAoB,WAAW,YAAY,YAAY,CACtD,AACD,wBAAwB,WAAW,CAClC,AACD,kBAAkB,WAAW,CAC5B,AACD,qBAAqB,oBAAoB,oBAAoB,YAAY,CACxE,AACD,wBAAwB,kBAAkB,YAAY,YAAY,YAAY,CAC7E,AACD,0BAA0B,cAAc,WAAW,iBAAiB,iBAAiB,CACpF,AACD,8BAA8B,4BAA+B,CAC5D,CACA",file:"header.vue",sourcesContent:['\n.header-parts{position:fixed;z-index:100;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#33bbff;background-size:cover;background-image:url("~assets/images/cover_welcome.jpg");color:#ffffff;overflow:hidden\n}\n.header-parts.is-visible{top:0\n}\n.header-parts .logo{height:50px;padding:5px;text-align:center\n}\n.header-parts .logo img{height:100%\n}\n.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.header-parts nav ul li{text-align:center;width:110px;height:30px;line-height:25px\n}\n.header-parts nav ul li i{display:none\n}\n@media screen and (min-width: 735px){\n.header-parts .logo{float:left;height:80px;padding:20px\n}\n.header-parts .logo img{height:100%\n}\n.header-parts nav{float:right\n}\n.header-parts nav ul{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.header-parts nav ul li{text-align:center;width:110px;height:80px;padding:18px\n}\n.header-parts nav ul li i{display:block;width:100%;font-size:2.2rem;margin-bottom:3px\n}\n.header-parts nav ul li:hover{border-bottom:4px solid #ffffff\n}\n}\n'],sourceRoot:""}])},152:function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=h,i=g;return h=g=void 0,y=e,v=t.apply(i,n)}function o(t){return y=t,C=setTimeout(c,e),k?i(t):v}function a(t){var n=t-m,i=t-y,r=e-n;return Y?b(r,x-i):r}function l(t){var n=t-m,i=t-y;return void 0===m||n>=e||n<0||Y&&i>=x}function c(){var t=w();if(l(t))return p(t);C=setTimeout(c,a(t))}function p(t){return C=void 0,D&&h?i(t):(h=g=void 0,v)}function f(){void 0!==C&&clearTimeout(C),y=0,h=m=g=C=void 0}function u(){return void 0===C?v:p(w())}function d(){var t=w(),n=l(t);if(h=arguments,g=this,m=t,n){if(void 0===C)return o(m);if(Y)return C=setTimeout(c,e),i(m)}return void 0===C&&(C=setTimeout(c,e)),v}var h,g,x,v,C,m,y=0,k=!1,Y=!1,D=!0;if("function"!=typeof t)throw new TypeError(A);return e=s(e)||0,r(n)&&(k=!!n.leading,Y="maxWait"in n,x=Y?B(s(n.maxWait)||0,e):x,D="trailing"in n?!!n.trailing:D),d.cancel=f,d.flush=u,d}function i(t,e,i){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(A);return r(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),n(t,e,{leading:o,maxWait:e,trailing:a})}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==typeof t}function a(t){return"symbol"==typeof t||o(t)&&m.call(t)==c}function s(t){if("number"==typeof t)return t;if(a(t))return l;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(p,"");var n=u.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):f.test(t)?l:+t}var A="Expected a function",l=NaN,c="[object Symbol]",p=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,g="object"==typeof e&&e&&e.Object===Object&&e,x="object"==typeof self&&self&&self.Object===Object&&self,v=g||x||Function("return this")(),C=Object.prototype,m=C.toString,B=Math.max,b=Math.min,w=function(){return v.Date.now()};t.exports=i}).call(e,n(13))},153:function(t,e,n){function i(t){n(156)}var r=n(18)(n(150),n(155),i,null,null);t.exports=r.exports},155:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-parts",class:{"is-visible":t.isVisible}},[i("div",{staticClass:"container"},[i("nuxt-link",{attrs:{to:"/"}},[i("h1",{staticClass:"logo"},[i("img",{attrs:{src:n(144)}})])]),t._m(0)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",[n("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}}),t._v("記事")]),n("li",[n("i",{staticClass:"fa fa-magic",attrs:{"aria-hidden":"true"}}),t._v("アプリ")]),n("li",[n("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("同人誌")]),n("li",[n("i",{staticClass:"fa fa-hashtag",attrs:{"aria-hidden":"true"}}),t._v("サークル")])])])}]}},156:function(t,e,n){var i=n(151);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("068d4f0e",i,!0)},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),r=n.n(i),o=n(46),a=n.n(o),s=n(47),A=n.n(s),l=n(153),c=n.n(l),p=n(147),f=n.n(p);e.default={components:{HeaderParts:c.a,FooterParts:f.a},validate:function(t){var e=void 0;return t.isClient&&sessionStorage&&(e=JSON.parse(sessionStorage.getItem("articlesData"))),!e||!!e.find(function(e){return e.id===t.params.id})},asyncData:function(t){var e=void 0;return t.isClient&&sessionStorage&&(e=sessionStorage.getItem("books/"+t.params.id)),r.a.resolve().then(function(){return e||a.a.get(t.env.staticBaseUrl+"/www/books/"+t.params.id+".md").then(function(t){return t.text})}).then(function(n){return t.isClient&&sessionStorage&&(e||sessionStorage.setItem("books/"+t.params.id,n)),{content:A()(n)}})},data:function(){return{}}}},175:function(t,e,n){e=t.exports=n(44)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_id.vue",sourceRoot:""}])},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-parts"),n("div",{staticClass:"container"},[n("div",{domProps:{innerHTML:t._s(t.content)}})]),n("footer-parts")],1)},staticRenderFns:[]}},211:function(t,e,n){var i=n(175);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(45)("9e532d46",i,!0)}});