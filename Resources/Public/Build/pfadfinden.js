/*! For license information please see pfadfinden.js.LICENSE.txt */
"use strict";(self.webpackChunk_pfadfinden_bdp_template=self.webpackChunk_pfadfinden_bdp_template||[]).push([[83],{2929:function(e,t,n){n(3948);class s{constructor(){return s.instance||(this.callbacks=new Map,this.resizeObserver=new ResizeObserver((e=>{for(const t of e)this.callbacks.has(t.target)&&this.callbacks.get(t.target)(t)})),s.instance=this),s.instance}registerElement(e,t){this.resizeObserver&&e&&"function"==typeof t&&(this.callbacks.set(e,t),this.resizeObserver.observe(e))}destroyListener(e){this.resizeObserver&&e&&(this.callbacks.delete(e),this.resizeObserver.unobserve(e))}}const a=new s;Object.freeze(a);var r=a;function i(e){if(window.innerWidth<=768){const t=document.querySelector(".page__footer");t.parentNode.insertBefore(e.target,t)}else document.querySelector(".page__navigation").appendChild(e.target)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".page__navigation__side");e&&(i({target:e}),r.registerElement(e,i))}));var o=n(4939),c=n(9210),d=n(149),l=n(1280),u=n(6636);o.Z.addons={offcanvas:c.Z,screenReader:d.Z,scrollBugFix:l.Z,keyboardNavigation:u.Z};var b=o.Z;document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("mobile-bdp-menu-toggler"),t=new b("#pfadfinden-menu",{extensions:["position-front","position-right","theme-black"],navbar:{title:"&nbsp;"}},{offCanvas:{clone:!0,page:{selector:"body > .page"}}}),n=t.API;e.setAttribute("aria-controls",t.node.menu.id),e.addEventListener("click",(function(t){e.classList.contains("is-active")?(e.setAttribute("aria-expanded","false"),e.classList.remove("mobile-bdp-menu-toggler--active"),e.setAttribute("aria-label",e.dataset.open),n.close()):(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label",e.dataset.close),e.classList.add("mobile-bdp-menu-toggler--active"),n.open()),t.preventDefault()}))}))}},function(e){e.O(0,[682,987],(function(){return t=2929,e(e.s=t);var t}));e.O()}]);