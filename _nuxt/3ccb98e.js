(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{598:function(t,e,n){"use strict";var r={name:"Reg"},o=n(16),c=n(20),l=n.n(c),d=n(573),m=n(574),h=n(575),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"primary white--text"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"py-12"},[e("p",{staticClass:"headline font-weight-bold"},[this._v("\n            Asociación Programo Ergo Sum\n          ")]),this._v(" "),e("p",{staticClass:"title font-weight-light"},[this._v("\n            Iniciativa sin ánimo de lucro inscrita en el Registro de\n            Asociaciones por el Director General de Participación Ciudadana,\n            Unión Europea y Acción Exterior de la Consejería de Presidencia,\n            con el número de registro 12.731/1ª.\n          ")])])])],1)],1)],1)}),[],!1,null,"2d686dd6",null);e.a=component.exports;l()(component,{VCol:d.a,VContainer:m.a,VRow:h.a})},604:function(t,e,n){var content=n(615);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("462c1ea8",content,!0,{sourceMap:!1})},605:function(t,e,n){var content=n(617);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("801dc6be",content,!0,{sourceMap:!1})},614:function(t,e,n){"use strict";n(604)},615:function(t,e,n){(e=n(13)(!1)).push([t.i,".popup[data-v-2cb1fcdd]{width:200px;padding:5px;font-size:14px}",""]),t.exports=e},616:function(t,e,n){"use strict";n(605)},617:function(t,e,n){(e=n(13)(!1)).push([t.i,".map[data-v-4b67847b]{height:650px;position:relative;z-index:1}.map .v-autocomplete[data-v-4b67847b],.map .v-text-field[data-v-4b67847b]{position:absolute;top:12px;left:55px;z-index:999}@media only screen and (max-width:960px){.map[data-v-4b67847b]{height:450px}.map .v-autocomplete[data-v-4b67847b],.map .v-text-field[data-v-4b67847b]{display:none}}",""]),t.exports=e},618:function(t,e,n){"use strict";n(12),n(9),n(8),n(6),n(10);var r=n(3),o=n(44),c={name:"Popup",props:{center:{type:Object,default:function(){}}}},l=(n(614),n(16)),d=n(20),m=n.n(d),h=n(177),v=n(109),f=n(170),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup text-center"},[n("v-avatar",{attrs:{size:"110"}},[n("VImageLazy",{attrs:{src:t.center.image,title:t.center.name}})],1),t._v(" "),n("p",{staticClass:"ma-0 mt-3 font-weight-bold"},[t._v("\n    "+t._s(t.center.name)+"\n  ")]),t._v(" "),n("p",{staticClass:"ma-0 font-weight-light"},[t._v("\n    "+t._s(t.center.address.city)+", "+t._s(t.center.address.province)+"\n  ")]),t._v(" "),t.center.social.url?n("v-btn",{attrs:{href:t.center.social.url,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Url"}},[n("v-icon",{attrs:{size:"18",color:"#000"}},[t._v("mdi-link")])],1):t._e(),t._v(" "),t.center.social.twitter?n("v-btn",{attrs:{href:t.center.social.twitter,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"}},[n("v-icon",{attrs:{size:"18",color:"#1da1f2"}},[t._v("mdi-twitter")])],1):t._e()],1)}),[],!1,null,"2cb1fcdd",null),x=component.exports;m()(component,{VAvatar:h.a,VBtn:v.a,VIcon:f.a});var _={name:"Market",components:{Popup:x},props:{center:{type:Object,default:function(){}}},data:function(){return{loading:!1}},mounted:function(){this.loading=!0}};function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={name:"Map",components:{Market:Object(l.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("l-marker",{attrs:{"lat-lng":this.center.coordinates}},[e("l-popup",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}]},[e("Popup",{attrs:{center:this.center}})],1)],1)}),[],!1,null,"ef9bdc50",null).exports},data:function(){return{minZoom:6,maxZoom:12,center:[40.4636688,-3.7492199],url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png",mapOptions:{scrollWheelZoom:!1}}},computed:y(y({},Object(o.c)("centros",["filter","list"])),{},{search:{get:function(){return this.filter},set:function(t){this.setFilter(t)}}}),methods:y({},Object(o.b)("centros",["setFilter"]))},O=(n(616),n(924)),j=Object(l.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("l-map",{attrs:{"min-zoom":t.minZoom,"max-zoom":t.maxZoom,center:t.center,options:t.mapOptions}},[n("v-text-field",{attrs:{label:"Buscar centro","prepend-inner-icon":"mdi-domain","append-icon":"mdi-map-marker",color:"primary",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("l-tile-layer",{attrs:{url:t.url}}),t._v(" "),t._l(t.list,(function(t,e){return n("Market",{key:e,attrs:{center:t}})}))],2)],1)}),[],!1,null,"4b67847b",null);e.a=j.exports;m()(j,{VTextField:O.a})},630:function(t,e,n){var content=n(898);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("47bf0d55",content,!0,{sourceMap:!1})},631:function(t,e,n){var content=n(900);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("860e12ea",content,!0,{sourceMap:!1})},897:function(t,e,n){"use strict";n(630)},898:function(t,e,n){(e=n(13)(!1)).push([t.i,".home[data-v-e82680ce]{max-width:100%;min-height:100vh;max-height:100vh;margin-top:-110px;padding:35vh 20px}.home h1[data-v-e82680ce]{font-weight:600;font-size:40px}.home h2[data-v-e82680ce]{max-width:750px;margin-left:auto;margin-right:auto;font-weight:300;line-height:1.8}@media only screen and (max-width:960px){.home[data-v-e82680ce]{min-height:auto;max-height:auto;margin-top:-50px;padding:150px 20px 70px}.home h1[data-v-e82680ce]{font-size:30px}.home h2[data-v-e82680ce]{font-size:20px}}@media only screen and (max-width:600px){.home h1[data-v-e82680ce]{font-size:26px}.home h2[data-v-e82680ce]{font-size:20px}}",""]),t.exports=e},899:function(t,e,n){"use strict";n(631)},900:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-card[data-v-f37d75e4]{width:240px;margin:0 auto}",""]),t.exports=e},905:function(t,e,n){"use strict";n.r(e);var r={name:"Cover"},o=(n(897),n(16)),c=n(20),l=n.n(c),d=n(573),m=n(574),h=n(575),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"home"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("section",{staticClass:"text-center"},[n("h1",{staticClass:"mb-3"},[t._v("\n          Asociación Programo Ergo Sum\n        ")]),t._v(" "),n("h2",{staticClass:"mb-5"},[t._v("\n          Proyectos educativos libres de\n          "),n("strong",{staticClass:"primary--text font-weight-medium"},[t._v("código abierto")]),t._v("\n          para aprender\n          "),n("span",{staticClass:"px-3 py-1 white--text primary"},[t._v("informática, programación, electrónica y robótica educativa")]),t._v("\n          utilizando herramientas de\n          "),n("strong",{staticClass:"primary--text font-weight-medium"},[t._v("software y hardware libre")])])])])],1)],1)}),[],!1,null,"e82680ce",null),v=component.exports;l()(component,{VCol:d.a,VContainer:m.a,VRow:h.a});var f=n(618),x={data:function(){return{doing:[{icon:"mdi-school",title:"Recursos educativos",description:"Fomentando el uso de la programación, robótica y nuevas tecnologías"},{icon:"mdi-open-source-initiative",title:"Código abierto",description:"Proyectos educativos de código abierto creados con herramientas libres"},{icon:"mdi-earth",title:"Online",description:"Accede a todos nuestros proyectos desde tu casa y sin registrarte"}]}}},_=(n(899),n(171)),w=n(170),y=Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-12 white--text secondary"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",t._l(t.doing,(function(e){return n("v-col",{key:e.icon,staticClass:"text-center pa-3",attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-card",{staticClass:"white--text secondary",attrs:{flat:""}},[n("v-icon",{staticClass:"mb-6",attrs:{dark:"",size:"60"}},[t._v(t._s(e.icon))]),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"body-1 font-weight-light"},[t._v("\n                "+t._s(e.description)+"\n              ")])],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,"f37d75e4",null),C=y.exports;l()(y,{VCard:_.a,VCol:d.a,VContainer:m.a,VIcon:w.a,VRow:h.a});var O=n(598),j={components:{Cover:v,Map:f.a,What:C,Reg:O.a},asyncData:function(t){return{metas:t.store.state.metas.index}},head:function(){var title=this.metas.title,t=this.metas.description,image="".concat("https://www.programoergosum.es").concat(this.metas.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},z=Object(o.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",[e("Cover")],1),this._v(" "),e("section",[e("What")],1),this._v(" "),e("section",[e("Map")],1),this._v(" "),e("section",[e("Reg")],1)])}),[],!1,null,"e2af52be",null);e.default=z.exports}}]);