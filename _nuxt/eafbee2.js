(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(t,r,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("86150b90",content,!0,{sourceMap:!1})},240:function(t,r,o){"use strict";var e=o(0).a.extend({data:function(){return{pages:[{icon:"mdi-home",title:"Top page",to:"/"},{icon:"mdi-book-open",title:"Publications",to:"/publications"}]}}}),n=(o(293),o(85)),c=o(132),l=o.n(c),d=o(359),f=o(363),v=o(364),m=o(170),h=o(360),x=o(361),w=o(362),component=Object(n.a)(e,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("v-app",{attrs:{dark:""}},[o("v-app-bar",{attrs:{app:"",fixed:"",dark:""}},[o("v-tabs",{attrs:{centered:"","icons-and-text":""}},t._l(t.pages,(function(r){return o("v-tab",{key:r.to,attrs:{to:r.to,router:"",exact:""}},[t._v(t._s(r.title)),o("v-icon",[t._v(t._s(r.icon))])],1)})),1)],1),o("v-main",[o("v-container",{staticClass:"mb-8"},[o("Nuxt")],1),o("div",{attrs:{id:"footer"}},[t._v("Copyright © 2022–"+t._s((new Date).getFullYear())+" Atsuhiro Fujii")])],1)],1)}),[],!1,null,null,null);r.a=component.exports;l()(component,{VApp:d.a,VAppBar:f.a,VContainer:v.a,VIcon:m.a,VMain:h.a,VTab:x.a,VTabs:w.a})},243:function(t,r,o){o(244),t.exports=o(245)},293:function(t,r,o){"use strict";o(222)},294:function(t,r,o){var e=o(24)(!1);e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Nunito);"]),e.push([t.i,'::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.1)}::-webkit-scrollbar-thumb{background-color:silver;border-radius:10px;box-shadow:0 0 0 1px hsla(0,0%,100%,.3)}#app{word-wrap:break-word}#app,#app [class^=text-]{font-family:"Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro","Yu Gothic Medium","游ゴシック Medium",YuGothic,"游ゴシック体","メイリオ",sans-serif!important}#app .v-main{max-width:900px;margin:0 auto}#app #footer{position:absolute;bottom:0;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%)}',""]),t.exports=e},72:function(t,r,o){"use strict";var e=o(0).a.extend({props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}}),n=o(85),c=o(132),l=o.n(c),d=o(364),component=Object(n.a)(e,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("v-container",[404===t.error.statusCode?o("div",[o("p",{staticClass:"mb-0"},[t._v("404 Not Found")]),o("p",[t._v("お探しのページは存在しないようです．．．")])]):o("div",[o("p",{staticClass:"mb-0"},[t._v("An error occurred")]),o("p",[t._v("エラーが発生しました．．．")])]),o("NuxtLink",{attrs:{to:"/"}},[t._v("> home")])],1)}),[],!1,null,null,null);r.a=component.exports;l()(component,{VContainer:d.a})}},[[243,7,1,8]]]);