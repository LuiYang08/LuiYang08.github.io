import {
    d as k,
    P as B,
    L as C,
    v as S,
    q as w,
    r as y,
    Z as P,
    N as b,
    z as I,
    B as $,
    O as x,
    _ as A,
    e as m,
    g as i,
    h as u,
    i as t,
    t as s,
    F as _,
    j as T,
    f as l,
    E as H,
    $ as N,
    a0 as z
} from "./120aa8f8.js";
import {
    B as D
} from "./fffbee97.js";
import "https://unpkg.com/@waline/client@v2/dist/waline.mjs";
const E = k({
    name: "ArArchives",
    components: {
        Breadcrumbs: D,
        Paginator: B
    },
    setup() {
        const e = C(),
            g = S(),
            {
                t: v
            } = w(),
            c = y(new P().data),
            n = y({
                pageTotal: 0,
                page: 1
            }),
            {
                pageTitle: f,
                updateTitle: d
            } = b(),
            r = async () => {
                const a = await g.fetchArchives(n.value.page);
                n.value.pageTotal = a.total, c.value = a.data, e.setHeaderImage(x), d()
            }, p = a => {
                n.value.page = a, window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }), r()
            };
        return I(r), $(() => {
            e.resetHeaderImage()
        }), {
            pageTitle: f,
            pageChangeHandler: p,
            pagination: n,
            archives: c,
            t: v
        }
    }
});
const h = e => (N("data-v-43e81927"), e = e(), z(), e),
    F = {
        class: "flex flex-col mt-20"
    },
    L = {
        class: "post-header"
    },
    V = {
        class: "post-title text-white uppercase"
    },
    j = {
        class: "bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"
    },
    q = {
        class: "timeline timeline-centered"
    },
    M = {
        class: "timeline-item period"
    },
    O = h(() => t("div", {
        class: "timeline-info"
    }, null, -1)),
    U = h(() => t("div", {
        class: "timeline-marker"
    }, null, -1)),
    Z = {
        class: "timeline-content"
    },
    G = {
        class: "timeline-title"
    },
    J = {
        class: "timeline-info"
    },
    K = h(() => t("div", {
        class: "timeline-marker"
    }, null, -1)),
    Q = {
        class: "timeline-content"
    },
    R = {
        class: "timeline-title"
    };

function W(e, g, v, c, n, f) {
    const d = m("Breadcrumbs"),
        r = m("router-link"),
        p = m("Paginator");
    return l(), i("div", F, [u(d, {
        current: e.pageTitle
    }, null, 8, ["current"]), t("div", L, [t("h1", V, s(e.pageTitle), 1)]), t("div", j, [t("ul", q, [(l(!0), i(_, null, T(e.archives, a => (l(), i(_, {
        key: `${a.month}-${a.year}}`
    }, [t("li", M, [O, U, t("div", Z, [t("h2", G, s(e.t(a.month)) + " " + s(a.year), 1)])]), (l(!0), i(_, null, T(a.posts, o => (l(), i("li", {
        class: "timeline-item",
        key: o.slug
    }, [t("div", J, [t("span", null, s(e.t(o.date.month)) + " " + s(o.date.day) + ", " + s(o.date.year), 1)]), K, t("div", Q, [u(r, {
        to: {
            name: "post-slug",
            params: {
                slug: o.slug
            }
        }
    }, {
        default: H(() => [t("h3", R, s(o.title), 1)]),
        _: 2
    }, 1032, ["to"]), t("p", null, s(o.text), 1)])]))), 128))], 64))), 128))]), u(p, {
        pageSize: 12,
        pageTotal: e.pagination.pageTotal,
        page: e.pagination.page,
        onPageChange: e.pageChangeHandler
    }, null, 8, ["pageTotal", "page", "onPageChange"])])])
}
const te = A(E, [
    ["render", W],
    ["__scopeId", "data-v-43e81927"]
]);
export {
    te as
    default
};