(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{606:function(t,e,r){"use strict";var n={name:"Extra",props:{extra:{type:Object,required:!0}}},l=r(16),o=r(20),c=r.n(o),d=r(170),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body-2 font-weight-regular"},[t.extra.level?r("div",{staticClass:"d-inline-flex ma-2"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[t._v("mdi-school-outline")]),t._v("\n    "+t._s(t.extra.level)+"\n  ")],1):t._e(),t._v(" "),t.extra.duration?r("div",{staticClass:"d-inline-flex ma-2"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[t._v("mdi-clock-outline")]),t._v("\n    "+t._s(t.extra.duration)+"\n  ")],1):t._e(),t._v(" "),t.extra.videos?r("div",{staticClass:"d-inline-flex ma-2"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"18"}},[t._v("mdi-video-outline")]),t._v("\n    "+t._s(t.extra.videos)+"\n  ")],1):t._e()])}),[],!1,null,"e306f206",null),v=component.exports;c()(component,{VIcon:d.a});var m={name:"Item",components:{Extra:v},props:{tutorial:{type:Object,required:!0}},computed:{absoluteUrlImage:function(){return"".concat(this.$store.state.tutoriales.repo_raw,"/").concat(this.tutorial.alias,"/").concat(this.tutorial.image)}}},f=r(171),h=r(75),_=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{to:"/tutoriales/"+t.tutorial.alias,outlined:"",nuxt:""}},[r("VImageLazy",{attrs:{src:t.absoluteUrlImage,title:t.tutorial.title,height:220}}),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("h3",{staticClass:"mb-4 font-weight-medium body-1"},[t._v(t._s(t.tutorial.title))]),t._v(" "),r("div",{staticClass:"mb-2 body-2"},[t._v(t._s(t.tutorial.description))])]),t._v(" "),r("v-card-text",{staticClass:"text-center"},[r("Extra",{attrs:{extra:t.tutorial.extra}})],1)],1)}),[],!1,null,"a58be622",null);e.a=_.exports;c()(_,{VCard:f.a,VCardText:h.b,VCardTitle:h.c})},607:function(t,e,r){"use strict";var n={name:"Categories",components:{},props:{tags:{type:Array,required:!0}}},l=r(16),o=r(20),c=r.n(o),d=r(171),v=r(75),m=r(576),f=r(170),h=r(175),_=r(111),x=r(63),C=r(178),y=r(92),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",color:"transparent"}},[r("v-card-title",{staticClass:"px-1"},[r("span",{staticClass:"subtitle-1 font-weight-light"},[t._v("Tecnología")])]),t._v(" "),r("v-card-text",{staticClass:"px-1"},[r("v-list",{staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.tags.filter((function(t){return"technology"===t.category&&t.visible})),(function(e){return[r("v-list-item",{key:e.alias,staticClass:"pa-0",attrs:{to:"/tutoriales/tags/"+e.alias}},[r("v-list-item-icon",{staticClass:"ml-1 mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.name)}})],1)],1)]}))],2)],1)],1),t._v(" "),r("v-divider",{staticClass:"my-1"}),t._v(" "),r("v-card-title",{staticClass:"px-1"},[r("span",{staticClass:"subtitle-1 font-weight-light"},[t._v("Programación")])]),t._v(" "),r("v-card-text",{staticClass:"px-1"},[r("v-list",{staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.tags.filter((function(t){return"software"===t.category&&t.visible})),(function(e){return[r("v-list-item",{key:e.alias,staticClass:"pa-0",attrs:{to:"/tutoriales/tags/"+e.alias}},[r("v-list-item-icon",{staticClass:"ml-1 mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.name)}})],1)],1)]}))],2)],1)],1),t._v(" "),r("v-divider",{staticClass:"my-1"}),t._v(" "),r("v-card-title",{staticClass:"px-1"},[r("span",{staticClass:"subtitle-1 font-weight-light"},[t._v("Robótica")])]),t._v(" "),r("v-card-text",{staticClass:"px-1"},[r("v-list",{staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[r("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.tags.filter((function(t){return"hardware"===t.category&&t.visible})),(function(e){return[r("v-list-item",{key:e.alias,staticClass:"pa-0",attrs:{to:"/tutoriales/tags/"+e.alias}},[r("v-list-item-icon",{staticClass:"ml-1 mr-3"},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.name)}})],1)],1)]}))],2)],1)],1)],1)}),[],!1,null,"048a08f0",null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VDivider:m.a,VIcon:f.a,VList:h.a,VListItem:_.a,VListItemContent:x.a,VListItemGroup:C.a,VListItemIcon:y.a,VListItemTitle:x.c})},912:function(t,e,r){"use strict";r.r(e);r(30),r(32),r(191),r(189),r(27),r(83);var n=r(607),l=r(606),o={components:{Categories:n.a,Item:l.a},asyncData:function(t){var e=t.store,r=t.params,n=e.state.tutoriales.tags.find((function(t){return t.alias===r.alias}));return{tag:n,tags:e.state.tutoriales.tags,tutoriales:e.state.tutoriales.list,breadcrumbs:[{text:"Tutoriales",disabled:!1,to:"/tutoriales"},{text:n.name,disabled:!0,to:""}]}},data:function(){return{search:"",pagItems:24,tutorialesByTag:[]}},computed:{filter:function(){var t=this,e=this.tutorialesByTag;return""!==this.search&&this.search.length>3&&(e=e.filter((function(e){return-1!==e.title.search(new RegExp(t.search,"i"))||-1!==e.description.search(new RegExp(t.search,"i"))}))),e}},validate:function(t){var e=t.store,r=t.params;return e.state.tutoriales.tags.find((function(t){return t.alias===r.alias}))},created:function(){var t=this,e=this.$store.state.tutoriales.tags.find((function(e){return e.alias===t.tag.alias})).name;this.tutorialesByTag=this.tutoriales.filter((function(t){if(t.tags.technology.concat(t.tags.hardware).concat(t.tags.software).concat(t.tags.level).concat(t.tags.others).includes(e))return t}))},head:function(){var title=this.tag.title,t=this.tag.description,image="".concat("https://www.programoergosum.es").concat(this.tag.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},c=r(16),d=r(20),v=r.n(d),m=r(109),f=r(573),h=r(574),_=r(575),x=r(924),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Title",{attrs:{title:t.tag.title,description:t.tag.description,image:t.tag.image,breadcrumbs:t.breadcrumbs}}),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"2",xl:"2"}},[r("div",{staticClass:"sticky-top-disabled"},[r("v-text-field",{attrs:{messages:t.filter.length+" tutoriales",label:"Buscar",outlined:"","append-icon":"mdi-magnify","validate-on-blur":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("categories",{staticClass:"hidden-md-and-down",attrs:{tags:t.tags}})],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"10",xl:"10"}},[r("v-row",[t._l(t.filter.slice(0,t.pagItems),(function(t){return r("v-col",{key:t.alias,staticClass:"pa-0 px-1 pb-2",attrs:{xs:"12",sm:"6",md:"4",lg:"4",xl:"3"}},[r("Item",{attrs:{tutorial:t}})],1)})),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t.filter.length>t.pagItems?r("v-btn",{attrs:{depressed:"",small:""},on:{click:function(e){t.pagItems+=24}}},[t._v("\n              Mostrar más\n            ")]):t._e()],1)],2)],1)],1)],1)],1)}),[],!1,null,"3e903f09",null);e.default=component.exports;v()(component,{VBtn:m.a,VCol:f.a,VContainer:h.a,VRow:_.a,VTextField:x.a})}}]);