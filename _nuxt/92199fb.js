(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(t,o,e){var content=e(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("48517564",content,!0,{sourceMap:!1})},226:function(t,o,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("86150b90",content,!0,{sourceMap:!1})},252:function(t,o,e){"use strict";var r=e(0).a.extend({name:"DefaultLayout",data:function(){return{pages:[{icon:"mdi-home",title:"Top page",to:"/"},{icon:"mdi-account",title:"Profile",to:"/profile"},{icon:"mdi-book-open",title:"Publications",to:"/publication"}]}}}),n=(e(298),e(86)),c=e(119),l=e.n(c),d=e(371),f=e(374),h=e(173),m=e(174),x=e(113),v=e(175),w=e(85),_=e(372),k=e(373),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",{attrs:{dark:""}},[e("p",{staticClass:"text-center mt-12"},[t._v("現在準備中です．．．")])])}),[],!1,null,null,null);o.a=component.exports;l()(component,{VApp:d.a,VContainer:f.a,VIcon:h.a,VList:m.a,VListItem:x.a,VListItemAction:v.a,VListItemContent:w.a,VListItemTitle:w.b,VMain:_.a,VNavigationDrawer:k.a})},261:function(t,o,e){e(262),t.exports=e(263)},292:function(t,o,e){"use strict";e(224)},293:function(t,o,e){var r=e(23)(!1);r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=r},298:function(t,o,e){"use strict";e(226)},299:function(t,o,e){var r=e(23)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Nunito);"]),r.push([t.i,'::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.1)}::-webkit-scrollbar-thumb{background-color:silver;border-radius:10px;box-shadow:0 0 0 1px hsla(0,0%,100%,.3)}#app{word-wrap:break-word}#app,#app [class^=text-]{font-family:"Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro","Yu Gothic Medium","游ゴシック Medium",YuGothic,"游ゴシック体","メイリオ",sans-serif!important}',""]),t.exports=r},75:function(t,o,e){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(e(292),e(86)),c=e(119),l=e.n(c),d=e(371),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);o.a=component.exports;l()(component,{VApp:d.a})}},[[261,8,1,9]]]);