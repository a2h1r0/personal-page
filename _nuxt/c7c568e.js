(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{365:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("7132a15d",content,!0,{sourceMap:!1})},366:function(t,e,r){var n=r(24)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},374:function(t,e,r){"use strict";r(12),r(10),r(13),r(5),r(17),r(11),r(18);var n=r(2),o=(r(365),r(36));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:v({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:v({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},380:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({head:function(){return{titleTemplate:""}}}),o=r(85),c=r(132),v=r.n(c),l=r(364),d=r(374),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h1",{staticClass:"text-h4 mb-8"},[t._v("藤井 敦寛")]),r("p",[t._v("メールアドレスは公開しておりません．お手数ですがSNS経由でご連絡をお願い致します．"),r("br"),t._v("（SNS経由でメールアドレスをお伝えすることは可能です．）")]),r("a",{staticClass:"twitter-mention-button",attrs:{href:"https://twitter.com/intent/tweet?screen_name=_a2h1r0&ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Tweet to @_a2h1r0")]),r("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),r("v-divider",{staticClass:"my-4"}),r("h2",{staticClass:"text-h5 mb-2"},[t._v("略歴")]),r("p",[t._v("1998年生まれ．2022年，立命館大学大学院情報理工学研究科博士課程前期課程修了．修士（工学）．2022年より民間企業で勤務．")]),r("v-divider",{staticClass:"my-4"}),r("h2",{staticClass:"text-h5 mb-2"},[t._v("学歴")]),r("p",[t._v("Apr. 2013–Mar. 2016"),r("br"),t._v("大阪明星学園 明星高等学校 卒業")]),r("p",[t._v("Apr. 2016–Mar. 2020"),r("br"),t._v("立命館大学情報理工学部情報システム学科 卒業（指導教員："),r("a",{attrs:{href:"http://www.muraokazuya.net/",target:"_blank"}},[t._v("村尾和哉")]),t._v("准教授）")]),r("p",[t._v("Apr. 2020–Mar. 2022"),r("br"),t._v("立命館大学大学院情報理工学研究科博士課程前期課程 修了（指導教員："),r("a",{attrs:{href:"http://www.muraokazuya.net/",target:"_blank"}},[t._v("村尾和哉")]),t._v("准教授）"),r("br"),t._v("修士（工学）")])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VContainer:l.a,VDivider:d.a})}}]);