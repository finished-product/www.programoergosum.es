(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{588:function(t,e,n){var content=n(592);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("7f32a972",content,!0,{sourceMap:!1})},591:function(t,e,n){"use strict";n(588)},592:function(t,e,n){(e=n(12)(!1)).push([t.i,'.DynamicMarkdown{font-size:20px}.DynamicMarkdown h1{padding-top:10px;font-size:1.2em;font-weight:600}.DynamicMarkdown h1,.DynamicMarkdown h2{margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid #f0f0f0}.DynamicMarkdown h2{margin-top:10px;font-size:1.7rem;font-weight:700}.DynamicMarkdown h3{margin-top:40px;margin-bottom:20px;font-size:1.5rem;font-weight:600}.DynamicMarkdown h4{margin-top:30px;margin-bottom:20px;font-size:1.2rem;font-weight:500}.DynamicMarkdown br{margin:20px 0}.DynamicMarkdown a{text-decoration:none;border-bottom:1px dotted #000;color:#333}.DynamicMarkdown a:hover{color:#ae4119}.DynamicMarkdown p{margin:0 0 30px}.DynamicMarkdown p strong{font-weight:600}.DynamicMarkdown p em{font-style:italic}.DynamicMarkdown ul{display:block;margin:0 0 30px 30px;padding:0}.DynamicMarkdown ul li{display:block;margin-bottom:10px;list-style:none}.DynamicMarkdown ul li:before{padding:0 15px 0 0;content:"•"}.DynamicMarkdown blockquote{margin:0 0 30px;padding:10px 10px 10px 20px;border-left:3px solid #999;background:#f0f0f0;color:#1e2125;font-style:italic;font-size:1.1rem}.DynamicMarkdown blockquote p{margin:0}.DynamicMarkdown blockquote p code{padding:0 5px;line-height:1rem}.DynamicMarkdown .twitter-tweet{margin:0 auto}.DynamicMarkdown code{padding:1px 3px;background:#f0f0f0;color:#1e2125;font-weight:400;border-radius:5px;font-family:"Courier New",Courier,monospace;border-radius:3px}.DynamicMarkdown pre{display:block;margin:0 0 30px;font-size:18px;white-space:pre-wrap;word-wrap:pre-wrap}.DynamicMarkdown pre code{display:block;position:relative;padding:20px;border-radius:2px 2px 0 0}.DynamicMarkdown pre code.language-sh{border:3px solid #555;border-top:30px solid #555;background:#1e2125;color:#fff}.DynamicMarkdown pre code.language-sh:before{top:-18px;left:15px;width:7px;height:7px;background:#777;border-radius:50%;box-shadow:0 0 0 3px #777,24px 0 0 3px #777,48px 0 0 3px #777}.DynamicMarkdown pre code.language-python{border:3px solid #daaa00;border-top:30px solid #daaa00}.DynamicMarkdown pre code.language-python:before{content:"Python";color:#f0f0f0}.DynamicMarkdown pre code.language-arduino{border:3px solid #00979d;border-top:30px solid #00979d}.DynamicMarkdown pre code.language-arduino:before{content:"Arduino";color:#f0f0f0}.DynamicMarkdown pre code.language-html{border:3px solid #616161;border-top:30px solid #616161}.DynamicMarkdown pre code.language-html:before{content:"HTML";color:#f0f0f0}.DynamicMarkdown pre code:before{display:block;position:absolute;top:-25px;left:15px;content:""}.DynamicMarkdown pre code:after{content:none}.DynamicMarkdown table{margin:0 0 30px;font-size:1rem;line-height:1.5rem}.DynamicMarkdown table td,.DynamicMarkdown table th,.DynamicMarkdown table tr{padding:10px;border:1px solid #f0f0f0}.DynamicMarkdown table th{background:#f0f0f0}.DynamicMarkdown figure{margin:20px auto 50px;text-align:center}.DynamicMarkdown figure img{max-width:100%}.DynamicMarkdown figure figcaption{text-align:center;font-size:14px;font-weight:300}.DynamicMarkdown hr{display:block;margin:60px 0;border:1px solid #f0f0f0}.DynamicMarkdown .iframe{overflow:hidden;padding-top:56.25%;position:relative;margin:20px auto 50px;border:20px solid #333;border-radius:20px}.DynamicMarkdown .iframe iframe{position:absolute;left:0;top:0;height:100%;width:100%;margin:0;border:0}.DynamicMarkdown .youtube{position:relative;width:100%;min-height:150px;margin:20px auto 50px;border:20px solid #333;border-radius:20px}.DynamicMarkdown .youtube a{position:relative;display:block}.DynamicMarkdown .youtube a img{display:block;width:100%}.DynamicMarkdown .youtube a i{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:6rem;color:#e52d27}.DynamicMarkdown .youtube a i:hover{color:#b31217}@media only screen and (max-width:960px){.DynamicMarkdown ul{margin:0 0 30px}}@media only screen and (max-width:600px){.DynamicMarkdown{font-size:16px}.DynamicMarkdown ul{margin:0 0 30px}.DynamicMarkdown h1{font-size:1.6em}.DynamicMarkdown h2{font-size:1.5rem}.DynamicMarkdown h3{font-size:1.4rem}.DynamicMarkdown h4{font-size:1.2rem}}',""]),t.exports=e},593:function(t,e,n){"use strict";n(51),n(29),n(31);var r=n(594),o=n.n(r),c=n(595),l=n.n(c),d=n(598),m=n.n(d),f=(n(599),{name:"Content",components:{},props:{raw:{type:String,required:!0},cdn:{type:String,default:""}},computed:{renderer:function(){var t=this.cdn,e=o()("commonmark",{html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight:function(t,e){if(e&&m.a.getLanguage(e))try{return m.a.highlight(e,t).value}catch(t){}return""}}).enable(["table"]);return e.use(l.a,{anchorLink:!1}),e.renderer.rules.image=function(e,n,r,o,c){var l=e[n],d="",m="";return l.attrs=l.attrs.map((function(e){return"src"===e[0]&&("http"!==e[1].substring(0,4)&&(e[1]="".concat(t).concat(e[1])),d=e[1]),"title"===e[0]&&""!==e[1]&&(m=e[1]),e})),'<figure><img class="lazy" src="'.concat("/lazy.png",'" data-src="').concat(d,'" alt="').concat(m,'"><figcaption>').concat(m,"</figcaption></figure>")},e.renderer.rules.html_block=function(t,e,n,r,o){var content=t[e].content;if(content.includes("youtube.com/embed")){var code=content.split("youtube.com/embed/")[1].split('"')[0];return'<div class="youtube"><a href="https://youtube.com/embed/'.concat(code,'" target="_blank"><img src="https://i.ytimg.com/vi_webp/').concat(code,'/maxresdefault.webp" /><i class="v-icon mdi mdi-youtube"></i></a></div>')}return t[e].content},e.renderer.rules.link_open=function(t,e,n,r,o){return'<a target="_blank" rel="nofollow noopener noreferrer"'+o.renderAttrs(t[e])+">"},e.renderer.rules.link_close=function(){return'<i aria-hidden="true" class="v-icon notranslate pl-1 mdi mdi-open-in-new" style="font-size:12px;"></i></a>'},e.render(this.raw)}},mounted:function(){var t=[].slice.call(document.querySelectorAll(".DynamicMarkdown img.lazy"));if("IntersectionObserver"in window){var e=new IntersectionObserver((function(t,n){t.forEach((function(t){if(t.isIntersecting){var n=t.target;n.src=n.dataset.src,n.classList.remove("lazy"),e.unobserve(n)}}))}));t.forEach((function(t){e.observe(t)}))}}}),h=(n(591),n(16)),component=Object(h.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"DynamicMarkdown",domProps:{innerHTML:this._s(this.renderer)}})}),[],!1,null,null,null);e.a=component.exports},597:function(t,e,n){"use strict";n(410),n(193);var r=n(594),o=n.n(r),c=n(595),l=n.n(c),d={name:"Toc",props:{raw:{type:String,required:!0},title:{type:String,default:null}},data:function(){return{menu:null,currentAnchor:null,currentOffset:0}},created:function(){var t=this,e=o()("commonmark",{html:!0,linkify:!0});e.use(l.a,{anchorClassName:"toc-anchor",tocCallback:function(e,n,r){r&&(t.menu=n.filter((function(t){return 2===t.level})))}}),e.render(this.raw)},methods:{goTo:function(t,e){this.$vuetify.goTo("#".concat(t),{duration:1e3,offset:30,easing:"easeInOutCubic"})},onScroll:function(){var t=this;this.currentOffset=window.pageYOffset||document.documentElement.offsetTop;var i=this.menu.findIndex((function(e){return document.querySelector("#".concat(e.anchor)).offsetTop>t.currentOffset}));i=-1===i?this.menu.length:i,this.currentAnchor=i<=0?null:this.menu[i-1].anchor}}},m=n(16),f=n(30),h=n.n(f),w=n(180),y=n(109),v=n(63),x=n(182),k=n(117),M=n.n(k),D=n(83),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"pa-0",attrs:{shaped:"",tile:"",color:"transparent"}},[n("v-list-item-group",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[n("v-list-item",{attrs:{disabled:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold body-1"},[t._v("\n          "+t._s(t.title)+"\n        ")])],1)],1)],1),t._v(" "),n("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.menu,(function(e){return[n("v-list-item",{key:e.anchor,class:[{"v-list-item--active":t.currentAnchor===e.anchor}],on:{click:function(n){return t.goTo(e.anchor,n)}}},[n("v-list-item-content",{attrs:{id:e.anchor}},[n("v-list-item-title",{staticClass:"font-weight-regular body-2",domProps:{textContent:t._s(e.content)}})],1)],1)]}))],2)],1)}),[],!1,null,"071ba61a",null);e.a=component.exports;h()(component,{VList:w.a,VListItem:y.a,VListItemContent:v.a,VListItemGroup:x.a,VListItemTitle:v.c}),M()(component,{Scroll:D.b})},603:function(t,e,n){var content=n(613);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("21edf7e0",content,!0,{sourceMap:!1})},612:function(t,e,n){"use strict";n(603)},613:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-card[data-v-36f021d2]{max-width:220px;margin:0 auto}",""]),t.exports=e},619:function(t,e,n){"use strict";var r={props:{card:{type:Object,required:!0}}},o=(n(612),n(16)),c=n(30),l=n.n(c),d=n(175),m=n(107),f=n(174),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-3 text-center"},[n("v-avatar",{attrs:{size:"110"}},[n("VImageLazy",{attrs:{src:t.card.image,title:t.card.name,"lazy-src":"/lazy-user.png"}})],1),t._v(" "),n("p",{staticClass:"my-3"},[t._v("\n    "+t._s(t.card.name)+"\n  ")]),t._v(" "),n("p",{staticClass:"my-3 font-weight-light subtitle-2"},[t._v("\n    "+t._s(t.card.description)+"\n  ")]),t._v(" "),t.card.social.url?n("v-btn",{attrs:{href:t.card.social.url,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Url"}},[n("v-icon",{attrs:{size:"18",color:"#000"}},[t._v("mdi-link")])],1):t._e(),t._v(" "),t.card.social.twitter?n("v-btn",{attrs:{href:t.card.social.twitter,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"}},[n("v-icon",{attrs:{size:"18",color:"#1da1f2"}},[t._v("mdi-twitter")])],1):t._e(),t._v(" "),t.card.social.github?n("v-btn",{attrs:{href:t.card.social.github,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"}},[n("v-icon",{attrs:{size:"18",color:"#333"}},[t._v("mdi-github-circle")])],1):t._e()],1)}),[],!1,null,"36f021d2",null),h=component.exports;l()(component,{VAvatar:d.a,VBtn:m.a,VIcon:f.a});var w={components:{Card:h},data:function(){return{volunteers:[{name:"Miguel Ángel Abellán",image:"/images/voluntarios/migueabellan.png",description:"Porque disfruto programando y tengo la suerte de aprender todos los días.",social:{url:"https://migueabellan.github.io",twitter:"https://twitter.com/migueabellan",github:"https://github.com/migueabellan"}},{name:"Carmen B. Martínez",image:"/images/voluntarios/carmenb_mg.jpg",description:"Psicóloga en constante reinvención. De todas las personas se aprende algo nuevo.",social:{url:"",twitter:"https://twitter.com/carmenb_mg",github:""}},{name:"Miguel Manzano",image:"/images/voluntarios/mmanzano.jpg",description:"Aporrea el teclado, eso sí, primero hace un commit por si los bytes.",social:{url:"",twitter:"https://twitter.com/mmanzano",github:"https://github.com/mmanzano"}},{name:"Antonio García",image:"",description:"Productor de televisión al que le apasiona la enseñanza de la programación.",social:{url:"",twitter:"",github:""}}]}}},y=n(571),v=n(572),x=n(573),k=Object(o.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-3"},[t._v("Mentores / Voluntarios")])]),t._v(" "),t._l(t.volunteers,(function(t,e){return n("v-col",{key:e,staticClass:"pa-2",attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"3"}},[n("Card",{attrs:{card:t}})],1)})),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"my-6"},[n("p",[t._v("\n          Buscamos personas que quieran\n          "),n("b",[t._v("compartir sus conocimientos desinteresadamente")]),t._v(". Personas\n          interesadas en aportar su experiencia y tiempo en los talleres\n          gratuitos que hacemos en la Región de Murcia. ¿Te apetece?\n        ")]),t._v(" "),n("v-btn",{attrs:{to:"/contacto",nuxt:"",tile:"",outlined:""}},[t._v("\n          Hazte voluntario\n        ")])],1)])],2)],1)}),[],!1,null,"ad684524",null);e.a=k.exports;l()(k,{VBtn:m.a,VCol:y.a,VContainer:v.a,VRow:x.a})},920:function(t,e,n){"use strict";n.r(e);n(82),n(81);var r=n(24),o=n(106),c=n.n(o),l=n(593),d=n(597),m=n(619),f={components:{Content:l.a,Toc:d.a,Volunteers:m.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.env,n=t.store,r=t.params,o=n.state.actividades.list.find((function(t){return t.alias===r.alias})),l="".concat(n.state.actividades.repo_raw,"/").concat(o.alias),d="".concat(n.state.actividades.repo_raw,"/").concat(o.alias,"/README.md"),m="".concat(n.state.actividades.repo_edit,"/").concat(o.alias,"/README.md"),e.next=7,c.a.get(d).then((function(t){return t.data}));case 7:return f=e.sent,e.abrupt("return",{title:o.title,description:o.description,image:"".concat(l,"/").concat(o.image),date:o.date,tags:o.tags,editLink:m,raw:f,cdn:"".concat(l,"/"),breadcrumbs:[{text:"Actividades",disabled:!1,to:"/actividades"},{text:o.title,disabled:!0,to:""}]});case 9:case"end":return e.stop()}}),e)})))()},computed:{background:function(){return this.$vuetify.theme.isDark?"grey darken-3":"grey lighten-3"}},validate:function(t){var e=t.store,n=t.params;return e.state.actividades.list.find((function(t){return t.alias===n.alias}))},head:function(){var title=this.title,t=this.description,image=this.image,e=this.date,n=this.tags;return{title:title,titleTemplate:"Actividades - %s",meta:[{hid:"description",name:"description",content:t},{hid:"keywords",name:"keywords",content:n},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:t},{hid:"o:i",property:"og:image",content:image},{hid:"o:ty",property:"og:type",content:"article"},{property:"og:article:published_time",content:e.cdate},{property:"og:article:modified_time",content:e.mdate},{property:"og:article:section",content:"Extraescolares"},{property:"og:article:tag",content:n},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:t},{hid:"t:i",name:"twitter:image",content:image}]}}},h=n(16),w=n(30),y=n.n(w),v=n(571),x=n(572),k=n(573),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_alias"},[n("Title",{attrs:{title:t.title,description:t.description,image:t.image,breadcrumbs:t.breadcrumbs}}),t._v(" "),n("v-container",[n("v-row",[n("v-col",{attrs:{xs:"12",sm:"12",md:"9",lg:"9",xl:"9"}},[n("Content",{attrs:{raw:t.raw,cdn:t.cdn}})],1),t._v(" "),n("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"3",lg:"3",xl:"3"}},[n("div",{staticClass:"sticky-top"},[n("Toc",{attrs:{raw:t.raw}})],1)])],1)],1),t._v(" "),n("section",{staticClass:"mt-12 py-12",class:t.background},[n("Volunteers")],1)],1)}),[],!1,null,"5dd6e8ba",null);e.default=component.exports;y()(component,{VCol:v.a,VContainer:x.a,VRow:k.a})}}]);