(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("7132a15d",content,!0,{sourceMap:!1})},364:function(t,e,r){var n=r(24)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},365:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("b093b6ea",content,!0,{sourceMap:!1})},369:function(t,e,r){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",l="quarter",h="year",d="date",f="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},g={s:M,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+M(n,2,"0")+":"+M(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),s=r-i<0,u=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",w={};w[y]=$;var p=function(t){return t instanceof x},D=function t(e,r,n){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();w[s]&&(i=s),r&&(w[s]=r,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;w[a]=e,i=a}return!n&&i&&(y=i),i||!n&&y},S=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},O=g;O.l=D,O.i=p,O.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function $(t){this.$L=D(t.locale,null,!0),this.parse(t)}var M=$.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(v);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return O},M.isValid=function(){return!(this.$d.toString()===f)},M.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},M.isAfter=function(t,e){return S(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<S(t)},M.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var r=this,n=!!O.u(e)||e,l=O.p(t),f=function(t,e){var i=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(a)},v=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,$=this.$M,M=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case h:return n?f(1,0):f(31,11);case c:return n?f(1,$):f(0,$+1);case o:var y=this.$locale().weekStart||0,w=(m<y?m+7:m)-y;return f(n?M-w:M+(6-w),$);case a:case d:return v(g+"Hours",0);case u:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var r,o=O.p(t),l="set"+(this.$u?"UTC":""),f=(r={},r[a]=l+"Date",r[d]=l+"Date",r[c]=l+"Month",r[h]=l+"FullYear",r[u]=l+"Hours",r[s]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[o],v=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(d,1);m.$d[f](v),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[O.p(t)]()},M.add=function(n,l){var d,f=this;n=Number(n);var v=O.p(l),m=function(t){var e=S(f);return O.w(e.date(e.date()+Math.round(t*n)),f)};if(v===c)return this.set(c,this.$M+n);if(v===h)return this.set(h,this.$y+n);if(v===a)return m(1);if(v===o)return m(7);var $=(d={},d[s]=e,d[u]=r,d[i]=t,d)[v]||1,M=this.$d.getTime()+n*$;return O.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},h=function(t){return O.s(s%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:l(r.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,o,2),ddd:l(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(t,e){return e||v[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,d,f){var v,m=O.p(d),$=S(n),M=($.utcOffset()-this.utcOffset())*e,g=this-$,y=O.m(this,$);return y=(v={},v[h]=y/12,v[c]=y,v[l]=y/3,v[o]=(g-M)/6048e5,v[a]=(g-M)/864e5,v[u]=g/r,v[s]=g/e,v[i]=g/t,v)[m]||g,f?y:O.a(y)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return w[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=D(t,e,!0);return n&&(r.$L=n),r},M.clone=function(){return O.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},$}(),_=x.prototype;return S.prototype=_,[["$ms",n],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=D,S.isDayjs=p,S.unix=function(t){return S(1e3*t)},S.en=w[y],S.Ls=w,S.p={},S}()},370:function(t,e,r){"use strict";r(365)},371:function(t,e,r){var n=r(24)(!1);n.push([t.i,"h2[data-v-3478667b]{font-size:1em;font-weight:700;margin-bottom:12px}ol[data-v-3478667b]{font-size:.9em}ol .award[data-v-3478667b]{color:red;font-weight:700}ol .acceptance-rate[data-v-3478667b]{color:red}",""]),t.exports=n},372:function(t,e,r){"use strict";r(12),r(9),r(11),r(5),r(17),r(10),r(18);var n=r(2),o=(r(363),r(36));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},377:function(t,e,r){"use strict";r.r(e);r(21),r(65),r(40);var n=r(0),o=r(369),c=r.n(o),l=n.a.extend({data:function(){return{publications:{journalPaper:[{authors:["A. Fujii","K. Murao"],title:"User Identification Method based on Head Shape Using Pressure Sensors Embedded in a Helmet",journal:"Journal of Information Processing",volume:29,number:null,issue:null,pageFrom:610,pageTo:619,date:"2021-10-15",publisher:"J-STAGE",url:"https://doi.org/10.2197/ipsjjip.29.610"}],internationalConferencePaper:[{authors:["A. Fujii","D. Kajiwara","K. Murao"],title:"Cooking Activity Recognition with Convolutional LSTM Using Multi-label Loss Function and Majority Vote",bookTitle:"in Proc. of International Conference on Activity and Behavior Computing",series:"ABC 2020",pageFrom:91,pageTo:101,location:"Fukuoka, Japan",date:"2020-11-21",award:null,acceptanceRate:null,publisher:"Springer",url:"https://doi.org/10.1007/978-981-15-8269-1_8"},{authors:["A. Fujii","K. Murao"],title:"User Identification Method Based on Head Shape Using a Helmet with Pressure Sensors",bookTitle:"in Proc. of the 18th International Conference on Advances in Mobile Computing & Multimedia",series:"MoMM 2020",pageFrom:210,pageTo:214,location:"Virtual",date:"2020-11-30",award:null,acceptanceRate:null,publisher:"ACM",url:"https://doi.org/10.1145/3428690.3429158"},{authors:["A. Fujii","K. Murao","N. Matsuhisa"],title:"disp2ppg: Pulse Wave Generation to PPG Sensor using Display",bookTitle:"in Proc. of the 25th International Symposium on Wearable Computers",series:"ISWC 2021",pageFrom:119,pageTo:123,location:"Virtual",date:"2021-09-21",award:null,acceptanceRate:"24/88",publisher:"ACM",url:"https://doi.org/10.1145/3460421.3478823"}]}}},head:function(){return{title:"業績"}},methods:{formatDate:function(t){return c()(t).format("MMM. YYYY")},calcAcceptanceRate:function(t){var e=t.split("/"),r=Number(e[0]),n=Number(e[1]);return Math.floor(r/n*1e3)/10}}}),h=(r(370),r(86)),d=r(137),f=r.n(d),v=r(362),m=r(372),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{dark:""}},[r("p",{staticClass:"text-center mt-12"},[t._v("現在準備中です．．．")])])}),[],!1,null,"3478667b",null);e.default=component.exports;f()(component,{VContainer:v.a,VDivider:m.a})}}]);