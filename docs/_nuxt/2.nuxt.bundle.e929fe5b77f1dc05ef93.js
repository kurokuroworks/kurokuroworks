webpackJsonp([2],{140:function(t,e,a){a(232);var i=a(16)(a(180),a(215),null,null);t.exports=i.exports},146:function(t,e,a){t.exports=a.p+"img/logo_white.8eff58f.png"},147:function(t,e,a){t.exports=a.p+"img/ads.25eed29.jpg"},148:function(t,e,a){e=t.exports=a(42)(void 0),e.push([t.i,"footer{background-color:#555;color:#fff;padding:15px 20px 40px;text-align:center}footer .title{width:160px;margin:0 auto}footer .copyright p{font-size:12px;line-height:16px}@media screen and (min-width:735px){footer{text-align:left}footer .title{margin:0}}",""])},149:function(t,e,a){t.exports=a.p+"img/cover_welcome.b4d199f.jpg"},150:function(t,e,a){a(152);var i=a(16)(null,a(151),null,null);t.exports=i.exports},151:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"container"},[i("p",{staticClass:"title"},[i("img",{attrs:{src:a(146)}})]),i("div",{staticClass:"copyright"},[i("p",[t._v("2011 - 2017 kurokuroworks.")]),i("p",[t._v("Made with "),i("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}}),t._v(" in Tokyo & Nagoya")])])])])}]}},152:function(t,e,a){var i=a(148);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(43)("4e660cb8",i,!0)},153:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(156),n=a.n(i);e.default={data:function(){return{isVisible:!0,currentPosition:0}},mounted:function(){var t=this;window&&window.addEventListener("scroll",n()(function(){t.isVisible=250>window.pageYOffset||window.pageYOffset<t.currentPosition,t.currentPosition=window.pageYOffset},100))}}},154:function(t,e,a){e=t.exports=a(42)(void 0),e.push([t.i,".header-parts+*{margin-top:80px}.header-parts{position:fixed;z-index:100;box-shadow:0 1px 1px 0 rgba(0,0,0,.1);transition-duration:.5s;top:-100px;left:0;right:0;height:80px;background-color:#3bf;background-size:cover;background-image:url("+a(149)+");color:#fff;overflow:hidden;text-align:center}.header-parts.is-visible{top:0}.header-parts a{display:inline-block}.header-parts .logo{height:50px;padding:7px}.header-parts .logo img{height:100%}.header-parts nav{background-color:rgba(0,0,0,.3)}.header-parts nav ul{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header-parts nav ul li a{color:#fff}.header-parts nav ul li p{text-align:center;width:110px;height:30px;font-size:14px;line-height:30px}.header-parts nav ul li p i{display:none}@media screen and (min-width:735px){.header-parts{text-align:inherit}.header-parts .logo{float:left;height:80px;padding:20px}.header-parts .logo img{height:100%}.header-parts nav{float:right;background:none}.header-parts nav ul{display:-ms-flexbox;display:flex}.header-parts nav ul li p{text-align:center;width:110px;height:80px;padding:18px}.header-parts nav ul li p i{display:block;width:100%;font-size:2.2rem}.header-parts nav ul li p:hover{border-bottom:4px solid #fff}}",""])},155:function(t,e,a){e=t.exports=a(42)(void 0),e.push([t.i,".ads-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}.ads-container .ads{width:336px;height:280px;margin:0 5px 10px}.ads-container .ads.secondary{display:none}@media (min-width:735px){.ads-container .ads.secondary{display:block}}",""])},156:function(t,e,a){(function(e){function a(t,e,a){function i(e){var a=g,i=h;return g=h=void 0,k=e,b=t.apply(i,a)}function s(t){return k=t,v=setTimeout(p,e),j?i(t):b}function r(t){var a=t-_,i=t-k,n=e-a;return E?y(n,m-i):n}function c(t){var a=t-_,i=t-k;return void 0===_||a>=e||a<0||E&&i>=m}function p(){var t=C();if(c(t))return u(t);v=setTimeout(p,r(t))}function u(t){return v=void 0,O&&g?i(t):(g=h=void 0,b)}function d(){void 0!==v&&clearTimeout(v),k=0,g=_=h=v=void 0}function f(){return void 0===v?b:u(C())}function x(){var t=C(),a=c(t);if(g=arguments,h=this,_=t,a){if(void 0===v)return s(_);if(E)return v=setTimeout(p,e),i(_)}return void 0===v&&(v=setTimeout(p,e)),b}var g,h,m,b,v,_,k=0,j=!1,E=!1,O=!0;if("function"!=typeof t)throw new TypeError(l);return e=o(e)||0,n(a)&&(j=!!a.leading,E="maxWait"in a,m=E?w(o(a.maxWait)||0,e):m,O="trailing"in a?!!a.trailing:O),x.cancel=d,x.flush=f,x}function i(t,e,i){var s=!0,r=!0;if("function"!=typeof t)throw new TypeError(l);return n(i)&&(s="leading"in i?!!i.leading:s,r="trailing"in i?!!i.trailing:r),a(t,e,{leading:s,maxWait:e,trailing:r})}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function s(t){return!!t&&"object"==typeof t}function r(t){return"symbol"==typeof t||s(t)&&_.call(t)==p}function o(t){if("number"==typeof t)return t;if(r(t))return c;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var a=f.test(t);return a||x.test(t)?g(t.slice(2),a?2:8):d.test(t)?c:+t}var l="Expected a function",c=NaN,p="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,x=/^0o[0-7]+$/i,g=parseInt,h="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,b=h||m||Function("return this")(),v=Object.prototype,_=v.toString,w=Math.max,y=Math.min,C=function(){return b.Date.now()};t.exports=i}).call(e,a(25))},157:function(t,e,a){a(163);var i=a(16)(null,a(161),null,null);t.exports=i.exports},158:function(t,e,a){a(162);var i=a(16)(a(153),a(160),null,null);t.exports=i.exports},159:function(t,e,a){a(167);var i=a(16)(a(164),a(166),null,null);t.exports=i.exports},160:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-parts",class:{"is-visible":t.isVisible}},[i("div",{staticClass:"container"},[i("nuxt-link",{attrs:{to:"/"}},[i("h1",{staticClass:"logo"},[i("img",{attrs:{src:a(146)}})])]),i("nav",[i("ul",[i("li",[i("nuxt-link",{attrs:{to:"/articles"}},[i("p",[i("i",{staticClass:"fa fa-rss",attrs:{"aria-hidden":"true"}}),t._v("記事")])])],1),i("li",[i("nuxt-link",{attrs:{to:"/books"}},[i("p",[i("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("同人誌")])])],1),i("li",[i("nuxt-link",{attrs:{to:"/abouts"}},[i("p",[i("i",{staticClass:"fa fa-hashtag",attrs:{"aria-hidden":"true"}}),t._v("サークル")])])],1)])])],1)])},staticRenderFns:[]}},161:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ads-container"},[i("div",{staticClass:"ads primary"},[i("img",{attrs:{src:a(147)}})]),i("div",{staticClass:"ads secondary"},[i("img",{attrs:{src:a(147)}})])])}]}},162:function(t,e,a){var i=a(154);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(43)("40b2f6d4",i,!0)},163:function(t,e,a){var i=a(155);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(43)("b4e5b0de",i,!0)},164:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["type","id","href","thumbnail","title","tag","description"],computed:{splittedMetaTag:function(){return this.tag.split(",")}}}},165:function(t,e,a){e=t.exports=a(42)(void 0),e.push([t.i,".item-parts .thumbnail{display:block}.item-parts .text{padding:10px;box-shadow:0 1px 1px 0 rgba(0,0,0,.1)}.item-parts .text .title{font-weight:700;font-size:18px;line-height:22px;margin-bottom:3px}.item-parts .text .tag{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.item-parts .text .tag li{border:1px solid #4183c4;border-radius:1px;padding:0 5px;margin:1px 4px 1px 0;color:#4183c4;font-size:14px}.item-parts .text .description,.item-parts .text .tag{font-size:15px;line-height:18px;margin-bottom:3px}",""])},166:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"item-parts",class:t.type},[a("div",[t.id?[a("nuxt-link",{attrs:{to:"/"+t.type+"/"+t.id}},[t.thumbnail?a("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}}):t._e(),a("div",{staticClass:"text"},[a("h4",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),a("ul",{staticClass:"tag"},t._l(t.splittedMetaTag,function(e){return a("li",[t._v(t._s(e))])}))])])]:t.href?[a("a",{attrs:{href:t.href}},[t.thumbnail?a("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}}):t._e(),a("div",{staticClass:"text"},[a("h4",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),a("ul",{staticClass:"tag"},t._l(t.splittedMetaTag,function(e){return a("li",[t._v(t._s(e))])}))])])]:[a("div",[t.thumbnail?a("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail}}):t._e(),a("div",{staticClass:"text"},[a("h4",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),a("ul",{staticClass:"tag"},t._l(t.splittedMetaTag,function(e){return a("li",[t._v(t._s(e))])}))])])]],2)])},staticRenderFns:[]}},167:function(t,e,a){var i=a(165);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(43)("2091a78f",i,!0)},168:function(t,e,a){t.exports=a.p+"img/chloe.67ad6e3.png"},180:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(17),n=a.n(i),s=a(44),r=a.n(s),o=a(159),l=a.n(o),c=a(158),p=a.n(c),u=a(150),d=a.n(u),f=a(157),x=a.n(f);e.default={components:{AdvertisementParts:x.a,ItemParts:l.a,HeaderParts:p.a,FooterParts:d.a},asyncData:function(t){var e=void 0;t.isClient&&sessionStorage&&(e=sessionStorage.getItem("aboutsData"));var a=[e||r.a.get(t.env.staticBaseUrl+"/www/abouts.json").then(function(t){return t.text})];return n.a.all(a).then(function(a){return t.isClient&&sessionStorage&&(e||sessionStorage.setItem("aboutsData",a[0])),{staff:JSON.parse(a[0])[0],contributor:JSON.parse(a[0])[1]}})},data:function(){return{books:null}}}},186:function(t,e,a){e=t.exports=a(42)(void 0),e.push([t.i,".abouts-page{padding-top:0;padding-bottom:50px}.abouts-page .abouts-header{text-align:center;background-color:#444;background-size:cover;background-repeat:no-repeat;color:#fff}.abouts-page .abouts-header .section-title{padding:100px 0 40px;text-align:center;color:#fff}.abouts-page .abouts-header .section-title h2{font-size:32px;line-height:40px}.abouts-page .abouts-header .section-title p{font-size:20px;line-height:30px}.abouts-page .block{background-color:#fff;padding:10px 0;margin:20px;text-align:center;box-shadow:0 1px 1px 0 rgba(0,0,0,.1)}.abouts-page .block .separator{margin:20px 0}.abouts-page .block h3{font-size:2.5rem;padding:10px 0 15px}.abouts-page .block .paragraph{padding:10px}.abouts-page .block .staff .item-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.abouts-page .block .staff .item-container .item-parts{width:100%;padding:10px;margin-bottom:10px}.abouts-page .block .staff .item-container .item-parts .text{box-shadow:none}.abouts-page .block .staff .item-container .item-parts img{margin:0 auto}@media screen and (min-width:735px){.abouts-page .block .staff .item-container .item-parts{text-align:left}.abouts-page .block .staff .item-container .item-parts img{float:left;margin-right:10px}}@media (min-width:1095px){.abouts-page .block .staff .item-container{-ms-flex-direction:row;flex-direction:row}}.abouts-page .block .contributor .item-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}.abouts-page .block .contributor .item-container .item-parts{width:50%;max-width:135px;padding:10px;margin-bottom:10px}.abouts-page .block .contributor .item-container .item-parts .text{box-shadow:none}.abouts-page .block .contributor .item-container .item-parts img{max-height:135px;margin:0 auto}@media screen and (min-width:735px){.abouts-page .block .contributor .item-container .item-parts{text-align:left}}",""])},215:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header-parts"),a("section",{staticClass:"abouts-page"},[t._m(0),a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"block"},[a("div",{staticClass:"separator staff"},[a("h3",{staticClass:"subtitle"},[t._v("サークルのなかのひと")]),a("ul",{staticClass:"item-container"},[t._l(t.staff,function(t){return[a("item-parts",{attrs:{href:t.href,thumbnail:t.thumbnail,title:t.title,tag:t.tag,description:t.description}})]})],2)]),a("div",{staticClass:"separator contributor"},[a("h3",{staticClass:"subtitle"},[t._v("Special thanks!")]),a("ul",{staticClass:"item-container"},[t._l(t.contributor,function(t){return[a("item-parts",{attrs:{href:t.href,thumbnail:t.thumbnail,title:t.title,tag:t.tag}})]})],2),t._m(2)])]),t._m(3)])]),a("advertisement-parts"),a("footer-parts")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"abouts-header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("サークルについて")]),a("p",[t._v("Abouts")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block"},[i("div",{staticClass:"separator"},[i("h3",[t._v("技術で「かわいい！」を作ります")]),i("img",{attrs:{src:a(168)}}),i("div",{staticClass:"paragraph"},[i("p",[t._v('"くろくろわーくす"は「かわいい！」を作るために、もくもく活動している技術系サークルです。')]),i("p",[t._v("Webアプリ開発、Androidアプリ開発、技術誌発行、デザイン、映像制作など多分野で雑多に作業しています。")]),i("p",[t._v("かわいいは正義なので、直感でかわいいと思うものに技術を注ぎ込みたいと思っています。")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paragraph"},[a("p",[t._v('"くろくろわーくす"では、かわいいものに魂を吹き込むエンジニア、かわいい絵が描けるイラストレーターを募集しています。')]),a("p",[t._v("同人活動に興味があり、一緒に作ってみたい方はお気軽にご連絡をお待ちしております（ ＾ω＾）")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("div",{staticClass:"separator"},[a("h3",[t._v("お問い合わせ")]),a("div",{staticClass:"paragraph"},[a("p",[t._v("ご質問やご連絡などありましたら "),a("strong",[t._v("@nanocloudx")]),t._v(" まで twitter の DM をお願い致します。")])])])])}]}},232:function(t,e,a){var i=a(186);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(43)("147dabf6",i,!0)}});