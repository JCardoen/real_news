webpackJsonp([1],{JzaK:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{light:""}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=r("VU/8")({name:"App"},a,!1,function(t){r("JzaK")},null,null).exports,o=r("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticClass:"secondary",attrs:{app:""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"white--text ml-3"},[this._v("\n\t\t\t\tMade with\n\t\t\t\t"),e("v-icon",{staticClass:"red--text"},[this._v("favorite")]),this._v("\n\t\t\t\tby "),e("a",{staticClass:"white--text",attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[this._v("Vuetify")]),this._v(" and "),e("a",{staticClass:"white--text",attrs:{href:"https://github.com/vwxyzjn",target:"_blank"}},[this._v("Costa Huang")])],1)])],1)],1)},staticRenderFns:[]},l=r("VU/8")(null,i,!1,null,null,null).exports,c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-xs-center"},[t._m(0),t._v(" "),r("div",{staticClass:"subheading text-xs-center grey--text pt-1 pb-3"},[t._v("Browse recent headlines.")]),t._v(" "),r("v-layout",{attrs:{"justify-space-between":""}},[r("router-link",{staticClass:"body-2 grey--text",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("router-link",{staticClass:"body-2 grey--text",attrs:{to:"/sources"}},[t._v("Sources")]),t._v(" "),r("router-link",{staticClass:"body-2 grey--text",attrs:{to:"/bookmarks"}},[t._v("Bookmarks")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headline"},[this._v("Real "),e("span",{staticStyle:{"font-weight":"bold"}},[this._v("News")])])}]},u=r("VU/8")(null,c,!1,null,null,null).exports,d={name:"IndexCountries",components:{"v-header":u,"v-footer":l},data:()=>({countries:{AR:"Argentina",AU:"Australia",AT:"Austria",BE:"Belgium",BR:"Brazil",BG:"Bulgaria",CA:"Canada",CN:"China",CO:"Colombia",CU:"Cuba",CZ:"Czech Republic",DK:"Denmark",EG:"Egypt",FR:"France",DE:"Germany",GR:"Greece",GB:"United Kingdom",HK:"Hong Kong",HU:"Hungary",IN:"India",ID:"Indonesia",IE:"Ireland",IL:"Israel",IT:"Italy",JP:"Japan",KR:"Korea",LV:"Latvia",LT:"Lithuania",LU:"Luxembourg",MX:"Mexico",MA:"Morocco",NL:"Netherlands",NZ:"New Zealand",NI:"Nicaragua",NG:"Nigeria",NO:"Norway",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russian Federation",SA:"Saudi Arabia",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SE:"Sweden",CH:"Switzerland",TH:"Thailand",TR:"Turkey",UA:"Ukraine",AE:"United Arab Emirates",US:"United States"}}),methods:{showNewsFromCountry:function(t){let e=t.currentTarget.getAttribute("country"),r=Object.keys(this.countries).find(t=>this.countries[t]===e);this.$router.push({name:"ShowCountryNews",params:{country:r}})}}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.countries,function(e){return r("v-flex",{key:e,attrs:{xs12:"",md3:"",m5:""}},[r("v-card",[r("v-card-title",[r("h2",[t._v(t._s(e))])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{country:e,flat:""},on:{click:function(e){t.showNewsFromCountry(e)}}},[t._v("View news")])],1)],1)],1)}))],1)},staticRenderFns:[]},h=r("VU/8")(d,v,!1,null,null,null).exports,f=r("mtWM"),m=r.n(f);const g="https://newsapi.org/",p="apiKey=6c55becfa7364d179d8285d256c376aa";var j={async getTopHeadlines(t){const e=g+"v2/top-headlines?country="+t+"&"+p;return await m.a.get(e).then(t=>t)},async getEverythingFromSource(t){const e=g+"v2/everything?q="+t+"&"+p;return await m.a.get(e).then(t=>t)},getSources:async()=>await m.a.get("https://newsapi.org/v2/sources?apiKey=6c55becfa7364d179d8285d256c376aa").then(t=>t)},w={name:"IndexSources",components:{"v-header":u,"v-footer":l},data:()=>({sources:[],selectedCategory:"",categories:[],filteredSources:[]}),created(){this.getSources()},watch:{selectedCategory:function(){this.filterSources()}},methods:{async getSources(){const t=await j.getSources();this.sources=t.data.sources,this.filteredSources=this.sources;const e=this;this.sources.forEach(t=>{-1==e.categories.indexOf(t.category)&&e.categories.push(t.category)})},showNewsFromSource:function(t){let e=t.currentTarget.getAttribute("id");this.$router.push({name:"ShowSourceNews",params:{source:e}})},filterSources:function(){const t=this;this.filteredSources=this.sources.filter(e=>{if(null!==e.categroy)return e.category.toLowerCase().indexOf(t.selectedCategory.toLowerCase())>=0})}}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-header")],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-select",{attrs:{items:t.categories,label:"Select Category","single-line":""},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}})],1),t._v(" "),r("v-spacer")],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.filteredSources,function(e){return r("v-flex",{key:e.id,attrs:{xs12:"",md4:""}},[r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"grey--text"},[t._v("Language Code: "+t._s(e.language))]),r("br"),t._v(" "),r("span",{staticClass:"grey--text"},[t._v("Country Code: "+t._s(e.country))]),r("br"),t._v(" "),r("div",[t._v(t._s(e.description))])])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{id:e.id,flat:"",color:"orange"},on:{click:function(e){t.showNewsFromSource(e)}}},[t._v("Show News")]),t._v(" "),r("v-btn",{attrs:{href:e.url,flat:"",color:"orange"}},[t._v("Visit site")])],1)],1)],1)}))],1)],1)},staticRenderFns:[]},y=r("VU/8")(w,_,!1,null,null,null).exports,x={name:"Index",components:{"v-header":u,"v-footer":l,"v-countries":h}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-content",[e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs12:""}},[e("v-header")],1),this._v(" "),e("v-countries"),this._v(" "),e("v-footer")],1)],1)],1)},staticRenderFns:[]},k=r("VU/8")(x,b,!1,null,null,null).exports;var A={async bookmarkArticle(t){await m.a.post("http://localhost:8080/bookmark/article",{title:t.title,author:t.author,description:t.description,urlToImage:""==t.urlToImage?"":t.urlToImage,source:t.title,publishedAt:t.publishedAt,url:t.url}).then(console.log("Added article"))},getArticles:async()=>await m.a.get("http://localhost:8080/local/articles").then(t=>t),async removeBookmark(t){await m.a.delete("http://localhost:8080/local/article/"+t).then(console.log("Removed article"))}},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.articles,function(e){return r("v-flex",{key:e.url,attrs:{"fill-height":"",flexbox:"","align-end":"",fluid:"",xs12:"",sm4:""}},[r("v-card",[e.urlToImage?r("v-card-media",{staticClass:"white--text",attrs:{height:"200px",src:e.urlToImage,alt:e.title}},[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"fill-height":""}},[r("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[r("span",{staticClass:"headline"},[t._v(t._s(e.title))])])],1)],1)],1):t._e(),t._v(" "),r("v-card-title",[r("div",[r("span",{staticClass:"grey--text"},[t._v(t._s(t._f("formatDate")(e.publishedAt)))]),r("br"),t._v(" "),r("span",[t._v(t._s(e.source.name))]),r("br"),t._v(" "),r("span",[t._v(t._s(e.description))])])]),t._v(" "),r("v-card-actions",[void 0!==t.buttonText?r("v-btn",{attrs:{bookmarked:!1,id:e._id,url:e.url,flat:"",color:"orange"},on:{click:function(e){t.handler(e)}}},[t._v(t._s(t.buttonText))]):r("v-btn",{attrs:{bookmarked:!1,id:e._id,url:e.url,flat:"",color:"orange"},on:{click:function(e){t.handler(e)}}},[t._v("Bookmark")]),t._v(" "),r("v-btn",{attrs:{href:e.url,flat:"",color:""}},[t._v("View article")])],1)],1)],1)}))],1)},staticRenderFns:[]},S=r("VU/8")({props:["articles","handler","buttonText"]},C,!1,null,null,null).exports,T={name:"ShowCountryNews",components:{"v-header":u,"v-newsgrid":S,"v-footer":l},data:()=>({search:"",buttonText:"Remove Bookmark",filteredArticles:[],articles:[]}),watch:{search:function(){this.filterArticles()}},created(){this.getBookmarks()},methods:{handler:async function(t){let e=t.currentTarget.getAttribute("id"),r=this.filteredArticles.filter(t=>t._id==e);this.filteredArticles.splice(this.filteredArticles.indexOf(r[0]),1),await A.removeBookmark(e)},async getBookmarks(){const t=await A.getArticles();this.articles=t.data.articles,this.filteredArticles=this.articles},filterArticles:function(){const t=this;this.filteredArticles=this.articles.filter(function(e){if(null!==e.description)return e.description.toLowerCase().indexOf(t.search.toLowerCase())>=0})}},computed:{}},z={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-header")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("h1",[t._v("International news")])]),t._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{type:"text",label:"Filter items"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-spacer"),t._v(" "),t.filteredArticles.length>0?r("v-newsgrid",{attrs:{articles:t.filteredArticles,handler:t.handler,buttonText:t.buttonText}}):r("v-flex",{attrs:{xs12:"",md12:""}},[r("p",[t._v("No articles found")])]),t._v(" "),r("v-footer")],1)],1)],1)},staticRenderFns:[]},N=r("VU/8")(T,z,!1,null,null,null).exports,F={name:"ShowCountryNews",components:{"v-newsgrid":S,"v-header":u,"v-footer":l},data:()=>({search:"",filteredArticles:[],articles:[]}),watch:{search:function(){this.filterArticles()}},created(){this.getTopHeadlines()},methods:{handler:function(t){const e=this.filteredArticles;let r=t.currentTarget.getAttribute("url"),s=t.currentTarget.getAttribute("id");if(t.currentTarget.getAttribute("bookmarked"))A.removeBookmark(s),t.currentTarget.querySelector(".btn__content").innerHTML="Bookmark";else{let s=e.filter(t=>t.url==r);A.bookmarkArticle(s[0]),t.currentTarget.setAttribute("bookmarked",!0),t.currentTarget.querySelector(".btn__content").innerHTML="Remove Bookmark"}},async getTopHeadlines(){const t=await j.getTopHeadlines(this.$route.params.country);this.articles=t.data.articles,this.filteredArticles=this.articles,console.log(t.data)},filterArticles:function(){const t=this;this.filteredArticles=this.articles.filter(e=>{if(console.log(e),null!==e.description)return e.description.toLowerCase().indexOf(t.search.toLowerCase())>=0})}}},E={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-header")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("h1",[t._v("International news")])]),t._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{type:"text",label:"Filter items based on text"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-spacer"),t._v(" "),t.articles?r("v-newsgrid",{attrs:{articles:t.filteredArticles,handler:t.handler}}):r("p",[t._v("No articles found")]),t._v(" "),r("v-footer")],1)],1)],1)},staticRenderFns:[]},R=r("VU/8")(F,E,!1,null,null,null).exports,B={name:"ShowSourceNews",components:{"v-newsgrid":S,"v-header":u,"v-footer":l},data:()=>({source:"",search:"",filteredArticles:[],articles:[]}),watch:{search:function(){this.filterArticles()}},created(){this.getEverythingFromSource()},methods:{handler:function(t){const e=this.filteredArticles;let r=t.currentTarget.getAttribute("url"),s=t.currentTarget.getAttribute("id");if(t.currentTarget.getAttribute("bookmarked"))A.removeBookmark(s),t.currentTarget.querySelector(".btn__content").innerHTML="Bookmark";else{let s=e.filter(t=>t.url==r);A.bookmarkArticle(s[0]),t.currentTarget.setAttribute("bookmarked",!0),t.currentTarget.querySelector(".btn__content").innerHTML="Remove Bookmark"}},async getEverythingFromSource(){const t=await j.getEverythingFromSource(this.$route.params.source);this.source=this.$route.params.source,this.articles=t.data.articles,this.filteredArticles=this.articles},filterArticles:function(){const t=this;this.filteredArticles=this.articles.filter(e=>{if(null!==e.description)return e.description.toLowerCase().indexOf(t.search.toLowerCase())>=0})}}},L={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-header")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs12:"",md12:""}},[r("h1",[t._v("News from "+t._s(t.source))])]),t._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{type:"text",label:"Filter items"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-newsgrid",{attrs:{articles:t.filteredArticles,handler:t.handler}}),t._v(" "),r("v-footer")],1)],1)],1)},staticRenderFns:[]},U=r("VU/8")(B,L,!1,null,null,null).exports;s.a.use(o.a);var H=new o.a({routes:[{path:"/",name:"Index",component:k},{path:"/sources",name:"Sources",component:y},{path:"/news/:source",name:"ShowSourceNews",component:U,props:!0},{path:"/country/:country",name:"ShowCountryNews",component:R,props:!0},{path:"/bookmarks",name:"Bookmarks",component:N}]}),I=r("PJh5"),O=r.n(I),V=r("3EgV"),q=r.n(V);s.a.use(q.a),s.a.config.productionTip=!1,s.a.filter("formatDate",function(t){if(t)return O()(String(t)).format("MM/DD/YYYY hh:mm")}),new s.a({el:"#app",router:H,components:{App:n},template:"<App/>"})},uslO:function(t,e,r){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return r(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.8e9840899c660bdff28f.js.map