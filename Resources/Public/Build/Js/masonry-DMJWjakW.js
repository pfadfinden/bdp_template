/**
 * name: @pfadfinden/bdp_template
 * version: v6.0.0
 * license: GPL-2.0-or-later
 * author: Christian Schrebe
 * homepage: https://www.pfadfinden.de/
 */
var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var N={exports:{}},W={exports:{}},L={exports:{}},A;function w(){return A||(A=1,function(x){(function(v,p){x.exports?x.exports=p():v.EvEmitter=p()})(typeof window<"u"?window:U,function(){function v(){}var p=v.prototype;return p.on=function(_,f){if(!(!_||!f)){var h=this._events=this._events||{},a=h[_]=h[_]||[];return a.indexOf(f)==-1&&a.push(f),this}},p.once=function(_,f){if(!(!_||!f)){this.on(_,f);var h=this._onceEvents=this._onceEvents||{},a=h[_]=h[_]||{};return a[f]=!0,this}},p.off=function(_,f){var h=this._events&&this._events[_];if(!(!h||!h.length)){var a=h.indexOf(f);return a!=-1&&h.splice(a,1),this}},p.emitEvent=function(_,f){var h=this._events&&this._events[_];if(!(!h||!h.length)){h=h.slice(0),f=f||[];for(var a=this._onceEvents&&this._onceEvents[_],o=0;o<h.length;o++){var s=h[o],l=a&&a[s];l&&(this.off(_,s),delete a[s]),s.apply(this,f)}return this}},p.allOff=function(){delete this._events,delete this._onceEvents},v})}(L)),L.exports}var C={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */var F;function B(){return F||(F=1,function(x){(function(v,p){x.exports?x.exports=p():v.getSize=p()})(window,function(){function p(n){var E=parseFloat(n),c=n.indexOf("%")==-1&&!isNaN(E);return c&&E}function _(){}var f=typeof console>"u"?_:function(n){console.error(n)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],a=h.length;function o(){for(var n={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},E=0;E<a;E++){var c=h[E];n[c]=0}return n}function s(n){var E=getComputedStyle(n);return E||f("Style returned "+E+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),E}var l=!1,m;function u(){if(!l){l=!0;var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style.boxSizing="border-box";var E=document.body||document.documentElement;E.appendChild(n);var c=s(n);m=Math.round(p(c.width))==200,y.isBoxSizeOuter=m,E.removeChild(n)}}function y(n){if(u(),typeof n=="string"&&(n=document.querySelector(n)),!(!n||typeof n!="object"||!n.nodeType)){var E=s(n);if(E.display=="none")return o();var c={};c.width=n.offsetWidth,c.height=n.offsetHeight;for(var e=c.isBorderBox=E.boxSizing=="border-box",t=0;t<a;t++){var i=h[t],r=E[i],d=parseFloat(r);c[i]=isNaN(d)?0:d}var g=c.paddingLeft+c.paddingRight,z=c.paddingTop+c.paddingBottom,T=c.marginLeft+c.marginRight,S=c.marginTop+c.marginBottom,b=c.borderLeftWidth+c.borderRightWidth,I=c.borderTopWidth+c.borderBottomWidth,O=e&&m,H=p(E.width);H!==!1&&(c.width=H+(O?0:g+b));var D=p(E.height);return D!==!1&&(c.height=D+(O?0:z+I)),c.innerWidth=c.width-(g+b),c.innerHeight=c.height-(z+I),c.outerWidth=c.width+T,c.outerHeight=c.height+S,c}}return y})}(C)),C.exports}var R={exports:{}},P={exports:{}},Y;function V(){return Y||(Y=1,function(x){(function(v,p){x.exports?x.exports=p():v.matchesSelector=p()})(window,function(){var p=function(){var _=window.Element.prototype;if(_.matches)return"matches";if(_.matchesSelector)return"matchesSelector";for(var f=["webkit","moz","ms","o"],h=0;h<f.length;h++){var a=f[h],o=a+"MatchesSelector";if(_[o])return o}}();return function(f,h){return f[p](h)}})}(P)),P.exports}var q;function X(){return q||(q=1,function(x){(function(v,p){x.exports?x.exports=p(v,V()):v.fizzyUIUtils=p(v,v.matchesSelector)})(window,function(p,_){var f={};f.extend=function(o,s){for(var l in s)o[l]=s[l];return o},f.modulo=function(o,s){return(o%s+s)%s};var h=Array.prototype.slice;f.makeArray=function(o){if(Array.isArray(o))return o;if(o==null)return[];var s=typeof o=="object"&&typeof o.length=="number";return s?h.call(o):[o]},f.removeFrom=function(o,s){var l=o.indexOf(s);l!=-1&&o.splice(l,1)},f.getParent=function(o,s){for(;o.parentNode&&o!=document.body;)if(o=o.parentNode,_(o,s))return o},f.getQueryElement=function(o){return typeof o=="string"?document.querySelector(o):o},f.handleEvent=function(o){var s="on"+o.type;this[s]&&this[s](o)},f.filterFindElements=function(o,s){o=f.makeArray(o);var l=[];return o.forEach(function(m){if(m instanceof HTMLElement){if(!s){l.push(m);return}_(m,s)&&l.push(m);for(var u=m.querySelectorAll(s),y=0;y<u.length;y++)l.push(u[y])}}),l},f.debounceMethod=function(o,s,l){l=l||100;var m=o.prototype[s],u=s+"Timeout";o.prototype[s]=function(){var y=this[u];clearTimeout(y);var n=arguments,E=this;this[u]=setTimeout(function(){m.apply(E,n),delete E[u]},l)}},f.docReady=function(o){var s=document.readyState;s=="complete"||s=="interactive"?setTimeout(o):document.addEventListener("DOMContentLoaded",o)},f.toDashed=function(o){return o.replace(/(.)([A-Z])/g,function(s,l,m){return l+"-"+m}).toLowerCase()};var a=p.console;return f.htmlInit=function(o,s){f.docReady(function(){var l=f.toDashed(s),m="data-"+l,u=document.querySelectorAll("["+m+"]"),y=document.querySelectorAll(".js-"+l),n=f.makeArray(u).concat(f.makeArray(y)),E=m+"-options",c=p.jQuery;n.forEach(function(e){var t=e.getAttribute(m)||e.getAttribute(E),i;try{i=t&&JSON.parse(t)}catch(d){a&&a.error("Error parsing "+m+" on "+e.className+": "+d);return}var r=new o(e,i);c&&c.data(e,s,r)})})},f})}(R)),R.exports}var M={exports:{}},k;function j(){return k||(k=1,function(x){(function(v,p){x.exports?x.exports=p(w(),B()):(v.Outlayer={},v.Outlayer.Item=p(v.EvEmitter,v.getSize))})(window,function(p,_){function f(e){for(var t in e)return!1;return t=null,!0}var h=document.documentElement.style,a=typeof h.transition=="string"?"transition":"WebkitTransition",o=typeof h.transform=="string"?"transform":"WebkitTransform",s={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[a],l={transform:o,transition:a,transitionDuration:a+"Duration",transitionProperty:a+"Property",transitionDelay:a+"Delay"};function m(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var u=m.prototype=Object.create(p.prototype);u.constructor=m,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.getSize=function(){this.size=_(this.element)},u.css=function(e){var t=this.element.style;for(var i in e){var r=l[i]||i;t[r]=e[i]}},u.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),r=e[t?"left":"right"],d=e[i?"top":"bottom"],g=parseFloat(r),z=parseFloat(d),T=this.layout.size;r.indexOf("%")!=-1&&(g=g/100*T.width),d.indexOf("%")!=-1&&(z=z/100*T.height),g=isNaN(g)?0:g,z=isNaN(z)?0:z,g-=t?T.paddingLeft:T.paddingRight,z-=i?T.paddingTop:T.paddingBottom,this.position.x=g,this.position.y=z},u.layoutPosition=function(){var e=this.layout.size,t={},i=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop"),d=i?"paddingLeft":"paddingRight",g=i?"left":"right",z=i?"right":"left",T=this.position.x+e[d];t[g]=this.getXValue(T),t[z]="";var S=r?"paddingTop":"paddingBottom",b=r?"top":"bottom",I=r?"bottom":"top",O=this.position.y+e[S];t[b]=this.getYValue(O),t[I]="",this.css(t),this.emitEvent("layout",[this])},u.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},u.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},u._transitionTo=function(e,t){this.getPosition();var i=this.position.x,r=this.position.y,d=e==this.position.x&&t==this.position.y;if(this.setPosition(e,t),d&&!this.isTransitioning){this.layoutPosition();return}var g=e-i,z=t-r,T={};T.transform=this.getTranslate(g,z),this.transition({to:T,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(e,t){var i=this.layout._getOption("originLeft"),r=this.layout._getOption("originTop");return e=i?e:-e,t=r?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},u.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},u._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},u.transition=function(e){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(e);return}var t=this._transn;for(var i in e.onTransitionEnd)t.onEnd[i]=e.onTransitionEnd[i];for(i in e.to)t.ingProperties[i]=!0,e.isCleaning&&(t.clean[i]=!0);e.from&&(this.css(e.from),this.element.offsetHeight),this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0};function y(e){return e.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var n="opacity,"+y(o);u.enableTransition=function(){if(!this.isTransitioning){var e=this.layout.options.transitionDuration;e=typeof e=="number"?e+"ms":e,this.css({transitionProperty:n,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(s,this,!1)}},u.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},u.onotransitionend=function(e){this.ontransitionend(e)};var E={"-webkit-transform":"transform"};u.ontransitionend=function(e){if(e.target===this.element){var t=this._transn,i=E[e.propertyName]||e.propertyName;if(delete t.ingProperties[i],f(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[i]),i in t.onEnd){var r=t.onEnd[i];r.call(this),delete t.onEnd[i]}this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(s,this,!1),this.isTransitioning=!1},u._removeStyles=function(e){var t={};for(var i in e)t[i]="";this.css(t)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(c)},u.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){if(!a||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},u.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={},i=this.getHideRevealTransitionEndProperty("visibleStyle");t[i]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];if(t.opacity)return"opacity";for(var i in t)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");t[i]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},m})}(M)),M.exports}/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */var G;function $(){return G||(G=1,function(x){(function(v,p){x.exports?x.exports=p(v,w(),B(),X(),j()):v.Outlayer=p(v,v.EvEmitter,v.getSize,v.fizzyUIUtils,v.Outlayer.Item)})(window,function(p,_,f,h,a){var o=p.console,s=p.jQuery,l=function(){},m=0,u={};function y(t,i){var r=h.getQueryElement(t);if(!r){o&&o.error("Bad element for "+this.constructor.namespace+": "+(r||t));return}this.element=r,s&&(this.$element=s(this.element)),this.options=h.extend({},this.constructor.defaults),this.option(i);var d=++m;this.element.outlayerGUID=d,u[d]=this,this._create();var g=this._getOption("initLayout");g&&this.layout()}y.namespace="outlayer",y.Item=a,y.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var n=y.prototype;h.extend(n,_.prototype),n.option=function(t){h.extend(this.options,t)},n._getOption=function(t){var i=this.constructor.compatOptions[t];return i&&this.options[i]!==void 0?this.options[i]:this.options[t]},y.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},n._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),h.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},n.reloadItems=function(){this.items=this._itemize(this.element.children)},n._itemize=function(t){for(var i=this._filterFindItemElements(t),r=this.constructor.Item,d=[],g=0;g<i.length;g++){var z=i[g],T=new r(z,this);d.push(T)}return d},n._filterFindItemElements=function(t){return h.filterFindElements(t,this.options.itemSelector)},n.getItemElements=function(){return this.items.map(function(t){return t.element})},n.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),i=t!==void 0?t:!this._isLayoutInited;this.layoutItems(this.items,i),this._isLayoutInited=!0},n._init=n.layout,n._resetLayout=function(){this.getSize()},n.getSize=function(){this.size=f(this.element)},n._getMeasurement=function(t,i){var r=this.options[t],d;r?(typeof r=="string"?d=this.element.querySelector(r):r instanceof HTMLElement&&(d=r),this[t]=d?f(d)[i]:r):this[t]=0},n.layoutItems=function(t,i){t=this._getItemsForLayout(t),this._layoutItems(t,i),this._postLayout()},n._getItemsForLayout=function(t){return t.filter(function(i){return!i.isIgnored})},n._layoutItems=function(t,i){if(this._emitCompleteOnItems("layout",t),!(!t||!t.length)){var r=[];t.forEach(function(d){var g=this._getItemLayoutPosition(d);g.item=d,g.isInstant=i||d.isLayoutInstant,r.push(g)},this),this._processLayoutQueue(r)}},n._getItemLayoutPosition=function(){return{x:0,y:0}},n._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(i,r){this._positionItem(i.item,i.x,i.y,i.isInstant,r)},this)},n.updateStagger=function(){var t=this.options.stagger;if(t==null){this.stagger=0;return}return this.stagger=e(t),this.stagger},n._positionItem=function(t,i,r,d,g){d?t.goTo(i,r):(t.stagger(g*this.stagger),t.moveTo(i,r))},n._postLayout=function(){this.resizeContainer()},n.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var i=this._getContainerSize();i&&(this._setContainerMeasure(i.width,!0),this._setContainerMeasure(i.height,!1))}},n._getContainerSize=l,n._setContainerMeasure=function(t,i){if(t!==void 0){var r=this.size;r.isBorderBox&&(t+=i?r.paddingLeft+r.paddingRight+r.borderLeftWidth+r.borderRightWidth:r.paddingBottom+r.paddingTop+r.borderTopWidth+r.borderBottomWidth),t=Math.max(t,0),this.element.style[i?"width":"height"]=t+"px"}},n._emitCompleteOnItems=function(t,i){var r=this;function d(){r.dispatchEvent(t+"Complete",null,[i])}var g=i.length;if(!i||!g){d();return}var z=0;function T(){z++,z==g&&d()}i.forEach(function(S){S.once(t,T)})},n.dispatchEvent=function(t,i,r){var d=i?[i].concat(r):r;if(this.emitEvent(t,d),s)if(this.$element=this.$element||s(this.element),i){var g=s.Event(i);g.type=t,this.$element.trigger(g,r)}else this.$element.trigger(t,r)},n.ignore=function(t){var i=this.getItem(t);i&&(i.isIgnored=!0)},n.unignore=function(t){var i=this.getItem(t);i&&delete i.isIgnored},n.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},n.unstamp=function(t){t=this._find(t),t&&t.forEach(function(i){h.removeFrom(this.stamps,i),this.unignore(i)},this)},n._find=function(t){if(t)return typeof t=="string"&&(t=this.element.querySelectorAll(t)),t=h.makeArray(t),t},n._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},n._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),i=this.size;this._boundingRect={left:t.left+i.paddingLeft+i.borderLeftWidth,top:t.top+i.paddingTop+i.borderTopWidth,right:t.right-(i.paddingRight+i.borderRightWidth),bottom:t.bottom-(i.paddingBottom+i.borderBottomWidth)}},n._manageStamp=l,n._getElementOffset=function(t){var i=t.getBoundingClientRect(),r=this._boundingRect,d=f(t),g={left:i.left-r.left-d.marginLeft,top:i.top-r.top-d.marginTop,right:r.right-i.right-d.marginRight,bottom:r.bottom-i.bottom-d.marginBottom};return g},n.handleEvent=h.handleEvent,n.bindResize=function(){p.addEventListener("resize",this),this.isResizeBound=!0},n.unbindResize=function(){p.removeEventListener("resize",this),this.isResizeBound=!1},n.onresize=function(){this.resize()},h.debounceMethod(y,"onresize",100),n.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},n.needsResizeLayout=function(){var t=f(this.element),i=this.size&&t;return i&&t.innerWidth!==this.size.innerWidth},n.addItems=function(t){var i=this._itemize(t);return i.length&&(this.items=this.items.concat(i)),i},n.appended=function(t){var i=this.addItems(t);i.length&&(this.layoutItems(i,!0),this.reveal(i))},n.prepended=function(t){var i=this._itemize(t);if(i.length){var r=this.items.slice(0);this.items=i.concat(r),this._resetLayout(),this._manageStamps(),this.layoutItems(i,!0),this.reveal(i),this.layoutItems(r)}},n.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),!(!t||!t.length)){var i=this.updateStagger();t.forEach(function(r,d){r.stagger(d*i),r.reveal()})}},n.hide=function(t){if(this._emitCompleteOnItems("hide",t),!(!t||!t.length)){var i=this.updateStagger();t.forEach(function(r,d){r.stagger(d*i),r.hide()})}},n.revealItemElements=function(t){var i=this.getItems(t);this.reveal(i)},n.hideItemElements=function(t){var i=this.getItems(t);this.hide(i)},n.getItem=function(t){for(var i=0;i<this.items.length;i++){var r=this.items[i];if(r.element==t)return r}},n.getItems=function(t){t=h.makeArray(t);var i=[];return t.forEach(function(r){var d=this.getItem(r);d&&i.push(d)},this),i},n.remove=function(t){var i=this.getItems(t);this._emitCompleteOnItems("remove",i),!(!i||!i.length)&&i.forEach(function(r){r.remove(),h.removeFrom(this.items,r)},this)},n.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(r){r.destroy()}),this.unbindResize();var i=this.element.outlayerGUID;delete u[i],delete this.element.outlayerGUID,s&&s.removeData(this.element,this.constructor.namespace)},y.data=function(t){t=h.getQueryElement(t);var i=t&&t.outlayerGUID;return i&&u[i]},y.create=function(t,i){var r=E(y);return r.defaults=h.extend({},y.defaults),h.extend(r.defaults,i),r.compatOptions=h.extend({},y.compatOptions),r.namespace=t,r.data=y.data,r.Item=E(a),h.htmlInit(r,t),s&&s.bridget&&s.bridget(t,r),r};function E(t){function i(){t.apply(this,arguments)}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i}var c={ms:1,s:1e3};function e(t){if(typeof t=="number")return t;var i=t.match(/(^\d*\.?\d*)(\w*)/),r=i&&i[1],d=i&&i[2];if(!r.length)return 0;r=parseFloat(r);var g=c[d]||1;return r*g}return y.Item=a,y})}(W)),W.exports}/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */(function(x){(function(v,p){x.exports?x.exports=p($(),B()):v.Masonry=p(v.Outlayer,v.getSize)})(window,function(p,_){var f=p.create("masonry");f.compatOptions.fitWidth="isFitWidth";var h=f.prototype;return h._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var a=0;a<this.cols;a++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},h.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],o=a&&a.element;this.columnWidth=o&&_(o).outerWidth||this.containerWidth}var s=this.columnWidth+=this.gutter,l=this.containerWidth+this.gutter,m=l/s,u=s-l%s,y=u&&u<1?"round":"floor";m=Math[y](m),this.cols=Math.max(m,1)},h.getContainerWidth=function(){var a=this._getOption("fitWidth"),o=a?this.element.parentNode:this.element,s=_(o);this.containerWidth=s&&s.innerWidth},h._getItemLayoutPosition=function(a){a.getSize();var o=a.size.outerWidth%this.columnWidth,s=o&&o<1?"round":"ceil",l=Math[s](a.size.outerWidth/this.columnWidth);l=Math.min(l,this.cols);for(var m=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",u=this[m](l,a),y={x:this.columnWidth*u.col,y:u.y},n=u.y+a.size.outerHeight,E=l+u.col,c=u.col;c<E;c++)this.colYs[c]=n;return y},h._getTopColPosition=function(a){var o=this._getTopColGroup(a),s=Math.min.apply(Math,o);return{col:o.indexOf(s),y:s}},h._getTopColGroup=function(a){if(a<2)return this.colYs;for(var o=[],s=this.cols+1-a,l=0;l<s;l++)o[l]=this._getColGroupY(l,a);return o},h._getColGroupY=function(a,o){if(o<2)return this.colYs[a];var s=this.colYs.slice(a,a+o);return Math.max.apply(Math,s)},h._getHorizontalColPosition=function(a,o){var s=this.horizontalColIndex%this.cols,l=a>1&&s+a>this.cols;s=l?0:s;var m=o.size.outerWidth&&o.size.outerHeight;return this.horizontalColIndex=m?s+a:this.horizontalColIndex,{col:s,y:this._getColGroupY(s,a)}},h._manageStamp=function(a){var o=_(a),s=this._getElementOffset(a),l=this._getOption("originLeft"),m=l?s.left:s.right,u=m+o.outerWidth,y=Math.floor(m/this.columnWidth);y=Math.max(0,y);var n=Math.floor(u/this.columnWidth);n-=u%this.columnWidth?0:1,n=Math.min(this.cols-1,n);for(var E=this._getOption("originTop"),c=(E?s.top:s.bottom)+o.outerHeight,e=y;e<=n;e++)this.colYs[e]=Math.max(c,this.colYs[e])},h._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this._getOption("fitWidth")&&(a.width=this._getContainerFitWidth()),a},h._getContainerFitWidth=function(){for(var a=0,o=this.cols;--o&&this.colYs[o]===0;)a++;return(this.cols-a)*this.columnWidth-this.gutter},h.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!=this.containerWidth},f})})(N);var Z=N.exports;const J=Q(Z);export{J as M};
