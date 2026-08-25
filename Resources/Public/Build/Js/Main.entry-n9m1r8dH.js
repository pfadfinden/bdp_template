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
const g = new c();
Object.freeze(g);
const u = /* @__PURE__ */ Symbol("_vtc");
function h(n) {
  return (n ? n.ownerDocument : document).body.offsetHeight;
}
function d(n, t) {
  t.split(/\s+/).forEach((e) => e && n.classList.add(e)), (n[u] || (n[u] = /* @__PURE__ */ new Set())).add(t);
}
function f(n, t) {
  t.split(/\s+/).forEach((r) => r && n.classList.remove(r));
  const e = n[u];
  e && (e.delete(t), e.size === 0 && (n[u] = void 0));
}
function m(n) {
  requestAnimationFrame(() => {
    requestAnimationFrame(n);
  });
}
const v = (n) => {
  const t = getComputedStyle(n), e = t.transitionDuration.split(",").map((s) => parseFloat(s) * 1e3), r = t.transitionDelay.split(",").map((s) => parseFloat(s) * 1e3), o = e.map((s, i) => s + (r[i] || 0));
  return Math.max(...o, 0);
}, b = (n, ...t) => {
  t.forEach((e) => f(n, e));
};
class E {
  constructor(t, e = "slide", r = void 0, o = void 0, s = void 0, i = void 0, a = void 0, p = void 0) {
    this.el = t, this.name = e, this.isEnter = !1, this.isLeave = !1, this._cancelEnter = null, this._cancelLeave = null, this.enterFromClass = r ?? `${e}-enter-from`, this.enterActiveClass = o ?? `${e}-enter-active`, this.enterToClass = s ?? `${e}-enter-to`, this.leaveFromClass = i ?? `${e}-leave-from`, this.leaveActiveClass = a ?? `${e}-leave-active`, this.leaveToClass = p ?? `${e}-leave-to`;
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
      e.style.display = "", h(e), d(e, this.enterFromClass), d(e, this.enterActiveClass), m(() => {
        f(e, this.enterFromClass), d(e, this.enterToClass);
        const r = (a = !1) => {
          clearTimeout(i), e.removeEventListener("transitionend", o), this._cleanupEnter(), a || t();
        }, o = (a) => {
          a && a.target !== e || r();
        }, s = v(e), i = setTimeout(() => r(), s + 50);
        e.addEventListener("transitionend", o), this._cancelEnter = () => r(!0);
      });
    }));
  }
  leave() {
    return this.cancelEnter(), this.isLeave ? Promise.resolve() : (this.isLeave = !0, new Promise((t) => {
      const e = this.el;
      d(e, this.leaveFromClass), d(e, this.leaveActiveClass), h(e), m(() => {
        f(e, this.leaveFromClass), d(e, this.leaveToClass);
        const r = (a = !1) => {
          clearTimeout(i), e.removeEventListener("transitionend", o), this._cleanupLeave(), a || (e.style.display = "none", t());
        }, o = (a) => {
          a && a.target !== e || r();
        }, s = v(e), i = setTimeout(() => r(), s + 50);
        e.addEventListener("transitionend", o), this._cancelLeave = () => r(!0);
      });
    }));
  }
  toggle() {
    return this.el.style.display === "none" || getComputedStyle(this.el).display === "none" ? this.enter() : this.leave();
  }
}
let l = "";
function y(n) {
  const t = document.getElementById("mobile-sidebar");
  document.getElementById("mobile-main-menu-toggle"), window.innerWidth <= 1024 ? !t.classList.contains("hidden") && document.querySelector("body").style.setProperty("overflow", "hidden") : t && document.querySelector("body").style.removeProperty("overflow");
}
document.addEventListener(
  "DOMContentLoaded",
  function() {
    const n = document.getElementById("main-menu");
    n && n.addEventListener(
      "click",
      function(s) {
        s.target.dataset.tid && (s.target.dataset.tid !== l ? (l = s.target.dataset.tid, s.preventDefault()) : (l = "", s.preventDefault()), n.querySelectorAll("button.group\\/navbutton").forEach(function(i) {
          l !== "" && i.dataset.tid === l ? i.setAttribute("aria-expanded", "true") : i.setAttribute("aria-expanded", "false");
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
    const r = document.getElementById("mobile-menu");
    if (r) {
      const s = /* @__PURE__ */ new Map();
      r.querySelectorAll(".m-submenu").forEach(function(i) {
        i.dataset.sid && s.set(
          i.dataset.sid,
          new E(
            i,
            "mobile-dropdown",
            "overflow-hidden grid grid-rows-[0fr]",
            "transition-[grid-template-rows] duration-400 ease-in",
            "overflow-hidden grid grid-rows-[1fr]",
            "overflow-hidden grid grid-rows-[1fr]",
            "transition-[grid-template-rows] duration-400 ease-out",
            "overflow-hidden grid grid-rows-[0fr]"
          )
        );
      }), r.addEventListener(
        "click",
        function(i) {
          i.target.dataset.tid && (i.target.dataset.tid !== l ? (l = i.target.dataset.tid, i.preventDefault()) : (l = "", i.preventDefault()), r.querySelectorAll("button.group\\/mnavbutton").forEach(function(a) {
            l !== "" && a.dataset.tid === l ? s.has(a.dataset.tid) && (a.setAttribute("aria-expanded", "true"), s.get(a.dataset.tid).enter()) : s.has(a.dataset.tid) && (a.setAttribute("aria-expanded", "false"), s.get(a.dataset.tid).el.style.display !== "none" && s.get(a.dataset.tid).leave());
          }));
        }
      );
    }
    const o = document.querySelector("body");
    o && (y(), g.registerElement(o, y));
  }
);
