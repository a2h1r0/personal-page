(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{406:function(e,t,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("1691f9d8",content,!0,{sourceMap:!1})},407:function(e,t,n){var r=n(28)((function(i){return i[1]}));r.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),r.locals={},e.exports=r},422:function(e,t,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("749bf312",content,!0,{sourceMap:!1})},432:function(e,t,n){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",l="month",c="quarter",h="year",d="date",f="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},g={s:$,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),s=n-i<0,u=t.clone().add(r+(s?-1:1),l);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},M="en",w={};w[M]=m;var p=function(e){return e instanceof O},y=function e(t,n,r){var i;if(!t)return M;if("string"==typeof t){var s=t.toLowerCase();w[s]&&(i=s),n&&(w[s]=n,i=s);var u=t.split("-");if(!i&&u.length>1)return e(u[0])}else{var a=t.name;w[a]=t,i=a}return!r&&i&&(M=i),i||!r&&M},D=function(e,t){if(p(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},S=g;S.l=y,S.i=p,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function m(e){this.$L=y(e.locale,null,!0),this.parse(e)}var $=m.prototype;return $.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(v);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},$.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},$.isAfter=function(e,t){return D(e)<this.startOf(t)},$.isBefore=function(e,t){return this.endOf(t)<D(e)},$.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(e,t){var n=this,r=!!S.u(t)||t,c=S.p(e),f=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(a)},v=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},_=this.$W,m=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case h:return r?f(1,0):f(31,11);case l:return r?f(1,m):f(0,m+1);case o:var M=this.$locale().weekStart||0,w=(_<M?_+7:_)-M;return f(r?$-w:$+(6-w),m);case a:case d:return v(g+"Hours",0);case u:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(e){return this.startOf(e,!1)},$.$set=function(e,t){var n,o=S.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[a]=c+"Date",n[d]=c+"Date",n[l]=c+"Month",n[h]=c+"FullYear",n[u]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[o],v=o===a?this.$D+(t-this.$W):t;if(o===l||o===h){var _=this.clone().set(d,1);_.$d[f](v),_.init(),this.$d=_.set(d,Math.min(this.$D,_.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},$.set=function(e,t){return this.clone().$set(e,t)},$.get=function(e){return this[S.p(e)]()},$.add=function(r,c){var d,f=this;r=Number(r);var v=S.p(c),_=function(e){var t=D(f);return S.w(t.date(t.date()+Math.round(e*r)),f)};if(v===l)return this.set(l,this.$M+r);if(v===h)return this.set(h,this.$y+r);if(v===a)return _(1);if(v===o)return _(7);var m=(d={},d[s]=t,d[u]=n,d[i]=e,d)[v]||1,$=this.$d.getTime()+r*m;return S.w($,this)},$.subtract=function(e,t){return this.add(-1*e,t)},$.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,l=n.months,c=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},h=function(e){return S.s(s%12||12,e,"0")},d=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:c(n.monthsShort,a,l,3),MMMM:c(l,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(_,(function(e,t){return t||v[e]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,d,f){var v,_=S.p(d),m=D(r),$=(m.utcOffset()-this.utcOffset())*t,g=this-m,M=S.m(this,m);return M=(v={},v[h]=M/12,v[l]=M,v[c]=M/3,v[o]=(g-$)/6048e5,v[a]=(g-$)/864e5,v[u]=g/n,v[s]=g/t,v[i]=g/e,v)[_]||g,f?M:S.a(M)},$.daysInMonth=function(){return this.endOf(l).$D},$.$locale=function(){return w[this.$L]},$.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=y(e,t,!0);return r&&(n.$L=r),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},m}(),C=O.prototype;return D.prototype=C,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",l],["$y",h],["$D",d]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,O,D),e.$i=!0),D},D.locale=y,D.isDayjs=p,D.unix=function(e){return D(1e3*e)},D.en=w[M],D.Ls=w,D.p={},D}()},433:function(e,t,n){"use strict";n(422)},434:function(e,t,n){var r=n(28)((function(i){return i[1]}));r.push([e.i,"h2[data-v-7e9e8556]{font-size:1em;font-weight:700;margin-bottom:12px}ol[data-v-7e9e8556]{font-size:.9em}ol .award[data-v-7e9e8556]{color:red;font-weight:700}ol .acceptance-rate[data-v-7e9e8556]{color:red}",""]),r.locals={},e.exports=r},435:function(e,t,n){"use strict";n(11),n(14),n(19),n(20),n(12),n(5),n(13);var r=n(2),o=(n(406),n(37));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},442:function(e,t,n){"use strict";n.r(t);n(30),n(36);var r=n(0),o=n(432),l=n.n(o),c=r.a.extend({data:function(){return{publications:{journalPaper:[{authors:["A. Fujii","K. Murao"],title:"User Identification Method based on Head Shape Using Pressure Sensors Embedded in a Helmet",journal:"Journal of Information Processing",volume:29,number:null,issue:null,pageFrom:610,pageTo:619,date:"2021-10-15",publisher:"J-STAGE",url:"https://doi.org/10.2197/ipsjjip.29.610"},{authors:["A. Fujii","K. Murao","N. Matsuhisa"],title:"Pulse Wave Generation Method for PPG by Using Display",journal:"IEEE Access",volume:11,number:null,issue:null,pageFrom:31199,pageTo:31211,date:"2023-03-24",publisher:"IEEE",url:"https://doi.org/10.1109/ACCESS.2023.3260862"}],internationalConferencePaper:[{authors:["A. Fujii","D. Kajiwara","K. Murao"],title:"Cooking Activity Recognition with Convolutional LSTM Using Multi-label Loss Function and Majority Vote",bookTitle:"in Proc. of International Conference on Activity and Behavior Computing",series:"ABC 2020",pageFrom:91,pageTo:101,location:"Fukuoka, Japan",date:"2020-11-21",award:null,acceptanceRate:null,publisher:"Springer",url:"https://doi.org/10.1007/978-981-15-8269-1_8"},{authors:["A. Fujii","K. Murao"],title:"User Identification Method Based on Head Shape Using a Helmet with Pressure Sensors",bookTitle:"in Proc. of the 18th International Conference on Advances in Mobile Computing & Multimedia",series:"MoMM 2020",pageFrom:210,pageTo:214,location:"Virtual",date:"2020-11-30",award:null,acceptanceRate:null,publisher:"ACM",url:"https://doi.org/10.1145/3428690.3429158"},{authors:["A. Fujii","K. Murao","N. Matsuhisa"],title:"disp2ppg: Pulse Wave Generation to PPG Sensor using Display",bookTitle:"in Proc. of the 25th International Symposium on Wearable Computers",series:"ISWC 2021",pageFrom:119,pageTo:123,location:"Virtual",date:"2021-09-21",award:null,acceptanceRate:"24/88",publisher:"ACM",url:"https://doi.org/10.1145/3460421.3478823"},{authors:["A. Fujii","K. Yoshida","K. Shirai","K. Murao"],title:"Bento Packaging Activity Recognition with Convolutional LSTM Using Autocorrelation Function and Majority Vote",bookTitle:"Sensor- and Video-Based Activity and Behavior Computing",series:"ABC 2021",pageFrom:237,pageTo:247,location:"Online",date:"2022-05-04",award:null,acceptanceRate:null,publisher:"Springer",url:"https://doi.org/10.1007/978-981-19-0361-8_16"}],domesticConferencePaper:[{authors:["藤井敦寛","村尾和哉"],title:"圧カセンサ搭載ヘルメットを用いた個人識別手法の提案",conference:"ユビキタスウェアラブルワークショップ2019論文集",series:"UWW 2019",volume:null,number:null,pageFrom:49,pageTo:49,location:"兵庫",date:"2019-12-21",award:null,publisher:null,url:null},{authors:["藤井敦寛","村尾和哉"],title:"圧力センサ搭載ヘルメットを用いた個人識別手法",conference:"情報処理学会マルチメディア，分散，協調とモバイルシンポジウム論文集",series:"DICOMO 2020",volume:"2020",number:null,pageFrom:1215,pageTo:1222,location:"オンライン",date:"2020-06-26",award:"最優秀プレゼンテーション賞，優秀論文賞",publisher:"情報学広場",url:"http://id.nii.ac.jp/1001/00210783/"},{authors:["藤井敦寛","村尾和哉"],title:"ディスプレイを用いた擬似的脈波生成手法の検討",conference:"ユビキタスウェアラブルワークショップ2020論文集",series:"UWW 2020",volume:null,number:null,pageFrom:39,pageTo:39,location:"兵庫",date:"2020-12-13",award:null,publisher:null,url:null},{authors:["藤井敦寛","村尾和哉"],title:"ディスプレイを用いた脈波生成手法の検討",conference:"インタラクション2021論文集",series:null,volume:null,number:null,pageFrom:475,pageTo:478,location:"オンライン",date:"2021-03-01",award:null,publisher:"インタラクション2021",url:"https://www.interaction-ipsj.org/proceedings/2021/data/bib/3A10.html"},{authors:["藤井敦寛","村尾和哉"],title:"ディスプレイを用いて光電脈波センサに任意の脈波を計測させる手法の提案",conference:"情報処理学会マルチメディア，分散，協調とモバイルシンポジウム論文集",series:"DICOMO 2021",volume:"2021",number:1,pageFrom:702,pageTo:708,location:"オンライン",date:"2021-07-01",award:null,publisher:"情報学広場",url:"http://id.nii.ac.jp/1001/00212888/"},{authors:["藤井敦寛","村尾和哉"],title:"注水音を用いた容器内水位推定手法の提案",conference:"ユビキタスウェアラブルワークショップ2021論文集",series:"UWW 2021",volume:null,number:null,pageFrom:49,pageTo:49,location:"兵庫",date:"2021-12-20",award:null,publisher:null,url:null},{authors:["藤井敦寛","村尾和哉"],title:"注水音を用いた容器内水位推定手法",conference:"研究報告ユビキタスコンピューティングシステム",series:"UBI 73",volume:"2022-UBI-73",number:18,pageFrom:1,pageTo:8,location:"オンライン",date:"2022-03-07",award:null,publisher:"情報学広場",url:"http://id.nii.ac.jp/1001/00216626/"}]}}},head:function(){return{title:"業績"}},methods:{formatDate:function(e){return l()(e).format("MMM. YYYY")},calcAcceptanceRate:function(e){var t=e.split("/"),n=Number(t[0]),r=Number(t[1]);return Math.floor(n/r*1e3)/10}}}),h=(n(433),n(97)),d=n(122),f=n.n(d),v=n(402),_=n(435),component=Object(h.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("v-container",[t("v-container",[t("h2",[e._v("著者情報 / Author information")]),t("a",{attrs:{href:"https://orcid.org/0000-0002-9292-2912",target:"_blank",rel:"noopener noreferrer"}},[t("img",{staticClass:"mr-2",attrs:{alt:"ORCID logo",src:"https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png",width:"16",height:"16"}}),e._v("0000-0002-9292-2912")])]),t("v-divider",{staticClass:"my-4"}),t("v-container",[t("h2",[e._v("学術論文誌発表論文 / Journal paper")]),t("ol",e._l(e.publications.journalPaper,(function(n){return t("li",[e._l(n.authors,(function(r,i){return t("span",[e._v(e._s(r)),i<n.authors.length-1?t("span",[e._v(", ")]):t("span",[e._v(": ")])])})),t("span",[e._v(e._s(n.title)+", ")]),t("span",[e._v(e._s(n.journal)+", ")]),n.volume?t("span",[e._v("Vol. "+e._s(n.volume)+", ")]):e._e(),n.number?t("span",[e._v("No. "+e._s(n.number)+", ")]):e._e(),n.issue?t("span",[e._v("Issue "+e._s(n.issue)+", ")]):e._e(),t("span",[e._v("pp. "+e._s(n.pageFrom)+"–")]),t("span",[e._v(e._s(n.pageTo)+", ")]),t("span",[e._v("("+e._s(e.formatDate(n.date))+"). ")]),t("span",[t("span",[e._v("[")]),t("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(n.publisher))]),t("span",[e._v("]")])])],2)})),0)]),t("v-divider",{staticClass:"my-4"}),t("v-container",[t("h2",[e._v("国際会議等発表論文 / International conference paper")]),t("ol",e._l(e.publications.internationalConferencePaper,(function(n){return t("li",[e._l(n.authors,(function(r,i){return t("span",[e._v(e._s(r)),i<n.authors.length-1?t("span",[e._v(", ")]):t("span",[e._v(": ")])])})),t("span",[e._v(e._s(n.title)+", ")]),t("span",[e._v(e._s(n.bookTitle))]),n.series?t("span",[e._v(" ("+e._s(n.series)+")")]):e._e(),t("span",[e._v(", pp. "+e._s(n.pageFrom)+"–")]),t("span",[e._v(e._s(n.pageTo)+", ")]),t("span",[e._v(e._s(n.location)+" ")]),t("span",[e._v("("+e._s(e.formatDate(n.date))+"). ")]),t("span",{staticClass:"award"},[e._v(e._s(n.award)+" ")]),n.acceptanceRate?t("span",{staticClass:"acceptance-rate"},[e._v("("+e._s("Acceptance rate: ".concat(n.acceptanceRate,"=").concat(e.calcAcceptanceRate(n.acceptanceRate),"%"))+") ")]):e._e(),t("span",[t("span",[e._v("[")]),t("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(n.publisher))]),t("span",[e._v("]")])])],2)})),0)]),t("v-divider",{staticClass:"my-4"}),t("v-container",[t("h2",[e._v("国内研究会等発表論文 / Domestic conference paper")]),t("ol",e._l(e.publications.domesticConferencePaper,(function(n){return t("li",[e._l(n.authors,(function(r,i){return t("span",[e._v(e._s(r)),i<n.authors.length-1?t("span",[e._v(", ")]):t("span",[e._v(": ")])])})),t("span",[e._v(e._s(n.title)+", ")]),t("span",[e._v(e._s(n.conference))]),n.series?t("span",[e._v(" ("+e._s(n.series)+")")]):e._e(),n.volume?t("span",[e._v(", Vol. "+e._s(n.volume))]):e._e(),n.number?t("span",[e._v(", No. "+e._s(n.number))]):e._e(),n.pageFrom!=n.pageTo?t("span",[e._v(", pp. "),t("span",[e._v(e._s(n.pageFrom)+"–")]),t("span",[e._v(e._s(n.pageTo)+", ")])]):t("span",[e._v(", p. "),t("span",[e._v(e._s(n.pageFrom)+", ")])]),t("span",[e._v(e._s(n.location)+" ")]),t("span",[e._v("("+e._s(e.formatDate(n.date))+"). ")]),t("span",{staticClass:"award"},[e._v(e._s(n.award)+" ")]),n.publisher?t("span",[t("span",[e._v("[")]),t("a",{attrs:{href:n.url,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(n.publisher))]),t("span",[e._v("]")])]):e._e()],2)})),0)]),t("v-divider",{staticClass:"my-4"}),t("v-container",[t("h2",[e._v("卒業論文 / Bachelor thesis")]),t("ol",[t("li",[e._v("圧力センサ搭載ヘルメットを用いた本人認証手法の提案")])])]),t("v-container",[t("h2",[e._v("修士論文 / Master thesis")]),t("ol",[t("li",[e._v("Pulse Wave Generation Method for PPG by using Display")])])])],1)}),[],!1,null,"7e9e8556",null);t.default=component.exports;f()(component,{VContainer:v.a,VDivider:_.a})}}]);