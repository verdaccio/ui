/*! For license information please see runtime.78e10044a73a830b7a85.js.LICENSE.txt */
(() => {
  'use strict';
  var e,
    r = {},
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) return n.exports;
    var i = (t[e] = { id: e, loaded: !1, exports: {} });
    return r[e].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports;
  }
  (o.m = r),
    (e = []),
    (o.O = (r, t, n, i) => {
      if (!t) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [t, n, i] = e[u], l = !0, d = 0; d < t.length; d++)
            (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[d]))
              ? t.splice(d--, 1)
              : ((l = !1), i < a && (a = i));
          if (l) {
            e.splice(u--, 1);
            var s = n();
            void 0 !== s && (r = s);
          }
        }
        return r;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [t, n, i];
    }),
    (o.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return o.d(r, { a: r }), r;
    }),
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              e.id
          );
        },
      }),
      e
    )),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (o.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      o.b = document.baseURI || self.location.href;
      var e = { runtime: 0 };
      o.O.j = (r) => 0 === e[r];
      var r = (r, t) => {
          var n,
            i,
            [a, l, d] = t,
            s = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (n in l) o.o(l, n) && (o.m[n] = l[n]);
            if (d) var u = d(o);
          }
          for (r && r(t); s < a.length; s++)
            (i = a[s]), o.o(e, i) && e[i] && e[i][0](), (e[a[s]] = 0);
          return o.O(u);
        },
        t = (self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
