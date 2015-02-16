/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */! function (e, t) {
    function n(e) {
        var t = e.length,
            n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = _t[e] = {};
        return ct.each(e.match(ft) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    function i(e, n, r, i) {
        if (ct.acceptData(e)) {
            var o, a, s = ct.expando,
                l = e.nodeType,
                u = l ? ct.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = tt.pop() || ct.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: ct.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ct.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ct.camelCase(n)])) : o = a, o
        }
    }
    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ct.cache : e,
                l = o ? e[ct.expando] : ct.expando;
            if (a[l]) {
                if (t && (r = n ? a[l] : a[l].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in r ? t = [t] : (t = ct.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !ct.isEmptyObject(r)) return
                }(n || (delete a[l].data, s(a[l]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ct, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ct.parseJSON(r) : r
                } catch (o) {}
                ct.data(e, n, r)
            } else r = t
        }
        return r
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    function l() {
        return !0
    }
    function u() {
        return !1
    }
    function c() {
        try {
            return K.activeElement
        } catch (e) {}
    }
    function p(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function f(e, t, n) {
        if (ct.isFunction(t)) return ct.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ct.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (qt.test(t)) return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e, function (e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }
    function h(e) {
        var t = Xt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function m(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }
    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"))
    }
    function v(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, r, i, o = ct._data(e),
                a = ct._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ct.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ct.extend({}, a.data))
        }
    }
    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                i = ct._data(t);
                for (r in i.events) ct.removeEvent(t, r, i.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function w(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ct.nodeName(i, n) ? a.push(i) : ct.merge(a, w(i, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function k(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = _n.length; i--;) if (t = _n[i] + n, t in e) return t;
        return r
    }
    function S(e, t) {
        return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }
    function T(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ct._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && S(r) && (o[a] = ct._data(r, "olddisplay", A(r.nodeName)))) : o[a] || (i = S(r), (n && "none" !== n || !i) && ct._data(r, "olddisplay", i ? n : ct.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ct.css(e, n + Tn[o], !0, i)), r ? ("content" === n && (a -= ct.css(e, "padding" + Tn[o], !0, i)), "margin" !== n && (a -= ct.css(e, "border" + Tn[o] + "Width", !0, i))) : (a += ct.css(e, "padding" + Tn[o], !0, i), "padding" !== n && (a += ct.css(e, "border" + Tn[o] + "Width", !0, i)));
        return a
    }
    function C(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = pn(e),
            a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = fn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ct.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function A(e) {
        var t = K,
            n = xn[e];
        return n || (n = N(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = N(e, t), cn.detach()), xn[e] = n), n
    }
    function N(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body),
            r = ct.css(n[0], "display");
        return n.remove(), r
    }
    function j(e, t, n, r) {
        var i;
        if (ct.isArray(t)) ct.each(t, function (t, i) {
            n || Cn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ct.type(t)) r(e, t);
        else for (i in t) j(e + "[" + i + "]", t[i], n, r)
    }
    function O(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ft) || [];
            if (ct.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function L(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ct.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {}, a = e === Wn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function P(e, n) {
        var r, i, o = ct.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ct.extend(!0, e, r), e
    }
    function D(e, n, r) {
        for (var i, o, a, s, l = e.contents, u = e.dataTypes;
        "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in l) if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0
    }
    function M(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e["throws"]) t = a(t);
            else try {
                t = a(t)
            } catch (p) {
                return {
                    state: "parsererror",
                    error: a ? p : "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function I() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function H() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function B() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ct.now()
    }
    function F(e, t, n) {
        for (var r, i = (or[t] || []).concat(or["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function R(e, t, n) {
        var r, i, o = 0,
            a = ir.length,
            s = ct.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = Zn || B(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: ct.extend({}, t),
                opts: ct.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || B(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); a > o; o++) if (r = ir[o].call(u, e, c, u.opts)) return r;
        return ct.map(c, F, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function $(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ct.camelCase(n), i = t[r], o = e[n], ct.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ct.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function q(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {}, p = e.style,
            f = e.nodeType && S(e),
            h = ct._data(e, "fxshow");
        n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, ct.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], tr.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
            c[r] = h && h[r] || ct.style(e, r)
        }
        if (!ct.isEmptyObject(c)) {
            h ? "hidden" in h && (f = h.hidden) : h = ct._data(e, "fxshow", {}), o && (h.hidden = !f), f ? ct(e).show() : u.done(function () {
                ct(e).hide()
            }), u.done(function () {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c) ct.style(e, t, c[t])
            });
            for (r in c) a = F(f ? h[r] : 0, r, u), r in h || (h[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }
    function W(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Tn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function U(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X, V, J = typeof t,
        Y = e.location,
        K = e.document,
        G = K.documentElement,
        Q = e.jQuery,
        Z = e.$,
        et = {}, tt = [],
        nt = "1.10.2",
        rt = tt.concat,
        it = tt.push,
        ot = tt.slice,
        at = tt.indexOf,
        st = et.toString,
        lt = et.hasOwnProperty,
        ut = nt.trim,
        ct = function (e, t) {
            return new ct.fn.init(e, t, V)
        }, pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ft = /\S+/g,
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        gt = /^[\],:{}\s]*$/,
        yt = /(?:^|:|,)(?:\s*\[)+/g,
        vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        wt = /^-ms-/,
        xt = /-([\da-z])/gi,
        kt = function (e, t) {
            return t.toUpperCase()
        }, St = function (e) {
            (K.addEventListener || "load" === e.type || "complete" === K.readyState) && (Tt(), ct.ready())
        }, Tt = function () {
            K.addEventListener ? (K.removeEventListener("DOMContentLoaded", St, !1), e.removeEventListener("load", St, !1)) : (K.detachEvent("onreadystatechange", St), e.detachEvent("onload", St))
        };
    ct.fn = ct.prototype = {
        jquery: nt,
        constructor: ct,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : dt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), mt.test(i[1]) && ct.isPlainObject(n)) for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = K.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return ot.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = ct.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ct.each(this, e, t)
        },
        ready: function (e) {
            return ct.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(ct.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ct.isPlainObject(r) || (n = ct.isArray(r))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e : []) : a = e && ct.isPlainObject(e) ? e : {}, s[i] = ct.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ct.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === ct && (e.$ = Z), t && e.jQuery === ct && (e.jQuery = Q), ct
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ct.readyWait++ : ct.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                if (!K.body) return setTimeout(ct.ready);
                ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (X.resolveWith(K, [ct]), ct.fn.trigger && ct(K).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === ct.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === ct.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
            try {
                if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (ct.support.ownLast) for (n in e) return lt.call(e, n);
            for (n in e);
            return n === t || lt.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || K;
            var r = mt.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ct.trim(t), t && gt.test(t.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? new Function("return " + t)() : (ct.error("Invalid JSON: " + t), void 0)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && ct.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(wt, "ms-").replace(xt, kt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: ut && !ut.call("﻿� ") ? function (e) {
            return null == e ? "" : ut.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ht, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (at) return at.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
            else for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
            else for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
            return rt.apply([], l)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (r = ot.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(ot.call(arguments)))
            }, i.guid = e.guid = e.guid || ct.guid++, i) : t
        },
        access: function (e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === ct.type(r)) {
                o = !0;
                for (l in r) ct.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, ct.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                return c.call(ct(e), n)
            })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), ct.ready.promise = function (t) {
        if (!X) if (X = ct.Deferred(), "complete" === K.readyState) setTimeout(ct.ready);
        else if (K.addEventListener) K.addEventListener("DOMContentLoaded", St, !1), e.addEventListener("load", St, !1);
        else {
            K.attachEvent("onreadystatechange", St), e.attachEvent("onload", St);
            var n = !1;
            try {
                n = null == e.frameElement && K.documentElement
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!ct.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Tt(), ct.ready()
                }
            }()
        }
        return X.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }), V = ct(K),
    /*!
     * Sizzle CSS Selector Engine v1.10.2
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-07-03
     */
    function (e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, l, u, c, p, d, m;
            if ((t ? t.ownerDocument || t : R) !== L && O(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (D && !r) {
                if (i = bt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && S.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
                }
                if (S.qsa && (!M || !M.test(e))) {
                    if (p = c = F, d = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = f(e), (c = t.getAttribute("id")) ? p = c.replace(kt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                        d = ht.test(e) && t.parentNode || t, m = u.join(",")
                    }
                    if (m) try {
                        return et.apply(n, d.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(ut, "$1"), t, n, r)
        }
        function r() {
            function e(n, r) {
                return t.push(n += " ") > _.cacheLength && delete e[t.shift()], e[n] = r
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[F] = !0, e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) _.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }
        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function p() {}
        function f(e, t) {
            var r, i, o, a, s, l, u, c = W[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = _.preFilter; s;) {
                (!r || (i = pt.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ft.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }), s = s.slice(r.length));
                for (a in _.filter)!(i = yt[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return t ? s.length : s ? n.error(e) : W(e, l).slice(0)
        }
        function h(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = q++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, u, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else for (; t = t[r];) if (1 === t.nodeType || i) if (u = t[F] || (t[F] = {}), (l = u[r]) && l[0] === c) {
                    if ((s = l[1]) === !0 || s === T) return s === !0
                } else if (l = u[r] = [c], l[1] = e(t, n, a) || T, l[1] === !0) return !0
            }
        }
        function m(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }
        function y(e, t, n, r, o, a) {
            return r && !r[F] && (r = y(r)), o && !o[F] && (o = y(o, a)), i(function (i, a, s, l) {
                var u, c, p, f = [],
                    h = [],
                    d = a.length,
                    m = i || w(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : g(m, f, e, s, l),
                    v = n ? o || (i ? e : d || r) ? [] : a : y;
                if (n && n(y, v, s, l), r) for (u = g(v, h), r(u, [], s, l), c = u.length; c--;)(p = u[c]) && (v[h[c]] = !(y[h[c]] = p));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = v.length; c--;)(p = v[c]) && u.push(y[c] = p);
                            o(null, v = [], u, l)
                        }
                        for (c = v.length; c--;)(p = v[c]) && (u = o ? nt.call(i, p) : f[c]) > -1 && (i[u] = !(a[u] = p))
                    }
                } else v = g(v === a ? v.splice(d, v.length) : v), o ? o(null, a, v, l) : et.apply(a, v)
            })
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = d(function (e) {
                return e === t
            }, a, !0), u = d(function (e) {
                return nt.call(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                return !o && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
            }]; i > s; s++) if (n = _.relative[e[s].type]) c = [d(m(c), n)];
            else {
                if (n = _.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                    for (r = ++s; i > r && !_.relative[e[r].type]; r++);
                    return y(s > 1 && m(c), s > 1 && h(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(ut, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && h(e))
                }
                c.push(n)
            }
            return m(c)
        }
        function b(e, t) {
            var r = 0,
                o = t.length > 0,
                a = e.length > 0,
                s = function (i, s, l, u, c) {
                    var p, f, h, d = [],
                        m = 0,
                        y = "0",
                        v = i && [],
                        b = null != c,
                        w = N,
                        x = i || a && _.find.TAG("*", c && s.parentNode || s),
                        k = $ += null == w ? 1 : Math.random() || .1;
                    for (b && (N = s !== L && s, T = r); null != (p = x[y]); y++) {
                        if (a && p) {
                            for (f = 0; h = e[f++];) if (h(p, s, l)) {
                                u.push(p);
                                break
                            }
                            b && ($ = k, T = ++r)
                        }
                        o && ((p = !h && p) && m--, i && v.push(p))
                    }
                    if (m += y, o && y !== m) {
                        for (f = 0; h = t[f++];) h(v, d, s, l);
                        if (i) {
                            if (m > 0) for (; y--;) v[y] || d[y] || (d[y] = Q.call(u));
                            d = g(d)
                        }
                        et.apply(u, d), b && !i && d.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                    }
                    return b && ($ = k, N = w), v
                };
            return o ? i(s) : s
        }
        function w(e, t, r) {
            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
            return r
        }
        function x(e, t, n, r) {
            var i, o, a, s, l, u = f(e);
            if (!r && 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && S.getById && 9 === t.nodeType && D && _.relative[o[1].type]) {
                    if (t = (_.find.ID(a.matches[0].replace(St, Tt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = yt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);) if ((l = _.find[s]) && (r = l(a.matches[0].replace(St, Tt), ht.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && h(o), !e) return et.apply(n, r), n;
                    break
                }
            }
            return A(e, u)(r, t, !D, n, ht.test(e)), n
        }
        var k, S, T, _, E, C, A, N, j, O, L, P, D, M, I, H, B, F = "sizzle" + -new Date,
            R = e.document,
            $ = 0,
            q = 0,
            z = r(),
            W = r(),
            U = r(),
            X = !1,
            V = function (e, t) {
                return e === t ? (X = !0, 0) : 0
            }, J = typeof t,
            Y = 1 << 31,
            K = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            Z = G.push,
            et = G.push,
            tt = G.slice,
            nt = G.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                return -1
            }, rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = ot.replace("w", "w#"),
            st = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
            lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
            ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            pt = new RegExp("^" + it + "*," + it + "*"),
            ft = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp(it + "*[+~]"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
            mt = new RegExp(lt),
            gt = new RegExp("^" + at + "$"),
            yt = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + lt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + rt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, vt = /^[^{]+\{\s*\[native \w/,
            bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wt = /^(?:input|select|textarea|button)$/i,
            xt = /^h\d$/i,
            kt = /'|\\/g,
            St = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            Tt = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            et.apply(G = tt.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
        } catch (_t) {
            et = {
                apply: G.length ? function (e, t) {
                    Z.apply(e, tt.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        C = n.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, S = n.support = {}, O = n.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : R,
                n = t.defaultView;
            return t !== L && 9 === t.nodeType && t.documentElement ? (L = t, P = t.documentElement, D = !C(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                O()
            }), S.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), S.getElementsByTagName = o(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), S.getElementsByClassName = o(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), S.getById = o(function (e) {
                return P.appendChild(e).id = F, !t.getElementsByName || !t.getElementsByName(F).length
            }), S.getById ? (_.find.ID = function (e, t) {
                if (typeof t.getElementById !== J && D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(St, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function (e) {
                var t = e.replace(St, Tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = S.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== J ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.CLASS = S.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== J && D ? t.getElementsByClassName(e) : void 0
            }, I = [], M = [], (S.qsa = vt.test(t.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), o(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (S.matchesSelector = vt.test(H = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (e) {
                S.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), I.push("!=", lt)
            }), M = M.length && new RegExp(M.join("|")), I = I.length && new RegExp(I.join("|")), B = vt.test(P.contains) || P.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, V = P.compareDocumentPosition ? function (e, n) {
                if (e === n) return X = !0, 0;
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? 1 & r || !S.sortDetached && n.compareDocumentPosition(e) === r ? e === t || B(R, e) ? -1 : n === t || B(R, n) ? 1 : j ? nt.call(j, e) - nt.call(j, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0,
                    o = e.parentNode,
                    a = n.parentNode,
                    l = [e],
                    u = [n];
                if (e === n) return X = !0, 0;
                if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : j ? nt.call(j, e) - nt.call(j, n) : 0;
                if (o === a) return s(e, n);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = n; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? s(l[i], u[i]) : l[i] === R ? -1 : u[i] === R ? 1 : 0
            }, t) : L
        }, n.matches = function (e, t) {
            return n(e, null, null, t)
        }, n.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== L && O(e), t = t.replace(dt, "='$1']"), !(!S.matchesSelector || !D || I && I.test(t) || M && M.test(t))) try {
                var r = H.call(e, t);
                if (r || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return n(t, L, null, [e]).length > 0
        }, n.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && O(e), B(e, t)
        }, n.attr = function (e, n) {
            (e.ownerDocument || e) !== L && O(e);
            var r = _.attrHandle[n.toLowerCase()],
                i = r && K.call(_.attrHandle, n.toLowerCase()) ? r(e, n, !D) : t;
            return i === t ? S.attributes || !D ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
        }, n.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, n.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (X = !S.detectDuplicates, j = !S.sortStable && e.slice(0), e.sort(V), X) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return e
        }, E = n.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += E(t);
            return n
        }, _ = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(St, Tt), e[3] = (e[4] || e[5] || "").replace(St, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = f(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(St, Tt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, r) {
                    return function (i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, f, h, d, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    d = m = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [a ? g.firstChild : g.lastChild], a && v) {
                                for (c = g[F] || (g[F] = {}), u = c[e] || [], h = u[0] === $ && u[1], f = u[0] === $ && u[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (f = h = 0) || d.pop();) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [$, h, f];
                                    break
                                }
                            } else if (v && (u = (t[F] || (t[F] = {}))[e]) && u[0] === $) f = u[1];
                            else for (;
                            (p = ++h && p && p[m] || (f = h = 0) || d.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[F] || (p[F] = {}))[e] = [$, f]), p !== t)););
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[F] ? o(t) : o.length > 1 ? (r = [e, e, "", t], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var r, i = o(e, t), a = i.length; a--;) r = nt.call(e, i[a]), e[r] = !(n[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = A(e.replace(ut, "$1"));
                    return r[F] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(St, Tt).toLowerCase(),
                    function (t) {
                        var n;
                        do if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === P
                },
                focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !_.pseudos.empty(e)
                },
                header: function (e) {
                    return xt.test(e.nodeName)
                },
                input: function (e) {
                    return wt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (k in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[k] = l(k);
        for (k in {
            submit: !0,
            reset: !0
        }) _.pseudos[k] = u(k);
        p.prototype = _.filters = _.pseudos, _.setFilters = new p, A = n.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) o = v(t[n]), o[F] ? r.push(o) : i.push(o);
                o = U(e, b(i, r))
            }
            return o
        }, S.sortStable = F.split("").sort(V).join("") === F, S.detectDuplicates = X, O(), S.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), S.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(rt, function (e, t, n) {
            var r;
            return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
    }(e);
    var _t = {};
    ct.Callbacks = function (e) {
        e = "string" == typeof e ? _t[e] || r(e) : ct.extend({}, e);
        var n, i, o, a, s, l, u = [],
            c = !e.once && [],
            p = function (t) {
                for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++) if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    i = !1;
                    break
                }
                n = !1, u && (c ? c.length && p(c.shift()) : i ? u = [] : f.disable())
            }, f = {
                add: function () {
                    if (u) {
                        var t = u.length;
                        ! function r(t) {
                            ct.each(t, function (t, n) {
                                var i = ct.type(n);
                                "function" === i ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? a = u.length : i && (l = t, p(i))
                    }
                    return this
                },
                remove: function () {
                    return u && ct.each(arguments, function (e, t) {
                        for (var r;
                        (r = ct.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function (e) {
                    return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], a = 0, this
                },
                disable: function () {
                    return u = c = i = t, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = t, i || f.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : p(t)), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, ct.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ct.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ct.Deferred(function (n) {
                            ct.each(t, function (t, o) {
                                var a = o[0],
                                    s = ct.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ct.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, ct.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = ot.call(arguments),
                a = o.length,
                s = 1 !== a || e && ct.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ct.Deferred(),
                u = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), ct.support = function (t) {
        var n, r, i, o, a, s, l, u, c, p = K.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = K.createElement("select"), s = o.appendChild(K.createElement("option")), i = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !! p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! i.value, t.optSelected = s.selected, t.enctype = !! K.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete p.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = K.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = K.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
        for (c in ct(t)) break;
        return t.ownLast = "0" !== c, ct(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = K.getElementsByTagName("body")[0];
            a && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = p.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === p.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(K.createElement("div")), r.style.cssText = p.style.cssText = o, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== J && (p.innerHTML = "", p.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ct = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !! e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ct.fn.extend({
        data: function (e, n) {
            var r, i, o = null,
                s = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; s < r.length; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ct.camelCase(i.slice(5)), a(l, i, o[i]));
                    ct._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ct.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ct.data(this, e, n)
            }) : l ? a(l, e, ct.data(l, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                ct.removeData(this, e)
            })
        }
    }), ct.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ct._data(e, t), n && (!r || ct.isArray(n) ? r = ct._data(e, t, ct.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ct.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ct._queueHooks(e, t),
                a = function () {
                    ct.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {
                empty: ct.Callbacks("once memory").add(function () {
                    ct._removeData(e, t + "queue"), ct._removeData(e, n)
                })
            })
        }
    }), ct.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ct.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = ct.Deferred(),
                a = this,
                s = this.length,
                l = function () {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ct._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var At, Nt, jt = /[\t\r\n\f]/g,
        Ot = /\r/g,
        Lt = /^(?:input|select|textarea|button|object)$/i,
        Pt = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected)$/i,
        Mt = ct.support.getSetAttribute,
        It = ct.support.input;
    ct.fn.extend({
        attr: function (e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ct.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ct.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ft) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ct.trim(r)
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ft) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                n.className = e ? ct.trim(r) : ""
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function (n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) for (var t, r = 0, i = ct(this), o = e.match(ft) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === J || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = ct.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Ot, "") : null == n ? "" : n)
            }
        }
    }), ct.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ct.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ct(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ct.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ct.inArray(ct(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === J ? ct.prop(e, n, r) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), i = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? Nt : At)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), void 0))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(ft);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? It && Mt || !Dt.test(n) ? e[r] = !1 : e[ct.camelCase("default-" + n)] = e[r] = !1 : ct.attr(e, n, ""), e.removeAttribute(Mt ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Nt = {
        set: function (e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : It && Mt || !Dt.test(n) ? e.setAttribute(!Mt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = It && Mt || !Dt.test(n) ? function (e, n, i) {
            var o = ct.expr.attrHandle[n],
                a = i ? t : (ct.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), It && Mt || (ct.attrHooks.value = {
        set: function (e, t, n) {
            return ct.nodeName(e, "input") ? (e.defaultValue = t, void 0) : At && At.set(e, t, n)
        }
    }), Mt || (At = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ct.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: At.set
    }, ct.attrHooks.contenteditable = {
        set: function (e, t, n) {
            At.set(e, "" === t ? !1 : t, n)
        }
    }, ct.each(["width", "height"], function (e, t) {
        ct.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
        ct.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ct.support.style || (ct.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ct.support.optSelected || (ct.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function () {
        ct.valHooks[this] = {
            set: function (e, t) {
                return ct.isArray(t) ? e.checked = ct.inArray(ct(e).val(), t) >= 0 : void 0
            }
        }, ct.support.checkOn || (ct.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ht = /^(?:input|select|textarea)$/i,
        Bt = /^key/,
        Ft = /^(?:mouse|contextmenu)|click/,
        Rt = /^(?:focusinfocus|focusoutblur)$/,
        $t = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, l, u, c, p, f, h, d, m, g, y = ct._data(e);
            if (y) {
                for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ct.guid++), (s = y.events) || (s = y.events = {}), (p = y.handle) || (p = y.handle = function (e) {
                    return typeof ct === J || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(p.elem, arguments)
                }, p.elem = e), n = (n || "").match(ft) || [""], l = n.length; l--;) a = $t.exec(n[l]) || [], d = g = a[1], m = (a[2] || "").split(".").sort(), d && (c = ct.event.special[d] || {}, d = (o ? c.delegateType : c.bindType) || d, c = ct.event.special[d] || {}, f = ct.extend({
                    type: d,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, u), (h = s[d]) || (h = s[d] = [], h.delegateCount = 0, c.setup && c.setup.call(e, i, m, p) !== !1 || (e.addEventListener ? e.addEventListener(d, p, !1) : e.attachEvent && e.attachEvent("on" + d, p))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? h.splice(h.delegateCount++, 0, f) : h.push(f), ct.event.global[d] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, h, d, m, g = ct.hasData(e) && ct._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(ft) || [""], u = t.length; u--;) if (s = $t.exec(t[u]) || [], h = m = s[1], d = (s[2] || "").split(".").sort(), h) {
                    for (p = ct.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, d, g.handle) !== !1 || ct.removeEvent(e, h, g.handle), delete c[h])
                } else for (h in c) ct.event.remove(e, h + t[u], n, r, !0);
                ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, l, u, c, p, f, h = [i || K],
                d = lt.call(n, "type") ? n.type : n,
                m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = p = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !Rt.test(d + ct.event.triggered) && (d.indexOf(".") >= 0 && (m = d.split("."), d = m.shift(), m.sort()), s = d.indexOf(":") < 0 && "on" + d, n = n[ct.expando] ? n : new ct.Event(d, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ct.makeArray(r, [n]), c = ct.event.special[d] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(i)) {
                    for (u = c.delegateType || d, Rt.test(u + d) || (l = l.parentNode); l; l = l.parentNode) h.push(l), p = l;
                    p === (i.ownerDocument || K) && h.push(p.defaultView || p.parentWindow || e)
                }
                for (f = 0;
                (l = h[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? u : c.bindType || d, a = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && ct.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = d, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), r) === !1) && ct.acceptData(i) && s && i[d] && !ct.isWindow(i)) {
                    p = i[s], p && (i[s] = null), ct.event.triggered = d;
                    try {
                        i[d]()
                    } catch (g) {}
                    ct.event.triggered = t, p && (i[s] = p)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ct.event.fix(e);
            var n, r, i, o, a, s = [],
                l = ot.call(arguments),
                u = (ct._data(this, "events") || {})[e.type] || [],
                c = ct.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ct.event.handlers.call(this, e, u), n = 0;
                (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0;
                (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ct(r, this).index(u) >= 0 : ct.find(r, this, null, [u]).length), o[r] && o.push(i);
                o.length && s.push({
                    elem: u,
                    handlers: o
                })
            }
            return l < n.length && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function (e) {
            if (e[ct.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ft.test(i) ? this.mouseHooks : Bt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || K), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || K, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return ct.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ct.extend(new ct.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ct.removeEvent = K.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
    }, ct.Event = function (e, t) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && ct.extend(this, t), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, void 0) : new ct.Event(e, t)
    }, ct.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ct.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ct.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ct.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ct._data(r, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), void 0)
        }
    }), ct.support.changeBubbles || (ct.event.special.change = {
        setup: function () {
            return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ht.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ct.event.remove(this, "._change"), !Ht.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                ct.event.simulate(t, e.target, ct.event.fix(e), !0)
            };
        ct.event.special[t] = {
            setup: function () {
                0 === n++ && K.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && K.removeEventListener(e, r, !0)
            }
        }
    }), ct.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return ct().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ct.guid++)), this.each(function () {
                ct.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = u), this.each(function () {
                ct.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ct.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ct.event.trigger(e, t, n, !0) : void 0
        }
    });
    var qt = /^.[^:#\[\.,]*$/,
        zt = /^(?:parents|prev(?:Until|All))/,
        Wt = ct.expr.match.needsContext,
        Ut = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ct.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ct(e).filter(function () {
                for (t = 0; i > t; t++) if (ct.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ct.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = ct(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (ct.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(f(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(f(this, e || [], !1))
        },
        is: function (e) {
            return !!f(this, "string" == typeof e && Wt.test(e) ? ct(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Wt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ct.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                r = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ct.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ct.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ct.dir(e, "parentNode", n)
        },
        next: function (e) {
            return p(e, "nextSibling")
        },
        prev: function (e) {
            return p(e, "previousSibling")
        },
        nextAll: function (e) {
            return ct.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ct.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ct.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ct.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ct.sibling(e.firstChild)
        },
        contents: function (e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
        }
    }, function (e, t) {
        ct.fn[e] = function (n, r) {
            var i = ct.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ct.filter(r, i)), this.length > 1 && (Ut[e] || (i = ct.unique(i)), zt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ct.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ct.find.matchesSelector(r, e) ? [r] : [] : ct.find.matches(e, ct.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vt = / jQuery\d+="(?:null|\d+)"/g,
        Jt = new RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
        Yt = /^\s+/,
        Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Gt = /<([\w:]+)/,
        Qt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ln = h(K),
        un = ln.appendChild(K.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({
        text: function (e) {
            return ct.access(this, function (e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? ct.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ct.cleanData(w(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ct.clone(this, e, t)
            })
        },
        html: function (e) {
            return ct.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Jt.test(e) || !ct.support.leadingWhitespace && Yt.test(e) || sn[(Gt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Kt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ct.cleanData(w(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = ct.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ct(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = rt.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                d = ct.isFunction(h);
            if (d || !(1 >= c || "string" != typeof h || ct.support.checkClone) && nn.test(h)) return this.each(function (r) {
                var i = p.eq(r);
                d && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = ct.map(w(l, "script"), m), o = a.length; c > u; u++) i = l, u !== f && (i = ct.clone(i, !0, !0), o && ct.merge(a, w(i, "script"))), t.call(this[u], i, u);
                if (o) for (s = a[a.length - 1].ownerDocument, ct.map(a, g), u = 0; o > u; u++) i = a[u], rn.test(i.type || "") && !ct._data(i, "globalEval") && ct.contains(s, i) && (i.src ? ct._evalUrl(i.src) : ct.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                l = r = null
            }
            return this
        }
    }), ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ct.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ct(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ct(o[r])[t](n), it.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ct.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(o = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e))) for (r = w(o), s = w(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t) if (n) for (s = s || w(e), r = r || w(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
            else v(e, o);
            return r = w(o, "script"), r.length > 0 && y(r, !l && w(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, l, u, c, p = e.length, f = h(t), d = [], m = 0; p > m; m++) if (o = e[m], o || 0 === o) if ("object" === ct.type(o)) ct.merge(d, o.nodeType ? [o] : o);
            else if (Zt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Gt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + o.replace(Kt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ct.support.leadingWhitespace && Yt.test(o) && d.push(t.createTextNode(Yt.exec(o)[0])), !ct.support.tbody) for (o = "table" !== l || Qt.test(o) ? "<table>" !== c[1] || Qt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ct.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ct.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            for (s && f.removeChild(s), ct.support.appendChecked || ct.grep(w(d, "input"), x), m = 0; o = d[m++];) if ((!r || -1 === ct.inArray(o, r)) && (a = ct.contains(o.ownerDocument, o), s = w(f.appendChild(o), "script"), a && y(s), n)) for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[a]); a++) if ((t || ct.acceptData(n)) && (i = n[s], o = i && l[i])) {
                if (o.events) for (r in o.events) c[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
                l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== J ? n.removeAttribute(s) : n[s] = null, tt.push(i))
            }
        },
        _evalUrl: function (e) {
            return ct.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ct.fn.extend({
        wrapAll: function (e) {
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return ct.isFunction(e) ? this.each(function (t) {
                ct(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ct(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ct.isFunction(e);
            return this.each(function (n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, pn, fn, hn = /alpha\([^)]*\)/i,
        dn = /opacity\s*=\s*([^)]*)/,
        mn = /^(top|right|bottom|left)$/,
        gn = /^(none|table(?!-c[ea]).+)/,
        yn = /^margin/,
        vn = new RegExp("^(" + pt + ")(.*)$", "i"),
        bn = new RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
        wn = new RegExp("^([+-])=(" + pt + ")", "i"),
        xn = {
            BODY: "block"
        }, kn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Sn = {
            letterSpacing: 0,
            fontWeight: 400
        }, Tn = ["Top", "Right", "Bottom", "Left"],
        _n = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function (e, n) {
            return ct.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ct.isArray(n)) {
                    for (o = pn(e), i = n.length; i > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ct.style(e, n, r) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return T(this, !0)
        },
        hide: function () {
            return T(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                S(this) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = fn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = ct.camelCase(n),
                    u = e.style;
                if (n = ct.cssProps[l] || (ct.cssProps[l] = k(u, l)), s = ct.cssHooks[n] || ct.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = wn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ct.cssNumber[l] || (r += "px"), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, l = ct.camelCase(n);
            return n = ct.cssProps[l] || (ct.cssProps[l] = k(e.style, l)), s = ct.cssHooks[n] || ct.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = fn(e, n, i)), "normal" === a && n in Sn && (a = Sn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ct.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (pn = function (t) {
        return e.getComputedStyle(t, null)
    }, fn = function (e, n, r) {
        var i, o, a, s = r || pn(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), bn.test(l) && yn.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : K.documentElement.currentStyle && (pn = function (e) {
        return e.currentStyle
    }, fn = function (e, n, r) {
        var i, o, a, s = r || pn(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), ct.each(["height", "width"], function (e, t) {
        ct.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, kn, function () {
                    return C(e, t, r)
                }) : C(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i = r && pn(e);
                return _(e, n, r ? E(e, t, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function (e, t) {
            return dn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(hn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = hn.test(o) ? o.replace(hn, i) : o + " " + i)
        }
    }), ct(function () {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function (e, t) {
                return t ? ct.swap(e, {
                    display: "inline-block"
                }, fn, [e, "marginRight"]) : void 0
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, t) {
            ct.cssHooks[t] = {
                get: function (e, n) {
                    return n ? (n = fn(e, t), bn.test(n) ? ct(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function (e) {
        return !ct.expr.filters.hidden(e)
    }), ct.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ct.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, yn.test(e) || (ct.cssHooks[e + t].set = _)
    });
    var En = /%20/g,
        Cn = /\[\]$/,
        An = /\r?\n/g,
        Nn = /^(?:submit|button|image|reset|file)$/i,
        jn = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function () {
            return ct.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && jn.test(this.nodeName) && !Nn.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }), ct.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = ct.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () {
            o(this.name, this.value)
        });
        else for (r in e) j(r, e[r], n, o);
        return i.join("&").replace(En, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ct.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ct.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var On, Ln, Pn = ct.now(),
        Dn = /\?/,
        Mn = /#.*$/,
        In = /([?&])_=[^&]*/,
        Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fn = /^(?:GET|HEAD)$/,
        Rn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qn = ct.fn.load,
        zn = {}, Wn = {}, Un = "*/".concat("*");
    try {
        Ln = Y.href
    } catch (Xn) {
        Ln = K.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    On = $n.exec(Ln.toLowerCase()) || [], ct.fn.load = function (e, n, r) {
        if ("string" != typeof e && qn) return qn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ct.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ct.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ln,
            type: "GET",
            isLocal: Bn.test(On[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Un,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ct.parseJSON,
                "text xml": ct.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? P(P(e, ct.ajaxSettings), t) : P(ct.ajaxSettings, e)
        },
        ajaxPrefilter: O(zn),
        ajaxTransport: O(Wn),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, p, v, b, x, S = n;
                2 !== w && (w = 2, l && clearTimeout(l), c = t, s = i || "", k.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = D(f, k, r)), b = M(f, b, k, o), o ? (f.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ct.lastModified[a] = x), x = k.getResponseHeader("etag"), x && (ct.etag[a] = x)), 204 === e || "HEAD" === f.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, p = b.data, v = b.error, o = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || S) + "", o ? m.resolveWith(h, [p, S, k]) : m.rejectWith(h, [k, S, v]), k.statusCode(y), y = t, u && d.trigger(o ? "ajaxSuccess" : "ajaxError", [k, f, o ? p : v]), g.fireWith(h, [k, S]), u && (d.trigger("ajaxComplete", [k, f]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, u, c, p, f = ct.ajaxSetup({}, n),
                h = f.context || f,
                d = f.context && (h.nodeType || h.jquery) ? ct(h) : ct.event,
                m = ct.Deferred(),
                g = ct.Callbacks("once memory"),
                y = f.statusCode || {}, v = {}, b = {}, w = 0,
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!p) for (p = {}; t = Hn.exec(s);) p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e) if (2 > w) for (t in e) y[t] = [y[t], e[t]];
                        else k.always(e[k.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || Ln) + "").replace(Mn, "").replace(Rn, On[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(ft) || [""], null == f.crossDomain && (i = $n.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === On[1] && i[2] === On[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), L(zn, f, n, k), 2 === w) return k;
            u = f.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Fn.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Dn.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = In.test(a) ? a.replace(In, "$1_=" + Pn++) : a + (Dn.test(a) ? "&" : "?") + "_=" + Pn++)), f.ifModified && (ct.lastModified[a] && k.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && k.setRequestHeader("If-None-Match", ct.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) k.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(h, k, f) === !1 || 2 === w)) return k.abort();
            x = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) k[o](f[o]);
            if (c = L(Wn, f, n, k)) {
                k.readyState = 1, u && d.trigger("ajaxSend", [k, f]), f.async && f.timeout > 0 && (l = setTimeout(function () {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, c.send(v, r)
                } catch (S) {
                    if (!(2 > w)) throw S;
                    r(-1, S)
                }
            } else r(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ct.get(e, t, n, "script")
        }
    }), ct.each(["get", "post"], function (e, n) {
        ct[n] = function (e, r, i, o) {
            return ct.isFunction(r) && (o = o || i, i = r, r = t), ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ct.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ct.globalEval(e), e
            }
        }
    }), ct.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = K.head || ct("head")[0] || K.documentElement;
            return {
                send: function (t, i) {
                    n = K.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [],
        Jn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vn.pop() || ct.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), ct.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Jn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Jn, "$1" + o) : n.jsonp !== !1 && (n.url += (Dn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ct.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), s && ct.isFunction(a) && a(s[0]), s = a = t
        }), "script") : void 0
    });
    var Yn, Kn, Gn = 0,
        Qn = e.ActiveXObject && function () {
            var e;
            for (e in Yn) Yn[e](t, !0)
        };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && I() || H()
    } : I, Kn = ct.ajaxSettings.xhr(), ct.support.cors = !! Kn && "withCredentials" in Kn, Kn = ct.support.ajax = !! Kn, Kn && ct.ajaxTransport(function (n) {
        if (!n.crossDomain || ct.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = ct.noop, Qn && delete Yn[a]), i) 4 !== l.readyState && l.abort();
                            else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        } catch (h) {
                            i || o(-1, h)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Gn, Qn && (Yn || (Yn = {}, ct(e).unload(Qn)), Yn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
        nr = new RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
        rr = /queueHooks$/,
        ir = [q],
        or = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nr.exec(t),
                    o = i && i[3] || (ct.cssNumber[e] ? "" : "px"),
                    a = (ct.cssNumber[e] || "px" !== o && +r) && nr.exec(ct.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ct.style(n.elem, e, a + o);
                    while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ct.Animation = ct.extend(R, {
        tweener: function (e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ct.Tween = z, z.prototype = {
        constructor: z,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ct.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = z.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ct.each(["toggle", "show", "hide"], function (e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }), ct.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = ct.isEmptyObject(e),
                o = ct.speed(t, n, r),
                a = function () {
                    var t = R(this, ct.extend({}, e), o);
                    (i || ct._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ct.timers,
                    a = ct._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ct.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ct._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ct.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ct.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ct.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ct.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ct.extend({}, e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return r.duration = ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ct.isFunction(r.old) && r.old.call(this), r.queue && ct.dequeue(this, r.queue)
        }, r
    }, ct.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = z.prototype.init, ct.fx.tick = function () {
        var e, n = ct.timers,
            r = 0;
        for (Zn = ct.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function (e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function () {
        er || (er = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function () {
        clearInterval(er), er = null
    }, ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) {
        return ct.grep(ct.timers, function (t) {
            return e === t.elem
        }).length
    }), ct.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ct.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        }, o = this[0],
            a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== J && (i = o.getBoundingClientRect()), r = U(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ct.offset = {
        setOffset: function (e, t, n) {
            var r = ct.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ct(e),
                s = a.offset(),
                l = ct.css(e, "top"),
                u = ct.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ct.inArray("auto", [l, u]) > -1,
                p = {}, f = {};
            c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + i), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : a.css(p)
        }
    }, ct.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === ct.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ct.css(r, "marginTop", !0),
                    left: t.left - n.left - ct.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || G; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                return e || G
            })
        }
    }), ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        ct.fn[e] = function (i) {
            return ct.access(this, function (e, i, o) {
                var a = U(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ct(a).scrollLeft() : o, r ? o : ct(a).scrollTop()) : e[i] = o, void 0)
            }, e, i, arguments.length, null)
        }
    }), ct.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        ct.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            ct.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ct.access(this, function (n, r, i) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, s) : ct.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), ct.fn.size = function () {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ct
    }))
}(window),
function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, r = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (r) {
            var i, o, a, s, l, u, c, p;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("cross-domain"), l = s === t ? null : s, u = r.data("with-credentials") || null, c = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                    i = r.attr("method"), o = r.attr("action"), a = r.serializeArray();
                    var f = r.data("ujs:submit-button");
                    f && (a.push(f), r.data("ujs:submit-button", null))
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                p = {
                    type: i || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },
                    complete: function (e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: l
                }, u && (p.xhrFields = {
                    withCredentials: u
                }), o && (p.url = o);
                var h = n.ajax(p);
                return r.trigger("ajax:send", h), h
            }
            return !1
        },
        handleMethod: function (r) {
            var i = n.href(r),
                o = r.data("method"),
                a = r.attr("target"),
                s = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                u = e('<form method="post" action="' + i + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== t && s !== t && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        disableFormElements: function (t) {
            t.find(n.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(n.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t, r = e.data("confirm"),
                i = !1;
            return r ? (n.fire(e, "confirm") && (i = n.confirm(r), t = n.fire(e, "confirm:complete", [i])), i && t) : !0
        },
        blankInputs: function (t, n, r) {
            var i, o, a = e(),
                s = n || "input,textarea",
                l = t.find(s);
            return l.each(function () {
                if (i = e(this), o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !o == !r) {
                    if (i.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length) return !0;
                    a = a.add(i)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), r.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), r.delegate(n.linkClickSelector, "click.rails", function (r) {
        var i = e(this),
            o = i.data("method"),
            a = i.data("params");
        if (!n.allowAction(i)) return n.stopEverything(r);
        if (i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== t) {
            if (!(!r.metaKey && !r.ctrlKey || o && "GET" !== o || a)) return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.error(function () {
                n.enableElement(i)
            }), !1
        }
        return i.data("method") ? (n.handleMethod(i), !1) : void 0
    }), r.delegate(n.buttonClickSelector, "click.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), r.delegate(n.inputChangeSelector, "change.rails", function (t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), r.delegate(n.formSubmitSelector, "submit.rails", function (r) {
        var i = e(this),
            o = i.data("remote") !== t,
            a = n.blankInputs(i, n.requiredInputSelector),
            s = n.nonBlankInputs(i, n.fileInputSelector);
        if (!n.allowAction(i)) return n.stopEverything(r);
        if (a && i.attr("novalidate") == t && n.fire(i, "ajax:aborted:required", [a])) return n.stopEverything(r);
        if (o) {
            if (s) {
                setTimeout(function () {
                    n.disableFormElements(i)
                }, 13);
                var l = n.fire(i, "ajax:aborted:file", [s]);
                return l || setTimeout(function () {
                    n.enableFormElements(i)
                }, 13), l
            }
            return n.handleRemote(i), !1
        }
        setTimeout(function () {
            n.disableFormElements(i)
        }, 13)
    }), r.delegate(n.formInputClickSelector, "click.rails", function (t) {
        var r = e(this);
        if (!n.allowAction(r)) return n.stopEverything(t);
        var i = r.attr("name"),
            o = i ? {
                name: i,
                value: r.val()
            } : null;
        r.closest("form").data("ujs:submit-button", o)
    }), r.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && n.disableFormElements(e(this))
    }), r.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery),
function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        a = r.push,
        s = r.slice,
        l = r.concat,
        u = i.toString,
        c = i.hasOwnProperty,
        p = r.forEach,
        f = r.map,
        h = r.reduce,
        d = r.reduceRight,
        m = r.filter,
        g = r.every,
        y = r.some,
        v = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        x = Object.keys,
        k = o.bind,
        S = function (e) {
            return e instanceof S ? e : this instanceof S ? (this._wrapped = e, void 0) : new S(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = S), exports._ = S) : e._ = S, S.VERSION = "1.5.2";
    var T = S.each = S.forEach = function (e, t, r) {
        if (null != e) if (p && e.forEach === p) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++) if (t.call(r, e[i], i, e) === n) return
        } else for (var a = S.keys(e), i = 0, o = a.length; o > i; i++) if (t.call(r, e[a[i]], a[i], e) === n) return
    };
    S.map = S.collect = function (e, t, n) {
        var r = [];
        return null == e ? r : f && e.map === f ? e.map(t, n) : (T(e, function (e, i, o) {
            r.push(t.call(n, e, i, o))
        }), r)
    };
    var _ = "Reduce of empty array with no initial value";
    S.reduce = S.foldl = S.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduce === h) return r && (t = S.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function (e, o, a) {
            i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
        }), !i) throw new TypeError(_);
        return n
    }, S.reduceRight = S.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = S.keys(e);
            o = a.length
        }
        if (T(e, function (s, l, u) {
            l = a ? a[--o] : --o, i ? n = t.call(r, n, e[l], l, u) : (n = e[l], i = !0)
        }), !i) throw new TypeError(_);
        return n
    }, S.find = S.detect = function (e, t, n) {
        var r;
        return E(e, function (e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0
        }), r
    }, S.filter = S.select = function (e, t, n) {
        var r = [];
        return null == e ? r : m && e.filter === m ? e.filter(t, n) : (T(e, function (e, i, o) {
            t.call(n, e, i, o) && r.push(e)
        }), r)
    }, S.reject = function (e, t, n) {
        return S.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, S.every = S.all = function (e, t, r) {
        t || (t = S.identity);
        var i = !0;
        return null == e ? i : g && e.every === g ? e.every(t, r) : (T(e, function (e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 : n
        }), !! i)
    };
    var E = S.some = S.any = function (e, t, r) {
        t || (t = S.identity);
        var i = !1;
        return null == e ? i : y && e.some === y ? e.some(t, r) : (T(e, function (e, o, a) {
            return i || (i = t.call(r, e, o, a)) ? n : void 0
        }), !! i)
    };
    S.contains = S.include = function (e, t) {
        return null == e ? !1 : v && e.indexOf === v ? -1 != e.indexOf(t) : E(e, function (e) {
            return e === t
        })
    }, S.invoke = function (e, t) {
        var n = s.call(arguments, 2),
            r = S.isFunction(t);
        return S.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, S.pluck = function (e, t) {
        return S.map(e, function (e) {
            return e[t]
        })
    }, S.where = function (e, t, n) {
        return S.isEmpty(t) ? n ? void 0 : [] : S[n ? "find" : "filter"](e, function (e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0
        })
    }, S.findWhere = function (e, t) {
        return S.where(e, t, !0)
    }, S.max = function (e, t, n) {
        if (!t && S.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && S.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function (e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a > r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, S.min = function (e, t, n) {
        if (!t && S.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && S.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function (e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a < r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, S.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = S.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, S.sample = function (e, t, n) {
        return arguments.length < 2 || n ? e[S.random(e.length - 1)] : S.shuffle(e).slice(0, Math.max(0, t))
    };
    var C = function (e) {
        return S.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    S.sortBy = function (e, t, n) {
        var r = C(t);
        return S.pluck(S.map(e, function (e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var A = function (e) {
        return function (t, n, r) {
            var i = {}, o = null == n ? S.identity : C(n);
            return T(t, function (n, a) {
                var s = o.call(r, n, a, t);
                e(i, s, n)
            }), i
        }
    };
    S.groupBy = A(function (e, t, n) {
        (S.has(e, t) ? e[t] : e[t] = []).push(n)
    }), S.indexBy = A(function (e, t, n) {
        e[t] = n
    }), S.countBy = A(function (e, t) {
        S.has(e, t) ? e[t]++ : e[t] = 1
    }), S.sortedIndex = function (e, t, n, r) {
        n = null == n ? S.identity : C(n);
        for (var i = n.call(r, t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            n.call(r, e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, S.toArray = function (e) {
        return e ? S.isArray(e) ? s.call(e) : e.length === +e.length ? S.map(e, S.identity) : S.values(e) : []
    }, S.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : S.keys(e).length
    }, S.first = S.head = S.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
    }, S.initial = function (e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, S.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, S.rest = S.tail = S.drop = function (e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, S.compact = function (e) {
        return S.filter(e, S.identity)
    };
    var N = function (e, t, n) {
        return t && S.every(e, S.isArray) ? l.apply(n, e) : (T(e, function (e) {
            S.isArray(e) || S.isArguments(e) ? t ? a.apply(n, e) : N(e, t, n) : n.push(e)
        }), n)
    };
    S.flatten = function (e, t) {
        return N(e, t, [])
    }, S.without = function (e) {
        return S.difference(e, s.call(arguments, 1))
    }, S.uniq = S.unique = function (e, t, n, r) {
        S.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? S.map(e, n, r) : e,
            o = [],
            a = [];
        return T(i, function (n, r) {
            (t ? r && a[a.length - 1] === n : S.contains(a, n)) || (a.push(n), o.push(e[r]))
        }), o
    }, S.union = function () {
        return S.uniq(S.flatten(arguments, !0))
    }, S.intersection = function (e) {
        var t = s.call(arguments, 1);
        return S.filter(S.uniq(e), function (e) {
            return S.every(t, function (t) {
                return S.indexOf(t, e) >= 0
            })
        })
    }, S.difference = function (e) {
        var t = l.apply(r, s.call(arguments, 1));
        return S.filter(e, function (e) {
            return !S.contains(t, e)
        })
    }, S.zip = function () {
        for (var e = S.max(S.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = S.pluck(arguments, "" + n);
        return t
    }, S.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, S.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = S.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (v && e.indexOf === v) return e.indexOf(t, n);
        for (; i > r; r++) if (e[r] === t) return r;
        return -1
    }, S.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;) if (e[i] === t) return i;
        return -1
    }, S.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i;) o[i++] = e, e += n;
        return o
    };
    var j = function () {};
    S.bind = function (e, t) {
        var n, r;
        if (k && e.bind === k) return k.apply(e, s.call(arguments, 1));
        if (!S.isFunction(e)) throw new TypeError;
        return n = s.call(arguments, 2), r = function () {
            if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
            j.prototype = e.prototype;
            var i = new j;
            j.prototype = null;
            var o = e.apply(i, n.concat(s.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, S.partial = function (e) {
        var t = s.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(s.call(arguments)))
        }
    }, S.bindAll = function (e) {
        var t = s.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = S.bind(e[t], e)
        }), e
    }, S.memoize = function (e, t) {
        var n = {};
        return t || (t = S.identity),
        function () {
            var r = t.apply(this, arguments);
            return S.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, S.delay = function (e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, S.defer = function (e) {
        return S.delay.apply(S, [e, 1].concat(s.call(arguments, 1)))
    }, S.throttle = function (e, t, n) {
        var r, i, o, a = null,
            s = 0;
        n || (n = {});
        var l = function () {
            s = n.leading === !1 ? 0 : new Date, a = null, o = e.apply(r, i)
        };
        return function () {
            var u = new Date;
            s || n.leading !== !1 || (s = u);
            var c = t - (u - s);
            return r = this, i = arguments, 0 >= c ? (clearTimeout(a), a = null, s = u, o = e.apply(r, i)) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
        }
    }, S.debounce = function (e, t, n) {
        var r, i, o, a, s;
        return function () {
            o = this, i = arguments, a = new Date;
            var l = function () {
                var u = new Date - a;
                t > u ? r = setTimeout(l, t - u) : (r = null, n || (s = e.apply(o, i)))
            }, u = n && !r;
            return r || (r = setTimeout(l, t)), u && (s = e.apply(o, i)), s
        }
    }, S.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, S.wrap = function (e, t) {
        return function () {
            var n = [e];
            return a.apply(n, arguments), t.apply(this, n)
        }
    }, S.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, S.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, S.keys = x || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) S.has(e, n) && t.push(n);
        return t
    }, S.values = function (e) {
        for (var t = S.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
        return r
    }, S.pairs = function (e) {
        for (var t = S.keys(e), n = t.length, r = new Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, S.invert = function (e) {
        for (var t = {}, n = S.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
        return t
    }, S.functions = S.methods = function (e) {
        var t = [];
        for (var n in e) S.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, S.extend = function (e) {
        return T(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n]
        }), e
    }, S.pick = function (e) {
        var t = {}, n = l.apply(r, s.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, S.omit = function (e) {
        var t = {}, n = l.apply(r, s.call(arguments, 1));
        for (var i in e) S.contains(n, i) || (t[i] = e[i]);
        return t
    }, S.defaults = function (e) {
        return T(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
        }), e
    }, S.clone = function (e) {
        return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e
    }, S.tap = function (e, t) {
        return t(e), e
    };
    var O = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof S && (e = e._wrapped), t instanceof S && (t = t._wrapped);
        var i = u.call(e);
        if (i != u.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;) if (n[o] == e) return r[o] == t;
        var a = e.constructor,
            s = t.constructor;
        if (a !== s && !(S.isFunction(a) && a instanceof a && S.isFunction(s) && s instanceof s)) return !1;
        n.push(e), r.push(t);
        var l = 0,
            c = !0;
        if ("[object Array]" == i) {
            if (l = e.length, c = l == t.length) for (; l-- && (c = O(e[l], t[l], n, r)););
        } else {
            for (var p in e) if (S.has(e, p) && (l++, !(c = S.has(t, p) && O(e[p], t[p], n, r)))) break;
            if (c) {
                for (p in t) if (S.has(t, p) && !l--) break;
                c = !l
            }
        }
        return n.pop(), r.pop(), c
    };
    S.isEqual = function (e, t) {
        return O(e, t, [], [])
    }, S.isEmpty = function (e) {
        if (null == e) return !0;
        if (S.isArray(e) || S.isString(e)) return 0 === e.length;
        for (var t in e) if (S.has(e, t)) return !1;
        return !0
    }, S.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, S.isArray = w || function (e) {
        return "[object Array]" == u.call(e)
    }, S.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        S["is" + e] = function (t) {
            return u.call(t) == "[object " + e + "]"
        }
    }), S.isArguments(arguments) || (S.isArguments = function (e) {
        return !(!e || !S.has(e, "callee"))
    }), "function" != typeof / . / && (S.isFunction = function (e) {
        return "function" == typeof e
    }), S.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, S.isNaN = function (e) {
        return S.isNumber(e) && e != +e
    }, S.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == u.call(e)
    }, S.isNull = function (e) {
        return null === e
    }, S.isUndefined = function (e) {
        return void 0 === e
    }, S.has = function (e, t) {
        return c.call(e, t)
    }, S.noConflict = function () {
        return e._ = t, this
    }, S.identity = function (e) {
        return e
    }, S.times = function (e, t, n) {
        for (var r = Array(Math.max(0, e)), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, S.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var L = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    L.unescape = S.invert(L.escape);
    var P = {
        escape: new RegExp("[" + S.keys(L.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + S.keys(L.unescape).join("|") + ")", "g")
    };
    S.each(["escape", "unescape"], function (e) {
        S[e] = function (t) {
            return null == t ? "" : ("" + t).replace(P[e], function (t) {
                return L[e][t]
            })
        }
    }), S.result = function (e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return S.isFunction(n) ? n.call(e) : n
    }, S.mixin = function (e) {
        T(S.functions(e), function (t) {
            var n = S[t] = e[t];
            S.prototype[t] = function () {
                var e = [this._wrapped];
                return a.apply(e, arguments), B.call(this, n.apply(S, e))
            }
        })
    };
    var D = 0;
    S.uniqueId = function (e) {
        var t = ++D + "";
        return e ? e + t : t
    }, S.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        I = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    S.template = function (e, t, n) {
        var r;
        n = S.defaults({}, n, S.templateSettings);
        var i = new RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        e.replace(i, function (t, n, r, i, s) {
            return a += e.slice(o, s).replace(H, function (e) {
                return "\\" + I[e]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (t) return r(t, S);
        var l = function (e) {
            return r.call(this, e, S)
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
    }, S.chain = function (e) {
        return S(e).chain()
    };
    var B = function (e) {
        return this._chain ? S(e).chain() : e
    };
    S.mixin(S), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        S.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], B.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        S.prototype[e] = function () {
            return B.call(this, t.apply(this._wrapped, arguments))
        }
    }), S.extend(S.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
function () {
    var e = this,
        t = e.Backbone,
        n = [];
    n.push;
    var r = n.slice;
    n.splice;
    var i;
    i = "undefined" != typeof exports ? exports : e.Backbone = {}, i.VERSION = "1.1.0";
    var o = e._;
    o || "undefined" == typeof require || (o = require("underscore")), i.$ = e.jQuery || e.Zepto || e.ender || e.$, i.noConflict = function () {
        return e.Backbone = t, this
    }, i.emulateHTTP = !1, i.emulateJSON = !1;
    var a = i.Events = {
        on: function (e, t, n) {
            if (!l(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function (e, t, n) {
            if (!l(this, "once", e, [t, n]) || !t) return this;
            var r = this,
                i = o.once(function () {
                    r.off(e, i), t.apply(this, arguments)
                });
            return i._callback = t, this.on(e, i, n)
        },
        off: function (e, t, n) {
            var r, i, a, s, u, c, p, f;
            if (!this._events || !l(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            for (s = e ? [e] : o.keys(this._events), u = 0, c = s.length; c > u; u++) if (e = s[u], a = this._events[e]) {
                if (this._events[e] = r = [], t || n) for (p = 0, f = a.length; f > p; p++) i = a[p], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                r.length || delete this._events[e]
            }
            return this
        },
        trigger: function (e) {
            if (!this._events) return this;
            var t = r.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e],
                i = this._events.all;
            return n && u(n, t), i && u(i, arguments), this
        },
        stopListening: function (e, t, n) {
            var r = this._listeningTo;
            if (!r) return this;
            var i = !t && !n;
            n || "object" != typeof t || (n = this), e && ((r = {})[e._listenId] = e);
            for (var a in r) e = r[a], e.off(t, n, this), (i || o.isEmpty(e._events)) && delete this._listeningTo[a];
            return this
        }
    }, s = /\s+/,
        l = function (e, t, n, r) {
            if (!n) return !0;
            if ("object" == typeof n) {
                for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                return !1
            }
            if (s.test(n)) {
                for (var o = n.split(s), a = 0, l = o.length; l > a; a++) e[t].apply(e, [o[a]].concat(r));
                return !1
            }
            return !0
        }, u = function (e, t) {
            var n, r = -1,
                i = e.length,
                o = t[0],
                a = t[1],
                s = t[2];
            switch (t.length) {
                case 0:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
                    return;
                case 2:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
                    return;
                case 3:
                    for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
                    return;
                default:
                    for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t)
            }
        }, c = {
            listenTo: "on",
            listenToOnce: "once"
        };
    o.each(c, function (e, t) {
        a[t] = function (t, n, r) {
            var i = this._listeningTo || (this._listeningTo = {}),
                a = t._listenId || (t._listenId = o.uniqueId("l"));
            return i[a] = t, r || "object" != typeof n || (r = this), t[e](n, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, o.extend(i, a);
    var p = i.Model = function (e, t) {
        var n = e || {};
        t || (t = {}), this.cid = o.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = o.defaults({}, n, o.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    o.extend(p.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return o.clone(this.attributes)
        },
        sync: function () {
            return i.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return o.escape(this.get(e))
        },
        has: function (e) {
            return null != this.get(e)
        },
        set: function (e, t, n) {
            var r, i, a, s, l, u, c, p;
            if (null == e) return this;
            if ("object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n || (n = {}), !this._validate(i, n)) return !1;
            a = n.unset, l = n.silent, s = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = o.clone(this.attributes), this.changed = {}), p = this.attributes, c = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], o.isEqual(p[r], t) || s.push(r), o.isEqual(c[r], t) ? delete this.changed[r] : this.changed[r] = t, a ? delete p[r] : p[r] = t;
            if (!l) {
                s.length && (this._pending = !0);
                for (var f = 0, h = s.length; h > f; f++) this.trigger("change:" + s[f], this, p[s[f]], n)
            }
            if (u) return this;
            if (!l) for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, o.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, o.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return null == e ? !o.isEmpty(this.changed) : o.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? o.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) o.isEqual(r[i], t = e[i]) || ((n || (n = {}))[i] = t);
            return n
        },
        previous: function (e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function () {
            return o.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function (r) {
                return t.set(t.parse(r, e), e) ? (n && n(t, r, e), t.trigger("sync", t, r, e), void 0) : !1
            }, I(this, e), this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var r, i, a, s = this.attributes;
            if (null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, n = o.extend({
                validate: !0
            }, n), r && !n.wait) {
                if (!this.set(r, n)) return !1
            } else if (!this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = o.extend({}, s, r)), void 0 === n.parse && (n.parse = !0);
            var l = this,
                u = n.success;
            return n.success = function (e) {
                l.attributes = s;
                var t = l.parse(e, n);
                return n.wait && (t = o.extend(r || {}, t)), o.isObject(t) && !l.set(t, n) ? !1 : (u && u(l, e, n), l.trigger("sync", l, e, n), void 0)
            }, I(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === i && (n.attrs = r), a = this.sync(i, this, n), r && n.wait && (this.attributes = s), a
        },
        destroy: function (e) {
            e = e ? o.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            if (e.success = function (i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            }, this.isNew()) return e.success(), !1;
            I(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function () {
            var e = o.result(this, "urlRoot") || o.result(this.collection, "url") || M();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        isValid: function (e) {
            return this._validate({}, o.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = o.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, o.extend(t, {
                validationError: n
            })), !1) : !0
        }
    });
    var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
    o.each(f, function (e) {
        p.prototype[e] = function () {
            var t = r.call(arguments);
            return t.unshift(this.attributes), o[e].apply(o, t)
        }
    });
    var h = i.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, o.extend({
            silent: !0
        }, t))
    }, d = {
        add: !0,
        remove: !0,
        merge: !0
    }, m = {
        add: !0,
        remove: !1
    };
    o.extend(h.prototype, a, {
        model: p,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return i.sync.apply(this, arguments)
        },
        add: function (e, t) {
            return this.set(e, o.extend({
                merge: !1
            }, t, m))
        },
        remove: function (e, t) {
            var n = !o.isArray(e);
            e = n ? [e] : o.clone(e), t || (t = {});
            var r, i, a, s;
            for (r = 0, i = e.length; i > r; r++) s = e[r] = this.get(e[r]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s));
            return n ? e[0] : e
        },
        set: function (e, t) {
            t = o.defaults({}, t, d), t.parse && (e = this.parse(e, t));
            var n = !o.isArray(e);
            e = n ? e ? [e] : [] : o.clone(e);
            var r, i, a, s, l, u, c, f = t.at,
                h = this.model,
                m = this.comparator && null == f && t.sort !== !1,
                g = o.isString(this.comparator) ? this.comparator : null,
                y = [],
                v = [],
                b = {}, w = t.add,
                x = t.merge,
                k = t.remove,
                S = !m && w && k ? [] : !1;
            for (r = 0, i = e.length; i > r; r++) {
                if (l = e[r], a = l instanceof p ? s = l : l[h.prototype.idAttribute], u = this.get(a)) k && (b[u.cid] = !0), x && (l = l === s ? s.attributes : l, t.parse && (l = u.parse(l, t)), u.set(l, t), m && !c && u.hasChanged(g) && (c = !0)), e[r] = u;
                else if (w) {
                    if (s = e[r] = this._prepareModel(l, t), !s) continue;
                    y.push(s), s.on("all", this._onModelEvent, this), this._byId[s.cid] = s, null != s.id && (this._byId[s.id] = s)
                }
                S && S.push(u || s)
            }
            if (k) {
                for (r = 0, i = this.length; i > r; ++r) b[(s = this.models[r]).cid] || v.push(s);
                v.length && this.remove(v, t)
            }
            if (y.length || S && S.length) if (m && (c = !0), this.length += y.length, null != f) for (r = 0, i = y.length; i > r; r++) this.models.splice(f + r, 0, y[r]);
            else {
                S && (this.models.length = 0);
                var T = S || y;
                for (r = 0, i = T.length; i > r; r++) this.models.push(T[r])
            }
            if (c && this.sort({
                silent: !0
            }), !t.silent) {
                for (r = 0, i = y.length; i > r; r++)(s = y[r]).trigger("add", s, this, t);
                (c || S && S.length) && this.trigger("sort", this, t)
            }
            return n ? e[0] : e
        },
        reset: function (e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; r > n; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), e = this.add(e, o.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), e
        },
        push: function (e, t) {
            return this.add(e, o.extend({
                at: this.length
            }, t))
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return this.add(e, o.extend({
                at: 0
            }, t))
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function () {
            return r.apply(this.models, arguments)
        },
        get: function (e) {
            return null == e ? void 0 : this._byId[e.id] || this._byId[e.cid] || this._byId[e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e, t) {
            return o.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        findWhere: function (e) {
            return this.where(e, !0)
        },
        sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), o.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(o.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function (e) {
            return o.invoke(this.models, "get", e)
        },
        fetch: function (e) {
            e = e ? o.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success,
                n = this;
            return e.success = function (r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, I(this, e), this.sync("read", this, e)
        },
        create: function (e, t) {
            if (t = t ? o.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function (e, t, i) {
                i.wait && n.add(e, i), r && r(e, t, i)
            }, e.save(null, t), e
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof p) return e.collection || (e.collection = this), e;
            t = t ? o.clone(t) : {}, t.collection = this;
            var n = new this.model(e, t);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
        }
    });
    var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    o.each(g, function (e) {
        h.prototype[e] = function () {
            var t = r.call(arguments);
            return t.unshift(this.models), o[e].apply(o, t)
        }
    });
    var y = ["groupBy", "countBy", "sortBy"];
    o.each(y, function (e) {
        h.prototype[e] = function (t, n) {
            var r = o.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return o[e](this.models, r, n)
        }
    });
    var v = i.View = function (e) {
        this.cid = o.uniqueId("view"), e || (e = {}), o.extend(this, o.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, b = /^(\S+)\s*(.*)$/,
        w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    o.extend(v.prototype, a, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof i.$ ? e : i.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (!e && !(e = o.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if (o.isFunction(n) || (n = this[e[t]]), n) {
                    var r = t.match(b),
                        i = r[1],
                        a = r[2];
                    n = o.bind(n, this), i += ".delegateEvents" + this.cid, "" === a ? this.$el.on(i, n) : this.$el.on(i, a, n)
                }
            }
            return this
        },
        undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _ensureElement: function () {
            if (this.el) this.setElement(o.result(this, "el"), !1);
            else {
                var e = o.extend({}, o.result(this, "attributes"));
                this.id && (e.id = o.result(this, "id")), this.className && (e["class"] = o.result(this, "className"));
                var t = i.$("<" + o.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            }
        }
    }), i.sync = function (e, t, n) {
        var r = k[e];
        o.defaults(n || (n = {}), {
            emulateHTTP: i.emulateHTTP,
            emulateJSON: i.emulateJSON
        });
        var a = {
            type: r,
            dataType: "json"
        };
        if (n.url || (a.url = o.result(t, "url") || M()), null != n.data || !t || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
            model: a.data
        } : {}), n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
            a.type = "POST", n.emulateJSON && (a.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function (e) {
                return e.setRequestHeader("X-HTTP-Method-Override", r), s ? s.apply(this, arguments) : void 0
            }
        }
        "GET" === a.type || n.emulateJSON || (a.processData = !1), "PATCH" === a.type && x && (a.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var l = n.xhr = i.ajax(o.extend(a, n));
        return t.trigger("request", t, l, n), l
    };
    var x = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
        k = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    i.ajax = function () {
        return i.$.ajax.apply(i.$, arguments)
    };
    var S = i.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, T = /\((.*?)\)/g,
        _ = /(\(\?)?:\w+/g,
        E = /\*\w+/g,
        C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    o.extend(S.prototype, a, {
        initialize: function () {},
        route: function (e, t, n) {
            o.isRegExp(e) || (e = this._routeToRegExp(e)), o.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return i.history.route(e, function (o) {
                var a = r._extractParameters(e, o);
                n && n.apply(r, a), r.trigger.apply(r, ["route:" + t].concat(a)), r.trigger("route", t, a), i.history.trigger("route", r, t, a)
            }), this
        },
        navigate: function (e, t) {
            return i.history.navigate(e, t), this
        },
        _bindRoutes: function () {
            if (this.routes) {
                this.routes = o.result(this, "routes");
                for (var e, t = o.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function (e) {
            return e = e.replace(C, "\\$&").replace(T, "(?:$1)?").replace(_, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(E, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            var n = e.exec(t).slice(1);
            return o.map(n, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var A = i.History = function () {
        this.handlers = [], o.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, N = /^[#\/]|\s+$/g,
        j = /^\/+|\/+$/g,
        O = /msie [\w.]+/,
        L = /\/$/,
        P = /[?#].*$/;
    A.started = !1, o.extend(A.prototype, a, {
        interval: 50,
        getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function (e, t) {
            if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(L, "");
                e.indexOf(n) || (e = e.slice(n.length))
            } else e = this.getHash();
            return e.replace(N, "")
        },
        start: function (e) {
            if (A.started) throw new Error("Backbone.history has already been started");
            A.started = !0, this.options = o.extend({
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                r = O.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
            this.root = ("/" + this.root + "/").replace(j, "/"), r && this._wantsHashChange && (this.iframe = i.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? i.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? i.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var a = this.location,
                s = a.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._hasPushState && s && a.hash && (this.fragment = this.getHash().replace(N, ""), this.history.replaceState({}, document.title, this.root + this.fragment + a.search))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function () {
            i.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), A.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl(), void 0)
        },
        loadUrl: function (e) {
            return e = this.fragment = this.getFragment(e), o.any(this.handlers, function (t) {
                return t.route.test(e) ? (t.callback(e), !0) : void 0
            })
        },
        navigate: function (e, t) {
            if (!A.started) return !1;
            t && t !== !0 || (t = {
                trigger: !! t
            });
            var n = this.root + (e = this.getFragment(e || ""));
            if (e = e.replace(P, ""), this.fragment !== e) {
                if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), i.history = new A;
    var D = function (e, t) {
        var n, r = this;
        n = e && o.has(e, "constructor") ? e.constructor : function () {
            return r.apply(this, arguments)
        }, o.extend(n, r, t);
        var i = function () {
            this.constructor = n
        };
        return i.prototype = r.prototype, n.prototype = new i, e && o.extend(n.prototype, e), n.__super__ = r.prototype, n
    };
    p.extend = h.extend = S.extend = v.extend = A.extend = D;
    var M = function () {
        throw new Error('A "url" property or function must be specified')
    }, I = function (e, t) {
        var n = t.error;
        t.error = function (r) {
            n && n(e, r, t), e.trigger("error", e, r, t)
        }
    }
}.call(this);
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var Handlebars = {};
! function (e, t) {
    e.VERSION = "1.0.0", e.COMPILER_REVISION = 4, e.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    }, e.helpers = {}, e.partials = {};
    var n = Object.prototype.toString,
        r = "[object Function]",
        i = "[object Object]";
    e.registerHelper = function (t, r, o) {
        if (n.call(t) === i) {
            if (o || r) throw new e.Exception("Arg not supported with multiple helpers");
            e.Utils.extend(this.helpers, t)
        } else o && (r.not = o), this.helpers[t] = r
    }, e.registerPartial = function (t, r) {
        n.call(t) === i ? e.Utils.extend(this.partials, t) : this.partials[t] = r
    }, e.registerHelper("helperMissing", function (e) {
        if (2 === arguments.length) return t;
        throw new Error("Missing helper: '" + e + "'")
    }), e.registerHelper("blockHelperMissing", function (t, i) {
        var o = i.inverse || function () {}, a = i.fn,
            s = n.call(t);
        return s === r && (t = t.call(this)), t === !0 ? a(this) : t === !1 || null == t ? o(this) : "[object Array]" === s ? t.length > 0 ? e.helpers.each(t, i) : o(this) : a(t)
    }), e.K = function () {}, e.createFrame = Object.create || function (t) {
        e.K.prototype = t;
        var n = new e.K;
        return e.K.prototype = null, n
    }, e.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function (t, n) {
            if (e.logger.level <= t) {
                var r = e.logger.methodMap[t];
                "undefined" != typeof console && console[r] && console[r].call(console, n)
            }
        }
    }, e.log = function (t, n) {
        e.logger.log(t, n)
    }, e.registerHelper("each", function (t, i) {
        var o, a = i.fn,
            s = i.inverse,
            l = 0,
            u = "",
            c = n.call(t);
        if (c === r && (t = t.call(this)), i.data && (o = e.createFrame(i.data)), t && "object" == typeof t) if (t instanceof Array) for (var p = t.length; p > l; l++) o && (o.index = l), u += a(t[l], {
            data: o
        });
        else for (var f in t) t.hasOwnProperty(f) && (o && (o.key = f), u += a(t[f], {
            data: o
        }), l++);
        return 0 === l && (u = s(this)), u
    }), e.registerHelper("if", function (t, i) {
        var o = n.call(t);
        return o === r && (t = t.call(this)), !t || e.Utils.isEmpty(t) ? i.inverse(this) : i.fn(this)
    }), e.registerHelper("unless", function (t, n) {
        return e.helpers["if"].call(this, t, {
            fn: n.inverse,
            inverse: n.fn
        })
    }), e.registerHelper("with", function (t, i) {
        var o = n.call(t);
        return o === r && (t = t.call(this)), e.Utils.isEmpty(t) ? void 0 : i.fn(t)
    }), e.registerHelper("log", function (t, n) {
        var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
        e.log(r, t)
    });
    var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    e.Exception = function () {
        for (var e = Error.prototype.constructor.apply(this, arguments), t = 0; t < o.length; t++) this[o[t]] = e[o[t]]
    }, e.Exception.prototype = new Error, e.SafeString = function (e) {
        this.string = e
    }, e.SafeString.prototype.toString = function () {
        return this.string.toString()
    };
    var a = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, s = /[&<>"'`]/g,
        l = /[&<>"'`]/,
        u = function (e) {
            return a[e] || "&amp;"
        };
    e.Utils = {
        extend: function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        },
        escapeExpression: function (t) {
            return t instanceof e.SafeString ? t.toString() : null == t || t === !1 ? "" : (t = t.toString(), l.test(t) ? t.replace(s, u) : t)
        },
        isEmpty: function (e) {
            return e || 0 === e ? "[object Array]" === n.call(e) && 0 === e.length ? !0 : !1 : !0
        }
    }, e.VM = {
        template: function (t) {
            var n = {
                escapeExpression: e.Utils.escapeExpression,
                invokePartial: e.VM.invokePartial,
                programs: [],
                program: function (t, n, r) {
                    var i = this.programs[t];
                    return r ? i = e.VM.program(t, n, r) : i || (i = this.programs[t] = e.VM.program(t, n)), i
                },
                merge: function (t, n) {
                    var r = t || n;
                    return t && n && (r = {}, e.Utils.extend(r, n), e.Utils.extend(r, t)), r
                },
                programWithDepth: e.VM.programWithDepth,
                noop: e.VM.noop,
                compilerInfo: null
            };
            return function (r, i) {
                i = i || {};
                var o = t.call(n, e, r, i.helpers, i.partials, i.data),
                    a = n.compilerInfo || [],
                    s = a[0] || 1,
                    l = e.COMPILER_REVISION;
                if (s !== l) {
                    if (l > s) {
                        var u = e.REVISION_CHANGES[l],
                            c = e.REVISION_CHANGES[s];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + u + ") or downgrade your runtime to an older version (" + c + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ")."
                }
                return o
            }
        },
        programWithDepth: function (e, t, n) {
            var r = Array.prototype.slice.call(arguments, 3),
                i = function (e, i) {
                    return i = i || {}, t.apply(this, [e, i.data || n].concat(r))
                };
            return i.program = e, i.depth = r.length, i
        },
        program: function (e, t, n) {
            var r = function (e, r) {
                return r = r || {}, t(e, r.data || n)
            };
            return r.program = e, r.depth = 0, r
        },
        noop: function () {
            return ""
        },
        invokePartial: function (n, r, i, o, a, s) {
            var l = {
                helpers: o,
                partials: a,
                data: s
            };
            if (n === t) throw new e.Exception("The partial " + r + " could not be found");
            if (n instanceof Function) return n(i, l);
            if (e.compile) return a[r] = e.compile(n, {
                data: s !== t
            }), a[r](i, l);
            throw new e.Exception("The partial " + r + " could not be compiled when running in runtime-only mode")
        }
    }, e.template = e.VM.template
}(Handlebars),
function () {
    window.BarcodePrinter = function () {
        function e() {}
        return e.run = function () {
            return this.registerHelpers()
        }, e.registerHelpers = function () {
            return Handlebars.registerHelper("pluralize", function (e, t, n) {
                return 1 === e ? t : n
            }), Handlebars.registerHelper("image_path", function (e) {
                return "/assets/app-assets/" + e
            }), Handlebars.registerHelper("ifCond", function (e, t, n, r) {
                switch (t) {
                    case "==":
                        return e === n ? r.fn(this) : r.inverse(this);
                    case "<":
                        return n > e ? r.fn(this) : r.inverse(this);
                    case "<=":
                        return n >= e ? r.fn(this) : r.inverse(this);
                    case ">":
                        return e > n ? r.fn(this) : r.inverse(this);
                    case ">=":
                        return e >= n ? r.fn(this) : r.inverse(this);
                    case "!=":
                        return e !== n ? r.fn(this) : r.inverse(this);
                    case "contains":
                        return -1 !== e.split(" ").indexOf(n) ? r.fn(this) : r.inverse(this);
                    default:
                        return r.inverse(this)
                }
            })
        }, e
    }()
}.call(this),
function () {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["labels/show"] = Handlebars.template(function (e, t, n, r, i) {
        function o(e, t) {
            var r, i, o = "";
            return o += '\n            <ul class="column-list two-column barcode-options">\n              <li>\n                <input type="checkbox" value="product_title" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "product_title", i) : c.call(e, "labelAttrCheckedIf", "product_title", i))) + ' id="product_title" name="product_title" class="label-attr" />\n                <label for="product_title" class="inline fw-normal">Product Name</label>\n              </li>\n\n              <li>\n                <input type="checkbox" value="price" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "price", i) : c.call(e, "labelAttrCheckedIf", "price", i))) + ' id="price" name="price" class="label-attr" />\n                <label for="price" class="inline fw-normal">Price</label>\n              </li>\n\n              <li>\n                <input type="checkbox" value="vendor" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "vendor", i) : c.call(e, "labelAttrCheckedIf", "vendor", i))) + ' id="vendor" name="vendor" class="label-attr" />\n                <label for="vendor" class="inline fw-normal">Vendor</label>\n              </li>\n\n              <li>\n                <input type="checkbox" value="sku" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "sku", i) : c.call(e, "labelAttrCheckedIf", "sku", i))) + ' id="sku" name="sku" class="label-attr" />\n                <label for="sku" class="inline fw-normal">SKU</label>\n              </li>\n\n              <li>\n                <input type="checkbox" value="option1" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "option1", i) : c.call(e, "labelAttrCheckedIf", "option1", i))) + ' id="option1" name="option1" class="label-attr" />\n                <label for="option1" class="inline fw-normal">Option 1</label>\n              </li>\n\n              <li>\n                <input type="checkbox" value="option2" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "option2", i) : c.call(e, "labelAttrCheckedIf", "option2", i))) + ' id="option2" name="option2" class="label-attr" />\n                <label for="option2" class="inline fw-normal">Option 2</label>\n              </li>\n\n              <li>\n                <input type="checkbox" value="option3" ', i = {
                hash: {},
                data: t
            }, o += p((r = n.labelAttrCheckedIf || e.labelAttrCheckedIf, r ? r.call(e, "option3", i) : c.call(e, "labelAttrCheckedIf", "option3", i))) + ' id="option3" name="option3" class="label-attr" />\n                <label for="option3" class="inline fw-normal">Option 3</label>\n              </li>\n            </ul>\n          '
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
        var a, s, l, u = "",
            c = n.helperMissing,
            p = this.escapeExpression,
            f = "function",
            h = this;
        return u += '<div class="barcodes-modal">\n  <div class="row barcode-design">\n    <p class="ssb">Select a label size below. You can customize and preview the options to be included on your barcode label.</p>\n    <form id="labelTemplateForm">\n      <div class="barcode-summary">\n        <select name="size" id="label-size">\n          <option value="xsmall" ', l = {
            hash: {},
            data: i
        }, u += p((a = n.isSelectedSize || t.isSelectedSize, a ? a.call(t, "xsmall", l) : c.call(t, "isSelectedSize", "xsmall", l))) + '>X-Small</option>\n          <option value="small" ', l = {
            hash: {},
            data: i
        }, u += p((a = n.isSelectedSize || t.isSelectedSize, a ? a.call(t, "small", l) : c.call(t, "isSelectedSize", "small", l))) + '>Small</option>\n          <option value="medium" ', l = {
            hash: {},
            data: i
        }, u += p((a = n.isSelectedSize || t.isSelectedSize, a ? a.call(t, "medium", l) : c.call(t, "isSelectedSize", "medium", l))) + '>Medium</option>\n          <option value="large" ', l = {
            hash: {},
            data: i
        }, u += p((a = n.isSelectedSize || t.isSelectedSize, a ? a.call(t, "large", l) : c.call(t, "isSelectedSize", "large", l))) + ">Large</option>\n        </select>\n\n        <h3>Label size:</h3>\n        <p>" + p((a = t.dimensions, a = null == a || a === !1 ? a : a.imperial, typeof a === f ? a.apply(t) : a)) + "</p>\n        <p>" + p((a = t.dimensions, a = null == a || a === !1 ? a : a.metric, typeof a === f ? a.apply(t) : a)) + '</p>\n      </div>\n      <div class="barcode-content">\n          <div id="label-preview-container">\n            <img src="', (s = n.src) ? s = s.call(t, {
            hash: {},
            data: i
        }) : (s = t.src, s = typeof s === f ? s.apply(t) : s), u += p(s) + '" alt="Barcode label preview">\n          </div>\n          ', l = {
            hash: {},
            inverse: h.noop,
            fn: h.program(1, o, i),
            data: i
        }, a = n.ifCond || t.ifCond, s = a ? a.call(t, "large medium", "contains", t.size, l) : c.call(t, "ifCond", "large medium", "contains", t.size, l), (s || 0 === s) && (u += s), u += '\n      </div>\n    </form>\n  </div>\n  <div class="row footer-notice">\n    <div class="box box-subdued">\n      Want to customize your label further? You can export barcodes to CSV format and design your own. <a href="http://docs.shopify.com/pos/about-pos/barcode-printing/custom-barcode-labels" target="_blank">Learn more about creating custom barcode labels</a>.\n    </div>\n  </div>\n</div>\n'
    }), this.HandlebarsTemplates["labels/show"]
}.call(this),
function () {
    Handlebars.registerPartial("products/_product_table_row", Handlebars.template(function (e, t, n, r, i) {
        function o(e, t) {
            var r, i, o = "";
            return o += '\n        <img class="block" src="' + f((r = e.images, r = null == r || r === !1 ? r : r[0], r = null == r || r === !1 ? r : r.src, typeof r === p ? r.apply(e) : r)) + '" title="', (i = n.title) ? i = i.call(e, {
                hash: {},
                data: t
            }) : (i = e.title, i = typeof i === p ? i.apply(e) : i), o += f(i) + '">\n      '
        }
        function a(e, t) {
            var r, i, o, a = "";
            return a += '\n        <img class="block" src="', o = {
                hash: {},
                data: t
            }, a += f((r = n.image_path || e.image_path, r ? r.call(e, "no-image.png", o) : h.call(e, "image_path", "no-image.png", o))) + '" title="', (i = n.title) ? i = i.call(e, {
                hash: {},
                data: t
            }) : (i = e.title, i = typeof i === p ? i.apply(e) : i), a += f(i) + '">\n      '
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
        var s, l, u, c = "",
            p = "function",
            f = this.escapeExpression,
            h = n.helperMissing,
            d = this;
        return c += '<tr class="product-table">\n  <td class="image thumb">\n    <label class="s-none">\n      ', l = n["if"].call(t, (s = t.images, null == s || s === !1 ? s : s.length), {
            hash: {},
            inverse: d.program(3, a, i),
            fn: d.program(1, o, i),
            data: i
        }), (l || 0 === l) && (c += l), c += '\n    </label>\n  </td>\n  <td class="name">\n    <a href="/products/', (l = n.id) ? l = l.call(t, {
            hash: {},
            data: i
        }) : (l = t.id, l = typeof l === p ? l.apply(t) : l), c += f(l) + '">', (l = n.title) ? l = l.call(t, {
            hash: {},
            data: i
        }) : (l = t.title, l = typeof l === p ? l.apply(t) : l), c += f(l) + '</a>\n  </td>\n  <td class="total">\n    <span class="status">', (l = n.total_inventory) ? l = l.call(t, {
            hash: {},
            data: i
        }) : (l = t.total_inventory, l = typeof l === p ? l.apply(t) : l), c += f(l) + " in stock for " + f((s = t.variants, s = null == s || s === !1 ? s : s.length, typeof s === p ? s.apply(t) : s)) + " ", u = {
            hash: {},
            data: i
        }, c += f((s = n.pluralize || t.pluralize, s ? s.call(t, (s = t.variants, null == s || s === !1 ? s : s.length), "variant", "variants", u) : h.call(t, "pluralize", (s = t.variants, null == s || s === !1 ? s : s.length), "variant", "variants", u))) + '</span>\n  </td>\n  <td class="type">\n    <span>', (l = n.product_type) ? l = l.call(t, {
            hash: {},
            data: i
        }) : (l = t.product_type, l = typeof l === p ? l.apply(t) : l), c += f(l) + '</span>\n  </td>\n  <td class="vendor">\n    <span>', (l = n.vendor) ? l = l.call(t, {
            hash: {},
            data: i
        }) : (l = t.vendor, l = typeof l === p ? l.apply(t) : l), c += f(l) + "</span>\n  </td>\n</tr>\n"
    }))
}.call(this),
function () {
    Handlebars.registerPartial("products/_variant_table_row", Handlebars.template(function (e, t, n, r, i) {
        function o(e, t) {
            var r, i = "";
            return i += '\n        <img class="block" src="', (r = n.src) ? r = r.call(e, {
                hash: {},
                data: t
            }) : (r = e.src, r = typeof r === m ? r.apply(e) : r), i += g(r) + '" title="', (r = n.title) ? r = r.call(e, {
                hash: {},
                data: t
            }) : (r = e.title, r = typeof r === m ? r.apply(e) : r), i += g(r) + '">\n      '
        }
        function a(e, t) {
            var r, i, o, a = "";
            return a += '\n        <img class="block" src="', o = {
                hash: {},
                data: t
            }, a += g((r = n.image_path || e.image_path, r ? r.call(e, "no-image.png", o) : y.call(e, "image_path", "no-image.png", o))) + '" title="', (i = n.title) ? i = i.call(e, {
                hash: {},
                data: t
            }) : (i = e.title, i = typeof i === m ? i.apply(e) : i), a += g(i) + '">\n      '
        }
        function s(e, t) {
            var r, i = "";
            return i += "\n        ", (r = n.sku) ? r = r.call(e, {
                hash: {},
                data: t
            }) : (r = e.sku, r = typeof r === m ? r.apply(e) : r), i += g(r) + "\n      "
        }
        function l() {
            return "\n        --\n      "
        }
        function u(e, t) {
            var r, i = "";
            return i += "\n      ", (r = n.barcode) ? r = r.call(e, {
                hash: {},
                data: t
            }) : (r = e.barcode, r = typeof r === m ? r.apply(e) : r), i += g(r) + "\n    "
        }
        function c() {
            return "\n      --\n    "
        }
        function p(e, t) {
            var r, i = "";
            return i += "\n      ", (r = n.inventory_quantity) ? r = r.call(e, {
                hash: {},
                data: t
            }) : (r = e.inventory_quantity, r = typeof r === m ? r.apply(e) : r), i += g(r) + "\n    "
        }
        function f() {
            return "\n      N/A\n    "
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
        var h, d = "",
            m = "function",
            g = this.escapeExpression,
            y = n.helperMissing,
            v = this;
        return d += '<tr data-variant-id="', (h = n.id) ? h = h.call(t, {
            hash: {},
            data: i
        }) : (h = t.id, h = typeof h === m ? h.apply(t) : h), d += g(h) + '">\n  <td class="image thumb">\n    <label class="s-none">\n      ', h = n["if"].call(t, t.src, {
            hash: {},
            inverse: v.program(3, a, i),
            fn: v.program(1, o, i),
            data: i
        }), (h || 0 === h) && (d += h), d += "\n    </label>\n  </td>\n  <td>\n    <a onclick=\"ShopifyApp.redirect('/products/", (h = n.product_id) ? h = h.call(t, {
            hash: {},
            data: i
        }) : (h = t.product_id, h = typeof h === m ? h.apply(t) : h), d += g(h) + '\')" href="#">', (h = n.product_title) ? h = h.call(t, {
            hash: {},
            data: i
        }) : (h = t.product_title, h = typeof h === m ? h.apply(t) : h), d += g(h) + '</a>\n    <span class="block">', (h = n.title) ? h = h.call(t, {
            hash: {},
            data: i
        }) : (h = t.title, h = typeof h === m ? h.apply(t) : h), d += g(h) + '</span>\n  </td>\n  <td class="tc">\n    <span class="block">\n      ', h = n["if"].call(t, t.sku, {
            hash: {},
            inverse: v.program(7, l, i),
            fn: v.program(5, s, i),
            data: i
        }), (h || 0 === h) && (d += h), d += '\n    </span>\n  </td>\n  <td class="tc">\n    ', h = n["if"].call(t, t.barcode, {
            hash: {},
            inverse: v.program(11, c, i),
            fn: v.program(9, u, i),
            data: i
        }), (h || 0 === h) && (d += h), d += '\n  </td>\n  <td class="tc">\n    ', h = n["if"].call(t, t.inventory_management, {
            hash: {},
            inverse: v.program(15, f, i),
            fn: v.program(13, p, i),
            data: i
        }), (h || 0 === h) && (d += h), d += '\n  </td>\n  <td class="tc hide-when-printing">\n    <input type="number" class="tc print-qty" tabindex="1" min="0" value="', (h = n.print_quantity) ? h = h.call(t, {
            hash: {},
            data: i
        }) : (h = t.print_quantity, h = typeof h === m ? h.apply(t) : h), d += g(h) + '">\n  </td>\n</tr>\n'
    }))
}.call(this),
function () {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["products/blank_slate"] = Handlebars.template(function (e, t, n, r, i) {
        function o() {
            return '\n  <div class="row box warning header-notice tc">Using Chrome? You may need to <a href="http://docs.shopify.com/pos/about-pos/hardware/supported-hardware/barcode-printer#allow-plugins" target="_blank">allow plugins</a> if you\'ve already installed the Dymo Label Software.</div>\n'
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
        var a, s = "",
            l = this;
        return a = n["if"].call(t, t.is_chrome, {
            hash: {},
            inverse: l.noop,
            fn: l.program(1, o, i),
            data: i
        }), (a || 0 === a) && (s += a), s += '\n<div id="barcode-printer-blank-slate">\n  <div class="row">\n    <div class="span24">\n\n      <div class="blank-slate pb-none">\n        <div class="ssb">\n          <i class="ico ico-72 ico-apps in-gutter"></i>\n          <h2>You haven\'t installed DYMO Label Software yet</h2>\n          <p>You will need to install DYMO Label Software 8+ to customize and print barcode labels </p>\n          <p class="action"><a href="http://www.dymo.com/en-US/online-support/dymo-user-guides" target="_blank" class="btn btn-primary">Download DYMO Label Software</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="span24">\n      <div class="info-message">\n        To export barcodes in CSV format for use with label printing software, go to your <a href="#" onclick="ShopifyApp.redirect(\'/products\')">Products page</a>.\n      </div>\n    </div> <!-- /.span24 -->\n  </div>\n</div>\n'
    }), this.HandlebarsTemplates["products/blank_slate"]
}.call(this),
function () {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["products/index"] = Handlebars.template(function (e, t, n, r, i) {
        function o() {
            return ' class="ssb" '
        }
        function a(e, t) {
            var r, i, o = "";
            return o += "\n      <p>You have at least <strong>", (r = n.num_products_without_barcodes) ? r = r.call(e, {
                hash: {},
                data: t
            }) : (r = e.num_products_without_barcodes, r = typeof r === c ? r.apply(e) : r), o += p(r) + "</strong> ", i = {
                hash: {},
                data: t
            }, o += p((r = n.pluralize || e.pluralize, r ? r.call(e, e.num_products_without_barcodes, "product", "products", i) : f.call(e, "pluralize", e.num_products_without_barcodes, "product", "products", i))) + " with no barcodes. To print barcodes for ", i = {
                hash: {},
                data: t
            }, o += p((r = n.pluralize || e.pluralize, r ? r.call(e, e.num_products_without_barcodes, "this", "these", i) : f.call(e, "pluralize", e.num_products_without_barcodes, "this", "these", i))) + " ", i = {
                hash: {},
                data: t
            }, o += p((r = n.pluralize || e.pluralize, r ? r.call(e, e.num_products_without_barcodes, "product", "products", i) : f.call(e, "pluralize", e.num_products_without_barcodes, "product", "products", i))) + ', first <a href="#" class="assign-barcodes-notice">assign barcodes</a>.</p>\n    '
        }
        function s(e, t) {
            var i, o = "";
            return o += "\n            ", i = h.invokePartial(r["products/_product_table_row"], "products/_product_table_row", e, n, r, t), (i || 0 === i) && (o += i), o += "\n          "
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), r = this.merge(r, e.partials), i = i || {};
        var l, u = "",
            c = "function",
            p = this.escapeExpression,
            f = n.helperMissing,
            h = this;
        return u += '<div class="row">\n  <div class="box notice header-notice">\n    <h2><strong>Welcome to Barcode Printer!</strong></h2>\n    <p ', l = n["if"].call(t, t.num_products_without_barcodes, {
            hash: {},
            inverse: h.noop,
            fn: h.program(1, o, i),
            data: i
        }), (l || 0 === l) && (u += l), u += '>\n      We\'ve created a list of your most recent products. Select a product to print barcodes for its variants. <a href="http://docs.shopify.com/pos/about-pos/barcode-printing/print-simple-barcodes" target="_blank">Learn more</a> about printing barcodes for all of your products.\n    </p>\n\n    ', l = n["if"].call(t, t.num_products_without_barcodes, {
            hash: {},
            inverse: h.noop,
            fn: h.program(3, a, i),
            data: i
        }), (l || 0 === l) && (u += l), u += '\n  </div>\n  <div class="span24">\n    <div class="printer-itemlist">\n      <table class="expanded">\n        <thead>\n          <tr>\n            <th class="image">&nbsp;</th>\n            <th class="title">\n              <span>Product</span>\n            </th>\n            <th class="right inventory">\n              <span>Inventory</span>\n            </th>\n            <th class="product_type">\n              <span>Type</span>\n            </th>\n            <th class="vendor">\n              <span>Vendor</span>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          ', l = n.each.call(t, t.products, {
            hash: {},
            inverse: h.noop,
            fn: h.program(5, s, i),
            data: i
        }), (l || 0 === l) && (u += l), u += '\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="span24">\n    <div class="info-message">\n      To export barcodes in CSV format for use with label printing software, go to your <a href="#" onclick="ShopifyApp.redirect(\'/products\')">Products page</a>.\n    </div>\n  </div>\n</div>\n'
    }), this.HandlebarsTemplates["products/index"]
}.call(this),
function () {
    return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["products/show"] = Handlebars.template(function (e, t, n, r, i) {
        function o(e, t) {
            var i, o = "";
            return o += "\n      ", i = l.invokePartial(r["products/_variant_table_row"], "products/_variant_table_row", e, n, r, t), (i || 0 === i) && (o += i), o += "\n    "
        }
        this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), r = this.merge(r, e.partials), i = i || {};
        var a, s = "",
            l = this;
        return s += '<form id="variant-selection-form">\n\n  <table>\n    <tr>\n      <th class="image">&nbsp;</th>\n      <th>Product Variant</th>\n      <th class="tc">SKU</th>\n      <th class="tc">Barcode</th>\n      <th class="tc">Quantity</th>\n      <th class="tc">Barcodes</th>\n    </tr>\n\n    ', a = n.each.call(t, t.variants, {
            hash: {},
            inverse: l.noop,
            fn: l.program(1, o, i),
            data: i
        }), (a || 0 === a) && (s += a), s += "\n  </table>\n\n</form>\n"
    }), this.HandlebarsTemplates["products/show"]
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, r = [].indexOf || function (e) {
            for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
            return -1
        };
    BarcodePrinter.Label = function (t) {
        function i() {
            return e = i.__super__.constructor.apply(this, arguments)
        }
        return n(i, t), i.prototype.defaults = function () {
            var e;
            return e = ["price", "vendor", "sku", "option1", "option2", "option3"], {
                properties: ["barcode", "product_title"].concat(e),
                metadataProperties: e,
                src: "https://lorempixel.com/257/85/",
                size: "large",
                transforms: {
                    price: "priceWithSymbol"
                }
            }
        }, i.prototype.validate = function (e) {
            var t;
            return "xsmall" !== (t = e.size) && "small" !== t && "medium" !== t && "large" !== t ? "Invalid label size selected" : void 0
        }, i.prototype.dimensions = function (e) {
            var t;
            return t = {
                xsmall: {
                    metric: "10mm x 19mm",
                    imperial: '3/8" x 3/4"'
                },
                small: {
                    metric: "25mm x 25mm",
                    imperial: '1" x 1"'
                },
                medium: {
                    metric: "25mm x 54mm",
                    imperial: '1" x 2 1/8"'
                },
                large: {
                    metric: "28mm x 89mm",
                    imperial: '1 1/8" x 3 1/2"'
                }
            }, t[e]
        }, i.prototype.metadata = function () {
            var e, t, n, r, i, o, a, s, l, u;
            for (a = this.get("variant"), o = this.get("transforms"), n = this.defaults(), r = _.intersection(n.metadataProperties, this.get("properties")), i = "", s = 0, l = r.length; l > s; s++) e = r[s], a.get(e) && (t = null != (u = o[e]) ? u : e, i += "" + a.get(t) + " ");
            return $.trim(i)
        }, i.prototype.setTemplateSize = function (e) {
            return this.set("size", e, {
                validate: !0
            }), this.set("dimensions", this.dimensions(e))
        }, i.prototype.toObject = function () {
            var e, t;
            return t = this.get("variant"), e = this.get("properties"), {
                product_title: r.call(e, "product_title") >= 0 ? t.get("product_title") : " ",
                barcode: r.call(e, "barcode") >= 0 ? t.get("barcode") : " ",
                price: r.call(e, "price") >= 0 ? t.get("priceWithSymbol") : " ",
                metadata: this.metadata() || " "
            }
        }, i
    }(Backbone.Model)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.Variant = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.defaults = {
            print_quantity: 0
        }, r.prototype.initialize = function () {
            var e;
            return e = shop.get("store_settings").get("money_in_emails_format"), this.set("priceWithSymbol", e.replace(/\{\{amount\}\}|\{\{amount_with_comma_separator\}\}/, this.get("price")))
        }, r
    }(Backbone.Model)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.VariantCollection = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.model = BarcodePrinter.Variant, r.prototype.print = function () {
            var e, t, n, r, i, o, a;
            return t = shop.get("settings"), a = this.models.filter(function (e) {
                return e.get("print_quantity")
            }), (e = a.every(function (e) {
                var t;
                return t = e.get("barcode"), null != t && "" !== t
            })) ? (n = window.shop.get("template_size"), o = function () {
                var e, r, o;
                for (o = [], e = 0, r = a.length; r > e; e++) i = a[e], o.push(new BarcodePrinter.Label({
                    variant: i,
                    properties: t,
                    size: n
                }));
                return o
            }(), r = new BarcodePrinter.LabelCollection(o), r.print()) : (ShopifyApp.flashError("One or more of your variants do not have a barcode number assigned"), ShopifyApp.Bar.loadingOff(), !1)
        }, r
    }(Backbone.Collection)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.Product = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.defaults = {
            variants: new BarcodePrinter.VariantCollection
        }, r
    }(Backbone.Model)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.Shop = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.urlRoot = "shops", r.prototype.defaults = {
            template_size: "large"
        }, r.prototype.assignBarcodes = function (e) {
            var t, n, r;
            return ShopifyApp.Bar.loadingOn(), t = ShopifyApp.Modal.window().$("#generate-barcodes-form").serializeArray(), ShopifyApp.Modal.close("save"), r = t.filter(function (e) {
                return "barcode_assignment" === e.name
            })[0].value, _gaq.push(["_trackEvent", "Barcodes", "Assign", r]), n = $.post("/generate_barcodes", t), n.success(function (t) {
                return e(t)
            }), n.error(function () {
                return ShopifyApp.flashError("An error occured while assigning your barcodes")
            }), n.complete(function () {
                return ShopifyApp.Bar.loadingOff()
            })
        }, r.prototype.saveLabelSettings = function () {
            var e, t;
            return ShopifyApp.Bar.loadingOn(), _gaq.push(["_trackEvent", "Barcodes", "Design"]), t = ShopifyApp.Modal.window().label, this.set("settings", t.get("properties")), this.set("template_size", t.get("size")), this.set("shop", this.get("url")), e = this.save(), e.success(function () {
                return ShopifyApp.flashNotice("Your settings have been saved")
            }), e.error(function () {
                return ShopifyApp.flashError("There was an error saving your settings")
            }), e.complete(function () {
                return ShopifyApp.Bar.loadingOff()
            })
        }, r
    }(Backbone.Model)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.ShopSettings = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.defaults = {
            money_in_emails_format: "${{amount}}"
        }, r
    }(Backbone.Model)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.LabelCollection = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.model = BarcodePrinter.Label, r.prototype.initialize = function () {
            return this.clearPrintQueue()
        }, r.prototype.clearPrintQueue = function () {
            return this.builder = new dymo.label.framework.LabelSetBuilder
        }, r.prototype.print = function () {
            var e, t, n = this;
            return e = null != (t = shop.get("template_size")) ? t : "large", $.get("/" + e + ".label", function (e) {
                var t, r, i;
                return i = dymo.label.framework.openLabelXml(e), t = n.printer(), r = n.records(), i.print(t.name, "", r), ShopifyApp.Bar.loadingOff()
            })
        }, r.prototype.printer = function () {
            var e, t, n, r;
            if (t = dymo.label.framework.getPrinters(), !t.length) return ShopifyApp.flashError("No DYMO printers are installed!"), !1;
            for (n = 0, r = t.length; r > n; n++) if (e = t[n], "LabelWriterPrinter" === e.printerType) return e
        }, r.prototype.addRecord = function (e) {
            var t, n, r;
            n = this.builder.addRecord();
            for (t in e) r = e[t], n.setText(t, r);
            return n
        }, r.prototype.records = function () {
            var e, t, n, r, i, o, a, s;
            for (this.clearPrintQueue(), s = this.models, i = 0, a = s.length; a > i; i++) for (t = s[i], r = t.get("variant").get("print_quantity"), n = t.toObject(), "xsmall" === t.get("size") && (r = Math.ceil(r / 2), n.barcode2 = n.barcode, n.price2 = n.price), e = o = 1; r >= 1 ? r >= o : o >= r; e = r >= 1 ? ++o : --o) this.addRecord(n);
            return this.builder
        }, r
    }(Backbone.Collection)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.ProductCollection = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.model = BarcodePrinter.Product, r
    }(Backbone.Collection)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.ApplicationView = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.dymoEnv = function () {
            return dymo.label.framework.checkEnvironment()
        }, r.prototype.hasDymoPlugin = function () {
            return this.dymoEnv().isFrameworkInstalled
        }, r.prototype.btnLoadingOn = function () {
            return this.btnToggleLoad()
        }, r.prototype.btnLoadingOff = function (e, t) {
            return this.btnToggleLoad(), $(e).val(t)
        }, r.prototype.btnToggleLoad = function (e) {
            return $(e).toggleClass("is-loading"), $(e).prop("disabled", function (e, t) {
                return !t
            })
        }, r
    }(Backbone.View)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, r = [].indexOf || function (e) {
            for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
            return -1
        };
    BarcodePrinter.LabelShowView = function (t) {
        function i() {
            return e = i.__super__.constructor.apply(this, arguments)
        }
        return n(i, t), i.prototype.template = HandlebarsTemplates["labels/show"], i.prototype.initialize = function () {
            return Handlebars.registerHelper("labelAttrCheckedIf", function (e) {
                return r.call(this.properties, e) >= 0 ? "checked" : void 0
            }), Handlebars.registerHelper("isSelectedSize", function (e) {
                return this.size === e ? "selected" : void 0
            }), this.initTemplate()
        }, i.prototype.render = function () {
            var e, t, n, r, i;
            if ("small" === (i = this.model.get("size")) || "xsmall" === i) r = this.model.get("variant"), this.labelTemplate.setObjectText("barcode", r.get("barcode")), this.labelTemplate.setObjectText("price", r.get("priceWithSymbol"));
            else {
                t = this.model.toObject();
                for (e in t) n = t[e], "barcode" !== e && "price" !== e && this.labelTemplate.setObjectText(e, n)
            }
            return this.renderLabelPreview(), this.$el.html(this.template(this.model.toJSON())), $("body").append(this.el)
        }, i.prototype.events = {
            "change .label-attr": "updateProps",
            "change #label-size": "updateLabelTemplate"
        }, i.prototype.renderLabelPreview = function () {
            var e;
            return e = this.labelTemplate.render(), null != e ? this.model.set("src", "data:image/png;base64," + e) : void 0
        }, i.prototype.updateProps = function (e) {
            var t, n;
            return t = $(e.currentTarget).val(), n = this.model.get("properties"), e.currentTarget.checked ? n.push(t) : n.splice(n.indexOf(t), 1), this.model.set("properties", n), this.render()
        }, i.prototype.updateLabelTemplate = function (e) {
            var t;
            return t = $(e.currentTarget).val(), this.model.setTemplateSize(t), this.initTemplate()
        }, i.prototype.initTemplate = function () {
            var e = this;
            return this.loadLabelTemplate(this.model.get("size"), function (t) {
                return e.labelTemplate = t, e.render()
            })
        }, i.prototype.loadLabelTemplate = function (e, t) {
            return $.get("" + e + ".label", function (e) {
                return t(dymo.label.framework.openLabelXml(e))
            })
        }, i
    }(Backbone.View)
}.call(this),
function () {
    var e, t = {}.hasOwnProperty,
        n = function (e, n) {
            function r() {
                this.constructor = e
            }
            for (var i in n) t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        };
    BarcodePrinter.ProductsIndexView = function (t) {
        function r() {
            return e = r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t), r.prototype.tagName = "div", r.prototype.idName = "barcode-printer-index", r.prototype.template = HandlebarsTemplates["products/index"], r.prototype.initialize = function () {
            var e = this;
            return ShopifyApp.ready(function () {
                var t;
                return e.hasDymoPlugin() && (t = {
                    secondary: [{
                        label: "Design barcode template",
                        callback: e.designBarcode
                    }, {
                        label: "Assign barcodes",
                        callback: e.assignBarcodes
                    }]
                }), ShopifyApp.Bar.initialize({
                    title: e.hasDymoPlugin() ? "Recent products" : "Welcome",
                    icon: "/assets/printer-icon-20.png",
                    buttons: t
                }), e.render()
            })
        }, r.prototype.render = function () {
            var e;
            return this.hasDymoPlugin() ? (e = {
                products: this.collection.toJSON(),
                num_products_without_barcodes: shop.get("num_products_without_barcodes")
            }, this.$el.html(this.template(e))) : this.$el.html(HandlebarsTemplates["products/blank_slate"]({
                is_chrome: window.chrome
            })), $("body").html(this.el)
        }, r.prototype.designBarcode = function () {
            return ShopifyApp.Bar.loadingOff(), ShopifyApp.Modal.open({
                src: "/design_barcode_modal",
                title: "Design barcode template",
                height: 400,
                width: "small",
                buttons: {
                    primary: {
                        label: "Save barcode template",
                        message: "design_modal_save",
                        callback: function () {
                            return shop.saveLabelSettings(), ShopifyApp.Modal.close("save")
                        }
                    },
                    secondary: [{
                        label: "Cancel",
                        callback: function () {
                            return ShopifyApp.Modal.close("cancel")
                        }
                    }]
                }
            })
        }, r.prototype.assignBarcodes = function () {
            return ShopifyApp.Bar.loadingOff(), ShopifyApp.Modal.open({
                src: "/assign_barcodes_modal",
                title: "Assign barcodes",
                height: 150,
                width: "small",
                buttons: {
                    primary: {
                        label: "Assign barcodes",
                        callback: function () {
                            return shop.assignBarcodes(function (e) {
                                return ShopifyApp.flashNotice(e.message)
                            })
                        }
                    },
                    secondary: [{
                        label: "Cancel",
                        callback: function () {
                            return ShopifyApp.Modal.close("cancel")
                        }
                    }]
                }
            })
        }, r.prototype.events = {
            "click .assign-barcodes-notice": "assignBarcodes"
        }, r
    }(BarcodePrinter.ApplicationView)
}.call(this),
function () {
    var e, t = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, n = {}.hasOwnProperty,
        r = function (e, t) {
            function r() {
                this.constructor = e
            }
            for (var i in t) n.call(t, i) && (e[i] = t[i]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        };
    BarcodePrinter.ProductsShowView = function (n) {
        function i() {
            return this.print = t(this.print, this), e = i.__super__.constructor.apply(this, arguments)
        }
        return r(i, n), i.prototype.tagName = "div", i.prototype.className = function () {
            return this.hasDymoPlugin() ? "span24" : void 0
        }, i.prototype.template = HandlebarsTemplates["products/show"], i.prototype.initialize = function () {
            var e = this;
            return ShopifyApp.ready(function () {
                var t, n, r, i, o;
                if (e.model.get("images").length) for (t = e.model.get("images")[0].src, o = e.model.get("variants").models, r = 0, i = o.length; i > r; r++) n = o[r], n.set("src", t);
                return e.render()
            })
        }, i.prototype.renderAppBar = function () {
            var e, t, n;
            return t = _.reduce(this.model.get("variants").models, function (e, t) {
                return e + t.get("print_quantity")
            }, 0), this.hasDymoPlugin() && t > 0 ? (n = 1 === t ? "barcode" : "barcodes", e = {
                label: "Print " + t + " " + n,
                callback: this.print
            }) : e = {
                label: "Print barcodes",
                callback: this.print,
                style: "disabled"
            }, ShopifyApp.Bar.initialize({
                icon: "/assets/printer-icon-20.png",
                title: "" + this.model.get("title"),
                buttons: {
                    primary: e
                }
            })
        }, i.prototype.render = function () {
            var e;
            return this.renderAppBar(), this.hasDymoPlugin() ? (e = this.model.toJSON(), e.variants = this.model.get("variants").toJSON(), this.$el.html(this.template(e))) : this.$el.html(HandlebarsTemplates["products/blank_slate"]({
                is_chrome: window.chrome
            })), $("body").html(this.el)
        }, i.prototype.updatePrintQuantity = function (e) {
            var t, n;
            return n = $(e.currentTarget).parents().eq(1).data("variant-id"), t = this.model.get("variants").get(n), t.set("print_quantity", parseInt($(e.currentTarget).val(), 10)), this.renderAppBar()
        }, i.prototype.print = function () {
            return _gaq.push(["_trackEvent", "Barcodes", "Print", window.shop.get("url"), this.model.get("variants").length]), this.model.get("variants").print()
        }, i.prototype.events = {
            "change .print-qty": "updatePrintQuantity"
        }, i
    }(BarcodePrinter.ApplicationView)
}.call(this), /*Copyright (c), 2011 Sanford, L.P. All Rights Reserved.*/

function () {
    function e(e) {
        throw e
    }
    function t(e) {
        return function () {
            return this[e]
        }
    }
    function n(e, t, n) {
        e = e.split("."), n = n || mr, !(e[0] in n) && n.execScript && n.execScript("var " + e[0]);
        for (var r; e.length && (r = e.shift());) e.length || void 0 === t ? n = n[r] ? n[r] : n[r] = {} : n[r] = t
    }
    function r(e, t) {
        for (var n, r = e.split("."), i = t || mr; n = r.shift();) {
            if (!i[n]) return hr;
            i = i[n]
        }
        return i
    }
    function i() {}
    function o(e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array || !(e instanceof Object) && "[object Array]" == Object.prototype.toString.call(e) || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
            if (!(e instanceof Object || "[object Function]" != Object.prototype.toString.call(e) && ("undefined" == typeof e.call || "undefined" == typeof e.propertyIsEnumerable || e.propertyIsEnumerable("call")))) return "function"
        } else if ("function" == t && "undefined" == typeof e.call) return "object";
        return t
    }
    function a(e) {
        return "array" == o(e)
    }
    function s(e) {
        var t = o(e);
        return "array" == t || "object" == t && "number" == typeof e.length
    }
    function l(e) {
        return "string" == typeof e
    }
    function u(e) {
        return "function" == o(e)
    }
    function c(e) {
        return e = o(e), "object" == e || "array" == e || "function" == e
    }
    function p(e) {
        return e[gr] || (e[gr] = ++yr)
    }
    function f(e, t) {
        var n = t || mr;
        if (arguments.length > 2) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function () {
                var t = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(t, r), e.apply(n, t)
            }
        }
        return function () {
            return e.apply(n, arguments)
        }
    }
    function h(e, t) {
        function n() {}
        n.prototype = t.prototype, e.V = t.prototype, e.prototype = new n
    }
    function d(e) {
        this.stack = Error().stack || "", e && (this.message = String(e))
    }
    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = String(arguments[t]).replace(/\$/g, "$$$$");
            e = e.replace(/\%s/, n)
        }
        return e
    }
    function g(e) {
        return e = String(e), br.test(e) ? e : encodeURIComponent(e)
    }
    function y(e, t) {
        return t ? e.replace(wr, "&amp;").replace(xr, "&lt;").replace(kr, "&gt;").replace(Sr, "&quot;") : Tr.test(e) ? (-1 != e.indexOf("&") && (e = e.replace(wr, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(xr, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(kr, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(Sr, "&quot;")), e) : e
    }
    function v() {
        return Array.prototype.join.call(arguments, "")
    }
    function b(e, t) {
        for (var n = 0, r = String(e).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), i = String(t).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), o = Math.max(r.length, i.length), a = 0; 0 == n && o > a; a++) {
            var s = r[a] || "",
                l = i[a] || "",
                u = RegExp("(\\d*)(\\D*)", "g"),
                c = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = u.exec(s) || ["", "", ""],
                    f = c.exec(l) || ["", "", ""];
                if (0 == p[0].length && 0 == f[0].length) break;
                n = w(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || w(0 == p[2].length, 0 == f[2].length) || w(p[2], f[2])
            } while (0 == n)
        }
        return n
    }
    function w(e, t) {
        return t > e ? -1 : e > t ? 1 : 0
    }
    function x(e, t) {
        t.unshift(e), d.call(this, m.apply(hr, t)), t.shift(), this.nc = e
    }
    function k(t, n) {
        if (!t) {
            var r = Array.prototype.slice.call(arguments, 2),
                i = "Assertion failed";
            if (n) {
                i += ": " + n;
                var o = r
            }
            e(new x("" + i, o || []))
        }
        return t
    }
    function S(t) {
        e(new x("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)))
    }
    function T(e, t, n) {
        for (var r in e) t.call(n, e[r], r, e)
    }
    function _(e) {
        var t, n = [],
            r = 0;
        for (t in e) n[r++] = e[t];
        return n
    }
    function E(e) {
        var t, n = [],
            r = 0;
        for (t in e) n[r++] = t;
        return n
    }
    function C(e) {
        for (var t, n, r = 1; r < arguments.length; r++) {
            n = arguments[r];
            for (t in n) e[t] = n[t];
            for (var i = 0; i < _r.length; i++) t = _r[i], Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }
    }
    function A(e, t, n, r) {
        if (e.reduce) return r ? e.reduce(f(t, r), n) : e.reduce(t, n);
        var i = n;
        return Ar(e, function (n, o) {
            i = t.call(r, i, n, o, e)
        }), i
    }
    function N(e, t) {
        return k(e.length != hr), 1 == Er.splice.call(e, t, 1).length
    }
    function j() {
        return Er.concat.apply(Er, arguments)
    }
    function O(e) {
        if (a(e)) return j(e);
        for (var t = [], n = 0, r = e.length; r > n; n++) t[n] = e[n];
        return t
    }
    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n, r = arguments[t];
            if (a(r) || (n = s(r)) && r.hasOwnProperty("callee")) e.push.apply(e, r);
            else if (n) for (var i = e.length, o = r.length, l = 0; o > l; l++) e[i + l] = r[l];
            else e.push(r)
        }
    }
    function P(e, t, n) {
        return k(e.length != hr), arguments.length <= 2 ? Er.slice.call(e, t) : Er.slice.call(e, t, n)
    }
    function D() {}
    function M(e) {
        if ("function" == typeof e.M) return e.M();
        if (l(e)) return e.split("");
        if (s(e)) {
            for (var t = [], n = e.length, r = 0; n > r; r++) t.push(e[r]);
            return t
        }
        return _(e)
    }
    function I(e, t, n) {
        if ("function" == typeof e.forEach) e.forEach(t, n);
        else if (s(e) || l(e)) Ar(e, t, n);
        else {
            var r;
            if ("function" == typeof e.G) r = e.G();
            else if ("function" != typeof e.M) if (s(e) || l(e)) {
                r = [];
                for (var i = e.length, o = 0; i > o; o++) r.push(o);
                r = r
            } else r = E(e);
            else r = void 0;
            i = M(e), o = i.length;
            for (var a = 0; o > a; a++) t.call(n, i[a], r && r[a], e)
        }
    }
    function H() {}
    function B(t) {
        if (t instanceof H) return t;
        if ("function" == typeof t.ra) return t.ra(dr);
        if (s(t)) {
            var n = 0,
                r = new H;
            return r.next = function () {
                for (;;) {
                    if (n >= t.length && e(Nr), n in t) return t[n++];
                    n++
                }
            }, r
        }
        e(Error("Not implemented"))
    }
    function F(t, n, r) {
        if (s(t)) try {
            Ar(t, n, r)
        } catch (i) {
            i !== Nr && e(i)
        } else {
            t = B(t);
            try {
                for (;;) n.call(r, t.next(), void 0, t)
            } catch (o) {
                o !== Nr && e(o)
            }
        }
    }
    function R(t) {
        this.p = {}, this.i = [];
        var n = arguments.length;
        if (n > 1) {
            n % 2 && e(Error("Uneven number of arguments"));
            for (var r = 0; n > r; r += 2) this.w(arguments[r], arguments[r + 1])
        } else if (t) {
            t instanceof R ? (n = t.G(), r = t.M()) : (n = E(t), r = _(t));
            for (var i = 0; i < n.length; i++) this.w(n[i], r[i])
        }
    }
    function $(e) {
        if (e.c != e.i.length) {
            for (var t = 0, n = 0; t < e.i.length;) {
                var r = e.i[t];
                q(e.p, r) && (e.i[n++] = r), t++
            }
            e.i.length = n
        }
        if (e.c != e.i.length) {
            var i = {};
            for (n = t = 0; t < e.i.length;) r = e.i[t], q(i, r) || (e.i[n++] = r, i[r] = 1), t++;
            e.i.length = n
        }
    }
    function q(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function z(t, n) {
        this.gb = n, this.L = [], t > this.gb && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
        for (var r = 0; t > r; r++) this.L.push(this.X())
    }
    function W(e) {
        return e.L.length ? e.L.pop() : e.X()
    }
    function U(e, t) {
        e.L.length < e.gb ? e.L.push(t) : e.xa(t)
    }
    function X(e, t) {
        try {
            var n, i = r("window.location.href");
            return n = "string" == typeof e ? {
                message: e,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: i,
                stack: "Not available"
            } : e.lineNumber && e.fileName && e.stack ? e : {
                message: e.message,
                name: e.name,
                lineNumber: e.lineNumber || e.lc || "Not available",
                fileName: e.fileName || e.filename || e.sourceURL || i,
                stack: e.stack || "Not available"
            }, "Message: " + y(n.message) + '\nUrl: <a href="view-source:' + n.fileName + '" target="_new">' + n.fileName + "</a>\nLine: " + n.lineNumber + "\n\nBrowser stack:\n" + y(n.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + y(V(t) + "-> ")
        } catch (o) {
            return "Exception trying to expose exception! You win, we lose. " + o
        }
    }
    function V(e) {
        return J(e || arguments.callee.caller, [])
    }
    function J(e, t) {
        var n = [];
        if (Cr(t, e) >= 0) n.push("[...circular reference...]");
        else if (e && t.length < 50) {
            n.push(Y(e) + "(");
            for (var r = e.arguments, i = 0; i < r.length; i++) {
                i > 0 && n.push(", ");
                var o;
                switch (o = r[i], typeof o) {
                    case "object":
                        o = o ? "object" : "null";
                        break;
                    case "string":
                        o = o;
                        break;
                    case "number":
                        o = String(o);
                        break;
                    case "boolean":
                        o = o ? "true" : "false";
                        break;
                    case "function":
                        o = (o = Y(o)) ? o : "[fn]";
                        break;
                    default:
                        o = typeof o
                }
                o.length > 40 && (o = o.substr(0, 40) + "..."), n.push(o)
            }
            t.push(e), n.push(")\n");
            try {
                n.push(J(e.caller, t))
            } catch (a) {
                n.push("[exception trying to get caller]\n")
            }
        } else e ? n.push("[...long stack...]") : n.push("[end]");
        return n.join("")
    }
    function Y(e) {
        if (e = String(e), !jr[e]) {
            var t = /function ([^\(]+)/.exec(e);
            jr[e] = t ? t[1] : "[Anonymous]"
        }
        return jr[e]
    }
    function K(t, n) {
        (t.indexOf("#") >= 0 || t.indexOf("?") >= 0) && e(Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + t + "]"));
        var r = t.length - 1;
        return r >= 0 && t.indexOf("/", r) == r && (t = t.substr(0, t.length - 1)), 0 == n.lastIndexOf("/", 0) && (n = n.substr(1)), v(t, "/", n)
    }
    function G(e, t) {
        var n;
        e instanceof G ? (this.U(t == hr ? e.u : t), Q(this, e.v), Z(this, e.O), et(this, e.t), tt(this, e.I), nt(this, e.q), rt(this, e.k.A()), ot(this, e.K)) : e && (n = String(e).match(Or)) ? (this.U( !! t), Q(this, n[1] || "", fr), Z(this, n[2] || "", fr), et(this, n[3] || "", fr), tt(this, n[4]), nt(this, n[5] || "", fr), rt(this, n[6] || "", fr), ot(this, n[7] || "", fr)) : (this.U( !! t), this.k = new pt(hr, this, this.u))
    }
    function Q(e, t, n) {
        return at(e), delete e.m, e.v = n ? lt(t) : t, e.v && (e.v = e.v.replace(/:$/, "")), e
    }
    function Z(e, t, n) {
        return at(e), delete e.m, e.O = n ? lt(t) : t, e
    }
    function et(e, t, n) {
        return at(e), delete e.m, e.t = n ? lt(t) : t, e
    }
    function tt(t, n) {
        return at(t), delete t.m, n ? (n = Number(n), (isNaN(n) || 0 > n) && e(Error("Bad port number " + n)), t.I = n) : t.I = hr, t
    }
    function nt(e, t, n) {
        return at(e), delete e.m, e.q = n ? lt(t) : t, e
    }
    function rt(e, t, n) {
        return at(e), delete e.m, t instanceof pt ? (e.k = t, e.k.ga = e, e.k.U(e.u)) : (n || (t = ut(t, Mr)), e.k = new pt(t, e, e.u)), e
    }
    function it(e, t, n) {
        at(e), delete e.m, a(n) || (n = [String(n)]);
        var r = e.k;
        if (t = t, n = n, ft(r), ht(r), t = dt(r, t), r.C(t)) {
            var i = r.d.o(t);
            a(i) ? r.c -= i.length : r.c--
        }
        return n.length > 0 && (r.d.w(t, n), r.c += n.length), e
    }
    function ot(e, t, n) {
        return at(e), delete e.m, e.K = n ? lt(t) : t, e
    }
    function at(t) {
        t.Sb && e(Error("Tried to modify a read-only Uri"))
    }
    function st(e, t) {
        e instanceof G || (e = e instanceof G ? e.A() : new G(e, void 0)), t instanceof G || (t = t instanceof G ? t.A() : new G(t, void 0));
        var n = e,
            r = t,
            i = n.A(),
            o = !! r.v;
        o ? Q(i, r.v) : o = !! r.O, o ? Z(i, r.O) : o = !! r.t, o ? et(i, r.t) : o = r.I != hr;
        var a = r.q;
        if (o) tt(i, r.I);
        else if (o = !! r.q) if ("/" != a.charAt(0) && (n.t && !n.q ? a = "/" + a : (n = i.q.lastIndexOf("/"), -1 != n && (a = i.q.substr(0, n + 1) + a))), ".." == a || "." == a) a = "";
        else if (-1 != a.indexOf("./") || -1 != a.indexOf("/.")) {
            n = 0 == a.lastIndexOf("/", 0), a = a.split("/");
            for (var s = [], l = 0; l < a.length;) {
                var u = a[l++];
                "." == u ? n && l == a.length && s.push("") : ".." == u ? ((s.length > 1 || 1 == s.length && "" != s[0]) && s.pop(), n && l == a.length && s.push("")) : (s.push(u), n = fr)
            }
            a = s.join("/")
        }
        return o ? nt(i, a) : o = "" !== r.k.toString(), o ? (n = r.k, n.P || (n.P = lt(n.toString())), rt(i, n.P, void 0)) : o = !! r.K, o && ot(i, r.K), i
    }
    function lt(e) {
        return e ? decodeURIComponent(e) : ""
    }
    function ut(e, t) {
        var n = hr;
        return l(e) && (n = e, Lr.test(n) || (n = encodeURI(e)), n.search(t) >= 0 && (n = n.replace(t, ct))), n
    }
    function ct(e) {
        return e = e.charCodeAt(0), "%" + (15 & e >> 4).toString(16) + (15 & e).toString(16)
    }
    function pt(e, t, n) {
        this.B = e || hr, this.ga = t || hr, this.u = !! n
    }
    function ft(e) {
        if (!e.d && (e.d = new R, e.B)) for (var t = e.B.split("&"), n = 0; n < t.length; n++) {
            var r = t[n].indexOf("="),
                i = hr,
                o = hr;
            r >= 0 ? (i = t[n].substring(0, r), o = t[n].substring(r + 1)) : i = t[n], i = decodeURIComponent(i.replace(/\+/g, " ")), i = dt(e, i), e.add(i, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "")
        }
    }
    function ht(e) {
        delete e.P, delete e.B, e.ga && delete e.ga.m
    }
    function dt(e, t) {
        var n = String(t);
        return e.u && (n = n.toLowerCase()), n
    }
    function mt(e) {
        var t;
        t = (t = e.className) && "function" == typeof t.split ? t.split(/\s+/) : [];
        var n;
        n = P(arguments, 1);
        for (var r = 0, i = 0; i < n.length; i++) Cr(t, n[i]) >= 0 || (t.push(n[i]), r++);
        return n = r == n.length, e.className = t.join(" "), n
    }
    function gt() {
        return mr.navigator ? mr.navigator.userAgent : hr
    }
    function yt(e) {
        return ni[e] || (ni[e] = b(zr, e) >= 0)
    }
    function vt(e, t) {
        T(t, function (t, n) {
            "style" == n ? e.style.cssText = t : "class" == n ? e.className = t : "for" == n ? e.htmlFor = t : n in oi ? e.setAttribute(oi[n], t) : e[n] = t
        })
    }
    function bt() {
        var e = arguments,
            t = e[0],
            n = e[1];
        if (!ri && n && (n.name || n.type)) {
            if (t = ["<", t], n.name && t.push(' name="', y(n.name), '"'), n.type) {
                t.push(' type="', y(n.type), '"');
                var r = {};
                C(r, n), n = r, delete n.type
            }
            t.push(">"), t = t.join("")
        }
        return t = document.createElement(t), n && (l(n) ? t.className = n : a(n) ? mt.apply(hr, [t].concat(n)) : vt(t, n)), e.length > 2 && wt(document, t, e, 2), t
    }
    function wt(e, t, n, r) {
        function i(n) {
            n && t.appendChild(l(n) ? e.createTextNode(n) : n)
        }
        for (r = r; r < n.length; r++) {
            var o = n[r];
            !s(o) || c(o) && o.nodeType > 0 ? i(o) : Ar(Et(o) ? O(o) : o, i)
        }
    }
    function xt(e) {
        for (var t; t = e.firstChild;) e.removeChild(t)
    }
    function kt(e) {
        return Vr ? e.document || e.contentWindow.document : e.contentDocument || e.contentWindow.document
    }
    function St(e, t) {
        var n = [];
        return Tt(e, t, n, dr), n
    }
    function Tt(e, t, n, r) {
        if (e != hr) for (var i, o = 0; i = e.childNodes[o]; o++) {
            if (t(i) && (n.push(i), r)) return fr;
            if (Tt(i, t, n, r)) return fr
        }
        return dr
    }
    function _t(e, t, n) {
        if (!(e.nodeName in ai)) if (3 == e.nodeType) n ? t.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : t.push(e.nodeValue);
        else if (e.nodeName in si) t.push(si[e.nodeName]);
        else for (e = e.firstChild; e;) _t(e, t, n), e = e.nextSibling
    }
    function Et(e) {
        if (e && "number" == typeof e.length) {
            if (c(e)) return "function" == typeof e.item || "string" == typeof e.item;
            if (u(e)) return "function" == typeof e.item
        }
        return dr
    }
    function Ct(t) {
        if ("undefined" != typeof DOMParser) return (new DOMParser).parseFromString(t, "application/xml");
        if ("undefined" != typeof ActiveXObject) {
            var n = new ActiveXObject("MSXML2.DOMDocument");
            if (n) {
                n.resolveExternals = dr, n.validateOnParse = dr;
                try {
                    n.setProperty("ProhibitDTD", fr), n.setProperty("MaxXMLSize", 2048), n.setProperty("MaxElementDepth", 256)
                } catch (r) {}
            }
            return n.loadXML(t), n
        }
        e(Error("Your browser does not support loading xml documents"))
    }
    function At(t) {
        return "undefined" != typeof XMLSerializer ? (new XMLSerializer).serializeToString(t) : (t = t.xml) ? t : (e(Error("Your browser does not support serializing XML documents")), void 0)
    }
    function Nt(e, t) {
        this.ga = new G(e), this.Eb = t ? t : "callback", this.Oa = 5e3
    }
    function jt(e, t, n, r) {
        return function () {
            Lt(e, t, dr), r && r(n)
        }
    }
    function Ot(e, t, n, r) {
        return function () {
            mr.clearTimeout(r), Lt(e, t, fr), n.apply(void 0, arguments)
        }
    }
    function Lt(e, t, n) {
        mr.setTimeout(function () {
            t && t.parentNode && t.parentNode.removeChild(t)
        }, 0), mr._callbacks_[e] && (n ? delete mr._callbacks_[e] : mr._callbacks_[e] = i)
    }
    function Pt(e, t, n, r, i) {
        this.reset(e, t, n, r, i)
    }
    function Dt(e) {
        this.da = e
    }
    function Mt(e, t) {
        this.name = e, this.value = t
    }
    function It(e) {
        return e.ba ? e.ba : e.na ? It(e.na) : (S("Root logger has no level set."), hr)
    }
    function Ht(e) {
        yi || (yi = new Dt(""), gi[""] = yi, yi.kb(fi));
        var t;
        if (!(t = gi[e])) {
            t = new Dt(e);
            var n = e.lastIndexOf("."),
                r = e.substr(n + 1);
            n = Ht(e.substr(0, n)), n.ta || (n.ta = {}), n.ta[r] = t, t.na = n, t = gi[e] = t
        }
        return t
    }
    function Bt() {
        this.Y = [], this.La = new R, this.rb = this.sb = this.tb = this.mb = 0, this.fa = new R, this.Sa = this.qb = 0, this.Vb = 1, this.Aa = new z(0, 4e3), this.Aa.X = function () {
            return new Rt
        }, this.nb = new z(0, 50), this.nb.X = function () {
            return new Ft
        };
        var e = this;
        this.Fa = new z(0, 2e3), this.Fa.X = function () {
            return String(e.Vb++)
        }, this.Fa.xa = function () {}, this.Hb = 3
    }
    function Ft() {
        this.Pa = this.pb = this.va = 0
    }
    function Rt() {}
    function $t(e, t, n, r) {
        var i = [];
        return -1 == n ? i.push("    ") : i.push(qt(e.Xa - n)), i.push(" ", zt(e.Xa - t)), 0 == e.Ba ? i.push(" Start        ") : 1 == e.Ba ? (i.push(" Done "), i.push(qt(e.pc - e.startTime), " ms ")) : i.push(" Comment      "), i.push(r, e), e.jc > 0 && i.push("[VarAlloc ", e.jc, "] "), i.join("")
    }
    function qt(e) {
        e = Math.round(e);
        var t = "";
        return 1e3 > e && (t = " "), 100 > e && (t = "  "), 10 > e && (t = "   "), t + e
    }
    function zt(e) {
        return e = Math.round(e), String(100 + e / 1e3 % 60).substring(1, 3) + "." + String(1e3 + e % 1e3).substring(1, 4)
    }
    function Wt() {
        this.jb = vr()
    }
    function Ut(e, t) {
        this.type = e, this.currentTarget = this.target = t
    }
    function Xt(e, t) {
        e && this.ka(e, t)
    }
    function Vt() {}
    function Jt(t, n, r, i, o) {
        if (n) {
            if (a(n)) {
                for (var s = 0; s < n.length; s++) Jt(t, n[s], r, i, o);
                return hr
            }
            i = !! i;
            var l = Di;
            n in l || (l[n] = xi()), l = l[n], i in l || (l[i] = xi(), l.c++), l = l[i];
            var u, c = p(t);
            if (l.s++, l[c]) {
                for (u = l[c], s = 0; s < u.length; s++) if (l = u[s], l.ca == r && l.Ea == o) {
                    if (l.T) break;
                    return u[s].key
                }
            } else u = l[c] = Si(), l.c++;
            return s = _i(), s.src = t, l = Ai(), l.ka(r, s, t, n, i, o), r = l.key, s.key = r, u.push(l), Pi[r] = l, Mi[c] || (Mi[c] = Si()), Mi[c].push(l), t.addEventListener ? t != mr && t.Ta || t.addEventListener(n, s, i) : t.attachEvent(Zt(n), s), r
        }
        e(Error("Invalid event type"))
    }
    function Yt(e, t, n, r, i) {
        if (a(t)) {
            for (var o = 0; o < t.length; o++) Yt(e, t[o], n, r, i);
            return hr
        }
        if (r = !! r, o = Di, e = t in o && (o = o[t], r in o && (o = o[r], e = p(e), o[e])) ? o[e] : hr, !e) return dr;
        for (o = 0; o < e.length; o++) if (e[o].ca == n && e[o].capture == r && e[o].Ea == i) return Kt(e[o].key);
        return dr
    }
    function Kt(e) {
        if (!Pi[e]) return dr;
        var t = Pi[e];
        if (t.T) return dr;
        var n = t.src,
            r = t.type,
            i = t.ib,
            o = t.capture;
        if (n.removeEventListener ? n != mr && n.Ta || n.removeEventListener(r, i, o) : n.detachEvent && n.detachEvent(Zt(r), i), n = p(n), i = Di[r][o][n], Mi[n]) {
            var a = Mi[n],
                s = Cr(a, t);
            s >= 0 && N(a, s), 0 == a.length && delete Mi[n]
        }
        return t.T = fr, i.hb = fr, Gt(r, o, n, i), delete Pi[e], fr
    }
    function Gt(e, t, n, r) {
        if (!r.ma && r.hb) {
            for (var i = 0, o = 0; i < r.length; i++) if (r[i].T) {
                var a = r[i].ib;
                a.src = hr, Ci(a), Ni(r[i])
            } else i != o && (r[o] = r[i]), o++;
            r.length = o, r.hb = dr, 0 == o && (Ti(r), delete Di[e][t][n], Di[e][t].c--, 0 == Di[e][t].c && (ki(Di[e][t]), delete Di[e][t], Di[e].c--), 0 == Di[e].c && (ki(Di[e]), delete Di[e]))
        }
    }
    function Qt(e, t, n) {
        var r = 0,
            i = t == hr,
            o = n == hr;
        if (n = !! n, e == hr) T(Mi, function (e) {
            for (var a = e.length - 1; a >= 0; a--) {
                var s = e[a];
                !i && t != s.type || !o && n != s.capture || (Kt(s.key), r++)
            }
        });
        else if (e = p(e), Mi[e]) {
            e = Mi[e];
            for (var a = e.length - 1; a >= 0; a--) {
                var s = e[a];
                !i && t != s.type || !o && n != s.capture || (Kt(s.key), r++)
            }
        }
        return r
    }
    function Zt(e) {
        return e in Ii ? Ii[e] : Ii[e] = "on" + e
    }
    function en(e, t, n, r, i) {
        var o = 1;
        if (t = p(t), e[t]) {
            e.s--, e = e[t], e.ma ? e.ma++ : e.ma = 1;
            try {
                for (var a = e.length, s = 0; a > s; s++) {
                    var l = e[s];
                    l && !l.T && (o &= tn(l, i) !== dr)
                }
            } finally {
                e.ma--, Gt(n, r, t, e)
            }
        }
        return Boolean(o)
    }
    function tn(e, t) {
        var n = e.handleEvent(t);
        return e.Ra && Kt(e.key), n
    }
    function nn() {}
    function rn(t, n, r) {
        return u(t) ? r && (t = f(t, r)) : t && "function" == typeof t.handleEvent ? t = f(t.handleEvent, t) : e(Error("Invalid listener argument")), n > 2147483647 ? -1 : Hi.setTimeout(t, n || 0)
    }
    function on(e, t, n) {
        this.Ia = e, this.Rb = t || 0, this.cb = n, this.Fb = f(this.Ib, this)
    }
    function an() {
        Xr && (this.ua = {}, this.ub = {}, this.lb = [])
    }
    function sn(e, t) {
        if (e.ya) {
            var n = l(t) ? t : c(t) ? p(t) : "";
            e.e.log(mi, "Pushing context: " + t + " (" + n + ")", void 0), e.lb.push(n)
        }
    }
    function ln(e) {
        if (e.ya) {
            var t = e.lb.pop();
            e.e.log(mi, "Popping context: " + t, void 0), un(e, t)
        }
    }
    function un(e, t) {
        var n = e.ub[t],
            r = e.ua[t];
        n && r && (e.e.log(mi, "Updating dependent contexts", void 0), Ar(n, function (e) {
            Ar(r, function (t) {
                var n = this.ua;
                n[e] || (n[e] = []), Cr(n[e], t) >= 0 || n[e].push(t), n = this.ub, n[t] || (n[t] = []), Cr(n[t], e) >= 0 || n[t].push(e)
            }, this)
        }, e))
    }
    function cn() {}
    function pn(e, t) {
        var n = [];
        return fn(e, t, n), n.join("")
    }
    function fn(t, n, r) {
        switch (typeof n) {
            case "string":
                hn(t, n, r);
                break;
            case "number":
                r.push(isFinite(n) && !isNaN(n) ? n : "null");
                break;
            case "boolean":
                r.push(n);
                break;
            case "undefined":
                r.push("null");
                break;
            case "object":
                if (n == hr) {
                    r.push("null");
                    break
                }
                if (a(n)) {
                    var i = n.length;
                    r.push("[");
                    for (var o = "", s = 0; i > s; s++) r.push(o), fn(t, n[s], r), o = ",";
                    r.push("]");
                    break
                }
                r.push("{"), i = "";
                for (o in n) n.hasOwnProperty(o) && (s = n[o], "function" != typeof s && (r.push(i), hn(t, o, r), r.push(":"), fn(t, s, r), i = ","));
                r.push("}");
                break;
            case "function":
                break;
            default:
                e(Error("Unknown type: " + typeof n))
        }
    }
    function hn(e, t, n) {
        n.push('"', t.replace($i, function (e) {
            if (e in Ri) return Ri[e];
            var t = e.charCodeAt(0),
                n = "\\u";
            return 16 > t ? n += "000" : 256 > t ? n += "00" : 4096 > t && (n += "0"), Ri[e] = n + t.toString(16)
        }), '"')
    }
    function dn() {
        this.da = "closure_frame" + zi++, this.Z = [], qi[this.da] = this
    }
    function mn(e, t, n, r, i) {
        var o = new dn;
        Jt(o, "ready", o.D, dr, o), t && Jt(o, "complete", t), o.send(e, n, r, i)
    }
    function gn(e, t) {
        I(t, function (t, n) {
            var r = bt("input", {
                type: "hidden",
                name: n,
                value: t
            });
            e.appendChild(r)
        })
    }
    function yn(e, t) {
        e.e.log(hi, "Iframe loaded", void 0), e.ja = fr, e.z = dr;
        var n;
        try {
            var r = t.body;
            e.Ga = r.textContent || r.innerText, e.Tb = r.innerHTML
        } catch (i) {
            n = 1
        }
        var o;
        n || "function" != typeof e.Wa || (o = e.Wa(t)) && (n = 4), e.e.log(di, "Last content: " + e.Ga, void 0), e.e.log(di, "Last uri: " + e.Ha, void 0), n ? (e.e.log(hi, "Load event occurred but failed", void 0), vn(e, n, o)) : (e.e.log(hi, "Load succeeded", void 0), e.Na = fr, e.aa = 0, e.dispatchEvent("complete"), e.dispatchEvent("success"), bn(e))
    }
    function vn(e, t, n) {
        e.za || (e.Na = dr, e.z = dr, e.ja = fr, e.aa = t, 4 == t && (e.Ub = n), e.dispatchEvent("complete"), e.dispatchEvent("error"), bn(e), e.za = fr)
    }
    function bn(e) {
        e.e.info("Ready for new requests");
        var t = e.f;
        wn(e), xn(e), sn(Fi, t);
        try {
            e.dispatchEvent("ready")
        } finally {
            ln(Fi)
        }
    }
    function wn(e) {
        var t = e.f;
        t && (t.onreadystatechange = hr, t.onload = hr, t.onerror = hr, e.Z.push(t)), e.H && (Hi.clearTimeout(e.H), e.H = hr), Xr || Wr ? e.H = rn(e.wa, 2e3, e) : e.wa(), e.f = hr, e.N = hr
    }
    function xn(e) {
        e.h && e.h == Bi && xt(e.h), e.h = hr
    }
    function kn(e) {
        return e.f ? kt(Sn(e)) : hr
    }
    function Sn(e) {
        return e.f ? Ur ? e.f : kt(e.f).getElementById(e.N + "_inner") : hr
    }
    function Tn() {}
    function _n(e, t, n, r) {
        if (t = e.ownerDocument.createElement(t), n && t.appendChild(e.ownerDocument.createTextNode(n)), r) for (var i in r) t.setAttribute(i, r[i]);
        return e.appendChild(t), t
    }
    function En(e) {
        if (!e) return "";
        var t = [];
        return _t(e, t, dr), t.join("")
    }
    function Cn(e, t) {
        var n = e.getElementsByTagName(t);
        return n.length > 0 ? n[0] : void 0
    }
    function An(e, t) {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(e.ownerDocument.createTextNode(t))
    }
    function Nn(e, t, n, r) {
        this.printerName = e, this.jobId = t, this.status = n, this.statusMessage = r
    }
    function jn(e) {
        var t = {};
        return e = e.split(" "), e.length >= 1 && (t.status = parseInt(e[0], 10)), t.statusMessage = e.slice(1).join(" "), t
    }
    function On(e) {
        for (var t = 0; t < navigator.plugins.length; ++t) for (var n = navigator.plugins[t], r = 0; r < n.length; ++r) if (n[r].type == e) return fr;
        return dr
    }
    function Ln() {
        if (!document.getElementById("_DymoLabelFrameworkJslSafariPlugin")) {
            var e = document.createElement("embed");
            e.type = "application/x-dymolabel", e.id = "_DymoLabelFrameworkJslSafariPlugin", e.width = 1, e.height = 1, e.hidden = fr, document.body.appendChild(e)
        }
        return window._DymoLabelFrameworkJslSafariPlugin
    }
    function Pn(e) {
        if (!document.getElementById("_DymoLabelFrameworkJslPlugin")) {
            var t = document.createElement("embed");
            t.type = "application/x-dymolabel", t.id = "_DymoLabelFrameworkJslPlugin", e ? (t.width = 1, t.height = 1, t.hidden = fr) : (t.width = 0, t.height = 0, t.hidden = dr), document.body.appendChild(t)
        }
        return document.getElementById("_DymoLabelFrameworkJslPlugin")
    }
    function Dn() {
        var e = Pn(fr);
        return e.getPrinters || (document.body.removeChild(e), e = Pn(dr)), e
    }
    function Mn(e) {
        if (!document.getElementById("_DymoLabelFrameworkJslPlugin")) {
            var t = document.createElement("embed");
            t.type = "application/x-npapi-dymolabel", t.id = "_DymoLabelFrameworkJslPlugin", e ? (t.width = 1, t.height = 1, t.hidden = fr) : (t.width = 0, t.height = 0, t.hidden = dr), document.body.appendChild(t), t.getPrinters || (t.width = 1, t.height = 1, t.hidden = dr)
        }
        return document.getElementById("_DymoLabelFrameworkJslPlugin")
    }
    function In() {
        var e = Mn(fr);
        return e.getPrinters || (document.body.removeChild(e), e = Mn(dr)), e
    }
    function Hn() {
        var t = new ActiveXObject("DYMOLabelFrameworkIEPlugin.Plugin");
        return "object" != typeof t && e(Error("createFramework(): unable to create DYMO.Label.Framework object. Check DYMO Label Framework is installed")), t
    }
    function Bn() {
        if (!Gi) {
            var t = er();
            if ("" != t.errorDetails && e(Error(t.errorDetails)), "ActiveXObject" in window) {
                Gi = {};
                var n = Hn();
                Gi.getPrinters = function () {
                    return n.GetPrinters()
                }, Gi.openLabelFile = function (e) {
                    return n.OpenLabelFile(e)
                }, Gi.printLabel = function (e, t, r, i) {
                    n.PrintLabel(e, t, r, i)
                }, Gi.renderLabel = function (e, t, r) {
                    return n.RenderLabel(e, t, r)
                }, Gi.loadImageAsPngBase64 = function (e) {
                    return n.LoadImageAsPngBase64(e)
                }, Gi.printLabel2 = function (e, t, r, i) {
                    return n.PrintLabel2(e, t, r, i).toString()
                }, Gi.getJobStatus = function (e, t) {
                    var r = jn(n.GetJobStatus(e, parseInt(t, 10)));
                    return new Nn(e, t, r.status, r.statusMessage)
                }
            } else if (-1 != navigator.platform.indexOf("Win")) {
                var r = Dn();
                r ? (Gi = {}, Gi.getPrinters = function () {
                    return r.getPrinters()
                }, Gi.openLabelFile = function (e) {
                    return r.openLabelFile(e)
                }, Gi.printLabel = function (e, t, n, i) {
                    r.printLabel(e, t, n, i)
                }, Gi.renderLabel = function (e, t, n) {
                    return r.renderLabel(e, t, n)
                }, Gi.loadImageAsPngBase64 = function (e) {
                    return r.loadImageAsPngBase64(e)
                }, Gi.printLabel2 = function (e, t, n, i) {
                    return u(r.printLabel2) ? r.printLabel2(e, t, n, i).toString() : (r.printLabel(e, t, n, i), void 0)
                }, Gi.getJobStatus = function (e, t) {
                    var n;
                    return n = u(r.getJobStatus) ? jn(r.getJobStatus(e, parseInt(t, 10))) : {
                        status: Ki.qa,
                        statusMessage: "not implemented"
                    }, new Nn(e, t, n.status, n.statusMessage)
                }) : e(Error("DYMO Label Framework is not installed"))
            } else {
                var i;
                (i = On("application/x-dymolabel") ? Ln() : In()) ? (Gi = {}, Gi.getPrinters = function () {
                    return i.getPrinters()
                }, Gi.openLabelFile = function (t) {
                    var n = i.openLabelFile(t);
                    return n || e(Error("Unable to open label file '" + t + "'")), n
                }, Gi.printLabel = function (e, t, n, r) {
                    i.printLabel(n, e, t, r)
                }, Gi.renderLabel = function (e, t, n) {
                    return i.renderLabel(e, t, n)
                }, Gi.loadImageAsPngBase64 = function (t) {
                    var n = i.loadImageAsPngBase64(t);
                    return n || e(Error("Unable to load image from uri '" + t + "'")), n
                }, Gi.printLabel2 = function (e, t, n, r) {
                    return u(i.printLabel2) ? i.printLabel2(n, e, t, r).toString() : (i.printLabel(n, e, t, r), void 0)
                }, Gi.getJobStatus = function (e, t) {
                    var n;
                    return n = u(i.getJobStatus) ? jn(i.getJobStatus(e, parseInt(t, 10))) : {
                        status: Ki.qa,
                        statusMessage: "not implemented"
                    }, new Nn(e, t, n.status, n.statusMessage)
                }) : e(Error("DYMO Label Framework is not installed"))
            }
        }
        return Gi
    }
    function Fn(e, t, n, r, i) {
        this.printerType = e, this.name = t, this.modelName = n, this.isConnected = r, this.isLocal = i, this.ea = this.l = ""
    }
    function Rn(e, t, n, r, i) {
        Fn.call(this, "LabelWriterPrinter", e, t, n, r), this.isTwinTurbo = i
    }
    function $n(e, t, n, r, i) {
        Fn.call(this, "TapePrinter", e, t, n, r), this.isAutoCutSupported = i
    }
    function qn(e, t) {
        this.W = e, this.ia = t
    }
    function zn(e, t) {
        var n = e.Ca(),
            r = e.ia,
            i = e.W.l;
        new Nt(st(i, "getPrintJobStatus"), "callback").send({
            jobId: r,
            printerName: e.W.ea
        }, function (e) {
            t(new Nn(n, r, e.status, e.statusMessage))
        }, function () {
            t(new Nn(n, r, Ki.pa, 'Error processing getPrintJobStatus(): Unable to contact "' + i + '"'))
        })
    }
    function Wn() {
        this.sa = []
    }
    function Un(e) {
        for (var t = Ct("<LabelSet/>"), n = t.documentElement, r = 0; r < e.length; r++) {
            var i, o = e[r],
                a = t.createElement("LabelRecord");
            for (i in o) {
                var s = o[i];
                if ("function" != typeof s) {
                    s = s.toString();
                    var l = t.createElement("ObjectData");
                    l.setAttribute("Name", i), 0 == s.indexOf("<TextMarkup>") ? (s = Ct(s), l.appendChild(s.documentElement.cloneNode(fr))) : l.appendChild(t.createTextNode(s)), a.appendChild(l)
                }
            }
            n.appendChild(a)
        }
        return At(t)
    }
    function Xn() {}
    function Vn(e) {
        this.Qa = Ct(e)
    }
    function Jn(e, t) {
        var n = t || Qi;
        return St(e.Qa.documentElement, function (e) {
            return 1 == e.nodeType && Cr(n, e.tagName) >= 0
        })
    }
    function Yn(e) {
        return Jn(e, ["AddressObject"])
    }
    function Kn(t, n) {
        for (var r = Jn(t), i = 0; i < r.length; i++) {
            var o = r[i];
            if (En(Cn(o, "Name")) == n) return o
        }
        e(Error("getObjectByNameElement(): no object with name '" + n + "' was found"))
    }
    function Gn(e, t) {
        return A(Cn(t, "StyledText").getElementsByTagName("String"), function (e, t) {
            return e + En(t)
        }, "")
    }
    function Qn(e, t, n) {
        for (var r = Cn(t, "StyledText"), i = [], o = r.getElementsByTagName("Element"), a = fr, s = 0; s < o.length; s++) {
            var l = o[s],
                u = En(Cn(l, "String"));
            if (u && u.length) {
                u = u.split("\n");
                var c = u.length;
                if (1 != c || a) {
                    var p = 0;
                    for (a || (p = 1), a = Cn(l, "Attributes"); c - 1 > p; p++) i.push(a);
                    u[c - 1].length > 0 ? (i.push(a), a = dr) : a = fr
                }
            }
        }
        o = Cn(t, "LineFonts"), t = [], o && (t = o.getElementsByTagName("Font"));
        var f;
        for (0 == t.length && (f = Ct('<Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />').documentElement), o = Ct('<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />').documentElement; r.firstChild;) r.removeChild(r.firstChild);
        for (n = n.split("\n"), s = 0; s < n.length; s++) p = n[s].replace("\r", ""), s < n.length - 1 && (p += "\n"), a = f, t.length > 0 ? a = s < t.length ? t[s] : t[t.length - 1] : i.length > 0 && (a = s < i.length ? Cn(i[s], "Font") : Cn(i[i.length - 1], "Font")), l = o, s < i.length && (l = Cn(i[s], "ForeColor")), u = r.ownerDocument.createElement("Element"), c = r.ownerDocument.createElement("String"), An(c, p), p = r.ownerDocument.createElement("Attributes"), p.appendChild(a.cloneNode(fr)), p.appendChild(l.cloneNode(fr)), u.appendChild(c), u.appendChild(p), r.appendChild(u);
        return e
    }
    function Zn(e, t, n) {
        this.isBrowserSupported = e, this.isFrameworkInstalled = t, this.errorDetails = n
    }
    function er() {
        var e = {
            la: dr,
            $: dr,
            F: ""
        }, t = window.navigator.platform;
        if (-1 != t.indexOf("Win")) if ("ActiveXObject" in window) {
            e.la = fr;
            try {
                "object" != typeof new ActiveXObject("DYMOLabelFrameworkIEPlugin.Plugin") ? e.F = "Unable to create DYMO.Label.Framework ActiveX object. Check that DYMO.Label.Framework is installed" : e.$ = fr
            } catch (n) {
                e.F = "Unable to create DYMO.Label.Framework ActiveX object. Check that DYMO.Label.Framework is installed. Exception details: " + n
            }
        } else e.la = fr, On("application/x-dymolabel") ? e.$ = fr : e.F = "DYMO Label Framework Plugin is not installed";
        else -1 != t.indexOf("Mac") ? (e.la = fr, On("application/x-dymolabel") ? (t = Ln(), t.GetAPIVersion() >= "2.0" ? e.$ = fr : e.F = "DYMO Label Safari Plugin is installed but outdated. Install the latest version.") : On("application/x-npapi-dymolabel") ? (t = In(), t && t.getPrinters ? e.$ = fr : e.F = 'DYMO NSAPI plugin is loaded but no callable functions found. If running Safari, then run it in 64-bit mode (MacOS X >= 10.7) or set "Open using Rosetta" option') : e.F = "DYMO Label Plugin is not installed.") : e.F = "The operating system is not supported.";
        return new Zn(e.la, e.$, e.F)
    }
    function tr(e, t, n) {
        this.l = e, this.$b = t, this.ac = n
    }
    function nr(e) {
        var t = Ct(e);
        e = [];
        var n = Cn(t, "Printers");
        t = n.getElementsByTagName("LabelWriterPrinter");
        for (var r = 0; r < t.length; r++) {
            var i = En(Cn(t[r], "Name")),
                o = En(Cn(t[r], "ModelName")),
                a = "True" == En(Cn(t[r], "IsConnected")),
                s = "True" == En(Cn(t[r], "IsLocal")),
                l = "True" == En(Cn(t[r], "IsTwinTurbo"));
            i = new Rn(i, o, a, s, l), e[r] = i, e[i.name] = i
        }
        for (n = n.getElementsByTagName("TapePrinter"), r = 0; r < n.length; r++) i = En(Cn(n[r], "Name")), o = En(Cn(n[r], "ModelName")), a = "True" == En(Cn(n[r], "IsConnected")), s = "True" == En(Cn(n[r], "IsLocal")), l = "True" == En(Cn(n[r], "IsAutoCutSupported")), i = new $n(i, o, a, s, l), e[r + t.length] = i, e[i.name] = i;
        return e
    }
    function rr() {
        var e = [];
        try {
            var t = Bn().getPrinters();
            e = nr(t)
        } catch (n) {}
        for (var r in Zi) {
            t = Zi[r].getPrinters();
            for (var i = 0; i < t.length; ++i) {
                var o = t[i];
                e.push(o), e[o.name] = o
            }
        }
        return e
    }
    function ir(e) {
        for (var t = [], n = rr(), r = 0; r < n.length; r++) {
            var i = n[r];
            i.printerType == e && t.push(i)
        }
        return t
    }
    function or(t, n, r, i) {
        n = n || "", i = i || "", "string" != typeof i && (i = i.toString()), "undefined" == typeof r && e(Error("printLabel(): labelXml parameter should be specified")), "string" != typeof r && (r = r.toString());
        var o = rr()[t];
        o != hr ? "" != o.l ? sr(o, n, r, i) : Bn().printLabel(o.name, n, r, i) : e(Error("printLabel(): unknown printer '" + t + "'"))
    }
    function ar(t, n, r, i) {
        n = n || "", i = i || "", "string" != typeof i && (i = i.toString()), "undefined" == typeof r && e(Error("printLabel2(): labelXml parameter should be specified")), "string" != typeof r && (r = r.toString());
        var o = rr()[t];
        return o != hr ? "" != o.l ? sr(o, n, r, i) : new qn(o, Bn().printLabel2(t, n, r, i)) : (e(Error("printLabel(): unknown printer '" + t + "'")), void 0)
    }
    function sr(e, t, n, r) {
        function i(e, t) {
            var n = 4e3 * e,
                r = "";
            n >= s.length ? e = -1 : r = s.substr(n, 4e3), new Nt(a, "c").send({
                j: o,
                cid: e,
                pl: r
            }, function (n) {
                var r = n.status;
                0 == r ? -1 != e ? i(++e, 0) : Ht("dymo.label.framework").info("Finished sending job payload for " + o) : -5 == r ? 10 > t ? i(++n.lastAckChunkId, ++t) : Ht("dymo.label.framework").error('Unable to send print job data for "' + o + '": STATUS_INVALID_CHUNK_ID: Max retry count reached') : 10 > t ? i(e, ++t) : Ht("dymo.label.framework").error('Unable to send print job data for "' + o + '": Max retry count reached')
            }, function () {
                10 > t ? i(e, ++t) : Ht("dymo.label.framework").error('Unable to send print job data for "' + o + '": error: Max retry count reached')
            })
        }
        var o = Tn();
        t = {
            printerName: e.ea,
            labelXml: n,
            printParamsXml: t,
            labelSetXml: r
        };
        var a = st(e.l, "pl"),
            s = pn(new cn, t);
        return i(0, 0), new qn(e, o)
    }
    function lr(e, t, n, r, i, o) {
        function a(e) {
            if (i(s, e)) {
                var t = new on(function () {
                    s.Da(a), t.D()
                }, o);
                t.start()
            }
        }
        var s = ar(e, t, n, r);
        return s.Da(a), s
    }
    function ur(t, n, r) {
        return "undefined" == typeof t && e(Error("renderLabel(): labelXml parameter should be specified")), "string" != typeof t && (t = t.toString()), Bn().renderLabel(t, n || "", r || "")
    }
    function cr(e, t, n, r) {
        var i = {};
        return i.requestId = e, i.imageData = r, i.statusId = t, i.statusMessage = n, i
    }
    var pr, fr = !0,
        hr = null,
        dr = !1,
        mr = this,
        gr = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        yr = 0,
        vr = Date.now || function () {
            return +new Date
        };
    h(d, Error), d.prototype.name = "CustomError";
    var br = /^[a-zA-Z0-9\-_.!~*'()]*$/,
        wr = /&/g,
        xr = /</g,
        kr = />/g,
        Sr = /\"/g,
        Tr = /[&<>\"]/;
    h(x, d), x.prototype.name = "AssertionError";
    var _r = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Er = Array.prototype,
        Cr = Er.indexOf ? function (e, t, n) {
            return k(e.length != hr), Er.indexOf.call(e, t, n)
        } : function (e, t, n) {
            if (n = n == hr ? 0 : 0 > n ? Math.max(0, e.length + n) : n, l(e)) return l(t) && 1 == t.length ? e.indexOf(t, n) : -1;
            for (n = n; n < e.length; n++) if (n in e && e[n] === t) return n;
            return -1
        }, Ar = Er.forEach ? function (e, t, n) {
            k(e.length != hr), Er.forEach.call(e, t, n)
        } : function (e, t, n) {
            for (var r = e.length, i = l(e) ? e.split("") : e, o = 0; r > o; o++) o in i && t.call(n, i[o], o, e)
        };
    D.prototype.Va = dr, D.prototype.D = function () {
        this.Va || (this.Va = fr, this.n())
    }, D.prototype.n = function () {};
    var Nr = "StopIteration" in mr ? mr.StopIteration : Error("StopIteration");
    H.prototype.next = function () {
        e(Nr)
    }, H.prototype.ra = function () {
        return this
    }, pr = R.prototype, pr.c = 0, pr.ha = 0, pr.bb = t("c"), pr.M = function () {
        $(this);
        for (var e = [], t = 0; t < this.i.length; t++) e.push(this.p[this.i[t]]);
        return e
    }, pr.G = function () {
        return $(this), this.i.concat()
    }, pr.C = function (e) {
        return q(this.p, e)
    }, pr.clear = function () {
        this.p = {}, this.ha = this.c = this.i.length = 0
    }, pr.remove = function (e) {
        return q(this.p, e) ? (delete this.p[e], this.c--, this.ha++, this.i.length > 2 * this.c && $(this), fr) : dr
    }, pr.o = function (e, t) {
        return q(this.p, e) ? this.p[e] : t
    }, pr.w = function (e, t) {
        q(this.p, e) || (this.c++, this.i.push(e), this.ha++), this.p[e] = t
    }, pr.A = function () {
        return new R(this)
    }, pr.ra = function (t) {
        $(this);
        var n = 0,
            r = this.i,
            i = this.p,
            o = this.ha,
            a = this,
            s = new H;
        return s.next = function () {
            for (;;) {
                o != a.ha && e(Error("The map has changed since the iterator was created")), n >= r.length && e(Nr);
                var s = r[n++];
                return t ? s : i[s]
            }
        }, s
    }, h(z, D), pr = z.prototype, pr.J = hr, pr.Ua = hr, pr.X = function () {
        return this.J ? this.J() : {}
    }, pr.xa = function (e) {
        if (this.Ua) this.Ua(e);
        else if (c(e)) if (u(e.D)) e.D();
        else for (var t in e) delete e[t]
    }, pr.n = function () {
        z.V.n.call(this);
        for (var e = this.L; e.length;) this.xa(e.pop());
        delete this.L
    };
    var jr = {}, Or = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    pr = G.prototype, pr.v = "", pr.O = "", pr.t = "", pr.I = hr, pr.q = "", pr.K = "", pr.Sb = dr, pr.u = dr, pr.toString = function () {
        if (this.m) return this.m;
        var e = [];
        if (this.v && e.push(ut(this.v, Pr), ":"), this.t) {
            e.push("//"), this.O && e.push(ut(this.O, Pr), "@");
            var t;
            t = this.t, t = l(t) ? encodeURIComponent(t) : hr, e.push(t), this.I != hr && e.push(":", String(this.I))
        }
        return this.q && (this.t && "/" != this.q.charAt(0) && e.push("/"), e.push(ut(this.q, Dr))), (t = String(this.k)) && e.push("?", t), this.K && e.push("#", ut(this.K, Ir)), this.m = e.join("")
    }, pr.A = function () {
        var e = this.v,
            t = this.O,
            n = this.t,
            r = this.I,
            i = this.q,
            o = this.k.A(),
            a = this.K,
            s = new G(hr, this.u);
        return e && Q(s, e), t && Z(s, t), n && et(s, n), r && tt(s, r), i && nt(s, i), o && rt(s, o), a && ot(s, a), s
    }, pr.U = function (e) {
        this.u = e, this.k && this.k.U(e)
    };
    var Lr = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/,
        Pr = /[#\/\?@]/g,
        Dr = /[\#\?]/g,
        Mr = /[\#\?@]/g,
        Ir = /#/g;
    pr = pt.prototype, pr.d = hr, pr.c = hr, pr.bb = function () {
        return ft(this), this.c
    }, pr.add = function (e, t) {
        if (ft(this), ht(this), e = dt(this, e), this.C(e)) {
            var n = this.d.o(e);
            a(n) ? n.push(t) : this.d.w(e, [n, t])
        } else this.d.w(e, t);
        return this.c++, this
    }, pr.remove = function (e) {
        if (ft(this), e = dt(this, e), this.d.C(e)) {
            ht(this);
            var t = this.d.o(e);
            return a(t) ? this.c -= t.length : this.c--, this.d.remove(e)
        }
        return dr
    }, pr.clear = function () {
        ht(this), this.d && this.d.clear(), this.c = 0
    }, pr.C = function (e) {
        return ft(this), e = dt(this, e), this.d.C(e)
    }, pr.G = function () {
        ft(this);
        for (var e = this.d.M(), t = this.d.G(), n = [], r = 0; r < t.length; r++) {
            var i = e[r];
            if (a(i)) for (var o = 0; o < i.length; o++) n.push(t[r]);
            else n.push(t[r])
        }
        return n
    }, pr.M = function (e) {
        if (ft(this), e) if (e = dt(this, e), this.C(e)) {
            var t = this.d.o(e);
            if (a(t)) return t;
            e = [], e.push(t)
        } else e = [];
        else {
            t = this.d.M(), e = [];
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                a(r) ? L(e, r) : e.push(r)
            }
        }
        return e
    }, pr.w = function (e, t) {
        if (ft(this), ht(this), e = dt(this, e), this.C(e)) {
            var n = this.d.o(e);
            a(n) ? this.c -= n.length : this.c--
        }
        return this.d.w(e, t), this.c++, this
    }, pr.o = function (e, t) {
        if (ft(this), e = dt(this, e), this.C(e)) {
            var n = this.d.o(e);
            return a(n) ? n[0] : n
        }
        return t
    }, pr.toString = function () {
        if (this.B) return this.B;
        if (!this.d) return "";
        for (var e = [], t = 0, n = this.d.G(), r = 0; r < n.length; r++) {
            var i = n[r],
                o = g(i);
            if (i = this.d.o(i), a(i)) for (var s = 0; s < i.length; s++) t > 0 && e.push("&"), e.push(o), "" !== i[s] && e.push("=", g(i[s])), t++;
            else t > 0 && e.push("&"), e.push(o), "" !== i && e.push("=", g(i)), t++
        }
        return this.B = e.join("")
    }, pr.A = function () {
        var e = new pt;
        return this.P && (e.P = this.P), this.B && (e.B = this.B), this.d && (e.d = this.d.A()), e
    }, pr.U = function (e) {
        e && !this.u && (ft(this), ht(this), I(this.d, function (e, t) {
            var n = t.toLowerCase();
            t != n && (this.remove(t), this.add(n, e))
        }, this)), this.u = e
    };
    var Hr, Br, Fr, Rr;
    Rr = Fr = Br = Hr = dr;
    var $r;
    if ($r = gt()) {
        var qr = mr.navigator;
        Hr = 0 == $r.indexOf("Opera"), Br = !Hr && -1 != $r.indexOf("MSIE"), Fr = !Hr && -1 != $r.indexOf("WebKit"), Rr = !Hr && !Fr && "Gecko" == qr.product
    }
    var zr, Wr = Hr,
        Ur = Br,
        Xr = Rr,
        Vr = Fr,
        Jr = mr.navigator,
        Yr = -1 != (Jr && Jr.platform || "").indexOf("Mac");
    e: {
        var Kr, Gr = "";
        if (Wr && mr.opera) {
            var Qr = mr.opera.version;
            Gr = "function" == typeof Qr ? Qr() : Qr
        } else if (Xr ? Kr = /rv\:([^\);]+)(\)|;)/ : Ur ? Kr = /MSIE\s+([^\);]+)(\)|;)/ : Vr && (Kr = /WebKit\/(\S+)/), Kr) {
            var Zr = Kr.exec(gt());
            Gr = Zr ? Zr[1] : ""
        }
        if (Ur) {
            var ei, ti = mr.document;
            if (ei = ti ? ti.documentMode : void 0, ei > parseFloat(Gr)) {
                zr = String(ei);
                break e
            }
        }
        zr = Gr
    }
    var ni = {}, ri = !Ur || yt("9"),
        ii = Ur && !yt("9"),
        oi = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            height: "height",
            width: "width",
            usemap: "useMap",
            frameborder: "frameBorder",
            type: "type"
        }, ai = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        }, si = {
            IMG: " ",
            BR: "\n"
        }, li = 0;
    Nt.prototype.send = function (e, t, n, r) {
        if (!document.documentElement.firstChild) return n && n(e), hr;
        r = r || "_" + (li++).toString(36) + vr().toString(36), mr._callbacks_ || (mr._callbacks_ = {});
        var i = document.createElement("script"),
            o = hr;
        this.Oa > 0 && (o = mr.setTimeout(jt(r, i, e, n), this.Oa)), n = this.ga.A();
        for (var a in e)(!e.hasOwnProperty || e.hasOwnProperty(a)) && it(n, a, e[a]);
        return t && (mr._callbacks_[r] = Ot(r, i, t, o), it(n, this.Eb, "_callbacks_." + r)), vt(i, {
            type: "text/javascript",
            id: r,
            charset: "UTF-8",
            src: n.toString()
        }), document.getElementsByTagName("head")[0].appendChild(i), {
            R: r,
            Oa: o
        }
    }, Pt.prototype.cc = 0, Pt.prototype.$a = hr, Pt.prototype.Za = hr;
    var ui = 0;
    Pt.prototype.reset = function (e, t, n, r, i) {
        this.cc = "number" == typeof i ? i : ui++, this.qc = r || vr(), this.ba = e, this.oc = t, this.mc = n, delete this.$a, delete this.Za
    }, Pt.prototype.kb = function (e) {
        this.ba = e
    }, Dt.prototype.na = hr, Dt.prototype.ba = hr, Dt.prototype.ta = hr, Dt.prototype.db = hr, Mt.prototype.toString = t("name");
    var ci = new Mt("SEVERE", 1e3),
        pi = new Mt("INFO", 800),
        fi = new Mt("CONFIG", 700),
        hi = new Mt("FINE", 500),
        di = new Mt("FINER", 400),
        mi = new Mt("FINEST", 300);
    Dt.prototype.kb = function (e) {
        this.ba = e
    }, Dt.prototype.log = function (e, t, n) {
        if (e.value >= It(this).value) for (e = this.Nb(e, t, n), t = this; t;) {
            n = t;
            var r = e;
            if (n.db) for (var i = 0, o = void 0; o = n.db[i]; i++) o(r);
            t = t.na
        }
    }, Dt.prototype.Nb = function (e, t, n) {
        var r = new Pt(e, String(t), this.da);
        if (n) {
            r.$a = n;
            var i = X(n, arguments.callee.caller);
            r.Za = i
        }
        return r
    }, Dt.prototype.info = function (e, t) {
        this.log(pi, e, t)
    };
    var gi = {}, yi = hr;
    Bt.prototype.e = Ht("goog.debug.Trace"), Ft.prototype.toString = function () {
        var e = [];
        return e.push(this.type, " ", this.va, " (", Math.round(10 * this.pb) / 10, " ms)"), this.Pa && e.push(" [VarAlloc = ", this.Pa, "]"), e.join("")
    }, Rt.prototype.toString = function () {
        return this.type == hr ? this.Gb : "[" + this.type + "] " + this.Gb
    }, Bt.prototype.reset = function (e) {
        for (this.Hb = e, e = 0; e < this.Y.length; e++) {
            var t = this.Aa.id;
            t && U(this.Fa, t), U(this.Aa, this.Y[e])
        }
        for (this.Y.length = 0, this.La.clear(), this.mb = vr(), this.Sa = this.qb = this.rb = this.sb = this.tb = 0, t = this.fa.G(), e = 0; e < t.length; e++) {
            var n = this.fa.o(t[e]);
            n.va = 0, n.pb = 0, n.Pa = 0, U(this.nb, n)
        }
        this.fa.clear()
    }, Bt.prototype.toString = function () {
        for (var e = [], t = -1, n = [], r = 0; r < this.Y.length; r++) {
            var i = this.Y[r];
            1 == i.Ba && n.pop(), e.push(" ", $t(i, this.mb, t, n.join(""))), t = i.Xa, e.push("\n"), 0 == i.Ba && n.push("|  ")
        }
        if (0 != this.La.bb()) {
            var o = vr();
            e.push(" Unstopped timers:\n"), F(this.La, function (t) {
                e.push("  ", t, " (", o - t.startTime, " ms, started at ", zt(t.startTime), ")\n")
            })
        }
        for (t = this.fa.G(), r = 0; r < t.length; r++) n = this.fa.o(t[r]), n.va > 1 && e.push(" TOTAL ", n, "\n");
        return e.push("Total tracers created ", this.qb, "\n", "Total comments created ", this.Sa, "\n", "Overhead start: ", this.tb, " ms\n", "Overhead end: ", this.sb, " ms\n", "Overhead comment: ", this.rb, " ms\n"), e.join("")
    }, new Bt, new Wt, Wt.prototype.w = function (e) {
        this.jb = e
    }, Wt.prototype.reset = function () {
        this.w(vr())
    }, Wt.prototype.o = t("jb");
    var vi;
    h(Ut, D), Ut.prototype.n = function () {
        delete this.type, delete this.target, delete this.currentTarget
    }, Ut.prototype.S = dr, Ut.prototype.oa = fr, !Ur || yt("9"), Ur && yt("8"), h(Xt, Ut), pr = Xt.prototype, pr.target = hr, pr.relatedTarget = hr, pr.offsetX = 0, pr.offsetY = 0, pr.clientX = 0, pr.clientY = 0, pr.screenX = 0, pr.screenY = 0, pr.button = 0, pr.keyCode = 0, pr.charCode = 0, pr.ctrlKey = dr, pr.altKey = dr, pr.shiftKey = dr, pr.metaKey = dr, pr.Xb = dr, pr.Ya = hr, pr.ka = function (e, t) {
        var n = this.type = e.type;
        this.target = e.target || e.srcElement, this.currentTarget = t;
        var r = e.relatedTarget;
        if (r) {
            if (Xr) try {
                r = r.nodeName && r
            } catch (i) {
                r = hr
            }
        } else "mouseover" == n ? r = e.fromElement : "mouseout" == n && (r = e.toElement);
        this.relatedTarget = r, this.offsetX = void 0 !== e.offsetX ? e.offsetX : e.layerX, this.offsetY = void 0 !== e.offsetY ? e.offsetY : e.layerY, this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0, this.button = e.button, this.keyCode = e.keyCode || 0, this.charCode = e.charCode || ("keypress" == n ? e.keyCode : 0), this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.Xb = Yr ? e.metaKey : e.ctrlKey, this.state = e.state, this.Ya = e, delete this.oa, delete this.S
    }, pr.n = function () {
        Xt.V.n.call(this), this.relatedTarget = this.currentTarget = this.target = this.Ya = hr
    };
    var bi = 0;
    pr = Vt.prototype, pr.key = 0, pr.T = dr, pr.Ra = dr, pr.ka = function (t, n, r, i, o, a) {
        u(t) ? this.fb = fr : t && t.handleEvent && u(t.handleEvent) ? this.fb = dr : e(Error("Invalid listener argument")), this.ca = t, this.ib = n, this.src = r, this.type = i, this.capture = !! o, this.Ea = a, this.Ra = dr, this.key = ++bi, this.T = dr
    }, pr.handleEvent = function (e) {
        return this.fb ? this.ca.call(this.Ea || this.src, e) : this.ca.handleEvent.call(this.ca, e)
    };
    var wi, xi, ki, Si, Ti, _i, Ei, Ci, Ai, Ni, ji, Oi, Li = (wi = "ScriptEngine" in mr && "JScript" == mr.ScriptEngine()) ? mr.ScriptEngineMajorVersion() + "." + mr.ScriptEngineMinorVersion() + "." + mr.ScriptEngineBuildVersion() : "0";
    ! function () {
        function e() {
            return {
                c: 0,
                s: 0
            }
        }
        function t() {
            return []
        }
        function n() {
            function e(t) {
                return a.call(e.src, e.key, t)
            }
            return e
        }
        function r() {
            return new Vt
        }
        function o() {
            return new Xt
        }
        var a, s = wi && !(b(Li, "5.7") >= 0);
        if (Ei = function (e) {
            a = e
        }, s) {
            xi = function () {
                return W(l)
            }, ki = function (e) {
                U(l, e)
            }, Si = function () {
                return W(u)
            }, Ti = function (e) {
                U(u, e)
            }, _i = function () {
                return W(c)
            }, Ci = function () {
                U(c, n())
            }, Ai = function () {
                return W(p)
            }, Ni = function (e) {
                U(p, e)
            }, ji = function () {
                return W(f)
            }, Oi = function (e) {
                U(f, e)
            };
            var l = new z(0, 600);
            l.J = e;
            var u = new z(0, 600);
            u.J = t;
            var c = new z(0, 600);
            c.J = n;
            var p = new z(0, 600);
            p.J = r;
            var f = new z(0, 600);
            f.J = o
        } else xi = e, ki = i, Si = t, Ti = i, _i = n, Ci = i, Ai = r, Ni = i, ji = o, Oi = i
    }();
    var Pi = {}, Di = {}, Mi = {}, Ii = {};
    Ei(function (e, t) {
        if (!Pi[e]) return fr;
        var n = Pi[e],
            i = n.type,
            o = Di;
        if (!(i in o)) return fr;
        o = o[i];
        var a, s;
        if (void 0 === vi && (vi = Ur && !mr.addEventListener), vi) {
            a = t || r("window.event");
            var l = fr in o,
                u = dr in o;
            if (l) {
                if (a.keyCode < 0 || void 0 != a.returnValue) return fr;
                e: {
                    var c = dr;
                    if (0 == a.keyCode) try {
                        a.keyCode = -1;
                        break e
                    } catch (p) {
                        c = fr
                    }(c || void 0 == a.returnValue) && (a.returnValue = fr)
                }
            }
            c = ji(), c.ka(a, this), a = fr;
            try {
                if (l) {
                    for (var f = Si(), h = c.currentTarget; h; h = h.parentNode) f.push(h);
                    s = o[fr], s.s = s.c;
                    for (var d = f.length - 1; !c.S && d >= 0 && s.s; d--) c.currentTarget = f[d], a &= en(s, f[d], i, fr, c);
                    if (u) for (s = o[dr], s.s = s.c, d = 0; !c.S && d < f.length && s.s; d++) c.currentTarget = f[d], a &= en(s, f[d], i, dr, c)
                } else a = tn(n, c)
            } finally {
                f && (f.length = 0, Ti(f)), c.D(), Oi(c)
            }
            return a
        }
        i = new Xt(t, this);
        try {
            a = tn(n, i)
        } finally {
            i.D()
        }
        return a
    }), h(nn, D), pr = nn.prototype, pr.Ta = fr, pr.Ma = hr, pr.addEventListener = function (e, t, n, r) {
        Jt(this, e, t, n, r)
    }, pr.removeEventListener = function (e, t, n, r) {
        Yt(this, e, t, n, r)
    }, pr.dispatchEvent = function (e) {
        if (e = e, l(e)) e = new Ut(e, this);
        else if (e instanceof Ut) e.target = e.target || this;
        else {
            var t = e;
            e = new Ut(e.type, this), C(e, t)
        }
        t = 1;
        var n, r = e.type,
            i = Di;
        if (r in i) {
            i = i[r], r = fr in i;
            var o;
            if (r) {
                for (n = [], o = this; o; o = o.Ma) n.push(o);
                o = i[fr], o.s = o.c;
                for (var a = n.length - 1; !e.S && a >= 0 && o.s; a--) e.currentTarget = n[a], t &= en(o, n[a], e.type, fr, e) && e.oa != dr
            }
            if (dr in i) if (o = i[dr], o.s = o.c, r) for (a = 0; !e.S && a < n.length && o.s; a++) e.currentTarget = n[a], t &= en(o, n[a], e.type, dr, e) && e.oa != dr;
            else for (n = this; !e.S && n && o.s; n = n.Ma) e.currentTarget = n, t &= en(o, n, e.type, dr, e) && e.oa != dr;
            e = Boolean(t)
        } else e = fr;
        return e
    }, pr.n = function () {
        nn.V.n.call(this), Qt(this), this.Ma = hr
    };
    var Hi = mr.window;
    h(on, D), pr = on.prototype, pr.R = 0, pr.n = function () {
        on.V.n.call(this), this.stop(), delete this.Ia, delete this.cb
    }, pr.start = function (e) {
        this.stop(), this.R = rn(this.Fb, void 0 !== e ? e : this.Rb)
    }, pr.stop = function () {
        this.eb() && Hi.clearTimeout(this.R), this.R = 0
    }, pr.eb = function () {
        return 0 != this.R
    }, pr.Ib = function () {
        this.R = 0, this.Ia && this.Ia.call(this.cb)
    }, an.prototype.e = Ht("goog.net.xhrMonitor"), an.prototype.ya = Xr;
    var Bi, Fi = new an,
        Ri = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "": "\\u000b"
        }, $i = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    h(dn, nn);
    var qi = {}, zi = 0;
    pr = dn.prototype, pr.e = Ht("goog.net.IframeIo"), pr.h = hr, pr.f = hr, pr.N = hr, pr.Wb = 0, pr.z = dr, pr.ja = dr, pr.Na = dr, pr.Ha = hr, pr.Ga = hr, pr.aa = 0, pr.ab = hr, pr.H = hr, pr.send = function (t, n, r, i) {
        if (this.z && e(Error("[goog.net.IframeIo] Unable to send, already active.")), this.Ha = t = new G(t), n = n ? n.toUpperCase() : "GET", r && (at(t), r = Math.floor(2147483648 * Math.random()).toString(36) + (Math.floor(2147483648 * Math.random()) ^ vr()).toString(36), at(t), delete t.m, t.k.w("zx", r)), this.e.info("Sending iframe request: " + t + " [" + n + "]"), Bi || (Bi = bt("form"), Bi.acceptCharset = "utf-8", r = Bi.style, r.position = "absolute", r.visibility = "hidden", r.top = r.left = "-10px", r.width = r.height = "10px", r.overflow = "hidden", document.body.appendChild(Bi)), this.h = Bi, xt(this.h), "GET" == n && gn(this.h, t.k), i && gn(this.h, i), this.h.action = t.toString(), this.h.method = n, this.z = fr, this.ja = dr, this.aa = 0, this.e.log(hi, "Creating iframe", void 0), this.N = this.da + "_" + (this.Wb++).toString(36), i = {
            name: this.N,
            id: this.N
        }, Ur && 7 > zr && (i.src = 'javascript:""'), this.f = bt("iframe", i), i = this.f.style, i.visibility = "hidden", i.width = i.height = "10px", Vr ? i.marginTop = i.marginLeft = "-10px" : (i.position = "absolute", i.top = i.left = "-10px"), Ur) {
            this.h.target = this.N || "", document.body.appendChild(this.f), Jt(this.f, "readystatechange", this.Ja, dr, this);
            try {
                this.za = dr, this.h.submit()
            } catch (o) {
                Yt(this.f, "readystatechange", this.Ja, dr, this), vn(this, 1)
            }
        } else {
            this.e.log(hi, "Setting up iframes and cloning form", void 0), document.body.appendChild(this.f), i = this.N + "_inner", t = kt(this.f), r = "<body><iframe id=" + i + " name=" + i + "></iframe>", Wr ? t.documentElement.innerHTML = r : t.write(r), Jt(t.getElementById(i), "load", this.Ka, dr, this);
            var a = this.h.getElementsByTagName("textarea");
            for (r = 0, n = a.length; n > r; r++) {
                var s = a[r],
                    l = void 0;
                if (ii && "innerText" in s ? l = s.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (l = [], _t(s, l, fr), l = l.join("")), l = l.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), Ur || (l = l.replace(/ +/g, " ")), " " != l && (l = l.replace(/^\s*/, "")), l != a[r].value) if (s = a[r], l = a[r].value, "textContent" in s) s.textContent = l;
                else if (s.firstChild && 3 == s.firstChild.nodeType) {
                    for (; s.lastChild != s.firstChild;) s.removeChild(s.lastChild);
                    s.firstChild.data = l
                } else xt(s), s.appendChild((9 == s.nodeType ? s : s.ownerDocument || s.document).createTextNode(l))
            }
            for (a = t.importNode(this.h, fr), a.target = i, t.body.appendChild(a), s = this.h.getElementsByTagName("select"), l = a.getElementsByTagName("select"), r = 0, n = s.length; n > r; r++) l[r].selectedIndex = s[r].selectedIndex;
            for (s = this.h.getElementsByTagName("input"), l = a.getElementsByTagName("input"), r = 0, n = s.length; n > r; r++) if ("file" == s[r].type && s[r].value != l[r].value) {
                this.e.log(hi, "File input value not cloned properly.  Will submit using original form.", void 0), this.h.target = i, a = this.h;
                break
            }
            this.e.log(hi, "Submitting form", void 0);
            try {
                this.za = dr, a.submit(), t.close(), Xr && (this.ab = rn(this.ob, 250, this))
            } catch (u) {
                r = "Error when submitting form: " + X(u), this.e.log(ci, r, void 0), Yt(t.getElementById(i), "load", this.Ka, dr, this), t.close(), vn(this, 2)
            }
        }
    }, pr.abort = function (e) {
        this.z && (this.e.info("Request aborted"), Qt(Sn(this)), this.Na = this.z = this.ja = dr, this.aa = e || 7, this.dispatchEvent("abort"), bn(this))
    }, pr.n = function () {
        this.e.log(hi, "Disposing iframeIo instance", void 0), this.z && (this.e.log(hi, "Aborting active request", void 0), this.abort()), dn.V.n.call(this), this.f && wn(this), xn(this), delete this.Wa, this.Ha = this.Ub = this.Ga = this.Tb = this.h = hr, this.aa = 0, delete qi[this.da]
    }, pr.eb = t("z"), pr.dispatchEvent = function (e) {
        this.f && sn(Fi, this.f);
        try {
            return dn.V.dispatchEvent.call(this, e)
        } finally {
            return this.f && ln(Fi), fr
        }
    }, pr.Ja = function () {
        if ("complete" == this.f.readyState) {
            Yt(this.f, "readystatechange", this.Ja, dr, this);
            var e;
            try {
                if (e = kt(this.f), Ur && "about:blank" == e.location && !navigator.onLine) return vn(this, 9), void 0
            } catch (t) {
                return vn(this, 1), void 0
            }
            yn(this, e)
        }
    }, pr.Ka = function () {
        Wr && "about:blank" == kn(this).location || (Yt(Sn(this), "load", this.Ka, dr, this), yn(this, kn(this)))
    }, pr.wa = function () {
        this.H && (Hi.clearTimeout(this.H), this.H = hr);
        for (var e = 0; e < this.Z.length;) {
            var t, n = this.Z[e];
            t = Fi;
            var r = n;
            if (t.ya) {
                var i = t.ua[l(r) ? r : c(r) ? p(r) : ""];
                t.e.log(hi, "Context is safe : " + r + " - " + i, void 0), t = !i
            } else t = fr;
            t ? (this.e.info("Disposing iframe"), N(this.Z, e), n && n.parentNode && n.parentNode.removeChild(n)) : e++
        }
        0 != this.Z.length && (this.e.info("Requests outstanding, waiting to dispose"), this.H = rn(this.wa, 2e3, this))
    }, pr.ob = function () {
        this.z && (this.ab = rn(this.ob, 250, this))
    },
    function () {
        function e(e) {
            var t = i;
            return t[e[0]] + t[e[1]] + t[e[2]] + t[e[3]] + "-" + t[e[4]] + t[e[5]] + "-" + t[e[6]] + t[e[7]] + "-" + t[e[8]] + t[e[9]] + "-" + t[e[10]] + t[e[11]] + t[e[12]] + t[e[13]] + t[e[14]] + t[e[15]]
        }
        function t(t, i, o) {
            var a = "binary" != t ? r : i ? i : new n(16);
            return i = i && o || 0, o = 4294967296 * Math.random(), a[i++] = 255 & o, a[i++] = 255 & (o >>>= 8), a[i++] = 255 & (o >>>= 8), a[i++] = 255 & o >>> 8, o = 4294967296 * Math.random(), a[i++] = 255 & o, a[i++] = 255 & (o >>>= 8), a[i++] = 64 | 15 & (o >>>= 8), a[i++] = 255 & o >>> 8, o = 4294967296 * Math.random(), a[i++] = 128 | 63 & o, a[i++] = 255 & (o >>>= 8), a[i++] = 255 & (o >>>= 8), a[i++] = 255 & o >>> 8, o = 4294967296 * Math.random(), a[i++] = 255 & o, a[i++] = 255 & (o >>>= 8), a[i++] = 255 & (o >>>= 8), a[i++] = 255 & o >>> 8, void 0 === t ? e(a) : a
        }
        for (var n = Array, r = new n(16), i = [], o = {}, a = 0; 256 > a; a++) i[a] = (a + 256).toString(16).substr(1).toUpperCase(), o[i[a]] = a;
        t.parse = function (e) {
            var t = new n(16),
                r = 0;
            return e.toUpperCase().replace(/[0-9A-F][0-9A-F]/g, function (e) {
                t[r++] = o[e]
            }), t
        }, t.rc = e, t.kc = n, Tn = t
    }();
    var Wi = {};
    n("dymo.label.framework.FlowDirection", Wi, void 0), Wi.LeftToRight = "LeftToRight", Wi.RightToLeft = "RightToLeft";
    var Ui = {};
    n("dymo.label.framework.LabelWriterPrintQuality", Ui, void 0), Ui.Auto = "Auto", Ui.Text = "Text", Ui.BarcodeAndGraphics = "BarcodeAndGraphics";
    var Xi = {};
    n("dymo.label.framework.TwinTurboRoll", Xi, void 0), Xi.Auto = "Auto", Xi.Left = "Left", Xi.Right = "Right";
    var Vi = {};
    n("dymo.label.framework.TapeAlignment", Vi, void 0), Vi.Center = "Center", Vi.Left = "Left", Vi.Right = "Right";
    var Ji = {};
    n("dymo.label.framework.TapeCutMode", Ji, void 0), Ji.AutoCut = "AutoCut", Ji.ChainMarks = "ChainMarks";
    var Yi = {};
    n("dymo.label.framework.AddressBarcodePosition", Yi, void 0), Yi.AboveAddress = "AboveAddress", Yi.BelowAddress = "BelowAddress", Yi.Suppress = "Suppress";
    var Ki = {};
    n("dymo.label.framework.PrintJobStatus", Ki, void 0), Ki.qa = 0, Ki.Unknown = Ki.qa, Ki.Cb = 1, Ki.Printing = Ki.Cb, Ki.wb = 2, Ki.Finished = Ki.wb, Ki.vb = 3, Ki.Error = Ki.vb, Ki.Ab = 4, Ki.PaperOut = Ki.Ab, Ki.xb = 5, Ki.InQueue = Ki.xb, Ki.pa = -1, Ki.ProcessingError = Ki.pa, Ki.Bb = -2, Ki.PrinterBusy = Ki.Bb, Ki.yb = -3, Ki.InvalidJobId = Ki.yb, Ki.zb = -4, Ki.NotSpooled = Ki.zb;
    var Gi;
    h(Rn, Fn), h($n, Fn), qn.prototype.Ca = function () {
        return this.W.name
    }, qn.prototype.getPrinterName = qn.prototype.Ca, qn.prototype.Mb = t("ia"), qn.prototype.getJobId = qn.prototype.Mb, qn.prototype.Da = function (e) {
        if ("" != this.W.l) zn(this, e);
        else {
            var t;
            try {
                t = Bn().getJobStatus(this.W.name, this.ia)
            } catch (n) {
                t = new Nn(this.Ca(), this.ia, Ki.pa, n.message || n)
            }
            e(t)
        }
    }, qn.prototype.getStatus = qn.prototype.Da, n("dymo.label.framework.LabelSetBuilder", Wn, void 0), Wn.prototype.Qb = t("sa"), Wn.prototype.getRecords = Wn.prototype.Qb, Wn.prototype.Db = function () {
        var e = new Xn;
        return this.sa.push(e), e
    }, Wn.prototype.addRecord = Wn.prototype.Db, Wn.toXml = Un, Wn.prototype.toString = function () {
        return Un(this.sa)
    }, Xn.prototype.ic = function (e, t) {
        return t = t.toString(), 0 != t.indexOf("<TextMarkup>") && (t = "<TextMarkup>" + t + "</TextMarkup>"), this[e] = t, this
    }, Xn.prototype.setTextMarkup = Xn.prototype.ic, Xn.prototype.hc = function (e, t) {
        return this[e] = t, this
    }, Xn.prototype.setText = Xn.prototype.hc, Xn.prototype.fc = function (e, t) {
        return this[e] = t, this
    }, Xn.prototype.setBase64Image = Xn.prototype.fc, Vn.prototype.Q = function () {
        return At(this.Qa)
    }, Vn.prototype.getLabelXml = Vn.prototype.Q, Vn.prototype.bc = function (e, t) {
        return ur(this.Q(), e, t)
    }, Vn.prototype.render = Vn.prototype.bc, Vn.prototype.print = function (e, t, n) {
        or(e, t, this.Q(), n)
    }, Vn.prototype.print = Vn.prototype.print, Vn.prototype.Yb = function (e, t, n) {
        return ar(e, t, this.Q(), n)
    }, Vn.prototype.print2 = Vn.prototype.Yb, Vn.prototype.Zb = function (e, t, n, r, i) {
        return lr(e, t, this.Q(), n, r, i)
    }, Vn.prototype.printAndPollStatus = Vn.prototype.Zb;
    var Qi = ["AddressObject", "TextObject", "BarcodeObject", "ShapeObject", "CounterObject", "ImageObject", "CircularTextObject", "DateTimeObject"];
    Vn.prototype.Ob = function () {
        for (var e = Jn(this), t = [], n = 0; n < e.length; n++) t.push(En(Cn(e[n], "Name")));
        return t
    }, Vn.prototype.getObjectNames = Vn.prototype.Ob, Vn.prototype.Kb = function () {
        return Yn(this).length
    }, Vn.prototype.getAddressObjectCount = Vn.prototype.Kb, Vn.prototype.Jb = function (e) {
        return En(Cn(Yn(this)[e], "BarcodePosition"))
    }, Vn.prototype.getAddressBarcodePosition = Vn.prototype.Jb, Vn.prototype.dc = function (t, n) {
        return "AboveAddress" != n && "BelowAddress" != n && "Suppress" != n && e(Error("verifyAddressBarcodePosition(): barcode position '" + n + "' is invalid value")), An(Cn(Yn(this)[t], "BarcodePosition"), n), this
    }, Vn.prototype.setAddressBarcodePosition = Vn.prototype.dc, Vn.prototype.Lb = function (e) {
        return Gn(this, Yn(this)[e])
    }, Vn.prototype.getAddressText = Vn.prototype.Lb, Vn.prototype.ec = function (e, t) {
        return Qn(this, Yn(this)[e], t)
    }, Vn.prototype.setAddressText = Vn.prototype.ec, Vn.prototype.Pb = function (e) {
        switch (e = Kn(this, e), e.tagName) {
            case "AddressObject":
            case "TextObject":
                return Gn(this, e);
            case "BarcodeObject":
                return En(Cn(e, "Text"));
            case "ImageObject":
                if (e = Cn(e, "Image")) return En(e);
                break;
            case "CircularTextObject":
                return En(Cn(e, "Text"))
        }
        return ""
    }, Vn.prototype.getObjectText = Vn.prototype.Pb, Vn.prototype.gc = function (t, n) {
        var r = Kn(this, t);
        switch (r.tagName) {
            case "AddressObject":
                Qn(this, r, n);
                break;
            case "TextObject":
                Qn(this, r, n);
                break;
            case "BarcodeObject":
                An(Cn(r, "Text"), n);
                break;
            case "ImageObject":
                var i = Cn(r, "Image");
                if (i) An(i, n);
                else {
                    var o = Cn(r, "ImageLocation");
                    o || e(Error("setObjectText(): <ImageLocation> is expected but not found: " + At(i))), i = o.ownerDocument.createElement("Image"), An(i, n), r.replaceChild(i, o)
                }
                break;
            case "CircularTextObject":
                An(Cn(r, "Text"), n);
                break;
            case "DateTimeObject":
                An(Cn(r, "PreText"), n);
                break;
            case "CounterObject":
                An(Cn(r, "PreText"), n)
        }
        return this
    }, Vn.prototype.setObjectText = Vn.prototype.gc, Vn.prototype.toString = function () {
        return this.Q()
    }, n("dymo.label.framework.VERSION", "1.2.5", void 0), n("dymo.label.framework.checkEnvironment", er, void 0);
    var Zi = {};
    tr.prototype.getPrinters = function () {
        var e = nr(this.ac),
            t = new G(this.l),
            n = this.$b;
        for ("" == n && (n = t.t), t = 0; t < e.length; ++t) {
            var r = e[t],
                i = r.name;
            r.name = i + " @ " + n, r.l = this.l, r.location = n, r.ea = i, r.printerUri = r.l, r.location = r.location, r.localName = r.ea
        }
        return e
    }, n("dymo.label.framework.addPrinterUri", function (e, t, n, r) {
        var i = t || "";
        l(i) || (i = i.toString()), t = hr, r && (t = function () {
            r(e)
        });
        var o = K(e, "getPrinters");
        new Nt(o, "callback").send(hr, function (t) {
            Zi[e] = new tr(e, i, t), n && n(e)
        }, t)
    }, void 0), n("dymo.label.framework.removePrinterUri", function (e) {
        delete Zi[e]
    }, void 0), n("dymo.label.framework.removeAllPrinterUri", function () {
        Zi = {}
    }, void 0), n("dymo.label.framework.getPrinters", rr, void 0), n("dymo.label.framework.getLabelWriterPrinters", function () {
        return ir("LabelWriterPrinter")
    }, void 0), n("dymo.label.framework.getTapePrinters", function () {
        return ir("TapePrinter")
    }, void 0), n("dymo.label.framework.openLabelFile", function (e) {
        return new Vn(Bn().openLabelFile(e))
    }, void 0), n("dymo.label.framework.openLabelXml", function (e) {
        return Ht("dymo.label.framework").info(e), new Vn(e)
    }, void 0), n("dymo.label.framework.printLabel", or, void 0), n("dymo.label.framework.printLabel2", ar, void 0), n("dymo.label.framework.printLabelAndPollStatus", lr, void 0), n("dymo.label.framework.renderLabel", ur, void 0), n("dymo.label.framework.renderLabelAsync", function (t, n, r, i) {
        "undefined" == typeof t && e(Error("renderLabelAsync(): labelXml parameter should be specified")), n || e(Error("renderLabelAsync(): callback parameter should be specified")), "string" != typeof t && (t = t.toString()), r = r || "", i = i || "";
        var o = rr()[i];
        if (i == hr || o != hr && "" == o.l) {
            var a;
            try {
                var s = Bn().renderLabel(t, r, i);
                a = cr("", "Ready", "", s)
            } catch (l) {
                a = cr("", "Error", l.message || l, "")
            }
            n(a)
        } else {
            o == hr && e(Error("printLabel(): unknown printer '" + i + "'"));
            var u = Tn();
            mn(st(o.l, "renderLabel"), hr, "POST", fr, {
                requestId: u,
                printerName: o.ea,
                labelXml: t,
                renderParamsXml: r
            });
            var c, p = (new Date).getTime();
            c = new on(function () {
                (new Date).getTime() - p > 3e4 ? (c.D(), c = hr, n(cr(u, "Timeout", "", ""))) : new Nt(st(o.l, "getRenderLabelStatus"), "callback").send({
                    requestId: u
                }, function (e) {
                    var t = e.statusId;
                    "NotStarted" == t || "Processing" == t ? (c.stop(), c.start(1e3)) : (c.D(), c = hr, n(e))
                }, function () {
                    c.start(1e3)
                })
            }, 500), c.start()
        }
    }, void 0), n("dymo.label.framework.loadImageAsPngBase64", function (e) {
        return Bn().loadImageAsPngBase64(e)
    }, void 0), n("dymo.label.framework.createLabelWriterPrintParamsXml", function (e) {
        if (!e) return "";
        var t = Ct("<LabelWriterPrintParams/>"),
            n = t.documentElement;
        return e.copies && _n(n, "Copies", e.copies.toString()), e.jobTitle && _n(n, "JobTitle", e.jobTitle), e.flowDirection && _n(n, "FlowDirection", e.flowDirection), e.printQuality && _n(n, "PrintQuality", e.printQuality), e.twinTurboRoll && _n(n, "TwinTurboRoll", e.twinTurboRoll), At(t)
    }, void 0), n("dymo.label.framework.createTapePrintParamsXml", function (e) {
        if (!e) return "";
        var t = Ct("<TapePrintParams/>"),
            n = t.documentElement;
        return e.copies && _n(n, "Copies", e.copies.toString()), e.jobTitle && _n(n, "JobTitle", e.jobTitle), e.flowDirection && _n(n, "FlowDirection", e.flowDirection), e.alignment && _n(n, "Alignment", e.alignment), e.cutMode && _n(n, "CutMode", e.cutMode), At(t)
    }, void 0), n("dymo.label.framework.createLabelRenderParamsXml", function (e) {
        function t(e, t) {
            _n(r, e, void 0, {
                Alpha: t.a || t.alpha || 255,
                Red: t.r || t.red || 0,
                Green: t.g || t.green || 0,
                Blue: t.b || t.blue || 0
            })
        }
        if (!e) return "";
        var n = Ct("<LabelRenderParams/>"),
            r = n.documentElement;
        return e.labelColor && t("LabelColor", e.labelColor), e.shadowColor && t("ShadowColor", e.shadowColor), "undefined" != typeof e.shadowDepth && _n(r, "ShadowDepth", e.shadowDepth.toString()), e.flowDirection && _n(r, "FlowDirection", e.flowDirection), "undefined" != typeof e.pngUseDisplayResolution && _n(r, "PngUseDisplayResolution", e.pngUseDisplayResolution ? "True" : "False"), At(n)
    }, void 0)
}(), window.ShopifyApp || (window.ShopifyApp = {}), ShopifyApp.disablePage = function () {
    $(".header-main").html('<i class="ico ico-20 ico-20-loading"></i>Saving...'), $(".btn.primary").removeClass("primary"), $(".page .row").addClass("disabled"), $("input[type=submit]").prop("disabled", !0)
}, ShopifyApp.addFlashNotice = function (e) {
    ShopifyApp.addFlash("notice", e)
}, ShopifyApp.addFlashError = function (e) {
    ShopifyApp.addFlash("error", e)
}, ShopifyApp.addFlash = function (e, t) {
    html = '<span class="notification-message ' + e + '">' + t + '</span><a class="close-notification" href="#"><i class="ico ico-16 ico-close-notification"></i></a>', $("#global-notification").html(html), ShopifyApp._showFlashes()
}, ShopifyApp._showFlashes = function () {
    $("#global-notification").addClass("is-visible"), setTimeout(function () {
        $("#global-notification").removeClass("is-visible")
    }, 3e3)
}, $(document).ready(function () {
    $('<i class="ico ico-20 ico-20-loading"></i>').css({
        opacity: 0,
        height: 0,
        width: 0,
        position: "absolute"
    }).prependTo("body"), $(document).on("click", "[data-dropdown]", function (e) {
        var t = "." + $(this).attr("class") + " " + $(this).attr("data-dropdown");
        $(t).toggleClass("is-visible"), e.preventDefault(), e.stopPropagation()
    }), $(document).on("click", function () {
        $(".dropdown.is-visible").removeClass("is-visible")
    }), $(document).on("click", ".dropdown", function (e) {
        e.stopPropagation()
    }), $(document).on("click", "[data-tabledropdown]", function (e) {
        $(this).parents("tr").next("tr").toggle(), e.preventDefault()
    }), $(document).on("click", "[data-modal]", function (e) {
        var t = $(this).attr("data-modal");
        $(t).removeClass("hidden").addClass("visible"), e.preventDefault(), e.stopPropagation()
    }), $(document).on("click", ".close-modal", function (e) {
        $(".modal-bg").removeClass("visible").addClass("hidden"), e.preventDefault()
    }), $(document).on("click", ".close-modal-action", function () {
        $(".modal-bg").removeClass("visible").addClass("hidden")
    }), $("#global-notification > .notification-message").length && ShopifyApp._showFlashes(), $(document).on("click", ".close-notification", function (e) {
        $("#global-notification").removeClass("is-visible"), e.preventDefault()
    }), $(document).on("mouseenter", "[data-tooltip]", function () {
        var e = ($(this).outerWidth(), $(this).attr("data-tooltip"));
        $(this).addClass("tooltip is-active").append('<span class="container"><span class="label">' + e + "</span></span>")
    }).on("mouseleave", "[data-tooltip]", function () {
        $(this).removeClass("is-active")
    }), $("form[data-formchange]").addClass("dirty"), $(document).on("change keyup", "form[data-formchange]", function () {
        var e = $(this).attr("data-formchange");
        $(e).addClass("primary")
    }), $(document).on("click", ".header-right .save-button", function (e) {
        $("form[data-formchange]").submit(), e.preventDefault()
    }), $(document).on("change", 'thead input[type="checkbox"]', function (e) {
        var t = $(this).parents("table");
        $(this).prop("checked") ? t.find('input[type="checkbox"]').prop({
            checked: !0
        }) : t.find('input[type="checkbox"]').prop({
            checked: !1
        }), e.preventDefault()
    }), $(document).on("change", 'tbody input[type="checkbox"]', function (e) {
        var t = $(this).parents("table"),
            n = t.find('thead input[type="checkbox"]');
        n.length && (n.prop("checked") ? n.prop({
            checked: !1
        }) : n.prop({
            checked: !1
        })), e.preventDefault()
    }), $(document).on("submit", "form", ShopifyApp.disablePage), $(".login-content").css({
        marginTop: -($(".login-content").outerHeight() / 2)
    })
}),
function () {
    var e;
    window.ExportHelper = e = function () {
        function e() {}
        return e.waitForCookie = function () {
            var t, n;
            return t = !0, n = setInterval(function () {
                return null != e.readCookie("downloaded") && (t = !1, $("#message").text(""), ShopifyApp.flashNotice("CSV was successfully downloaded."), ShopifyApp.redirect("/products")), null == t ? clearInterval(n) : void 0
            }, 1e3)
        }, e.readCookie = function (e) {
            var t, n, r, i, o;
            for (r = escape(e), n = document.cookie.split(";"), i = 0, o = n.length; o > i; i++) {
                for (t = n[i];
                " " === t.charAt(0);) t = t.substring(1, t.length);
                if (0 === t.indexOf(r)) return unescape(t.substring(r.length, t.length))
            }
            return null
        }, e
    }()
}.call(this), window.alertModal = function () {
    ShopifyApp.Modal.alert("Message for an alert window.")
}, window.confirmModal = function () {
    ShopifyApp.Modal.confirm({
        title: "Are you sure you want to delete this?",
        message: "Do you want to delete your account? This can't be undone.",
        okButton: "Yes, delete it",
        cancelButton: "No, keep it",
        style: "danger"
    }, function (e) {
        e ? ShopifyApp.flashNotice("Delete has been confirmed.") : ShopifyApp.flashNotice("Delete has been cancelled.")
    })
}, window.inputModal = function (e) {
    ShopifyApp.Modal.input(e, function (e, t) {
        e ? ShopifyApp.flashNotice('Received: "' + t + '"') : ShopifyApp.flashError("Input cancelled.")
    })
}, window.newModal = function (e, t) {
    ShopifyApp.Modal.open({
        src: e,
        title: t,
        height: 400,
        width: "large",
        buttons: {
            primary: {
                label: "OK",
                message: "modal_ok",
                callback: function () {
                    ShopifyApp.Modal.close("ok")
                }
            },
            secondary: {
                label: "Cancel",
                callback: function () {
                    ShopifyApp.Modal.close("cancel")
                }
            }
        }
    }, function (e) {
        "ok" == e ? ShopifyApp.flashNotice("'Ok' button pressed") : "cancel" == e && ShopifyApp.flashNotice("'Cancel' button pressed")
    })
},
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.4 (Thu, 10 Jan 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
function (e, t, n, r) {
    "use strict";
    var i = n(e),
        o = n(t),
        a = n.fancybox = function () {
            a.open.apply(this, arguments)
        }, s = navigator.userAgent.match(/msie/),
        l = null,
        u = t.createTouch !== r,
        c = function (e) {
            return e && e.hasOwnProperty && e instanceof n
        }, p = function (e) {
            return e && "string" === n.type(e)
        }, f = function (e) {
            return p(e) && e.indexOf("%") > 0
        }, h = function (e) {
            return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        }, d = function (e, t) {
            var n = parseInt(e, 10) || 0;
            return t && f(e) && (n = a.getViewport()[t] / 100 * n), Math.ceil(n)
        }, m = function (e, t) {
            return d(e, t) + "px"
        };
    n.extend(a, {
        version: "2.1.4",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !u,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== a.close(!0)) ? (n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function (i, o) {
                var s, l, u, f, h, d, m, g = {};
                "object" === n.type(o) && (o.nodeType && (o = n(o)), c(o) ? (g = {
                    href: o.data("fancybox-href") || o.attr("href"),
                    title: o.data("fancybox-title") || o.attr("title"),
                    isDom: !0,
                    element: o
                }, n.metadata && n.extend(!0, g, o.metadata())) : g = o), s = t.href || g.href || (p(o) ? o : null), l = t.title !== r ? t.title : g.title || "", u = t.content || g.content, f = u ? "html" : t.type || g.type, !f && g.isDom && (f = o.data("fancybox-type"), f || (h = o.prop("class").match(/fancybox\.(\w+)/), f = h ? h[1] : null)), p(s) && (f || (a.isImage(s) ? f = "image" : a.isSWF(s) ? f = "swf" : "#" === s.charAt(0) ? f = "inline" : p(o) && (f = "html", u = o)), "ajax" === f && (d = s.split(/\s+/, 2), s = d.shift(), m = d.shift())), u || ("inline" === f ? s ? u = n(p(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : g.isDom && (u = o) : "html" === f ? u = s : f || s || !g.isDom || (f = "inline", u = o)), n.extend(g, {
                    href: s,
                    type: f,
                    content: u,
                    title: l,
                    selector: m
                }), e[i] = g
            }), a.opts = n.extend(!0, {}, a.defaults, t), t.keys !== r && (a.opts.keys = t.keys ? n.extend({}, a.defaults.keys, t.keys) : !1), a.group = e, a._start(a.opts.index)) : void 0
        },
        cancel: function () {
            var e = a.coming;
            e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
        },
        close: function (e) {
            a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && e !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
        },
        play: function (e) {
            var t = function () {
                clearTimeout(a.player.timer)
            }, r = function () {
                t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
            }, i = function () {
                t(), n("body").unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
            }, o = function () {
                a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, n("body").bind({
                    "afterShow.player onUpdate.player": r,
                    "onCancel.player beforeClose.player": i,
                    "beforeLoad.player": t
                }), r(), a.trigger("onPlayStart"))
            };
            e === !0 || !a.player.isActive && e !== !1 ? o() : i()
        },
        next: function (e) {
            var t = a.current;
            t && (p(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
        },
        prev: function (e) {
            var t = a.current;
            t && (p(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function (e, t, n) {
            var i = a.current;
            i && (e = d(e), a.direction = t || i.direction[e >= i.index ? "next" : "prev"], a.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (a.cancel(), a._start(e)))
        },
        reposition: function (e, t) {
            var r, i = a.current,
                o = i ? i.wrap : null;
            o && (r = a._getPosition(t), e && "scroll" === e.type ? (delete r.position, o.stop(!0, !0).animate(r, 200)) : (o.css(r), i.pos = n.extend({}, i.dim, r)))
        },
        update: function (e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(l), l = null), a.isOpen && !l && (l = setTimeout(function () {
                var r = a.current;
                r && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && a._setDimension(), "scroll" === t && r.canShrink || a.reposition(e), a.trigger("onUpdate"), l = null)
            }, n && !u ? 0 : 300))
        },
        toggle: function (e) {
            a.isOpen && (a.current.fitToView = "boolean" === n.type(e) ? e : !a.current.fitToView, u && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
        },
        hideLoading: function () {
            o.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function () {
            var e, t;
            a.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), o.bind("keydown.loading", function (e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
            }), a.defaults.fixed || (t = a.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function () {
            var t = a.current && a.current.locked || !1,
                n = {
                    x: i.scrollLeft(),
                    y: i.scrollTop()
                };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = u && e.innerWidth ? e.innerWidth : i.width(), n.h = u && e.innerHeight ? e.innerHeight : i.height()), n
        },
        unbindEvents: function () {
            a.wrap && c(a.wrap) && a.wrap.unbind(".fb"), o.unbind(".fb"), i.unbind(".fb")
        },
        bindEvents: function () {
            var e, t = a.current;
            t && (i.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), e = t.keys, e && o.bind("keydown.fb", function (i) {
                var o = i.which || i.keyCode,
                    s = i.target || i.srcElement;
                return 27 === o && a.coming ? !1 : (i.ctrlKey || i.altKey || i.shiftKey || i.metaKey || s && (s.type || n(s).is("[contenteditable]")) || n.each(e, function (e, s) {
                    return t.group.length > 1 && s[o] !== r ? (a[e](s[o]), i.preventDefault(), !1) : n.inArray(o, s) > -1 ? (a[e](), i.preventDefault(), !1) : void 0
                }), void 0)
            }), n.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function (e, r, i, o) {
                for (var s = e.target || null, l = n(s), u = !1; l.length && !(u || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) u = h(l[0]), l = n(l).parent();
                0 === r || u || a.group.length > 1 && !t.canShrink && (o > 0 || i > 0 ? a.prev(o > 0 ? "down" : "left") : (0 > o || 0 > i) && a.next(0 > o ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function (e, t) {
            var r, i = t || a.coming || a.current;
            if (i) {
                if (n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1))), r === !1) return !1;
                i.helpers && n.each(i.helpers, function (t, r) {
                    r && a.helpers[t] && n.isFunction(a.helpers[t][e]) && (r = n.extend(!0, {}, a.helpers[t].defaults, r), a.helpers[t][e](r, i))
                }), n.event.trigger(e + ".fb")
            }
        },
        isImage: function (e) {
            return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        },
        isSWF: function (e) {
            return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
            var t, r, i, o, s, l = {};
            if (e = d(e), t = a.group[e] || null, !t) return !1;
            if (l = n.extend(!0, {}, a.opts, t), o = l.margin, s = l.padding, "number" === n.type(o) && (l.margin = [o, o, o, o]), "number" === n.type(s) && (l.padding = [s, s, s, s]), l.modal && n.extend(!0, l, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = e, a.coming = l, !1 === a.trigger("beforeLoad")) return a.coming = null, void 0;
            if (i = l.type, r = l.href, !i) return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = e, a[a.router](a.direction)) : !1;
            if (a.isActive = !0, ("image" === i || "swf" === i) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === i && (l.aspectRatio = !0), "iframe" === i && u && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                skin: n(".fancybox-skin", l.wrap),
                outer: n(".fancybox-outer", l.wrap),
                inner: n(".fancybox-inner", l.wrap)
            }), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                l.skin.css("padding" + t, m(l.padding[e]))
            }), a.trigger("onReady"), "inline" === i || "html" === i) {
                if (!l.content || !l.content.length) return a._error("content")
            } else if (!r) return a._error("href");
            "image" === i ? a._loadImage() : "ajax" === i ? a._loadAjax() : "iframe" === i ? a._loadIframe() : a._afterLoad()
        },
        _error: function (e) {
            n.extend(a.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: a.coming.tpl.error
            }), a._afterLoad()
        },
        _loadImage: function () {
            var e = a.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, a.coming.width = this.width, a.coming.height = this.height, a._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, a._error("image")
            }, e.src = a.coming.href, e.complete !== !0 && a.showLoading()
        },
        _loadAjax: function () {
            var e = a.coming;
            a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function (e, t) {
                    a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                },
                success: function (t, n) {
                    "success" === n && (e.content = t, a._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var e = a.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (a.showLoading(), t.one("load", function () {
                n(this).data("ready", 1), u || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
        },
        _preloadImages: function () {
            var e, t, n = a.group,
                r = a.current,
                i = n.length,
                o = r.preload ? Math.min(r.preload, i - 1) : 0;
            for (t = 1; o >= t; t += 1) e = n[(r.index + t) % i], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var e, t, r, i, o, s, l = a.coming,
                u = a.current,
                p = "fancybox-placeholder";
            if (a.hideLoading(), l && a.isActive !== !1) {
                if (!1 === a.trigger("afterLoad", l, u)) return l.wrap.stop(!0).trigger("onReset").remove(), a.coming = null, void 0;
                switch (u && (a.trigger("beforeChange", u), u.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = l, t = l.content, r = l.type, i = l.scrolling, n.extend(a, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: u
                }), o = e.href, r) {
                    case "inline":
                    case "ajax":
                    case "html":
                        e.selector ? t = n("<div>").html(t).find(e.selector) : c(t) && (t.data(p) || t.data(p, n('<div class="' + p + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
                            n(this).find(t).length && t.hide().replaceAll(t.data(p)).data(p, !1)
                        }));
                        break;
                    case "image":
                        t = e.tpl.image.replace("{href}", o);
                        break;
                    case "swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', s = "", n.each(e.swf, function (e, n) {
                            t += '<param name="' + e + '" value="' + n + '"></param>', s += " " + e + '="' + n + '"'
                        }), t += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
                }
                c(t) && t.parent().is(e.inner) || e.inner.append(t), a.trigger("beforeShow"), e.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? u.prevMethod && a.transitions[u.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? e.nextMethod : e.openMethod](), a._preloadImages()
            }
        },
        _setDimension: function () {
            var e, t, r, i, o, s, l, u, c, p, h, g, y, v, b, w = a.getViewport(),
                x = 0,
                k = !1,
                S = !1,
                T = a.wrap,
                _ = a.skin,
                E = a.inner,
                C = a.current,
                A = C.width,
                N = C.height,
                j = C.minWidth,
                O = C.minHeight,
                L = C.maxWidth,
                P = C.maxHeight,
                D = C.scrolling,
                M = C.scrollOutside ? C.scrollbarWidth : 0,
                I = C.margin,
                H = d(I[1] + I[3]),
                B = d(I[0] + I[2]);
            if (T.add(_).add(E).width("auto").height("auto").removeClass("fancybox-tmp"), e = d(_.outerWidth(!0) - _.width()), t = d(_.outerHeight(!0) - _.height()), r = H + e, i = B + t, o = f(A) ? (w.w - r) * d(A) / 100 : A, s = f(N) ? (w.h - i) * d(N) / 100 : N, "iframe" === C.type) {
                if (v = C.content, C.autoHeight && 1 === v.data("ready")) try {
                    v[0].contentWindow.document.location && (E.width(o).height(9999), b = v.contents().find("body"), M && b.css("overflow-x", "hidden"), s = b.height())
                } catch (F) {}
            } else(C.autoWidth || C.autoHeight) && (E.addClass("fancybox-tmp"), C.autoWidth || E.width(o), C.autoHeight || E.height(s), C.autoWidth && (o = E.width()), C.autoHeight && (s = E.height()), E.removeClass("fancybox-tmp"));
            if (A = d(o), N = d(s), c = o / s, j = d(f(j) ? d(j, "w") - r : j), L = d(f(L) ? d(L, "w") - r : L), O = d(f(O) ? d(O, "h") - i : O), P = d(f(P) ? d(P, "h") - i : P), l = L, u = P, C.fitToView && (L = Math.min(w.w - r, L), P = Math.min(w.h - i, P)), g = w.w - H, y = w.h - B, C.aspectRatio ? (A > L && (A = L, N = d(A / c)), N > P && (N = P, A = d(N * c)), j > A && (A = j, N = d(A / c)), O > N && (N = O, A = d(N * c))) : (A = Math.max(j, Math.min(A, L)), C.autoHeight && "iframe" !== C.type && (E.width(A), N = E.height()), N = Math.max(O, Math.min(N, P))), C.fitToView) if (E.width(A).height(N), T.width(A + e), p = T.width(), h = T.height(), C.aspectRatio) for (;
            (p > g || h > y) && A > j && N > O && !(x++ > 19);) N = Math.max(O, Math.min(P, N - 10)), A = d(N * c), j > A && (A = j, N = d(A / c)), A > L && (A = L, N = d(A / c)), E.width(A).height(N), T.width(A + e), p = T.width(), h = T.height();
            else A = Math.max(j, Math.min(A, A - (p - g))), N = Math.max(O, Math.min(N, N - (h - y)));
            M && "auto" === D && s > N && g > A + e + M && (A += M), E.width(A).height(N), T.width(A + e), p = T.width(), h = T.height(), k = (p > g || h > y) && A > j && N > O, S = C.aspectRatio ? l > A && u > N && o > A && s > N : (l > A || u > N) && (o > A || s > N), n.extend(C, {
                dim: {
                    width: m(p),
                    height: m(h)
                },
                origWidth: o,
                origHeight: s,
                canShrink: k,
                canExpand: S,
                wPadding: e,
                hPadding: t,
                wrapSpace: h - _.outerHeight(!0),
                skinSpace: _.height() - N
            }), !v && C.autoHeight && N > O && P > N && !S && E.height("auto")
        },
        _getPosition: function (e) {
            var t = a.current,
                n = a.getViewport(),
                r = t.margin,
                i = a.wrap.width() + r[1] + r[3],
                o = a.wrap.height() + r[0] + r[2],
                s = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            return t.autoCenter && t.fixed && !e && o <= n.h && i <= n.w ? s.position = "fixed" : t.locked || (s.top += n.y, s.left += n.x), s.top = m(Math.max(s.top, s.top + (n.h - o) * t.topRatio)), s.left = m(Math.max(s.left, s.left + (n.w - i) * t.leftRatio)), s
        },
        _afterZoomIn: function () {
            var e = a.current;
            e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function (e) {
                e.preventDefault(), a.close()
            }), e.arrows && a.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
        },
        _afterZoomOut: function (e) {
            e = e || a.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(a, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), a.trigger("afterClose", e)
        }
    }), a.transitions = {
        getOrigPosition: function () {
            var e = a.current,
                t = e.element,
                n = e.orig,
                r = {}, i = 50,
                o = 50,
                s = e.hPadding,
                l = e.wPadding,
                u = a.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), c(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), o = n.outerHeight())) : (r.top = u.y + (u.h - o) * e.topRatio, r.left = u.x + (u.w - i) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (r.top -= u.y, r.left -= u.x), r = {
                top: m(r.top - s * e.topRatio),
                left: m(r.left - l * e.leftRatio),
                width: m(i + l),
                height: m(o + s)
            }
        },
        step: function (e, t) {
            var n, r, i, o = t.prop,
                s = a.current,
                l = s.wrapSpace,
                u = s.skinSpace;
            ("width" === o || "height" === o) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (n = 1 - n), r = "width" === o ? s.wPadding : s.hPadding, i = e - r, a.skin[o](d("width" === o ? i : i - l * n)), a.inner[o](d("width" === o ? i : i - l * n - u * n)))
        },
        zoomIn: function () {
            var e = a.current,
                t = e.pos,
                r = e.openEffect,
                i = "elastic" === r,
                o = n.extend({
                    opacity: 1
                }, t);
            delete o.position, i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1), a.wrap.css(t).animate(o, {
                duration: "none" === r ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: a._afterZoomIn
            })
        },
        zoomOut: function () {
            var e = a.current,
                t = e.closeEffect,
                n = "elastic" === t,
                r = {
                    opacity: .1
                };
            n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1)), a.wrap.animate(r, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: a._afterZoomOut
            })
        },
        changeIn: function () {
            var e, t = a.current,
                n = t.nextEffect,
                r = t.pos,
                i = {
                    opacity: 1
                }, o = a.direction,
                s = 200;
            r.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (r[e] = m(d(r[e]) - s), i[e] = "+=" + s + "px") : (r[e] = m(d(r[e]) + s), i[e] = "-=" + s + "px")), "none" === n ? a._afterZoomIn() : a.wrap.css(r).animate(i, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: a._afterZoomIn
            })
        },
        changeOut: function () {
            var e = a.previous,
                t = e.prevEffect,
                r = {
                    opacity: .1
                }, i = a.direction,
                o = 200;
            "elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=" + o + "px"), e.wrap.animate(r, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function () {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, a.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !u,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        create: function (e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo("body"), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (i.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                n(e.target).hasClass("fancybox-overlay") && (a.isActive ? a.close() : t.close())
            }), this.overlay.css(e.css).show()
        },
        close: function () {
            n(".fancybox-overlay").remove(), i.unbind("resize.overlay"), this.overlay = null, this.margin !== !1 && (n("body").css("margin-right", this.margin), this.margin = !1), this.el && this.el.removeClass("fancybox-lock")
        },
        update: function () {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), s ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (n = o.width())) : o.width() > i.width() && (n = o.width()), this.overlay.width(n).height(o.height())
        },
        onReady: function (e, r) {
            n(".fancybox-overlay").stop(!0, !0), this.overlay || (this.margin = o.height() > i.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right") : !1, this.el = t.all && !t.querySelector ? n("html") : n("body"), this.create(e)), e.locked && this.fixed && (r.locked = this.overlay.append(r.wrap), r.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (e, t) {
            t.locked && (this.el.addClass("fancybox-lock"), this.margin !== !1 && n("body").css("margin-right", d(this.margin) + t.scrollbarWidth)), this.open(e)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (e) {
            this.overlay && !a.isActive && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, a.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function (e) {
            var t, r, i = a.current,
                o = i.title,
                l = e.type;
            if (n.isFunction(o) && (o = o.call(i.element, i)), p(o) && "" !== n.trim(o)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + l + '-wrap">' + o + "</div>"), l) {
                    case "inside":
                        r = a.skin;
                        break;
                    case "outside":
                        r = a.wrap;
                        break;
                    case "over":
                        r = a.inner;
                        break;
                    default:
                        r = a.skin, t.appendTo("body"), s && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(d(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](r)
            }
        }
    }, n.fn.fancybox = function (e) {
        var t, r = n(this),
            i = this.selector || "",
            s = function (o) {
                var s, l, u = n(this).blur(),
                    c = t;
                o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || u.is(".fancybox-wrap") || (s = e.groupAttr || "data-fancybox-group", l = u.attr(s), l || (s = "rel", l = u.get(0)[s]), l && "" !== l && "nofollow" !== l && (u = i.length ? n(i) : r, u = u.filter("[" + s + '="' + l + '"]'), c = u.index(this)), e.index = c, a.open(u, e) !== !1 && o.preventDefault())
            };
        return e = e || {}, t = e.index || 0, i && e.live !== !1 ? o.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : r.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, o.ready(function () {
        n.scrollbarWidth === r && (n.scrollbarWidth = function () {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                t = e.children(),
                r = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), r
        }), n.support.fixedPosition === r && (n.support.fixedPosition = function () {
            var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), n.extend(a.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        })
    })
}(window, document, jQuery),
function (e) {
    "use strict";
    var t = e.fancybox,
        n = function (t, n, r) {
            return r = r || "", "object" === e.type(r) && (r = e.param(r, !0)), e.each(n, function (e, n) {
                t = t.replace("$" + e, n || "")
            }), r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r), t
        };
    t.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "opaque",
                    enablejsapi: 1
                },
                type: "iframe",
                url: "//www.youtube.com/embed/$3"
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: "iframe",
                url: "//player.vimeo.com/video/$1"
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: "yes"
                },
                type: "swf",
                url: function (t, n, r) {
                    return r.swf.flashVars = "playerVars=" + e.param(n, !0), "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "swf",
                url: "//www.dailymotion.com/swf/video/$1"
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: "iframe",
                url: "//www.twitvid.com/embed.php?guid=$1"
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: "image",
                url: "//twitpic.com/show/full/$1/"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/"
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: "iframe",
                url: function (e) {
                    return "//maps.google." + e[1] + "/" + e[3] + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            }
        },
        beforeLoad: function (t, r) {
            var i, o, a, s, l = r.href || "",
                u = !1;
            for (i in t) if (o = t[i], a = l.match(o.matcher)) {
                u = o.type, s = e.extend(!0, {}, o.params, r[i] || (e.isPlainObject(t[i]) ? t[i].params : null)), l = "function" === e.type(o.url) ? o.url.call(this, a, s, r) : n(o.url, a, s);
                break
            }
            u && (r.href = l, r.type = u, r.autoHeight = !1)
        }
    }
}(jQuery);