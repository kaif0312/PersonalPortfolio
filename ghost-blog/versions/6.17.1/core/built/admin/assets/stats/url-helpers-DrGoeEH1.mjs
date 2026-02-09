import { f as p, v as z, C as g, w as y, j as n, x as T, F as G, c as m, S as W, G as I } from "./index-Banm1wtA.mjs";
import { ac as L, X as M, bq as F } from "./stats-CjepXEWS.mjs";
import { R as H, T as Y, P as Z, C as A, c as B, a as E, D as O, O as P } from "./audience-Dfo7BmNu.mjs";
var U = Symbol.for("react.lazy"), w = z[" use ".trim().toString()];
function q(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function $(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === U && "_payload" in t && q(t._payload);
}
// @__NO_SIDE_EFFECTS__
function K(t) {
  const e = /* @__PURE__ */ X(t), o = p((s, r) => {
    let { children: a, ...c } = s;
    $(a) && typeof w == "function" && (a = w(a._payload));
    const l = g.toArray(a), f = l.find(Q);
    if (f) {
      const i = f.props.children, u = l.map((S) => S === f ? g.count(i) > 1 ? g.only(null) : y(i) ? i.props.children : null : S);
      return /* @__PURE__ */ n.jsx(e, { ...c, ref: r, children: y(i) ? T(i, void 0, u) : null });
    }
    return /* @__PURE__ */ n.jsx(e, { ...c, ref: r, children: a });
  });
  return o.displayName = `${t}.Slot`, o;
}
// @__NO_SIDE_EFFECTS__
function X(t) {
  const e = p((o, s) => {
    let { children: r, ...a } = o;
    if ($(r) && typeof w == "function" && (r = w(r._payload)), y(r)) {
      const c = tt(r), l = V(a, r.props);
      return r.type !== G && (l.ref = s ? L(s, c) : c), T(r, l);
    }
    return g.count(r) > 1 ? g.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var J = Symbol("radix.slottable");
function Q(t) {
  return y(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === J;
}
function V(t, e) {
  const o = { ...e };
  for (const s in e) {
    const r = t[s], a = e[s];
    /^on[A-Z]/.test(s) ? r && a ? o[s] = (...l) => {
      const f = a(...l);
      return r(...l), f;
    } : r && (o[s] = r) : s === "style" ? o[s] = { ...r, ...a } : s === "className" && (o[s] = [r, a].filter(Boolean).join(" "));
  }
  return { ...t, ...o };
}
function tt(t) {
  var s, r;
  let e = (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : s.get, o = e && "isReactWarning" in e && e.isReactWarning;
  return o ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, o = e && "isReactWarning" in e && e.isReactWarning, o ? t.props.ref : t.props.ref || t.ref);
}
var et = [
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
], ot = et.reduce((t, e) => {
  const o = /* @__PURE__ */ K(`Primitive.${e}`), s = p((r, a) => {
    const { asChild: c, ...l } = r, f = c ? o : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n.jsx(f, { ...l, ref: a });
  });
  return s.displayName = `Primitive.${e}`, { ...t, [e]: s };
}, {}), st = "Separator", b = "horizontal", rt = ["horizontal", "vertical"], k = p((t, e) => {
  const { decorative: o, orientation: s = b, ...r } = t, a = at(s) ? s : b, l = o ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ n.jsx(
    ot.div,
    {
      "data-orientation": a,
      ...l,
      ...r,
      ref: e
    }
  );
});
k.displayName = st;
function at(t) {
  return rt.includes(t);
}
var C = k;
const nt = {
  Reddit: "reddit.com",
  "www.reddit.com": "reddit.com",
  Facebook: "facebook.com",
  Twitter: "twitter.com",
  Bluesky: "bsky.app",
  "go.bsky.app": "bsky.app",
  Instagram: "instagram.com",
  LinkedIn: "linkedin.com",
  Threads: "threads.net",
  "Brave Search": "search.brave.com",
  Ecosia: "ecosia.org",
  Gmail: "gmail.com",
  Outlook: "outlook.com",
  "Yahoo!": "yahoo.com",
  "AOL Mail": "aol.com",
  Flipboard: "flipboard.com",
  Substack: "substack.com",
  Ghost: "ghost.org",
  "Ghost Explore": "ghost.org",
  Buffer: "buffer.com",
  Taboola: "taboola.com",
  AppNexus: "appnexus.com",
  Wikipedia: "wikipedia.org",
  Mastodon: "mastodon.social",
  Memeorandum: "memeorandum.com",
  "Ground News": "ground.news",
  "Apple News": "apple.com",
  SmartNews: "smartnews.com",
  "Hacker News": "news.ycombinator.com",
  // Search engines
  Google: "google.com",
  "Google News": "news.google.com",
  Bing: "bing.com",
  DuckDuckGo: "duckduckgo.com",
  // Email/Newsletter
  "newsletter-email": "static.ghost.org",
  newsletter: "static.ghost.org"
}, x = (t) => {
  try {
    return new URL(t.startsWith("http") ? t : `https://${t}`).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};
function wt({
  processedData: t,
  totalVisitors: e,
  mode: o
}) {
  return t.map((s) => ({
    ...s,
    percentage: e > 0 ? s.visits / e : 0
  }));
}
const D = (t, e) => t === e ? !0 : t.endsWith(`.${e}`), it = (t, e) => {
  if (!t || typeof t != "string")
    return { domain: null, isDirectTraffic: !1 };
  if (t === "Direct")
    return { domain: null, isDirectTraffic: !0 };
  const o = e ? x(e) : null;
  if (o) {
    const a = x(t);
    if (a && D(a, o))
      return { domain: o, isDirectTraffic: !0 };
    if (D(t, o))
      return { domain: o, isDirectTraffic: !0 };
  }
  const s = nt[t];
  return s ? { domain: s, isDirectTraffic: !1 } : /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) ? { domain: t.replace(/^www\./, ""), isDirectTraffic: !1 } : { domain: null, isDirectTraffic: !1 };
};
function vt({
  data: t,
  mode: e,
  siteUrl: o,
  siteIcon: s,
  defaultSourceIconUrl: r
}) {
  if (!t)
    return [];
  const a = /* @__PURE__ */ new Map();
  let c = 0;
  if (t.forEach((i) => {
    const { domain: u, isDirectTraffic: S } = it(i.source, o), v = Number(i.visits || 0);
    if (S || !i.source || i.source === "")
      c += v;
    else {
      const h = String(i.source), _ = u ? `https://www.faviconextractor.com/favicon/${u}?larger=true` : r, R = u ? `https://${u}` : void 0;
      if (a.has(h)) {
        const N = a.get(h);
        N.visits += v;
      } else {
        const N = {
          source: h,
          visits: v,
          isDirectTraffic: !1,
          iconSrc: _,
          displayName: h,
          linkUrl: R
        };
        a.set(h, N);
      }
    }
  }), c > 0) {
    const i = {
      source: "Direct",
      visits: c,
      isDirectTraffic: !0,
      iconSrc: s || r,
      displayName: "Direct",
      linkUrl: void 0
    };
    a.set("Direct", i);
  }
  return Array.from(a.values()).sort((i, u) => u.visits - i.visits);
}
const ct = p(
  ({ className: t, orientation: e = "horizontal", decorative: o = !0, ...s }, r) => /* @__PURE__ */ n.jsx(
    C,
    {
      ref: r,
      className: m(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      decorative: o,
      orientation: e,
      ...s
    }
  )
);
ct.displayName = C.displayName;
const Nt = H, bt = Y, lt = Z, j = p(({ className: t, ...e }, o) => /* @__PURE__ */ n.jsx(
  P,
  {
    className: m(
      "fixed inset-0 z-50 bg-black/10  data-[state=open]:animate-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: o
  }
));
j.displayName = P.displayName;
const dt = I(
  "fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), pt = p(({ side: t = "right", className: e, children: o, ...s }, r) => /* @__PURE__ */ n.jsx(lt, { children: /* @__PURE__ */ n.jsxs("div", { className: W, children: [
  /* @__PURE__ */ n.jsx(j, {}),
  /* @__PURE__ */ n.jsxs(
    A,
    {
      ref: r,
      className: m(dt({ side: t }), e),
      ...s,
      children: [
        /* @__PURE__ */ n.jsxs(B, { className: "fixed right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ n.jsx(M, { className: "size-4" }),
          /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        o
      ]
    }
  )
] }) }));
pt.displayName = A.displayName;
const ft = ({
  className: t,
  ...e
}) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: m(
      "flex flex-col space-y-1 text-center sm:text-left",
      t
    ),
    ...e
  }
);
ft.displayName = "SheetHeader";
const ut = p(({ className: t, ...e }, o) => /* @__PURE__ */ n.jsx(
  E,
  {
    ref: o,
    className: m("text-xl font-semibold text-foreground", t),
    ...e
  }
));
ut.displayName = E.displayName;
const mt = p(({ className: t, ...e }, o) => /* @__PURE__ */ n.jsx(
  O,
  {
    ref: o,
    className: m("text-sm text-muted-foreground", t),
    ...e
  }
));
mt.displayName = O.displayName;
const xt = ({ defaultSourceIconUrl: t, displayName: e, iconSrc: o }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: e.trim().toLowerCase().endsWith("newsletter") ? /* @__PURE__ */ n.jsx(F, { "aria-label": "Newsletter", className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ n.jsx(
  "img",
  {
    alt: "",
    className: "size-4",
    src: o,
    onError: (s) => {
      s.currentTarget.src = t;
    }
  }
) }), d = {
  POSTS: "posts",
  PAGES: "pages",
  POSTS_AND_PAGES: "posts_and_pages",
  SOURCES: "sources"
}, Dt = (t) => {
  switch (t) {
    case d.POSTS:
      return "Top posts";
    case d.PAGES:
      return "Top pages";
    case d.SOURCES:
      return "Top sources";
    default:
      return "Top content";
  }
}, Tt = (t, e, o) => {
  switch (t) {
    case d.POSTS:
      return `Your highest viewed posts ${o(e)}`;
    case d.PAGES:
      return `Your highest viewed pages ${o(e)}`;
    case d.POSTS_AND_PAGES:
      return `Your highest viewed posts or pages ${o(e)}`;
    case d.SOURCES:
      return `How readers found your site ${o(e)}`;
    default:
      return `Your highest viewed posts or pages ${o(e)}`;
  }
}, At = (t, e, o) => {
  switch (t) {
    case d.POSTS:
      return `Which posts drove the most growth ${o(e)}`;
    case d.PAGES:
      return `Which pages drove the most growth ${o(e)}`;
    case d.POSTS_AND_PAGES:
      return `Which posts or pages drove the most growth ${o(e)}`;
    case d.SOURCES:
      return `Which sources drove the most growth ${o(e)}`;
    default:
      return `Which posts drove the most growth ${o(e)}`;
  }
};
function ht(t, e) {
  if (!t || !e)
    return "";
  try {
    const o = new URL(e), s = o.pathname.endsWith("/") ? o.pathname : `${o.pathname}/`, r = t.replace(/^\//, ""), a = `${s}${r}`;
    return `${o.origin}${a}`;
  } catch {
    return "";
  }
}
function Et(t, e, o, s, r) {
  return () => {
    if (e && t && r === "post") {
      s(`/posts/analytics/${e}`, { crossApp: !0 });
      return;
    }
    if (t && o) {
      const a = ht(t, o);
      a && window.open(a, "_blank", "noopener,noreferrer");
    }
  };
}
export {
  d as C,
  ct as S,
  Nt as a,
  bt as b,
  pt as c,
  ft as d,
  wt as e,
  ut as f,
  mt as g,
  xt as h,
  Dt as i,
  Tt as j,
  Et as k,
  it as l,
  At as m,
  vt as p
};
//# sourceMappingURL=url-helpers-DrGoeEH1.mjs.map
