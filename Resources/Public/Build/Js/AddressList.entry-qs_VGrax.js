const o = new ResizeObserver((s) => {
  s.forEach((t) => {
    const e = t.target, i = e.getBoundingClientRect().height, r = Math.ceil(i / 10);
    e.style.gridRowEnd = `span ${r}`;
  });
}), n = new MutationObserver((s) => {
  for (const t of s)
    t.type === "childList" && (t.addedNodes.forEach((e) => {
      e.nodeType === Node.ELEMENT_NODE && e.classList.contains("ct-address__list__item") && o.observe(e);
    }), t.removedNodes.forEach((e) => {
      e.nodeType === Node.ELEMENT_NODE && e.classList.contains("ct-address__list__item") && o.unobserve(e);
    }));
}), c = () => {
  const s = document.querySelectorAll(".ct-address__list");
  for (const t of s)
    t.querySelectorAll(".ct-address__list__item").forEach((i) => o.observe(i)), n.observe(t, { childList: !0 });
};
window.addEventListener("DOMContentLoaded", c);
