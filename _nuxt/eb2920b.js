(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{918:function(t,e,r){"use strict";r.r(e);var n={components:{},asyncData:function(t){return{metas:t.store.state.metas.proyectos}},data:function(){return{projects:[{link:"https://www.programoergosum.com",img:"programoergosum.png",title:"Programo Ergo Sum",description:"Plataforma de videotutoriales online para aprender programación y robótica educativa desde cero."},{link:"https://www.aprendeprogramando.es",img:"aprendeprogramando.png",title:"Aprende Programando",description:"Plataforma de aprendizaje STEM a través de la programación en distintos niveles de ESO y Bachiller."}]}},head:function(){var title=this.metas.title,t=this.metas.description,image="".concat("https://www.programoergosum.es").concat(this.metas.image);return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},o=r(16),c=r(20),l=r.n(c),d=r(171),m=r(75),h=r(573),w=r(574),f=r(147),v=r(110),y=r(575),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Title",{attrs:{title:t.metas.title,description:t.metas.description}}),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},t._l(t.projects,(function(e){return r("v-col",{key:e.link,attrs:{cols:"12",xs:"12",sm:"12",md:"6",lg:"4"}},[r("v-card",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer",flat:""}},[r("v-img",{staticClass:"white--text",attrs:{src:"images/proyectos/"+e.img,"lazy-src":"/lazy.png",alt:""+e.title,height:"250",gradient:"to bottom, rgba(16,26,36,0), rgba(16,26,36,1)"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[t._v(" "),r("v-card-title",{staticClass:"align-end fill-height"},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,"4813bc9a",null);e.default=component.exports;l()(component,{VCard:d.a,VCardTitle:m.c,VCol:h.a,VContainer:w.a,VImg:f.a,VProgressCircular:v.a,VRow:y.a})}}]);