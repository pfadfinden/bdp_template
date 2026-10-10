import { m as f, c as Z, e as w, s as K, a as ee, b as W, d as te, S as ae, N as ne } from "./navigation-DiMISos5.js";
function H(e = "") {
  return `.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
const le = (e) => !!e.virtual && !!e.params.virtual?.enabled, ie = (e) => !!e.params.freeMode?.enabled, X = (e) => {
  if (le(e))
    return e.virtual.slides.length;
  const z = e.params.grid?.rows;
  return e.grid && z && z > 1 ? e.slides.length / Math.ceil(z) : e.slides.length;
}, se = ({ swiper: e, extendParams: z, on: g, emit: m }) => {
  const b = "swiper-pagination";
  z({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (t) => t,
      formatFractionTotal: (t) => t,
      bulletClass: `${b}-bullet`,
      bulletActiveClass: `${b}-bullet-active`,
      modifierClass: `${b}-`,
      currentClass: `${b}-current`,
      totalClass: `${b}-total`,
      hiddenClass: `${b}-hidden`,
      progressbarFillClass: `${b}-progressbar-fill`,
      progressbarOppositeClass: `${b}-progressbar-opposite`,
      clickableClass: `${b}-clickable`,
      lockClass: `${b}-lock`,
      horizontalClass: `${b}-horizontal`,
      verticalClass: `${b}-vertical`,
      paginationDisabledClass: `${b}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let h, k = 0;
  function r() {
    return e.params.pagination;
  }
  function S() {
    return !r().el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function R(t, n) {
    const { bulletActiveClass: d } = r();
    if (!t)
      return;
    let i = t[`${n === "prev" ? "previous" : "next"}ElementSibling`];
    i && (i.classList.add(`${d}-${n}`), i = i[`${n === "prev" ? "previous" : "next"}ElementSibling`], i && i.classList.add(`${d}-${n}-${n}`));
  }
  function N(t, n, d) {
    if (t = t % d, n = n % d, n === t + 1)
      return "next";
    if (n === t - 1)
      return "previous";
  }
  function x(t) {
    const d = t.target.closest(H(r().bulletClass));
    if (!d)
      return;
    t.preventDefault();
    const i = (W(d) ?? 0) * (e.params.slidesPerGroup ?? 1);
    if (e.params.loop) {
      if (e.realIndex === i)
        return;
      const c = N(e.realIndex, i, e.slides.length);
      c === "next" ? e.slideNext() : c === "previous" ? e.slidePrev() : e.slideToLoop(i);
    } else
      e.slideTo(i);
  }
  function L() {
    const t = e.rtl, n = r();
    if (S())
      return;
    const d = f(e.pagination.el);
    let i, c;
    const T = X(e), B = e.params.loop ? Math.ceil(T / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
    if (e.params.loop ? (c = e.previousRealIndex || 0, i = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex) : typeof e.snapIndex < "u" ? (i = e.snapIndex, c = e.previousSnapIndex) : (c = e.previousIndex || 0, i = e.activeIndex || 0), n.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const u = e.pagination.bullets;
      let E = 0, y = 0, I = 0;
      if (n.dynamicBullets) {
        h = ee(u[0], e.isHorizontal() ? "width" : "height");
        const p = e.isHorizontal() ? "width" : "height";
        d.forEach((v) => {
          v.style[p] = `${(h ?? 0) * (n.dynamicMainBullets + 4)}px`;
        }), n.dynamicMainBullets > 1 && c !== void 0 && (k += i - (c || 0), k > n.dynamicMainBullets - 1 ? k = n.dynamicMainBullets - 1 : k < 0 && (k = 0)), E = Math.max(i - k, 0), y = E + (Math.min(u.length, n.dynamicMainBullets) - 1), I = (y + E) / 2;
      }
      if (u.forEach((p) => {
        const v = [
          "",
          "-next",
          "-next-next",
          "-prev",
          "-prev-prev",
          "-main"
        ].map((C) => `${n.bulletActiveClass}${C}`).flatMap((C) => typeof C == "string" && C.includes(" ") ? C.split(" ") : [C]);
        p.classList.remove(...v);
      }), d.length > 1)
        u.forEach((p) => {
          const v = W(p);
          v === i ? p.classList.add(...n.bulletActiveClass.split(" ")) : e.isElement && p.setAttribute("part", "bullet"), n.dynamicBullets && v !== void 0 && (v >= E && v <= y && p.classList.add(...`${n.bulletActiveClass}-main`.split(" ")), v === E && R(p, "prev"), v === y && R(p, "next"));
        });
      else {
        const p = u[i];
        if (p && p.classList.add(...n.bulletActiveClass.split(" ")), e.isElement && u.forEach((v, C) => {
          v.setAttribute("part", C === i ? "bullet-active" : "bullet");
        }), n.dynamicBullets) {
          const v = u[E], C = u[y];
          for (let O = E; O <= y; O += 1)
            u[O] && u[O].classList.add(...`${n.bulletActiveClass}-main`.split(" "));
          R(v, "prev"), R(C, "next");
        }
      }
      if (n.dynamicBullets) {
        const p = Math.min(u.length, n.dynamicMainBullets + 4), v = ((h ?? 0) * p - (h ?? 0)) / 2 - I * (h ?? 0), C = t ? "right" : "left", O = e.isHorizontal() ? C : "top";
        u.forEach((V) => {
          V.style[O] = `${v}px`;
        });
      }
    }
    d.forEach((u, E) => {
      if (n.type === "fraction" && (u.querySelectorAll(H(n.currentClass)).forEach((y) => {
        y.textContent = String(n.formatFractionCurrent(i + 1));
      }), u.querySelectorAll(H(n.totalClass)).forEach((y) => {
        y.textContent = String(n.formatFractionTotal(B));
      })), n.type === "progressbar") {
        let y;
        n.progressbarOpposite ? y = e.isHorizontal() ? "vertical" : "horizontal" : y = e.isHorizontal() ? "horizontal" : "vertical";
        const I = (i + 1) / B;
        let p = 1, v = 1;
        y === "horizontal" ? p = I : v = I, u.querySelectorAll(H(n.progressbarFillClass)).forEach((C) => {
          C.style.transform = `translate3d(0,0,0) scaleX(${p}) scaleY(${v})`, C.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      n.type === "custom" && n.renderCustom ? (K(u, n.renderCustom(e, i + 1, B)), E === 0 && m("paginationRender", u)) : (E === 0 && m("paginationRender", u), m("paginationUpdate", u)), e.params.watchOverflow && e.enabled && u.classList[e.isLocked ? "add" : "remove"](n.lockClass);
    });
  }
  function P() {
    const t = r();
    if (S())
      return;
    const n = X(e), d = f(e.pagination.el);
    let i = "";
    if (t.type === "bullets") {
      let c = e.params.loop ? Math.ceil(n / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      e.params.freeMode && ie(e) && c > n && (c = n);
      for (let T = 0; T < c; T += 1)
        t.renderBullet ? i += t.renderBullet.call(e, T, t.bulletClass) : i += `<${t.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${t.bulletClass}"></${t.bulletElement}>`;
    }
    t.type === "fraction" && (t.renderFraction ? i = t.renderFraction.call(e, t.currentClass, t.totalClass) : i = `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), t.type === "progressbar" && (t.renderProgressbar ? i = t.renderProgressbar.call(e, t.progressbarFillClass) : i = `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], d.forEach((c) => {
      t.type !== "custom" && K(c, i || ""), t.type === "bullets" && e.pagination.bullets.push(...Array.from(c.querySelectorAll(H(t.bulletClass))));
    }), t.type !== "custom" && m("paginationRender", d[0]);
  }
  function $() {
    e.params.pagination = Z(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const t = r();
    if (!t.el)
      return;
    let n;
    if (typeof t.el == "string" && e.isElement && (n = e.el.querySelector(t.el)), !n && typeof t.el == "string" && (n = [...document.querySelectorAll(t.el)]), n || (n = t.el), !n || Array.isArray(n) && n.length === 0)
      return;
    if (e.params.uniqueNavElements && typeof t.el == "string" && Array.isArray(n) && n.length > 1 && (n = [...e.el.querySelectorAll(t.el)], n.length > 1)) {
      const i = n.find((c) => w(c, ".swiper")[0] === e.el);
      i && (n = i);
    }
    Array.isArray(n) && n.length === 1 && (n = n[0]), Object.assign(e.pagination, {
      el: n
    }), f(n).forEach((i) => {
      t.type === "bullets" && t.clickable && i.classList.add(...(t.clickableClass || "").split(" ")), i.classList.add(t.modifierClass + t.type), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.type === "bullets" && t.dynamicBullets && (i.classList.add(`${t.modifierClass}${t.type}-dynamic`), k = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.type === "progressbar" && t.progressbarOpposite && i.classList.add(t.progressbarOppositeClass), t.clickable && i.addEventListener("click", x), e.enabled || i.classList.add(t.lockClass);
    });
  }
  function D() {
    const t = r();
    if (S())
      return;
    const n = e.pagination.el;
    n && f(n).forEach((i) => {
      i.classList.remove(t.hiddenClass), i.classList.remove(t.modifierClass + t.type), i.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (i.classList.remove(...(t.clickableClass || "").split(" ")), i.removeEventListener("click", x));
    }), e.pagination.bullets && e.pagination.bullets.forEach((d) => d.classList.remove(...t.bulletActiveClass.split(" ")));
  }
  g("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const t = r();
    f(e.pagination.el).forEach((d) => {
      d.classList.remove(t.horizontalClass, t.verticalClass), d.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass);
    });
  }), g("init", () => {
    r().enabled === !1 ? M() : ($(), P(), L());
  }), g("activeIndexChange", () => {
    typeof e.snapIndex > "u" && L();
  }), g("snapIndexChange", () => {
    L();
  }), g("snapGridLengthChange", () => {
    P(), L();
  }), g("destroy", () => {
    D();
  }), g("enable disable", () => {
    const { el: t } = e.pagination;
    if (t) {
      const n = r();
      f(t).forEach((i) => i.classList[e.enabled ? "remove" : "add"](n.lockClass));
    }
  }), g("lock unlock", () => {
    L();
  }), g("click", (t, n) => {
    const d = n.target, i = f(e.pagination.el), c = r();
    if (c.el && c.hideOnClick && i && i.length > 0 && !d.classList.contains(c.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && d === e.navigation.nextEl || e.navigation.prevEl && d === e.navigation.prevEl))
        return;
      const T = i[0].classList.contains(c.hiddenClass);
      m(T === !0 ? "paginationShow" : "paginationHide"), i.forEach((B) => B.classList.toggle(c.hiddenClass));
    }
  });
  const _ = () => {
    const t = r();
    e.el.classList.remove(t.paginationDisabledClass);
    const { el: n } = e.pagination;
    n && f(n).forEach((i) => i.classList.remove(t.paginationDisabledClass)), $(), P(), L();
  }, M = () => {
    const t = r();
    e.el.classList.add(t.paginationDisabledClass);
    const { el: n } = e.pagination;
    n && f(n).forEach((i) => i.classList.add(t.paginationDisabledClass)), D();
  };
  Object.assign(e.pagination, {
    enable: _,
    disable: M,
    render: P,
    update: L,
    init: $,
    destroy: D
  });
}, Y = (e) => !!e.virtual && !!e.params.virtual?.enabled, oe = ({ swiper: e, extendParams: z, on: g }) => {
  z({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: !0,
      wrapperLiveRegion: !0
    }
  }), e.a11y = {
    clicked: !1
  };
  let m = null, b = !1, h, k = (/* @__PURE__ */ new Date()).getTime();
  function r() {
    return e.params.a11y;
  }
  function S(a) {
    const l = m;
    !l || !a || K(l, a);
  }
  function R(a = 16) {
    const l = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(a).replace(/x/g, l);
  }
  function N(a) {
    f(a).forEach((s) => {
      s.setAttribute("tabIndex", "0");
    });
  }
  function x(a) {
    f(a).forEach((s) => {
      s.setAttribute("tabIndex", "-1");
    });
  }
  function L(a, l) {
    f(a).forEach((o) => {
      o.setAttribute("role", l);
    });
  }
  function P(a, l) {
    f(a).forEach((o) => {
      o.setAttribute("aria-roledescription", l);
    });
  }
  function $(a, l) {
    f(a).forEach((o) => {
      o.setAttribute("aria-label", l);
    });
  }
  function D(a, l) {
    f(a).forEach((o) => {
      o.setAttribute("id", l);
    });
  }
  function _(a, l) {
    f(a).forEach((o) => {
      o.setAttribute("aria-live", l);
    });
  }
  function M(a) {
    f(a).forEach((s) => {
      s.setAttribute("aria-disabled", "true");
    });
  }
  function t(a) {
    f(a).forEach((s) => {
      s.removeAttribute("aria-disabled");
    });
  }
  function n(a) {
    if (a.keyCode !== 13 && a.keyCode !== 32)
      return;
    const l = r(), s = e.params.pagination, o = a.target;
    if (!(e.pagination && e.pagination.el && (o === e.pagination.el || e.pagination.el.contains(o)) && !o.matches(H(s?.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const A = f(e.navigation.prevEl);
        f(e.navigation.nextEl).includes(o) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? S(l.lastSlideMessage) : S(l.nextSlideMessage)), A.includes(o) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? S(l.firstSlideMessage) : S(l.prevSlideMessage));
      }
      e.pagination && o.matches(H(s?.bulletClass)) && o.click();
    }
  }
  function d() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const { nextEl: a, prevEl: l } = e.navigation;
    l && (e.isBeginning ? (M(l), x(l)) : (t(l), N(l))), a && (e.isEnd ? (M(a), x(a)) : (t(a), N(a)));
  }
  function i() {
    return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
  }
  function c() {
    const a = e.params.pagination;
    return i() && !!a?.clickable;
  }
  function T() {
    const a = r();
    if (!i())
      return;
    const l = e.params.pagination;
    e.pagination.bullets.forEach((s) => {
      l.clickable && (N(s), l.renderBullet || (L(s, "button"), $(s, a.paginationBulletMessage.replace(/\{\{index\}\}/, String((W(s) ?? 0) + 1))))), s.matches(H(l.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
    });
  }
  const B = (a, l, s) => {
    N(a), a.tagName !== "BUTTON" && (L(a, "button"), a.addEventListener("keydown", n)), $(a, s);
  }, u = (a) => {
    h && h !== a.target && !h.contains(a.target) && (b = !0), e.a11y.clicked = !0;
  }, E = () => {
    b = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, y = (a) => {
    k = (/* @__PURE__ */ new Date()).getTime();
  };
  let I = [];
  const p = () => {
    I.forEach((a) => a.removeAttribute("inert")), I = [];
  }, v = (a) => {
    if (a.key !== "Tab" || !e.params.loop || e.destroyed)
      return;
    const s = a.target?.closest?.(`.${e.params.slideClass}, swiper-slide`);
    if (!s || !e.slides.includes(s))
      return;
    const o = parseInt(s.getAttribute("data-swiper-slide-index") || "", 10);
    if (Number.isNaN(o))
      return;
    const A = Y(e) ? e.virtual.slides.length : e.slides.length;
    (a.shiftKey ? o === 0 : o === A - 1) && (p(), e.slides.forEach((F) => {
      F === s || F.hasAttribute("inert") || (F.setAttribute("inert", ""), I.push(F));
    }), setTimeout(p, 0));
  }, C = (a) => {
    const l = r();
    if (e.a11y.clicked || !l.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - k < 100)
      return;
    const o = a.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!o || !e.slides.includes(o))
      return;
    h = o;
    const A = Y(e), G = (A ? parseInt(o.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf(o)) === e.activeIndex, F = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(o);
    if (G || F)
      return;
    const q = a.sourceCapabilities;
    q && q.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      b || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(o.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : A ? e.slideTo(e.getSlideIndexWhenGrid(parseInt(o.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(o)), 0), b = !1);
    }));
  }, O = () => {
    const a = r();
    a.itemRoleDescriptionMessage && P(e.slides, a.itemRoleDescriptionMessage), a.slideRole && L(e.slides, a.slideRole);
    const l = e.slides.length, s = a.slideLabelMessage;
    s && e.slides.forEach((o, A) => {
      const G = e.params.loop ? parseInt(o.getAttribute("data-swiper-slide-index") || "0", 10) : A, F = s.replace(/\{\{index\}\}/, String(G + 1)).replace(/\{\{slidesLength\}\}/, String(l));
      $(o, F);
    });
  }, V = () => {
    const a = r();
    m && e.el.append(m);
    const l = e.el;
    a.containerRoleDescriptionMessage && P(l, a.containerRoleDescriptionMessage), a.containerMessage && $(l, a.containerMessage), a.containerRole && L(l, a.containerRole);
    const s = e.wrapperEl, o = String(a.id || s.getAttribute("id") || `swiper-wrapper-${R(16)}`);
    if (D(s, o), a.wrapperLiveRegion) {
      const q = e.params.autoplay, U = e.params.autoplay && q?.enabled ? "off" : "polite";
      _(s, U);
    }
    O();
    const A = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, G = f(A.nextEl), F = f(A.prevEl);
    G && G.forEach((q) => B(q, o, a.nextSlideMessage)), F && F.forEach((q) => B(q, o, a.prevSlideMessage)), c() && f(e.pagination.el).forEach((U) => {
      U.addEventListener("keydown", n);
    }), document.addEventListener("visibilitychange", y), e.el.addEventListener("focus", C, !0), e.el.addEventListener("keydown", v, !0), e.el.addEventListener("pointerdown", u, !0), e.el.addEventListener("pointerup", E, !0);
  };
  function j() {
    m && m.remove();
    const a = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, l = f(a.nextEl), s = f(a.prevEl);
    l && l.forEach((o) => o.removeEventListener("keydown", n)), s && s.forEach((o) => o.removeEventListener("keydown", n)), c() && f(e.pagination.el).forEach((A) => {
      A.removeEventListener("keydown", n);
    }), document.removeEventListener("visibilitychange", y), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", C, !0), e.el.removeEventListener("keydown", v, !0), e.el.removeEventListener("pointerdown", u, !0), e.el.removeEventListener("pointerup", E, !0)), p();
  }
  g("beforeInit", () => {
    m = te("span", r().notificationClass), m.setAttribute("aria-live", "assertive"), m.setAttribute("aria-atomic", "true");
  }), g("afterInit", () => {
    r().enabled && V();
  }), g("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    r().enabled && O();
  }), g("fromEdge toEdge afterInit lock unlock", () => {
    r().enabled && d();
  }), g("paginationUpdate", () => {
    r().enabled && T();
  }), g("destroy", () => {
    r().enabled && j();
  });
}, re = ({ swiper: e, extendParams: z, on: g, emit: m, params: b }) => {
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, z({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !1,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  function h() {
    return e.params.autoplay;
  }
  const k = typeof b.autoplay == "object" && b.autoplay && typeof b.autoplay.delay == "number" ? b.autoplay.delay : 3e3;
  let r, S, R = k, N = k, x = 0, L = (/* @__PURE__ */ new Date()).getTime(), P = !1, $ = !1, D = !1, _, M = !1, t = !1;
  function n(a) {
    if (!e || e.destroyed || !e.wrapperEl || a.target !== e.wrapperEl)
      return;
    e.wrapperEl.removeEventListener("transitionend", n);
    const l = a.detail;
    t || l && l.bySwiperTouchMove || y();
  }
  const d = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? P = !0 : P && (N = x, P = !1);
    const a = e.autoplay.paused ? x : L + N - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = a, m("autoplayTimeLeft", a, a / R), S = requestAnimationFrame(() => {
      d();
    });
  }, i = () => {
    let a;
    const l = !!e.params.virtual?.enabled;
    if (e.virtual && l ? a = e.slides.find((o) => o.classList.contains("swiper-slide-active")) : a = e.slides[e.activeIndex], !a)
      return;
    const s = a.getAttribute("data-swiper-autoplay");
    if (s != null)
      return parseInt(s, 10);
  }, c = () => {
    let a = h().delay;
    const l = i();
    return typeof l == "number" && !Number.isNaN(l) && l > 0 && (a = l), a;
  }, T = (a) => {
    if (e.destroyed || !e.autoplay.running)
      return 0;
    S !== void 0 && cancelAnimationFrame(S), d();
    let l = a;
    typeof l > "u" && (l = c(), R = l, N = l), x = l;
    const s = e.params.speed, o = () => {
      if (!e || e.destroyed)
        return;
      const A = h();
      A.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(s, !0, !0), m("autoplay")) : A.stopOnLastSlide || (e.slideTo(e.slides.length - 1, s, !0, !0), m("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(s, !0, !0), m("autoplay")) : A.stopOnLastSlide || (e.slideTo(0, s, !0, !0), m("autoplay")), e.params.cssMode && (L = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        T();
      }));
    };
    return l > 0 ? (r !== void 0 && clearTimeout(r), r = setTimeout(() => {
      o();
    }, l)) : requestAnimationFrame(() => {
      o();
    }), l;
  }, B = () => (L = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, T(), m("autoplayStart"), !0), u = () => (e.autoplay.running = !1, r !== void 0 && clearTimeout(r), S !== void 0 && cancelAnimationFrame(S), m("autoplayStop"), !0), E = (a, l) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    r !== void 0 && clearTimeout(r), a || (M = !0);
    const s = () => {
      m("autoplayPause"), h().waitForTransition ? e.wrapperEl.addEventListener("transitionend", n) : y();
    };
    if (e.autoplay.paused = !0, l) {
      s();
      return;
    }
    x = (x || h().delay) - ((/* @__PURE__ */ new Date()).getTime() - L), !(e.isEnd && x < 0 && !e.params.loop) && (x < 0 && (x = 0), s());
  }, y = () => {
    e.isEnd && x < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (L = (/* @__PURE__ */ new Date()).getTime(), M ? (M = !1, T(x)) : T(), e.autoplay.paused = !1, m("autoplayResume"));
  }, I = () => {
    e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && (M = !0, E(!0)), document.visibilityState === "visible" && y());
  }, p = (a) => {
    a.pointerType === "mouse" && (M = !0, t = !0, !(e.animating || e.autoplay.paused) && E(!0));
  }, v = (a) => {
    a.pointerType === "mouse" && (t = !1, e.autoplay.paused && y());
  }, C = () => {
    h().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", p), e.el.addEventListener("pointerleave", v));
  }, O = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", p), e.el.removeEventListener("pointerleave", v));
  }, V = () => {
    document.addEventListener("visibilitychange", I);
  }, j = () => {
    document.removeEventListener("visibilitychange", I);
  };
  g("init", () => {
    h().enabled && (C(), V(), B());
  }), g("destroy", () => {
    O(), j(), e.autoplay.running && u();
  }), g("_freeModeStaticRelease", () => {
    (D || M) && y();
  }), g("_freeModeNoMomentumRelease", () => {
    h().disableOnInteraction ? u() : E(!0, !0);
  }), g("beforeTransitionStart", (a, l, s) => {
    e.destroyed || !e.autoplay.running || (s || !h().disableOnInteraction ? E(!0, !0) : u());
  }), g("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (h().disableOnInteraction) {
        u();
        return;
      }
      $ = !0, D = !1, M = !1, _ = setTimeout(() => {
        M = !0, D = !0, E(!0);
      }, 200);
    }
  }), g("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !$)) {
      if (_ !== void 0 && clearTimeout(_), r !== void 0 && clearTimeout(r), h().disableOnInteraction) {
        D = !1, $ = !1;
        return;
      }
      D && e.params.cssMode && y(), D = !1, $ = !1;
    }
  }), g("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (x = c(), R = c());
  }), Object.assign(e.autoplay, {
    start: B,
    stop: u,
    pause: E,
    resume: y
  });
}, J = document.getElementsByClassName("ct-headerslider")[0], de = {
  delay: 15e3,
  disableOnInteraction: !1
};
let Q = de;
J && J.dataset.edit === "true" && (Q = !1);
new ae(".ct-headerslider", {
  // configure Swiper to use modules
  modules: [ne, se, re, oe],
  loop: !0,
  a11y: !0,
  autoplay: Q,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
