webpackJsonp([1],{"01M/":function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function s(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function a(t,n,i){return(a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:s).apply(null,arguments)}var r=Date.now||function(){return+new Date};var c=!!window.FontFace;function l(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function f(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function d(t,n,i){function e(){r&&o&&s&&(r(a),r=null)}n=l(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,a=null,r=i||null;c?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),f(t,"head",n)}function v(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=l(t,"script",{src:n}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){a||(a=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function g(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,y(t)}}function w(t,n){t.c=n,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function b(t){this.a=t||"-"}function _(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function x(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function k(t){return t.a+t.f}function C(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function j(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function S(t){if(t.g){var n=p(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),u(t.f,i,e)}T(t,"inactive")}function T(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,k(i)):t.h[n]())}function $(t,n){this.c=t,this.f=n,this.a=l(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){f(t.c,"body",t.a)}function E(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+x(t.c)+";font-style:"+C(t)+";font-weight:"+t.f+"00;"}function F(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function N(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new $(this.c,this.s),this.h=new $(this.c,this.s),this.j=new $(this.c,this.s),this.m=new $(this.c,this.s),t=E(t=new _(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=t,t=E(t=new _(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=t,t=E(t=new _("serif",k(this.a))),this.j.a.style.cssText=t,t=E(t=new _("sans-serif",k(this.a))),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}b.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},F.prototype.start=function(){var t=this.c.o.document,n=this,i=r(),e=new Promise(function(e,o){!function s(){r()-i>=n.f?o():t.fonts.load(function(t){return C(t)+" "+t.f+"00 300px "+x(t.c)}(n.a),n.h).then(function(t){1<=t.length?e():setTimeout(s,25)},function(){o()})}()}),o=null,s=new Promise(function(t,i){o=setTimeout(i,n.f)});Promise.race([s,e]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};var R={D:"serif",C:"sans-serif"},I=null;function M(){if(null===I){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return I}function L(t,n,i){for(var e in R)if(R.hasOwnProperty(e)&&n===t.f[R[e]]&&i===t.f[R[e]])return!0;return!1}function O(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=M()&&L(t,i,e)),n?r()-t.A>=t.w?M()&&L(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?P(t,t.v):P(t,t.B):function(t){setTimeout(a(function(){O(this)},t),50)}(t):P(t,t.v)}function P(t,n){setTimeout(a(function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),n(this.a)},t),0)}function q(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),O(this)};var D=null;function W(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&u(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),T(t,"active")):S(t.a))}function B(t){this.j=t,this.a=new function(){this.c={}},this.h=0,this.f=this.g=!0}function H(t,n,i,e,o){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,r=e||{};if(0===i.length&&s)S(n.a);else{n.f+=i.length,s&&(n.j=s);var c,l=[];for(c=0;c<i.length;c++){var f=i[c],h=r[f.c],p=n.a,d=f;if(p.g&&u(p.f,[p.a.c("wf",d.c,k(d).toString(),"loading")]),T(p,"fontloading",d),p=null,null===D)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var v=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=d?42<parseInt(d[1],10):!v}else D=!1;p=D?new F(a(n.g,n),a(n.h,n),n.c,f,n.s,h):new N(a(n.g,n),a(n.h,n),n.c,f,n.s,t,h),l.push(p)}for(c=0;c<l.length;c++)l[c].start()}},0)}function V(t,n){this.c=t,this.a=n}function Y(t,n){this.c=t,this.a=n}q.prototype.g=function(t){var n=this.a;n.g&&u(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),T(n,"fontactive",t),this.m=!0,W(this)},q.prototype.h=function(t){var n=this.a;if(n.g){var i=p(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),u(n.f,e,o)}T(n,"fontinactive",t),W(this)},B.prototype.load=function(t){this.c=new function(t,n){this.a=t,this.o=n||t,this.c=this.o.document}(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,i){var e=[],o=i.timeout;!function(t){t.g&&u(t.f,[t.a.c("wf","loading")]),T(t,"loading")}(n);var e=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var s=t.c[e];s&&o.push(s(n[e],i))}return o}(t.a,i,t.c),s=new q(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load(function(n,i,e){H(t,s,n,i,e)})}(this,new function(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new b("-"),this.j=!1!==n.events,this.g=!1!==n.classes}(this.c,t),t)},V.prototype.load=function(t){var n=this,i=n.a.projectId,e=n.a.version;if(i){var o=n.c.o;v(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(e?"?v="+e:""),function(e){e?t([]):(o["__MonotypeConfiguration__"+i]=function(){return n.a},function n(){if(o["__mti_fntLst"+i]){var e,s=o["__mti_fntLst"+i](),a=[];if(s)for(var r=0;r<s.length;r++){var c=s[r].fontfamily;void 0!=s[r].fontStyle&&void 0!=s[r].fontWeight?(e=s[r].fontStyle+s[r].fontWeight,a.push(new _(c,e))):a.push(new _(c))}t(a)}else setTimeout(function(){n()},50)}())}).id="__MonotypeAPIScript__"+i}else t([])},Y.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},a=new g;for(n=0,i=e.length;n<i;n++)d(this.c,e[n],m(a));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),l=0;l<c.length;l+=1)r.push(new _(e[0],c[l]));else r.push(new _(e[0]));w(a,function(){t(r,s)})};var U="https://fonts.googleapis.com/css";var z={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},J={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},K={i:"i",italic:"i",n:"n",normal:"n"},Z=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function G(t,n){this.c=t,this.a=n}var X={Arimo:!0,Cousine:!0,Tinos:!0};function Q(t,n){this.c=t,this.a=n}function tt(t,n){this.c=t,this.f=n,this.a=[]}G.prototype.load=function(t){var n=new g,i=this.c,e=new function(t,n){this.c=t||U,this.a=[],this.f=[],this.g=n||""}(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var s="";2==o.length&&""!=o[1]&&(s=":"),t.a.push(o.join(s))}}(e,o);var s=new function(t){this.f=t,this.a=[],this.c={}}(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var a;if(a=[],r=e[1])for(var r,c=(r=r.split(",")).length,l=0;l<c;l++){var f;if((f=r[l]).match(/^[\w-]+$/))if(null==(u=Z.exec(f.toLowerCase())))f="";else{if(f=null==(f=u[2])||""==f?"n":K[f],null==(u=u[1])||""==u)u="4";else var h=J[u],u=h||(isNaN(u)?"4":u.substr(0,1));f=[f,u].join("")}else f="";f&&a.push(f)}0<a.length&&(s=a),3==e.length&&(a=[],0<(e=(e=e[2])?e.split(","):a).length&&(e=z[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=z[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new _(o,s[e]))}}(s),d(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),m(n)),w(n,function(){t(s.a,s.c,X)})},Q.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var s=n[o],a=n[o+1],r=0;r<a.length;r++)e.push(new _(s,a[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}},2e3):t([])},tt.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,s=i.fonts.length;o<s;++o){var a=i.fonts[o];e.a.push(new _(a.name,j("font-weight:"+a.weight+";font-style:"+a.style)))}t(e.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var nt=new B(window);nt.a.c.custom=function(t,n){return new Y(n,t)},nt.a.c.fontdeck=function(t,n){return new tt(n,t)},nt.a.c.monotype=function(t,n){return new V(n,t)},nt.a.c.typekit=function(t,n){return new Q(n,t)},nt.a.c.google=function(t,n){return new G(n,t)};var it={load:a(nt.load,nt)};void 0===(e=function(){return it}.call(n,i,n,t))||(t.exports=e)}()},"5ISb":function(t,n,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#cover{background-color:#07a2da}",""])},DLCH:function(t,n,i){"use strict";var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("Cover",{ref:"cover",attrs:{fontsReady:this.fontsReady,"aria-hidden":"true"}}),n("Nav"),n("main",{ref:"thepage",attrs:{id:"thepage"}},[n("nuxt")],1)],1)};e._withStripped=!0;var o={render:e,staticRenderFns:[]};n.a=o},Ma2J:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("i592"),o=i("DLCH"),s=!1;var a=function(t){s||i("mRiu")},r=i("VU/8")(e.a,o.a,!1,a,null,null);r.options.__file="layouts/default.vue",n.default=r.exports},O6di:function(t,n,i){"use strict";n.a={props:["image","title","caption","fontsReady"],computed:{cap:function(){return this.$props.caption},srcset:function(){return this.$props.image},ttl:function(){return this.$props.title}},methods:{scribbleTitle:function(){var t=this.$refs.sitetitle.getContext("2d"),n=50,i="CITR",e=30,o=0;t.font="92px scriptorama-tradeshow-jf, sans-serif",t.lineWidth=1,t.lineJoin="round",t.globalAlpha=1,t.strokeStyle=t.fillStyle="white",function s(){t.setLineDash([50-n,n-10]),n-=10,t.strokeText(i[o],e,90),n>0?requestAnimationFrame(s):(t.fillText(i[o],e,90),n=50,e+=t.measureText(i[o++]).width+t.lineWidth*Math.random(),t.setTransform(1,0,0,1,0,3*Math.random()),t.rotate(.005*Math.random()),o<i.length&&requestAnimationFrame(s))}()}},watch:{fontsReady:function(t,n){this.scribbleTitle()}}}},YnCP:function(t,n,i){"use strict";var e=function(){var t=this.$createElement,n=this._self._c||t;return n("nav",{staticClass:"home",attrs:{id:"nav"}},[n("nuxt-link",{attrs:{to:"/"}},[this._v("Crack in the Road")]),"/"!=this.$route.path?n("nuxt-link",{attrs:{to:"/"}},[n("span",{staticClass:"font_small"},[this._v("Return home"),n("i",{staticClass:"icon-th"})])]):this._e(),this._m(0)],1)};e._withStripped=!0;var o={render:e,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"font_small",attrs:{href:"https://en.wikipedia.org/wiki/Crack_in_the_Road",target:"_blank"}},[this._v("\n    About"),n("i",{staticClass:"icon-info-circled"})])}]};n.a=o},hrYu:function(t,n,i){"use strict";n.a={methods:{toggleMenu:function(){document.body.classList.toggle("menuopen")}}}},i592:function(t,n,i){"use strict";var e=i("z5lq"),o=i("oEaD");n.a={data:function(){return{coverClosed:!0,loading:!1,fontsReady:!1}},head:function(){return{bodyAttrs:{class:this.coverClosed?"cover-closed":""}}},components:{Cover:e.a,Nav:o.a},beforeDestroy:function(){window.removeEventListener("scroll",this.runScroll)},created:function(){var t=this;this.initialiseFonts(),window.addEventListener("scroll",this.runScroll,{passive:!1}),this.$root.$on("recalculateCover",this._recalculateCover),this.$root.$on("loadStatus",function(n){return t._loadAnimation(n)})},mounted:function(){this._recalculateCover()},methods:{_loadAnimation:function(t){t&&this.$refs.cover&&this.$refs.cover.$el.scrollIntoView({behavior:"smooth"}),this.loading=t},_recalculateCover:function(){this.$refs.thepage&&(document.body.style="padding-bottom: "+this.$refs.thepage.clientHeight+"px")},initialiseFonts:function(){var t=this;i("01M/").load({typekit:{id:"rvc6sig"},active:function(){t.fontsReady=!0}})},runScroll:function(){this.coverClosed=window.scrollY<=window.innerHeight}}}},mRiu:function(t,n,i){var e=i("s2Kq");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("f652c2ac",e,!1,{sourceMap:!1})},oEaD:function(t,n,i){"use strict";var e=i("hrYu"),o=i("YnCP"),s=i("VU/8")(e.a,o.a,!1,null,null,null);s.options.__file="components/Nav.vue",n.a=s.exports},r3gs:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("section",{attrs:{id:"cover"}},[i("canvas",{ref:"sitetitle",attrs:{id:"sitetitle"},on:{click:function(n){t.$router.push("/")}}}),i("portal-target",{attrs:{name:"cover",slim:""}})],1)};e._withStripped=!0;var o={render:e,staticRenderFns:[]};n.a=o},s2Kq:function(t,n,i){(t.exports=i("FZ+f")(!1)).push([t.i,"#thepage{max-width:100%}#pixel{height:1px;width:1px;position:absolute;top:0;left:0;visibility:hidden}",""])},vqvb:function(t,n,i){var e=i("5ISb");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("d5b28366",e,!1,{sourceMap:!1})},z5lq:function(t,n,i){"use strict";var e=i("O6di"),o=i("r3gs"),s=!1;var a=function(t){s||i("vqvb")},r=i("VU/8")(e.a,o.a,!1,a,null,null);r.options.__file="components/Cover.vue",n.a=r.exports}});