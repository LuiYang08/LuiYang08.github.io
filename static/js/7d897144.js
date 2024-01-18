import {
    B as k
} from "./fffbee97.js";
import {
    d as b,
    J as B,
    K as v,
    p as y,
    L as I,
    q as S,
    M as w,
    N as x,
    z as C,
    B as L,
    c as N,
    O as $,
    _ as D,
    e as s,
    g as n,
    h as r,
    i as c,
    t as u,
    E as V,
    f as o,
    F as j,
    j as z,
    k as m,
    C as A
} from "./120aa8f8.js";
import "https://unpkg.com/@waline/client@v2/dist/waline.mjs";
const E = b({
        name: "ArTag",
        components: {
            Breadcrumbs: k,
            TagList: B,
            TagItem: v,
            SvgIcon: y
        },
        setup() {
            const e = I(),
                {
                    t: l
                } = S(),
                t = w(),
                {
                    pageTitle: i,
                    updateTitle: g
                } = x();
            return C(async () => {
                await t.fetchAllTags(), g(), e.setHeaderImage($)
            }), L(() => {
                e.resetHeaderImage()
            }), {
                pageTitle: i,
                tags: N(() => t.isLoaded && t.tags.length === 0 ? null : t.tags),
                t: l
            }
        }
    }),
    F = {
        class: "flex flex-col mt-20"
    },
    H = {
        class: "post-header"
    },
    M = {
        class: "post-title text-white uppercase"
    },
    q = {
        class: "bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block"
    },
    J = {
        key: 2,
        class: "flex flex-row justify-center items-center"
    };

function K(e, l, t, i, g, d) {
    const p = s("Breadcrumbs"),
        _ = s("TagItem"),
        f = s("ob-skeleton"),
        h = s("SvgIcon"),
        T = s("TagList");
    return o(), n("div", F, [r(p, {
        current: e.pageTitle
    }, null, 8, ["current"]), c("div", H, [c("h1", M, u(e.pageTitle), 1)]), c("div", q, [r(T, null, {
        default: V(() => [e.tags && e.tags.length > 0 ? (o(!0), n(j, {
            key: 0
        }, z(e.tags, a => (o(), m(_, {
            key: a.slug,
            name: a.name,
            slug: a.slug,
            count: a.count,
            size: "large"
        }, null, 8, ["name", "slug", "count"]))), 128)) : e.tags ? (o(), m(f, {
            key: 1,
            tag: "li",
            count: 10,
            height: "20px",
            width: "3rem"
        })) : (o(), n("div", J, [r(h, {
            class: "stroke-ob-bright mr-2",
            "icon-class": "warning"
        }), A(" " + u(e.t("settings.empty-tag")), 1)]))]),
        _: 1
    })])])
}
const G = D(E, [
    ["render", K]
]);
export {
    G as
    default
};