import { o as I, j as e, u as R, p as _, b as L, n as T, V as Se, F as os, G as U, H as Q, J as Pe, K as is, a as E, q as V, Q as q, v as G, e as ls, _ as oe, $ as cs } from "./index-uYyMBANY.mjs";
import { u as ds, F as ms, T as te, a as re, b as ne, d as ae, c as us } from "./filters-BXCfSKKS.mjs";
import { c as Y, b as X, a as hs, d as ps } from "./hooks-BiBMDYOA.mjs";
import { u as fs, g as xs, b as bs } from "./posts-DW6ne0od.mjs";
import { u as gs, U as ie, g as js, D as vs, b as Cs, E as ys, d as Ns, e as A, h as Ce, S as ks } from "./separator-YrJkDGVP.mjs";
import { e as ws, i as _s, b as le, a as Ss, F as Ps, f as Ts, C as Rs, g as Te, D as ce, M as Is, H as Re, R as Es, d as Ie, E as Ee, h as Le } from "./search-CVlPqGMA.mjs";
import { a as Ls, C as $s, X as Ms, k as de, m as me, n as ue, o as he, p as Ds, q as pe } from "./dialog-VFomJYla.mjs";
import { H as ye, g as Fs, u as zs } from "./use-infinite-virtual-scroll-B7dD2nWW.mjs";
import { M as Os } from "./main-layout-f-PcNn-6.mjs";
import { c as Bs, P as fe, u as Hs, b as $e, e as Ne, h as As, B as P, C as Us } from "./heading-DIulQwgD.mjs";
import { L as Z } from "./loading-indicator-BPPeKpVb.mjs";
import { E as Me } from "./empty-indicator-CT9qQsMO.mjs";
import { S as Vs, b as qs, c as Ws, d as Qs } from "./sheet-T5GWxxrn.mjs";
var J = "Checkbox", [Ks] = Bs(J), [Gs, xe] = Ks(J);
function Ys(s) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: a,
    defaultChecked: n,
    disabled: o,
    form: l,
    name: c,
    onCheckedChange: i,
    required: d,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = s, [h, p] = Hs({
    prop: r,
    defaultProp: n ?? !1,
    onChange: i,
    caller: J
  }), [b, g] = R(null), [j, v] = R(null), f = _(!1), C = b ? !!l || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), w = {
    checked: h,
    disabled: o,
    setChecked: p,
    control: b,
    setControl: g,
    name: c,
    form: l,
    value: u,
    hasConsumerStoppedPropagationRef: f,
    required: d,
    defaultChecked: $(n) ? !1 : n,
    isFormControl: C,
    bubbleInput: j,
    setBubbleInput: v
  };
  return /* @__PURE__ */ e.jsx(
    Gs,
    {
      scope: t,
      ...w,
      children: Xs(m) ? m(w) : a
    }
  );
}
var De = "CheckboxTrigger", Fe = I(
  ({ __scopeCheckbox: s, onKeyDown: t, onClick: r, ...a }, n) => {
    const {
      control: o,
      value: l,
      disabled: c,
      checked: i,
      required: d,
      setControl: u,
      setChecked: m,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: p,
      bubbleInput: b
    } = xe(De, s), g = $e(n, u), j = _(i);
    return L(() => {
      const v = o == null ? void 0 : o.form;
      if (v) {
        const f = () => m(j.current);
        return v.addEventListener("reset", f), () => v.removeEventListener("reset", f);
      }
    }, [o, m]), /* @__PURE__ */ e.jsx(
      fe.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": $(i) ? "mixed" : i,
        "aria-required": d,
        "data-state": Ae(i),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: l,
        ...a,
        ref: g,
        onKeyDown: Ne(t, (v) => {
          v.key === "Enter" && v.preventDefault();
        }),
        onClick: Ne(r, (v) => {
          m((f) => $(f) ? !0 : !f), b && p && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
        })
      }
    );
  }
);
Fe.displayName = De;
var be = I(
  (s, t) => {
    const {
      __scopeCheckbox: r,
      name: a,
      checked: n,
      defaultChecked: o,
      required: l,
      disabled: c,
      value: i,
      onCheckedChange: d,
      form: u,
      ...m
    } = s;
    return /* @__PURE__ */ e.jsx(
      Ys,
      {
        __scopeCheckbox: r,
        checked: n,
        defaultChecked: o,
        disabled: c,
        required: l,
        onCheckedChange: d,
        name: a,
        form: u,
        value: i,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            Fe,
            {
              ...m,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          h && /* @__PURE__ */ e.jsx(
            He,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
be.displayName = J;
var ze = "CheckboxIndicator", Oe = I(
  (s, t) => {
    const { __scopeCheckbox: r, forceMount: a, ...n } = s, o = xe(ze, r);
    return /* @__PURE__ */ e.jsx(
      Ls,
      {
        present: a || $(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ e.jsx(
          fe.span,
          {
            "data-state": Ae(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: t,
            style: { pointerEvents: "none", ...s.style }
          }
        )
      }
    );
  }
);
Oe.displayName = ze;
var Be = "CheckboxBubbleInput", He = I(
  ({ __scopeCheckbox: s, ...t }, r) => {
    const {
      control: a,
      hasConsumerStoppedPropagationRef: n,
      checked: o,
      defaultChecked: l,
      required: c,
      disabled: i,
      name: d,
      value: u,
      form: m,
      bubbleInput: h,
      setBubbleInput: p
    } = xe(Be, s), b = $e(r, p), g = ds(o), j = gs(a);
    L(() => {
      const f = h;
      if (!f) return;
      const C = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, y = !n.current;
      if (g !== o && k) {
        const x = new Event("click", { bubbles: y });
        f.indeterminate = $(o), k.call(f, $(o) ? !1 : o), f.dispatchEvent(x);
      }
    }, [h, g, o, n]);
    const v = _($(o) ? !1 : o);
    return /* @__PURE__ */ e.jsx(
      fe.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? v.current,
        required: c,
        disabled: i,
        name: d,
        value: u,
        form: m,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...j,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
He.displayName = Be;
function Xs(s) {
  return typeof s == "function";
}
function $(s) {
  return s === "indeterminate";
}
function Ae(s) {
  return $(s) ? "indeterminate" : s ? "checked" : "unchecked";
}
const Zs = Se(
  "inline-flex items-center rounded-sm border px-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Js({ className: s, variant: t, ...r }) {
  return /* @__PURE__ */ e.jsx("div", { className: T(Zs({ variant: t }), s), ...r });
}
const Ue = I(({ className: s, ...t }, r) => /* @__PURE__ */ e.jsx(
  be,
  {
    ref: r,
    className: T(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      s
    ),
    ...t,
    children: /* @__PURE__ */ e.jsx(
      Oe,
      {
        className: T("grid place-content-center text-current"),
        children: /* @__PURE__ */ e.jsx($s, { className: "size-4" })
      }
    )
  }
));
Ue.displayName = be.displayName;
var et = Symbol.for("react.lazy"), K = os[" use ".trim().toString()];
function st(s) {
  return typeof s == "object" && s !== null && "then" in s;
}
function Ve(s) {
  return s != null && typeof s == "object" && "$$typeof" in s && s.$$typeof === et && "_payload" in s && st(s._payload);
}
// @__NO_SIDE_EFFECTS__
function tt(s) {
  const t = /* @__PURE__ */ rt(s), r = I((a, n) => {
    let { children: o, ...l } = a;
    Ve(o) && typeof K == "function" && (o = K(o._payload));
    const c = U.toArray(o), i = c.find(at);
    if (i) {
      const d = i.props.children, u = c.map((m) => m === i ? U.count(d) > 1 ? U.only(null) : Q(d) ? d.props.children : null : m);
      return /* @__PURE__ */ e.jsx(t, { ...l, ref: n, children: Q(d) ? Pe(d, void 0, u) : null });
    }
    return /* @__PURE__ */ e.jsx(t, { ...l, ref: n, children: o });
  });
  return r.displayName = `${s}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function rt(s) {
  const t = I((r, a) => {
    let { children: n, ...o } = r;
    if (Ve(n) && typeof K == "function" && (n = K(n._payload)), Q(n)) {
      const l = it(n), c = ot(o, n.props);
      return n.type !== is && (c.ref = a ? As(a, l) : l), Pe(n, c);
    }
    return U.count(n) > 1 ? U.only(null) : null;
  });
  return t.displayName = `${s}.SlotClone`, t;
}
var nt = Symbol("radix.slottable");
function at(s) {
  return Q(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === nt;
}
function ot(s, t) {
  const r = { ...t };
  for (const a in t) {
    const n = s[a], o = t[a];
    /^on[A-Z]/.test(a) ? n && o ? r[a] = (...c) => {
      const i = o(...c);
      return n(...c), i;
    } : n && (r[a] = n) : a === "style" ? r[a] = { ...n, ...o } : a === "className" && (r[a] = [n, o].filter(Boolean).join(" "));
  }
  return { ...s, ...r };
}
function it(s) {
  var a, n;
  let t = (a = Object.getOwnPropertyDescriptor(s.props, "ref")) == null ? void 0 : a.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? s.ref : (t = (n = Object.getOwnPropertyDescriptor(s, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? s.props.ref : s.props.ref || s.ref);
}
var lt = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ct = lt.reduce((s, t) => {
  const r = /* @__PURE__ */ tt(`Primitive.${t}`), a = I((n, o) => {
    const { asChild: l, ...c } = n, i = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ e.jsx(i, { ...c, ref: o });
  });
  return a.displayName = `Primitive.${t}`, { ...s, [t]: a };
}, {}), dt = "Label", qe = I((s, t) => /* @__PURE__ */ e.jsx(
  ct.label,
  {
    ...s,
    ref: t,
    onMouseDown: (r) => {
      var n;
      r.target.closest("button, input, select, textarea") || ((n = s.onMouseDown) == null || n.call(s, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
qe.displayName = dt;
var We = qe;
const mt = Se(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Qe = I(({ className: s, ...t }, r) => /* @__PURE__ */ e.jsx(
  We,
  {
    ref: r,
    className: T(mt(), s),
    ...t
  }
));
Qe.displayName = We.displayName;
const ut = ({ children: s, className: t, ...r }) => /* @__PURE__ */ e.jsx("section", { className: T("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...r, children: s }), Ke = "MembersResponseType", ht = hs({
  dataType: Ke,
  path: "/members/"
}), pt = Y({
  dataType: Ke,
  path: (s) => `/members/${s}/`
}), ft = X({
  method: "POST",
  path: ({ id: s }) => `/members/${s}/commenting/disable`,
  body: ({ reason: s, hideComments: t }) => ({
    reason: s,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), xt = X({
  method: "POST",
  path: ({ id: s }) => `/members/${s}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
});
function ke({
  knownItems: s,
  useSearch: t,
  useGetById: r,
  filters: a,
  filterFieldName: n,
  searchFieldName: o,
  toOption: l
}) {
  const [c, i] = R(""), { data: d, isLoading: u } = t(c), m = E(() => {
    const f = a.find((C) => C.field === n);
    return f != null && f.values[0] ? String(f.values[0]) : "";
  }, [a, n]), h = E(() => !m || s.some((C) => C.id === m) ? !1 : !((d == null ? void 0 : d[o]) ?? []).some((C) => C.id === m), [m, s, d, o]), { data: p, isLoading: b } = r(m || "", {
    enabled: h,
    defaultErrorHandler: !1
  }), g = u || b, j = V((f) => l(f), [l]);
  return {
    options: E(() => {
      var k;
      const f = (d == null ? void 0 : d[o]) ?? [], C = {};
      for (const y of s)
        C[y.id] = j(y);
      for (const y of f)
        C[y.id] = j(y);
      const w = (k = p == null ? void 0 : p[o]) == null ? void 0 : k[0];
      return w != null && w.id && (C[w.id] = j(w)), m && !(m in C) && (C[m] = { value: m, label: `ID: ${m}` }), Object.values(C);
    }, [s, d, o, p, m, j]),
    isLoading: g,
    searchValue: c,
    onSearchChange: i
  };
}
function bt(s, t, r, a) {
  var n = this, o = _(null), l = _(0), c = _(0), i = _(null), d = _([]), u = _(), m = _(), h = _(s), p = _(!0);
  h.current = s;
  var b = typeof window < "u", g = !t && t !== 0 && b;
  if (typeof s != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var j = !!(r = r || {}).leading, v = !("trailing" in r) || !!r.trailing, f = "maxWait" in r, C = "debounceOnServer" in r && !!r.debounceOnServer, w = f ? Math.max(+r.maxWait || 0, t) : null;
  L(function() {
    return p.current = !0, function() {
      p.current = !1;
    };
  }, []);
  var k = E(function() {
    var y = function(N) {
      var S = d.current, z = u.current;
      return d.current = u.current = null, l.current = N, c.current = c.current || N, m.current = h.current.apply(z, S);
    }, x = function(N, S) {
      g && cancelAnimationFrame(i.current), i.current = g ? requestAnimationFrame(N) : setTimeout(N, S);
    }, M = function(N) {
      if (!p.current) return !1;
      var S = N - o.current;
      return !o.current || S >= t || S < 0 || f && N - l.current >= w;
    }, H = function(N) {
      return i.current = null, v && d.current ? y(N) : (d.current = u.current = null, m.current);
    }, D = function N() {
      var S = Date.now();
      if (j && c.current === l.current && O(), M(S)) return H(S);
      if (p.current) {
        var z = t - (S - o.current), W = f ? Math.min(z, w - (S - l.current)) : z;
        x(N, W);
      }
    }, O = function() {
      a && a({});
    }, F = function() {
      if (b || C) {
        var N = Date.now(), S = M(N);
        if (d.current = [].slice.call(arguments), u.current = n, o.current = N, S) {
          if (!i.current && p.current) return l.current = o.current, x(D, t), j ? y(o.current) : m.current;
          if (f) return x(D, t), y(o.current);
        }
        return i.current || x(D, t), m.current;
      }
    };
    return F.cancel = function() {
      var N = i.current;
      N && (g ? cancelAnimationFrame(i.current) : clearTimeout(i.current)), l.current = 0, d.current = o.current = u.current = i.current = null, N && a && a({});
    }, F.isPending = function() {
      return !!i.current;
    }, F.flush = function() {
      return i.current ? H(Date.now()) : m.current;
    }, F;
  }, [j, f, t, w, v, g, b, C, a]);
  return k;
}
function gt(s, t) {
  return s === t;
}
function Ge(s, t, r) {
  var a = gt, n = _(s), o = R({})[1], l = bt(V(function(i) {
    n.current = i, o({});
  }, [o]), t, r, o), c = _(s);
  return a(c.current, s) || (l(s), c.current = s), [n.current, l];
}
function jt(s) {
  const [t] = Ge(s, 200);
  return ht({
    searchParams: {
      ...t && { search: t },
      limit: "100",
      order: "created_at DESC"
    }
  });
}
function vt(s) {
  const [t] = Ge(s, 200), r = t ? `title:~'${t.replace(/'/g, "\\'")}'` : "";
  return fs({
    searchParams: {
      ...r && { filter: r },
      limit: "100",
      fields: "id,title",
      order: "published_at DESC"
    }
  });
}
const Ct = ({
  knownPosts: s,
  knownMembers: t,
  filters: r,
  onFiltersChange: a
}) => {
  const n = ke({
    knownItems: s,
    useSearch: vt,
    useGetById: xs,
    searchFieldName: "posts",
    filters: r,
    filterFieldName: "post",
    toOption: (d) => ({
      value: d.id,
      label: d.title || "(Untitled)"
    })
  }), o = ke({
    knownItems: t,
    useSearch: jt,
    useGetById: pt,
    searchFieldName: "members",
    filters: r,
    filterFieldName: "author",
    toOption: (d) => ({
      value: d.id,
      label: d.name || "Unknown name",
      detail: d.email ?? "(Unknown email)"
    })
  }), l = E(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ie, { className: "size-4" }),
        options: o.options,
        isLoading: o.options.length === 0 && o.isLoading,
        onSearchChange: o.onSearchChange,
        searchValue: o.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ws, { className: "size-4" }),
        options: n.options,
        isLoading: n.options.length === 0 && n.isLoading,
        onSearchChange: n.onSearchChange,
        searchValue: n.searchValue,
        searchable: !0,
        className: "w-full max-w-80",
        popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ e.jsx(_s, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-full max-w-48",
        popoverContentClassName: "w-full max-w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(js, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(le, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-full max-w-32",
        icon: /* @__PURE__ */ e.jsx(Ss, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [n, o]
  ), c = r.length > 0, i = T(
    "flex flex-row",
    !c && "[grid-area:actions] pt-5 justify-start sm:justify-end sm:pt-0",
    c && "col-start-1 col-end-4 row-start-3 pt-5"
  );
  return /* @__PURE__ */ e.jsx("div", { className: i, children: /* @__PURE__ */ e.jsx(
    ms,
    {
      addButtonIcon: c ? /* @__PURE__ */ e.jsx(Ps, {}) : /* @__PURE__ */ e.jsx(Ts, {}),
      addButtonText: c ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${c ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ e.jsx(Ms, {}),
      clearButtonText: "Clear",
      fields: l,
      filters: r,
      keyboardShortcut: "f",
      popoverAlign: c ? "start" : "end",
      showClearButton: c,
      showSearchInput: !1,
      onChange: a
    }
  ) });
}, yt = ({ children: s }) => /* @__PURE__ */ e.jsxs(ye, { className: "relative !pb-6 md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(ye.Title, { children: "Comments" }),
  s
] }), Nt = ({ children: s }) => /* @__PURE__ */ e.jsx(Os, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: s }) }) });
function kt({ onClick: s, expanded: t }) {
  return /* @__PURE__ */ e.jsxs(
    P,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: s,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ e.jsx(Rs, {}) : /* @__PURE__ */ e.jsx(Us, {})
      ]
    }
  );
}
function Ye({ item: s }) {
  const t = _(null), [r, a] = R(!1), [n, o] = R(!1);
  return L(() => {
    if (n)
      return;
    const l = () => {
      t.current && a(t.current.scrollHeight > t.current.clientHeight);
    };
    return l(), window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [s.html, n]), /* @__PURE__ */ e.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: `flex max-w-full flex-col items-start ${s.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: s.html || "" },
        ref: t,
        className: T(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          n ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ e.jsx(kt, { expanded: n, onClick: () => o(!n) })
  ] }) });
}
const ee = "CommentsResponseType", wt = ps({
  dataType: ee,
  path: "/comments/",
  defaultNextPageParams: (s, t) => {
    var r, a;
    return (r = s.meta) != null && r.pagination.next ? {
      ...t,
      page: (((a = s.meta) == null ? void 0 : a.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (s) => {
    const { pages: t } = s, r = t.flatMap((n) => n.comments), a = t[t.length - 1].meta;
    return {
      comments: r,
      meta: a,
      isEnd: a ? a.pagination.pages === a.pagination.page : !0
    };
  }
}), Xe = (s) => wt({
  ...s,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...s == null ? void 0 : s.searchParams
  }
}), Ze = X({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: ee
  }
}), Je = X({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: ee
  }
}), _t = Y({
  dataType: ee,
  path: (s) => `/comments/${s}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), St = Y({
  dataType: "CommentReportsResponseType",
  path: (s) => `/comments/${s}/reports/`
}), Pt = (s, t) => St(s, { ...t }), Tt = Y({
  dataType: "CommentLikesResponseType",
  path: (s) => `/comments/${s}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), Rt = (s, t) => Tt(s, { ...t }), It = (s, t) => Xe({
  ...t,
  searchParams: {
    filter: `(parent_id:${s}+in_reply_to_id:null),in_reply_to_id:${s}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function B({ avatarImage: s, memberId: t, isHidden: r, className: a }) {
  return /* @__PURE__ */ e.jsxs("div", { className: T(
    "relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full bg-accent md:size-8 md:min-w-8",
    r && "opacity-50",
    a
  ), children: [
    t && s && /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ e.jsx("img", { alt: "Member avatar", src: s }) }),
    /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ie, { className: "!size-3 text-muted-foreground md:!size-4", size: 12 }) })
  ] });
}
function Et(s) {
  const t = new Date(s);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function es({
  memberName: s,
  memberId: t,
  createdAt: r,
  isHidden: a,
  canComment: n,
  onAuthorClick: o,
  postTitle: l,
  onPostClick: c,
  className: i
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: T("flex items-baseline gap-4", i), children: [
    /* @__PURE__ */ e.jsxs("div", { className: T(
      "mb-1 flex min-w-0 items-center gap-x-1 text-sm",
      a && "opacity-50"
    ), children: [
      /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap", children: t && o ? /* @__PURE__ */ e.jsx(
        P,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: o,
          children: s || "Unknown"
        }
      ) : /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold", children: s || "Unknown" }) }),
      n === !1 && /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(re, { children: [
        /* @__PURE__ */ e.jsx(ne, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ e.jsx(
          Te,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ e.jsx(ae, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ e.jsx(ce, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ e.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(re, { children: [
        /* @__PURE__ */ e.jsx(ne, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: q(r) }) }),
        /* @__PURE__ */ e.jsx(ae, { children: Et(r) })
      ] }) }) }),
      l && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate", children: c ? /* @__PURE__ */ e.jsx(
          P,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: c,
            children: l
          }
        ) : /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: l }) })
      ] })
    ] }),
    a && /* @__PURE__ */ e.jsx(Js, { variant: "secondary", children: "Hidden" })
  ] });
}
function Lt({
  open: s,
  memberName: t,
  onOpenChange: r,
  onConfirm: a
}) {
  const [n, o] = R(!1), l = (i) => {
    i || o(!1), r(i);
  }, c = () => {
    a(n), o(!1);
  };
  return /* @__PURE__ */ e.jsx(de, { open: s, onOpenChange: l, children: /* @__PURE__ */ e.jsxs(me, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsxs(ue, { children: [
      /* @__PURE__ */ e.jsx(he, { children: "Disable comments" }),
      /* @__PURE__ */ e.jsxs(Ds, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(
        Ue,
        {
          checked: n,
          id: "hide-comments",
          onCheckedChange: (i) => o(i === !0)
        }
      ),
      /* @__PURE__ */ e.jsx(Qe, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ e.jsxs(pe, { children: [
      /* @__PURE__ */ e.jsx(P, { variant: "outline", onClick: () => l(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(P, { onClick: c, children: "Disable comments" })
    ] })
  ] }) });
}
function ss({
  comment: s,
  commentPermalinksEnabled: t
}) {
  const { mutate: r } = ft(), { mutate: a } = xt(), [n, o] = R(!1), { id: l, post: c, member: i } = s, d = c == null ? void 0 : c.url, u = i == null ? void 0 : i.id, m = i == null ? void 0 : i.can_comment, h = (b) => {
    u && (r({
      id: u,
      reason: `Disabled from comment ${l}`,
      hideComments: b
    }), o(!1));
  }, p = () => {
    u && a({ id: u });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(vs, { children: [
      /* @__PURE__ */ e.jsx(Cs, { asChild: !0, children: /* @__PURE__ */ e.jsx(
        P,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ e.jsx(ys, {})
        }
      ) }),
      /* @__PURE__ */ e.jsxs(Ns, { align: "start", children: [
        d && (t ? /* @__PURE__ */ e.jsx(A, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `${d}#ghost-comments-${l}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ e.jsx(Ce, { className: "size-4" }),
          "View on post"
        ] }) }) : /* @__PURE__ */ e.jsx(A, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: d, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ e.jsx(Ce, { className: "size-4" }),
          "View post"
        ] }) })),
        u && /* @__PURE__ */ e.jsx(A, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `#/members/${u}`, children: [
          /* @__PURE__ */ e.jsx(ie, { className: "size-4" }),
          "View member"
        ] }) }),
        u && (m !== !1 ? /* @__PURE__ */ e.jsxs(A, { onClick: () => o(!0), children: [
          /* @__PURE__ */ e.jsx(Te, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ e.jsxs(A, { onClick: p, children: [
          /* @__PURE__ */ e.jsx(Is, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      Lt,
      {
        memberName: i == null ? void 0 : i.name,
        open: n,
        onConfirm: h,
        onOpenChange: o
      }
    )
  ] });
}
function $t({ comment: s, open: t, onOpenChange: r }) {
  var i, d, u, m, h;
  const { data: a, isLoading: n } = Rt(s.id, { enabled: t }), o = (a == null ? void 0 : a.comment_likes) ?? [], l = ((i = s.count) == null ? void 0 : i.likes) ?? 0, c = l - o.length;
  return /* @__PURE__ */ e.jsx(de, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(me, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(he, { children: [
      l,
      " ",
      l === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        B,
        {
          avatarImage: (d = s.member) == null ? void 0 : d.avatar_image,
          className: "shrink-0",
          memberId: (u = s.member) == null ? void 0 : u.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((m = s.member) == null ? void 0 : m.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(ce, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && q(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((h = s.post) == null ? void 0 : h.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      o.map((p) => {
        var b, g, j;
        return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ e.jsx(
                B,
                {
                  avatarImage: (b = p.member) == null ? void 0 : b.avatar_image,
                  memberId: (g = p.member) == null ? void 0 : g.id
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ e.jsx(Re, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((j = p.member) == null ? void 0 : j.name) || "Deleted member" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: q(p.created_at) })
        ] }, p.id);
      }),
      c > 0 && /* @__PURE__ */ e.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        c,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(pe, { children: /* @__PURE__ */ e.jsx(P, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Mt({ comment: s, open: t, onOpenChange: r }) {
  var c, i, d, u, m;
  const { data: a, isLoading: n } = Pt(s.id, { enabled: t }), o = (a == null ? void 0 : a.comment_reports) ?? [], l = ((c = s.count) == null ? void 0 : c.reports) ?? o.length;
  return /* @__PURE__ */ e.jsx(de, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(me, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(he, { children: [
      l,
      " ",
      l === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        B,
        {
          avatarImage: (i = s.member) == null ? void 0 : i.avatar_image,
          className: "shrink-0",
          memberId: (d = s.member) == null ? void 0 : d.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((u = s.member) == null ? void 0 : u.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(ce, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && q(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((m = s.post) == null ? void 0 : m.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(Z, { size: "md" }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-3 pb-1", children: o.map((h) => {
      var p, b, g;
      return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ e.jsx(
              B,
              {
                avatarImage: (p = h.member) == null ? void 0 : p.avatar_image,
                memberId: (b = h.member) == null ? void 0 : b.id
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ e.jsx(le, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((g = h.member) == null ? void 0 : g.name) || "Deleted member" })
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: q(h.created_at) })
      ] }, h.id);
    }) }) }),
    /* @__PURE__ */ e.jsx(pe, { children: /* @__PURE__ */ e.jsx(P, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function se({ icon: s, count: t, label: r, to: a, onClick: n, className: o, testId: l }) {
  const c = T("flex items-center gap-1 text-xs text-gray-800", o), i = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    s,
    /* @__PURE__ */ e.jsx("span", { children: ls(t) })
  ] }), d = a || n;
  return /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(re, { children: [
    /* @__PURE__ */ e.jsx(ne, { asChild: !0, children: a ? /* @__PURE__ */ e.jsx(
      oe,
      {
        className: T(c, "cursor-pointer hover:opacity-70"),
        "data-testid": l,
        to: a,
        onClick: (u) => {
          u.stopPropagation();
        },
        children: i
      }
    ) : n ? /* @__PURE__ */ e.jsx(
      "button",
      {
        className: T(c, "cursor-pointer hover:opacity-70"),
        "data-testid": l,
        type: "button",
        onClick: (u) => {
          u.stopPropagation(), n();
        },
        children: i
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: c, "data-testid": l, children: i }) }),
    /* @__PURE__ */ e.jsx(ae, { children: d ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function ge(s, t) {
  if (!t)
    return;
  const r = new URLSearchParams(s);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function ts({
  comment: s,
  className: t
}) {
  var b, g, j, v, f;
  const [r] = G(), [a, n] = R(!1), [o, l] = R(!1), c = ge(r, s.id), i = ((b = s.count) == null ? void 0 : b.direct_replies) ?? ((g = s.count) == null ? void 0 : g.replies) ?? ((j = s.replies) == null ? void 0 : j.length) ?? 0, d = ((v = s.count) == null ? void 0 : v.likes) ?? 0, u = ((f = s.count) == null ? void 0 : f.reports) ?? 0, m = i > 0, h = d > 0, p = u > 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: T("flex items-center gap-6", t), children: [
      /* @__PURE__ */ e.jsx(
        se,
        {
          count: i,
          icon: /* @__PURE__ */ e.jsx(Es, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: m ? c : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        se,
        {
          count: d,
          icon: /* @__PURE__ */ e.jsx(Re, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: h ? () => n(!0) : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        se,
        {
          className: p ? "font-semibold text-red" : void 0,
          count: u,
          icon: /* @__PURE__ */ e.jsx(le, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: p ? () => l(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      $t,
      {
        comment: s,
        open: a,
        onOpenChange: n
      }
    ),
    /* @__PURE__ */ e.jsx(
      Mt,
      {
        comment: s,
        open: o,
        onOpenChange: l
      }
    )
  ] });
}
function Dt({ hasReplies: s }) {
  return s ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function rs({ comment: s, isReply: t = !1, isSelectedComment: r = !1, selectedCommentId: a, commentPermalinksEnabled: n }) {
  var u, m, h, p, b, g, j, v;
  const [o] = G(), { mutate: l } = Ze(), { mutate: c } = Je(), i = (((u = s.replies) == null ? void 0 : u.length) ?? 0) > 0 || (((m = s.count) == null ? void 0 : m.direct_replies) ?? ((h = s.count) == null ? void 0 : h.replies) ?? 0) > 0, d = !i || t ? "mb-7" : "mb-0";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex w-full flex-row ${d}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ e.jsx(
        B,
        {
          avatarImage: (p = s.member) == null ? void 0 : p.avatar_image,
          className: "mb-3 shrink-0 md:mb-4",
          isHidden: s.status === "hidden",
          memberId: (b = s.member) == null ? void 0 : b.id
        }
      ),
      /* @__PURE__ */ e.jsx(Dt, { hasReplies: i && !t })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grow", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${s.id}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ e.jsx(
              es,
              {
                canComment: (g = s.member) == null ? void 0 : g.can_comment,
                createdAt: s.created_at,
                isHidden: s.status === "hidden",
                memberId: (j = s.member) == null ? void 0 : j.id,
                memberName: (v = s.member) == null ? void 0 : v.name
              }
            ),
            s.in_reply_to_snippet && r && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${s.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ e.jsx(
                oe,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: ge(o, s.in_reply_to_id || s.parent_id) || "",
                  onClick: (f) => {
                    f.stopPropagation();
                  },
                  children: s.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(Ye, { item: s }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              s.status === "published" && /* @__PURE__ */ e.jsxs(P, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => l({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Ie, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              s.status === "hidden" && /* @__PURE__ */ e.jsxs(P, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => c({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Ee, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ e.jsx(
                ts,
                {
                  comment: s
                }
              ),
              /* @__PURE__ */ e.jsx(
                ss,
                {
                  comment: s,
                  commentPermalinksEnabled: n
                }
              )
            ] })
          ] }),
          i && s.replies && /* @__PURE__ */ e.jsx("div", { className: "-ml-2 mb-4 mt-7 pl-2 md:-ml-3 md:mb-0 md:mt-8 md:pl-3", children: s.replies.map((f) => /* @__PURE__ */ e.jsx(
            rs,
            {
              comment: f,
              commentPermalinksEnabled: n,
              isReply: !0,
              selectedCommentId: a
            },
            f.id
          )) })
        ]
      }
    ) })
  ] });
}
const Ft = ({
  selectedComment: s,
  replies: t,
  selectedCommentId: r,
  commentPermalinksEnabled: a
}) => {
  const n = { ...s, replies: t };
  return /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: /* @__PURE__ */ e.jsx(
    rs,
    {
      comment: n,
      commentPermalinksEnabled: a,
      isSelectedComment: !0,
      selectedCommentId: r
    }
  ) });
}, zt = ({
  commentId: s,
  open: t,
  onOpenChange: r,
  commentPermalinksEnabled: a
}) => {
  var b;
  const { data: n, isLoading: o, isError: l } = It(s ?? "", {
    enabled: t && !!s
  }), { data: c, isLoading: i, isError: d } = _t(s ?? "", {
    enabled: t && !!s
  }), u = o || i, m = d || l && !c, h = (b = c == null ? void 0 : c.comments) == null ? void 0 : b[0], p = (n == null ? void 0 : n.comments) || [];
  return /* @__PURE__ */ e.jsx(Vs, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(qs, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ e.jsx(Ws, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ e.jsx(Qs, { className: "text-md", children: "Thread" }) }),
    (h == null ? void 0 : h.post) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: h.post.title }),
          h.post.excerpt && /* @__PURE__ */ e.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: h.post.excerpt })
        ] }),
        h.post.feature_image && /* @__PURE__ */ e.jsx(
          "img",
          {
            alt: h.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: h.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(ks, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: u ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(Z, { size: "lg" }) }) : m || !h ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(
      Me,
      {
        actions: /* @__PURE__ */ e.jsx(P, { variant: "outline", onClick: () => r(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ e.jsx(Le, {})
      }
    ) }) : /* @__PURE__ */ e.jsx(
      Ft,
      {
        commentPermalinksEnabled: a,
        replies: p,
        selectedComment: h,
        selectedCommentId: s ?? ""
      }
    ) })
  ] }) });
}, we = /* @__PURE__ */ new Map();
function Ot({ parentRef: s, enabled: t = !0, isLoading: r = !1 }) {
  const a = cs(), [n, o] = R(null), l = _(null);
  L(() => {
    if (!t || !s.current)
      return;
    const c = Fs(s.current);
    o(c);
  }, [t, s]), L(() => {
    if (!t || !n)
      return;
    const c = a.pathname + a.search, i = () => {
      const d = n.scrollTop;
      we.set(c, d);
    };
    return n.addEventListener("scroll", i), () => n.removeEventListener("scroll", i);
  }, [t, a.pathname, a.search, n]), L(() => {
    const c = a.pathname + a.search, i = we.get(c);
    if (!(!t || !n || r)) {
      if (i !== void 0 && l.current !== c) {
        let d = 0;
        const u = 3, m = () => {
          if (d += 1, !n)
            return;
          const p = n.scrollTop, b = n.scrollHeight, g = n.clientHeight, j = b - g;
          if (i > j && d < u) {
            setTimeout(m, 100);
            return;
          }
          if (Math.abs(i - p) > 5) {
            const v = Math.min(i, j);
            n.scrollTop = v;
          }
        }, h = setTimeout(m, 150);
        return () => clearTimeout(h);
      }
      l.current = c;
    }
  }, [t, a.pathname, a.search, n, r]);
}
const _e = ({ height: s }) => /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: s } }) }), Bt = I(function(t, r) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ e.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function Ht({
  items: s,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: a,
  fetchNextPage: n,
  onAddFilter: o,
  isLoading: l,
  commentPermalinksEnabled: c
}) {
  const i = _(null), [d, u] = G(), [m, h] = R(!1), [p, b] = R(null), { mutate: g } = Ze(), { mutate: j } = Je(), v = (k) => {
    if (h(k), !k) {
      const y = new URLSearchParams(d);
      y.delete("thread"), u(y, { replace: !0 });
    }
  };
  L(() => {
    const k = d.get("thread");
    if (k) {
      const y = k.match(/^is:(.+)$/);
      if (y && y[1]) {
        const x = y[1];
        b(x), h(!0);
      } else
        h(!1), b(null);
    } else
      h(!1), b(null);
  }, [d]), Ot({ parentRef: i, isLoading: l });
  const { visibleItems: f, spaceBefore: C, spaceAfter: w } = zs({
    items: s,
    totalItems: t,
    hasNextPage: r,
    isFetchingNextPage: a,
    fetchNextPage: n,
    parentRef: i
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: i, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx(_e, { height: C }),
          f.map(({ key: k, virtualItem: y, item: x, props: M }) => {
            var D, O, F, N, S, z, W, je, ve;
            return y.index > s.length - 1 ? /* @__PURE__ */ e.jsx(Bt, { ...M }, k) : /* @__PURE__ */ e.jsxs(
              "div",
              {
                ...M,
                className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
                "data-testid": "comment-list-row",
                onClick: () => {
                  m && v(!1);
                },
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e.jsx(
                      B,
                      {
                        avatarImage: (D = x.member) == null ? void 0 : D.avatar_image,
                        isHidden: x.status === "hidden",
                        memberId: (O = x.member) == null ? void 0 : O.id
                      }
                    ),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ e.jsx(
                        es,
                        {
                          canComment: (F = x.member) == null ? void 0 : F.can_comment,
                          createdAt: x.created_at,
                          isHidden: x.status === "hidden",
                          memberId: (N = x.member) == null ? void 0 : N.id,
                          memberName: (S = x.member) == null ? void 0 : S.name,
                          postTitle: (z = x.post) == null ? void 0 : z.title,
                          onAuthorClick: (W = x.member) != null && W.id ? () => o("author", x.member.id) : void 0,
                          onPostClick: (je = x.post) != null && je.id ? () => o("post", x.post.id) : void 0
                        }
                      ),
                      x.in_reply_to_snippet && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${x.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ e.jsx(
                          oe,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: ge(d, x.in_reply_to_id || x.parent_id) || "",
                            onClick: (as) => {
                              as.stopPropagation();
                            },
                            children: x.in_reply_to_snippet
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(Ye, { item: x }),
                      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                        x.status === "published" && /* @__PURE__ */ e.jsxs(P, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => g({ id: x.id }), children: [
                          /* @__PURE__ */ e.jsx(Ie, {}),
                          "Hide"
                        ] }),
                        x.status === "hidden" && /* @__PURE__ */ e.jsxs(P, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => j({ id: x.id }), children: [
                          /* @__PURE__ */ e.jsx(Ee, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          ts,
                          {
                            className: "ml-2",
                            comment: x
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          ss,
                          {
                            comment: x,
                            commentPermalinksEnabled: c
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { children: (ve = x.post) != null && ve.feature_image ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      alt: x.post.title || "Post feature image",
                      className: `hidden aspect-video w-36 rounded object-cover lg:block ${x.status === "hidden" && "opacity-50"}`,
                      src: x.post.feature_image
                    }
                  ) : null })
                ]
              },
              k
            );
          }),
          /* @__PURE__ */ e.jsx(_e, { height: w })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      zt,
      {
        commentId: p,
        commentPermalinksEnabled: c,
        open: m,
        onOpenChange: v
      }
    )
  ] });
}
const ns = ["id", "status", "created_at", "body", "post", "author", "reported"];
function At(s) {
  const t = [];
  for (const r of s)
    if (r.values[0])
      switch (r.field) {
        case "id":
          t.push(`id:'${r.values[0]}'`);
          break;
        case "status":
          t.push(`status:${r.values[0]}`);
          break;
        case "created_at":
          if (r.operator === "before" && r.values[0])
            t.push(`created_at:<'${r.values[0]}'`);
          else if (r.operator === "after" && r.values[0])
            t.push(`created_at:>'${r.values[0]}'`);
          else if (r.operator === "is" && r.values[0]) {
            const o = String(r.values[0]), l = (/* @__PURE__ */ new Date(o + "T00:00:00")).toISOString(), c = (/* @__PURE__ */ new Date(o + "T23:59:59.999")).toISOString();
            t.push(`created_at:>='${l}'+created_at:<='${c}'`);
          }
          break;
        case "body":
          const n = r.values[0].replace(/'/g, "\\'");
          r.operator === "contains" ? t.push(`html:~'${n}'`) : r.operator === "not_contains" && t.push(`html:-~'${n}'`);
          break;
        case "post":
          r.operator === "is_not" ? t.push(`post_id:-${r.values[0]}`) : t.push(`post_id:${r.values[0]}`);
          break;
        case "author":
          r.operator === "is_not" ? t.push(`member_id:-${r.values[0]}`) : t.push(`member_id:${r.values[0]}`);
          break;
        case "reported":
          r.values[0] === "true" ? t.push("count.reports:>0") : r.values[0] === "false" && t.push("count.reports:0");
          break;
      }
  return t.length ? t.join("+") : void 0;
}
function Ut(s) {
  if (!s)
    return null;
  const t = s.indexOf(":");
  return t <= 0 ? null : {
    operator: s.substring(0, t),
    value: s.substring(t + 1)
  };
}
function Vt(s) {
  const t = [];
  for (const [r, a] of s.entries()) {
    if (!ns.includes(r) || !a)
      continue;
    const n = Ut(a);
    n && t.push({
      id: r,
      field: r,
      operator: n.operator,
      values: [n.value]
    });
  }
  return t;
}
function qt(s) {
  const t = new URLSearchParams();
  for (const r of s)
    if (ns.includes(r.field) && r.values[0] !== void 0) {
      const a = `${r.operator}:${String(r.values[0])}`;
      t.set(r.field, a);
    }
  return t;
}
function Wt() {
  const [s, t] = G(), r = E(() => Vt(s), [s]), a = V((c, i = {}) => {
    const d = typeof c == "function" ? c(r) : c, u = qt(d), m = i.replace ?? !0;
    t(u, { replace: m });
  }, [r, t]), n = V(({ replace: c = !0 } = {}) => {
    t(new URLSearchParams(), { replace: c });
  }, [t]), o = E(() => At(r), [r]), l = E(() => r.length === 1 && r[0].field === "id", [r]);
  return { filters: r, nql: o, setFilters: a, clearFilters: n, isSingleIdFilter: l };
}
function Qt({ comments: s }) {
  return E(() => {
    var a, n, o;
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const l of s)
      (a = l.post) != null && a.id && ((n = l.post) != null && n.title) && t.set(l.post.id, {
        id: l.post.id,
        title: l.post.title
      }), (o = l.member) != null && o.id && r.set(l.member.id, {
        id: l.member.id,
        name: l.member.name,
        email: l.member.email
      });
    return {
      knownPosts: Array.from(t.values()),
      knownMembers: Array.from(r.values())
    };
  }, [s]);
}
const ir = () => {
  var f, C, w, k;
  const { filters: s, nql: t, setFilters: r, clearFilters: a, isSingleIdFilter: n } = Wt(), { data: o } = bs(), l = ((C = (f = o == null ? void 0 : o.config) == null ? void 0 : f.labs) == null ? void 0 : C.commentPermalinks) === !0, c = V((y, x, M = "is") => {
    r((H) => [...H.filter((O) => O.field !== y), us(y, M, [x])], { replace: !1 });
  }, [r]), {
    data: i,
    isError: d,
    isFetching: u,
    isFetchingNextPage: m,
    isRefetching: h,
    fetchNextPage: p,
    hasNextPage: b
  } = Xe({
    searchParams: t ? { filter: t } : {},
    keepPreviousData: !0
  }), { knownPosts: g, knownMembers: j } = Qt({ comments: (i == null ? void 0 : i.comments) ?? [] }), v = u && !m && !h;
  return /* @__PURE__ */ e.jsxs(Nt, { children: [
    /* @__PURE__ */ e.jsx(yt, { children: !n && /* @__PURE__ */ e.jsx(
      Ct,
      {
        filters: s,
        knownMembers: j,
        knownPosts: g,
        onFiltersChange: r
      }
    ) }),
    /* @__PURE__ */ e.jsx(ut, { children: v ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(Z, { size: "lg" }) }) : d ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(P, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : i != null && i.comments.length ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        Ht,
        {
          commentPermalinksEnabled: l,
          fetchNextPage: p,
          hasNextPage: b,
          isFetchingNextPage: m,
          isLoading: u && !m,
          items: (i == null ? void 0 : i.comments) ?? [],
          totalItems: ((k = (w = i == null ? void 0 : i.meta) == null ? void 0 : w.pagination) == null ? void 0 : k.total) ?? 0,
          onAddFilter: c
        }
      ),
      n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ e.jsx(P, { variant: "outline", onClick: () => a({ replace: !1 }), children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      Me,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ e.jsx(Le, {})
      }
    ) }) })
  ] });
};
export {
  ir as default
};
//# sourceMappingURL=comments-CHEqbZPq.mjs.map
