webpackJsonp([2],{"1SGZ":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card")],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"47bd":function(t,e,n){"use strict";var a=n("bpFM"),i=n("OyCH"),r=n("VU/8"),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},"7eQW":function(t,e,n){"use strict";var a=n("47bd");e.a={name:"appHeader",components:{"app-sidebar":a.a},data:function(){return{drawer:!1}}}},Fs8J:function(t,e,n){"use strict";var a=n("XaKJ"),i=n("oye5");e.a={components:{"app-artist":a.a,"app-playlist":i.a},data:function(){return{}},props:{source:String}}},IcnI:function(t,e,n){"use strict";var a=n("NYxO"),i=n("7+uW"),r=n("rAjz");i.a.use(a.a),e.a=new a.a.Store({modules:{playlist:r.a}})},JHZ2:function(t,e,n){"use strict";function a(t){n("ly7s")}var i=n("VDU1"),r=n("Vs1x"),s=n("VU/8"),l=a,o=s(i.a,r.a,!1,l,null,null);e.a=o.exports},M93x:function(t,e,n){"use strict";function a(t){n("oXAS")}var i=n("xJD8"),r=n("iHSI"),s=n("VU/8"),l=a,o=s(i.a,r.a,!1,l,null,null);e.a=o.exports},Mitt:function(t,e,n){"use strict";var a=n("7eQW"),i=n("hOYO"),r=n("VU/8"),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("3EgV"),r=n.n(i),s=n("M93x"),l=n("YaEn"),o=n("IcnI");n.e(0).then(n.bind(null,"7zck")),a.a.config.productionTip=!1,a.a.use(r.a),new a.a({el:"#app",router:l.a,store:o.a,template:"<App/>",components:{App:s.a}})},OyCH:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e,a){return[e.heading?n("v-layout",{key:a,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n          "+t._s(e.heading)+"\n        ")]):t._e()],1),t._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[n("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?n("v-list-group",{attrs:{"no-action":""},model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"item.model"}},[n("v-list-tile",{attrs:{slot:"item"},on:{click:function(t){}},slot:"item"},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.model?e.icon:e["icon-alt"]))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1),t._v(" "),t._l(e.children,function(e,a){return n("v-list-tile",{key:a,on:{click:function(t){}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)})],2):n("v-list-tile",{on:{click:function(t){}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n          "+t._s(e.text)+"\n        ")])],1)],1)]})],2)},i=[],r={render:a,staticRenderFns:i};e.a=r},QaeO:function(t,e,n){"use strict";e.a={name:"Artist",data:function(){return{items:[]}}}},VDU1:function(t,e,n){"use strict";var a=n("Dd8w"),i=n.n(a),r=n("NYxO"),s=n("k9Ku");n.n(s);e.a={name:"Player",data:function(){return{currentSeekPercent:0,currentSeek:0}},computed:i()({},Object(r.c)(["allPlayList","currentIndex","isPlay"])),mounted:function(){var t=this;setInterval(function(){var e=l.seek()||0;t.currentSeek=e,t.currentSeekPercent=e/l._duration*100||0},200),o()},watch:{isPlay:function(t,e){t?l.play():l.pause()}},filters:{minutes:function(t){if(!t||0==t||t instanceof s.Howl)return"";var e=parseInt(t/60+""),n=parseInt(t%60+"");return e=e<10?"0"+e:e,n=n<10?"0"+n:n,t=e+":"+n}},methods:i()({play:function(){this.playSound(this.currentIndex)},pause:function(){this.pauseSound()}},Object(r.b)(["getAllPlayList","playSound","pauseSound","nextSound","prevSound"]))};var l=new s.Howl({src:["https://freemusicarchive.org/file/music/ccCommunity/Dee_Yan-Key/post_bellum/Dee_Yan-Key_-_06_-_Post_Bellum.mp3"]});l.play();var o=function(){function t(){requestAnimationFrame(t),e.getByteTimeDomainData(l),r.fillStyle="rgb(255, 255, 255)",r.fillRect(0,0,n,a),r.lineWidth=2,r.strokeStyle="rgb(239, 83, 80)",r.beginPath();for(var o=1*n/s,c=0,u=0;u<s;u++){var v=l[u]/128,d=v*a/2;0===u?r.moveTo(c,d):r.lineTo(c,d),c+=o}r.lineTo(i.width,i.height/2),r.stroke()}var e=Howler.ctx.createAnalyser(),n=48,a=48;Howler.masterGain.connect(e),e.connect(Howler.ctx.destination);var i=document.getElementById("soundView"),r=i.getContext("2d");e.fftSize=2048;var s=e.frequencyBinCount,l=new Uint8Array(s);r.clearRect(0,0,n,a),t()}},Vs1x:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{tile:""}},[n("v-progress-linear",{staticClass:"my-0",attrs:{height:"3",value:t.currentSeekPercent}}),t._v(" "),n("v-list",[n("v-list-tile",[n("canvas",{attrs:{id:"soundView",width:"48",height:"48"}}),t._v(" "),t.allPlayList[t.currentIndex]?n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.allPlayList[t.currentIndex].title))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(t.allPlayList[t.currentIndex].subtitle)+" "+t._s(t._f("minutes")(t.currentSeek)))])],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.prevSound()}}},[n("v-icon",[t._v("fast_rewind")])],1)],1),t._v(" "),n("v-list-tile-action",{class:{"mx-5":t.$vuetify.breakpoint.mdAndUp}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticStyle:{"margin-top":"-2px"},attrs:{icon:""},on:{click:function(e){t.play()}}},[n("v-icon",[t._v("play_arrow")])],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],staticStyle:{"margin-top":"-2px"},attrs:{icon:""},on:{click:function(e){t.pause()}}},[n("v-icon",[t._v("pause")])],1)],1),t._v(" "),n("v-list-tile-action",{class:{"mr-3":t.$vuetify.breakpoint.mdAndUp}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.nextSound()}}},[n("v-icon",[t._v("fast_forward")])],1)],1)],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"W+FH":function(t,e,n){"use strict";var a=[{title:"Blood And Iron",subtitle:"Bathory",time:"04:35",avatar:"http://avatars.yandex.net/get-music-content/42108/652d80b7.a.278291-1/400x400"},{title:"Heralder",subtitle:"Falkenbach",time:"03:15",avatar:"/static/player_default_cover.png"},{title:"The Naglfar Saga: Sailing Into Eternity",subtitle:"Black Messiah",time:"04:12",avatar:"http://avatars.yandex.net/get-music-content/34131/3ec738e9.a.234071-1/400x400"},{title:"Oathbreaker",subtitle:"Battlesoul",time:"02:12",avatar:"/static/player_default_cover.png"},{title:"Victory Song",subtitle:"Ensiferum",time:"03:12",avatar:"http://avatars.yandex.net/get-music-content/33216/09a70ba7.a.3379477-1/400x400"},{title:"The Mistress Of Wisdom",subtitle:"Ereb Altor",time:"03:45",avatar:"http://avatars.yandex.net/get-music-content/34131/ad6c4644.a.647543-1/400x400"}];e.a={getList:function(t){setTimeout(function(){return t(a)},100)}}},XaKJ:function(t,e,n){"use strict";var a=n("QaeO"),i=n("1SGZ"),r=n("VU/8"),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),r=n("lO7g");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:r.a}]})},amPc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-playlist")],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},bpFM:function(t,e,n){"use strict";e.a={name:"appSidebar",data:function(){return{items:[{icon:"favorite_border",text:"Favorites"},{icon:"history",text:"History"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Labels",model:!0,children:[{icon:"add",text:"Create label"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"}]},{icon:"settings",text:"Settings"},{icon:"help",text:"Help"},{icon:"phonelink",text:"App downloads"}]}}}},hOYO:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("app-sidebar")],1),t._v(" "),n("v-toolbar",{attrs:{color:"white darken-3",app:"","clipped-left":"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3",style:t.$vuetify.breakpoint.smAndUp?"width: 300px;text-align: left; min-width: 250px":"min-width: 72px"},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("span",{staticClass:"hidden-xs-only"},[t._v("Music")])],1),t._v(" "),n("v-text-field",{staticStyle:{"max-width":"500px","min-width":"128px"},attrs:{light:"",solo:"","prepend-icon":"search",placeholder:"Search"}}),t._v(" "),n("div",{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("favorite")])],1)],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},iHSI:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",[n("router-view")],1)],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},j5Ol:function(t,e){},km2b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[t.allPlayList[t.currentIndex]?n("v-card",[n("v-card-media",{staticClass:"white--text",attrs:{height:"300px",src:t.allPlayList[t.currentIndex].avatar}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline avatar-text"},[t._v(t._s(t.allPlayList[t.currentIndex].subtitle))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"avatar-text"},[t._v(t._s(t.allPlayList[t.currentIndex].title))])])],1)],1)],1),t._v(" "),n("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.allPlayList,function(e,a){return n("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(e){t.playSound(a)}}},[n("v-list-tile-avatar",[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex==a&&t.isPlay,expression:"currentIndex == index && isPlay"}],staticClass:"red lighten-1 white--text"},[t._v("pause")]),t._v(" "),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex==a&&!t.isPlay,expression:"currentIndex == index && !isPlay"}],staticClass:"red lighten-1 white--text"},[t._v("play_arrow")]),t._v(" "),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex!=a,expression:"currentIndex != index"}],staticClass:"grey lighten-1 white--text"},[t._v("play_arrow")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),n("v-list-tile-action",[t._v("\r\n              "+t._s(e.time)+"\r\n              ")])],1)})),t._v(" "),n("app-player")],1):t._e()],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},lO7g:function(t,e,n){"use strict";var a=n("Fs8J"),i=n("amPc"),r=n("VU/8"),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},ly7s:function(t,e){},oXAS:function(t,e){},oye5:function(t,e,n){"use strict";function a(t){n("j5Ol")}var i=n("tFGr"),r=n("km2b"),s=n("VU/8"),l=a,o=s(i.a,r.a,!1,l,null,null);e.a=o.exports},rAjz:function(t,e,n){"use strict";var a=n("W+FH"),i={all:[],currentIndex:0,isPlay:!0},r={getAllPlayList:function(t){var e=t.commit;a.a.getList(function(t){e("recieve_list",t)})},playSound:function(t,e){var n=t.commit,a=t.state;a.currentIndex==e&&a.isPlay?n("pause_sound"):n("play_sound",e)},pauseSound:function(t){(0,t.commit)("pause_sound")},nextSound:function(t){var e=t.commit,n=t.state,a=0;n.all.length-1>n.currentIndex&&(a=n.currentIndex+1),e("play_sound",a)},prevSound:function(t){var e=t.commit,n=t.state,a=n.all.length-1;n.currentIndex>=1&&(a=n.currentIndex-1),e("play_sound",a)}},s={recieve_list:function(t,e){t.all=e},play_sound:function(t,e){t.isPlay=!0,t.currentIndex=e},pause_sound:function(t){t.isPlay=!1}},l={allPlayList:function(t){return t.all},currentIndex:function(t){return t.currentIndex},isPlay:function(t){return t.isPlay}};e.a={state:i,actions:r,mutations:s,getters:l}},tFGr:function(t,e,n){"use strict";var a=n("Dd8w"),i=n.n(a),r=n("NYxO"),s=n("JHZ2");e.a={name:"Todo",components:{"app-player":s.a},mounted:function(){this.getAllPlayList()},computed:i()({},Object(r.c)(["allPlayList","currentIndex","isPlay"])),data:function(){return{items:[]}},methods:i()({},Object(r.b)(["getAllPlayList","playSound"]))}},xJD8:function(t,e,n){"use strict";var a=n("Mitt");e.a={name:"app",components:{"app-header":a.a}}}},["NHnr"]);
//# sourceMappingURL=app.b15ecd674a04180be44d.js.map