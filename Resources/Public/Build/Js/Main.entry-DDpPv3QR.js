/**
 * name: @pfadfinden/bdp_template
 * version: v6.0.0
 * license: GPL-2.0-or-later
 * author: Christian Schrebe
 * homepage: https://www.pfadfinden.de/
 */
class _{constructor(){return _.instance||(this.callbacks=new Map,this.resizeObserver=new ResizeObserver(e=>{for(const t of e)this.callbacks.has(t.target)&&this.callbacks.get(t.target)(t)}),_.instance=this),_.instance}registerElement(e,t){!this.resizeObserver||!e||typeof t!="function"||(this.callbacks.set(e,t),this.resizeObserver.observe(e))}destroyListener(e){!this.resizeObserver||!e||(this.callbacks.delete(e),this.resizeObserver.unobserve(e))}}const $=new _;Object.freeze($);function T(i){if(window.innerWidth<=768){const e=document.querySelector(".page__footer");e.parentNode.insertBefore(i.target,e)}else document.querySelector(".page__navigation").appendChild(i.target)}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".page__navigation__side");i&&(T({target:i}),$.registerElement(i,T))});const x={hooks:{},navbar:{add:!0,title:"Menu",titleLink:"parent"},slidingSubmenus:!0},B={classNames:{divider:"Divider",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",vertical:"Vertical"},language:null,panelNodetype:["ul","ol","div"],screenReader:{closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},u=(i,e)=>{L(i)!="object"&&(i={}),L(e)!="object"&&(e={});for(let t in e)e.hasOwnProperty(t)&&(typeof i[t]=="undefined"?i[t]=e[t]:L(i[t])=="object"&&u(i[t],e[t]));return i},j=i=>{let e="",t=null;return i.addEventListener("touchstart",s=>{s.touches.length===1&&(e="",t=s.touches[0].pageY)}),i.addEventListener("touchend",s=>{s.touches.length===0&&(e="",t=null)}),i.addEventListener("touchmove",s=>{if(e="",t&&s.touches.length===1){const n=s.changedTouches[0].pageY;n>t?e="down":n<t&&(e="up"),t=n}}),{get:()=>e}},L=i=>({}).toString.call(i).match(/\s([a-zA-Z]+)/)[1].toLowerCase(),f=()=>`mm-${q++}`;let q=0;const C=i=>i.slice(0,9)=="mm-clone-"?i:`mm-clone-${i}`,y=i=>i.slice(0,9)=="mm-clone-"?i.slice(9):i,b={},D=()=>b,h=(i,e)=>{typeof b[e]=="undefined"&&(b[e]={}),u(b[e],i)},I=(i,e)=>typeof e=="string"&&typeof b[e]!="undefined"&&b[e][i]||i,F={"Close submenu":"Untermenü schließen",Menu:"Menü","Open submenu":"Untermenü öffnen","Toggle submenu":"Untermenü wechseln"},H={"Close submenu":"بستن زیرمنو",Menu:"منو","Open submenu":"بازکردن زیرمنو","Toggle submenu":"سوییچ زیرمنو"},z={"Close submenu":"Submenu sluiten",Menu:"Menu","Open submenu":"Submenu openen","Toggle submenu":"Submenu wisselen"},W={"Close submenu":"Fechar submenu",Menu:"Menu","Open submenu":"Abrir submenu","Toggle submenu":"Alternar submenu"},R={"Close submenu":"Закрыть подменю",Menu:"Меню","Open submenu":"Открыть подменю","Toggle submenu":"Переключить подменю"},U={"Close submenu":"Zatvoriť submenu",Menu:"Menu","Open submenu":"Otvoriť submenu","Toggle submenu":"Prepnúť submenu"},G={"Close submenu":"Закрити підменю",Menu:"Меню","Open submenu":"Відкрити підменю","Toggle submenu":"Перемкнути підменю"};function V(){h(F,"de"),h(H,"fa"),h(z,"nl"),h(W,"pt_br"),h(R,"ru"),h(U,"sk"),h(G,"uk")}const d=i=>{const e=i.split("."),t=document.createElement(e.shift());return t.classList.add(...e),t},c=(i,e)=>e.length?[].slice.call(i.querySelectorAll(e)):[],a=(i,e)=>{const t=Array.prototype.slice.call(i.children);return e?t.filter(s=>s.matches(e)):t},Y=i=>i?[].slice.call(i.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE).map(e=>e.nodeValue.trim()).join(" "):"",Z=(i,e)=>{let t=[],s=i.parentElement;for(;s;)t.push(s),s=s.parentElement;return e?t.filter(n=>n.matches(e)):t},v=(i,e,t)=>{i.matches("."+e)&&i.classList.add(t)};let M={};const X=()=>{for(let i in M){let e=window.matchMedia(i);N(i,e),e.onchange=t=>{N(i,e)}}},N=(i,e)=>{var t=e.matches?"yes":"no";for(let s=0;s<M[i].length;s++)M[i][s][t]()};var k=function(i,e,t){if(!e.has(i))throw new TypeError("attempted to set private field on non-instance");return e.set(i,t),t},S=function(i,e){if(!e.has(i))throw new TypeError("attempted to get private field on non-instance");return e.get(i)},w,P,E;V();class r{constructor(e,t,s){return w.set(this,void 0),P.set(this,void 0),E.set(this,void 0),this.opts=u(t,x),this.conf=u(s,B),this._api=["i18n","bind","openPanel","closePanel","setSelected"],this.node={},this.hook={},this.node.menu=typeof e=="string"?document.querySelector(e):e,typeof this._deprecatedWarnings=="function"&&this._deprecatedWarnings(),this.trigger("init:before"),this._initObservers(),this._initAddons(),this._initHooks(),this._initAPI(),this._initMenu(),this._initPanels(),this._initOpened(),X(),this.trigger("init:after"),this}openPanel(e,t=!0,s=!0){if(!e)return;e=e.closest(".mm-panel"),this.trigger("openPanel:before",[e,{animation:t,setfocus:s}]);const n=e.closest(".mm-listitem--vertical");if(n){n.classList.add("mm-listitem--opened");const o=n.closest(".mm-panel");this.openPanel(o)}else{const o=a(this.node.pnls,".mm-panel--opened")[0];e.matches(".mm-panel--parent")&&o&&o.classList.add("mm-panel--highest");const m=["mm-panel--opened","mm-panel--parent"],g=[];t?m.push("mm-panel--noanimation"):g.push("mm-panel--noanimation"),a(this.node.pnls,".mm-panel").forEach(p=>{p.classList.add(...g),p.classList.remove(...m),p!==o&&p.classList.remove("mm-panel--highest"),p===e?p.removeAttribute("inert"):p.setAttribute("inert","true")}),e.classList.add("mm-panel--opened");let l=c(this.node.pnls,`#${e.dataset.mmParent}`)[0];for(;l;)l=l.closest(".mm-panel"),l.classList.add("mm-panel--parent"),l=c(this.node.pnls,`#${l.dataset.mmParent}`)[0]}this.trigger("openPanel:after",[e,{animation:t,setfocus:s}])}closePanel(e,t=!0,s=!0){if(e&&!(!e.matches(".mm-panel--opened")&&!e.parentElement.matches(".mm-listitem--opened"))){if(this.trigger("closePanel:before",[e]),e.parentElement.matches(".mm-listitem--vertical"))e.parentElement.classList.remove("mm-listitem--opened");else if(e.dataset.mmParent){const n=c(this.node.pnls,`#${e.dataset.mmParent}`)[0];this.openPanel(n,t,s)}else{const n=a(this.node.pnls,".mm-panel--parent").pop();if(n&&n!==e)this.openPanel(n,t,s);else{const o=a(this.node.pnls,".mm-panel")[0];o&&o!==e&&this.openPanel(o,t,s)}}this.trigger("closePanel:after",[e])}}togglePanel(e){const t=e.parentElement;let s="openPanel";(t.matches(".mm-listitem--opened")||e.matches(".mm-panel--opened"))&&(s="closePanel"),this[s](e)}setSelected(e){this.trigger("setSelected:before",[e]),c(this.node.menu,".mm-listitem--selected").forEach(t=>{t.classList.remove("mm-listitem--selected")}),e.classList.add("mm-listitem--selected"),this.trigger("setSelected:after",[e])}bind(e,t){this.hook[e]=this.hook[e]||[],this.hook[e].push(t)}trigger(e,t){if(this.hook[e])for(var s=0,n=this.hook[e].length;s<n;s++)this.hook[e][s].apply(this,t)}_initObservers(){k(this,w,new MutationObserver(e=>{e.forEach(t=>{t.addedNodes.forEach(s=>{s.matches(this.conf.panelNodetype.join(", "))&&this._initListview(s)})})})),k(this,P,new MutationObserver(e=>{e.forEach(t=>{t.addedNodes.forEach(s=>{this._initListitem(s)})})})),k(this,E,new MutationObserver(e=>{e.forEach(t=>{t.addedNodes.forEach(s=>{s!=null&&s.matches(this.conf.panelNodetype.join(", "))&&this._initSubPanel(s)})})}))}_initAPI(){const e=this;this.API={},this._api.forEach(t=>{this.API[t]=function(){return e[t].apply(e,arguments)}}),this.node.menu.mmApi=this.API}_initHooks(){for(let e in this.opts.hooks)this.bind(e,this.opts.hooks[e])}_initAddons(){this.trigger("initAddons:before");for(let e in r.addons)r.addons[e].call(this);this.trigger("initAddons:after")}_initMenu(){this.trigger("initMenu:before"),this.node.wrpr=this.node.wrpr||this.node.menu.parentElement,this.node.wrpr.classList.add("mm-wrapper"),this.node.menu.classList.add("mm-menu"),this.node.menu.id=this.node.menu.id||f(),this.node.menu.setAttribute("aria-label",this.i18n(this.opts.navbar.title||"Menu")),this.node.menu.setAttribute("aria-modal","true"),this.node.menu.setAttribute("role","dialog");const e=a(this.node.menu).filter(t=>t.matches(this.conf.panelNodetype.join(", ")));this.node.pnls=d("div.mm-panels"),this.node.menu.append(this.node.pnls),e.forEach(t=>{this._initPanel(t)}),this.trigger("initMenu:after")}_initPanels(){this.trigger("initPanels:before"),this.node.menu.addEventListener("click",e=>{var t,s;const n=((s=(t=e.target)===null||t===void 0?void 0:t.closest("a[href]"))===null||s===void 0?void 0:s.getAttribute("href"))||"";if(n.slice(0,1)==="#")try{const o=c(this.node.menu,n)[0];o&&(e.preventDefault(),this.togglePanel(o))}catch(o){}},{capture:!0}),this.trigger("initPanels:after")}_initPanel(e){var t;if(!e.matches(".mm-panel")&&(v(e,this.conf.classNames.panel,"mm-panel"),v(e,this.conf.classNames.nopanel,"mm-nopanel"),!e.matches(".mm-nopanel"))){if(this.trigger("initPanel:before",[e]),e.id=e.id||f(),e.matches("ul, ol")){const s=d("div");s.id=e.id,e.removeAttribute("id"),[].slice.call(e.classList).filter(n=>n.slice(0,3)==="mm-").forEach(n=>{s.classList.add(n),e.classList.remove(n)}),Object.keys(e.dataset).filter(n=>n.slice(0,2)==="mm").forEach(n=>{s.dataset[n]=e.dataset[n],delete e.dataset[n]}),e.before(s),s.append(e),e=s}return e.classList.add("mm-panel"),!((t=e.parentElement)===null||t===void 0)&&t.matches(".mm-listitem--vertical")||this.node.pnls.append(e),this._initNavbar(e),a(e,"ul, ol").forEach(s=>{this._initListview(s)}),S(this,w).observe(e,{childList:!0}),this.trigger("initPanel:after",[e]),e}}_initNavbar(e){if(a(e,".mm-navbar").length)return;let t=null,s=null;if(e.dataset.mmParent)for(t=c(this.node.pnls,`#${e.dataset.mmParent}`)[0],s=t.closest(".mm-panel");s.closest(".mm-listitem--vertical");)s=s.parentElement.closest(".mm-panel");if(t!=null&&t.matches(".mm-listitem--vertical"))return;this.trigger("initNavbar:before",[e]);const n=d("div.mm-navbar");if(this.opts.navbar.add||n.classList.add("mm-hidden"),s){const l=d("a.mm-btn.mm-btn--prev.mm-navbar__btn");l.href=`#${s.id}`,l.setAttribute("aria-label",this.i18n(this.conf.screenReader.closeSubmenu)),n.append(l)}let o=null;t?o=a(t,".mm-listitem__text")[0]:s&&(o=c(s,'a[href="#'+e.id+'"]')[0]);const m=d("a.mm-navbar__title");switch(m.tabIndex=-1,m.setAttribute("aria-hidden","true"),this.opts.navbar.titleLink){case"anchor":o&&(m.href=o.getAttribute("href"));break;case"parent":s&&(m.href=`#${s.id}`);break}const g=d("span");g.innerHTML=e.dataset.mmTitle||Y(o)||this.i18n(this.opts.navbar.title||"Menu"),e.prepend(n),n.append(m),m.append(g),this.trigger("initNavbar:after",[e])}_initListview(e){["htmlulistelement","htmlolistelement"].includes(L(e))&&(e.matches(".mm-listview")||(v(e,this.conf.classNames.nolistview,"mm-nolistview"),!e.matches(".mm-nolistview")&&(this.trigger("initListview:before",[e]),e.classList.add("mm-listview"),a(e).forEach(t=>{this._initListitem(t)}),S(this,P).observe(e,{childList:!0}),this.trigger("initListview:after",[e]))))}_initListitem(e){["htmllielement"].includes(L(e))&&(e.matches(".mm-listitem")||(v(e,this.conf.classNames.divider,"mm-divider"),!e.matches(".mm-divider")&&(this.trigger("initListitem:before",[e]),e.classList.add("mm-listitem"),v(e,this.conf.classNames.selected,"mm-listitem--selected"),a(e,"a, span").forEach(t=>{t.classList.add("mm-listitem__text")}),a(e,this.conf.panelNodetype.join(", ")).forEach(t=>{this._initSubPanel(t)}),S(this,E).observe(e,{childList:!0}),this.trigger("initListitem:after",[e]))))}_initSubPanel(e){if(e.matches(".mm-panel"))return;const t=e.parentElement;(e.matches("."+this.conf.classNames.vertical)||!this.opts.slidingSubmenus)&&t.classList.add("mm-listitem--vertical"),t.id=t.id||f(),e.id=e.id||f(),t.dataset.mmChild=e.id,e.dataset.mmParent=t.id;let n=a(t,".mm-btn")[0];n||(n=d("a.mm-btn.mm-btn--next.mm-listitem__btn"),a(t,"a, span").forEach(o=>{o.matches("span")?(n.classList.add("mm-listitem__text"),n.innerHTML=o.innerHTML,t.insertBefore(n,o.nextElementSibling),o.remove()):t.insertBefore(n,o.nextElementSibling)}),n.setAttribute("aria-label",this.i18n(this.conf.screenReader[t.matches(".mm-listitem--vertical")?"toggleSubmenu":"openSubmenu"]))),n.href=`#${e.id}`,this._initPanel(e)}_initOpened(){this.trigger("initOpened:before");const e=c(this.node.pnls,".mm-listitem--selected").pop();let t=a(this.node.pnls,".mm-panel")[0];e&&(this.setSelected(e),t=e.closest(".mm-panel")),this.openPanel(t,!1,!1),this.trigger("initOpened:after")}i18n(e){return I(e,this.conf.language)}static i18n(e={},t=""){if(e&&t)h(e,t);else return D()}}w=new WeakMap,P=new WeakMap,E=new WeakMap;r.addons={};r.node={};r.vars={};const J={use:!0,position:"left"},K={clone:!1,menu:{insertMethod:"append",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[]},screenReader:{closeMenu:"Close menu",openMenu:"Open menu"}},A=["left","left-front","right","right-front","top","bottom"];function Q(){this.opts.offCanvas=this.opts.offCanvas||{},this.conf.offCanvas=this.conf.offCanvas||{};const i=u(this.opts.offCanvas,J),e=u(this.conf.offCanvas,K);i.use&&(A.includes(i.position)||(i.position=A[0]),this._api.push("open","close","setPage","position"),e.clone&&(this.node.menu=this.node.menu.cloneNode(!0),this.node.menu.id&&(this.node.menu.id=C(this.node.menu.id)),c(this.node.menu,"[id]").forEach(t=>{t.id=C(t.id)})),this.bind("initMenu:before",()=>{this.node.wrpr=document.querySelector(e.menu.insertSelector),this.node.wrpr[e.menu.insertMethod](this.node.menu)}),r.node.blck||this.bind("initMenu:before",()=>{const t=d("a.mm-wrapper__blocker.mm-blocker.mm-slideout");t.id=f(),t.setAttribute("aria-label",this.i18n(e.screenReader.closeMenu)),t.setAttribute("inert","true"),document.querySelector(e.menu.insertSelector).append(t),r.node.blck=t}),this.bind("initMenu:after",()=>{this.setPage(r.node.page),this.node.menu.classList.add("mm-menu--offcanvas"),this.node.menu.setAttribute("inert","true"),A.includes(i.position)&&(this.node.wrpr.classList.add(`mm-wrapper--position-${i.position}`),this.node.menu.classList.add(`mm-menu--position-${i.position}`));let t=window.location.hash;if(t){let s=y(this.node.menu.id);s&&s==t.slice(1)&&setTimeout(()=>{this.open()},1e3)}}),document.addEventListener("click",t=>{var s;switch((s=t.target.closest("a"))===null||s===void 0?void 0:s.getAttribute("href")){case`#${y(this.node.menu.id)}`:t.preventDefault(),this.open();break;case`#${y(r.node.page.id)}`:t.preventDefault(),this.close();break}}),document.addEventListener("keyup",t=>{t.key=="Escape"&&this.close()}))}r.prototype.open=function(){this.node.menu.matches(".mm-menu--opened")||(this.trigger("open:before"),this.node.wrpr.classList.add("mm-wrapper--opened",`mm-wrapper--position-${this.opts.offCanvas.position}`),this.node.menu.classList.add("mm-menu--opened"),this.node.menu.removeAttribute("inert"),r.node.blck.removeAttribute("inert"),r.node.page.setAttribute("inert","true"),this.node.open=document.activeElement,this.trigger("open:after"))};r.prototype.close=function(){var i;if(!this.node.menu.matches(".mm-menu--opened"))return;this.trigger("close:before"),this.node.wrpr.classList.remove("mm-wrapper--opened",`mm-wrapper--position-${this.opts.offCanvas.position}`),this.node.menu.classList.remove("mm-menu--opened"),this.node.menu.setAttribute("inert","true"),r.node.blck.setAttribute("inert","true"),r.node.page.removeAttribute("inert"),(i=this.node.open||document.querySelector(`[href="#${this.node.menu.id}"]`)||null)===null||i===void 0||i.focus(),document.body.scrollLeft=0,document.documentElement.scrollLeft=0,this.trigger("close:after")};r.prototype.setPage=function(i){const e=this.conf.offCanvas;if(!i){let t=typeof e.page.selector=="string"?c(document.body,e.page.selector):a(document.body,e.page.nodetype);if(t=t.filter(s=>!s.matches(".mm-menu, .mm-wrapper__blocker")),e.page.noSelector.length&&(t=t.filter(s=>!s.matches(e.page.noSelector.join(", ")))),t.length>1){let s=d("div");t[0].before(s),t.forEach(n=>{s.append(n)}),t=[s]}i=t[0]}this.trigger("setPage:before",[i]),i.classList.add("mm-page","mm-slideout"),i.id=i.id||f(),r.node.blck.setAttribute("href",`#${i.id}`),r.node.page=i,this.trigger("setPage:after",[i])};const ee={fix:!0},te="ontouchstart"in window||!!navigator.msMaxTouchPoints||!1;function se(){if(!te||!this.opts.offCanvas.use||(this.opts.scrollBugFix=this.opts.scrollBugFix||{},!u(this.opts.scrollBugFix,ee).fix))return;const e=j(this.node.menu);this.node.menu.addEventListener("scroll",t=>{t.preventDefault(),t.stopPropagation()},{passive:!1}),this.node.menu.addEventListener("touchmove",t=>{let s=t.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");s&&s.closest(".mm-listitem--vertical")&&(s=Z(s,".mm-panel").pop()),s?(s.scrollHeight===s.offsetHeight||s.scrollTop==0&&e.get()=="down"||s.scrollHeight==s.scrollTop+s.offsetHeight&&e.get()=="up")&&t.stopPropagation():t.stopPropagation()},{passive:!1}),this.bind("open:after",()=>{var t=a(this.node.pnls,".mm-panel--opened")[0];t&&(t.scrollTop=0)}),window.addEventListener("orientationchange",t=>{var s=a(this.node.pnls,".mm-panel--opened")[0];s&&(s.scrollTop=0,s.style["-webkit-overflow-scrolling"]="auto",s.style["-webkit-overflow-scrolling"]="touch")})}const ie="light",O=["light","dark","white","black","light-contrast","dark-contrast","white-contrast","black-contrast"];function ne(){this.opts.theme=this.opts.theme||ie;const i=this.opts.theme;O.includes(i)||(this.opts.theme=O[0]),this._api.push("theme"),this.bind("initMenu:after",()=>{this.theme(this.opts.theme)})}r.prototype.theme=function(i=null){const e=this.opts.theme;if(i)O.includes(i)&&(this.node.menu.classList.remove(`mm-menu--theme-${e}`),this.node.menu.classList.add(`mm-menu--theme-${i}`),this.opts.theme=i);else return e};const oe={close:!1,open:!1};function re(){if(this.opts.backButton=this.opts.backButton||{},!this.opts.offCanvas.use)return;const i=u(this.opts.backButton,oe),e=`#${this.node.menu.id}`;if(i.close){let t=[];const s=()=>{t=[e],a(this.node.pnls,".mm-panel--opened, .mm-panel--parent").forEach(n=>{t.push("#"+n.id)})};this.bind("open:after",()=>{history.pushState(null,"",location.pathname+location.search+e)}),this.bind("open:after",s),this.bind("openPanel:after",s),this.bind("close:after",()=>{t=[],history.back(),history.pushState(null,"",location.pathname+location.search)}),window.addEventListener("popstate",()=>{if(this.node.menu.matches(".mm-menu--opened")&&t.length){t=t.slice(0,-1);const n=t[t.length-1];n==e?this.close():(this.openPanel(this.node.menu.querySelector(n)),history.pushState(null,"",location.pathname+location.search+e))}})}i.open&&window.addEventListener("popstate",t=>{!this.node.menu.matches(".mm-menu--opened")&&location.hash==e&&this.open()})}r.addons={offcanvas:Q,scrollBugFix:se,theme:ne,backButton:re};window&&(window.Mmenu=r);document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("mobile-bdp-menu-toggler"),e=new r("#pfadfinden-menu",{theme:"black",offCanvas:{position:"right-front"},navbar:{title:"&nbsp;"}},{offCanvas:{clone:!0,page:{selector:"body > .page"}}}),t=e.API;i.setAttribute("aria-controls",e.node.menu.id),i.addEventListener("click",function(s){i.classList.contains("is-active")?(i.setAttribute("aria-expanded","false"),i.classList.remove("mobile-bdp-menu-toggler--active"),i.setAttribute("aria-label",i.dataset.open),t.close()):(i.setAttribute("aria-expanded","true"),i.setAttribute("aria-label",i.dataset.close),i.classList.add("mobile-bdp-menu-toggler--active"),t.open()),s.preventDefault()})});