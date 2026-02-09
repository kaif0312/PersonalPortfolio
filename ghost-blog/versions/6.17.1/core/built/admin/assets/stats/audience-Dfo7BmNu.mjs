import { f as u, q as p, j as s, t as Q, C as V, r as P, A as R, Z as C, _ as E } from "./index-Banm1wtA.mjs";
import { P as Y, Q as K, Z as h, O as I, R as v, T as D, a0 as N, a1 as z, a7 as J, a8 as X, a9 as ee, aa as te, ab as oe, a2 as ne, br as re } from "./stats-CjepXEWS.mjs";
var x = "Dialog", [T] = K(x), [ae, l] = T(x), b = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: a,
    defaultOpen: r,
    onOpenChange: o,
    modal: i = !0
  } = e, c = p(null), d = p(null), [f, _] = Y({
    prop: a,
    defaultProp: r ?? !1,
    onChange: o,
    caller: x
  });
  return /* @__PURE__ */ s.jsx(
    ae,
    {
      scope: t,
      triggerRef: c,
      contentRef: d,
      contentId: h(),
      titleId: h(),
      descriptionId: h(),
      open: f,
      onOpenChange: _,
      onOpenToggle: Q(() => _((H) => !H), [_]),
      modal: i,
      children: n
    }
  );
};
b.displayName = x;
var j = "DialogTrigger", M = u(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = l(j, n), o = I(t, r.triggerRef);
    return /* @__PURE__ */ s.jsx(
      v.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": O(r.open),
        ...a,
        ref: o,
        onClick: D(e.onClick, r.onOpenToggle)
      }
    );
  }
);
M.displayName = j;
var y = "DialogPortal", [se, F] = T(y, {
  forceMount: void 0
}), S = (e) => {
  const { __scopeDialog: t, forceMount: n, children: a, container: r } = e, o = l(y, t);
  return /* @__PURE__ */ s.jsx(se, { scope: t, forceMount: n, children: V.map(a, (i) => /* @__PURE__ */ s.jsx(N, { present: n || o.open, children: /* @__PURE__ */ s.jsx(z, { asChild: !0, container: r, children: i }) })) });
};
S.displayName = y;
var m = "DialogOverlay", W = u(
  (e, t) => {
    const n = F(m, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, o = l(m, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ s.jsx(N, { present: a || o.open, children: /* @__PURE__ */ s.jsx(ce, { ...r, ref: t }) }) : null;
  }
);
W.displayName = m;
var ie = ee("DialogOverlay.RemoveScroll"), ce = u(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = l(m, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s.jsx(X, { as: ie, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ s.jsx(
        v.div,
        {
          "data-state": O(r.open),
          ...a,
          ref: t,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), g = "DialogContent", L = u(
  (e, t) => {
    const n = F(g, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, o = l(g, e.__scopeDialog);
    return /* @__PURE__ */ s.jsx(N, { present: a || o.open, children: o.modal ? /* @__PURE__ */ s.jsx(le, { ...r, ref: t }) : /* @__PURE__ */ s.jsx(ue, { ...r, ref: t }) });
  }
);
L.displayName = g;
var le = u(
  (e, t) => {
    const n = l(g, e.__scopeDialog), a = p(null), r = I(t, n.contentRef, a);
    return P(() => {
      const o = a.current;
      if (o) return J(o);
    }, []), /* @__PURE__ */ s.jsx(
      w,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (o) => {
          var i;
          o.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: D(e.onPointerDownOutside, (o) => {
          const i = o.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || c) && o.preventDefault();
        }),
        onFocusOutside: D(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), ue = u(
  (e, t) => {
    const n = l(g, e.__scopeDialog), a = p(!1), r = p(!1);
    return /* @__PURE__ */ s.jsx(
      w,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var i, c;
          (i = e.onCloseAutoFocus) == null || i.call(e, o), o.defaultPrevented || (a.current || (c = n.triggerRef.current) == null || c.focus(), o.preventDefault()), a.current = !1, r.current = !1;
        },
        onInteractOutside: (o) => {
          var d, f;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (a.current = !0, o.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const i = o.target;
          ((f = n.triggerRef.current) == null ? void 0 : f.contains(i)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && r.current && o.preventDefault();
        }
      }
    );
  }
), w = u(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: o, ...i } = e, c = l(g, n), d = p(null), f = I(t, d);
    return te(), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        oe,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ s.jsx(
            ne,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": O(c.open),
              ...i,
              ref: f,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(de, { titleId: c.titleId }),
        /* @__PURE__ */ s.jsx(fe, { contentRef: d, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), A = "DialogTitle", k = u(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = l(A, n);
    return /* @__PURE__ */ s.jsx(v.h2, { id: r.titleId, ...a, ref: t });
  }
);
k.displayName = A;
var G = "DialogDescription", $ = u(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = l(G, n);
    return /* @__PURE__ */ s.jsx(v.p, { id: r.descriptionId, ...a, ref: t });
  }
);
$.displayName = G;
var B = "DialogClose", U = u(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = l(B, n);
    return /* @__PURE__ */ s.jsx(
      v.button,
      {
        type: "button",
        ...a,
        ref: t,
        onClick: D(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
U.displayName = B;
function O(e) {
  return e ? "open" : "closed";
}
var Z = "DialogTitleWarning", [ve, q] = re(Z, {
  contentName: g,
  titleName: A,
  docsSlug: "dialog"
}), de = ({ titleId: e }) => {
  const t = q(Z), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return P(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ge = "DialogDescriptionWarning", fe = ({ contentRef: e, descriptionId: t }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${q(ge).contentName}}.`;
  return P(() => {
    var o;
    const r = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(a));
  }, [a, e, t]), null;
}, Ce = b, me = M, xe = S, _e = W, Ee = L, he = k, Pe = $, Ie = U;
const Ne = (e) => !e || e.length === 0 ? R : C.filter((t) => e.includes(t.value)).reduce((t, n) => t | n.bit, 0) || R, ye = (e) => {
  const t = [];
  return e & E.PUBLIC && t.push(C[0].value), e & E.FREE && t.push(C[1].value), e & E.PAID && t.push(C[2].value), t.join(",");
};
export {
  Ee as C,
  Pe as D,
  _e as O,
  xe as P,
  Ce as R,
  me as T,
  he as a,
  Ne as b,
  Ie as c,
  ye as g
};
//# sourceMappingURL=audience-Dfo7BmNu.mjs.map
