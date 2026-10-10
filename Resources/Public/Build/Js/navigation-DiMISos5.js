function ye(t = "") {
  return t.trim().split(" ").filter((e) => !!e.trim());
}
function Ee(t) {
  Object.keys(t).forEach((e) => {
    try {
      t[e] = null;
    } catch {
    }
    try {
      delete t[e];
    } catch {
    }
  });
}
function me(t, e = 0) {
  return setTimeout(t, e);
}
function Z() {
  return Date.now();
}
function Pe(t) {
  return window.getComputedStyle(t, null);
}
function Me(t, e = "x") {
  const s = Pe(t), i = s.transform || s.webkitTransform;
  if (!i || i === "none")
    return 0;
  const n = new DOMMatrixReadOnly(i);
  return e === "x" ? n.m41 : n.m42;
}
function K(t) {
  return typeof t == "object" && t !== null && !!t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function Ce(t) {
  return typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : !!t && typeof t == "object" && (t.nodeType === 1 || t.nodeType === 11);
}
function _(t, ...e) {
  const s = Object(t);
  for (let i = 0; i < e.length; i += 1) {
    const n = e[i];
    if (n == null || Ce(n))
      continue;
    const r = n, o = Object.keys(Object(r));
    for (let a = 0, l = o.length; a < l; a += 1) {
      const f = o[a];
      if (f === "__proto__" || f === "constructor" || f === "prototype")
        continue;
      const d = Object.getOwnPropertyDescriptor(r, f);
      if (!d || !d.enumerable)
        continue;
      const c = r[f];
      K(s[f]) && K(c) ? c.__swiper__ ? s[f] = c : _(s[f], c) : !K(s[f]) && K(c) ? (s[f] = {}, c.__swiper__ ? s[f] = c : _(s[f], c)) : s[f] = c;
    }
  }
  return s;
}
function X(t, e, s) {
  t.style.setProperty(e, s);
}
function N(t, e = "") {
  const s = [...t.children];
  return t instanceof HTMLSlotElement && s.push(...t.assignedElements()), e ? s.filter((i) => i.matches(e)) : s;
}
function Ie(t, e) {
  const s = [e];
  for (; s.length > 0; ) {
    const i = s.shift();
    if (t === i)
      return !0;
    s.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
  }
  return !1;
}
function Le(t, e) {
  let s = e.contains(t);
  return !s && e instanceof HTMLSlotElement && (s = [...e.assignedElements()].includes(t), s || (s = Ie(t, e))), s;
}
function J(t) {
  try {
    console.warn(t);
  } catch {
  }
}
function Q(t, e = []) {
  const s = document.createElement(t);
  return s.classList.add(...Array.isArray(e) ? e : ye(e)), s;
}
function ke(t, e) {
  const s = [];
  let i = t.previousElementSibling;
  for (; i; )
    (!e || i.matches(e)) && s.push(i), i = i.previousElementSibling;
  return s;
}
function Oe(t, e) {
  const s = [];
  let i = t.nextElementSibling;
  for (; i; )
    (!e || i.matches(e)) && s.push(i), i = i.nextElementSibling;
  return s;
}
function R(t, e) {
  return window.getComputedStyle(t, null).getPropertyValue(e);
}
function oe(t) {
  if (!(!t || !t.parentNode))
    return [...t.parentNode.children].indexOf(t);
}
function ze(t, e) {
  const s = [];
  let i = t.parentElement;
  for (; i; )
    (!e || i.matches(e)) && s.push(i), i = i.parentElement;
  return s;
}
function de(t, e, s) {
  {
    const i = window.getComputedStyle(t, null);
    return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
  }
}
function H(t) {
  return (Array.isArray(t) ? t : [t]).filter((e) => !!e);
}
function Ae(t, e = "") {
  const s = globalThis.trustedTypes;
  typeof s < "u" ? t.innerHTML = s.createPolicy("html", { createHTML: (i) => i }).createHTML(e) : t.innerHTML = e;
}
let ee;
function Ge() {
  return typeof window > "u" ? { touch: !1 } : {
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0
  };
}
function ge() {
  return ee || (ee = Ge()), ee;
}
let te;
function Ve({ userAgent: t } = {}) {
  if (typeof window > "u")
    return { ios: !1, android: !1 };
  const e = ge(), s = navigator.platform, i = t || navigator.userAgent, n = { ios: !1, android: !1 }, r = /(Android);?[\s/]+([\d.]+)?/.test(i), o = /(iPhone\sOS|iOS|iPod)/.test(i), a = /iPad/.test(i), l = s === "MacIntel" && e.touch && navigator.maxTouchPoints > 1, f = a || l;
  return r && !(s === "Win32") && (n.os = "android", n.android = !0), (f || o) && (n.os = "ios", n.ios = !0), n;
}
function ve(t = {}) {
  return te || (te = Ve(t)), te;
}
let se;
function _e() {
  if (typeof window > "u")
    return { isSafari: !1, isWebView: !1, need3dFix: !1 };
  const t = ve(), e = navigator.userAgent, s = e.toLowerCase(), i = s.includes("safari") && !s.includes("chrome") && !s.includes("android"), n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e), r = i || n && t.ios;
  return { isSafari: i, isWebView: n, need3dFix: r };
}
function we() {
  return se || (se = _e()), se;
}
const re = (t, e) => {
  if (!t || t.destroyed || !t.params || !t.params.lazyPreload)
    return;
  const s = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, i = e.closest(s());
  if (i) {
    let n = i.querySelector(`.${t.params.lazyPreloaderClass}`);
    !n && t.isElement && (i.shadowRoot ? n = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      if (i.shadowRoot) {
        const r = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`);
        r && !r.lazyPreloaderManaged && r.remove();
      }
    })), n && !n.lazyPreloaderManaged && n.remove();
  }
}, ie = (t, e) => {
  if (!t.slides[e])
    return;
  const s = t.slides[e].querySelector('[loading="lazy"]');
  s && s.removeAttribute("loading");
}, Se = (t) => {
  if (!t || t.destroyed || !t.params || !t.params.lazyPreload)
    return;
  let e = t.params.lazyPreloadPrevNext;
  const s = t.slides.length;
  if (!s || !e || e < 0)
    return;
  e = Math.min(e, s);
  const i = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
  if (t.params.grid && (t.params.grid.rows ?? 1) > 1) {
    const o = n, a = [o - e];
    a.push(...Array.from({ length: e }).map((l, f) => o + i + f)), t.slides.forEach((l, f) => {
      l.column !== void 0 && a.includes(l.column) && ie(t, f);
    });
    return;
  }
  const r = n + i - 1;
  if (t.params.rewind || t.params.loop)
    for (let o = n - e; o <= r + e; o += 1) {
      const a = (o % s + s) % s;
      (a < n || a > r) && ie(t, a);
    }
  else
    for (let o = Math.max(n - e, 0); o <= Math.min(r + e, s - 1); o += 1)
      o !== n && (o > r || o < n) && ie(t, o);
};
function De(t, e = "window", s) {
  if (!t || e === "container" && !s)
    return;
  let i = !1;
  const n = e === "window" ? window.innerHeight : s.clientHeight, r = Object.keys(t).map((o) => {
    if (typeof o == "string" && o.indexOf("@") === 0) {
      const a = parseFloat(o.substr(1));
      return { value: n * a, point: o };
    }
    return { value: o, point: o };
  });
  r.sort((o, a) => parseInt(String(o.value), 10) - parseInt(String(a.value), 10));
  for (let o = 0; o < r.length; o += 1) {
    const { point: a, value: l } = r[o];
    e === "window" ? window.matchMedia(`(min-width: ${l}px)`).matches && (i = a) : l <= s.clientWidth && (i = a);
  }
  return i || "max";
}
const ce = (t, e) => !!(t.grid && e.grid && e.grid.rows > 1);
function Be() {
  const t = this, { realIndex: e, initialized: s, params: i, el: n } = t, r = i.breakpoints;
  if (!r || r && Object.keys(r).length === 0)
    return;
  const o = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", a = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? t.el : document.querySelector(i.breakpointsBase), l = t.getBreakpoint(r, o, a);
  if (!l || t.currentBreakpoint === l)
    return;
  const f = r, c = (l in f ? f[l] : void 0) || t.originalParams, h = ce(t, i), g = ce(t, c), u = t.params.grabCursor, p = c.grabCursor, y = i.enabled;
  h && !g ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), t.emitContainerClasses()) : !h && g && (n.classList.add(`${i.containerModifierClass}grid`), (c.grid.fill && c.grid.fill === "column" || !c.grid.fill && i.grid.fill === "column") && n.classList.add(`${i.containerModifierClass}grid-column`), t.emitContainerClasses()), u && !p ? t.unsetGrabCursor() : !u && p && t.setGrabCursor();
  const v = (E, C) => E[C];
  ["navigation", "pagination", "scrollbar"].forEach((E) => {
    const C = v(c, E);
    if (typeof C > "u")
      return;
    const L = v(i, E), B = typeof L == "object" && L !== null && L.enabled, w = typeof C == "object" && C !== null && C.enabled, x = t[E];
    B && !w && x?.disable?.(), !B && w && x?.enable?.();
  });
  const S = c.direction && c.direction !== i.direction, T = i.loop && (c.slidesPerView !== i.slidesPerView || S), m = i.loop;
  S && s && t.changeDirection(), _(t.params, c);
  const b = t.params.enabled, M = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }), y && !b ? t.disable() : !y && b && t.enable(), t.currentBreakpoint = l, t.emit("_beforeBreakpoint", c), s && (T ? (t.loopDestroy(), t.updateSlides(), t.loopCreate(e)) : !m && M ? (t.updateSlides(), t.loopCreate(e)) : m && !M && t.loopDestroy()), t.emit("breakpoint", c);
}
var Ne = { setBreakpoint: Be, getBreakpoint: De };
function Fe() {
  const t = this, { isLocked: e, params: s } = t, { slidesOffsetBefore: i } = s;
  if (i) {
    const n = t.slides.length - 1, r = t.slidesGrid[n] + t.slidesSizesGrid[n] + i * 2;
    t.isLocked = t.size > r;
  } else
    t.isLocked = t.snapGrid.length === 1;
  s.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), s.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var He = { checkOverflow: Fe };
function Re(t, e) {
  const s = [];
  return t.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((n) => {
      i[n] && s.push(e + n);
    }) : typeof i == "string" && s.push(e + i);
  }), s;
}
function $e() {
  const t = this, { classNames: e, params: s, rtl: i, el: n, device: r } = t, o = Re([
    "initialized",
    s.direction,
    { "free-mode": t.params.freeMode && s.freeMode.enabled },
    { autoheight: s.autoHeight },
    { rtl: i },
    { grid: s.grid && s.grid.rows > 1 },
    { "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column" },
    { android: r.android },
    { ios: r.ios },
    { "css-mode": s.cssMode },
    { centered: s.cssMode && s.centeredSlides },
    { "watch-progress": s.watchSlidesProgress }
  ], s.containerModifierClass);
  e.push(...o), n.classList.add(...e), t.emitContainerClasses();
}
function We() {
  const t = this, { el: e, classNames: s } = t;
  !e || typeof e == "string" || (e.classList.remove(...s), t.emitContainerClasses());
}
var je = { addClasses: $e, removeClasses: We };
const Te = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  snapToSlideEdge: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreload: !0,
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
var qe = {
  on(t, e, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function")
      return i;
    const n = s ? "unshift" : "push";
    return t.split(" ").forEach((r) => {
      i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][n](e);
    }), i;
  },
  once(t, e, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function")
      return i;
    const n = function(...o) {
      i.off(t, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(i, o);
    };
    return n.__emitterProxy = e, i.on(t, n, s);
  },
  onAny(t, e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function")
      return s;
    const i = e ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[i](t), s;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
      return e;
    const s = e.eventsAnyListeners.indexOf(t);
    return s >= 0 && e.eventsAnyListeners.splice(s, 1), e;
  },
  off(t, e) {
    const s = this;
    return !s.eventsListeners || s.destroyed || !s.eventsListeners || t.split(" ").forEach((i) => {
      typeof e > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && s.eventsListeners[i].splice(r, 1);
      });
    }), s;
  },
  emit(...t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
      return e;
    let s, i, n;
    if (typeof t[0] == "string" || Array.isArray(t[0]))
      s = t[0], i = t.slice(1, t.length), n = e;
    else {
      const o = t[0];
      s = o.events, i = o.data ?? [], n = o.context || e;
    }
    return i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach((o) => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((a) => {
        a.apply(n, [o, ...i]);
      }), e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach((a) => {
        a.apply(n, i);
      });
    }), e;
  }
};
function Ye(t) {
  const e = this;
  e.destroyed || e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
}
function Xe() {
  const t = this;
  t.destroyed || t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
function Ue(t) {
  const e = this;
  e.destroyed || (re(e, t.target), !(t.type === "error" || e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update());
}
function Ke() {
  const t = this, { params: e, el: s } = t;
  if (s && s.offsetWidth === 0)
    return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = t, o = t.virtual && t.params.virtual?.enabled;
  t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const a = o && e.loop;
  if ((e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !a) {
    const l = o ? t.virtual.slides.length : t.slides.length;
    t.slideTo(l - 1, 0, !1, !0);
  } else
    t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
  if (t.autoplay && t.autoplay.running && t.autoplay.paused) {
    const l = t.autoplay;
    clearTimeout(l.resizeTimeout), l.resizeTimeout = setTimeout(() => {
      t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
    }, 500);
  }
  t.allowSlidePrev = n, t.allowSlideNext = i, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function Ze() {
  const t = this;
  if (t.destroyed)
    return;
  const { wrapperEl: e, rtlTranslate: s, enabled: i } = t;
  if (!i)
    return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(s ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
}
function Je(t) {
  const e = this;
  if (e.destroyed)
    return;
  const s = e.touchEventsData;
  let i = t.originalEvent ?? t;
  if (i.type === "touchend" || i.type === "touchcancel") {
    const b = [...i.changedTouches].find((M) => M.identifier === s.touchId);
    if (!b || b.identifier !== s.touchId)
      return;
  } else if (s.touchId !== null || i.pointerId !== s.pointerId)
    return;
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  s.pointerId = null, s.touchId = null, s.startEventPath = void 0, s.lastMoveEvent = void 0;
  const { params: r, touches: o, rtlTranslate: a, slidesGrid: l, enabled: f } = e;
  if (!f || !r.simulateTouch && i.pointerType === "mouse")
    return;
  if (s.allowTouchCallbacks && e.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && r.grabCursor && e.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  r.grabCursor && s.isMoved && s.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const d = Z(), c = d - s.touchStartTime;
  if (e.allowClick) {
    const m = i.path ?? (i.composedPath && i.composedPath());
    e.updateClickedSlide(m && m[0], m), e.emit("tap click", i), c < 300 && d - s.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
  }
  if (s.lastClickTime = Z(), me(() => {
    e.destroyed || (e.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !e.swipeDirection || o.diff === 0 && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let h;
  if (r.followFinger ? h = a ? e.translate : -e.translate : h = -(s.currentTranslate ?? 0), r.cssMode)
    return;
  if (r.freeMode && r.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  const g = h >= -e.maxTranslate() && !e.params.loop;
  let u = 0, p = e.slidesSizesGrid[0];
  for (let m = 0; m < l.length; m += m < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
    const b = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof l[m + b] < "u" ? (g || h >= l[m] && h < l[m + b]) && (u = m, p = l[m + b] - l[m]) : (g || h >= l[m]) && (u = m, p = l[l.length - 1] - l[l.length - 2]);
  }
  let y = null, v = null;
  r.rewind && (e.isBeginning ? v = r.virtual?.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
  const S = (h - l[u]) / p, T = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (c > r.longSwipesMs) {
    if (!r.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (S >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? y : u + T) : e.slideTo(u)), e.swipeDirection === "prev" && (S > 1 - r.longSwipesRatio ? e.slideTo(u + T) : v !== null && S < 0 && Math.abs(S) > r.longSwipesRatio ? e.slideTo(v) : e.slideTo(u));
  } else {
    if (!r.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(u + T) : e.slideTo(u) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : u + T), e.swipeDirection === "prev" && e.slideTo(v !== null ? v : u));
  }
}
function Qe(t) {
  const e = this;
  if (e.destroyed)
    return;
  const s = e.touchEventsData, { params: i, touches: n, rtlTranslate: r, enabled: o } = e;
  if (!o || !i.simulateTouch && t.pointerType === "mouse")
    return;
  const a = t, l = a.originalEvent ?? a;
  if (l.type === "pointermove" && (s.touchId !== null || l.pointerId !== s.pointerId))
    return;
  let f;
  if (l.type === "touchmove") {
    const E = [...l.changedTouches].find((C) => C.identifier === s.touchId);
    if (!E || E.identifier !== s.touchId)
      return;
    f = E;
  } else
    f = l;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && e.emit("touchMoveOpposite", l);
    return;
  }
  if (s.lastMoveEvent === l)
    return;
  s.lastMoveEvent = l;
  for (const M of s.startEventPath ?? []) {
    if (M === e.el)
      break;
    const E = M.swiper;
    E && E !== e && !E.destroyed && E.params.nested && E.touchEventsData.isTouched && E.onTouchMove(t);
  }
  const d = f.pageX, c = f.pageY;
  if (l.preventedByNestedSwiper) {
    n.startX = d, n.startY = c;
    return;
  }
  if (!e.allowTouchMove) {
    l.target.matches(s.focusableElements) || (e.allowClick = !1), s.isTouched && (Object.assign(n, {
      startX: d,
      startY: c,
      currentX: d,
      currentY: c
    }), s.touchStartTime = Z());
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop)
    if (e.isVertical()) {
      if (c < n.startY && e.translate <= e.maxTranslate() || c > n.startY && e.translate >= e.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else {
      if (r && (d > n.startX && -e.translate <= e.maxTranslate() || d < n.startX && -e.translate >= e.minTranslate()))
        return;
      if (!r && (d < n.startX && e.translate <= e.maxTranslate() || d > n.startX && e.translate >= e.minTranslate()))
        return;
    }
  if (document.activeElement && document.activeElement.matches(s.focusableElements) && document.activeElement !== l.target && l.pointerType !== "mouse" && document.activeElement.blur(), document.activeElement && l.target === document.activeElement && l.target.matches(s.focusableElements)) {
    s.isMoved = !0, e.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && e.emit("touchMove", l), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = d, n.currentY = c;
  const h = n.currentX - n.startX, g = n.currentY - n.startY;
  if (e.params.threshold && Math.sqrt(h ** 2 + g ** 2) < e.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let M;
    e.isHorizontal() && n.currentY === n.startY || e.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : h * h + g * g >= 25 && (M = Math.atan2(Math.abs(g), Math.abs(h)) * 180 / Math.PI, s.isScrolling = e.isHorizontal() ? M > i.touchAngle : 90 - M > i.touchAngle);
  }
  if (s.isScrolling && e.emit("touchMoveOpposite", l), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling || l.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  e.allowClick = !1, !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let u = e.isHorizontal() ? h : g, p = e.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  i.oneWayMovement && (u = Math.abs(u) * (r ? 1 : -1), p = Math.abs(p) * (r ? 1 : -1)), n.diff = u, u *= i.touchRatio, r && (u = -u, p = -p);
  const y = e.touchesDirection;
  e.swipeDirection = u > 0 ? "prev" : "next", e.touchesDirection = p > 0 ? "prev" : "next";
  const v = e.params.loop && !i.cssMode, S = e.touchesDirection === "next" && e.allowSlideNext || e.touchesDirection === "prev" && e.allowSlidePrev;
  if (!s.isMoved) {
    if (v && S && e.loopFix({ direction: e.swipeDirection }), s.startTranslate = e.getTranslate(), e.setTransition(0), e.animating) {
      const M = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      e.wrapperEl.dispatchEvent(M);
    }
    s.allowMomentumBounce = !1, i.grabCursor && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!0), e.emit("sliderFirstMove", l);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), i._loopSwapReset !== !1 && s.isMoved && s.allowThresholdMove && y !== e.touchesDirection && v && S && Math.abs(u) >= 1) {
    Object.assign(n, {
      startX: d,
      startY: c,
      currentX: d,
      currentY: c,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  e.emit("sliderMove", l), s.isMoved = !0;
  const T = s.startTranslate ?? 0;
  s.currentTranslate = u + T;
  let m = !0, b = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (b = 0), u > 0 ? (v && S && s.allowThresholdMove && s.currentTranslate > (i.centeredSlides ? e.minTranslate() - e.slidesSizesGrid[e.activeIndex + 1] - (i.slidesPerView !== "auto" && e.slides.length - i.slidesPerView >= 2 ? e.slidesSizesGrid[e.activeIndex + 1] + e.params.spaceBetween : 0) - e.params.spaceBetween : e.minTranslate()) && e.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), s.currentTranslate > e.minTranslate() && (m = !1, i.resistance && (s.currentTranslate = e.minTranslate() - 1 + (-e.minTranslate() + T + u) ** b))) : u < 0 && (v && S && s.allowThresholdMove && s.currentTranslate < (i.centeredSlides ? e.maxTranslate() + e.slidesSizesGrid[e.slidesSizesGrid.length - 1] + e.params.spaceBetween + (i.slidesPerView !== "auto" && e.slides.length - i.slidesPerView >= 2 ? e.slidesSizesGrid[e.slidesSizesGrid.length - 1] + e.params.spaceBetween : 0) : e.maxTranslate()) && e.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: e.slides.length - (i.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(parseFloat(String(i.slidesPerView))))
  }), s.currentTranslate < e.maxTranslate() && (m = !1, i.resistance && (s.currentTranslate = e.maxTranslate() + 1 - (e.maxTranslate() - T - u) ** b))), m && (l.preventedByNestedSwiper = !0), !e.allowSlideNext && e.swipeDirection === "next" && (s.currentTranslate ?? 0) < T && (s.currentTranslate = T), !e.allowSlidePrev && e.swipeDirection === "prev" && (s.currentTranslate ?? 0) > T && (s.currentTranslate = T), !e.allowSlidePrev && !e.allowSlideNext && (s.currentTranslate = T), i.threshold > 0)
    if (Math.abs(u) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, n.diff = e.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && e.freeMode || i.watchSlidesProgress) && (e.updateActiveIndex(), e.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && e.freeMode && e.freeMode.onTouchMove(), e.updateProgress(s.currentTranslate), e.setTranslate(s.currentTranslate ?? 0));
}
function et(t, e) {
  function s(i) {
    if (!i || i === document || i === window)
      return null;
    let n = i;
    n.assignedSlot && (n = n.assignedSlot);
    const r = n.closest(t);
    if (!r && !n.getRootNode)
      return null;
    const o = n.getRootNode();
    return r || s(o.host);
  }
  return s(e);
}
function fe(t, e, s) {
  const { params: i } = t, n = i.edgeSwipeDetection, r = i.edgeSwipeThreshold;
  return n && (s <= r || s >= window.innerWidth - r) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function tt(t) {
  const e = this;
  if (e.destroyed)
    return;
  const s = t.originalEvent ?? t, i = e.touchEventsData;
  if (s.type === "pointerdown") {
    const S = s;
    if (i.pointerId !== null && i.pointerId !== S.pointerId)
      return;
    i.pointerId = S.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (i.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    fe(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: r, enabled: o } = e;
  if (!o || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
    return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let a = s.target;
  if (n.touchEventsTarget === "wrapper" && !Le(a, e.wrapperEl))
    return;
  const l = s;
  if (typeof l.which == "number" && l.which === 3 || typeof l.button == "number" && l.button > 0 || i.isTouched && i.isMoved)
    return;
  const f = !!n.noSwipingClass && n.noSwipingClass !== "", d = s.composedPath ? s.composedPath() : s.path;
  f && s.target && s.target.shadowRoot && d && (a = d[0]);
  const c = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, h = !!(s.target && s.target.shadowRoot);
  if (n.noSwiping && (h ? et(c, a) : a.closest(c))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && typeof n.swipeHandler == "string" && !a.closest(n.swipeHandler))
    return;
  const g = s;
  r.currentX = g.pageX, r.currentY = g.pageY;
  const u = r.currentX, p = r.currentY;
  if (!fe(e, s, u))
    return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), r.startX = u, r.startY = p, i.touchStartTime = Z(), i.startEventPath = d, e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1);
  let y = !0;
  a.matches(i.focusableElements) && (y = !1, a.nodeName === "SELECT" && (i.isTouched = !1)), document.activeElement && document.activeElement.matches(i.focusableElements) && document.activeElement !== a && (g.pointerType === "mouse" || g.pointerType !== "mouse" && !a.matches(i.focusableElements)) && document.activeElement.blur();
  const v = y && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || v) && !a.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
}
const be = (t, e) => {
  const { params: s, el: i, wrapperEl: n, device: r } = t, o = !!s.nested, a = e === "on" ? "addEventListener" : "removeEventListener", l = e;
  if (!i || typeof i == "string")
    return;
  document[a]("touchstart", t.onDocumentTouchStart, {
    passive: !1,
    capture: o
  }), i[a]("touchstart", t.onTouchStart, { passive: !1 }), i[a]("pointerdown", t.onTouchStart, { passive: !1 }), document[a]("touchmove", t.onTouchMove, {
    passive: !1,
    capture: o
  }), document[a]("pointermove", t.onTouchMove, {
    passive: !1,
    capture: o
  }), document[a]("touchend", t.onTouchEnd, { passive: !0 }), document[a]("pointerup", t.onTouchEnd, { passive: !0 }), document[a]("pointercancel", t.onTouchEnd, { passive: !0 }), document[a]("touchcancel", t.onTouchEnd, { passive: !0 }), document[a]("pointerout", t.onTouchEnd, { passive: !0 }), document[a]("pointerleave", t.onTouchEnd, { passive: !0 }), document[a]("contextmenu", t.onTouchEnd, { passive: !0 }), (s.preventClicks || s.preventClicksPropagation) && i[a]("click", t.onClick, !0), s.cssMode && n[a]("scroll", t.onScroll);
  const f = (d) => {
    t[l](d, Ke, !0);
  };
  s.updateOnWindowResize ? f(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate") : f("observerUpdate"), s.lazyPreload && (i[a]("load", t.onLoad, { capture: !0 }), i[a]("error", t.onLoad, { capture: !0 }));
};
function st() {
  const t = this, { params: e } = t;
  t.onTouchStart = tt.bind(t), t.onTouchMove = Qe.bind(t), t.onTouchEnd = Je.bind(t), t.onDocumentTouchStart = Xe.bind(t), e.cssMode && (t.onScroll = Ze.bind(t)), t.onClick = Ye.bind(t), t.onLoad = Ue.bind(t), be(t, "on");
}
function it() {
  be(this, "off");
}
var nt = {
  attachEvents: st,
  detachEvents: it
};
function rt(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
    return;
  const s = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function at() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  }));
}
var lt = {
  setGrabCursor: rt,
  unsetGrabCursor: at
};
function ot(t, e) {
  const s = this, { params: i, slidesEl: n } = s;
  if (!i.loop || s.virtual && s.params.virtual?.enabled)
    return;
  const r = () => {
    N(n, `.${i.slideClass}, swiper-slide`).forEach((u, p) => {
      u.setAttribute("data-swiper-slide-index", String(p));
    });
  }, o = () => {
    const g = N(n, `.${i.slideBlankClass}`);
    g.forEach((u) => {
      u.remove();
    }), g.length > 0 && (s.recalcSlides(), s.updateSlides());
  }, a = s.grid && i.grid && i.grid.rows > 1;
  i.loopAddBlankSlides && (i.slidesPerGroup > 1 || a) && o();
  const l = i.slidesPerGroup * (a ? i.grid.rows : 1), f = s.slides.length % l !== 0, d = a && s.slides.length % i.grid.rows !== 0, c = (g) => {
    for (let u = 0; u < g; u += 1) {
      const p = s.isElement ? Q("swiper-slide", [i.slideBlankClass]) : Q("div", [i.slideClass, i.slideBlankClass]);
      s.slidesEl.append(p);
    }
  };
  if (f) {
    if (i.loopAddBlankSlides) {
      const g = l - s.slides.length % l;
      c(g), s.recalcSlides(), s.updateSlides();
    } else
      J("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else if (d) {
    if (i.loopAddBlankSlides) {
      const g = i.grid.rows - s.slides.length % i.grid.rows;
      c(g), s.recalcSlides(), s.updateSlides();
    } else
      J("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else
    r();
  const h = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
  s.loopFix({
    slideRealIndex: t,
    direction: h ? void 0 : "next",
    initial: e
  });
}
function dt() {
  const t = this, { params: e, slidesEl: s } = t;
  if (!e.loop || !s || t.virtual && t.params.virtual?.enabled)
    return;
  t.recalcSlides();
  const i = [];
  t.slides.forEach((n) => {
    const r = n, o = typeof r.swiperSlideIndex > "u" ? Number(n.getAttribute("data-swiper-slide-index")) : r.swiperSlideIndex;
    i[o] = n;
  }), t.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), i.forEach((n) => {
    s.append(n);
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
}
function ct(t = {}) {
  const { slideRealIndex: e, slideTo: s = !0, direction: i, setTranslate: n, activeSlideIndex: r, initial: o, byController: a, byMousewheel: l } = t;
  let f = r;
  const d = this;
  if (!d.params.loop || d.params.watchOverflow && d.isLocked)
    return;
  d.emit("beforeLoopFix"), d.__loopFixInProgress__ = !0;
  const { slides: c, allowSlidePrev: h, allowSlideNext: g, slidesEl: u, params: p } = d, { centeredSlides: y, slidesOffsetBefore: v, slidesOffsetAfter: S, initialSlide: T } = p, m = y || !!v || !!S;
  if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && p.virtual?.enabled) {
    if (s) {
      const I = d.virtual.slides.length, z = d.virtual.slidesBefore ?? 0;
      !m && d.snapIndex === 0 ? d.slideTo(I, 0, !1, !0) : m && d.snapIndex < p.slidesPerView ? d.slideTo(I + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(z, 0, !1, !0);
    }
    d.allowSlidePrev = h, d.allowSlideNext = g, d.__loopFixInProgress__ = !1, d.emit("loopFix");
    return;
  }
  let b = p.slidesPerView;
  b === "auto" ? b = d.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(String(p.slidesPerView))), m && b % 2 === 0 && (b = b + 1));
  const M = p.slidesPerGroupAuto ? b : p.slidesPerGroup, E = (I) => (typeof I == "function" ? I.call(d) : I) || 0, C = d.slidesGrid.length > 1 ? (d.slidesGrid[d.slidesGrid.length - 1] - d.slidesGrid[0]) / (d.slidesGrid.length - 1) : d.size, L = C > 0 ? E(v) / C : 0, B = C > 0 ? E(S) / C : 0;
  let w = m ? Math.max(M, (y ? Math.ceil(b / 2) : 0) + Math.ceil(Math.max(L, B))) : M;
  w % M !== 0 && (w += M - w % M), w += p.loopAdditionalSlides, d.loopedSlides = w;
  const x = d.grid && p.grid && p.grid.rows > 1;
  c.length < b + w || d.params.effect === "cards" && c.length < b + w * 2 ? J("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : x && p.grid.fill === "row" && J("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const P = [], O = [], k = x ? Math.ceil(c.length / p.grid.rows) : c.length, G = o && k - T < b && !m;
  let A = G ? T : d.activeIndex;
  typeof f > "u" ? f = d.getSlideIndex(c.find((I) => I.classList.contains(p.slideActiveClass))) : A = f;
  const U = i === "next" || !i, j = i === "prev" || !i;
  let q = 0, F = 0;
  const $ = (x ? c[f].column ?? 0 : f) + (m && typeof n > "u" ? (y ? -b / 2 + 0.5 : 0) - L : 0);
  if ($ < w) {
    q = Math.max(w - $, M);
    for (let I = 0; I < w - $; I += 1) {
      const z = I - Math.floor(I / k) * k;
      if (x) {
        const D = k - z - 1;
        for (let Y = c.length - 1; Y >= 0; Y -= 1)
          c[Y].column === D && P.push(Y);
      } else
        P.push(k - z - 1);
    }
  } else if ($ + b > k - w) {
    F = Math.max($ - (k - w * 2), M), G && (F = Math.max(F, b - k + T + 1));
    for (let I = 0; I < F; I += 1) {
      const z = I - Math.floor(I / k) * k;
      x ? c.forEach((D, Y) => {
        D.column === z && O.push(Y);
      }) : O.push(z);
    }
  }
  if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
    d.__preventObserver__ = !1;
  }), d.params.effect === "cards" && c.length < b + w * 2 && (O.includes(f) && O.splice(O.indexOf(f), 1), P.includes(f) && P.splice(P.indexOf(f), 1)), j && P.forEach((I) => {
    const z = c[I];
    z.swiperLoopMoveDOM = !0, u.prepend(z), z.swiperLoopMoveDOM = !1;
  }), U && O.forEach((I) => {
    const z = c[I];
    z.swiperLoopMoveDOM = !0, u.append(z), z.swiperLoopMoveDOM = !1;
  }), d.recalcSlides(), p.slidesPerView === "auto" ? d.updateSlides() : x && (P.length > 0 && j || O.length > 0 && U) && d.slides.forEach((I, z) => {
    d.grid.updateSlide(z, I, d.slides);
  }), p.watchSlidesProgress && d.updateSlidesOffset(), s) {
    if (P.length > 0 && j) {
      if (typeof e > "u") {
        const I = d.slidesGrid[A], D = d.slidesGrid[A + q] - I;
        l ? d.setTranslate(d.translate - D) : (d.slideTo(A + Math.ceil(q), 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - D, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - D));
      } else if (n) {
        const I = x ? P.length / p.grid.rows : P.length;
        d.slideTo(d.activeIndex + I, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate;
      }
    } else if (O.length > 0 && U)
      if (typeof e > "u") {
        const I = d.slidesGrid[A], D = d.slidesGrid[A - F] - I;
        l ? d.setTranslate(d.translate - D) : (d.slideTo(A - F, 0, !1, !0), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - D, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - D));
      } else {
        const I = x ? O.length / p.grid.rows : O.length;
        d.slideTo(d.activeIndex - I, 0, !1, !0);
      }
  }
  d.allowSlidePrev = h, d.allowSlideNext = g;
  const W = d.controller?.control;
  if (W && !a) {
    const I = {
      slideRealIndex: e,
      direction: i,
      setTranslate: n,
      activeSlideIndex: f,
      byController: !0
    };
    Array.isArray(W) ? W.forEach((z) => {
      !z.destroyed && z.params.loop && z.loopFix({
        ...I,
        slideTo: z.params.slidesPerView === p.slidesPerView ? s : !1
      });
    }) : W instanceof d.constructor && W.params.loop && W.loopFix({
      ...I,
      slideTo: W.params.slidesPerView === p.slidesPerView ? s : !1
    });
  }
  d.__loopFixInProgress__ = !1, d.emit("loopFix");
}
var ft = {
  loopCreate: ot,
  loopFix: ct,
  loopDestroy: dt
};
function ut(t, e) {
  return function(i = {}) {
    const n = Object.keys(i)[0], r = i[n];
    if (typeof r != "object" || r === null) {
      _(e, i);
      return;
    }
    if (t[n] === !0 && (t[n] = { enabled: !0 }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
      _(e, i);
      return;
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = { enabled: !1 }), _(e, i);
  };
}
const pt = ({ swiper: t, extendParams: e, on: s }) => {
  const i = [], n = (a, l = {}) => {
    const f = window.MutationObserver || window.WebkitMutationObserver;
    if (!f)
      return;
    const d = new f((c) => {
      if (t.__preventObserver__)
        return;
      if (c.length === 1) {
        t.emit("observerUpdate", c[0]);
        return;
      }
      const h = function() {
        t.emit("observerUpdate", c[0]);
      };
      window.requestAnimationFrame ? window.requestAnimationFrame(h) : window.setTimeout(h, 0);
    });
    d.observe(a, {
      attributes: typeof l.attributes > "u" ? !0 : l.attributes,
      childList: t.isElement || (typeof l.childList > "u" ? !0 : l.childList),
      characterData: typeof l.characterData > "u" ? !0 : l.characterData
    }), i.push(d);
  }, r = () => {
    if (t.params.observer) {
      if (t.params.observeParents) {
        const a = ze(t.hostEl);
        for (let l = 0; l < a.length; l += 1)
          n(a[l]);
      }
      n(t.hostEl, {
        childList: t.params.observeSlideChildren
      }), n(t.wrapperEl, { attributes: !1 });
    }
  }, o = () => {
    i.forEach((a) => {
      a.disconnect();
    }), i.splice(0, i.length);
  };
  e({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", r), s("destroy", o);
}, ht = ({ swiper: t, on: e, emit: s }) => {
  let i = null, n = null;
  const r = () => {
    !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
  }, o = () => {
    if (!t || t.destroyed || !t.initialized)
      return;
    let f = t.width, d = t.height;
    i = new ResizeObserver((c) => {
      n = window.requestAnimationFrame(() => {
        let h = f, g = d;
        c.forEach(({ contentBoxSize: u, contentRect: p, target: y }) => {
          if (y && y !== t.el)
            return;
          const v = Array.isArray(u) ? u[0] : u;
          h = p ? p.width : v.inlineSize, g = p ? p.height : v.blockSize;
        }), (h !== f || g !== d) && (f = h, d = g, r());
      });
    }), i.observe(t.el);
  }, a = () => {
    n && window.cancelAnimationFrame(n), i && i.unobserve && t.el && (i.unobserve(t.el), i = null);
  }, l = () => {
    !t || t.destroyed || !t.initialized || s("orientationchange");
  };
  e("init", () => {
    if (t.params.resizeObserver && typeof window.ResizeObserver < "u") {
      o();
      return;
    }
    window.addEventListener("resize", r), window.addEventListener("orientationchange", l);
  }), e("destroy", () => {
    a(), window.removeEventListener("resize", r), window.removeEventListener("orientationchange", l);
  });
};
function mt(t, e = !0, s) {
  const i = this, { enabled: n, params: r, animating: o } = i;
  if (!n || i.destroyed)
    return i;
  typeof t > "u" && (t = i.params.speed);
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : a, f = i.virtual && r.virtual?.enabled;
  if (r.loop) {
    if (o && !f && r.loopPreventsSliding)
      return !1;
    if (i.loopFix({ direction: "next" }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + l, t, e, s);
      }), !0;
  }
  return r.rewind && i.isEnd ? i.slideTo(0, t, e, s) : i.slideTo(i.activeIndex + l, t, e, s);
}
function gt(t, e = !0, s) {
  const i = this, { params: n, snapGrid: r, slidesGrid: o, rtlTranslate: a, enabled: l, animating: f } = i;
  if (!l || i.destroyed)
    return i;
  typeof t > "u" && (t = i.params.speed);
  const d = i.virtual && n.virtual?.enabled;
  if (n.loop) {
    if (f && !d && n.loopPreventsSliding)
      return !1;
    i.loopFix({ direction: "prev" }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const c = a ? i.translate : -i.translate;
  function h(S) {
    return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S);
  }
  const g = h(c), u = r.map((S) => h(S)), p = n.freeMode && n.freeMode.enabled;
  let y = r[u.indexOf(g) - 1];
  if (typeof y > "u" && (n.cssMode || p)) {
    let S;
    r.forEach((T, m) => {
      g >= T && (S = m);
    }), typeof S < "u" && (y = p ? r[S] : r[S > 0 ? S - 1 : S]);
  }
  let v = 0;
  if (typeof y < "u" && (v = o.indexOf(y), v < 0 && (v = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), n.rewind && i.isBeginning) {
    const S = i.params.virtual?.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(S, t, e, s);
  } else if (n.loop && i.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      i.slideTo(v, t, e, s);
    }), !0;
  return i.slideTo(v, t, e, s);
}
function vt(t, e = !0, s) {
  const i = this;
  if (!i.destroyed)
    return typeof t > "u" && (t = i.params.speed), i.slideTo(i.activeIndex, t, e, s);
}
function wt(t = 0, e, s = !0, i, n) {
  typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const { params: a, snapGrid: l, slidesGrid: f, previousIndex: d, activeIndex: c, rtlTranslate: h, wrapperEl: g, enabled: u } = r;
  if (!u && !i && !n || r.destroyed || r.animating && a.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = r.params.speed);
  const p = Math.min(r.params.slidesPerGroupSkip, o);
  let y = p + Math.floor((o - p) / r.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1);
  const v = -l[y];
  if (a.normalizeSlideIndex)
    for (let E = 0; E < f.length; E += 1) {
      const C = -Math.floor(v * 100), L = Math.floor(f[E] * 100), B = Math.floor(f[E + 1] * 100);
      typeof f[E + 1] < "u" ? C >= L && C < B - (B - L) / 2 ? o = E : C >= L && C < B && (o = E + 1) : C >= L && (o = E);
    }
  if (r.initialized && o !== c && (!r.allowSlideNext && (h ? v > r.translate && v > r.minTranslate() : v < r.translate && v < r.minTranslate()) || !r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (c || 0) !== o))
    return !1;
  o !== (d || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v);
  let S;
  o > c ? S = "next" : o < c ? S = "prev" : S = "reset";
  const T = r.virtual && r.params.virtual?.enabled;
  if (!(T && n) && (h && -v === r.translate || !h && v === r.translate))
    return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), a.effect !== "slide" && r.setTranslate(v), S !== "reset" && (r.transitionStart(s, S), r.transitionEnd(s, S)), !1;
  if (a.cssMode) {
    const E = r.isHorizontal(), C = h ? v : -v;
    return e === 0 ? (T && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), T && !r._cssModeVirtualInitialSet && (r.params.initialSlide ?? 0) > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
      g[E ? "scrollLeft" : "scrollTop"] = C;
    })) : g[E ? "scrollLeft" : "scrollTop"] = C, T && requestAnimationFrame(() => {
      r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
    })) : g.scrollTo({
      [E ? "left" : "top"]: C,
      behavior: "smooth"
    }), !0;
  }
  const M = we().isSafari;
  return T && !n && M && r.isElement && r.virtual.update(!1, !1, o), r.setTransition(e), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(s, S), e === 0 ? r.transitionEnd(s, S) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(C) {
    !r || r.destroyed || C.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, S));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
}
function St() {
  const t = this;
  if (t.destroyed)
    return;
  const { params: e, slidesEl: s, clickedSlide: i, clickedIndex: n } = t;
  if (i === void 0 || n === void 0)
    return;
  const r = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let o = t.getSlideIndexWhenGrid(n), a;
  const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`, f = t.grid && t.params.grid && t.params.grid.rows > 1;
  if (e.loop) {
    if (t.animating)
      return;
    a = parseInt(i.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? t.slideToLoop(a) : o > (f ? (t.slides.length - r) / 2 - (t.params.grid.rows - 1) : t.slides.length - r) ? (t.loopFix(), o = t.getSlideIndex(N(s, `${l}[data-swiper-slide-index="${a}"]`)[0]), me(() => {
      t.slideTo(o);
    })) : t.slideTo(o);
  } else
    t.slideTo(o);
}
function Tt(t, e = !0, s, i = 0.5) {
  const n = this;
  if (n.destroyed)
    return;
  typeof t > "u" && (t = n.params.speed);
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r), a = o + Math.floor((r - o) / n.params.slidesPerGroup), l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[a]) {
    const f = n.snapGrid[a], d = n.snapGrid[a + 1];
    l - f > (d - f) * i && (r += n.params.slidesPerGroup);
  } else {
    const f = n.snapGrid[a - 1], d = n.snapGrid[a];
    l - f <= (d - f) * i && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, s);
}
function bt(t = 0, e, s = !0, i) {
  typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  if (n.destroyed)
    return;
  typeof e > "u" && (e = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = t;
  if (n.params.loop)
    if (n.virtual && n.params.virtual?.enabled)
      o = o + (n.virtual.slidesBefore ?? 0);
    else {
      let a;
      if (r) {
        const p = o * n.params.grid.rows;
        a = n.slides.find((v) => Number(v.getAttribute("data-swiper-slide-index")) === p)?.column ?? 0;
      } else
        a = n.getSlideIndexByData(o);
      const l = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, { centeredSlides: f, slidesOffsetBefore: d, slidesOffsetAfter: c } = n.params, h = f || !!d || !!c;
      let g;
      n.params.slidesPerView === "auto" ? g = n.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(String(n.params.slidesPerView))), h && g % 2 === 0 && (g = g + 1));
      let u = l - a < g;
      if (h && (u = u || a < Math.ceil(g / 2)), i && h && n.params.slidesPerView !== "auto" && !r && (u = !1), u) {
        const p = h ? a < n.activeIndex ? "prev" : "next" : a - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
          slideRealIndex: p === "next" ? n.realIndex : void 0
        });
      }
      if (r) {
        const p = o * n.params.grid.rows;
        o = n.slides.find((v) => Number(v.getAttribute("data-swiper-slide-index")) === p)?.column ?? 0;
      } else
        o = n.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    n.slideTo(o, e, s, i);
  }), n;
}
var xt = {
  slideTo: wt,
  slideToLoop: bt,
  slideNext: mt,
  slidePrev: gt,
  slideReset: vt,
  slideToClosest: Tt,
  slideToClickedSlide: St
};
function yt(t, e) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${t}ms`, s.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), s.emit("setTransition", t, e);
}
function xe({ swiper: t, runCallbacks: e, direction: s, step: i }) {
  const { activeIndex: n, previousIndex: r } = t;
  let o = s;
  o || (n > r ? o = "next" : n < r ? o = "prev" : o = "reset"), t.emit(`transition${i}`), e && o === "reset" ? t.emit(`slideResetTransition${i}`) : e && n !== r && (t.emit(`slideChangeTransition${i}`), o === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`));
}
function Et(t = !0, e) {
  const s = this, { params: i } = s;
  s.animating = !1, !i.cssMode && (s.setTransition(0), xe({ swiper: s, runCallbacks: t, direction: e, step: "End" }));
}
function Pt(t = !0, e) {
  const s = this, { params: i } = s;
  i.cssMode || (i.autoHeight && s.updateAutoHeight(), xe({ swiper: s, runCallbacks: t, direction: e, step: "Start" }));
}
var Mt = {
  setTransition: yt,
  transitionStart: Pt,
  transitionEnd: Et
};
function Ct(t = this.isHorizontal() ? "x" : "y") {
  const e = this, { params: s, rtlTranslate: i, translate: n, wrapperEl: r } = e;
  if (s.virtualTranslate)
    return i ? -n : n;
  if (s.cssMode)
    return n;
  let o = Me(r, t);
  return o += e.cssOverflowAdjustment(), i && (o = -o), o || 0;
}
function It() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Lt() {
  return -this.snapGrid[0];
}
function kt(t, e) {
  const s = this, { rtlTranslate: i, params: n, wrapperEl: r, progress: o } = s;
  let a = 0, l = 0;
  const f = 0;
  s.isHorizontal() ? a = i ? -t : t : l = t, n.roundLengths && (a = Math.floor(a), l = Math.floor(l)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? a : l, n.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -a : -l : n.virtualTranslate || (s.isHorizontal() ? a -= s.cssOverflowAdjustment() : l -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${a}px, ${l}px, ${f}px)`);
  let d;
  const c = s.maxTranslate() - s.minTranslate();
  c === 0 ? d = 0 : d = (t - s.minTranslate()) / c, d !== o && s.updateProgress(t), s.emit("setTranslate", s.translate, e);
}
function Ot(t = 0, e = this.params.speed, s = !0, i = !0, n) {
  const r = this, { params: o, wrapperEl: a } = r;
  if (r.animating && o.preventInteractionOnTransition)
    return !1;
  const l = r.minTranslate(), f = r.maxTranslate();
  let d;
  if (i && t > l ? d = l : i && t < f ? d = f : d = t, r.updateProgress(d), o.cssMode) {
    const c = r.isHorizontal();
    return e === 0 ? a[c ? "scrollLeft" : "scrollTop"] = -d : a.scrollTo({
      [c ? "left" : "top"]: -d,
      behavior: "smooth"
    }), !0;
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(d), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(d), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(h) {
    !r || r.destroyed || h.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
}
var zt = {
  getTranslate: Ct,
  setTranslate: kt,
  minTranslate: Lt,
  maxTranslate: It,
  translateTo: Ot
};
function At(t) {
  const { slidesGrid: e, params: s } = t, i = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : i >= e[r] && i < e[r + 1] && (n = r + 1) : i >= e[r] && (n = r);
  return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Gt(t) {
  const e = this, s = e.rtlTranslate ? e.translate : -e.translate, { snapGrid: i, params: n, activeIndex: r, realIndex: o, snapIndex: a } = e;
  let l = t, f;
  const d = (g) => {
    const u = e.virtual.slides;
    let p = g - (e.virtual.slidesBefore ?? 0);
    return p < 0 && (p = u.length + p), p >= u.length && (p -= u.length), p;
  };
  if (typeof l > "u" && (l = At(e)), i.indexOf(s) >= 0)
    f = i.indexOf(s);
  else {
    const g = Math.min(n.slidesPerGroupSkip, l);
    f = g + Math.floor((l - g) / n.slidesPerGroup);
  }
  if (f >= i.length && (f = i.length - 1), l === r && !e.params.loop) {
    f !== a && (e.snapIndex = f, e.emit("snapIndexChange"));
    return;
  }
  if (l === r && e.params.loop && e.virtual && e.params.virtual?.enabled) {
    e.realIndex = d(l);
    return;
  }
  const c = e.grid && n.grid && n.grid.rows > 1;
  let h;
  if (e.virtual && n.virtual?.enabled)
    n.loop ? h = d(l) : h = l;
  else if (c) {
    const g = e.slides.find((p) => p.column === l);
    let u = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(u) && (u = Math.max(e.slides.indexOf(g), 0)), h = Math.floor(u / n.grid.rows);
  } else if (e.slides[l]) {
    const g = e.slides[l].getAttribute("data-swiper-slide-index");
    g ? h = parseInt(g, 10) : h = l;
  } else
    h = l;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: f,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: r,
    activeIndex: l
  }), e.initialized && Se(e), !e.__loopFixInProgress__ && (e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && ((e.__lastEmittedRealIndex__ ?? o) !== h && e.emit("realIndexChange"), e.emit("slideChange")), e.__lastEmittedRealIndex__ = h);
}
function Vt(t) {
  const e = this, s = [], i = e.virtual && e.params.virtual?.enabled;
  let n = 0, r;
  typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  const o = (a) => i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        s.push(a);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const a = e.activeIndex + r;
        if (a > e.slides.length && !i)
          break;
        const l = o(a);
        l && s.push(l);
      }
  else {
    const a = o(e.activeIndex);
    a && s.push(a);
  }
  for (r = 0; r < s.length; r += 1)
    if (typeof s[r] < "u") {
      const a = s[r].offsetHeight;
      n = a > n ? a : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function _t(t, e) {
  const s = this, i = s.params;
  let n = t.closest(`.${i.slideClass}, swiper-slide`);
  !n && s.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((a) => {
    !n && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (n = a);
  });
  let r = !1, o;
  if (n) {
    for (let a = 0; a < s.slides.length; a += 1)
      if (s.slides[a] === n) {
        r = !0, o = a;
        break;
      }
  }
  if (n && r)
    s.clickedSlide = n, s.virtual && s.params.virtual?.enabled ? s.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = o;
  else {
    s.clickedSlide = void 0, s.clickedIndex = void 0;
    return;
  }
  i.slideToClickedSlide && s.clickedIndex !== void 0 && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
function Dt(t) {
  const e = this;
  if (typeof t > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * d || 0;
  }
  const s = e.params, i = e.maxTranslate() - e.minTranslate();
  let { progress: n, isBeginning: r, isEnd: o } = e, a = e.progressLoop;
  const l = r, f = o;
  if (i === 0)
    n = 0, r = !0, o = !0;
  else {
    n = (t - e.minTranslate()) / i;
    const d = Math.abs(t - e.minTranslate()) < 1, c = Math.abs(t - e.maxTranslate()) < 1;
    r = d || n <= 0, o = c || n >= 1, d && (n = 0), c && (n = 1);
  }
  if (s.loop) {
    const d = e.getSlideIndexByData(0), c = e.getSlideIndexByData(e.slides.length - 1), h = e.slidesGrid[d], g = e.slidesGrid[c], u = e.slidesGrid[e.slidesGrid.length - 1], p = Math.abs(t);
    p >= h ? a = (p - h) / u : a = (p + u - g) / u, a > 1 && (a -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: a,
    isBeginning: r,
    isEnd: o
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && e.updateSlidesProgress(t), r && !l && e.emit("reachBeginning toEdge"), o && !f && e.emit("reachEnd toEdge"), (l && !r || f && !o) && e.emit("fromEdge"), e.emit("progress", n);
}
function Bt() {
  const t = this;
  let e, s;
  const i = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = i.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? s = t.params.height : s = i.clientHeight, !(e === 0 && t.isHorizontal() || s === 0 && t.isVertical()) && (e = e - parseInt(R(i, "padding-left") || "0", 10) - parseInt(R(i, "padding-right") || "0", 10), s = s - parseInt(R(i, "padding-top") || "0", 10) - parseInt(R(i, "padding-bottom") || "0", 10), Number.isNaN(e) && (e = 0), Number.isNaN(s) && (s = 0), Object.assign(t, {
    width: e,
    height: s,
    size: t.isHorizontal() ? e : s
  }));
}
function Nt() {
  const t = this;
  function e(w, x) {
    return parseFloat(w.getPropertyValue(t.getDirectionLabel(x)) || "0");
  }
  const s = t.params, { wrapperEl: i, slidesEl: n, rtlTranslate: r, wrongRTL: o } = t, a = !!(t.virtual && s.virtual?.enabled), l = a ? t.virtual.slides.length : t.slides.length, f = N(n, `.${t.params.slideClass}, swiper-slide`), d = a ? t.virtual.slides.length : f.length;
  let c = [];
  const h = [], g = [], u = (w) => typeof w == "function" ? w.call(t) : w, p = u(s.slidesOffsetBefore), y = u(s.slidesOffsetAfter), v = t.snapGrid.length, S = t.slidesGrid.length, T = t.size - p - y;
  let m = s.spaceBetween, b = -p, M = 0, E = 0;
  if (typeof T > "u")
    return;
  typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * T : typeof m == "string" && (m = parseFloat(m)), t.virtualSize = -m - p - y, f.forEach((w) => {
    r ? w.style.marginLeft = "" : w.style.marginRight = "", w.style.marginBottom = "", w.style.marginTop = "";
  }), s.centeredSlides && s.cssMode && (X(i, "--swiper-centered-offset-before", ""), X(i, "--swiper-centered-offset-after", "")), s.cssMode && (X(i, "--swiper-slides-offset-before", `${p}px`), X(i, "--swiper-slides-offset-after", `${y}px`));
  const C = s.grid && s.grid.rows > 1 && t.grid;
  C ? t.grid.initSlides(f) : t.grid && t.grid.unsetSlides();
  let L = 0;
  const B = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((w) => typeof s.breakpoints[w]?.slidesPerView < "u").length > 0;
  for (let w = 0; w < d; w += 1) {
    L = 0;
    const x = f[w];
    if (!(x && (C && t.grid.updateSlide(w, x, f), R(x, "display") === "none"))) {
      if (a && s.slidesPerView === "auto")
        s.virtual?.slidesPerViewAutoSlideSize && (L = s.virtual.slidesPerViewAutoSlideSize), L && x && (s.roundLengths && (L = Math.floor(L)), x.style[t.getDirectionLabel("width")] = `${L}px`);
      else if (s.slidesPerView === "auto") {
        B && (x.style[t.getDirectionLabel("width")] = "");
        const P = getComputedStyle(x), O = x.style.transform, k = x.style.webkitTransform;
        if (O && (x.style.transform = "none"), k && (x.style.webkitTransform = "none"), s.roundLengths)
          L = t.isHorizontal() ? de(x, "width") : de(x, "height");
        else {
          const G = e(P, "width"), A = e(P, "padding-left"), U = e(P, "padding-right"), j = e(P, "margin-left"), q = e(P, "margin-right"), F = P.getPropertyValue("box-sizing");
          if (F && F === "border-box")
            L = G + j + q;
          else {
            const { clientWidth: le, offsetWidth: $ } = x;
            L = G + A + U + j + q + ($ - le);
          }
        }
        O && (x.style.transform = O), k && (x.style.webkitTransform = k), s.roundLengths && (L = Math.floor(L));
      } else
        L = (T - (s.slidesPerView - 1) * m) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), x && (x.style[t.getDirectionLabel("width")] = `${L}px`);
      x && (x.swiperSlideSize = L), g.push(L), s.centeredSlides ? (b = b + L / 2 + M / 2 + m, M === 0 && w !== 0 && (b = b - T / 2 - m), w === 0 && (b = b - T / 2 - m), Math.abs(b) < 1 / 1e3 && (b = 0), s.roundLengths && (b = Math.floor(b)), E % s.slidesPerGroup === 0 && c.push(b), h.push(b)) : (s.roundLengths && (b = Math.floor(b)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup === 0 && c.push(b), h.push(b), b = b + L + m), t.virtualSize += L + m, M = L, E += 1;
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, T) + y, r && o && (s.effect === "slide" || s.effect === "coverflow") && (i.style.width = `${t.virtualSize + m}px`), s.setWrapperSize && (i.style[t.getDirectionLabel("width")] = `${t.virtualSize + m}px`), C && t.grid.updateWrapperSize(L, c), !s.centeredSlides) {
    const w = s.slidesPerView !== "auto" && s.slidesPerView % 1 !== 0, x = s.snapToSlideEdge && !s.loop && (s.slidesPerView === "auto" || w);
    let P = c.length;
    if (x) {
      let k;
      if (s.slidesPerView === "auto") {
        k = 1;
        let G = 0;
        for (let A = g.length - 1; A >= 0 && (G += g[A] + (A < g.length - 1 ? m : 0), G <= T); A -= 1)
          k = g.length - A;
      } else
        k = Math.floor(s.slidesPerView);
      P = Math.max(d - k, 0);
    }
    const O = [];
    for (let k = 0; k < c.length; k += 1) {
      let G = c[k];
      s.roundLengths && (G = Math.floor(G)), x ? k <= P && O.push(G) : c[k] <= t.virtualSize - T && O.push(G);
    }
    c = O, Math.floor(t.virtualSize - T) - Math.floor(c[c.length - 1]) > 1 && (x || c.push(t.virtualSize - T));
  }
  if (a && s.loop) {
    const w = g[0] + m, x = t.virtual.slidesBefore ?? 0, P = t.virtual.slidesAfter ?? 0, O = x + P;
    if (s.slidesPerGroup > 1) {
      const k = Math.ceil(O / s.slidesPerGroup), G = w * s.slidesPerGroup;
      for (let A = 0; A < k; A += 1)
        c.push(c[c.length - 1] + G);
    }
    for (let k = 0; k < O; k += 1)
      s.slidesPerGroup === 1 && c.push(c[c.length - 1] + w), h.push(h[h.length - 1] + w), t.virtualSize += w;
  }
  if (c.length === 0 && (c = [0]), m !== 0) {
    const w = t.isHorizontal() && r ? "marginLeft" : t.getDirectionLabel("marginRight");
    f.filter((x, P) => !s.cssMode || s.loop ? !0 : P !== f.length - 1).forEach((x) => {
      x.style[w] = `${m}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let w = 0;
    g.forEach((P) => {
      w += P + (m || 0);
    }), w -= m;
    const x = w > T ? w - T : 0;
    c = c.map((P) => P <= 0 ? -p : P > x ? x + y : P);
  }
  if (s.centerInsufficientSlides) {
    let w = 0;
    if (g.forEach((x) => {
      w += x + (m || 0);
    }), w -= m, w < T) {
      const x = (T - w) / 2;
      c.forEach((P, O) => {
        c[O] = P - x;
      }), h.forEach((P, O) => {
        h[O] = P + x;
      });
    }
  }
  if (Object.assign(t, {
    slides: f,
    snapGrid: c,
    slidesGrid: h,
    slidesSizesGrid: g
  }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
    X(i, "--swiper-centered-offset-before", `${-c[0]}px`), X(i, "--swiper-centered-offset-after", `${t.size / 2 - g[g.length - 1] / 2}px`);
    const w = -t.snapGrid[0], x = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map((P) => P + w), t.slidesGrid = t.slidesGrid.map((P) => P + x);
  }
  if (d !== l && t.emit("slidesLengthChange"), c.length !== v && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== S && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !a && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const w = `${s.containerModifierClass}backface-hidden`, x = t.el.classList.contains(w);
    d <= s.maxBackfaceHiddenSlides ? x || t.el.classList.add(w) : x && t.el.classList.remove(w);
  }
}
const ne = (t, e, s) => {
  e && !t.classList.contains(s) ? t.classList.add(s) : !e && t.classList.contains(s) && t.classList.remove(s);
};
function Ft() {
  const t = this, { slides: e, params: s, slidesEl: i, activeIndex: n } = t, r = !!(t.virtual && s.virtual?.enabled), o = t.grid && s.grid && s.grid.rows > 1, a = (c) => N(i, `.${s.slideClass}${c}, swiper-slide${c}`)[0];
  let l, f, d;
  if (r)
    if (s.loop) {
      const c = t.virtual.slides;
      let h = n - (t.virtual.slidesBefore ?? 0);
      h < 0 && (h = c.length + h), h >= c.length && (h -= c.length), l = a(`[data-swiper-slide-index="${h}"]`);
    } else
      l = a(`[data-swiper-slide-index="${n}"]`);
  else o ? (l = e.find((c) => c.column === n), d = e.find((c) => c.column === n + 1), f = e.find((c) => c.column === n - 1)) : l = e[n];
  l && (o || (d = Oe(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !d && (d = e[0]), f = ke(l, `.${s.slideClass}, swiper-slide`)[0], s.loop && !f === 0 && (f = e[e.length - 1]))), e.forEach((c) => {
    ne(c, c === l, s.slideActiveClass), ne(c, c === d, s.slideNextClass), ne(c, c === f, s.slidePrevClass);
  }), t.emitSlidesClasses();
}
function Ht() {
  const t = this, e = t.slides, s = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset = (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - s - t.cssOverflowAdjustment();
}
const ue = (t, e, s) => {
  e && !t.classList.contains(s) ? t.classList.add(s) : !e && t.classList.contains(s) && t.classList.remove(s);
};
function Rt(t = this && this.translate || 0) {
  const e = this, s = e.params, { slides: i, rtlTranslate: n, snapGrid: r } = e;
  if (i.length === 0)
    return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  n && (o = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let a = s.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < i.length; l += 1) {
    const f = i[l];
    let d = f.swiperSlideOffset ?? 0;
    s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset ?? 0);
    const c = f.swiperSlideSize ?? 0, h = (o + (s.centeredSlides ? e.minTranslate() : 0) - d) / (c + a), g = (o - r[0] + (s.centeredSlides ? e.minTranslate() : 0) - d) / (c + a), u = -(o - d), p = u + e.slidesSizesGrid[l], y = u >= 0 && u <= e.size - e.slidesSizesGrid[l], v = u >= 0 && u < e.size - 1 || p > 1 && p <= e.size || u <= 0 && p >= e.size;
    v && (e.visibleSlides.push(f), e.visibleSlidesIndexes.push(l)), ue(f, v, s.slideVisibleClass), ue(f, y, s.slideFullyVisibleClass), f.progress = n ? -h : h, f.originalProgress = n ? -g : g;
  }
}
var $t = {
  updateSize: Bt,
  updateSlides: Nt,
  updateAutoHeight: Vt,
  updateSlidesOffset: Ht,
  updateSlidesProgress: Rt,
  updateProgress: Dt,
  updateSlidesClasses: Ft,
  updateActiveIndex: Gt,
  updateClickedSlide: _t
};
const Wt = {
  eventsEmitter: qe,
  update: $t,
  translate: zt,
  transition: Mt,
  slide: xt,
  loop: ft,
  grabCursor: lt,
  events: nt,
  breakpoints: Ne,
  checkOverflow: He,
  classes: je
}, ae = {};
class V {
  static extendedDefaults;
  static defaults;
  constructor(...e) {
    let s, i;
    if (e.length === 1 && e[0] !== null && typeof e[0] == "object" && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [s, i] = e, i || (i = {}), i = _({}, i), s && !i.el && (i.el = s), i.el && typeof i.el == "string" && typeof document < "u" && document.querySelectorAll(i.el).length > 1) {
      const a = [];
      return document.querySelectorAll(i.el).forEach((l) => {
        const f = _({}, i, { el: l });
        a.push(new V(f));
      }), a;
    }
    const n = this;
    n.__swiper__ = !0, n.support = ge(), n.device = ve({ userAgent: i.userAgent ?? void 0 }), n.browser = we(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__ || []], i.modules && Array.isArray(i.modules) && i.modules.forEach((a) => {
      const l = a;
      typeof l == "function" && n.modules.indexOf(l) < 0 && n.modules.push(l);
    });
    const r = {};
    n.modules.forEach((a) => {
      a({
        params: i,
        swiper: n,
        extendParams: ut(i, r),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const o = _({}, Te, r);
    if (n.params = _({}, o, ae, i), n.originalParams = _({}, n.params), n.passedParams = _({}, i), n.params && n.params.on) {
      const a = n.params.on;
      Object.keys(a).forEach((l) => {
        const f = a[l];
        f && n.on(l, f);
      });
    }
    return n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
      enabled: n.params.enabled,
      el: s,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return n.params.direction === "horizontal";
      },
      isVertical() {
        return n.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: n.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: n.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), n.emit("_swiper"), n.params.init && n.init(), n;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  /**
   * !INTERNAL
   */
  isHorizontal() {
    return this.params.direction === "horizontal";
  }
  isVertical() {
    return this.params.direction === "vertical";
  }
  cssOverflowAdjustment() {
    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
  }
  getSlideIndex(e) {
    const { slidesEl: s, params: i } = this, n = N(s, `.${i.slideClass}, swiper-slide`), r = oe(n[0]);
    return oe(e) - (r ?? 0);
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((s) => Number(s.getAttribute("data-swiper-slide-index")) === e));
  }
  getSlideIndexWhenGrid(e) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))), e;
  }
  recalcSlides() {
    const { slidesEl: e, params: s } = this;
    this.slides = N(e, `.${s.slideClass}, swiper-slide`);
  }
  /**
   * Enable Swiper (if it was disabled)
   */
  enable() {
    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"));
  }
  /**
   * Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
   */
  disable() {
    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"));
  }
  /**
   * Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide
   *
   * @param progress Swiper translate progress (from 0 to 1).
   * @param speed Transition duration (in ms).
   */
  setProgress(e, s) {
    e = Math.min(Math.max(e, 0), 1);
    const i = this.minTranslate(), r = (this.maxTranslate() - i) * e + i;
    this.translateTo(r, typeof s > "u" ? 0 : s), this.updateActiveIndex(), this.updateSlidesClasses();
  }
  emitContainerClasses() {
    if (!this.params._emitClasses || !this.el)
      return;
    const e = this.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(this.params.containerModifierClass) === 0);
    this.emit("_containerClasses", e.join(" "));
  }
  getSlideClasses(e) {
    return this.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(this.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    if (!this.params._emitClasses || !this.el)
      return;
    const e = [];
    this.slides.forEach((s) => {
      const i = this.getSlideClasses(s);
      e.push({ slideEl: s, classNames: i }), this.emit("_slideClass", s, i);
    }), this.emit("_slideClasses", e);
  }
  /**
   * Get dynamically calculated amount of slides per view, useful only when slidesPerView set to `auto`
   */
  slidesPerViewDynamic(e = "current", s = !1) {
    const { params: i, slides: n, slidesGrid: r, slidesSizesGrid: o, size: a, activeIndex: l } = this;
    let f = 1;
    if (typeof i.slidesPerView == "number")
      return i.slidesPerView;
    if (!a)
      return f;
    if (i.centeredSlides) {
      let d = n[l] ? Math.ceil(n[l].swiperSlideSize ?? 0) : 0, c = !1;
      for (let h = l + 1; h < n.length; h += 1)
        n[h] && !c && (d += Math.ceil(n[h].swiperSlideSize ?? 0), f += 1, d > a && (c = !0));
      for (let h = l - 1; h >= 0; h -= 1)
        n[h] && !c && (d += n[h].swiperSlideSize ?? 0, f += 1, d > a && (c = !0));
    } else if (e === "current")
      for (let d = l + 1; d < n.length; d += 1)
        (s ? r[d] + o[d] - r[l] < a : r[d] - r[l] < a) && (f += 1);
    else
      for (let d = l - 1; d >= 0; d -= 1)
        r[l] - r[d] < a && (f += 1);
    return f;
  }
  /**
   * You should call it after you add/remove slides
   * manually, or after you hide/show it, or do any
   * custom DOM modifications with Swiper
   * This method also includes subcall of the following
   * methods which you can use separately:
   */
  update() {
    const e = this;
    if (!e || e.destroyed)
      return;
    const { snapGrid: s, params: i } = e;
    i.breakpoints && e.setBreakpoint(), i.lazyPreload && [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && re(e, o);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (i.freeMode?.enabled && !i.cssMode)
      n(), i.autoHeight && e.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
        const o = e.virtual && i.virtual?.enabled ? e.virtual.slides.length : e.slides.length;
        r = e.slideTo(o - 1, 0, !1, !0);
      } else
        r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    i.watchOverflow && s !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  /**
   * Changes slider direction from horizontal to vertical and back.
   *
   * @param direction New direction. If not specified, then will automatically changed to opposite direction
   * @param needUpdate Will call swiper.update(). Default true
   */
  changeDirection(e, s = !0) {
    const i = this, n = i.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${n}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.rtlTranslate = e === "horizontal" && i.rtl, i.slides.forEach((r) => {
      e === "vertical" ? r.style.width = "" : r.style.height = "";
    }), i.emit("changeDirection"), s && i.update()), i;
  }
  /**
   * Changes slider language
   *
   * @param direction New direction. Should be `rtl` or `ltr`
   */
  changeLanguageDirection(e) {
    const s = this;
    s.rtl && e === "rtl" || !s.rtl && e === "ltr" || (s.rtl = e === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update());
  }
  mount(e) {
    const s = this;
    if (s.mounted)
      return !0;
    if (typeof document > "u")
      return !1;
    const i = e ?? s.params.el;
    let n = null;
    if (typeof i == "string" ? n = document.querySelector(i) : i instanceof HTMLElement && (n = i), !n)
      return !1;
    n.swiper = s;
    const r = n.parentNode;
    r && r.host && r.host.nodeName === s.params.swiperElementNodeName.toUpperCase() && (s.isElement = !0);
    const o = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = n && n.shadowRoot ? n.shadowRoot.querySelector(o()) : N(n, o())[0];
    !l && s.params.createElements && (l = Q("div", s.params.wrapperClass), n.append(l), N(n, `.${s.params.slideClass}`).forEach((d) => {
      l.append(d);
    }));
    const f = s.isElement ? n.parentNode.host : null;
    return Object.assign(s, {
      el: n,
      wrapperEl: l,
      slidesEl: s.isElement && !f.slideSlots ? f : l,
      hostEl: s.isElement ? f : n,
      mounted: !0,
      // RTL
      rtl: n.dir.toLowerCase() === "rtl" || R(n, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || R(n, "direction") === "rtl"),
      wrongRTL: R(l, "display") === "-webkit-box"
    }), !0;
  }
  /**
   * Initialize slider
   */
  init(e) {
    const s = this;
    if (s.initialized || s.mount(e) === !1)
      return s;
    if (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual?.enabled ? s.slideTo((s.params.initialSlide ?? 0) + (s.virtual.slidesBefore ?? 0), 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(void 0, !0), s.attachEvents(), s.params.lazyPreload) {
      const n = [
        ...s.el.querySelectorAll('[loading="lazy"]')
      ];
      s.isElement && n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
        r.complete && re(s, r);
      });
    }
    return s.initialized = !0, Se(s), s.emit("init"), s.emit("afterInit"), s;
  }
  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(e = !0, s = !0) {
    const i = this, { params: n, el: r, wrapperEl: o, slides: a } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), o && o.removeAttribute("style"), a && a.length && a.forEach((l) => {
      l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((l) => {
      i.off(l);
    }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), Ee(i)), i.destroyed = !0), null;
  }
  static extendDefaults(e) {
    _(ae, e);
  }
  static installModule(e) {
    V.prototype.__modules__ || (V.prototype.__modules__ = []);
    const s = V.prototype.__modules__;
    typeof e == "function" && s.indexOf(e) < 0 && s.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((s) => V.installModule(s)), V) : (V.installModule(e), V);
  }
}
Object.defineProperty(V, "extendedDefaults", {
  get() {
    return ae;
  }
});
Object.defineProperty(V, "defaults", {
  get() {
    return Te;
  }
});
const pe = Wt, jt = V.prototype;
Object.keys(pe).forEach((t) => {
  const e = pe[t];
  Object.keys(e).forEach((s) => {
    jt[s] = e[s];
  });
});
V.use([ht, pt]);
function qt(t, e, s, i) {
  const n = s ?? {}, r = e ?? {};
  return t.params.createElements && Object.keys(i).forEach((o) => {
    if (!n[o] && n.auto === !0) {
      let a = N(t.el, `.${i[o]}`)[0];
      a || (a = Q("div", i[o]), a.className = i[o], t.el.append(a)), n[o] = a, r[o] = a;
    }
  }), n;
}
const he = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>', Yt = ({ swiper: t, extendParams: e, on: s, emit: i }) => {
  e({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: !0,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), t.navigation = {
    nextEl: null,
    prevEl: null,
    arrowSvg: he
  };
  function n() {
    return t.params.navigation;
  }
  function r(u) {
    let p;
    return u && typeof u == "string" && t.isElement && (p = t.el.querySelector(u) || t.hostEl.querySelector(u), p) ? p : (u && (typeof u == "string" && (p = [...document.querySelectorAll(u)]), t.params.uniqueNavElements && typeof u == "string" && p && p.length > 1 && t.el.querySelectorAll(u).length === 1 ? p = t.el.querySelector(u) : p && p.length === 1 && (p = p[0])), u && !p ? u : p);
  }
  function o(u, p) {
    const y = n();
    H(u).forEach((S) => {
      S && (S.classList[p ? "add" : "remove"](...y.disabledClass.split(" ")), S.tagName === "BUTTON" && (S.disabled = p), t.params.watchOverflow && t.enabled && S.classList[t.isLocked ? "add" : "remove"](y.lockClass));
    });
  }
  function a() {
    const { nextEl: u, prevEl: p } = t.navigation;
    if (t.params.loop) {
      o(p, !1), o(u, !1);
      return;
    }
    o(p, t.isBeginning && !t.params.rewind), o(u, t.isEnd && !t.params.rewind);
  }
  function l(u) {
    u.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
  }
  function f(u) {
    u.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i("navigationNext"));
  }
  function d() {
    t.params.navigation = qt(t, t.originalParams.navigation, t.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    const u = n();
    if (!(u.nextEl || u.prevEl))
      return;
    const p = r(u.nextEl), y = r(u.prevEl);
    Object.assign(t.navigation, {
      nextEl: p,
      prevEl: y
    });
    const v = H(p), S = H(y), T = (m, b) => {
      if (m) {
        if (u.addIcons && m.matches(".swiper-button-next,.swiper-button-prev") && !m.querySelector("svg")) {
          const M = document.createElement("div");
          Ae(M, he);
          const E = M.querySelector("svg");
          E && m.appendChild(E), M.remove();
        }
        m.addEventListener("click", b === "next" ? f : l);
      }
      !t.enabled && m && m.classList.add(...u.lockClass.split(" "));
    };
    v.forEach((m) => T(m, "next")), S.forEach((m) => T(m, "prev"));
  }
  function c() {
    const u = n(), { nextEl: p, prevEl: y } = t.navigation, v = H(p), S = H(y), T = (m, b) => {
      m.removeEventListener("click", b === "next" ? f : l), m.classList.remove(...u.disabledClass.split(" "));
    };
    v.forEach((m) => T(m, "next")), S.forEach((m) => T(m, "prev"));
  }
  s("init", () => {
    n().enabled === !1 ? g() : (d(), a());
  }), s("toEdge fromEdge lock unlock", () => {
    a();
  }), s("destroy", () => {
    c();
  }), s("enable disable", () => {
    const u = n(), { nextEl: p, prevEl: y } = t.navigation, v = H(p), S = H(y);
    if (t.enabled) {
      a();
      return;
    }
    [...v, ...S].filter((T) => !!T).forEach((T) => T.classList.add(u.lockClass));
  }), s("click", (u, p) => {
    const y = n(), { nextEl: v, prevEl: S } = t.navigation, T = H(v), m = H(S), b = p.target;
    let M = m.includes(b) || T.includes(b);
    if (t.isElement && !M) {
      const E = p.composedPath ? p.composedPath() : [];
      E.length && (M = E.find((C) => T.includes(C) || m.includes(C)));
    }
    if (y.hideOnClick && !M) {
      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === b || t.pagination.el.contains(b)))
        return;
      let E;
      T.length ? E = T[0].classList.contains(y.hiddenClass) : m.length && (E = m[0].classList.contains(y.hiddenClass)), i(E === !0 ? "navigationShow" : "navigationHide"), [...T, ...m].filter((C) => !!C).forEach((C) => C.classList.toggle(y.hiddenClass));
    }
  });
  const h = () => {
    const u = n();
    t.el.classList.remove(...u.navigationDisabledClass.split(" ")), d(), a();
  }, g = () => {
    const u = n();
    t.el.classList.add(...u.navigationDisabledClass.split(" ")), c();
  };
  Object.assign(t.navigation, {
    enable: h,
    disable: g,
    update: a,
    init: d,
    destroy: c
  });
};
export {
  Yt as N,
  V as S,
  de as a,
  oe as b,
  qt as c,
  Q as d,
  ze as e,
  H as m,
  Ae as s
};
