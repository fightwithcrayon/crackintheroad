webpackJsonp([2],{"0vvG":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"singlePage"},[n("div",{staticClass:"page-content"},[n("portal",{attrs:{to:"cover"}},[n("figure",[n("img",{attrs:{alt:t.sanitisedTitle,title:t.sanitisedTitle,srcset:t.post.featured_image_srcset}}),n("figcaption",[n("h2",{domProps:{innerHTML:t._s(t.sanitisedTitle)}})])])]),n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.sanitisedTitle))])]),n("main",{staticClass:"copy",domProps:{innerHTML:t._s(t.bodyContent)}})],1)])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},"5ISb":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"#cover{background-color:#07a2da}",""])},B11b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Sf5V"),i=n("0vvG"),r=n("VU/8")(s.a,i.a,!1,null,null,null);r.options.__file="pages/_category/_id.vue",e.default=r.exports},O6di:function(t,e,n){"use strict";e.a={props:["image","title","caption","fontsReady"],computed:{cap:function(){return this.$props.caption},srcset:function(){return this.$props.image},ttl:function(){return this.$props.title}},methods:{scribbleTitle:function(){var t=this.$refs.sitetitle.getContext("2d"),e=50,n="CITR",s=30,i=0;t.font="92px scriptorama-tradeshow-jf, sans-serif",t.lineWidth=1,t.lineJoin="round",t.globalAlpha=1,t.strokeStyle=t.fillStyle="white",function r(){t.setLineDash([50-e,e-10]),e-=10,t.strokeText(n[i],s,90),e>0?requestAnimationFrame(r):(t.fillText(n[i],s,90),e=50,s+=t.measureText(n[i++]).width+t.lineWidth*Math.random(),t.setTransform(1,0,0,1,0,3*Math.random()),t.rotate(.005*Math.random()),i<n.length&&requestAnimationFrame(r))}()}},watch:{fontsReady:function(t,e){this.scribbleTitle()}}}},Sf5V:function(t,e,n){"use strict";var s=n("Xxa5"),i=n.n(s),r=n("exGp"),a=n.n(r),o=n("z5lq"),c=n("oEaD");e.a={head:function(){return{title:this.sanitisedTitle+" - Crack in the Road",meta:[{hid:"description",name:"description",content:this.post.custom_excerpt}]}},components:{Cover:o.a,Nav:c.a},asyncData:function(){var t=a()(i.a.mark(function t(e){var n,s,r,a=e.app,o=e.params,c=e.payload;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=4;break}return t.abrupt("return",{post:c});case 4:return n=o.id.split("-")[0],t.prev=5,t.next=8,a.$axios.get("https://admin.crackintheroad.com/wp-json/wp/v2/posts/"+n);case 8:return s=t.sent,r=s.data,t.abrupt("return",{post:r});case 13:return t.prev=13,t.t0=t.catch(5),console.log(t.t0,t.t0.message),t.abrupt("return",{post:{}});case 17:case"end":return t.stop()}},t,this,[[5,13]])}));return function(e){return t.apply(this,arguments)}}(),computed:{bodyContent:function(){return this.post.content?this.post.content.rendered:this.post.post_content},sanitisedTitle:function(){var t=this.post.title?this.post.title.rendered:this.post.post_title;return t?t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)}):""}},mounted:function(){this.$root.$emit("recalculateCover")}}},YnCP:function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"home",attrs:{id:"nav"}},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Crack in the Road")]),"/"!=this.$route.path?e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"font_small"},[this._v("Return home"),e("i",{staticClass:"icon-th"})])]):this._e(),this._m(0)],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"font_small",attrs:{href:"https://en.wikipedia.org/wiki/Crack_in_the_Road",target:"_blank"}},[this._v("\n    About"),e("i",{staticClass:"icon-info-circled"})])}]};e.a=i},hrYu:function(t,e,n){"use strict";e.a={methods:{toggleMenu:function(){document.body.classList.toggle("menuopen")}}}},oEaD:function(t,e,n){"use strict";var s=n("hrYu"),i=n("YnCP"),r=n("VU/8")(s.a,i.a,!1,null,null,null);r.options.__file="components/Nav.vue",e.a=r.exports},r3gs:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"cover"}},[n("canvas",{ref:"sitetitle",attrs:{id:"sitetitle"},on:{click:function(e){t.$router.push("/")}}}),n("portal-target",{attrs:{name:"cover",slim:""}})],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},vqvb:function(t,e,n){var s=n("5ISb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("d5b28366",s,!1,{sourceMap:!1})},z5lq:function(t,e,n){"use strict";var s=n("O6di"),i=n("r3gs"),r=!1;var a=function(t){r||n("vqvb")},o=n("VU/8")(s.a,i.a,!1,a,null,null);o.options.__file="components/Cover.vue",e.a=o.exports}});