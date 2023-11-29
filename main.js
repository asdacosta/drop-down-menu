(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),s=t(645),i=t.n(s),a=t(667),c=t.n(a),u=new URL(t(913),t.b),d=i()(o()),l=c()(u);d.push([e.id,`* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    letter-spacing: 1.2px;\n    font-size: 1.1rem;\n    /* border: 2px solid tomato; */\n}\n\nbody {\n    display: grid;\n    grid-template: 1fr / 1fr 5.5fr;\n    height: 100vh;\n    background: url(${l});\n    background-size: cover;\n    background-position: center center;\n}\n\nbody > div {\n    justify-self: flex-start;\n    align-self: flex-start;\n    display: block;\n    margin: 1rem;\n    transform: rotate(90deg);\n    cursor: pointer;\n}\n\nbody > div:hover > img {\n    background-color: rgba(226, 172, 36, 0.8);\n    border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\nnav > section:first-child span:hover {\n    color: rgb(82, 62, 7);\n}\n\nnav {\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 2rem;\n    background-color: rgba(0, 150, 187, 0.9);\n    animation: slideIn 800ms ease-in-out 0s 1 forwards;\n}\n\n@keyframes slideIn {\n    0% {\n        width: 0;\n        opacity: 0;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n        width: 100%;\n    }\n}\n\n@keyframes slideOut {\n    from {\n        opacity: 1;\n        width: 100%;\n    }\n    to {\n        opacity: 0;\n        width: 0;\n    }\n}\n\n.animateOut {\n    animation: slideOut 200ms ease-in 0s 1 forwards;\n}\n\nnav > section:first-child {\n    display: flex;\n    justify-content: center;\n    padding: 0.5rem 0;\n}\n\nnav > section:first-child > div {\n    justify-content: center;\n}\n\nnav > section:first-child span {\n    font-size: 1.5rem;\n}\n\nnav > section:first-child img, body > div > img {\n    width: 2rem;\n    background-color: rgb(226, 172, 36);\n    border-radius: 10px;\n    padding: 0.2rem;\n}\n\n.sec-section div img, .last-section div img {\n    border-radius: 10px;\n}\n\n.sec-section div, .last-section div {\n    width: fit-content;\n    margin: 0 1rem;\n    border-radius: 50px;\n}\n\nnav div {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 0.7rem;\n}\n\nnav img, nav span {\n    cursor: pointer;\n}\n\nnav img {\n    width: 1.5rem;\n}\n\nh6 {\n    font-size: 0.8rem;\n    font-weight: 800;\n    padding-left: 0.7rem;\n    padding-bottom: 0.2rem;\n    cursor: context-menu;\n    color: rgb(226, 172, 36);\n}\n`,""]);const p=d},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],u=r.base?c[0]+r.base:c[0],d=s[u]||0,l="".concat(u," ").concat(d);s[u]=d+1;var p=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var v=o(m,r);r.byIndex=a,n.splice(a,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=t(s[i]);n[a].references--}for(var c=r(e,o),u=0;u<s.length;u++){var d=t(s[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},543:(e,n,t)=>{var r={"./blue-mug-with-coffee.jpg":913,"./community.svg":209,"./down-arrow.png":787,"./history.svg":888,"./home-group.svg":40,"./message-text.svg":459,"./privacy.svg":523,"./profile.svg":103,"./settings.svg":246,"./support.svg":436,"./task.svg":467};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=543},913:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/blue-mug-with-coffee.jpg"},209:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/community.svg"},787:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/down-arrow.png"},888:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/history.svg"},40:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/home-group.svg"},459:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/message-text.svg"},523:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/privacy.svg"},103:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/profile.svg"},246:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/settings.svg"},436:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/support.svg"},467:(e,n,t)=>{"use strict";e.exports=t.p+"imgs/task.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={id:r,exports:{}};return e[r](s,s.exports,t),s.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var e,n=t(379),r=t.n(n),o=t(795),s=t.n(o),i=t(569),a=t.n(i),c=t(565),u=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),v=t(426),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=a().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=l(),r()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,(e=t(543)).keys().map(e);const f={closedMenu:document.querySelector("body > div"),nav:document.querySelector("nav"),openedMenu:document.querySelectorAll("nav > section:first-child > div > *"),menuSpan:document.querySelector("nav > section:first-child span"),menuImg:document.querySelector("nav > section:first-child img"),navDivs:document.querySelectorAll(".sec-section > div, .last-section > div")},y=(f.closedMenu.addEventListener("click",(()=>{f.nav.classList.remove("animateOut"),setTimeout((()=>{f.closedMenu.style.display="none"}),200),f.nav.style.display="flex"})),f.openedMenu.forEach((e=>{e.addEventListener("click",(()=>{f.nav.classList.add("animateOut"),setTimeout((()=>{f.nav.style.display="none",f.closedMenu.style.display="block"}),200)}))})),function(e,n,t){f.navDivs.forEach(((r,o)=>{r.classList.add(`div${o}`);const s=document.querySelector(`.div${o} span`),i=document.querySelector(`.div${o} img`);s.addEventListener("mouseover",(()=>{i.style.background=e,s.style.color=e})),s.addEventListener("mouseout",(()=>{i.style.background=n,s.style.color=t})),i.addEventListener("mouseover",(()=>{i.style.background=e,s.style.color=e})),i.addEventListener("mouseout",(()=>{i.style.background=n,s.style.color=t}))}))});var b,h,x,k;b="rgb(226, 172, 36)",h="rgba(226, 172, 36, 0.8)",x="black",k="rgb(201, 150, 23)",f.menuSpan.addEventListener("mouseover",(()=>{f.menuSpan.style.color=b,f.menuImg.style.backgroundColor=h})),f.menuSpan.addEventListener("mouseout",(()=>{f.menuSpan.style.color=x,f.menuImg.style.backgroundColor=k})),f.menuImg.addEventListener("mouseover",(()=>{f.menuSpan.style.color=b,f.menuImg.style.backgroundColor=h})),f.menuImg.addEventListener("mouseout",(()=>{f.menuSpan.style.color=x,f.menuImg.style.backgroundColor=k})),y("rgb(226, 172, 36)","none","black"),function(e,n,t){f.navDivs.forEach((r=>{const o=document.querySelector(`.${r.className} span`),s=document.querySelector(`.${r.className} img`);o.addEventListener("click",(()=>{f.navDivs.forEach((e=>{e.style.border="0"})),y("rgb(226, 172, 36)","none","black"),o.addEventListener("mouseover",(()=>{s.style.background=n,o.style.color=t})),r.style.border=`2px solid ${e}`})),s.addEventListener("click",(()=>{f.navDivs.forEach((e=>{e.style.border="0"})),y("rgb(226, 172, 36)","none","black"),o.addEventListener("mouseover",(()=>{s.style.background=n,o.style.color=t})),r.style.border=`2px solid ${e}`}))}))}("rgb(226, 172, 36)","none","black")})()})();