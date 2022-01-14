/*! For license information please see runtime.6e123a1bbcc05aa67b56.js.LICENSE.txt */
(() => {
  'use strict';
  var e,
    r,
    t,
    o = {},
    n = {};
  function a(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var t = (n[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports;
  }
  (a.m = o),
    (e = []),
    (a.O = (r, t, o, n) => {
      if (!t) {
        var i = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [t, o, n] = e[u], l = !0, d = 0; d < t.length; d++)
            (!1 & n || i >= n) && Object.keys(a.O).every((e) => a.O[e](t[d]))
              ? t.splice(d--, 1)
              : ((l = !1), n < i && (i = n));
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
    (a.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return a.d(r, { a: r }), r;
    }),
    (a.d = (e, r) => {
      for (var t in r)
        a.o(r, t) && !a.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (a.f = {}),
    (a.e = (e) => Promise.all(Object.keys(a.f).reduce((r, t) => (a.f[t](e, r), r), []))),
    (a.u = (e) => e + '.' + a.h() + '.js'),
    (a.miniCssF = (e) => {}),
    (a.h = () => '6e123a1bbcc05aa67b56'),
    (a.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (a.hmd = (e) => (
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
    (a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (r = {}),
    (t = '@verdaccio/ui-theme:'),
    (a.l = (e, o, n, i) => {
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
          a.nc && l.setAttribute('nonce', a.nc),
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
    (a.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (a.p = '-/static/'),
    (() => {
      a.b = document.baseURI || self.location.href;
      var e = { runtime: 0 };
      (a.f.j = (r, t) => {
        var o = a.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if ('runtime' != r) {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var i = a.p + a.u(r),
              l = new Error();
            a.l(
              i,
              (t) => {
                if (a.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ('load' === t.type ? 'missing' : t.type),
                    i = t && t.target && t.target.src;
                  (l.message = 'Loading chunk ' + r + ' failed.\n(' + n + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = n),
                    (l.request = i),
                    o[1](l);
                }
              },
              'chunk-' + r,
              r
            );
          } else e[r] = 0;
      }),
        (a.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var o,
            n,
            [i, l, d] = t,
            s = 0;
          if (i.some((r) => 0 !== e[r])) {
            for (o in l) a.o(l, o) && (a.m[o] = l[o]);
            if (d) var u = d(a);
          }
          for (r && r(t); s < i.length; s++)
            (n = i[s]), a.o(e, n) && e[n] && e[n][0](), (e[i[s]] = 0);
          return a.O(u);
        },
        t = (self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
