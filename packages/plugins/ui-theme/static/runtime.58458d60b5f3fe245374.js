/*! For license information please see runtime.58458d60b5f3fe245374.js.LICENSE.txt */
(() => {
  'use strict';
  var e,
    r,
    t,
    o = {},
    n = {};
  function i(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var t = (n[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(t.exports, t, t.exports, i), (t.loaded = !0), t.exports;
  }
  (i.m = o),
    (e = []),
    (i.O = (r, t, o, n) => {
      if (!t) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [t, o, n] = e[u], l = !0, d = 0; d < t.length; d++)
            (!1 & n || a >= n) && Object.keys(i.O).every((e) => i.O[e](t[d]))
              ? t.splice(d--, 1)
              : ((l = !1), n < a && (a = n));
          if (l) {
            e.splice(u--, 1);
            var s = o();
            void 0 !== s && (r = s);
          }
        }
        return r;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [t, o, n];
    }),
    (i.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return i.d(r, { a: r }), r;
    }),
    (i.d = (e, r) => {
      for (var t in r)
        i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (i.f = {}),
    (i.e = (e) => Promise.all(Object.keys(i.f).reduce((r, t) => (i.f[t](e, r), r), []))),
    (i.u = (e) => e + '.' + i.h() + '.js'),
    (i.miniCssF = (e) => {}),
    (i.h = () => '58458d60b5f3fe245374'),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (i.hmd = (e) => (
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
    (i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (r = {}),
    (t = '@verdaccio/ui-theme:'),
    (i.l = (e, o, n, a) => {
      if (r[e]) r[e].push(o);
      else {
        var l, d;
        if (void 0 !== n)
          for (var s = document.getElementsByTagName('script'), u = 0; u < s.length; u++) {
            var c = s[u];
            if (c.getAttribute('src') == e || c.getAttribute('data-webpack') == t + n) {
              l = c;
              break;
            }
          }
        l ||
          ((d = !0),
          ((l = document.createElement('script')).charset = 'utf-8'),
          (l.timeout = 120),
          i.nc && l.setAttribute('nonce', i.nc),
          l.setAttribute('data-webpack', t + n),
          (l.src = e)),
          (r[e] = [o]);
        var f = (t, o) => {
            (l.onerror = l.onload = null), clearTimeout(p);
            var n = r[e];
            if (
              (delete r[e],
              l.parentNode && l.parentNode.removeChild(l),
              n && n.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          p = setTimeout(f.bind(null, void 0, { type: 'timeout', target: l }), 12e4);
        (l.onerror = f.bind(null, l.onerror)),
          (l.onload = f.bind(null, l.onload)),
          d && document.head.appendChild(l);
      }
    }),
    (i.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (i.p = '-/static/'),
    (() => {
      i.b = document.baseURI || self.location.href;
      var e = { runtime: 0 };
      (i.f.j = (r, t) => {
        var o = i.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if ('runtime' != r) {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var a = i.p + i.u(r),
              l = new Error();
            i.l(
              a,
              (t) => {
                if (i.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ('load' === t.type ? 'missing' : t.type),
                    a = t && t.target && t.target.src;
                  (l.message = 'Loading chunk ' + r + ' failed.\n(' + n + ': ' + a + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = n),
                    (l.request = a),
                    o[1](l);
                }
              },
              'chunk-' + r,
              r
            );
          } else e[r] = 0;
      }),
        (i.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var o,
            n,
            [a, l, d] = t,
            s = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (o in l) i.o(l, o) && (i.m[o] = l[o]);
            if (d) var u = d(i);
          }
          for (r && r(t); s < a.length; s++) (n = a[s]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(u);
        },
        t = (self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
