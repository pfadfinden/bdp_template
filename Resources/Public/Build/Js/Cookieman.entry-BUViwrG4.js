function A(h, a) {
  (a == null || a > h.length) && (a = h.length);
  for (var l = 0, c = Array(a); l < a; l++) c[l] = h[l];
  return c;
}
function Q(h, a) {
  for (var l = 0; l < a.length; l++) {
    var c = a[l];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(h, V(c.key), c);
  }
}
function D(h) {
  return (function(a) {
    if (Array.isArray(a)) return A(a);
  })(h) || (function(a) {
    if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
  })(h) || (function(a, l) {
    if (a) {
      if (typeof a == "string") return A(a, l);
      var c = {}.toString.call(a).slice(8, -1);
      return c === "Object" && a.constructor && (c = a.constructor.name), c === "Map" || c === "Set" ? Array.from(a) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? A(a, l) : void 0;
    }
  })(h) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function V(h) {
  var a = (function(l, c) {
    if (typeof l != "object" || !l) return l;
    var g = l[Symbol.toPrimitive];
    if (g !== void 0) {
      var b = g.call(l, c);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(l);
  })(h, "string");
  return typeof a == "symbol" ? a : a + "";
}
var k = (function() {
  var h = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], a = { openTrigger: "data-micromodal-trigger", identifier: "data-micromodal-id" }, l = {}, c = [], g = 0;
  a.generateId = function() {
    return "micromodal-".concat(++g);
  };
  var b = (function() {
    function t(n) {
      var d = n.targetModal, u = n.triggers, m = u === void 0 ? [] : u, y = n.onShow, K = y === void 0 ? function() {
      } : y, L = n.onClose, P = L === void 0 ? function() {
      } : L, S = n.openTrigger, R = S === void 0 ? "data-micromodal-trigger" : S, F = n.closeTrigger, B = F === void 0 ? "data-micromodal-close" : F, M = n.openClass, H = M === void 0 ? "is-open" : M, T = n.disableScroll, W = T !== void 0 && T, I = n.disableFocus, U = I !== void 0 && I, x = n.awaitCloseAnimation, $ = x !== void 0 && x, q = n.awaitOpenAnimation, z = q !== void 0 && q, O = n.debugMode, w = O !== void 0 && O;
      (function(G, J) {
        if (!(G instanceof J)) throw new TypeError("Cannot call a class as a function");
      })(this, t), this.modal = typeof d == "string" ? document.getElementById(d) : d, this.modalId = null, this.modal !== null ? (this.config = { debugMode: w, disableScroll: W, openTrigger: R, closeTrigger: B, openClass: H, onShow: K, onClose: P, awaitCloseAnimation: $, awaitOpenAnimation: z, disableFocus: U }, this.showModal = this.showModal.bind(this), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this), this.setFocusToFirstNode = this.setFocusToFirstNode.bind(this), this.triggers = m, this.registerTriggers()) : w === !0 && r(d, w, !1);
    }
    var o, i;
    return o = t, i = [{ key: "registerTriggers", value: function() {
      var n = this;
      this.triggers.filter(Boolean).forEach((function(d) {
        d.addEventListener("click", n.showModal);
      }));
    } }, { key: "unregisterTriggers", value: function() {
      var n = this;
      this.triggers.filter(Boolean).forEach((function(d) {
        d.removeEventListener("click", n.showModal);
      }));
    } }, { key: "destroy", value: function() {
      this.closeModal(), this.unregisterTriggers();
    } }, { key: "showModal", value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      this.modal.classList.contains(this.config.openClass) || (this.removeEventListeners(), this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.toggleScrolling(!1), this.addEventListeners(), this.modalId && c.indexOf(this.modalId) === -1 && c.push(this.modalId), this.config.awaitOpenAnimation ? this.modal.addEventListener("animationend", this.setFocusToFirstNode, { once: !0 }) : this.setFocusToFirstNode(), this.config.onShow(this.modal, this.activeElement, n));
    } }, { key: "closeModal", value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, d = this.modal, u = this.config.openClass;
      if (d.classList.contains(u)) {
        var m = c.indexOf(this.modalId);
        m > -1 && c.splice(m, 1), this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.toggleScrolling(!0), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, n), this.config.awaitCloseAnimation ? this.modal.addEventListener("animationend", (function() {
          d.classList.remove(u);
        }), { once: !0 }) : d.classList.remove(u);
      }
    } }, { key: "toggleScrolling", value: function(n) {
      if (this.config.disableScroll) {
        var d = !n || c.length > 0;
        document.body.style.overflow = d ? "hidden" : "", document.body.style.touchAction = d ? "none" : "";
      }
    } }, { key: "addEventListeners", value: function() {
      this.modal.addEventListener("click", this.onClick), this.modal.addEventListener("keydown", this.onKeydown), this.modalId ? c.length === 0 && document.addEventListener("keydown", E) : document.removeEventListener("keydown", E);
    } }, { key: "removeEventListeners", value: function() {
      this.modal.removeEventListener("click", this.onClick), this.modal.removeEventListener("keydown", this.onKeydown), c.length === 0 && document.removeEventListener("keydown", E);
    } }, { key: "onClick", value: function(n) {
      var d = p(n.target, this.modal), u = n.target.closest("[".concat(this.config.closeTrigger, "]"));
      (n.target.hasAttribute(this.config.closeTrigger) && d || u !== null && !p(u, this.modal) && !d) && (n.preventDefault(), n.stopPropagation(), this.closeModal(n));
    } }, { key: "onKeydown", value: function(n) {
      n.key !== "Escape" && n.keyCode !== 27 || this.modal.querySelector('[role="alertdialog"]') !== null || this.closeModal(n), n.key !== "Tab" && n.keyCode !== 9 || this.retainFocus(n, "inside");
    } }, { key: "getFocusableNodes", value: function() {
      return D(this.modal.querySelectorAll(h));
    } }, { key: "setFocusToFirstNode", value: function() {
      var n = this;
      if (!this.config.disableFocus) {
        var d = this.getFocusableNodes();
        if (d.length !== 0) {
          var u = d.filter((function(m) {
            return !m.hasAttribute(n.config.closeTrigger);
          }));
          u.length > 0 && u[0].focus(), u.length === 0 && d[0].focus();
        }
      }
    } }, { key: "retainFocus", value: function(n, d) {
      var u = this.getFocusableNodes();
      if (u.length !== 0) if (u = u.filter((function(y) {
        return y.offsetParent !== null;
      })), d === "outside") u[0].focus(), n.preventDefault();
      else {
        var m = u.indexOf(document.activeElement);
        n.shiftKey && m === 0 && (u[u.length - 1].focus(), n.preventDefault()), !n.shiftKey && u.length > 0 && m === u.length - 1 && (u[0].focus(), n.preventDefault());
      }
    } }], i && Q(o.prototype, i), Object.defineProperty(o, "prototype", { writable: !1 }), t;
  })(), v = function(t) {
    if (typeof t == "string") return t;
    if (t instanceof HTMLElement) {
      var o = t.getAttribute(a.identifier);
      return o || (t.id ? t.id : (o = a.generateId(), t.setAttribute(a.identifier, o), o));
    }
    return null;
  }, E = function(t) {
    var o = l[c[c.length - 1]];
    o.modal.contains(document.activeElement) || (t.key !== "Escape" && t.keyCode !== 27 || o.modal.querySelector('[role="alertdialog"]') !== null || s(), t.key !== "Tab" && t.keyCode !== 9 || o.retainFocus(t, "outside"));
  }, p = function(t, o) {
    return t === o || t.parentNode === o;
  }, r = function(t, o) {
    var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    return (i ? l[t] !== void 0 : typeof t == "string" ? document.getElementById(t) !== null : t instanceof HTMLElement) || (o && console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t, `'%c ID somewhere in your code. Try the example below to resolve it.

`) + '%cExample:%c <div class="modal" id="'.concat(t, '"></div>'), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", ""), !1);
  }, f = function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = Object.assign({}, a, { targetModal: t }, o), n = v(t);
    r(i.targetModal, i.debugMode, !1) && (l[n] || (l[n] = new b(i), l[n].modal.setAttribute(a.identifier, n), l[n].modalId = n));
  }, e = function(t, o) {
    var i = v(t);
    r(i, a.debugMode) && Object.assign(l[i].config, o);
  }, s = function(t) {
    if (c.length !== 0) if (t) {
      var o = v(t);
      c.indexOf(o) > -1 && l[o].closeModal();
    } else l[c[c.length - 1]].closeModal();
  };
  return { init: function(t) {
    Object.assign(a, t);
    var o = D(document.querySelectorAll("[".concat(a.openTrigger, "]"))), i = (function(n, d) {
      var u = [];
      return n.forEach((function(m) {
        var y = m.getAttribute(d);
        u[y] || (u[y] = []), u[y].push(m);
      })), u;
    })(o, a.openTrigger);
    a.debugMode === !0 && (function(n) {
      return !(n.length <= 0 && (console.warn(`MicroModal: ❗Please specify at least one %c'micromodal-trigger'%c data attribute.

%cExample:%c <a href="#" data-micromodal-trigger="my-modal">Open modal</a>`, "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", ""), 1));
    })(o) === !1 || Object.keys(i).forEach((function(n) {
      var d = i[n];
      f(n, { targetModal: n, triggers: d });
    }));
  }, initModal: f, config: e, show: function(t, o) {
    var i = v(t);
    l[i] ? o && e(t, o) : f(i, o), l[i] && l[i].showModal();
  }, close: s, closeAll: function() {
    for (var t = c.length - 1; t >= 0; t--) l[c[t]].closeModal();
  }, removeModal: function(t) {
    var o = v(t), i = l[o];
    i && (i.destroy(), delete l[o]);
  } };
})();
typeof window < "u" && (window.MicroModal = k);
function X(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var C = { exports: {} }, _;
function Y() {
  return _ || (_ = 1, (function(h) {
    (function(a) {
      let l = 0;
      const c = function(g, b) {
        const v = "js-enabled", E = this;
        let p = !1;
        if (Array.isArray(g)) return !!g.length && g.map(((e) => new c(e, b)));
        const r = { init() {
          this.options = Object.assign({ duration: 500, ariaEnabled: !0, collapse: !0, showMultiple: !1, onlyChildNodes: !0, openOnInit: [], elementClass: "ac", triggerClass: "ac-trigger", panelClass: "ac-panel", activeClass: "is-active", beforeOpen: () => {
          }, onOpen: () => {
          }, beforeClose: () => {
          }, onClose: () => {
          } }, b);
          const e = typeof g == "string";
          this.container = e ? document.querySelector(g) : g, this.createDefinitions(), E.attachEvents();
        }, createDefinitions() {
          const { elementClass: e, openOnInit: s, onlyChildNodes: t } = this.options, o = t ? this.container.childNodes : this.container.querySelectorAll(f(e));
          this.elements = Array.from(o).filter(((i) => i.classList && i.classList.contains(e))), this.firstElement = this.elements[0], this.lastElement = this.elements[this.elements.length - 1], this.elements.filter(((i) => !i.classList.contains(v))).forEach(((i) => {
            i.classList.add(v), this.generateIDs(i), this.setARIA(i), this.setTransition(i);
            const n = this.elements.indexOf(i);
            l++, s.includes(n) ? this.showElement(i, !1) : this.closeElement(i, !1);
          }));
        }, setTransition(e) {
          let s = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          const { duration: t, panelClass: o } = this.options;
          e.querySelector(f(o)).style.transitionDuration = s ? null : "".concat(t, "ms");
        }, generateIDs(e) {
          const { triggerClass: s, panelClass: t } = this.options, o = e.querySelector(f(s)), i = e.querySelector(f(t));
          e.setAttribute("id", e.id || "ac-".concat(l)), o.setAttribute("id", o.id || "ac-trigger-".concat(l)), i.setAttribute("id", i.id || "ac-panel-".concat(l));
        }, removeIDs(e) {
          const { triggerClass: s, panelClass: t } = this.options, o = e.querySelector(f(s)), i = e.querySelector(f(t));
          e.id.startsWith("ac-") && e.removeAttribute("id"), o.id.startsWith("ac-") && o.removeAttribute("id"), i.id.startsWith("ac-") && i.removeAttribute("id");
        }, setARIA(e) {
          const { ariaEnabled: s, triggerClass: t, panelClass: o } = this.options;
          if (!s) return;
          const i = e.querySelector(f(t)), n = e.querySelector(f(o));
          i.setAttribute("role", "button"), i.setAttribute("aria-controls", n.id), i.setAttribute("aria-disabled", !1), i.setAttribute("aria-expanded", !1), n.setAttribute("role", "region"), n.setAttribute("aria-labelledby", i.id);
        }, updateARIA(e, s) {
          let { ariaExpanded: t, ariaDisabled: o } = s;
          const { ariaEnabled: i, triggerClass: n } = this.options;
          if (!i) return;
          const d = e.querySelector(f(n));
          d.setAttribute("aria-expanded", t), d.setAttribute("aria-disabled", o);
        }, removeARIA(e) {
          const { ariaEnabled: s, triggerClass: t, panelClass: o } = this.options;
          if (!s) return;
          const i = e.querySelector(f(t)), n = e.querySelector(f(o));
          i.removeAttribute("role"), i.removeAttribute("aria-controls"), i.removeAttribute("aria-disabled"), i.removeAttribute("aria-expanded"), n.removeAttribute("role"), n.removeAttribute("aria-labelledby");
        }, focus(e, s) {
          e.preventDefault();
          const { triggerClass: t } = this.options;
          s.querySelector(f(t)).focus();
        }, focusFirstElement(e) {
          this.focus(e, this.firstElement), this.currFocusedIdx = 0;
        }, focusLastElement(e) {
          this.focus(e, this.lastElement), this.currFocusedIdx = this.elements.length - 1;
        }, focusNextElement(e) {
          const s = this.currFocusedIdx + 1;
          if (s > this.elements.length - 1) return this.focusFirstElement(e);
          this.focus(e, this.elements[s]), this.currFocusedIdx = s;
        }, focusPrevElement(e) {
          const s = this.currFocusedIdx - 1;
          if (s < 0) return this.focusLastElement(e);
          this.focus(e, this.elements[s]), this.currFocusedIdx = s;
        }, showElement(e) {
          let s = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          const { panelClass: t, activeClass: o, collapse: i, beforeOpen: n } = this.options;
          s && n(e);
          const d = e.querySelector(f(t)), u = d.scrollHeight;
          e.classList.add(o), requestAnimationFrame((() => {
            requestAnimationFrame((() => {
              d.style.height = s ? "".concat(u, "px") : "auto";
            }));
          })), this.updateARIA(e, { ariaExpanded: !0, ariaDisabled: !i });
        }, closeElement(e) {
          let s = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          const { panelClass: t, activeClass: o, beforeClose: i } = this.options, n = e.querySelector(f(t)), d = n.scrollHeight;
          e.classList.remove(o), s ? (i(e), requestAnimationFrame((() => {
            n.style.height = "".concat(d, "px"), requestAnimationFrame((() => {
              n.style.height = 0;
            }));
          }))) : n.style.height = 0, this.updateARIA(e, { ariaExpanded: !1, ariaDisabled: !1 });
        }, toggleElement(e) {
          const { activeClass: s, collapse: t } = this.options, o = e.classList.contains(s);
          if (!o || t) return o ? this.closeElement(e) : this.showElement(e);
        }, closeElements() {
          const { activeClass: e, showMultiple: s } = this.options;
          s || this.elements.forEach(((t, o) => {
            t.classList.contains(e) && o !== this.currFocusedIdx && this.closeElement(t);
          }));
        }, handleClick(e) {
          const s = e.currentTarget;
          this.elements.forEach(((t, o) => {
            t.contains(s) && e.target.nodeName !== "A" && (this.currFocusedIdx = o, this.closeElements(), this.focus(e, t), this.toggleElement(t));
          }));
        }, handleKeydown(e) {
          switch (e.key) {
            case "ArrowUp":
              return this.focusPrevElement(e);
            case "ArrowDown":
              return this.focusNextElement(e);
            case "Home":
              return this.focusFirstElement(e);
            case "End":
              return this.focusLastElement(e);
            default:
              return null;
          }
        }, handleFocus(e) {
          const s = e.currentTarget, t = this.elements.find(((o) => o.contains(s)));
          this.currFocusedIdx = this.elements.indexOf(t);
        }, handleTransitionEnd(e) {
          if (e.stopPropagation(), e.propertyName !== "height") return;
          const { onOpen: s, onClose: t } = this.options, o = e.currentTarget, i = parseInt(o.style.height), n = this.elements.find(((d) => d.contains(o)));
          i > 0 ? (o.style.height = "auto", s(n)) : t(n);
        } };
        this.attachEvents = () => {
          if (p) return;
          const { triggerClass: e, panelClass: s } = r.options;
          r.handleClick = r.handleClick.bind(r), r.handleKeydown = r.handleKeydown.bind(r), r.handleFocus = r.handleFocus.bind(r), r.handleTransitionEnd = r.handleTransitionEnd.bind(r), r.elements.forEach(((t) => {
            const o = t.querySelector(f(e)), i = t.querySelector(f(s));
            o.addEventListener("click", r.handleClick), o.addEventListener("keydown", r.handleKeydown), o.addEventListener("focus", r.handleFocus), i.addEventListener("transitionend", r.handleTransitionEnd);
          })), p = !0;
        }, this.detachEvents = () => {
          if (!p) return;
          const { triggerClass: e, panelClass: s } = r.options;
          r.elements.forEach(((t) => {
            const o = t.querySelector(f(e)), i = t.querySelector(f(s));
            o.removeEventListener("click", r.handleClick), o.removeEventListener("keydown", r.handleKeydown), o.removeEventListener("focus", r.handleFocus), i.removeEventListener("transitionend", r.handleTransitionEnd);
          })), p = !1;
        }, this.toggle = (e) => {
          const s = r.elements[e];
          s && r.toggleElement(s);
        }, this.open = (e) => {
          const s = r.elements[e];
          s && r.showElement(s);
        }, this.openAll = () => {
          const { activeClass: e, onOpen: s } = r.options;
          r.elements.forEach(((t) => {
            t.classList.contains(e) || (r.showElement(t, !1), s(t));
          }));
        }, this.close = (e) => {
          const s = r.elements[e];
          s && r.closeElement(s);
        }, this.closeAll = () => {
          const { activeClass: e, onClose: s } = r.options;
          r.elements.forEach(((t) => {
            t.classList.contains(e) && (r.closeElement(t, !1), s(t));
          }));
        }, this.destroy = () => {
          this.detachEvents(), this.openAll(), r.elements.forEach(((e) => {
            r.removeIDs(e), r.removeARIA(e), r.setTransition(e, !0), e.classList.remove(v);
          })), p = !0;
        }, this.update = () => {
          r.createDefinitions(), this.detachEvents(), this.attachEvents();
        };
        const f = (e) => ".".concat(CSS.escape(e));
        r.init();
      };
      h.exports !== void 0 ? h.exports = c : a.Accordion = c;
    })(window);
  })(C)), C.exports;
}
var Z = Y();
const j = /* @__PURE__ */ X(Z), N = document.querySelector('[aria-controls="cookieman-settings"]');
N && N.addEventListener("click", function(h) {
  const a = document.querySelector(
    "[data-cookieman-save]:not([data-cookieman-accept-all]):not([data-cookieman-accept-none])"
  );
  a && (a.hidden = !1);
});
cookieman.show = function() {
  k.show("cookieman-modal", {
    disableScroll: !0
  });
};
cookieman.hide = function() {
  k.close("cookieman-modal");
};
new j(".cm-base", {
  duration: 400,
  showMultiple: !1,
  elementClass: "cm-base__ac",
  triggerClass: "cm-base__ac__h__t",
  panelClass: "cm-base__ac__d",
  activeClass: "is-active"
});
new j(".cookie-accordion", {
  duration: 400,
  showMultiple: !0
});
