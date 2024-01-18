import {
    r,
    d as w,
    p as _,
    ad as f,
    X as y,
    c as k,
    _ as v,
    e as g,
    g as a,
    i as e,
    h as s,
    t as m,
    D as c,
    k as C,
    F as P,
    C as T,
    f as n
} from "./120aa8f8.js";

function Y() {
    const t = r(),
        p = r(0),
        h = l => {
            let u = 0;
            for (; l;) u += l.offsetTop, l = l.offsetParent;
            return u
        };
    return {
        jumpToEle: l => {
            t.value = document.getElementById(l), t.value && (p.value = t.value && t.value instanceof HTMLElement ? h(t.value) - 30 - 81 : 0), window.scrollTo({
                top: p.value,
                behavior: "smooth"
            })
        }
    }
}
const S = w({
        name: "ObPostStats",
        components: {
            SvgIcon: _
        },
        props: {
            postWordCount: {
                type: Number || void 0
            },
            postTimeCount: {
                type: String || void 0
            },
            postTitle: {
                type: String
            },
            pluginConfigs: {
                type: Object,
                default: () => new f().plugins,
                required: !0
            },
            currentPath: {
                type: String,
                default: "/",
                required: !0
            },
            comments: Boolean
        },
        setup(t, {
            expose: p
        }) {
            const h = r(void 0),
                {
                    enabledCommentPlugin: d,
                    initCommentPluginCommentCount: l,
                    intiCommentPluginPageView: u
                } = y();
            return p({
                getCommentCount: async () => {
                    h.value = await l(t.currentPath)
                },
                getPostView: () => {
                    u(t.currentPath)
                }
            }), {
                commentCount: h,
                plugin: k(() => d.value.plugin)
            }
        }
    }),
    b = {
        key: 0,
        class: "post-stats"
    },
    V = {
        class: "pl-2 opacity-70"
    },
    B = {
        class: "pl-2 opacity-70"
    },
    q = {
        key: 0
    },
    N = {
        class: "pl-2 opacity-70"
    },
    I = {
        class: "waline-pageview-count"
    },
    O = {
        key: 1
    },
    $ = {
        class: "pl-2 opacity-70"
    },
    j = ["data-path"],
    E = {
        key: 2
    },
    W = {
        class: "pl-2 opacity-70",
        id: "twikoo_visitors"
    },
    x = {
        key: 3
    },
    D = {
        class: "pl-2 opacity-70"
    },
    F = {
        key: 4
    },
    H = {
        class: "pl-2 opacity-70"
    },
    J = ["id", "data-flag-title"],
    L = {
        class: "leancloud-visitors-count"
    },
    M = {
        key: 1,
        class: "post-stats"
    },
    X = {
        class: "pl-2"
    },
    z = {
        class: "pl-2"
    },
    A = {
        key: 0
    },
    G = {
        class: "pl-2"
    },
    K = {
        key: 1
    },
    Q = {
        class: "pl-2"
    };

function R(t, p, h, d, l, u) {
    const o = g("SvgIcon"),
        i = g("ob-skeleton");
    return t.postTimeCount !== void 0 && t.postWordCount !== void 0 ? (n(), a("div", b, [e("span", null, [s(o, {
        class: "opacity-70",
        "icon-class": "clock",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", V, m(t.postTimeCount), 1)]), e("span", null, [s(o, {
        class: "opacity-70",
        "icon-class": "text",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", B, m(t.postWordCount), 1)]), t.plugin === "waline" ? (n(), a("span", q, [s(o, {
        class: "opacity-70",
        "icon-class": "hot",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", N, [e("span", I, [s(i, {
        width: "40px",
        height: "16px"
    })])])])) : c("", !0), t.comments && t.plugin === "waline" ? (n(), a("span", O, [s(o, {
        class: "opacity-70",
        "icon-class": "quote",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", $, [e("span", {
        class: "waline-comment-count",
        "data-path": t.currentPath
    }, [s(i, {
        width: "40px",
        height: "16px"
    })], 8, j)])])) : c("", !0), t.plugin === "twikoo" ? (n(), a("span", E, [s(o, {
        class: "opacity-70",
        "icon-class": "hot",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", W, [s(i, {
        width: "40px",
        height: "16px"
    })])])) : c("", !0), t.comments && t.plugin === "twikoo" ? (n(), a("span", x, [s(o, {
        class: "opacity-70",
        "icon-class": "quote",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", D, [t.commentCount === void 0 ? (n(), C(i, {
        key: 0,
        width: "40px",
        height: "16px"
    })) : (n(), a(P, {
        key: 1
    }, [T(m(t.commentCount), 1)], 64))])])) : c("", !0), t.plugin === "valine" ? (n(), a("span", F, [s(o, {
        class: "opacity-70",
        "icon-class": "hot",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", H, [e("span", {
        id: t.currentPath,
        class: "leancloud_visitors",
        "data-flag-title": t.postTitle
    }, [e("i", L, [s(i, {
        width: "40px",
        height: "16px"
    })])], 8, J)])])) : c("", !0)])) : (n(), a("div", M, [e("span", null, [s(o, {
        class: "opacity-70",
        "icon-class": "clock",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", X, [s(i, {
        width: "40px",
        height: "16px"
    })])]), e("span", null, [s(o, {
        class: "opacity-70",
        "icon-class": "text",
        fill: "white",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", z, [s(i, {
        width: "40px",
        height: "16px"
    })])]), t.plugin === "waline" || t.plugin === "twikoo" || t.plugin === "valine" ? (n(), a("span", A, [s(o, {
        class: "opacity-70",
        "icon-class": "hot",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", G, [s(i, {
        width: "40px",
        height: "16px"
    })])])) : c("", !0), t.comments && (t.plugin === "waline" || t.plugin === "twikoo") ? (n(), a("span", K, [s(o, {
        class: "opacity-70",
        "icon-class": "quote",
        fill: "none",
        stroke: "white",
        height: "1.25em",
        width: "1.25em"
    }), e("span", Q, [s(i, {
        width: "40px",
        height: "16px"
    })])])) : c("", !0)]))
}
const Z = v(S, [
    ["render", R]
]);
export {
    Z as P, Y as u
};