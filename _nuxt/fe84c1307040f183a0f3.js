(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{411:function(t,e,n){"use strict";var o={name:"Tags",props:{tags:{type:Array,required:!0}}},r=n(14),l=n(15),c=n.n(l),d=n(421),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._l(t.tags,function(e,o){return[n("v-chip",{key:o,staticClass:"ma-1",attrs:{small:"",label:""}},[t._v("\n      "+t._s(e)+"\n    ")])]})],2)},[],!1,null,"25a37033",null);e.a=component.exports;c()(component,{VChip:d.a})},412:function(t,e,n){"use strict";var o={name:"Posted",props:{cdate:{type:String,default:""},mdate:{type:String,default:""}}},r=n(14),l=n(15),c=n.n(l),d=n(139),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("v-icon",[this._v("mdi-calendar")]),this._v(" "),e("span",{staticClass:"caption font-weight-light"},[this._v(this._s(this.mdate))])],1)},[],!1,null,"59c8e654",null);e.a=component.exports;c()(component,{VIcon:d.a})},710:function(t,e,n){"use strict";n.r(e);var o=n(412),r=n(411),l={name:"Item",components:{Posted:o.a,Tags:r.a},props:{blog:{type:Object,required:!0}}},c=n(14),d=n(15),m=n.n(d),h=n(376),v=n(375),_=n(337),f=n(339),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{to:"/blog/"+t.blog.alias,tile:"",nuxt:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"3"}},[n("VImageLazy",{attrs:{src:this.$store.state.blogs.repo_raw+"/"+t.blog.alias+"/img/"+t.blog.image,title:t.blog.title,height:185}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"8",lg:"8",xl:"9"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("h3",{staticClass:"mb-4 title"},[t._v("\n          "+t._s(t.blog.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"mb-6 body-1 font-weight-light"},[t._v("\n          "+t._s(t.blog.description)+"\n        ")]),t._v(" "),n("div",[n("Posted",{attrs:{cdate:t.blog.date.cdate,mdate:t.blog.date.mdate}}),t._v(" "),n("Tags",{staticClass:"ml-3",attrs:{tags:t.blog.tags}})],1)])],1)],1)],1)},[],!1,null,"c2fe3438",null),w=component.exports;m()(component,{VCard:h.a,VCardTitle:v.b,VCol:_.a,VRow:f.a});var y={components:{Item:w},data:function(){return{currentTag:"todos"}},computed:{filterBlogs:function(){return"todos"===this.currentTag?this.blogs:this.$store.getters["blogs/filterByTag"](this.currentTag)}},asyncData:function(t){var e=t.store;return{metas:e.state.metas.blog,tags:e.state.blogs.tags,blogs:e.state.blogs.list}},head:function(){var title=this.metas.title,t=this.metas.description,image="".concat("https://www.programoergosum.es").concat(this.metas.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},C=n(421),T=n(338),V=Object(c.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Title",{attrs:{title:t.metas.title,description:t.metas.description,image:t.metas.image}}),t._v(" "),n("v-container",[n("v-row",[n("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12"}},[n("v-chip",{attrs:{label:"",dark:""},on:{click:function(e){t.currentTag="todos"}}},[t._v("\n          Todos\n        ")]),t._v(" "),t._l(t.tags,function(e){return n("v-chip",{key:e,staticClass:"ml-1",attrs:{label:"",outlined:e!==t.currentTag},on:{click:function(n){t.currentTag=e}}},[t._v("\n          "+t._s(e)+"\n        ")])})],2),t._v(" "),t._l(t.filterBlogs,function(t){return n("v-col",{key:t.alias,attrs:{cols:"12"}},[n("Item",{attrs:{blog:t}})],1)})],2)],1)],1)},[],!1,null,"39fe903a",null);e.default=V.exports;m()(V,{VChip:C.a,VCol:_.a,VContainer:T.a,VRow:f.a})}}]);