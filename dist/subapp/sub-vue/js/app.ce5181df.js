(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["qiankun-app"]=e():t["qiankun-app"]=e()})(window,(function(){return function(t){function e(e){for(var o,i,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"71085fbc"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp_qiankun"]=window["webpackJsonp_qiankun"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;return a.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("4b77")},"2af3":function(t,e,n){"use strict";n("a5ad")},"2b29":function(t,e,n){"use strict";n("4d75")},"4b77":function(t,e,n){},"4d75":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"bootstrap",(function(){return V})),n.d(e,"mount",(function(){return z})),n.d(e,"unmount",(function(){return X}));var o=n("799e"),r=(n("f556"),n("cc43"),n("4d0e"),n("7f51"),n("e186"),n("2c45"),n("1fbe"),n("f6be"),n("f5a1"),n("7a13"),n("f95d"),n("430a")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1),n("div",[n("p",[t._v(" 当前处于"),n("code",[t._v(t._s(t.isInQiankun?"qiankun":"独立运行"))]),t._v("环境 ")]),n("p",[t._v(" vuex的`global module`的user state："),n("code",[t._v(" "+t._s(JSON.stringify(t.user)))])])]),n("div",{staticClass:"btns"},[t.isInQiankun?[n("button",{on:{click:t.gotoSubVen}},[t._v("从当前子应用内跳转到`sub-ven`子应用")]),n("button",{on:{click:t.openSubVue}},[t._v("独立打开sub-vue子应用")])]:t._e(),n("button",{on:{click:t.changeUsername}},[t._v("改变全局的用户名称")]),n("div",{directives:[{name:"per",rawName:"v-per",value:t.$getPer("2"),expression:"$getPer('2')"}]},[t._v("按钮权限")]),n("div",{directives:[{name:"per",rawName:"v-per",value:t.$getPer("11"),expression:"$getPer('11')"}]},[t._v("其他权限")])],2),n("router-view")],1)},i=[],u=n("6afb"),c=n("7736"),s={computed:Object(u["a"])(Object(u["a"])({},Object(c["c"])("global",{user:function(t){return t.user}})),{},{isInQiankun:function(){return window.__POWERED_BY_QIANKUN__}}),components:{},methods:Object(u["a"])(Object(u["a"])({},Object(c["b"])("global",["setGlobalState"])),{},{gotoSubVen:function(){this.$router.push({path:"/micrApp/sub-ven"})},changeUsername:function(){this.setGlobalState({user:{name:"李四"+Math.round(100*Math.random())}})},openSubVue:function(){this.isInQiankun?window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__):alert("当前已经是单独运行的子应用")}})},l=s,p=(n("034f"),n("cba8")),f=Object(p["a"])(l,a,i,!1,null,null,null),d=f.exports,b=(n("b0a9"),n("2ee7"),n("ac56")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},v=[],_={name:"Home",components:{}},h=_,g=Object(p["a"])(h,m,v,!1,null,null,null),w=g.exports,y=n("9224");r["a"].use(b["a"]);var O=window.__POWERED_BY_QIANKUN__?"/micrApp/".concat(y["a"]):"/",S=[{path:O,name:"Home",component:w},{path:"".concat(O,"/about"),name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],j=S;r["a"].use(c["a"]);var k=new c["a"].Store({state:{},mutations:{},actions:{},modules:{}});function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t&&t.hasModule){var n=e.getGlobalState&&e.getGlobalState()||{menu:[],user:{}};if(t.hasModule("global"))t.dispatch("global/initGlobalState",n);else{var o={namespaced:!0,state:n,actions:{setGlobalState:function(t,e){var n=t.commit;n("setGlobalState",e),n("emitGlobalState",e)},initGlobalState:function(t,e){var n=t.commit;n("setGlobalState",e)}},mutations:{setGlobalState:function(t,e){t=Object.assign(t,e)},emitGlobalState:function(t){e.setGlobalState&&e.setGlobalState(t)}}};t.registerModule("global",o)}}}var P=x;function E(t,e){var n=e.value;console.log(n,"权限"),n||t.parentNode&&t.parentNode.removeChild(t)}var N={inserted:function(t,e){E(t,e)},update:function(t,e){E(t,e)}},$={per:N},A=(n("1248"),n("fd7d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_box",class:{isAggary:"no_aggary"===t.bgc},on:{click:t.searchBtn}},[n("div",{staticClass:"btn_inner_box"},[n("p",[t._v(t._s(t.title))])])])}),G=[],B={name:"SearchBtn",props:{title:{type:String,default:""},bgc:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{searchBtn:function(){this.$emit("click")}}},C=B,I=(n("2af3"),Object(p["a"])(C,A,G,!1,null,"495f70b8",null)),M=I.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn_box cancel",on:{click:t.searchBtn}},[n("button",{staticClass:"btn"},[n("p",[t._v(t._s(t.title))])])])},R=[],T={name:"CancelBtn",props:{title:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{searchBtn:function(){this.$emit("click")}}},U=T,q=(n("2b29"),Object(p["a"])(U,Q,R,!1,null,"341d9e1e",null)),D=q.exports;M.install=function(t){t.component(M.name,M)},D.install=function(t){t.component(D.name,D)};var J=[M],K=function(t){J.map((function(e){t.component(e.name,e)}))};K(r["a"]);r["a"].config.productionTip=!1,Object.keys($).forEach((function(t){r["a"].directive(t,$[t])}));var Y=null;function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.container,n=new b["a"]({routes:j});window.__POWERED_BY_QIANKUN__&&n.beforeEach((function(t,e,n){t.path.includes("/micrApp")?n():n({path:"/micrApp/".concat(y["a"]).concat(t.path)})})),Y=new r["a"]({router:n,store:k,render:function(t){return t(d)}}).$mount(e?e.querySelector("#app"):"#app")}if(window.__POWERED_BY_QIANKUN__)n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;else{P(k);var L={name:"我是独立运行时名字叫张三"};k.commit("global/setGlobalState",{user:L}),r["a"].prototype.$getPer=function(){return!0},H()}function V(){return W.apply(this,arguments)}function W(){return W=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}function z(t){return F.apply(this,arguments)}function F(){return F=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("[vue] props from main framework",e),P(k,e),r["a"].prototype.$getPer=e.getPermission,H(e);case 4:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function X(){return Z.apply(this,arguments)}function Z(){return Z=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Y.$destroy(),Y.$el.innerHTML="",Y=null;case 3:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}},9224:function(t){t.exports=JSON.parse('{"a":"sub-vue"}')},a5ad:function(t,e,n){}})}));
//# sourceMappingURL=app.ce5181df.js.map