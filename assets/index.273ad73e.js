(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        l(r);
    new MutationObserver(r=>{
        for (const s of r)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && l(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity),
        r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
        r.crossorigin === "use-credentials" ? s.credentials = "include" : r.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function l(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const s = n(r);
        fetch(r.href, s)
    }
}
)();
function _() {}
function Y(e, t) {
    for (const n in t)
        e[n] = t[n];
    return e
}
function U(e) {
    return e()
}
function J() {
    return Object.create(null)
}
function q(e) {
    e.forEach(U)
}
function V(e) {
    return typeof e == "function"
}
function E(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let C;
function K(e, t) {
    return C || (C = document.createElement("a")),
    C.href = t,
    e === C.href
}
function tt(e) {
    return Object.keys(e).length === 0
}
function et(e, t, n, l) {
    if (e) {
        const r = W(e, t, n, l);
        return e[0](r)
    }
}
function W(e, t, n, l) {
    return e[1] && l ? Y(n.ctx.slice(), e[1](l(t))) : n.ctx
}
function nt(e, t, n, l) {
    if (e[2] && l) {
        const r = e[2](l(n));
        if (t.dirty === void 0)
            return r;
        if (typeof r == "object") {
            const s = []
              , i = Math.max(t.dirty.length, r.length);
            for (let c = 0; c < i; c += 1)
                s[c] = t.dirty[c] | r[c];
            return s
        }
        return t.dirty | r
    }
    return t.dirty
}
function rt(e, t, n, l, r, s) {
    if (r) {
        const i = W(t, n, l, s);
        e.p(i, r)
    }
}
function lt(e) {
    if (e.ctx.length > 32) {
        const t = []
          , n = e.ctx.length / 32;
        for (let l = 0; l < n; l++)
            t[l] = -1;
        return t
    }
    return -1
}
function h(e, t) {
    e.appendChild(t)
}
function g(e, t, n) {
    e.insertBefore(t, n || null)
}
function m(e) {
    e.parentNode && e.parentNode.removeChild(e)
}
function st(e, t) {
    for (let n = 0; n < e.length; n += 1)
        e[n] && e[n].d(t)
}
function d(e) {
    return document.createElement(e)
}
function P(e) {
    return document.createTextNode(e)
}
function T() {
    return P(" ")
}
function o(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function it(e) {
    return Array.from(e.childNodes)
}
function R(e, t) {
    t = "" + t,
    e.wholeText !== t && (e.data = t)
}
let F;
function $(e) {
    F = e
}
const v = []
  , Z = []
  , O = []
  , z = []
  , ct = Promise.resolve();
let B = !1;
function ut() {
    B || (B = !0,
    ct.then(X))
}
function D(e) {
    O.push(e)
}
const M = new Set;
let N = 0;
function X() {
    const e = F;
    do {
        for (; N < v.length; ) {
            const t = v[N];
            N++,
            $(t),
            ft(t.$$)
        }
        for ($(null),
        v.length = 0,
        N = 0; Z.length; )
            Z.pop()();
        for (let t = 0; t < O.length; t += 1) {
            const n = O[t];
            M.has(n) || (M.add(n),
            n())
        }
        O.length = 0
    } while (v.length);
    for (; z.length; )
        z.pop()();
    B = !1,
    M.clear(),
    $(e)
}
function ft(e) {
    if (e.fragment !== null) {
        e.update(),
        q(e.before_update);
        const t = e.dirty;
        e.dirty = [-1],
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(D)
    }
}
const S = new Set;
let ot;
function p(e, t) {
    e && e.i && (S.delete(e),
    e.i(t))
}
function x(e, t, n, l) {
    if (e && e.o) {
        if (S.has(e))
            return;
        S.add(e),
        ot.c.push(()=>{
            S.delete(e),
            l && (n && e.d(1),
            l())
        }
        ),
        e.o(t)
    } else
        l && l()
}
function L(e) {
    e && e.c()
}
function k(e, t, n, l) {
    const {fragment: r, after_update: s} = e.$$;
    r && r.m(t, n),
    l || D(()=>{
        const i = e.$$.on_mount.map(U).filter(V);
        e.$$.on_destroy ? e.$$.on_destroy.push(...i) : q(i),
        e.$$.on_mount = []
    }
    ),
    s.forEach(D)
}
function w(e, t) {
    const n = e.$$;
    n.fragment !== null && (q(n.on_destroy),
    n.fragment && n.fragment.d(t),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function at(e, t) {
    e.$$.dirty[0] === -1 && (v.push(e),
    ut(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function A(e, t, n, l, r, s, i, c=[-1]) {
    const u = F;
    $(e);
    const f = e.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: _,
        not_equal: r,
        bound: J(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (u ? u.$$.context : [])),
        callbacks: J(),
        dirty: c,
        skip_bound: !1,
        root: t.target || u.$$.root
    };
    i && i(f.root);
    let y = !1;
    if (f.ctx = n ? n(e, t.props || {}, (a,b,...H)=>{
        const I = H.length ? H[0] : b;
        return f.ctx && r(f.ctx[a], f.ctx[a] = I) && (!f.skip_bound && f.bound[a] && f.bound[a](I),
        y && at(e, a)),
        b
    }
    ) : [],
    f.update(),
    y = !0,
    q(f.before_update),
    f.fragment = l ? l(f.ctx) : !1,
    t.target) {
        if (t.hydrate) {
            const a = it(t.target);
            f.fragment && f.fragment.l(a),
            a.forEach(m)
        } else
            f.fragment && f.fragment.c();
        t.intro && p(e.$$.fragment),
        k(e, t.target, t.anchor, t.customElement),
        X()
    }
    $(u)
}
class j {
    $destroy() {
        w(this, 1),
        this.$destroy = _
    }
    $on(t, n) {
        if (!V(n))
            return _;
        const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return l.push(n),
        ()=>{
            const r = l.indexOf(n);
            r !== -1 && l.splice(r, 1)
        }
    }
    $set(t) {
        this.$$set && !tt(t) && (this.$$.skip_bound = !0,
        this.$$set(t),
        this.$$.skip_bound = !1)
    }
}
function dt(e) {
    let t, n;
    const l = e[1].default
      , r = et(l, e, e[0], null);
    return {
        c() {
            t = d("main"),
            r && r.c(),
            o(t, "class", "svelte-535tj2")
        },
        m(s, i) {
            g(s, t, i),
            r && r.m(t, null),
            n = !0
        },
        p(s, [i]) {
            r && r.p && (!n || i & 1) && rt(r, l, s, s[0], n ? nt(l, s[0], i, null) : lt(s[0]), null)
        },
        i(s) {
            n || (p(r, s),
            n = !0)
        },
        o(s) {
            x(r, s),
            n = !1
        },
        d(s) {
            s && m(t),
            r && r.d(s)
        }
    }
}
function _t(e, t, n) {
    let {$$slots: l={}, $$scope: r} = t;
    return e.$$set = s=>{
        "$$scope"in s && n(0, r = s.$$scope)
    }
    ,
    [r, l]
}
class ht extends j {
    constructor(t) {
        super(),
        A(this, t, _t, dt, E, {})
    }
}
function mt(e) {
    let t, n;
    return {
        c() {
            t = d("img"),
            K(t.src, n = e[0]) || o(t, "src", n),
            o(t, "alt", "avatar"),
            o(t, "class", "svelte-1ywni19")
        },
        m(l, r) {
            g(l, t, r)
        },
        p(l, [r]) {
            r & 1 && !K(t.src, n = l[0]) && o(t, "src", n)
        },
        i: _,
        o: _,
        d(l) {
            l && m(t)
        }
    }
}
function gt(e, t, n) {
    let {src: l} = t;
    return e.$$set = r=>{
        "src"in r && n(0, l = r.src)
    }
    ,
    [l]
}
class pt extends j {
    constructor(t) {
        super(),
        A(this, t, gt, mt, E, {
            src: 0
        })
    }
}
function yt(e) {
    let t, n, l, r, s, i;
    return {
        c() {
            t = d("main"),
            n = d("h1"),
            l = P(e[0]),
            r = T(),
            s = d("p"),
            i = P(e[1]),
            o(n, "class", "svelte-bu2rnl"),
            o(s, "class", "svelte-bu2rnl"),
            o(t, "class", "svelte-bu2rnl")
        },
        m(c, u) {
            g(c, t, u),
            h(t, n),
            h(n, l),
            h(t, r),
            h(t, s),
            h(s, i)
        },
        p(c, [u]) {
            u & 1 && R(l, c[0]),
            u & 2 && R(i, c[1])
        },
        i: _,
        o: _,
        d(c) {
            c && m(t)
        }
    }
}
function bt(e, t, n) {
    let {title: l} = t
      , {subtitle: r} = t;
    return e.$$set = s=>{
        "title"in s && n(0, l = s.title),
        "subtitle"in s && n(1, r = s.subtitle)
    }
    ,
    [l, r]
}
class vt extends j {
    constructor(t) {
        super(),
        A(this, t, bt, yt, E, {
            title: 0,
            subtitle: 1
        })
    }
}
function G(e, t, n) {
    const l = e.slice();
    return l[1] = t[n],
    l
}
function Q(e) {
    let t, n, l, r, s;
    return {
        c() {
            t = d("li"),
            n = d("a"),
            l = d("i"),
            o(l, "class", r = e[1].icon),
            o(n, "href", s = e[1].url),
            o(n, "class", "svelte-5bm8t6"),
            o(t, "class", "svelte-5bm8t6")
        },
        m(i, c) {
            g(i, t, c),
            h(t, n),
            h(n, l)
        },
        p(i, c) {
            c & 1 && r !== (r = i[1].icon) && o(l, "class", r),
            c & 1 && s !== (s = i[1].url) && o(n, "href", s)
        },
        d(i) {
            i && m(t)
        }
    }
}
function $t(e) {
    let t, n = e[0], l = [];
    for (let r = 0; r < n.length; r += 1)
        l[r] = Q(G(e, n, r));
    return {
        c() {
            t = d("ul");
            for (let r = 0; r < l.length; r += 1)
                l[r].c();
            o(t, "class", "svelte-5bm8t6")
        },
        m(r, s) {
            g(r, t, s);
            for (let i = 0; i < l.length; i += 1)
                l[i].m(t, null)
        },
        p(r, [s]) {
            if (s & 1) {
                n = r[0];
                let i;
                for (i = 0; i < n.length; i += 1) {
                    const c = G(r, n, i);
                    l[i] ? l[i].p(c, s) : (l[i] = Q(c),
                    l[i].c(),
                    l[i].m(t, null))
                }
                for (; i < l.length; i += 1)
                    l[i].d(1);
                l.length = n.length
            }
        },
        i: _,
        o: _,
        d(r) {
            r && m(t),
            st(l, r)
        }
    }
}
function xt(e, t, n) {
    let {links: l} = t;
    return e.$$set = r=>{
        "links"in r && n(0, l = r.links)
    }
    ,
    [l]
}
class kt extends j {
    constructor(t) {
        super(),
        A(this, t, xt, $t, E, {
            links: 0
        })
    }
}
function wt(e) {
    let t, n, l, r, s, i, c;
    return t = new pt({
        props: {
            src: e[1]
        }
    }),
    r = new vt({
        props: {
            title: e[0],
            subtitle: e[2]
        }
    }),
    i = new kt({
        props: {
            links: e[3]
        }
    }),
    {
        c() {
            L(t.$$.fragment),
            n = T(),
            l = d("div"),
            L(r.$$.fragment),
            s = T(),
            L(i.$$.fragment),
            o(l, "class", "flex flex-col md:ml-5")
        },
        m(u, f) {
            k(t, u, f),
            g(u, n, f),
            g(u, l, f),
            k(r, l, null),
            h(l, s),
            k(i, l, null),
            c = !0
        },
        p(u, f) {
            const y = {};
            f & 2 && (y.src = u[1]),
            t.$set(y);
            const a = {};
            f & 1 && (a.title = u[0]),
            f & 4 && (a.subtitle = u[2]),
            r.$set(a);
            const b = {};
            f & 8 && (b.links = u[3]),
            i.$set(b)
        },
        i(u) {
            c || (p(t.$$.fragment, u),
            p(r.$$.fragment, u),
            p(i.$$.fragment, u),
            c = !0)
        },
        o(u) {
            x(t.$$.fragment, u),
            x(r.$$.fragment, u),
            x(i.$$.fragment, u),
            c = !1
        },
        d(u) {
            w(t, u),
            u && m(n),
            u && m(l),
            w(r),
            w(i)
        }
    }
}
function Et(e) {
    let t, n;
    return t = new ht({
        props: {
            $$slots: {
                default: [wt]
            },
            $$scope: {
                ctx: e
            }
        }
    }),
    {
        c() {
            L(t.$$.fragment)
        },
        m(l, r) {
            k(t, l, r),
            n = !0
        },
        p(l, [r]) {
            const s = {};
            r & 31 && (s.$$scope = {
                dirty: r,
                ctx: l
            }),
            t.$set(s)
        },
        i(l) {
            n || (p(t.$$.fragment, l),
            n = !0)
        },
        o(l) {
            x(t.$$.fragment, l),
            n = !1
        },
        d(l) {
            w(t, l)
        }
    }
}
function At(e, t, n) {
    let {title: l} = t
      , {avatar: r} = t
      , {subtitle: s} = t
      , {links: i} = t;
    return e.$$set = c=>{
        "title"in c && n(0, l = c.title),
        "avatar"in c && n(1, r = c.avatar),
        "subtitle"in c && n(2, s = c.subtitle),
        "links"in c && n(3, i = c.links)
    }
    ,
    [l, r, s, i]
}
class jt extends j {
    constructor(t) {
        super(),
        A(this, t, At, Et, E, {
            title: 0,
            avatar: 1,
            subtitle: 2,
            links: 3
        })
    }
}
const Ct = "/assets/avatar.1bc09a2c.png";
new jt({
    target: document.getElementById("app"),
    props: {
        avatar: Ct,
        title: "Ryuuten",
        subtitle: "Femboy severim.",
        links: [{
            icon: "fab fa-github",
            url: "https://github.com/RyuutenLoveCode"
        }, {
            icon: "fab fa-discord",
            url: "https://discord.gg/lastshine"
        }, {
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/ryuu.ten/"
        }, {
            icon: "fab fa-spotify",
            url: "https://open.spotify.com/user/31t5gpropmiczifolox4zvawyiju?si=0810feed13a64074"
        }, {
            icon: "fab fa-steam",
            url: "https://steamcommunity.com/id/ILoveYouToothPaste/"
        }, {    
            icon: "fas fa-envelope",
            url: "mailto:semiharda268@gmail.com"
        }]
    }
});
