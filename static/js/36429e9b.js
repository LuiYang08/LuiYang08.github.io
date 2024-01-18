import {
    d as c,
    m as n,
    N as i,
    _ as d,
    e as t,
    g as l,
    i as e,
    h as o,
    t as p,
    f as _
} from "./120aa8f8.js";
import "https://unpkg.com/@waline/client@v2/dist/waline.mjs";
import {
    B as m
} from "./fffbee97.js";
const u = c({
        name: "ArCategory",
        components: {
            Sidebar: n,
            Breadcrumbs: m
        },
        setup() {
            const {
                pageTitle: s
            } = i();
            return {
                pageTitle: s
            }
        }
    }),
    h = {
        class: "flex flex-col mt-20"
    },
    f = {
        class: "post-header"
    },
    g = {
        class: "post-title text-white uppercase"
    },
    b = {
        class: "main-grid"
    },
    v = e("div", {
        class: "relative"
    }, [e("div", {
        class: "post-html bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"
    })], -1),
    x = {
        class: "col-span-1"
    };

function B(s, y, S, T, $, k) {
    const a = t("Breadcrumbs"),
        r = t("Sidebar");
    return _(), l("div", h, [e("div", f, [o(a, {
        current: s.pageTitle
    }, null, 8, ["current"]), e("h1", g, p(s.pageTitle), 1)]), e("div", b, [v, e("div", x, [o(r)])])])
}
const V = d(u, [
    ["render", B]
]);
export {
    V as
    default
};