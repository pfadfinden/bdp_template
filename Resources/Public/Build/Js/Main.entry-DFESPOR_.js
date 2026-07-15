class c {
  constructor() {
    return c.instance || (this.callbacks = /* @__PURE__ */ new Map(), this.resizeObserver = new ResizeObserver((t) => {
      for (const e of t)
        this.callbacks.has(e.target) && this.callbacks.get(e.target)(e);
    }), c.instance = this), c.instance;
  }
  registerElement(t, e) {
    !this.resizeObserver || !t || typeof e != "function" || (this.callbacks.set(t, e), this.resizeObserver.observe(t));
  }
  destroyListener(t) {
    !this.resizeObserver || !t || (this.callbacks.delete(t), this.resizeObserver.unobserve(t));
  }
}
const p = new c();
Object.freeze(p);
const u = /* @__PURE__ */ Symbol("_vtc");
function h(i) {
  return (i ? i.ownerDocument : document).body.offsetHeight;
}
function d(i, t) {
  t.split(/\s+/).forEach((e) => e && i.classList.add(e)), (i[u] || (i[u] = /* @__PURE__ */ new Set())).add(t);
}
function f(i, t) {
  t.split(/\s+/).forEach((a) => a && i.classList.remove(a));
  const e = i[u];
  e && (e.delete(t), e.size === 0 && (i[u] = void 0));
}
function v(i) {
  requestAnimationFrame(() => {
    requestAnimationFrame(i);
  });
}
const m = (i) => {
  const t = getComputedStyle(i), e = t.transitionDuration.split(",").map((s) => parseFloat(s) * 1e3), a = t.transitionDelay.split(",").map((s) => parseFloat(s) * 1e3), o = e.map((s, n) => s + (a[n] || 0));
  return Math.max(...o, 0);
}, b = (i, ...t) => {
  t.forEach((e) => f(i, e));
};
class E {
  constructor(t, e = "slide", a = void 0, o = void 0, s = void 0, n = void 0, r = void 0, g = void 0) {
    this.el = t, this.name = e, this.isEnter = !1, this.isLeave = !1, this._cancelEnter = null, this._cancelLeave = null, this.enterFromClass = a ?? `${e}-enter-from`, this.enterActiveClass = o ?? `${e}-enter-active`, this.enterToClass = s ?? `${e}-enter-to`, this.leaveFromClass = n ?? `${e}-leave-from`, this.leaveActiveClass = r ?? `${e}-leave-active`, this.leaveToClass = g ?? `${e}-leave-to`;
  }
  _cleanupEnter() {
    const t = this.el;
    b(
      t,
      this.enterFromClass,
      this.enterActiveClass,
      this.enterToClass
    ), this.isEnter = !1, this._cancelEnter = null;
  }
  _cleanupLeave() {
    const t = this.el;
    b(
      t,
      this.leaveFromClass,
      this.leaveActiveClass,
      this.leaveToClass
    ), this.isLeave = !1, this._cancelLeave = null;
  }
  cancelEnter() {
    this._cancelEnter && (this._cancelEnter(), this._cancelEnter = null);
  }
  cancelLeave() {
    this._cancelLeave && (this._cancelLeave(), this._cancelLeave = null);
  }
  enter() {
    return this.cancelLeave(), this.isEnter ? Promise.resolve() : (this.isEnter = !0, new Promise((t) => {
      const e = this.el;
      e.style.display = "", h(e), d(e, this.enterFromClass), d(e, this.enterActiveClass), v(() => {
        f(e, this.enterFromClass), d(e, this.enterToClass);
        const a = (r = !1) => {
          clearTimeout(n), e.removeEventListener("transitionend", o), this._cleanupEnter(), r || t();
        }, o = (r) => {
          r && r.target !== e || a();
        }, s = m(e), n = setTimeout(() => a(), s + 50);
        e.addEventListener("transitionend", o), this._cancelEnter = () => a(!0);
      });
    }));
  }
  leave() {
    return this.cancelEnter(), this.isLeave ? Promise.resolve() : (this.isLeave = !0, new Promise((t) => {
      const e = this.el;
      d(e, this.leaveFromClass), d(e, this.leaveActiveClass), h(e), v(() => {
        f(e, this.leaveFromClass), d(e, this.leaveToClass);
        const a = (r = !1) => {
          clearTimeout(n), e.removeEventListener("transitionend", o), this._cleanupLeave(), r || (e.style.display = "none", t());
        }, o = (r) => {
          r && r.target !== e || a();
        }, s = m(e), n = setTimeout(() => a(), s + 50);
        e.addEventListener("transitionend", o), this._cancelLeave = () => a(!0);
      });
    }));
  }
  toggle() {
    return this.el.style.display === "none" || getComputedStyle(this.el).display === "none" ? this.enter() : this.leave();
  }
}
let l = "";
function y(i) {
  const t = document.getElementById("mobile-sidebar");
  window.innerWidth <= 1024 ? t.classList.contains("hidden") && document.querySelector("body").style.setProperty("overflow", "hidden") : t && document.querySelector("body").style.removeProperty("overflow");
}
document.addEventListener(
  "DOMContentLoaded",
  function() {
    const i = document.getElementById("main-menu");
    i && i.addEventListener(
      "click",
      function(s) {
        s.target.dataset.tid && (s.target.dataset.tid !== l ? (l = s.target.dataset.tid, s.preventDefault()) : (l = "", s.preventDefault()), i.querySelectorAll("button.group\\/navbutton").forEach(function(n) {
          l !== "" && n.dataset.tid === l ? n.setAttribute("aria-expanded", "true") : n.setAttribute("aria-expanded", "false");
        }));
      }
    );
    const t = document.getElementById("mobile-main-menu-toggle"), e = document.getElementById("mobile-sidebar");
    t && e && t.addEventListener(
      "click",
      function(s) {
        !e.classList.contains("hidden") ? (t.setAttribute("aria-expanded", "false"), e.classList.add("hidden"), document.querySelector("body").style.removeProperty("overflow")) : (t.setAttribute("aria-expanded", "true"), e.classList.remove("hidden"), document.querySelector("body").style.setProperty("overflow", "hidden")), s.preventDefault();
      }
    );
    const a = document.getElementById("mobile-menu");
    if (a) {
      const s = /* @__PURE__ */ new Map();
      a.querySelectorAll(".m-submenu").forEach(function(n) {
        n.dataset.sid && s.set(
          n.dataset.sid,
          new E(
            n,
            "mobile-dropdown",
            "overflow-hidden grid grid-rows-[0fr]",
            "transition-[grid-template-rows] duration-400 ease-in",
            "overflow-hidden grid grid-rows-[1fr]",
            "overflow-hidden grid grid-rows-[1fr]",
            "transition-[grid-template-rows] duration-400 ease-out",
            "overflow-hidden grid grid-rows-[0fr]"
          )
        );
      }), a.addEventListener(
        "click",
        function(n) {
          n.target.dataset.tid && (n.target.dataset.tid !== l ? (l = n.target.dataset.tid, n.preventDefault()) : (l = "", n.preventDefault()), a.querySelectorAll("button.group\\/mnavbutton").forEach(function(r) {
            l !== "" && r.dataset.tid === l ? s.has(r.dataset.tid) && (r.setAttribute("aria-expanded", "true"), s.get(r.dataset.tid).enter()) : s.has(r.dataset.tid) && (r.setAttribute("aria-expanded", "false"), s.get(r.dataset.tid).el.style.display !== "none" && s.get(r.dataset.tid).leave());
          }));
        }
      );
    }
    const o = document.querySelector("body");
    o && (y(), p.registerElement(o, y));
  }
);
