!function(){"use strict";var e,r={4968:function(){function e(e,r,n,t,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?r(c):Promise.resolve(c).then(t,o)}function r(r){return function(){var n=this,t=arguments;return new Promise((function(o,i){var a=r.apply(n,t);function u(r){e(a,o,i,u,c,"next",r)}function c(r){e(a,o,i,u,c,"throw",r)}u(void 0)}))}}window.onload=function(){var e=document.querySelector(".menu__icon"),n=document.querySelector(".menu__body");e&&e.addEventListener("click",(function(){e.classList.toggle("_active"),n.classList.toggle("_active"),document.body.classList.toggle("_lock")}));var t=document.querySelector(".form");function o(){return(o=r(regeneratorRuntime.mark((function e(r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=i(t),o=new FormData(t),!0!==n){e.next=9;break}return e.next=7,fetch("http://localhost:8081/index.php",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:o});case 7:e.sent.ok?(t.reset(),document.querySelector(".sending-error").innerHTML+=' <span class="validation-error">Форма отправлена</span>'):(a("validation-error"),document.querySelector(".sending-error").innerHTML+=' <span class="validation-error">Произошла ошибка при отправке формы</span>');case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){var r=!0;a("validation-error__email");var n=e.querySelector("#email");return n.value?/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(n.value).toLowerCase())||(e.querySelector(".validation-error").innerHTML='<span class="validation-error__email">Incorrect email</span>',r=!1):(e.querySelector(".validation-error").innerHTML='<span class="validation-error__email">Enter your email</span>',r=!1),r}function a(e){for(var r=document.getElementsByClassName(e);r.length>0;)r[0].parentNode.removeChild(r[0])}t.querySelector(".submit-button"),t.addEventListener("submit",(function(e){return o.apply(this,arguments)}))}}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,t),i.exports}t.m=r,e=[],t.O=function(r,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(r=s)}}return r}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={787:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,i,a=n[0],u=n[1],c=n[2],s=0;if(a.some((function(r){return 0!==e[r]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(r&&r(n);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},n=self.webpackChunkOJJO=self.webpackChunkOJJO||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}(),t.O(void 0,[981],(function(){return t(6981)}));var o=t.O(void 0,[981],(function(){return t(4968)}));o=t.O(o)}();
//# sourceMappingURL=scripts.bd7a657a187d3761906d.js.map