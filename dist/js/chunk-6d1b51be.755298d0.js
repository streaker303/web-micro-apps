(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d1b51be"],{"38bc":function(t,n,e){var r,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(o,s){r=s,i="function"===typeof r?r.call(n,e,n,t):r,void 0===i||(t.exports=i)})(0,(function(){var t={version:"0.2.0"},n=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function e(t,n,e){return t<n?n:t>e?e:t}function r(t){return 100*(-1+t)}function i(t,e,i){var o;return o="translate3d"===n.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"},o.transition="all "+e+"ms "+i,o}t.configure=function(t){var e,r;for(e in t)r=t[e],void 0!==r&&t.hasOwnProperty(e)&&(n[e]=r);return this},t.status=null,t.set=function(r){var a=t.isStarted();r=e(r,n.minimum,1),t.status=1===r?null:r;var u=t.render(!a),c=u.querySelector(n.barSelector),l=n.speed,d=n.easing;return u.offsetWidth,o((function(e){""===n.positionUsing&&(n.positionUsing=t.getPositioningCSS()),s(c,i(r,l,d)),1===r?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){t.remove(),e()}),l)}),l)):setTimeout(e,l)})),this},t.isStarted=function(){return"number"===typeof t.status},t.start=function(){t.status||t.set(0);var e=function(){setTimeout((function(){t.status&&(t.trickle(),e())}),n.trickleSpeed)};return n.trickle&&e(),this},t.done=function(n){return n||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(n){var r=t.status;return r?("number"!==typeof n&&(n=(1-r)*e(Math.random()*r,.1,.95)),r=e(r+n,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*n.trickleRate)},function(){var n=0,e=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&t.start(),n++,e++,r.always((function(){e--,0===e?(n=0,t.done()):t.set((n-e)/n)})),this):this}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=n.template;var o,a=i.querySelector(n.barSelector),c=e?"-100":r(t.status||0),l=document.querySelector(n.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),n.showSpinner||(o=i.querySelector(n.spinnerSelector),o&&d(o)),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(i),i},t.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(n.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&d(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,n="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return n+"Perspective"in t?"translate3d":n+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function n(){var e=t.shift();e&&e(n)}return function(e){t.push(e),1==t.length&&n()}}(),s=function(){var t=["Webkit","O","Moz","ms"],n={};function e(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,n){return n.toUpperCase()}))}function r(n){var e=document.body.style;if(n in e)return n;var r,i=t.length,o=n.charAt(0).toUpperCase()+n.slice(1);while(i--)if(r=t[i]+o,r in e)return r;return n}function i(t){return t=e(t),n[t]||(n[t]=r(t))}function o(t,n,e){n=i(n),t.style[n]=e}return function(t,n){var e,r,i=arguments;if(2==i.length)for(e in n)r=n[e],void 0!==r&&n.hasOwnProperty(e)&&o(t,e,r);else o(t,i[1],i[2])}}();function a(t,n){var e="string"==typeof t?t:l(t);return e.indexOf(" "+n+" ")>=0}function u(t,n){var e=l(t),r=e+n;a(e,n)||(t.className=r.substring(1))}function c(t,n){var e,r=l(t);a(t,n)&&(e=r.replace(" "+n+" "," "),t.className=e.substring(1,e.length-1))}function l(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t}))},4042:function(t,n,e){"use strict";e("535a")},"535a":function(t,n,e){},b3f9:function(t,n,e){"use strict";var r=e("9277"),i=e("8e1c").findIndex,o=e("2cf2"),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},bc13:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.position,attrs:{id:"main"}},["x"===t.position?e("div",{staticClass:"layout-header"},[e("div",{staticClass:"logo",on:{click:function(n){return t.$router.push({path:"/micrApp"})}}},[t._v("微前端(qiankun)架构应用")]),e("ul",{staticClass:"sub-apps"},[t._l(t.microApps,(function(n){return e("li",{key:n.name,class:{active:n.activeRule===t.current},on:{click:function(e){return t.goto(n)}}},[t._v(t._s(n.cn))])})),e("el-button",{on:{click:function(n){return t.switchTheme("yellow")}}},[t._v("黄色")]),e("el-button",{on:{click:function(n){return t.switchTheme("red")}}},[t._v("红色")]),e("el-button",{on:{click:function(n){return t.switchTheme("default")}}},[t._v("默认")]),e("el-button",{on:{click:t.switchHeader}},[t._v("切换菜单")]),e("span",{staticClass:"test"},[t._v("我是自定义样式变量")])],2),e("div",{staticClass:"userinfo"},[t._v("主应用的用户名："+t._s(t.user.name))])]):e("div",{staticClass:"box"},[t._v("菜单 "),e("button",{on:{click:t.switchHeader}},[t._v("切换菜单")])])])},i=[];e("b3f9");function o(t,n){t&&n&&(t.className=n)}var s=e("38bc"),a=e.n(s),u=e("6baa"),c=e("c0d6"),l={name:"Home",data:function(){return{isLoading:!0,microApps:u["a"],current:"",history:window.history,position:"x"}},watch:{isLoading:function(t){t?a.a.start():this.$nextTick((function(){a.a.done()}))}},computed:{user:function(){return c["a"].getGlobalState("user")}},methods:{switchTheme:function(t){o(document.body,"custom-"+t),""===t&&document.body.classList.remove("custom-"),c["a"].setGlobalState({themeClass:t})},switchHeader:function(){var t={x:"y",y:"x"};this.position=t[this.position]},goto:function(t){console.log(t),this.current=t.activeRule,history.pushState(null,t.activeRule,t.activeRule)},bindCurrent:function(){var t="/".concat(window.location.hash);this.microApps.findIndex((function(n){return n.activeRule===t}))>=0&&(this.current=t,console.log("this.current",this.current))},listenRouterChange:function(){var t=this,n=function(t){var n=history[t];return function(){var e=n.apply(this,arguments),r=new Event(t);return r.arguments=arguments,window.dispatchEvent(r),e}};history.pushState=n("pushState"),window.addEventListener("pushState",this.bindCurrent),window.addEventListener("popstate",this.bindCurrent),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("pushState",t.bindCurrent),window.removeEventListener("popstate",t.bindCurrent)}))}},created:function(){},mounted:function(){this.listenRouterChange()}},d=l,f=(e("4042"),e("cba8")),p=Object(f["a"])(d,r,i,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6d1b51be.755298d0.js.map