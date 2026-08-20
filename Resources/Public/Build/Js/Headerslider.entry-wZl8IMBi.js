import { m as g, c as Y, e as K, s as V, a as J, b as j, d as Q, S as Z, N as w } from "./navigation-Cyfumqw5.js";
function G(e = "") {
  return `.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
const ee = (e) => !!e.virtual && !!e.params.virtual?.enabled, te = (e) => !!e.params.freeMode?.enabled, U = (e) => {
  if (ee(e))
    return e.virtual.slides.length;
  const q = e.params.grid?.rows;
  return e.grid && q && q > 1 ? e.slides.length / Math.ceil(q) : e.slides.length;
}, ae = ({ swiper: e, extendParams: q, on: m, emit: y }) => {
  const h = "swiper-pagination";
  q({
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
      bulletClass: `${h}-bullet`,
      bulletActiveClass: `${h}-bullet-active`,
      modifierClass: `${h}-`,
      currentClass: `${h}-current`,
      totalClass: `${h}-total`,
      hiddenClass: `${h}-hidden`,
      progressbarFillClass: `${h}-progressbar-fill`,
      progressbarOppositeClass: `${h}-progressbar-opposite`,
      clickableClass: `${h}-clickable`,
      lockClass: `${h}-lock`,
      horizontalClass: `${h}-horizontal`,
      verticalClass: `${h}-vertical`,
      paginationDisabledClass: `${h}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let E, $ = 0;
  function r() {
    return e.params.pagination;
  }
  function A() {
    return !r().el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function z(t, a) {
    const { bulletActiveClass: c } = r();
    if (!t)
      return;
    let l = t[`${a === "prev" ? "previous" : "next"}ElementSibling`];
    l && (l.classList.add(`${c}-${a}`), l = l[`${a === "prev" ? "previous" : "next"}ElementSibling`], l && l.classList.add(`${c}-${a}-${a}`));
  }
  function N(t, a, c) {
    if (t = t % c, a = a % c, a === t + 1)
      return "next";
    if (a === t - 1)
      return "previous";
  }
  function S(t) {
    const c = t.target.closest(G(r().bulletClass));
    if (!c)
      return;
    t.preventDefault();
    const l = (j(c) ?? 0) * (e.params.slidesPerGroup ?? 1);
    if (e.params.loop) {
      if (e.realIndex === l)
        return;
      const u = N(e.realIndex, l, e.slides.length);
      u === "next" ? e.slideNext() : u === "previous" ? e.slidePrev() : e.slideToLoop(l);
    } else
      e.slideTo(l);
  }
  function M() {
    const t = e.rtl, a = r();
    if (A())
      return;
    const c = g(e.pagination.el);
    let l, u;
    const D = U(e), F = e.params.loop ? Math.ceil(D / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
    if (e.params.loop ? (u = e.previousRealIndex || 0, l = (e.params.slidesPerGroup ?? 1) > 1 ? Math.floor(e.realIndex / (e.params.slidesPerGroup ?? 1)) : e.realIndex) : typeof e.snapIndex < "u" ? (l = e.snapIndex, u = e.previousSnapIndex) : (u = e.previousIndex || 0, l = e.activeIndex || 0), a.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const f = e.pagination.bullets;
      let C = 0, p = 0, R = 0;
      if (a.dynamicBullets) {
        E = J(f[0], e.isHorizontal() ? "width" : "height");
        const v = e.isHorizontal() ? "width" : "height";
        c.forEach((b) => {
          b.style[v] = `${(E ?? 0) * (a.dynamicMainBullets + 4)}px`;
        }), a.dynamicMainBullets > 1 && u !== void 0 && ($ += l - (u || 0), $ > a.dynamicMainBullets - 1 ? $ = a.dynamicMainBullets - 1 : $ < 0 && ($ = 0)), C = Math.max(l - $, 0), p = C + (Math.min(f.length, a.dynamicMainBullets) - 1), R = (p + C) / 2;
      }
      if (f.forEach((v) => {
        const b = [
          "",
          "-next",
          "-next-next",
          "-prev",
          "-prev-prev",
          "-main"
        ].map((x) => `${a.bulletActiveClass}${x}`).flatMap((x) => typeof x == "string" && x.includes(" ") ? x.split(" ") : [x]);
        v.classList.remove(...b);
      }), c.length > 1)
        f.forEach((v) => {
          const b = j(v);
          b === l ? v.classList.add(...a.bulletActiveClass.split(" ")) : e.isElement && v.setAttribute("part", "bullet"), a.dynamicBullets && b !== void 0 && (b >= C && b <= p && v.classList.add(...`${a.bulletActiveClass}-main`.split(" ")), b === C && z(v, "prev"), b === p && z(v, "next"));
        });
      else {
        const v = f[l];
        if (v && v.classList.add(...a.bulletActiveClass.split(" ")), e.isElement && f.forEach((b, x) => {
          b.setAttribute("part", x === l ? "bullet-active" : "bullet");
        }), a.dynamicBullets) {
          const b = f[C], x = f[p];
          for (let n = C; n <= p; n += 1)
            f[n] && f[n].classList.add(...`${a.bulletActiveClass}-main`.split(" "));
          z(b, "prev"), z(x, "next");
        }
      }
      if (a.dynamicBullets) {
        const v = Math.min(f.length, a.dynamicMainBullets + 4), b = ((E ?? 0) * v - (E ?? 0)) / 2 - R * (E ?? 0), x = t ? "right" : "left", n = e.isHorizontal() ? x : "top";
        f.forEach((s) => {
          s.style[n] = `${b}px`;
        });
      }
    }
    c.forEach((f, C) => {
      if (a.type === "fraction" && (f.querySelectorAll(G(a.currentClass)).forEach((p) => {
        p.textContent = String(a.formatFractionCurrent(l + 1));
      }), f.querySelectorAll(G(a.totalClass)).forEach((p) => {
        p.textContent = String(a.formatFractionTotal(F));
      })), a.type === "progressbar") {
        let p;
        a.progressbarOpposite ? p = e.isHorizontal() ? "vertical" : "horizontal" : p = e.isHorizontal() ? "horizontal" : "vertical";
        const R = (l + 1) / F;
        let v = 1, b = 1;
        p === "horizontal" ? v = R : b = R, f.querySelectorAll(G(a.progressbarFillClass)).forEach((x) => {
          x.style.transform = `translate3d(0,0,0) scaleX(${v}) scaleY(${b})`, x.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      a.type === "custom" && a.renderCustom ? (V(f, a.renderCustom(e, l + 1, F)), C === 0 && y("paginationRender", f)) : (C === 0 && y("paginationRender", f), y("paginationUpdate", f)), e.params.watchOverflow && e.enabled && f.classList[e.isLocked ? "add" : "remove"](a.lockClass);
    });
  }
  function O() {
    const t = r();
    if (A())
      return;
    const a = U(e), c = g(e.pagination.el);
    let l = "";
    if (t.type === "bullets") {
      let u = e.params.loop ? Math.ceil(a / (e.params.slidesPerGroup ?? 1)) : e.snapGrid.length;
      e.params.freeMode && te(e) && u > a && (u = a);
      for (let D = 0; D < u; D += 1)
        t.renderBullet ? l += t.renderBullet.call(e, D, t.bulletClass) : l += `<${t.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${t.bulletClass}"></${t.bulletElement}>`;
    }
    t.type === "fraction" && (t.renderFraction ? l = t.renderFraction.call(e, t.currentClass, t.totalClass) : l = `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), t.type === "progressbar" && (t.renderProgressbar ? l = t.renderProgressbar.call(e, t.progressbarFillClass) : l = `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], c.forEach((u) => {
      t.type !== "custom" && V(u, l || ""), t.type === "bullets" && e.pagination.bullets.push(...Array.from(u.querySelectorAll(G(t.bulletClass))));
    }), t.type !== "custom" && y("paginationRender", c[0]);
  }
  function k() {
    e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
    const t = r();
    if (!t.el)
      return;
    let a;
    if (typeof t.el == "string" && e.isElement && (a = e.el.querySelector(t.el)), !a && typeof t.el == "string" && (a = [...document.querySelectorAll(t.el)]), a || (a = t.el), !a || Array.isArray(a) && a.length === 0)
      return;
    if (e.params.uniqueNavElements && typeof t.el == "string" && Array.isArray(a) && a.length > 1 && (a = [...e.el.querySelectorAll(t.el)], a.length > 1)) {
      const l = a.find((u) => K(u, ".swiper")[0] === e.el);
      l && (a = l);
    }
    Array.isArray(a) && a.length === 1 && (a = a[0]), Object.assign(e.pagination, {
      el: a
    }), g(a).forEach((l) => {
      t.type === "bullets" && t.clickable && l.classList.add(...(t.clickableClass || "").split(" ")), l.classList.add(t.modifierClass + t.type), l.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.type === "bullets" && t.dynamicBullets && (l.classList.add(`${t.modifierClass}${t.type}-dynamic`), $ = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.type === "progressbar" && t.progressbarOpposite && l.classList.add(t.progressbarOppositeClass), t.clickable && l.addEventListener("click", S), e.enabled || l.classList.add(t.lockClass);
    });
  }
  function P() {
    const t = r();
    if (A())
      return;
    const a = e.pagination.el;
    a && g(a).forEach((l) => {
      l.classList.remove(t.hiddenClass), l.classList.remove(t.modifierClass + t.type), l.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (l.classList.remove(...(t.clickableClass || "").split(" ")), l.removeEventListener("click", S));
    }), e.pagination.bullets && e.pagination.bullets.forEach((c) => c.classList.remove(...t.bulletActiveClass.split(" ")));
  }
  m("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const t = r();
    g(e.pagination.el).forEach((c) => {
      c.classList.remove(t.horizontalClass, t.verticalClass), c.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass);
    });
  }), m("init", () => {
    r().enabled === !1 ? T() : (k(), O(), M());
  }), m("activeIndexChange", () => {
    typeof e.snapIndex > "u" && M();
  }), m("snapIndexChange", () => {
    M();
  }), m("snapGridLengthChange", () => {
    O(), M();
  }), m("destroy", () => {
    P();
  }), m("enable disable", () => {
    const { el: t } = e.pagination;
    if (t) {
      const a = r();
      g(t).forEach((l) => l.classList[e.enabled ? "remove" : "add"](a.lockClass));
    }
  }), m("lock unlock", () => {
    M();
  }), m("click", (t, a) => {
    const c = a.target, l = g(e.pagination.el), u = r();
    if (u.el && u.hideOnClick && l && l.length > 0 && !c.classList.contains(u.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && c === e.navigation.nextEl || e.navigation.prevEl && c === e.navigation.prevEl))
        return;
      const D = l[0].classList.contains(u.hiddenClass);
      y(D === !0 ? "paginationShow" : "paginationHide"), l.forEach((F) => F.classList.toggle(u.hiddenClass));
    }
  });
  const H = () => {
    const t = r();
    e.el.classList.remove(t.paginationDisabledClass);
    const { el: a } = e.pagination;
    a && g(a).forEach((l) => l.classList.remove(t.paginationDisabledClass)), k(), O(), M();
  }, T = () => {
    const t = r();
    e.el.classList.add(t.paginationDisabledClass);
    const { el: a } = e.pagination;
    a && g(a).forEach((l) => l.classList.add(t.paginationDisabledClass)), P();
  };
  Object.assign(e.pagination, {
    enable: H,
    disable: T,
    render: O,
    update: M,
    init: k,
    destroy: P
  });
}, ne = (e) => !!e.virtual && !!e.params.virtual?.enabled, le = ({ swiper: e, extendParams: q, on: m }) => {
  q({
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
  let y = null, h = !1, E, $ = (/* @__PURE__ */ new Date()).getTime();
  function r() {
    return e.params.a11y;
  }
  function A(n) {
    const s = y;
    !s || !n || V(s, n);
  }
  function z(n = 16) {
    const s = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(n).replace(/x/g, s);
  }
  function N(n) {
    g(n).forEach((o) => {
      o.setAttribute("tabIndex", "0");
    });
  }
  function S(n) {
    g(n).forEach((o) => {
      o.setAttribute("tabIndex", "-1");
    });
  }
  function M(n, s) {
    g(n).forEach((i) => {
      i.setAttribute("role", s);
    });
  }
  function O(n, s) {
    g(n).forEach((i) => {
      i.setAttribute("aria-roledescription", s);
    });
  }
  function k(n, s) {
    g(n).forEach((i) => {
      i.setAttribute("aria-label", s);
    });
  }
  function P(n, s) {
    g(n).forEach((i) => {
      i.setAttribute("id", s);
    });
  }
  function H(n, s) {
    g(n).forEach((i) => {
      i.setAttribute("aria-live", s);
    });
  }
  function T(n) {
    g(n).forEach((o) => {
      o.setAttribute("aria-disabled", "true");
    });
  }
  function t(n) {
    g(n).forEach((o) => {
      o.removeAttribute("aria-disabled");
    });
  }
  function a(n) {
    if (n.keyCode !== 13 && n.keyCode !== 32)
      return;
    const s = r(), o = e.params.pagination, i = n.target;
    if (!(e.pagination && e.pagination.el && (i === e.pagination.el || e.pagination.el.contains(i)) && !i.matches(G(o?.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const d = g(e.navigation.prevEl);
        g(e.navigation.nextEl).includes(i) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? A(s.lastSlideMessage) : A(s.nextSlideMessage)), d.includes(i) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? A(s.firstSlideMessage) : A(s.prevSlideMessage));
      }
      e.pagination && i.matches(G(o?.bulletClass)) && i.click();
    }
  }
  function c() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const { nextEl: n, prevEl: s } = e.navigation;
    s && (e.isBeginning ? (T(s), S(s)) : (t(s), N(s))), n && (e.isEnd ? (T(n), S(n)) : (t(n), N(n)));
  }
  function l() {
    return !!(e.pagination && e.pagination.bullets && e.pagination.bullets.length);
  }
  function u() {
    const n = e.params.pagination;
    return l() && !!n?.clickable;
  }
  function D() {
    const n = r();
    if (!l())
      return;
    const s = e.params.pagination;
    e.pagination.bullets.forEach((o) => {
      s.clickable && (N(o), s.renderBullet || (M(o, "button"), k(o, n.paginationBulletMessage.replace(/\{\{index\}\}/, String((j(o) ?? 0) + 1))))), o.matches(G(s.bulletActiveClass)) ? o.setAttribute("aria-current", "true") : o.removeAttribute("aria-current");
    });
  }
  const F = (n, s, o) => {
    N(n), n.tagName !== "BUTTON" && (M(n, "button"), n.addEventListener("keydown", a)), k(n, o);
  }, f = (n) => {
    E && E !== n.target && !E.contains(n.target) && (h = !0), e.a11y.clicked = !0;
  }, C = () => {
    h = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, p = (n) => {
    $ = (/* @__PURE__ */ new Date()).getTime();
  }, R = (n) => {
    const s = r();
    if (e.a11y.clicked || !s.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - $ < 100)
      return;
    const i = n.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!i || !e.slides.includes(i))
      return;
    E = i;
    const d = ne(e), L = (d ? parseInt(i.getAttribute("data-swiper-slide-index") || "0", 10) : e.slides.indexOf(i)) === e.activeIndex, B = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(i);
    if (L || B)
      return;
    const I = n.sourceCapabilities;
    I && I.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      h || (e.params.loop ? e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(i.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : d ? e.slideTo(e.getSlideIndexWhenGrid(parseInt(i.getAttribute("data-swiper-slide-index") || "0", 10)), 0) : e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(i)), 0), h = !1);
    }));
  }, v = () => {
    const n = r();
    n.itemRoleDescriptionMessage && O(e.slides, n.itemRoleDescriptionMessage), n.slideRole && M(e.slides, n.slideRole);
    const s = e.slides.length, o = n.slideLabelMessage;
    o && e.slides.forEach((i, d) => {
      const L = e.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index") || "0", 10) : d, B = o.replace(/\{\{index\}\}/, String(L + 1)).replace(/\{\{slidesLength\}\}/, String(s));
      k(i, B);
    });
  }, b = () => {
    const n = r();
    y && e.el.append(y);
    const s = e.el;
    n.containerRoleDescriptionMessage && O(s, n.containerRoleDescriptionMessage), n.containerMessage && k(s, n.containerMessage), n.containerRole && M(s, n.containerRole);
    const o = e.wrapperEl, i = String(n.id || o.getAttribute("id") || `swiper-wrapper-${z(16)}`);
    if (P(o, i), n.wrapperLiveRegion) {
      const I = e.params.autoplay, _ = e.params.autoplay && I?.enabled ? "off" : "polite";
      H(o, _);
    }
    v();
    const d = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, L = g(d.nextEl), B = g(d.prevEl);
    L && L.forEach((I) => F(I, i, n.nextSlideMessage)), B && B.forEach((I) => F(I, i, n.prevSlideMessage)), u() && g(e.pagination.el).forEach((_) => {
      _.addEventListener("keydown", a);
    }), document.addEventListener("visibilitychange", p), e.el.addEventListener("focus", R, !0), e.el.addEventListener("pointerdown", f, !0), e.el.addEventListener("pointerup", C, !0);
  };
  function x() {
    y && y.remove();
    const n = e.navigation ? e.navigation : { nextEl: void 0, prevEl: void 0 }, s = g(n.nextEl), o = g(n.prevEl);
    s && s.forEach((i) => i.removeEventListener("keydown", a)), o && o.forEach((i) => i.removeEventListener("keydown", a)), u() && g(e.pagination.el).forEach((d) => {
      d.removeEventListener("keydown", a);
    }), document.removeEventListener("visibilitychange", p), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", R, !0), e.el.removeEventListener("pointerdown", f, !0), e.el.removeEventListener("pointerup", C, !0));
  }
  m("beforeInit", () => {
    y = Q("span", r().notificationClass), y.setAttribute("aria-live", "assertive"), y.setAttribute("aria-atomic", "true");
  }), m("afterInit", () => {
    r().enabled && b();
  }), m("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    r().enabled && v();
  }), m("fromEdge toEdge afterInit lock unlock", () => {
    r().enabled && c();
  }), m("paginationUpdate", () => {
    r().enabled && D();
  }), m("destroy", () => {
    r().enabled && x();
  });
}, ie = ({ swiper: e, extendParams: q, on: m, emit: y, params: h }) => {
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, q({
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
  function E() {
    return e.params.autoplay;
  }
  const $ = typeof h.autoplay == "object" && h.autoplay && typeof h.autoplay.delay == "number" ? h.autoplay.delay : 3e3;
  let r, A, z = $, N = $, S = 0, M = (/* @__PURE__ */ new Date()).getTime(), O = !1, k = !1, P = !1, H, T = !1, t = !1;
  function a(i) {
    if (!e || e.destroyed || !e.wrapperEl || i.target !== e.wrapperEl)
      return;
    e.wrapperEl.removeEventListener("transitionend", a);
    const d = i.detail;
    t || d && d.bySwiperTouchMove || p();
  }
  const c = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? O = !0 : O && (N = S, O = !1);
    const i = e.autoplay.paused ? S : M + N - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = i, y("autoplayTimeLeft", i, i / z), A = requestAnimationFrame(() => {
      c();
    });
  }, l = () => {
    let i;
    const d = !!e.params.virtual?.enabled;
    if (e.virtual && d ? i = e.slides.find((B) => B.classList.contains("swiper-slide-active")) : i = e.slides[e.activeIndex], !i)
      return;
    const L = i.getAttribute("data-swiper-autoplay");
    if (L != null)
      return parseInt(L, 10);
  }, u = () => {
    let i = E().delay;
    const d = l();
    return typeof d == "number" && !Number.isNaN(d) && d > 0 && (i = d), i;
  }, D = (i) => {
    if (e.destroyed || !e.autoplay.running)
      return 0;
    A !== void 0 && cancelAnimationFrame(A), c();
    let d = i;
    typeof d > "u" && (d = u(), z = d, N = d), S = d;
    const L = e.params.speed, B = () => {
      if (!e || e.destroyed)
        return;
      const I = E();
      I.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(L, !0, !0), y("autoplay")) : I.stopOnLastSlide || (e.slideTo(e.slides.length - 1, L, !0, !0), y("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(L, !0, !0), y("autoplay")) : I.stopOnLastSlide || (e.slideTo(0, L, !0, !0), y("autoplay")), e.params.cssMode && (M = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        D();
      }));
    };
    return d > 0 ? (r !== void 0 && clearTimeout(r), r = setTimeout(() => {
      B();
    }, d)) : requestAnimationFrame(() => {
      B();
    }), d;
  }, F = () => (M = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, D(), y("autoplayStart"), !0), f = () => (e.autoplay.running = !1, r !== void 0 && clearTimeout(r), A !== void 0 && cancelAnimationFrame(A), y("autoplayStop"), !0), C = (i, d) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    r !== void 0 && clearTimeout(r), i || (T = !0);
    const L = () => {
      y("autoplayPause"), E().waitForTransition ? e.wrapperEl.addEventListener("transitionend", a) : p();
    };
    if (e.autoplay.paused = !0, d) {
      L();
      return;
    }
    S = (S || E().delay) - ((/* @__PURE__ */ new Date()).getTime() - M), !(e.isEnd && S < 0 && !e.params.loop) && (S < 0 && (S = 0), L());
  }, p = () => {
    e.isEnd && S < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (M = (/* @__PURE__ */ new Date()).getTime(), T ? (T = !1, D(S)) : D(), e.autoplay.paused = !1, y("autoplayResume"));
  }, R = () => {
    e.destroyed || !e.autoplay.running || (document.visibilityState === "hidden" && (T = !0, C(!0)), document.visibilityState === "visible" && p());
  }, v = (i) => {
    i.pointerType === "mouse" && (T = !0, t = !0, !(e.animating || e.autoplay.paused) && C(!0));
  }, b = (i) => {
    i.pointerType === "mouse" && (t = !1, e.autoplay.paused && p());
  }, x = () => {
    E().pauseOnMouseEnter && (e.el.addEventListener("pointerenter", v), e.el.addEventListener("pointerleave", b));
  }, n = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", v), e.el.removeEventListener("pointerleave", b));
  }, s = () => {
    document.addEventListener("visibilitychange", R);
  }, o = () => {
    document.removeEventListener("visibilitychange", R);
  };
  m("init", () => {
    E().enabled && (x(), s(), F());
  }), m("destroy", () => {
    n(), o(), e.autoplay.running && f();
  }), m("_freeModeStaticRelease", () => {
    (P || T) && p();
  }), m("_freeModeNoMomentumRelease", () => {
    E().disableOnInteraction ? f() : C(!0, !0);
  }), m("beforeTransitionStart", (i, d, L) => {
    e.destroyed || !e.autoplay.running || (L || !E().disableOnInteraction ? C(!0, !0) : f());
  }), m("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (E().disableOnInteraction) {
        f();
        return;
      }
      k = !0, P = !1, T = !1, H = setTimeout(() => {
        T = !0, P = !0, C(!0);
      }, 200);
    }
  }), m("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !k)) {
      if (H !== void 0 && clearTimeout(H), r !== void 0 && clearTimeout(r), E().disableOnInteraction) {
        P = !1, k = !1;
        return;
      }
      P && e.params.cssMode && p(), P = !1, k = !1;
    }
  }), m("slideChange", () => {
    e.destroyed || !e.autoplay.running || e.autoplay.paused && (S = u(), z = u());
  }), Object.assign(e.autoplay, {
    start: F,
    stop: f,
    pause: C,
    resume: p
  });
}, W = document.getElementsByClassName("ct-headerslider")[0], se = {
  delay: 15e3,
  disableOnInteraction: !1
};
let X = se;
W && W.dataset.edit === "true" && (X = !1);
new Z(".ct-headerslider", {
  // configure Swiper to use modules
  modules: [w, ae, ie, le],
  loop: !0,
  a11y: !0,
  autoplay: X,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
