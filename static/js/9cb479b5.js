import {
    d as P,
    S as I,
    u as D,
    a as E,
    r as y,
    b as L,
    o as N,
    c as v,
    _ as q,
    e as g,
    f as r,
    g as c,
    h as s,
    i as t,
    F as x,
    j as B,
    n as V,
    t as T,
    k as F,
    l as H,
    m as M,
    T as R,
    P as j,
    A as K,
    p as G,
    q as O,
    s as U,
    v as J,
    w as Q,
    x as W,
    y as X,
    z as Y,
    B as Z,
    C as k,
    D as w,
    E as $,
    G as ee,
    H as te,
    I as ae
} from "./120aa8f8.js";
import "https://unpkg.com/@waline/client@v2/dist/waline.mjs";
const oe = P({
        name: "ObArticleBox",
        components: {
            SubTitle: I
        },
        props: {
            sidebarBox: {
                type: Boolean,
                default: !0
            },
            activeCategory: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const h = D(),
                u = E(),
                f = y(!0),
                _ = L(),
                n = async () => {
                    await u.fetchCategories(), f.value = !1
                }, a = o => {
                    _.push({
                        name: "post-search",
                        query: {
                            category: o
                        }
                    })
                };
            return N(n), {
                loading: f,
                navigateToCategory: a,
                sidebarBoxClasses: v(() => ({
                    "sidebar-box": e.sidebarBox
                })),
                categories: v(() => u.categories),
                gradientBackground: o => o ? {
                    background: h.themeConfig.theme.header_gradient_css,
                    color: "#fff",
                    opacity: 1
                } : {}
            }
        }
    }),
    se = {
        class: "flex justify-event flex-wrap gap-2 pt-2 cursor-pointer"
    },
    ne = ["onClick"],
    re = {
        class: "bg-ob-deep-900 text-ob text-center px-2 py-1 rounded-tr-md rounded-br-md text-sm opacity-70"
    };

function le(e, h, u, f, _, n) {
    const a = g("SubTitle"),
        o = g("ob-skeleton");
    return r(), c("div", {
        class: H(e.sidebarBoxClasses)
    }, [s(a, {
        title: "titles.category_list",
        icon: "category"
    }, null, 8, ["title"]), t("ul", se, [e.categories.length > 0 ? (r(!0), c(x, {
        key: 0
    }, B(e.categories, l => (r(), c("li", {
        class: "flex flex-row items-center hover:opacity-50",
        key: l.slug,
        onClick: b => e.navigateToCategory(l.slug)
    }, [t("span", {
        class: "bg-ob-deep-900 text-center px-3 py-1 rounded-tl-md rounded-bl-md text-sm",
        style: V(e.gradientBackground(l.slug === e.activeCategory))
    }, T(l.name), 5), t("b", re, T(l.count), 1)], 8, ne))), 128)) : (r(), F(o, {
        key: 1,
        tag: "li",
        count: 10,
        height: "20px",
        width: "3rem"
    }))])], 2)
}
const ie = q(oe, [
        ["render", le]
    ]),
    ce = P({
        name: "ArResult",
        components: {
            Sidebar: M,
            TagBox: R,
            Paginator: j,
            ArticleCard: K,
            CategoryBox: ie,
            SvgIcon: G
        },
        setup() {
            const {
                t: e
            } = O(), h = U(), u = J(), f = Q(), _ = y("search"), n = y(!1), a = y(new W), o = y({
                pageSize: 12,
                pageTotal: 0,
                page: 1
            }), l = "aurora-query-tag", b = "aurora-query-category", d = y(), p = y(), m = () => {
                d.value ? z() : p.value && A(), window.scrollTo({
                    top: 0
                }), f.setTitle("search")
            }, z = () => {
                n.value = !1, u.fetchPostsByTag(d.value).then(i => {
                    n.value = !0, a.value = i, o.value.pageTotal = i.total
                })
            }, A = () => {
                n.value = !1, u.fetchPostsByCategory(p.value).then(i => {
                    n.value = !0, a.value = i, o.value.pageTotal = i.total
                })
            }, C = () => {
                p.value = "", d.value = "";
                const {
                    tag: i,
                    category: S
                } = h.query;
                S ? p.value = S : i && (d.value = i), (i || S) && m()
            };
            return X(() => h.query, () => {
                C()
            }), Y(() => {
                C()
            }), Z(() => {
                localStorage.removeItem(l), localStorage.removeItem(b)
            }), {
                isLoading: v(() => !n.value),
                isEmpty: v(() => a.value.data.length === 0 && n.value),
                categoryTitle: v(() => p.value),
                tagTitle: v(() => d.value),
                posts: a,
                pageType: _,
                pagination: o,
                pageChangeHandler: C,
                t: e
            }
        }
    }),
    ge = {
        class: "flex flex-col mt-10"
    },
    ue = {
        class: "post-header"
    },
    de = {
        class: "flex flex-row gap-8"
    },
    pe = {
        key: 0,
        class: "post-title text-white uppercase"
    },
    ye = {
        class: "opacity-60"
    },
    he = {
        key: 1,
        class: "post-title text-white uppercase"
    },
    fe = {
        class: "opacity-60"
    },
    me = {
        class: "main-grid"
    },
    ve = {
        class: "relative"
    },
    _e = {
        class: "post-html flex flex-col items-center"
    },
    Te = {
        class: "flex flex-col relative"
    },
    be = {
        class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    },
    Ce = {
        class: "sidebar-box flex flex-col gap-8"
    };

