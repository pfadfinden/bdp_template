/*! For license information please see pfadfinden.js.LICENSE.txt */
"use strict";(self.webpackChunk_pfadfinden_bdp_template=self.webpackChunk_pfadfinden_bdp_template||[]).push([[83],{2929:function(e,t,n){n(6992),n(1532),n(1539),n(8783),n(3948),n(3371),n(7042),n(8309),n(1038),n(2526),n(1817),n(2165);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){var t=this;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance||(this.callbacks=new Map,this.resizeObserver=new ResizeObserver((function(e){var n,a=r(e);try{for(a.s();!(n=a.n()).done;){var i=n.value;t.callbacks.has(i.target)&&t.callbacks.get(i.target)(i)}}catch(e){a.e(e)}finally{a.f()}})),e.instance=this),e.instance}var t,n,a;return t=e,(n=[{key:"registerElement",value:function(e,t){this.resizeObserver&&e&&"function"==typeof t&&(this.callbacks.set(e,t),this.resizeObserver.observe(e))}},{key:"destroyListener",value:function(e){this.resizeObserver&&e&&(this.callbacks.delete(e),this.resizeObserver.unobserve(e))}}])&&i(t.prototype,n),a&&i(t,a),e}(),s=new o;Object.freeze(s);var c=s;function l(e){if(window.innerWidth<=768){var t=document.querySelector(".page__footer");t.parentNode.insertBefore(e.target,t)}else document.querySelector(".page__navigation").appendChild(e.target)}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".page__navigation__side");e&&(l({target:e}),c.registerElement(e,l))}));var u=n(4939),f=n(9210),d=n(149),b=n(1280),v=n(6636);u.Z.addons={offcanvas:f.Z,screenReader:d.Z,scrollBugFix:b.Z,keyboardNavigation:v.Z};var p=u.Z;document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("mobile-bdp-menu-toggler"),t=new p("#pfadfinden-menu",{extensions:["position-front","position-right","theme-black"],navbar:{title:"&nbsp;"}},{offCanvas:{clone:!0}}),n=t.API;e.setAttribute("aria-controls",t.node.menu.id),e.addEventListener("click",(function(t){e.classList.contains("is-active")?(e.setAttribute("aria-expanded","false"),e.classList.remove("mobile-bdp-menu-toggler--active"),e.setAttribute("aria-label",e.dataset.open),n.close()):(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label",e.dataset.close),e.classList.add("mobile-bdp-menu-toggler--active"),n.open()),t.preventDefault()}))}))}},function(e){e.O(0,[237,318,817],(function(){return t=2929,e(e.s=t);var t}));e.O()}]);