/* import-map-overrides@6.0.1 */
!function() {
    "use strict";
    function e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function t(e, t, n, r, o, i, a) {
        try {
            var l = e[i](a)
              , u = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    function n(e, t, n) {
        return t = l(t),
        function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }(e, s() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n))
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r)
        }
    }
    function i(e, t, n) {
        return t && o(e.prototype, t),
        n && o(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function a(e, t, n) {
        return (t = h(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function l(e) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        l(e)
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && f(e, t)
    }
    function s() {
        try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            )))
        } catch (e) {}
        return (s = function() {
            return !!e
        }
        )()
    }
    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach((function(t) {
                a(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function p() {
        p = function() {
            return t
        }
        ;
        var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        }
        , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", l = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            s({}, "")
        } catch (e) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }
        function c(e, t, n, r) {
            var i = t && t.prototype instanceof _ ? t : _
              , a = Object.create(i.prototype)
              , l = new U(r || []);
            return o(a, "_invoke", {
                value: N(e, n, l)
            }),
            a
        }
        function d(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = c;
        var f = "suspendedStart"
          , m = "suspendedYield"
          , h = "executing"
          , v = "completed"
          , g = {};
        function _() {}
        function y() {}
        function b() {}
        var w = {};
        s(w, a, (function() {
            return this
        }
        ));
        var x = Object.getPrototypeOf
          , O = x && x(x(C([])));
        O && O !== n && r.call(O, a) && (w = O);
        var k = b.prototype = _.prototype = Object.create(w);
        function M(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function E(e, t) {
            function n(o, i, a, l) {
                var u = d(e[o], e, i);
                if ("throw" !== u.type) {
                    var s = u.arg
                      , c = s.value;
                    return c && "object" == typeof c && r.call(c, "__await") ? t.resolve(c.__await).then((function(e) {
                        n("next", e, a, l)
                    }
                    ), (function(e) {
                        n("throw", e, a, l)
                    }
                    )) : t.resolve(c).then((function(e) {
                        s.value = e,
                        a(s)
                    }
                    ), (function(e) {
                        return n("throw", e, a, l)
                    }
                    ))
                }
                l(u.arg)
            }
            var i;
            o(this, "_invoke", {
                value: function(e, r) {
                    function o() {
                        return new t((function(t, o) {
                            n(e, r, t, o)
                        }
                        ))
                    }
                    return i = i ? i.then(o, o) : o()
                }
            })
        }
        function N(t, n, r) {
            var o = f;
            return function(i, a) {
                if (o === h)
                    throw Error("Generator is already running");
                if (o === v) {
                    if ("throw" === i)
                        throw a;
                    return {
                        value: e,
                        done: !0
                    }
                }
                for (r.method = i,
                r.arg = a; ; ) {
                    var l = r.delegate;
                    if (l) {
                        var u = S(l, r);
                        if (u) {
                            if (u === g)
                                continue;
                            return u
                        }
                    }
                    if ("next" === r.method)
                        r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === f)
                            throw o = v,
                            r.arg;
                        r.dispatchException(r.arg)
                    } else
                        "return" === r.method && r.abrupt("return", r.arg);
                    o = h;
                    var s = d(t, n, r);
                    if ("normal" === s.type) {
                        if (o = r.done ? v : m,
                        s.arg === g)
                            continue;
                        return {
                            value: s.arg,
                            done: r.done
                        }
                    }
                    "throw" === s.type && (o = v,
                    r.method = "throw",
                    r.arg = s.arg)
                }
            }
        }
        function S(t, n) {
            var r = n.method
              , o = t.iterator[r];
            if (o === e)
                return n.delegate = null,
                "throw" === r && t.iterator.return && (n.method = "return",
                n.arg = e,
                S(t, n),
                "throw" === n.method) || "return" !== r && (n.method = "throw",
                n.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                g;
            var i = d(o, t.iterator, n.arg);
            if ("throw" === i.type)
                return n.method = "throw",
                n.arg = i.arg,
                n.delegate = null,
                g;
            var a = i.arg;
            return a ? a.done ? (n[t.resultName] = a.value,
            n.next = t.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = e),
            n.delegate = null,
            g) : a : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            g)
        }
        function P(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function I(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function U(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(P, this),
            this.reset(!0)
        }
        function C(t) {
            if (t || "" === t) {
                var n = t[a];
                if (n)
                    return n.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var o = -1
                      , i = function n() {
                        for (; ++o < t.length; )
                            if (r.call(t, o))
                                return n.value = t[o],
                                n.done = !1,
                                n;
                        return n.value = e,
                        n.done = !0,
                        n
                    };
                    return i.next = i
                }
            }
            throw new TypeError(typeof t + " is not iterable")
        }
        return y.prototype = b,
        o(k, "constructor", {
            value: b,
            configurable: !0
        }),
        o(b, "constructor", {
            value: y,
            configurable: !0
        }),
        y.displayName = s(b, u, "GeneratorFunction"),
        t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b,
            s(e, u, "GeneratorFunction")),
            e.prototype = Object.create(k),
            e
        }
        ,
        t.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        M(E.prototype),
        s(E.prototype, l, (function() {
            return this
        }
        )),
        t.AsyncIterator = E,
        t.async = function(e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, n, r, o),i);
            return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }
            ))
        }
        ,
        M(k),
        s(k, u, "Generator"),
        s(k, a, (function() {
            return this
        }
        )),
        s(k, "toString", (function() {
            return "[object Generator]"
        }
        )),
        t.keys = function(e) {
            var t = Object(e)
              , n = [];
            for (var r in t)
                n.push(r);
            return n.reverse(),
            function e() {
                for (; n.length; ) {
                    var r = n.pop();
                    if (r in t)
                        return e.value = r,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        t.values = C,
        U.prototype = {
            constructor: U,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = e,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = e,
                this.tryEntries.forEach(I),
                !t)
                    for (var n in this)
                        "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var n = this;
                function o(r, o) {
                    return l.type = "throw",
                    l.arg = t,
                    n.next = r,
                    o && (n.method = "next",
                    n.arg = e),
                    !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i]
                      , l = a.completion;
                    if ("root" === a.tryLoc)
                        return o("end");
                    if (a.tryLoc <= this.prev) {
                        var u = r.call(a, "catchLoc")
                          , s = r.call(a, "finallyLoc");
                        if (u && s) {
                            if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc)
                                return o(a.catchLoc, !0)
                        } else {
                            if (!s)
                                throw Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc)
                                return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e,
                a.arg = t,
                i ? (this.method = "next",
                this.next = i.finallyLoc,
                g) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                g
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        I(n),
                        g
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            I(n)
                        }
                        return o
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(t, n, r) {
                return this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = e),
                g
            }
        },
        t
    }
    function f(e, t) {
        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        f(e, t)
    }
    function m(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i, a, l = [], u = !0, s = !1;
                try {
                    if (i = (n = n.call(e)).next,
                    0 === t)
                        ;
                    else
                        for (; !(u = (r = i.call(n)).done) && (l.push(r.value),
                        l.length !== t); u = !0)
                            ;
                } catch (e) {
                    s = !0,
                    o = e
                } finally {
                    try {
                        if (!u && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (s)
                            throw o
                    }
                }
                return l
            }
        }(e, t) || g(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function h(e) {
        var t = function(e) {
            if ("object" != typeof e || !e)
                return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != typeof n)
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e);
        return "symbol" == typeof t ? t : t + ""
    }
    function v(e) {
        return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        v(e)
    }
    function g(t, n) {
        if (t) {
            if ("string" == typeof t)
                return e(t, n);
            var r = {}.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, n) : void 0
        }
    }
    function _(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return _ = function(e) {
            if (null === e || !function(e) {
                try {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                } catch (t) {
                    return "function" == typeof e
                }
            }(e))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, n)
            }
            function n() {
                return function(e, t, n) {
                    if (s())
                        return Reflect.construct.apply(null, arguments);
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new (e.bind.apply(e, r));
                    return n && f(o, n.prototype),
                    o
                }(e, arguments, l(this).constructor)
            }
            return n.prototype = Object.create(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            f(n, e)
        }
        ,
        _(e)
    }
    var y;
    function b(e, t) {
        if (Array.isArray(e)) {
            for (var n = 0; n < e.length; n++)
                if (e[n] === t)
                    return !0;
            return !1
        }
        if ("string" == typeof e)
            return e.indexOf(t) >= 0;
        throw Error("Can't call includes on ".concat(v(e)))
    }
    var w, x = "import-map-override:", O = "import-map-overrides-disabled", k = "import-map-overrides-external-maps", M = "data-is-importmap-override", E = "import-map-overrides-domains", N = "allowlist:", S = "denylist:", P = document.querySelector('meta[name="importmap-type"]'), I = document.querySelector('meta[name="'.concat(E, '"]')), U = {}, C = null !== (y = null == P ? void 0 : P.getAttribute("content")) && void 0 !== y ? y : "importmap";
    if (I) {
        var j = I.getAttribute("content");
        j || console.warn("Invalid ".concat(E, " meta element - content required."));
        var L = function(e) {
            return new RegExp(function(e) {
                if ("string" != typeof e)
                    throw new TypeError("Expected a string");
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }(e).replace("\\*", ".+")).test(window.location.hostname)
        };
        0 === j.indexOf(N) ? w = !j.slice(10).split(",").some(L) : 0 === j.indexOf(S) ? w = j.slice(9).split(",").some(L) : console.log("Invalid ".concat(E, " meta content attribute - must start with ").concat(N, " or ").concat(S))
    } else
        w = !1;
    function D(e, t) {
        return Object.entries(e).reduce((function(e, n) {
            var r = m(n, 2)
              , o = r[0]
              , i = r[1];
            return e[o] = function(e, t) {
                try {
                    return new URL(e,t).href
                } catch (t) {
                    return e
                }
            }(i, t),
            e
        }
        ), {})
    }
    (function() {
        try {
            return localStorage.getItem("test"),
            !0
        } catch (e) {
            return !1
        }
    }
    )() || (console.warn("Disabling import-map-overrides, since local storage is not readable"),
    w = !0),
    w || function() {
        var e, n = !!P && P.hasAttribute("server-cookie"), r = !!P && P.hasAttribute("server-only"), o = !!P && P.hasAttribute("allow-query-param-override");
        window.importMapOverrides = {
            addOverride: function(e, t) {
                /^\d+$/g.test(t) && (t = i.getUrlFromPort(e, t));
                var r = x + e;
                return localStorage.setItem(r, t),
                n && (document.cookie = "".concat(r, "=").concat(t)),
                l(),
                i.getOverrideMap()
            },
            getOverrideMap: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = {
                    imports: {},
                    scopes: {}
                }, n = i.getDisabledOverrides(), r = function(r, o) {
                    !e && n.indexOf(r) >= 0 || (t.imports[r] = o)
                }, a = 0; a < localStorage.length; a++) {
                    var l = localStorage.key(a);
                    0 === l.indexOf(x) && r(l.slice(20), localStorage.getItem(l))
                }
                if (o) {
                    var u = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                        e = e.replace(/[\[\]]/g, "\\$&");
                        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                    }("imo", window.location != window.parent.location ? document.referrer : window.location.href);
                    if (u) {
                        var s;
                        try {
                            s = JSON.parse(u)
                        } catch (e) {
                            throw Error("Invalid importMap query param - text content must be json")
                        }
                        Object.keys(s.imports).forEach((function(e) {
                            r(e, s.imports[e])
                        }
                        ))
                    }
                }
                return t
            },
            removeOverride: function(e) {
                var t = x + e
                  , r = null !== localStorage.getItem(t);
                return localStorage.removeItem(t),
                n && (document.cookie = "".concat(t, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")),
                i.enableOverride(e),
                l(),
                r
            },
            getOverrideScopes: function() {
                return function(e) {
                    return function() {
                        var n = this
                          , r = arguments;
                        return new Promise((function(o, i) {
                            var a = e.apply(n, r);
                            function l(e) {
                                t(a, o, i, l, u, "next", e)
                            }
                            function u(e) {
                                t(a, o, i, l, u, "throw", e)
                            }
                            l(void 0)
                        }
                        ))
                    }
                }(p().mark((function e() {
                    var t, n, r, o, a, l, u, s, c;
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = {},
                                e.next = 3,
                                i.getDefaultMap();
                            case 3:
                                for (o in n = e.sent,
                                (r = i.getOverrideMap()).imports)
                                    if (a = n.imports[o])
                                        for (c in l = new URL(a,window.location.href).href,
                                        u = new URL(r.imports[o],window.location.href).href,
                                        s = u.slice(0, u.lastIndexOf("/")) + "/",
                                        n.scopes || {})
                                            l.startsWith(c) && (t[s] = d(d({}, t[s] || {}), n.scopes[c]));
                                return e.abrupt("return", {
                                    scopes: t
                                });
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            resetOverrides: function() {
                return Object.keys(i.getOverrideMap(!0).imports).forEach((function(e) {
                    i.removeOverride(e)
                }
                )),
                localStorage.removeItem(O),
                localStorage.removeItem(k),
                l(),
                i.getOverrideMap()
            },
            hasOverrides: function() {
                return Object.keys(i.getOverrideMap().imports).length > 0
            },
            getUrlFromPort: function(e, t) {
                var n = e.replace(/@/g, "").replace(/\//g, "-");
                return "//localhost:".concat(t, "/").concat(n, ".js")
            },
            enableUI: function() {
                var e = "import-map-overrides-full"
                  , t = "show-when-local-storage"
                  , n = document.querySelector(e);
                n || ((n = document.createElement(e)).setAttribute(t, "true"),
                document.body.appendChild(n));
                var r = n.getAttribute(t);
                r && (localStorage.setItem(r, !0),
                n.renderWithPreact())
            },
            mergeImportMap: function(e, t) {
                var n = {
                    imports: {},
                    scopes: {}
                };
                for (var r in e.imports)
                    n.imports[r] = e.imports[r];
                for (var o in t.imports)
                    n.imports[o] = t.imports[o];
                for (var i in e.scopes)
                    n.scopes[i] = e.scopes[i];
                for (var a in t.scopes)
                    n.scopes[a] = t.scopes[a];
                return n
            },
            resetDefaultMap: function() {
                e = null
            },
            getDefaultMap: function() {
                return e || (e = Array.prototype.reduce.call(document.querySelectorAll('script[type="'.concat(C, '"], script[type="overridable-importmap"]')), (function(e, t) {
                    return t.hasAttribute(M) ? e : (n = t.src ? y(t.src) : Promise.resolve(JSON.parse(t.textContent)),
                    Promise.all([e, n]).then((function(e) {
                        var t = m(e, 2)
                          , n = t[0]
                          , r = t[1];
                        return i.mergeImportMap(n, r)
                    }
                    )));
                    var n
                }
                ), Promise.resolve({
                    imports: {},
                    scopes: {}
                })))
            },
            getCurrentPageMap: function() {
                return Promise.all([i.getDefaultMap(), i.getExternalOverrideMap(i.getCurrentPageExternalOverrides())]).then((function(e) {
                    var t = m(e, 2)
                      , n = t[0]
                      , r = t[1];
                    return i.mergeImportMap(i.mergeImportMap(n, r), c)
                }
                ))
            },
            getCurrentPageExternalOverrides: function() {
                var e = [];
                return document.querySelectorAll("[".concat(M, ']:not([id="import-map-overrides"])')).forEach((function(t) {
                    e.push(t.src)
                }
                )),
                e
            },
            getNextPageMap: function() {
                return Promise.all([i.getDefaultMap(), i.getExternalOverrideMap()]).then((function(e) {
                    var t = m(e, 2)
                      , n = t[0]
                      , r = t[1];
                    return i.mergeImportMap(i.mergeImportMap(n, r), i.getOverrideMap())
                }
                ))
            },
            disableOverride: function(e) {
                var t = i.getDisabledOverrides();
                return !b(t, e) && (localStorage.setItem(O, JSON.stringify(t.concat(e))),
                l(),
                !0)
            },
            enableOverride: function(e) {
                var t = i.getDisabledOverrides()
                  , n = t.indexOf(e);
                return n >= 0 && (t.splice(n, 1),
                localStorage.setItem(O, JSON.stringify(t)),
                l(),
                !0)
            },
            getDisabledOverrides: function() {
                var e = localStorage.getItem(O);
                return e ? JSON.parse(e) : []
            },
            isDisabled: function(e) {
                return b(i.getDisabledOverrides(), e)
            },
            getExternalOverrides: function() {
                var e = localStorage.getItem(k);
                return e ? JSON.parse(e).sort() : []
            },
            addExternalOverride: function(e) {
                e = new URL(e,document.baseURI).href;
                var t = i.getExternalOverrides();
                return !b(t, e) && (localStorage.setItem(k, JSON.stringify(t.concat(e))),
                l(),
                !0)
            },
            removeExternalOverride: function(e) {
                var t = i.getExternalOverrides();
                return !!b(t, e) && (localStorage.setItem(k, JSON.stringify(t.filter((function(t) {
                    return t !== e
                }
                )))),
                l(),
                !0)
            },
            getExternalOverrideMap: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.getExternalOverrides()).reduce((function(e, t) {
                    var n = U[t] || (U[t] = y(t));
                    return Promise.all([e, n]).then((function(e) {
                        var t = m(e, 2)
                          , n = t[0]
                          , r = t[1];
                        return i.mergeImportMap(n, r)
                    }
                    ))
                }
                ), Promise.resolve({
                    imports: {},
                    scopes: {}
                }))
            },
            isExternalMapValid: function(e) {
                return (U[e] || (U[e] = y(e))).then((function() {
                    return !b(i.invalidExternalMaps, e)
                }
                ))
            },
            invalidExternalMaps: []
        };
        var i = window.importMapOverrides
          , a = !0;
        try {
            CustomEvent ? new CustomEvent("a") : a = !1
        } catch (e) {
            a = !1
        }
        function l() {
            u("change")
        }
        function u(e) {
            setTimeout((function() {
                var t = "import-map-overrides:".concat(e)
                  , n = a ? new CustomEvent(t) : document.createEvent("CustomEvent");
                a || n.initCustomEvent(t, !0, !0, null),
                window.dispatchEvent(n)
            }
            ))
        }
        var s, c = i.getOverrideMap(), f = i.getExternalOverrides();
        if (!r) {
            var h = document.querySelector('script[type="overridable-importmap"]');
            if (!(s = h)) {
                var v = document.querySelectorAll('script[type="'.concat(C, '"]'));
                s = v ? v[v.length - 1] : null
            }
            if (h) {
                if (h.src)
                    throw Error('import-map-overrides: external import maps with type="overridable-importmap" are not supported');
                var g;
                try {
                    g = JSON.parse(h.textContent)
                } catch (e) {
                    throw Error('Invalid <script type="overridable-importmap"> - text content must be json')
                }
                s = _(i.mergeImportMap(g, c), "import-map-overrides", s),
                w()
            } else
                w(),
                Object.keys(c.imports).length > 0 && (s = _(c, "import-map-overrides", s))
        }
        function _(e, t, n) {
            if (null == P || !P.hasAttribute("use-injector")) {
                var r = document.createElement("script");
                return r.type = C,
                r.id = t,
                r.setAttribute(M, ""),
                "string" == typeof e ? r.src = e : r.textContent = JSON.stringify(e, null, 2),
                n ? n.insertAdjacentElement("afterend", r) : document.head.appendChild(r),
                r
            }
        }
        function y(e) {
            return fetch(e).then((function(e) {
                return e.ok ? e.json().catch((function(t) {
                    return console.warn(Error("External override import map contained invalid json, at url ".concat(e.url, ". ").concat(t))),
                    i.invalidExternalMaps.push(e.url),
                    {
                        imports: {},
                        scopes: {}
                    }
                }
                )) : (console.warn(Error("Unable to download external override import map from url ".concat(e.url, ". Server responded with status ").concat(e.status))),
                i.invalidExternalMaps.push(e.url),
                {
                    imports: {},
                    scopes: {}
                })
            }
            ), (function() {
                return console.warn(Error("Unable to download external import map at url '".concat(e, "'"))),
                i.invalidExternalMaps.push(new URL(e,document.baseURI).href),
                {
                    imports: {},
                    scopes: {}
                }
            }
            )).then((function(t) {
                return function(e, t) {
                    return {
                        imports: D(e.imports || {}, t),
                        scopes: Object.keys(e.scopes || {}).reduce((function(n, r) {
                            return n[r] = D(e.scopes[r], t),
                            n
                        }
                        ), {})
                    }
                }(t, e)
            }
            ))
        }
        function w() {
            f.length > 0 && f.forEach((function(e, t) {
                s = _(e, "import-map-overrides-external-".concat(t))
            }
            ))
        }
        u("init")
    }();
    var A, R, T, F, W, q, z, $, J, G, H = {}, V = [], B = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Y = Array.isArray;
    function X(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function K(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    function Q(e, t, n) {
        var r, o, i, a = {};
        for (i in t)
            "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
        if (arguments.length > 2 && (a.children = arguments.length > 3 ? A.call(arguments, 2) : n),
        "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps)
                void 0 === a[i] && (a[i] = e.defaultProps[i]);
        return Z(e, a, r, o, null)
    }
    function Z(e, t, n, r, o) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == o ? ++T : o,
            __i: -1,
            __u: 0
        };
        return null == o && null != R.vnode && R.vnode(i),
        i
    }
    function ee(e) {
        return e.children
    }
    function te(e, t) {
        this.props = e,
        this.context = t
    }
    function ne(e, t) {
        if (null == t)
            return e.__ ? ne(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e)
                return n.__e;
        return "function" == typeof e.type ? ne(e) : null
    }
    function re(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return re(e)
        }
    }
    function oe(e) {
        (!e.__d && (e.__d = !0) && F.push(e) && !ie.__r++ || W !== R.debounceRendering) && ((W = R.debounceRendering) || q)(ie)
    }
    function ie() {
        var e, t, n, r, o, i, a, l;
        for (F.sort(z); e = F.shift(); )
            e.__d && (t = F.length,
            r = void 0,
            i = (o = (n = e).__v).__e,
            a = [],
            l = [],
            n.__P && ((r = X({}, o)).__v = o.__v + 1,
            R.vnode && R.vnode(r),
            fe(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, a, null == i ? ne(o) : i, !!(32 & o.__u), l),
            r.__v = o.__v,
            r.__.__k[r.__i] = r,
            me(a, r, l),
            r.__e != i && re(r)),
            F.length > t && F.sort(z));
        ie.__r = 0
    }
    function ae(e, t, n, r, o, i, a, l, u, s, c) {
        var d, p, f, m, h, v = r && r.__k || V, g = t.length;
        for (n.__d = u,
        le(n, t, v),
        u = n.__d,
        d = 0; d < g; d++)
            null != (f = n.__k[d]) && (p = -1 === f.__i ? H : v[f.__i] || H,
            f.__i = d,
            fe(e, f, p, o, i, a, l, u, s, c),
            m = f.__e,
            f.ref && p.ref != f.ref && (p.ref && ve(p.ref, null, f),
            c.push(f.ref, f.__c || m, f)),
            null == h && null != m && (h = m),
            65536 & f.__u || p.__k === f.__k ? u = ue(f, u, e) : "function" == typeof f.type && void 0 !== f.__d ? u = f.__d : m && (u = m.nextSibling),
            f.__d = void 0,
            f.__u &= -196609);
        n.__d = u,
        n.__e = h
    }
    function le(e, t, n) {
        var r, o, i, a, l, u = t.length, s = n.length, c = s, d = 0;
        for (e.__k = [],
        r = 0; r < u; r++)
            null != (o = t[r]) && "boolean" != typeof o && "function" != typeof o ? (a = r + d,
            (o = e.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? Z(null, o, null, null, null) : Y(o) ? Z(ee, {
                children: o
            }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? Z(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = e,
            o.__b = e.__b + 1,
            i = null,
            -1 !== (l = o.__i = se(o, n, a, c)) && (c--,
            (i = n[l]) && (i.__u |= 131072)),
            null == i || null === i.__v ? (-1 == l && d--,
            "function" != typeof o.type && (o.__u |= 65536)) : l !== a && (l == a - 1 ? d-- : l == a + 1 ? d++ : (l > a ? d-- : d++,
            o.__u |= 65536))) : o = e.__k[r] = null;
        if (c)
            for (r = 0; r < s; r++)
                null != (i = n[r]) && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = ne(i)),
                ge(i, i))
    }
    function ue(e, t, n) {
        var r, o;
        if ("function" == typeof e.type) {
            for (r = e.__k,
            o = 0; r && o < r.length; o++)
                r[o] && (r[o].__ = e,
                t = ue(r[o], t, n));
            return t
        }
        e.__e != t && (t && e.type && !n.contains(t) && (t = ne(e)),
        n.insertBefore(e.__e, t || null),
        t = e.__e);
        do {
            t = t && t.nextSibling
        } while (null != t && 8 === t.nodeType);
        return t
    }
    function se(e, t, n, r) {
        var o = e.key
          , i = e.type
          , a = n - 1
          , l = n + 1
          , u = t[n];
        if (null === u || u && o == u.key && i === u.type && !(131072 & u.__u))
            return n;
        if (r > (null == u || 131072 & u.__u ? 0 : 1))
            for (; a >= 0 || l < t.length; ) {
                if (a >= 0) {
                    if ((u = t[a]) && !(131072 & u.__u) && o == u.key && i === u.type)
                        return a;
                    a--
                }
                if (l < t.length) {
                    if ((u = t[l]) && !(131072 & u.__u) && o == u.key && i === u.type)
                        return l;
                    l++
                }
            }
        return -1
    }
    function ce(e, t, n) {
        "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || B.test(t) ? n : n + "px"
    }
    function de(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n)
                e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""),
                r)
                    for (t in r)
                        n && t in n || ce(e.style, t, "");
                if (n)
                    for (t in n)
                        r && n[t] === r[t] || ce(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1])
            i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")),
            t = t.toLowerCase()in e || "onFocusOut" === t || "onFocusIn" === t ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = n,
            n ? r ? n.u = r.u : (n.u = $,
            e.addEventListener(t, i ? G : J, i)) : e.removeEventListener(t, i ? G : J, i);
        else {
            if ("http://www.w3.org/2000/svg" == o)
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e)
                try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
            "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
        }
    }
    function pe(e) {
        return function(t) {
            if (this.l) {
                var n = this.l[t.type + e];
                if (null == t.t)
                    t.t = $++;
                else if (t.t < n.u)
                    return;
                return n(R.event ? R.event(t) : t)
            }
        }
    }
    function fe(e, t, n, r, o, i, a, l, u, s) {
        var c, d, p, f, m, h, v, g, _, y, b, w, x, O, k, M, E = t.type;
        if (void 0 !== t.constructor)
            return null;
        128 & n.__u && (u = !!(32 & n.__u),
        i = [l = t.__e = n.__e]),
        (c = R.__b) && c(t);
        e: if ("function" == typeof E)
            try {
                if (g = t.props,
                _ = "prototype"in E && E.prototype.render,
                y = (c = E.contextType) && r[c.__c],
                b = c ? y ? y.props.value : c.__ : r,
                n.__c ? v = (d = t.__c = n.__c).__ = d.__E : (_ ? t.__c = d = new E(g,b) : (t.__c = d = new te(g,b),
                d.constructor = E,
                d.render = _e),
                y && y.sub(d),
                d.props = g,
                d.state || (d.state = {}),
                d.context = b,
                d.__n = r,
                p = d.__d = !0,
                d.__h = [],
                d._sb = []),
                _ && null == d.__s && (d.__s = d.state),
                _ && null != E.getDerivedStateFromProps && (d.__s == d.state && (d.__s = X({}, d.__s)),
                X(d.__s, E.getDerivedStateFromProps(g, d.__s))),
                f = d.props,
                m = d.state,
                d.__v = t,
                p)
                    _ && null == E.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                    _ && null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (_ && null == E.getDerivedStateFromProps && g !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(g, b),
                    !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(g, d.__s, b) || t.__v === n.__v)) {
                        for (t.__v !== n.__v && (d.props = g,
                        d.state = d.__s,
                        d.__d = !1),
                        t.__e = n.__e,
                        t.__k = n.__k,
                        t.__k.some((function(e) {
                            e && (e.__ = t)
                        }
                        )),
                        w = 0; w < d._sb.length; w++)
                            d.__h.push(d._sb[w]);
                        d._sb = [],
                        d.__h.length && a.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(g, d.__s, b),
                    _ && null != d.componentDidUpdate && d.__h.push((function() {
                        d.componentDidUpdate(f, m, h)
                    }
                    ))
                }
                if (d.context = b,
                d.props = g,
                d.__P = e,
                d.__e = !1,
                x = R.__r,
                O = 0,
                _) {
                    for (d.state = d.__s,
                    d.__d = !1,
                    x && x(t),
                    c = d.render(d.props, d.state, d.context),
                    k = 0; k < d._sb.length; k++)
                        d.__h.push(d._sb[k]);
                    d._sb = []
                } else
                    do {
                        d.__d = !1,
                        x && x(t),
                        c = d.render(d.props, d.state, d.context),
                        d.state = d.__s
                    } while (d.__d && ++O < 25);
                d.state = d.__s,
                null != d.getChildContext && (r = X(X({}, r), d.getChildContext())),
                _ && !p && null != d.getSnapshotBeforeUpdate && (h = d.getSnapshotBeforeUpdate(f, m)),
                ae(e, Y(M = null != c && c.type === ee && null == c.key ? c.props.children : c) ? M : [M], t, n, r, o, i, a, l, u, s),
                d.base = t.__e,
                t.__u &= -161,
                d.__h.length && a.push(d),
                v && (d.__E = d.__ = null)
            } catch (e) {
                if (t.__v = null,
                u || null != i) {
                    for (t.__u |= u ? 160 : 32; l && 8 === l.nodeType && l.nextSibling; )
                        l = l.nextSibling;
                    i[i.indexOf(l)] = null,
                    t.__e = l
                } else
                    t.__e = n.__e,
                    t.__k = n.__k;
                R.__e(e, t, n)
            }
        else
            null == i && t.__v === n.__v ? (t.__k = n.__k,
            t.__e = n.__e) : t.__e = he(n.__e, t, n, r, o, i, a, u, s);
        (c = R.diffed) && c(t)
    }
    function me(e, t, n) {
        t.__d = void 0;
        for (var r = 0; r < n.length; r++)
            ve(n[r], n[++r], n[++r]);
        R.__c && R.__c(t, e),
        e.some((function(t) {
            try {
                e = t.__h,
                t.__h = [],
                e.some((function(e) {
                    e.call(t)
                }
                ))
            } catch (e) {
                R.__e(e, t.__v)
            }
        }
        ))
    }
    function he(e, t, n, r, o, i, a, l, u) {
        var s, c, d, p, f, m, h, v = n.props, g = t.props, _ = t.type;
        if ("svg" === _ ? o = "http://www.w3.org/2000/svg" : "math" === _ ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"),
        null != i)
            for (s = 0; s < i.length; s++)
                if ((f = i[s]) && "setAttribute"in f == !!_ && (_ ? f.localName === _ : 3 === f.nodeType)) {
                    e = f,
                    i[s] = null;
                    break
                }
        if (null == e) {
            if (null === _)
                return document.createTextNode(g);
            e = document.createElementNS(o, _, g.is && g),
            l && (R.__m && R.__m(t, i),
            l = !1),
            i = null
        }
        if (null === _)
            v === g || l && e.data === g || (e.data = g);
        else {
            if (i = i && A.call(e.childNodes),
            v = n.props || H,
            !l && null != i)
                for (v = {},
                s = 0; s < e.attributes.length; s++)
                    v[(f = e.attributes[s]).name] = f.value;
            for (s in v)
                if (f = v[s],
                "children" == s)
                    ;
                else if ("dangerouslySetInnerHTML" == s)
                    d = f;
                else if (!(s in g)) {
                    if ("value" == s && "defaultValue"in g || "checked" == s && "defaultChecked"in g)
                        continue;
                    de(e, s, null, f, o)
                }
            for (s in g)
                f = g[s],
                "children" == s ? p = f : "dangerouslySetInnerHTML" == s ? c = f : "value" == s ? m = f : "checked" == s ? h = f : l && "function" != typeof f || v[s] === f || de(e, s, f, v[s], o);
            if (c)
                l || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html),
                t.__k = [];
            else if (d && (e.innerHTML = ""),
            ae(e, Y(p) ? p : [p], t, n, r, "foreignObject" === _ ? "http://www.w3.org/1999/xhtml" : o, i, a, i ? i[0] : n.__k && ne(n, 0), l, u),
            null != i)
                for (s = i.length; s--; )
                    K(i[s]);
            l || (s = "value",
            "progress" === _ && null == m ? e.removeAttribute("value") : void 0 !== m && (m !== e[s] || "progress" === _ && !m || "option" === _ && m !== v[s]) && de(e, s, m, v[s], o),
            s = "checked",
            void 0 !== h && h !== e[s] && de(e, s, h, v[s], o))
        }
        return e
    }
    function ve(e, t, n) {
        try {
            if ("function" == typeof e) {
                var r = "function" == typeof e.__u;
                r && e.__u(),
                r && null == t || (e.__u = e(t))
            } else
                e.current = t
        } catch (e) {
            R.__e(e, n)
        }
    }
    function ge(e, t, n) {
        var r, o;
        if (R.unmount && R.unmount(e),
        (r = e.ref) && (r.current && r.current !== e.__e || ve(r, null, t)),
        null != (r = e.__c)) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (e) {
                    R.__e(e, t)
                }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (o = 0; o < r.length; o++)
                r[o] && ge(r[o], t, n || "function" != typeof e.type);
        n || K(e.__e),
        e.__c = e.__ = e.__e = e.__d = void 0
    }
    function _e(e, t, n) {
        return this.constructor(e, n)
    }
    function ye(e, t, n) {
        var r, o, i, a;
        R.__ && R.__(e, t),
        o = (r = "function" == typeof n) ? null : n && n.__k || t.__k,
        i = [],
        a = [],
        fe(t, e = (!r && n || t).__k = Q(ee, null, [e]), o || H, H, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? A.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, a),
        me(i, e, a)
    }
    A = V.slice,
    R = {
        __e: function(e, t, n, r) {
            for (var o, i, a; t = t.__; )
                if ((o = t.__c) && !o.__)
                    try {
                        if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)),
                        a = o.__d),
                        null != o.componentDidCatch && (o.componentDidCatch(e, r || {}),
                        a = o.__d),
                        a)
                            return o.__E = o
                    } catch (t) {
                        e = t
                    }
            throw e
        }
    },
    T = 0,
    te.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = X({}, this.state),
        "function" == typeof e && (e = e(X({}, n), this.props)),
        e && X(n, e),
        null != e && this.__v && (t && this._sb.push(t),
        oe(this))
    }
    ,
    te.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        oe(this))
    }
    ,
    te.prototype.render = ee,
    F = [],
    q = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    z = function(e, t) {
        return e.__v.__b - t.__v.__b
    }
    ,
    ie.__r = 0,
    $ = 0,
    J = pe(!1),
    G = pe(!0);
    var be = function(e) {
        function t() {
            var e;
            r(this, t);
            for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
                i[l] = arguments[l];
            return a(e = n(this, t, [].concat(i)), "getInitialOverrideUrl", (function() {
                var t = new RegExp("//localhost:([0-9]+)/").exec(e.props.module.overrideUrl);
                return t && e.props.module.overrideUrl === window.importMapOverrides.getUrlFromPort(e.props.module.moduleName, t[1]) ? t[1] : e.props.module.overrideUrl ? e.props.module.overrideUrl : ""
            }
            )),
            a(e, "state", {
                overrideUrl: e.getInitialOverrideUrl(),
                moduleName: ""
            }),
            a(e, "inputEl", null),
            a(e, "moduleNameEl", null),
            a(e, "handleInputRef", (function(t) {
                e.inputEl = t
            }
            )),
            a(e, "handleModuleNameRef", (function(t) {
                e.moduleNameEl = t
            }
            )),
            a(e, "dialogRef", (function(t) {
                e.dialogEl = t
            }
            )),
            a(e, "handleSubmit", (function(t) {
                t.preventDefault(),
                e.props.module.moduleName && window.importMapOverrides.isDisabled(e.props.module.moduleName) && window.importMapOverrides.enableOverride(e.props.module.moduleName),
                e.props.module.isNew ? e.props.addNewModule(e.state.moduleName, e.state.overrideUrl) : e.props.updateModuleUrl(e.state.overrideUrl)
            }
            )),
            a(e, "getDerivedUrl", (function() {
                var t = e.props.module.isNew ? e.state.moduleName : e.props.module.moduleName;
                return we.test(e.state.overrideUrl) ? window.importMapOverrides.getUrlFromPort(t, e.state.overrideUrl) : e.state.overrideUrl
            }
            )),
            a(e, "keyDown", (function(t) {
                "Escape" === t.key && (t.stopPropagation(),
                e.props.cancel())
            }
            )),
            a(e, "focusFirstInput", (function() {
                (e.moduleNameEl || e.inputEl).select()
            }
            )),
            a(e, "clearModuleName", (function() {
                e.setState({
                    moduleName: ""
                }, (function() {
                    e.focusFirstInput()
                }
                ))
            }
            )),
            a(e, "clearInput", (function() {
                e.setState({
                    overrideUrl: ""
                }, (function() {
                    e.focusFirstInput()
                }
                ))
            }
            )),
            e
        }
        return u(t, e),
        i(t, [{
            key: "componentDidMount",
            value: function() {
                this.focusFirstInput(),
                this.dialogEl.addEventListener("keydown", this.keyDown)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                var n = this;
                this.props.module !== e.module && this.setState({
                    overrideUrl: this.props.module.overrideUrl || ""
                }, (function() {
                    n.focusFirstInput()
                }
                ))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.dialogEl.removeEventListener("keydown", this.keyDown)
            }
        }, {
            key: "render",
            value: function(e) {
                var t = this
                  , n = e.module;
                return Q("div", {
                    className: "imo-modal-container"
                }, Q("div", {
                    className: "imo-modal"
                }), Q("dialog", {
                    className: "imo-module-dialog ".concat(this.state.overrideUrl.length > 0 ? "imo-overridden" : "imo-default"),
                    open: !0,
                    ref: this.dialogRef
                }, Q("form", {
                    method: "dialog",
                    onSubmit: this.handleSubmit
                }, Q("h3", {
                    style: {
                        marginTop: 0
                    }
                }, n.moduleName), Q("table", null, Q("tbody", null, !n.isNew && Q("tr", null, Q("td", null, "Default URL:"), Q("td", null, n.defaultUrl)), n.isNew && Q("tr", null, Q("td", null, Q("span", {
                    id: "module-name-label"
                }, "Module Name:")), Q("td", {
                    style: {
                        position: "relative"
                    }
                }, Q("input", {
                    type: "text",
                    tabIndex: 1,
                    value: this.state.moduleName,
                    "aria-labelledby": "module-name-label",
                    onInput: function(e) {
                        return t.setState({
                            moduleName: e.target.value
                        })
                    },
                    ref: this.handleModuleNameRef,
                    required: !0
                }), Q("div", {
                    role: "button",
                    tabIndex: 3,
                    className: "imo-clear-input",
                    onClick: this.clearModuleName
                }, Q("div", null, "ⓧ")))), Q("tr", null, Q("td", null, Q("span", {
                    id: "override-url-label"
                }, "Override URL:")), Q("td", {
                    style: {
                        position: "relative"
                    }
                }, Q("input", {
                    ref: this.handleInputRef,
                    type: "text",
                    value: this.state.overrideUrl,
                    "aria-labelledby": "override-url-label",
                    tabIndex: 2,
                    onInput: function(e) {
                        return t.setState({
                            overrideUrl: e.target.value
                        })
                    }
                }), Q("div", {
                    role: "button",
                    tabIndex: 4,
                    className: "imo-clear-input",
                    onClick: this.clearInput
                }, Q("div", null, "ⓧ")))), we.test(this.state.overrideUrl) && Q("tr", null, Q("td", null, "Derived url:"), Q("td", null, this.getDerivedUrl())))), Q("div", {
                    className: "imo-dialog-actions"
                }, Q("button", {
                    type: "button",
                    tabIndex: 5,
                    onClick: this.props.cancel,
                    style: {
                        marginRight: "16px"
                    }
                }, "Cancel"), this.props.module.overrideUrl && !this.props.module.disabled && Q("button", {
                    type: "button",
                    onClick: function() {
                        t.props.module.disabled ? window.importMapOverrides.enableOverride(t.props.module.moduleName) : window.importMapOverrides.disableOverride(t.props.module.moduleName),
                        t.props.cancel()
                    },
                    tabIndex: 6,
                    style: {
                        marginRight: "16px"
                    }
                }, this.props.module.disabled ? "Enable" : "Disable", " Override"), Q("button", {
                    type: "submit",
                    tabIndex: 7,
                    className: this.state.overrideUrl ? "imo-overridden" : "imo-default"
                }, this.state.overrideUrl ? "Apply override" : "Reset to default")))))
            }
        }])
    }(te)
      , we = /^\d+$/
      , xe = function(e) {
        function t() {
            var e;
            r(this, t);
            for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
                i[l] = arguments[l];
            return a(e = n(this, t, [].concat(i)), "state", {
                url: e.props.dialogExternalMap.isNew ? "" : e.props.dialogExternalMap.url
            }),
            a(e, "inputEl", null),
            a(e, "handleSubmit", (function(t) {
                t.preventDefault(),
                e.props.dialogExternalMap.isNew || window.importMapOverrides.removeExternalOverride(e.props.dialogExternalMap.url),
                e.state.url && window.importMapOverrides.addExternalOverride(e.state.url),
                e.props.cancel()
            }
            )),
            a(e, "keyDown", (function(t) {
                "Escape" === t.key && (t.stopPropagation(),
                e.props.cancel())
            }
            )),
            e
        }
        return u(t, e),
        i(t, [{
            key: "componentDidMount",
            value: function() {
                this.inputEl.focus(),
                this.dialogEl.addEventListener("keydown", this.keyDown)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.dialogEl.removeEventListener("keydown", this.keyDown)
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return Q("div", {
                    className: "imo-modal-container"
                }, Q("div", {
                    className: "imo-modal"
                }), Q("dialog", {
                    className: "imo-module-dialog",
                    open: !0,
                    ref: function(t) {
                        return e.dialogEl = t
                    }
                }, Q("form", {
                    method: "dialog",
                    onSubmit: this.handleSubmit
                }, Q("h3", {
                    style: {
                        marginTop: 0
                    }
                }, this.props.dialogExternalMap.isNew ? "Add External Import Map" : "Edit External Import Map"), Q("div", {
                    style: {
                        marginBottom: "20px"
                    }
                }, Q("label", {
                    htmlFor: "external-importmap-url"
                }, "URL to import map:"), Q("span", {
                    style: {
                        position: "relative"
                    }
                }, Q("input", {
                    id: "external-importmap-url",
                    type: "text",
                    value: this.state.url,
                    onInput: function(t) {
                        return e.setState({
                            url: t.target.value
                        })
                    },
                    ref: function(t) {
                        return e.inputEl = t
                    },
                    required: this.props.dialogExternalMap.isNew
                }), Q("div", {
                    role: "button",
                    tabIndex: 0,
                    className: "imo-clear-input",
                    onClick: function() {
                        return e.setState({
                            url: ""
                        })
                    }
                }, Q("div", null, "ⓧ")))), Q("div", {
                    className: "imo-dialog-actions"
                }, Q("button", {
                    type: "button",
                    onClick: this.props.cancel,
                    style: {
                        marginRight: "16px"
                    }
                }, "Cancel"), Q("button", {
                    type: "submit",
                    className: this.state.url ? "imo-overridden" : "imo-default"
                }, this.state.url || this.props.dialogExternalMap.isNew ? "Apply override" : "Remove override")))))
            }
        }])
    }(te)
      , Oe = function(e) {
        function t() {
            return r(this, t),
            n(this, t, arguments)
        }
        return u(t, e),
        i(t, [{
            key: "componentDidMount",
            value: function() {
                window.importMapOverrides.getCurrentPageMap().then(Ee)
            }
        }, {
            key: "render",
            value: function() {
                return null
            }
        }])
    }(te)
      , ke = function(e) {
        return e.replace(".min.js", ".js")
    }
      , Me = {
        react: function(e) {
            return e.replace("production.min", "development")
        },
        "react-dom": function(e) {
            return e.replace("production.min", "development")
        },
        "single-spa": function(e) {
            return e.replace("single-spa.min.js", "single-spa.dev.js")
        },
        vue: ke,
        "vue-router": ke,
        "@angular/core": ke,
        "@angular/common": ke,
        "@angular/router": ke,
        "@angular/platform-browser": ke
    };
    function Ee(e) {
        Object.keys(e.imports).filter((function(e) {
            return Me[e]
        }
        )).forEach((function(t) {
            window.importMapOverrides.addOverride(t, Me[t](e.imports[t]))
        }
        ))
    }
    var Ne = function(e) {
        function t() {
            var e;
            r(this, t);
            for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
                i[l] = arguments[l];
            return a(e = n(this, t, [].concat(i)), "state", {
                notOverriddenMap: {
                    imports: {}
                },
                currentPageMap: {
                    imports: {}
                },
                nextPageMap: {
                    imports: {}
                },
                dialogModule: null,
                dialogExternalMap: null,
                searchVal: ""
            }),
            a(e, "reload", (function(e) {
                e.stopPropagation(),
                window.location.reload()
            }
            )),
            a(e, "cancel", (function() {
                e.setState({
                    dialogModule: null,
                    dialogExternalMap: null
                })
            }
            )),
            a(e, "updateModuleUrl", (function(t) {
                null === (t = t || null) ? window.importMapOverrides.removeOverride(e.state.dialogModule.moduleName) : window.importMapOverrides.addOverride(e.state.dialogModule.moduleName, t),
                e.setState({
                    dialogModule: null
                })
            }
            )),
            a(e, "doUpdate", (function() {
                e.forceUpdate(),
                window.importMapOverrides.getNextPageMap().then((function(t) {
                    e.setState({
                        nextPageMap: t
                    })
                }
                ))
            }
            )),
            a(e, "addNewModule", (function(t, n) {
                t && n && window.importMapOverrides.addOverride(t, n),
                e.setState({
                    dialogModule: null
                })
            }
            )),
            a(e, "filterModuleNames", (function(t) {
                return !(e.state.searchVal.trim().length > 0) || b(t, e.state.searchVal)
            }
            )),
            e
        }
        return u(t, e),
        i(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                window.importMapOverrides.getDefaultMap().then((function(t) {
                    e.setState({
                        notOverriddenMap: t
                    })
                }
                )),
                window.importMapOverrides.getCurrentPageMap().then((function(t) {
                    e.setState({
                        currentPageMap: t
                    })
                }
                )),
                window.importMapOverrides.getNextPageMap().then((function(t) {
                    e.setState({
                        nextPageMap: t
                    })
                }
                )),
                window.addEventListener("import-map-overrides:change", this.doUpdate),
                this.inputRef.focus()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("import-map-overrides:change", this.doUpdate)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = []
                  , n = []
                  , r = []
                  , o = []
                  , i = []
                  , a = []
                  , l = []
                  , u = window.importMapOverrides.getOverrideMap(!0).imports
                  , s = Object.keys(this.state.notOverriddenMap.imports)
                  , c = window.importMapOverrides.getDisabledOverrides();
                s.filter(this.filterModuleNames).forEach((function(s) {
                    var p = {
                        moduleName: s,
                        defaultUrl: e.state.notOverriddenMap.imports[s],
                        overrideUrl: u[s],
                        disabled: b(c, s)
                    };
                    p.disabled ? r.push(p) : u[s] ? e.state.currentPageMap.imports[s] === u[s] ? Me[s] && Me[s](e.state.currentPageMap.imports[s]) === u[s] ? l.push(p) : t.push(p) : n.push(p) : e.state.notOverriddenMap.imports[s] === e.state.currentPageMap.imports[s] ? o.push(p) : e.state.notOverriddenMap.imports[s] === e.state.nextPageMap.imports[s] ? a.push(p) : i.push(d(d({}, p), {}, {
                        overrideUrl: e.state.currentPageMap.imports[s]
                    }))
                }
                )),
                Object.keys(u).filter(this.filterModuleNames).forEach((function(o) {
                    if (!b(s, o)) {
                        var i = {
                            moduleName: o,
                            defaultUrl: null,
                            overrideUrl: u[o],
                            disabled: b(c, o)
                        };
                        i.disabled ? r.push(i) : e.state.currentPageMap.imports[o] === u[o] ? t.push(i) : n.push(i)
                    }
                }
                )),
                t.sort(Se),
                o.sort(Se),
                n.sort(Se);
                var p = function() {
                    var e, t = window.importMapOverrides.getExternalOverrides(), n = window.importMapOverrides.getCurrentPageExternalOverrides(), r = [], o = [], i = [], a = function(e) {
                        var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!t) {
                            if (Array.isArray(e) || (t = g(e))) {
                                t && (e = t);
                                var n = 0
                                  , r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return n >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[n++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, i = !0, a = !1;
                        return {
                            s: function() {
                                t = t.call(e)
                            },
                            n: function() {
                                var e = t.next();
                                return i = e.done,
                                e
                            },
                            e: function(e) {
                                a = !0,
                                o = e
                            },
                            f: function() {
                                try {
                                    i || null == t.return || t.return()
                                } finally {
                                    if (a)
                                        throw o
                                }
                            }
                        }
                    }(t);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var l = e.value;
                            b(window.importMapOverrides.invalidExternalMaps, l) ? r.push(l) : b(n, l) ? o.push(l) : i.push(l)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    return {
                        brokenMaps: r,
                        workingCurrentPageMaps: o,
                        workingNextPageMaps: i
                    }
                }()
                  , f = p.brokenMaps
                  , m = p.workingCurrentPageMaps
                  , h = p.workingNextPageMaps;
                return Q("div", {
                    className: "imo-list-container"
                }, Q("div", {
                    className: "imo-table-header-actions"
                }, Q("input", {
                    className: "imo-list-search",
                    "aria-label": "Search modules",
                    placeholder: "Search modules",
                    value: this.state.searchVal,
                    onInput: function(t) {
                        return e.setState({
                            searchVal: t.target.value
                        })
                    },
                    ref: function(t) {
                        return e.inputRef = t
                    }
                }), Q("div", {
                    className: "imo-add-new"
                }, Q("button", {
                    onClick: function() {
                        return e.setState({
                            dialogModule: {
                                moduleName: "New module",
                                isNew: !0
                            }
                        })
                    }
                }, "Add new module")), Q("div", {
                    className: "imo-add-new"
                }, Q("button", {
                    onClick: function() {
                        e.setState({
                            dialogExternalMap: {
                                url: "",
                                isNew: !0
                            }
                        })
                    }
                }, "Add import map")), Q("div", {
                    className: "imo-add-new"
                }, Q("button", {
                    onClick: function() {
                        return window.importMapOverrides.resetOverrides()
                    }
                }, "Reset all overrides"))), Q("table", {
                    className: "imo-overrides-table"
                }, Q("thead", null, Q("tr", null, Q("th", null, "Module Status"), Q("th", null, "Module Name"), Q("th", null, "Domain"), Q("th", null, "Filename"))), Q("tbody", null, n.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName
                    }, Q("td", {
                        onClick: e.reload,
                        role: "button",
                        tabIndex: 0
                    }, Q("div", {
                        className: "imo-status imo-next-override"
                    }), Q("div", null, "Inline Override ", "↻")), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )), a.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName
                    }, Q("td", {
                        style: {
                            position: "relative"
                        }
                    }, Q("div", {
                        className: "imo-status imo-next-default"
                    }), Q("div", null, "Default"), Q("div", {
                        className: "imo-needs-refresh"
                    })), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )), r.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-disabled-override"
                    }), Q("div", null, "Override disabled")), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )), t.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-current-override"
                    }), Q("div", null, "Inline Override")), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )), i.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-external-override"
                    }), Q("div", null, "External Override")), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )), l.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName,
                        title: "Automatically use dev version of certain npm libs"
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-dev-lib-override"
                    }), Q("div", null, "Dev Lib Override")), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )), o.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogModule: t
                            })
                        },
                        key: t.moduleName
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-default-module"
                    }), Q("div", null, "Default")), Q("td", null, t.moduleName), Q("td", null, Ie(t)), Q("td", null, Ue(t)))
                }
                )))), (f.length > 0 || m.length > 0 || h.length > 0) && Q("table", {
                    className: "imo-overrides-table"
                }, Q("thead", null, Q("th", null, "Import Map Status"), Q("th", null, "URL")), Q("tbody", null, f.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogExternalMap: {
                                    isNew: !1,
                                    url: t
                                }
                            })
                        },
                        key: t
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-disabled-override"
                    }), Q("div", null, "Invalid")), Q("td", null, t))
                }
                )), h.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogExternalMap: {
                                    isNew: !1,
                                    url: t
                                }
                            })
                        },
                        key: t
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-next-override"
                    }), Q("div", null, "Pending refresh")), Q("td", null, t))
                }
                )), m.map((function(t) {
                    return Q("tr", {
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return e.setState({
                                dialogExternalMap: {
                                    isNew: !1,
                                    url: t
                                }
                            })
                        },
                        key: t
                    }, Q("td", null, Q("div", {
                        className: "imo-status imo-current-override"
                    }), Q("div", null, "Override")), Q("td", null, t))
                }
                )))), this.state.dialogModule && Q(be, {
                    module: this.state.dialogModule,
                    cancel: this.cancel,
                    updateModuleUrl: this.updateModuleUrl,
                    addNewModule: this.addNewModule
                }), this.state.dialogExternalMap && Q(xe, {
                    dialogExternalMap: this.state.dialogExternalMap,
                    cancel: this.cancel
                }))
            }
        }])
    }(te);
    function Se(e, t) {
        return e.moduleName > t.moduleName
    }
    var Pe = document.querySelector("base") && document.querySelector("base").href || location.origin + "/";
    function Ie(e) {
        var t = Ce(e)
          , n = je(t);
        return n ? n.host : t
    }
    function Ue(e) {
        var t = Ce(e)
          , n = je(t);
        return n ? n.pathname.slice(n.pathname.lastIndexOf("/") + 1) : t
    }
    function Ce(e) {
        return e.overrideUrl || e.defaultUrl
    }
    function je(e) {
        try {
            return new URL(e,Pe)
        } catch (e) {
            return null
        }
    }
    var Le = function(e) {
        function t() {
            var e;
            r(this, t);
            for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
                i[l] = arguments[l];
            return a(e = n(this, t, [].concat(i)), "doUpdate", (function() {
                return e.forceUpdate()
            }
            )),
            a(e, "keydownListener", (function(t) {
                "Escape" === t.key && e.props.close && e.props.close()
            }
            )),
            e
        }
        return u(t, e),
        i(t, [{
            key: "componentDidMount",
            value: function() {
                window.addEventListener("keydown", this.keydownListener),
                window.addEventListener("import-map-overrides:change", this.doUpdate)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("keydown", this.keydownListener),
                window.removeEventListener("import-map-overrides:change", this.doUpdate)
            }
        }, {
            key: "render",
            value: function(e) {
                return Q("div", {
                    className: "imo-popup"
                }, Q("div", {
                    className: "imo-header"
                }, Q("div", null, Q("h1", null, "Import Map Overrides"), Q("p", null, "This developer tool allows you to view and override your import maps. Start by clicking on a module that you'd like to override.", " ", Q("a", {
                    target: "_blank",
                    href: "https://github.com/single-spa/import-map-overrides"
                }, "See documentation for more info"), ".")), Q("button", {
                    className: "imo-unstyled",
                    onClick: e.close
                }, "ⓧ")), Q(Ne, {
                    importMapChanged: this.props.importMapChanged
                }))
            }
        }])
    }(te)
      , De = function(e) {
        function t() {
            var e;
            r(this, t);
            for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
                i[l] = arguments[l];
            return a(e = n(this, t, [].concat(i)), "state", {
                showingPopup: !1
            }),
            a(e, "doUpdate", (function() {
                return e.forceUpdate()
            }
            )),
            a(e, "toggleTrigger", (function() {
                e.setState((function(e) {
                    return {
                        showingPopup: !e.showingPopup
                    }
                }
                ))
            }
            )),
            a(e, "importMapChanged", (function() {
                e.forceUpdate()
            }
            )),
            a(e, "useDevLibs", (function() {
                var t = localStorage.getItem("import-map-overrides-dev-libs");
                return t ? "true" === t : e.props.customElement.hasAttribute("dev-libs")
            }
            )),
            a(e, "atLeastOneOverride", (function() {
                return e.useDevLibs() ? Object.keys(window.importMapOverrides.getOverrideMap().imports).filter((function(e) {
                    return !Me[e]
                }
                )).length > 0 : Object.keys(window.importMapOverrides.getOverrideMap().imports).length > 0
            }
            )),
            e
        }
        return u(t, e),
        i(t, [{
            key: "componentDidMount",
            value: function() {
                window.addEventListener("import-map-overrides:change", this.doUpdate)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("import-map-overrides:change", this.doUpdate)
            }
        }, {
            key: "render",
            value: function(e, t) {
                var n, r = !e.customElement.hasAttribute("show-when-local-storage") || "true" === localStorage.getItem(e.customElement.getAttribute("show-when-local-storage")), o = (n = e.customElement.getAttribute("trigger-position"),
                ["top-left", "top-right", "bottom-left", "bottom-right"].indexOf(n) >= 0 ? n : "bottom-right");
                return r ? Q("div", null, Q("button", {
                    onClick: this.toggleTrigger,
                    className: "imo-unstyled imo-trigger imo-trigger-".concat(o, " ").concat(this.atLeastOneOverride() ? "imo-current-override" : "")
                }, "{···}"), this.useDevLibs() && Q(Oe, null), t.showingPopup && Q(Le, {
                    close: this.toggleTrigger,
                    importMapChanged: this.importMapChanged
                })) : null
            }
        }])
    }(te);
    function Ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return function(o) {
            function a() {
                return r(this, a),
                n(this, a, arguments)
            }
            return u(a, o),
            i(a, [{
                key: "connectedCallback",
                value: function() {
                    this.renderWithPreact()
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    ye(null, this),
                    this.renderedEl = null
                }
            }, {
                key: "attributeChangedCallback",
                value: function() {
                    this.renderWithPreact()
                }
            }, {
                key: "renderWithPreact",
                value: function() {
                    if (this.shadowRoot)
                        this.shadow = this.shadowRoot;
                    else {
                        this.shadow = this.attachShadow({
                            mode: "open"
                        });
                        var t = document.createElement("style");
                        t.textContent = ".imo-unstyled {\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  cursor: pointer;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n\n.imo-unstyled::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.imo-trigger {\n  position: fixed;\n  margin: 10px;\n  border-radius: 5px;\n  background-color: navajowhite;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-family: sans-serif;\n  z-index: 10500;\n}\n\n.imo-trigger-bottom-right {\n  bottom: 0;\n  right: 0;\n}\n\n.imo-trigger-bottom-left {\n  bottom: 0;\n  left: 0;\n}\n\n.imo-trigger-top-right {\n  top: 0;\n  right: 0;\n}\n\n.imo-trigger-top-left {\n  top: 0;\n  left: 0;\n}\n\n.imo-popup {\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 10000;\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  padding: 24px;\n  overflow-y: auto;\n}\n\n.imo-popup a:visited,\n.imo-popup a {\n  color: white;\n}\n\n.imo-popup .imo-module-dialog {\n  left: calc(50%);\n}\n\n.imo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.imo-list {\n  margin-left: 16px;\n}\n\n.imo-list > *:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.imo-list-container *,\n.imo-modal-container * {\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\n.imo-module-dialog {\n  position: fixed;\n  z-index: 30000000;\n  top: 30%;\n  max-width: 600px;\n  margin: 0 auto;\n  border: 4px solid navajowhite;\n  background-color: white;\n  padding: 1em;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n\n.imo-module-dialog input {\n  width: 100%;\n  font-size: 16px;\n  box-sizing: border-box;\n  padding-right: 20px;\n}\n\n.imo-module-dialog table {\n  margin-bottom: 16px;\n}\n\n.imo-module-dialog table td:first-child {\n  text-align: right;\n  padding-right: 16px;\n  word-break: keep-all;\n}\n\n.imo-module-dialog table td {\n  word-break: break-all;\n}\n\n.imo-module-dialog.imo-overridden {\n  border: 4px solid salmon;\n}\n\n.imo-table-header-actions {\n  display: flex;\n  align-items: center;\n}\n\n.imo-overrides-table {\n  border-collapse: collapse;\n  margin-top: 32px;\n}\n\n.imo-overrides-table tr td:first-child {\n  display: flex;\n  align-items: center;\n  padding-right: 32px;\n  position: relative;\n}\n\n.imo-status {\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  border: 1px solid white;\n  margin-right: 8px;\n}\n\n.imo-disabled-override {\n  background-color: lightblue;\n}\n\n.imo-next-override {\n  background-color: darkred;\n}\n\n.imo-current-override {\n  background-color: salmon;\n}\n\n.imo-default-module {\n  background-color: lightgoldenrodyellow;\n}\n\n.imo-external-override {\n  background-color: orange;\n}\n\n.imo-next-default {\n  background-color: darkgoldenrod;\n}\n\n.imo-dev-lib-override {\n  background-color: lightpink;\n}\n\n.imo-overrides-table tbody tr:hover {\n  cursor: pointer;\n  background-color: #404040;\n}\n\n.imo-overrides-table td,\n.imo-overrides-table th {\n  line-height: 18px;\n  padding: 16px;\n  border: 1px solid white;\n}\n\n.imo-add-new {\n  margin-left: 16px;\n}\n\n.imo-add-new button {\n  color: black;\n}\n\n.imo-clear-input {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.imo-modal-container {\n  font-family: sans-serif;\n}\n\n.imo-modal {\n  background-color: rgba(61, 70, 77, 0.6);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 20000000;\n}\n\n.imo-list-search,\n.imo-list-container button,\n.imo-modal-container button {\n  font-size: 14px;\n  height: 27px;\n  line-height: 27px;\n}\n\n.imo-list-search {\n  line-height: 22px;\n  border: none;\n  padding: 5px;\n  color: black;\n}\n".toString(),
                        this.getAttribute("style-nonce") && t.setAttribute("nonce", this.getAttribute("style-nonce")),
                        this.shadow.appendChild(t)
                    }
                    this.renderedEl = ye(Q(e, {
                        customElement: this
                    }), this.shadow, this.renderedEl)
                }
            }], [{
                key: "observedAttributes",
                get: function() {
                    return t
                }
            }])
        }(_(HTMLElement))
    }
    window.customElements && !w && (window.customElements.define("import-map-overrides-full", Ae(De, ["show-when-local-storage", "style-nonce", "trigger-position"])),
    window.customElements.define("import-map-overrides-popup", Ae(Le, ["style-nonce"])),
    window.customElements.define("import-map-overrides-list", Ae(Ne, ["style-nonce"])))
}();
//# sourceMappingURL=import-map-overrides.js.map