function Se(e, h, u, f, _, n) {
    const a = g("SvgIcon"),
        o = g("ArticleCard"),
        l = g("Paginator"),
        b = g("CategoryBox"),
        d = g("TagBox"),
        p = g("Sidebar");
    return r(), c("div", ge, [t("div", ue, [t("div", de, [e.categoryTitle ? (r(), c("h1", pe, [t("span", ye, [s(a, {
        "icon-class": "category",
        stroke: "white"
    })]), k(" " + T(e.categoryTitle), 1)])) : w("", !0), e.tagTitle ? (r(), c("h1", he, [t("span", fe, [s(a, {
        "icon-class": "tag",
        stroke: "white"
    })]), k(" " + T(e.tagTitle), 1)])) : w("", !0)])]), t("div", me, [t("div", ve, [s(ee, {
        name: "fade-slide-y",
        mode: "out-in"
    }, {
        default: $(() => [te(t("div", _e, [t("h1", null, T(e.t("settings.no-search-result")), 1), s(a, {
            "icon-class": "empty-search",
            style: {
                "font-size": "35rem"
            }
        })], 512), [
            [ae, e.isEmpty]
        ])]),
        _: 1
    }), t("div", Te, [t("ul", be, [e.isLoading || e.posts.data.length === 0 ? (r(), c(x, {
        key: 0
    }, B(12, m => t("li", {
        key: m
    }, [s(o, {
        data: {}
    })])), 64)) : (r(!0), c(x, {
        key: 1
    }, B(e.posts.data, m => (r(), c("li", {
        key: m.slug
    }, [s(o, {
        data: m
    }, null, 8, ["data"])]))), 128))]), s(l, {
        pageSize: e.pagination.pageSize,
        pageTotal: e.pagination.pageTotal,
        page: e.pagination.page,
        onPageChange: e.pageChangeHandler
    }, null, 8, ["pageSize", "pageTotal", "page", "onPageChange"])])]), t("div", null, [s(p, null, {
        default: $(() => [t("div", Ce, [s(b, {
            "sidebar-box": !1,
            "active-category": e.categoryTitle
        }, null, 8, ["active-category"]), s(d, {
            "sidebar-box": !1,
            "active-tag": e.tagTitle
        }, null, 8, ["active-tag"])])]),
        _: 1
    })])])])
}
const ke = q(ce, [
    ["render", Se]
]);
export {
    ke as
    default
};