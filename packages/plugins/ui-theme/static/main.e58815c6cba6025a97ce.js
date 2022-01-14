/*! For license information please see main.e58815c6cba6025a97ce.js.LICENSE.txt */
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['main'],
  {
    './lib/constants.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { DIST_TAGS: () => i, HEADERS: () => l, API_ERROR: () => s }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = 'dist-tags',
        l = { JSON: 'application/json' },
        s = { BAD_USERNAME_PASSWORD: 'bad username/password, access denied' };
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'DIST_TAGS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/lib/constants.ts'
        ),
        r.register(
          l,
          'HEADERS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/lib/constants.ts'
        ),
        r.register(
          s,
          'API_ERROR',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/lib/constants.ts'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/App/App.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => b });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        l = o('./src/components/Box.tsx'),
        s = o('./src/components/Loading/index.ts'),
        d = o('./src/design-tokens/StyleBaseline.tsx'),
        c = o('./src/design-tokens/load-dayjs-locale.ts'),
        u = (o('./src/i18n/config.ts'), o('./src/App/AppRoute.tsx')),
        g = o('./src/App/Footer/index.ts'),
        p = o('./src/App/Header/index.ts');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      var m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'e1qqswew0', label: 'StyledBox' })(function (e) {
          var t = e.theme;
          return { backgroundColor: null == t ? void 0 : t.palette.background.default };
        }, ''),
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'e1qqswew1', label: 'StyledBoxContent' })(function (e) {
          var t = e.theme;
          return (0,
          a.default)({}, '@media screen and (min-width: '.concat(null == t ? void 0 : t.breakPoints.container, 'px)'), { maxWidth: null == t ? void 0 : t.breakPoints.container, width: '100%', marginLeft: 'auto', marginRight: 'auto' });
        }, ''),
        I = function () {
          return (
            (0, n.useEffect)(function () {
              (0, c.default)();
            }, []),
            n.createElement(
              n.Suspense,
              { fallback: n.createElement(s.default, null) },
              n.createElement(d.default, null),
              n.createElement(
                C,
                { display: 'flex', flexDirection: 'column', height: '100%' },
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    i.Router,
                    { history: u.history },
                    n.createElement(p.default, null),
                    n.createElement(A, { flexGrow: 1 }, n.createElement(u.default, null))
                  ),
                  n.createElement(g.default, null)
                )
              )
            )
          );
        };
      m(I, 'useEffect{}');
      var f = I;
      const b = f;
      var v, h;
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          C,
          'StyledBox',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        v.register(
          A,
          'StyledBoxContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        v.register(
          I,
          'App',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        v.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/App/AppRoute.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { history: () => f, default: () => h });
      var a,
        r,
        n,
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/typeof.js'
        ),
        l = o('../../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js'),
        s = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        c = o('./src/App/utils/loadable.tsx');
      function u(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          o = new WeakMap();
        return (u = function (e) {
          return e ? o : t;
        })(e);
      }
      function g(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== (0, i.default)(e) && 'function' != typeof e))
          return { default: e };
        var o = u(t);
        if (o && o.has(e)) return o.get(e);
        var a = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if ('default' !== n && Object.prototype.hasOwnProperty.call(e, n)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, n) : null;
            l && (l.get || l.set) ? Object.defineProperty(a, n, l) : (a[n] = e[n]);
          }
        return (a.default = e), o && o.set(e, a), a;
      }
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return g(o('./src/components/NotFound/index.ts'));
          });
        }),
        C = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return g(o('./src/pages/Version/VersionContextProvider.tsx'));
          });
        }),
        A = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return g(o('./src/pages/Version/index.ts'));
          });
        }),
        I = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return g(o('./src/pages/home/index.ts'));
          });
        });
      !(function (e) {
        (e.ROOT = '/'),
          (e.SCOPE_PACKAGE = '/-/web/detail/@:scope/:package'),
          (e.SCOPE_PACKAGE_VERSION = '/-/web/detail/@:scope/:package/v/:version'),
          (e.PACKAGE = '/-/web/detail/:package'),
          (e.PACKAGE_VERSION = '/-/web/detail/:package/v/:version');
      })(p || (p = {}));
      var f = (0, l.createBrowserHistory)({
          basename:
            null === (a = window) ||
            void 0 === a ||
            null === (r = a.__VERDACCIO_BASENAME_UI_OPTIONS) ||
            void 0 === r
              ? void 0
              : r.url_prefix,
        }),
        b = function () {
          return s.createElement(
            d.Router,
            { history: f },
            s.createElement(
              d.Switch,
              null,
              s.createElement(d.Route, { exact: !0, path: p.ROOT }, s.createElement(I, null)),
              s.createElement(
                d.Route,
                { exact: !0, path: p.PACKAGE },
                s.createElement(C, null, s.createElement(A, null))
              ),
              s.createElement(
                d.Route,
                { exact: !0, path: p.PACKAGE_VERSION },
                s.createElement(C, null, s.createElement(A, null))
              ),
              s.createElement(
                d.Route,
                { exact: !0, path: p.SCOPE_PACKAGE_VERSION },
                s.createElement(C, null, s.createElement(A, null))
              ),
              s.createElement(
                d.Route,
                { exact: !0, path: p.SCOPE_PACKAGE },
                s.createElement(C, null, s.createElement(A, null))
              ),
              s.createElement(d.Route, null, s.createElement(m, null))
            )
          );
        },
        v = b;
      const h = v;
      var L, j;
      (L = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (L.register(
          m,
          'NotFound',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        L.register(
          C,
          'VersionContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        L.register(
          A,
          'VersionPage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        L.register(
          I,
          'HomePage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        L.register(
          f,
          'history',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        L.register(
          b,
          'AppRoute',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        L.register(
          v,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        )),
        (j =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          j(e);
    },
    './src/App/Footer/Footer.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => I });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o(
          '../../../node_modules/.pnpm/country-flag-icons@1.4.11/node_modules/country-flag-icons/react/3x2/index.js'
        ),
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/Trans.js'
        ),
        d = o('./src/components/Icons/index.ts'),
        c = o('./src/components/Logo/index.ts'),
        u = o('./src/providers/config/index.ts'),
        g = o('./src/utils/windows.ts'),
        p = o('./src/App/Footer/styles.ts');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      var m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = function () {
          var e = (0, l.useTranslation)().t,
            t = (0, u.useConfig)().configOptions;
          return i.createElement(
            p.Wrapper,
            null,
            i.createElement(
              p.Inner,
              null,
              i.createElement(
                p.Left,
                null,
                i.createElement(s.Trans, {
                  components: [i.createElement(p.Love, null)],
                  i18nKey: 'footer.made-with-love-on',
                }),
                i.createElement(
                  j,
                  null,
                  i.createElement(v, null),
                  i.createElement(
                    h,
                    null,
                    i.createElement(L, null, i.createElement(n.default.ES, null)),
                    i.createElement(L, null, i.createElement(n.default.NI, null)),
                    i.createElement(L, null, i.createElement(n.default.IN, null)),
                    i.createElement(L, null, i.createElement(n.default.BR, null)),
                    i.createElement(L, null, i.createElement(n.default.CN, null)),
                    i.createElement(L, null, i.createElement(n.default.AU, null)),
                    i.createElement(L, null, i.createElement(n.default.DE, null)),
                    i.createElement(L, null, i.createElement(n.default.TW, null))
                  )
                )
              ),
              i.createElement(
                p.Right,
                null,
                (null == t ? void 0 : t.version) &&
                  i.createElement(
                    i.Fragment,
                    null,
                    e('footer.powered-by'),
                    i.createElement(c.default, {
                      onClick: g.goToVerdaccioWebsite,
                      size: 'x-small',
                    }),
                    '/ '.concat(t.version)
                  )
              )
            )
          );
        };
      m(C, 'useTranslation{{ t }}\nuseConfig{{ configOptions }}', function () {
        return [l.useTranslation, u.useConfig];
      });
      var A = C;
      const I = A;
      var f,
        b,
        v = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d.Earth, { target: 'ehzyum60', label: 'StyledEarth' })(function (e) {
          return { margin: e.theme.spacing(0, 1) };
        }, ''),
        h = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'ehzyum61', label: 'Flags' })(function (e) {
          var t = e.theme;
          return {
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(8, max-content)',
            gridGap: t.spacing(0, 1),
            position: 'absolute',
            background: null == t ? void 0 : t.palette.greyAthens,
            padding: '1px 4px',
            borderRadius: 3,
            height: 20,
            alignItems: 'center',
            visibility: 'hidden',
            top: -2,
            ':before': {
              content: "''",
              position: 'absolute',
              top: '29%',
              left: -4,
              marginLeft: -5,
              border: '5px solid',
              borderColor: ''.concat(
                null == t ? void 0 : t.palette.greyAthens,
                ' transparent transparent transparent'
              ),
              transform: 'rotate(90deg)',
            },
          };
        }, ''),
        L = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'ehzyum62', label: 'Icon' })({ name: 'bosr71', styles: 'width:10px;' }),
        j = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'ehzyum63', label: 'ToolTip' })(
          {
            position: 'relative',
            height: '18px',
            ':hover': (0, a.default)({}, ''.concat(h), { visibility: 'visible' }),
          },
          ''
        );
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          C,
          'Footer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        f.register(
          v,
          'StyledEarth',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        f.register(
          h,
          'Flags',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        f.register(
          L,
          'Icon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        f.register(
          j,
          'ToolTip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Footer/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Footer/Footer.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Footer/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { Wrapper: () => l, Inner: () => s, Left: () => d, Right: () => c, Love: () => u });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        i,
        l = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1les9sd0', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return {
            background:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.snow
                : null == t
                ? void 0
                : t.palette.cyanBlue,
            borderTop: '1px solid '.concat(null == t ? void 0 : t.palette.greyGainsboro),
            color:
              'dark' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.white
                : null == t
                ? void 0
                : t.palette.nobel01,
            fontSize: '14px',
            padding: '20px',
          };
        }, ''),
        s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1les9sd1', label: 'Inner' })(function (e) {
          var t,
            o = e.theme;
          return (
            (t = {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }),
            (0, r.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.medium, 'px)'),
              { minWidth: 400, maxWidth: 800, margin: 'auto', justifyContent: 'space-between' }
            ),
            (0, r.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.large, 'px)'),
              { maxWidth: 1240 }
            ),
            t
          );
        }, ''),
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1les9sd2', label: 'Left' })(function (e) {
          var t = e.theme;
          return (0,
          r.default)({ alignItems: 'center', display: 'none' }, '@media (min-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'flex' });
        }, ''),
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d, { target: 'e1les9sd3', label: 'Right' })({ name: 'k008qs', styles: 'display:flex;' }),
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'e1les9sd4', label: 'Love' })(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.love, padding: '0 5px' };
        }, '');
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          l,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        n.register(
          s,
          'Inner',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        n.register(
          d,
          'Left',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        n.register(
          c,
          'Right',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        n.register(
          u,
          'Love',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/App/Header/Header.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => b });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        s = o('./src/components/Button.tsx'),
        d = o('./src/providers/config/index.ts'),
        c = o('./src/App/Header/HeaderInfoDialog.tsx'),
        u = o('./src/App/Header/HeaderLeft.tsx'),
        g = o('./src/App/Header/HeaderRight.tsx'),
        p = o('./src/App/Header/LoginDialog/index.ts'),
        m = o('./src/App/Header/Search/index.ts'),
        C = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var A =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        I = function (e) {
          var t = e.withoutSearch,
            o = (0, i.useTranslation)().t,
            a = (0, n.useState)(!1),
            A = (0, r.default)(a, 2),
            I = A[0],
            f = A[1],
            b = (0, n.useState)(!1),
            v = (0, r.default)(b, 2),
            h = v[0],
            L = v[1],
            j = (0, n.useState)(!1),
            y = (0, r.default)(j, 2),
            x = y[0],
            O = y[1],
            D = (0, l.useSelector)(function (e) {
              return e.login;
            }),
            H = (0, l.useSelector)(function (e) {
              return e.configuration;
            }),
            G = (0, d.useConfig)().configOptions,
            E = (0, l.useDispatch)();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              C.NavBar,
              { 'data-testid': 'header', position: 'static' },
              n.createElement(
                C.InnerNavBar,
                null,
                n.createElement(u.default, null),
                n.createElement(g.default, {
                  hasLogin: null == G ? void 0 : G.login,
                  onLogout: function () {
                    E.login.logOutUser();
                  },
                  onOpenRegistryInfoDialog: function () {
                    return f(!0);
                  },
                  onToggleLogin: function () {
                    return O(!x);
                  },
                  onToggleMobileNav: function () {
                    return L(!h);
                  },
                  username: null == D ? void 0 : D.username,
                  withoutSearch: t,
                })
              ),
              n.createElement(c.default, {
                isOpen: I,
                onCloseDialog: function () {
                  return f(!1);
                },
                registryUrl: G.base,
                scope: H.scope,
              })
            ),
            h &&
              !t &&
              n.createElement(
                C.MobileNavBar,
                null,
                n.createElement(C.InnerMobileNavBar, null, n.createElement(m.default, null)),
                n.createElement(
                  s.default,
                  {
                    color: 'inherit',
                    onClick: function () {
                      return L(!1);
                    },
                  },
                  o('button.cancel')
                )
              ),
            !D.user &&
              n.createElement(p.default, {
                onClose: function () {
                  return O(!1);
                },
                open: x,
              })
          );
        };
      A(
        I,
        'useTranslation{{ t }}\nuseState{[isInfoDialogOpen, setOpenInfoDialog](false)}\nuseState{[showMobileNavBar, setShowMobileNavBar](false)}\nuseState{[showLoginModal, setShowLoginModal](false)}\nuseSelector{loginStore}\nuseSelector{configStore}\nuseConfig{{ configOptions }}\nuseDispatch{dispatch}',
        function () {
          return [i.useTranslation, l.useSelector, l.useSelector, d.useConfig, l.useDispatch];
        }
      );
      var f = I;
      const b = f;
      var v, h;
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          I,
          'Header',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Header.tsx'
        ),
        v.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Header.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/App/Header/HeaderGreetings.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Label/index.ts'),
        l = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function (e) {
          var t = e.username,
            o = (0, n.useTranslation)().t;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(l.Greetings, null, o('header.greetings')),
            r.createElement(i.default, {
              'data-testid': 'greetings-label',
              text: t,
              weight: 'bold',
            })
          );
        };
      s(d, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'HeaderGreetings',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderGreetings.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderGreetings.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/App/Header/HeaderInfoDialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/App/Header/RegistryInfoContent/index.ts'),
        i = o('./src/App/Header/RegistryInfoDialog/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function (e) {
          var t = e.onCloseDialog,
            o = e.isOpen,
            a = e.registryUrl,
            l = e.scope;
          return r.createElement(
            i.default,
            { onClose: t, open: o },
            r.createElement(n.default, { registryUrl: a, scope: l })
          );
        },
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          l,
          'HeaderInfoDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderInfoDialog.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderInfoDialog.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/App/Header/HeaderLeft.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => g }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        i = o('./src/components/Logo/index.ts'),
        l = o('./src/App/Header/Search/index.ts'),
        s = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.Link, { target: 'emyn0tj0', label: 'StyledLink' })({
          name: '1dk30lc',
          styles: 'margin-right:1em;',
        }),
        c = function (e) {
          var t = e.withoutSearch,
            o = void 0 !== t && t;
          return r.createElement(
            s.LeftSide,
            null,
            r.createElement(d, { to: '/' }, r.createElement(i.default, null)),
            !o && r.createElement(s.SearchWrapper, null, r.createElement(l.default, null))
          );
        },
        u = c;
      const g = u;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          d,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        ),
        p.register(
          c,
          'HeaderLeft',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/App/Header/HeaderMenu.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => p }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/AccountCircle'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/IconButton.tsx'),
        l = o('./src/components/Menu.tsx'),
        s = o('./src/components/MenuItem.tsx'),
        d = o('./src/App/Header/HeaderGreetings.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var t = e.onLogout,
            o = e.username,
            a = e.isMenuOpen,
            c = void 0 !== a && a,
            u = e.anchorEl,
            g = e.onLoggedInMenu,
            p = e.onLoggedInMenuClose,
            m = (0, n.useTranslation)().t;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              i.default,
              {
                color: 'inherit',
                'data-testid': 'logInDialogIcon',
                id: 'header--button-account',
                onClick: g,
              },
              r.createElement(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@material-ui/icons/AccountCircle'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })()
                ),
                null
              )
            ),
            r.createElement(
              l.default,
              {
                anchorEl: u,
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                onClose: p,
                open: c,
                transformOrigin: { vertical: 'top', horizontal: 'right' },
              },
              r.createElement(s.default, null, r.createElement(d.default, { username: o })),
              r.createElement(
                s.default,
                {
                  button: !0,
                  'data-testid': 'logOutDialogIcon',
                  id: 'logOutDialogIcon',
                  onClick: t,
                },
                m('button.logout')
              )
            )
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var g = u;
      const p = g;
      var m, C;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'HeaderMenu',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderMenu.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderMenu.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/App/Header/HeaderRight.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => A });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = o('./src/components/Button.tsx'),
        s = o('./src/design-tokens/ThemeContext.ts'),
        d = o('./src/App/Header/HeaderMenu.tsx'),
        c = o('./src/App/Header/HeaderToolTip.tsx'),
        u = o('./src/App/Header/LanguageSwitch.tsx'),
        g = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = function (e) {
          var t = e.withoutSearch,
            o = void 0 !== t && t,
            a = e.username,
            p = e.onToggleLogin,
            m = e.hasLogin,
            C = e.onLogout,
            A = e.onToggleMobileNav,
            I = e.onOpenRegistryInfoDialog,
            f = (0, n.useContext)(s.default),
            b = (0, n.useState)(null),
            v = (0, r.default)(b, 2),
            h = v[0],
            L = v[1],
            j = (0, n.useState)(!1),
            y = (0, r.default)(j, 2),
            x = y[0],
            O = y[1],
            D = !1 === m,
            H = (0, i.useTranslation)().t;
          if (!f) throw Error(H('theme-context-not-correct-used'));
          (0, n.useEffect)(
            function () {
              O(Boolean(h));
            },
            [h]
          );
          return n.createElement(
            g.RightSide,
            { 'data-testid': 'header-right' },
            !o &&
              n.createElement(c.default, {
                onClick: A,
                title: H('search.packages'),
                tooltipIconType: 'search',
              }),
            n.createElement(u.default, null),
            n.createElement(c.default, {
              title: H('header.documentation'),
              tooltipIconType: 'help',
            }),
            n.createElement(c.default, {
              onClick: I,
              title: H('header.registry-info'),
              tooltipIconType: 'info',
            }),
            n.createElement(c.default, {
              onClick: function () {
                setTimeout(function () {
                  f.setIsDarkMode(!f.isDarkMode);
                }, 300);
              },
              title: H('header.documentation'),
              tooltipIconType: f.isDarkMode ? 'dark-mode' : 'light-mode',
            }),
            !D &&
              n.createElement(
                n.Fragment,
                null,
                a
                  ? n.createElement(d.default, {
                      anchorEl: h,
                      isMenuOpen: x,
                      onLoggedInMenu: function (e) {
                        L(e.currentTarget);
                      },
                      onLoggedInMenuClose: function () {
                        L(null);
                      },
                      onLogout: C,
                      username: a,
                    })
                  : n.createElement(
                      l.default,
                      {
                        color: 'inherit',
                        'data-testid': 'header--button-login',
                        onClick: function () {
                          L(null), p();
                        },
                      },
                      H('button.login')
                    )
              )
          );
        };
      p(
        m,
        'useContext{themeContext}\nuseState{[anchorEl, setAnchorEl](null)}\nuseState{[isMenuOpen, setIsMenuOpen](false)}\nuseTranslation{{ t }}\nuseEffect{}',
        function () {
          return [i.useTranslation];
        }
      );
      var C = m;
      const A = C;
      var I, f;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          m,
          'HeaderRight',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderRight.tsx'
        ),
        I.register(
          C,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderRight.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/App/Header/HeaderToolTip.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/Tooltip.tsx'),
        i = o('./src/App/Header/HeaderToolTipIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function (e) {
          var t = e.tooltipIconType,
            o = e.title,
            a = e.onClick;
          return r.createElement(
            n.default,
            { disableFocusListener: !0, title: o },
            r.createElement(i.default, { onClick: a, tooltipIconType: t })
          );
        },
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          l,
          'HeaderToolTip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTip.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTip.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/App/Header/HeaderToolTipIcon.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => d }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Help'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Info'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/NightsStay'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Search'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/WbSunny'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/IconButton.tsx'),
        i = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = (0, r.forwardRef)(function (e, t) {
          var o = e.tooltipIconType,
            a = e.onClick;
          switch (o) {
            case 'help':
              return r.createElement(
                i.StyledLink,
                {
                  'data-testid': 'header--tooltip-documentation',
                  external: !0,
                  to: 'https://verdaccio.org/docs/en/installation',
                },
                r.createElement(
                  n.default,
                  { color: 'inherit' },
                  r.createElement(
                    Object(
                      (function () {
                        var e = new Error("Cannot find module '@material-ui/icons/Help'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                      })()
                    ),
                    null
                  )
                )
              );
            case 'info':
              return r.createElement(
                n.default,
                {
                  color: 'inherit',
                  'data-testid': 'header--tooltip-info',
                  id: 'header--button-registryInfo',
                  onClick: a,
                  ref: t,
                },
                r.createElement(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module '@material-ui/icons/Info'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                  ),
                  null
                )
              );
            case 'search':
              return r.createElement(
                i.IconSearchButton,
                { color: 'inherit', onClick: a },
                r.createElement(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module '@material-ui/icons/Search'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                  ),
                  null
                )
              );
            case 'dark-mode':
              return r.createElement(
                n.default,
                { color: 'inherit', onClick: a, ref: t },
                r.createElement(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module '@material-ui/icons/NightsStay'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                  ),
                  null
                )
              );
            case 'light-mode':
              return r.createElement(
                n.default,
                { color: 'inherit', onClick: a, ref: t },
                r.createElement(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module '@material-ui/icons/WbSunny'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                  ),
                  null
                )
              );
            default:
              return null;
          }
        }),
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          l,
          'HeaderToolTipIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTipIcon.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTipIcon.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/App/Header/LanguageSwitch.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => I });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Language'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var n,
        i = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o('./src/components/AutoComplete/AutoCompleteV2.tsx'),
        c = o('./src/components/MenuItem.tsx'),
        u = o('./src/design-tokens/ThemeContext.ts'),
        g = o('./src/i18n/enabledLanguages.ts');
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = g.listLanguages.reduce(function (e, t) {
          return (e[t.lng] = { translation: t.menuKey, icon: t.icon }), e;
        }, {}),
        C = function () {
          var e,
            t = (0, l.useContext)(u.default),
            o = (0, l.useState)(
              Object.keys(
                (null === (e = i.default.options) || void 0 === e ? void 0 : e.resources) || {}
              )
            ),
            a = (0, r.default)(o, 1)[0],
            n = (0, s.useTranslation)().t;
          if (!t) throw Error(n('theme-context-not-correct-used'));
          var c = t.language,
            g = (0, l.useCallback)(
              function (e) {
                var o = e.language;
                t.setLanguage(o);
              },
              [t]
            ),
            p = (0, l.useCallback)(
              function (e) {
                var t = m[e] || m['en-US'];
                return { icon: l.createElement(t.icon, null), translation: n(t.translation) };
              },
              [n]
            ),
            C = (0, l.useMemo)(
              function () {
                return a.map(function (e) {
                  var t = p(e);
                  return { language: e, icon: t.icon, translation: t.translation };
                });
              },
              [a, p]
            ),
            A = (0, l.useCallback)(function (e) {
              var t = e.icon,
                o = e.translation;
              return l.createElement(L, { component: 'div' }, t, o);
            }, []),
            I = (0, l.useCallback)(function (e) {
              return e.translation;
            }, []);
          return l.createElement(
            h,
            null,
            l.createElement(d.AutoComplete, {
              defaultValue: p(c).translation,
              getOptionLabel: I,
              hasClearIcon: !0,
              inputStartAdornment: l.createElement(v, null),
              onClick: g,
              options: C,
              renderOption: A,
              variant: 'outlined',
            })
          );
        };
      p(
        C,
        'useContext{themeContext}\nuseState{[languages](Object.keys(i18next.options?.resources || {}) as Language[])}\nuseTranslation{{ t }}\nuseCallback{switchLanguage}\nuseCallback{getCurrentLngDetails}\nuseMemo{options}\nuseCallback{option}\nuseCallback{optionLabel}',
        function () {
          return [s.useTranslation];
        }
      );
      var A = C;
      const I = A;
      var f,
        b,
        v = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/icons/Language'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          { target: 'e1qrps3i0', label: 'StyledLanguageIcon' }
        )(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.white };
        }, ''),
        h = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1qrps3i1', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return (0,
          a.default)({ width: 220, display: 'none' }, '@media screen and (min-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'inline-block' });
        }, ''),
        L = Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(function (e) {
          return {
            root: {
              display: 'grid',
              cursor: 'pointer',
              gridGap: null == e ? void 0 : e.spacing(0.5),
              gridTemplateColumns: '20px 1fr',
              alignItems: 'center',
              '&:first-child': { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
            },
          };
        })(c.default);
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          m,
          'listConverted',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        f.register(
          C,
          'LanguageSwitch',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        f.register(
          v,
          'StyledLanguageIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        f.register(
          h,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        f.register(
          L,
          'StyledMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Header/LoginDialog/LoginDialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => v });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = o.n(n),
        l = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        s = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        d = o.n(s),
        c = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        g = o('./src/components/Dialog.tsx'),
        p = o('./src/components/DialogContent.tsx'),
        m = o('./src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'),
        C = o('./src/App/Header/LoginDialog/LoginDialogForm.tsx'),
        A = o('./src/App/Header/LoginDialog/LoginDialogHeader.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var I =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = function (e) {
          var t = e.onClose,
            o = e.open,
            a = void 0 !== o && o,
            n = (0, u.useSelector)(function (e) {
              return e.login;
            }),
            s = (0, u.useDispatch)(),
            I = (0, c.useCallback)(
              (function () {
                var e = (0, r.default)(
                  i().mark(function e(t, o) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!d()(t) && !d()(o)) {
                              e.next = 3;
                              break;
                            }
                            return (
                              s.login.addError({
                                type: 'error',
                                description: l.default.t(
                                  'form-validation.username-or-password-cant-be-empty'
                                ),
                              }),
                              e.abrupt('return')
                            );
                          case 3:
                            try {
                              s.login.getUser({ username: t, password: o }), s.login.clearError();
                            } catch (e) {
                              s.login.addError({
                                type: 'error',
                                description: l.default.t('form-validation.unable-to-sign-in'),
                              }),
                                console.error('login error', e.message);
                            }
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, o) {
                  return e.apply(this, arguments);
                };
              })(),
              [s]
            ),
            f = (0, c.useCallback)(
              (function () {
                var e = (0, r.default)(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), I(t.username, t.password);
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [I]
            );
          return (
            (0, c.useEffect)(
              function () {
                n.token && void 0 === n.error && t();
              },
              [n, t]
            ),
            c.createElement(
              g.default,
              {
                'data-testid': 'login--dialog',
                fullWidth: !0,
                id: 'login--dialog',
                maxWidth: 'sm',
                onClose: t,
                open: a,
              },
              c.createElement(m.default, { onClose: t }),
              c.createElement(
                p.default,
                null,
                c.createElement(A.default, null),
                c.createElement(C.default, { error: n.error, onSubmit: f })
              )
            )
          );
        };
      I(
        f,
        'useSelector{loginStore}\nuseDispatch{dispatch}\nuseCallback{makeLogin}\nuseCallback{handleDoLogin}\nuseEffect{}',
        function () {
          return [u.useSelector, u.useDispatch];
        }
      );
      var b = f;
      const v = b;
      var h, L;
      (h = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (h.register(
          f,
          'LoginDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialog.tsx'
        ),
        h.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialog.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/App/Header/LoginDialog/LoginDialogCloseButton.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => g }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Close'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/DialogTitle.tsx'),
        l = o('./src/components/IconButton.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'e5e0mp70', label: 'StyledIconButton' })(function (e) {
          var t = e.theme;
          return {
            position: 'absolute',
            right: t.spacing() / 2,
            top: t.spacing() / 2,
            color: t.palette.grey[500],
          };
        }, ''),
        c = function (e) {
          var t = e.onClose,
            o = (0, n.useTranslation)().t;
          return r.createElement(
            i.default,
            null,
            r.createElement(
              d,
              { 'data-testid': 'close-login-dialog-button', onClick: t },
              r.createElement(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@material-ui/icons/Close'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })()
                ),
                { titleAccess: o('button.close') }
              )
            )
          );
        };
      s(c, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var u = c;
      const g = u;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          d,
          'StyledIconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        ),
        p.register(
          c,
          'LoginDialogCloseButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/App/Header/LoginDialog/LoginDialogForm.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => A });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-hook-form@7.15.3_react@17.0.2/node_modules/react-hook-form/dist/index.esm.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o('./src/components/Button.tsx'),
        d = o('./src/components/TextField/index.ts'),
        c = o('./src/App/Header/LoginDialog/LoginDialogFormError.tsx');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('form', { target: 'e1bu7q120', label: 'StyledForm' })(function (e) {
          return { marginTop: e.theme.spacing(1) };
        }, ''),
        p = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e1bu7q121', label: 'StyledButton' })(function (e) {
          return { margin: e.theme.spacing(3, 0, 2) };
        }, ''),
        m = (0, n.memo)(
          u(
            function (e) {
              var t,
                o,
                r = e.onSubmit,
                s = e.error,
                u = (0, l.useTranslation)().t,
                m = (0, i.useForm)({ mode: 'onChange' }),
                C = m.register,
                A = m.handleSubmit,
                I = m.formState,
                f = I.isValid,
                b = I.errors;
              return n.createElement(
                g,
                {
                  noValidate: !0,
                  onSubmit: A(function (e) {
                    r(e);
                  }),
                },
                n.createElement(
                  d.default,
                  (0, a.default)(
                    {
                      autoComplete: 'username',
                      error: !!b.username,
                      fullWidth: !0,
                      helperText: null === (t = b.username) || void 0 === t ? void 0 : t.message,
                      id: 'login--dialog-username',
                    },
                    C('username', {
                      required: { value: !0, message: u('form-validation.required-field') },
                      minLength: {
                        value: 2,
                        message: u('form-validation.required-min-length', { length: 2 }),
                      },
                    }),
                    {
                      label: u('form.username'),
                      margin: 'normal',
                      name: 'username',
                      placeholder: u('form-placeholder.username'),
                      required: !0,
                      variant: 'outlined',
                    }
                  )
                ),
                n.createElement(
                  d.default,
                  (0, a.default)(
                    {
                      autoComplete: 'current-password',
                      error: !!b.password,
                      fullWidth: !0,
                      helperText: null === (o = b.password) || void 0 === o ? void 0 : o.message,
                      id: 'login--dialog-password',
                    },
                    C('password', {
                      required: { value: !0, message: u('form-validation.required-field') },
                      minLength: {
                        value: 2,
                        message: u('form-validation.required-min-length', { length: 2 }),
                      },
                    }),
                    {
                      label: u('form.password'),
                      margin: 'normal',
                      name: 'password',
                      placeholder: u('form-placeholder.password'),
                      required: !0,
                      type: 'password',
                      variant: 'outlined',
                    }
                  )
                ),
                s && n.createElement(c.default, { error: s }),
                n.createElement(
                  p,
                  {
                    color: 'primary',
                    'data-testid': 'login-dialog-form-login-button',
                    disabled: !f,
                    fullWidth: !0,
                    id: 'login--dialog-button-submit',
                    size: 'large',
                    type: 'submit',
                    variant: 'contained',
                  },
                  u('button.login')
                )
              );
            },
            'useTranslation{{ t }}\nuseForm{{\n    register,\n    handleSubmit,\n    formState: { isValid, errors },\n  }}',
            function () {
              return [l.useTranslation, i.useForm];
            }
          )
        ),
        C = m;
      const A = C;
      var I, f;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'StyledForm',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        I.register(
          p,
          'StyledButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        I.register(
          m,
          'LoginDialogForm',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        I.register(
          C,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/App/Header/LoginDialog/LoginDialogFormError.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => u }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Error'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/Box.tsx'),
        i = o('./src/components/SnackbarContent.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e1vc0dug0', label: 'StyledSnackbarContent' })(function (e) {
          var t = e.theme;
          return {
            backgroundColor: null == t ? void 0 : t.palette.error.dark,
            color: null == t ? void 0 : t.palette.white,
          };
        }, ''),
        s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/icons/Error'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          { target: 'e1vc0dug1', label: 'StyledErrorIcon' }
        )(function (e) {
          var t = e.theme;
          return { fontSize: 20, opacity: 0.9, marginRight: null == t ? void 0 : t.spacing(1) };
        }, ''),
        d = (0, r.memo)(function (e) {
          var t = e.error;
          return r.createElement(l, {
            message: r.createElement(
              n.default,
              { alignItems: 'center', display: 'flex' },
              r.createElement(s, null),
              t.description
            ),
          });
        }),
        c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          l,
          'StyledSnackbarContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        g.register(
          s,
          'StyledErrorIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        g.register(
          d,
          'LoginDialogFormError',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/App/Header/LoginDialog/LoginDialogHeader.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => p }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Close'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/LockOutlined'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Avatar.tsx'),
        l = o('./src/components/Box.tsx'),
        s = o('./src/components/Heading.tsx'),
        d = o('./src/components/IconButton.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var t = e.onClose,
            o = (0, n.useTranslation)().t;
          return r.createElement(
            l.default,
            {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            },
            t &&
              r.createElement(
                I,
                { 'aria-label': o('button.close'), onClick: t },
                r.createElement(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module '@material-ui/icons/Close'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                  ),
                  null
                )
              ),
            r.createElement(
              A,
              null,
              r.createElement(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@material-ui/icons/LockOutlined'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })()
                ),
                null
              )
            ),
            r.createElement(s.default, null, o('button.login'))
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var g = u;
      const p = g;
      var m,
        C,
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'enivurl0', label: 'StyledAvatar' })(function (e) {
          var t = e.theme;
          return {
            margin: null == t ? void 0 : t.spacing(1),
            backgroundColor:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.primary.main
                : null == t
                ? void 0
                : t.palette.cyanBlue,
            color: null == t ? void 0 : t.palette.white,
          };
        }, ''),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d.default, { target: 'enivurl1', label: 'StyledIconButton' })(function (e) {
          var t = e.theme;
          return {
            position: 'absolute',
            right: (null == t ? void 0 : t.spacing()) / 2,
            top: (null == t ? void 0 : t.spacing()) / 2,
            color: null == t ? void 0 : t.palette.grey[500],
          };
        }, '');
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'LoginDialogHeader',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        m.register(
          A,
          'StyledAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        m.register(
          I,
          'StyledIconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/App/Header/LoginDialog/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/LoginDialog/LoginDialog.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          AccordionContainer: () => C,
          CommandContainer: () => A,
          LinkContainer: () => I,
          default: () => v,
        }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Accordion'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/AccordionDetails'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/AccordionSummary'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Box'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Link'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Typography'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/ExpandMore'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/CopyToClipBoard.tsx'),
        l = o('./src/providers/config/index.ts'),
        s = o('./src/utils/cli-utils.ts'),
        d = o('./src/utils/constants.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e, t) {
          return r.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Box'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            { display: 'flex', flexDirection: 'column', p: 1 },
            r.createElement(i.default, {
              text: (0, s.getCLISetConfigRegistry)(''.concat(d.NODE_MANAGER.npm, ' set'), e, t),
            }),
            r.createElement(i.default, {
              text: (0, s.getCLISetRegistry)(''.concat(d.NODE_MANAGER.npm, ' adduser'), t),
            }),
            r.createElement(i.default, { text: (0, s.getCLIChangePassword)(d.NODE_MANAGER.npm, t) })
          );
        },
        g = function (e, t) {
          return r.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Box'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            { display: 'flex', flexDirection: 'column', p: 1 },
            r.createElement(i.default, {
              text: (0, s.getCLISetConfigRegistry)(''.concat(d.NODE_MANAGER.pnpm, ' set'), e, t),
            }),
            r.createElement(i.default, {
              text: (0, s.getCLISetRegistry)(''.concat(d.NODE_MANAGER.pnpm, ' adduser'), t),
            }),
            r.createElement(i.default, {
              text: (0, s.getCLIChangePassword)(d.NODE_MANAGER.pnpm, t),
            })
          );
        },
        p = function (e, t) {
          return r.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Box'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            { display: 'flex', flexDirection: 'column', p: 1 },
            r.createElement(i.default, {
              text: (0, s.getCLISetConfigRegistry)(
                ''.concat(d.NODE_MANAGER.yarn, ' config set'),
                e,
                t
              ),
            })
          );
        },
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(function (e) {
          return {
            root: { width: '100%' },
            heading: {
              fontSize: e.typography.pxToRem(15),
              fontWeight: e.typography.fontWeightBold,
            },
          };
        }),
        C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'eckfk9f0', label: 'AccordionContainer' })({
          name: 'hvdntx',
          styles: 'padding:30px;padding-left:0;padding-right:0;',
        }),
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'eckfk9f1', label: 'CommandContainer' })({
          name: '1g360fb',
          styles: 'padding:5px;',
        }),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'eckfk9f2', label: 'LinkContainer' })({
          name: '5u9j9g',
          styles: 'margin:10px;margin-left:0;',
        }),
        f = function (e) {
          var t,
            o,
            a,
            i = e.scope,
            s = e.registryUrl,
            d = (0, n.useTranslation)().t,
            c = m(),
            f = (0, l.useConfig)().configOptions,
            b =
              null == f || null === (t = f.pkgManagers) || void 0 === t
                ? void 0
                : t.includes('npm'),
            v =
              null == f || null === (o = f.pkgManagers) || void 0 === o
                ? void 0
                : o.includes('yarn'),
            h =
              null == f || null === (a = f.pkgManagers) || void 0 === a
                ? void 0
                : a.includes('pnpm'),
            L = b | h | v;
          return L && i && s
            ? L
              ? r.createElement(
                  C,
                  null,
                  b &&
                    r.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/core/Accordion'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      null,
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/AccordionSummary'"
                            );
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        {
                          'aria-controls': 'panel1a-content',
                          expandIcon: r.createElement(
                            Object(
                              (function () {
                                var e = new Error(
                                  "Cannot find module '@material-ui/icons/ExpandMore'"
                                );
                                throw ((e.code = 'MODULE_NOT_FOUND'), e);
                              })()
                            ),
                            null
                          ),
                          id: 'panel1a-header',
                        },
                        r.createElement(
                          Object(
                            (function () {
                              var e = new Error(
                                "Cannot find module '@material-ui/core/Typography'"
                              );
                              throw ((e.code = 'MODULE_NOT_FOUND'), e);
                            })()
                          ),
                          { className: c.heading },
                          'npm'
                        )
                      ),
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/AccordionDetails'"
                            );
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        null,
                        r.createElement(A, { 'data-testid': 'tab-content' }, u(i, s))
                      )
                    ),
                  v &&
                    r.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/core/Accordion'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      null,
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/AccordionSummary'"
                            );
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        {
                          'aria-controls': 'panel2a-content',
                          expandIcon: r.createElement(
                            Object(
                              (function () {
                                var e = new Error(
                                  "Cannot find module '@material-ui/icons/ExpandMore'"
                                );
                                throw ((e.code = 'MODULE_NOT_FOUND'), e);
                              })()
                            ),
                            null
                          ),
                          id: 'panel2a-header',
                        },
                        r.createElement(
                          Object(
                            (function () {
                              var e = new Error(
                                "Cannot find module '@material-ui/core/Typography'"
                              );
                              throw ((e.code = 'MODULE_NOT_FOUND'), e);
                            })()
                          ),
                          { className: c.heading },
                          'yarn'
                        )
                      ),
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/AccordionDetails'"
                            );
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        null,
                        r.createElement(A, { 'data-testid': 'tab-content' }, p(i, s))
                      )
                    ),
                  h &&
                    r.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/core/Accordion'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      null,
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/AccordionSummary'"
                            );
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        {
                          'aria-controls': 'panel3a-content',
                          expandIcon: r.createElement(
                            Object(
                              (function () {
                                var e = new Error(
                                  "Cannot find module '@material-ui/icons/ExpandMore'"
                                );
                                throw ((e.code = 'MODULE_NOT_FOUND'), e);
                              })()
                            ),
                            null
                          ),
                          id: 'panel3a-header',
                        },
                        'pnpm'
                      ),
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error(
                              "Cannot find module '@material-ui/core/AccordionDetails'"
                            );
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        null,
                        r.createElement(A, { 'data-testid': 'tab-content' }, g(i, s))
                      )
                    ),
                  r.createElement(
                    I,
                    null,
                    r.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/core/Link'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      { href: 'https://verdaccio.org/docs/en/cli-registry', target: '_blank' },
                      r.createElement(
                        Object(
                          (function () {
                            var e = new Error("Cannot find module '@material-ui/core/Typography'");
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        null,
                        d('header.registry-info-link')
                      )
                    )
                  )
                )
              : null
            : r.createElement(C, null, d('header.registry-no-conf'));
        };
      c(f, 'useTranslation{{ t }}\nuseStyles{classes}\nuseConfig{{ configOptions }}', function () {
        return [n.useTranslation, m, l.useConfig];
      });
      var b = f;
      const v = b;
      var h, L;
      (h = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (h.register(
          u,
          'renderNpmTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          g,
          'renderPnpmTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          p,
          'renderYarnTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          m,
          'useStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          C,
          'AccordionContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          A,
          'CommandContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          I,
          'LinkContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          f,
          'RegistryInfoContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        h.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/App/Header/RegistryInfoContent/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Button.tsx'),
        l = o('./src/components/Dialog.tsx'),
        s = o('./src/components/DialogActions.tsx'),
        d = o('./src/App/Header/RegistryInfoDialog/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var t = e.open,
            o = void 0 !== t && t,
            a = e.children,
            c = e.onClose,
            u = (0, n.useTranslation)().t;
          return r.createElement(
            l.default,
            {
              'data-testid': 'registryInfo--dialog',
              id: 'registryInfo--dialog-container',
              onClose: c,
              open: o,
            },
            r.createElement(d.Title, { disableTypography: !0 }, u('dialog.registry-info.title')),
            r.createElement(d.Content, null, a),
            r.createElement(
              s.default,
              null,
              r.createElement(
                i.default,
                { color: 'inherit', id: 'registryInfo--dialog-close', onClick: c },
                u('button.close')
              )
            )
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var g = u;
      const p = g;
      var m, C;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'RegistryInfoDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/App/Header/RegistryInfoDialog/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoDialog/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { Title: () => s, Content: () => d }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/DialogContent.tsx'),
        n = o('./src/components/DialogTitle.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1tueu980', label: 'Title' })(function (e) {
          var t, o, a;
          return {
            backgroundColor:
              null === (t = e.theme) || void 0 === t ? void 0 : t.palette.primary.main,
            color: null === (o = e.theme) || void 0 === o ? void 0 : o.palette.white,
            fontSize: null === (a = e.theme) || void 0 === a ? void 0 : a.fontSize.lg,
          };
        }, ''),
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'e1tueu981', label: 'Content' })(function (e) {
          var t = e.theme;
          return {
            padding: '0 24px',
            backgroundColor: null == t ? void 0 : t.palette.background.default,
          };
        }, '');
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          s,
          'Title',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/styles.ts'
        ),
        i.register(
          d,
          'Content',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/App/Header/Search/Search.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => I });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js'),
        i = o.n(n),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        c = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        u = o('./src/components/AutoComplete/index.ts'),
        g = o('./src/App/Header/Search/SearchAdornment.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = { API_DELAY: 300, ABORT_ERROR: 'AbortError' },
        C = function (e) {
          var t = e.history,
            o = (0, s.useTranslation)().t,
            a = (0, l.useState)(!1),
            n = (0, r.default)(a, 2),
            c = n[0],
            p = n[1],
            C = (0, l.useState)(''),
            A = (0, r.default)(C, 2),
            I = A[0],
            f = A[1],
            b = (0, d.useSelector)(function (e) {
              return e.search;
            }),
            v = b.isError,
            h = b.suggestions,
            L = (0, d.useSelector)(function (e) {
              var t;
              return null == e || null === (t = e.loading) || void 0 === t
                ? void 0
                : t.models.search;
            }),
            j = (0, d.useDispatch)(),
            y = (0, l.useCallback)(
              function () {
                j.search.clearRequestQueue();
              },
              [j]
            ),
            x = (0, l.useCallback)(
              function (e) {
                e.stopPropagation(), y();
              },
              [y]
            ),
            O = (0, l.useCallback)(
              function (e, t) {
                var o = t.newValue,
                  a = t.method;
                if ((e.stopPropagation(), 'type' === a)) {
                  var r = o.trim();
                  f(r), p(!1), 0 === (null == r ? void 0 : r.length) && y();
                }
              },
              [y]
            ),
            D = (0, l.useCallback)(
              function () {
                j.search.saveSearch({ suggestions: [] });
              },
              [j]
            ),
            H = (0, l.useCallback)(
              function (e, o) {
                var a = o.suggestionValue,
                  r = o.method;
                switch ((e.stopPropagation(), r)) {
                  case 'click':
                  case 'enter':
                    f(''), t.push('/-/web/detail/'.concat(a));
                }
              },
              [t]
            ),
            G = (0, l.useCallback)(
              function (e) {
                var t = e.value;
                j.search.getSuggestions({ value: t });
              },
              [j]
            );
          return l.createElement(u.default, {
            onBlur: x,
            onChange: O,
            onCleanSuggestions: D,
            onClick: H,
            onSuggestionsFetch: i()(G, m.API_DELAY),
            placeholder: o('search.packages'),
            startAdornment: l.createElement(g.default, null),
            suggestions: h,
            suggestionsError: v,
            suggestionsLoaded: c,
            suggestionsLoading: L,
            value: I,
          });
        };
      p(
        C,
        "useTranslation{{ t }}\nuseState{[loaded, setLoaded](false)}\nuseState{[search, setSearch]('')}\nuseSelector{{ isError, suggestions }}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseCallback{cancelAllSearchRequests}\nuseCallback{handleOnBlur}\nuseCallback{handleSearch}\nuseCallback{handlePackagesClearRequested}\nuseCallback{handleClickSearch}\nuseCallback{handleFetchPackages}",
        function () {
          return [s.useTranslation, d.useSelector, d.useSelector, d.useDispatch];
        }
      );
      var A = (0, c.withRouter)(C);
      const I = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          m,
          'CONSTANTS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        ),
        f.register(
          C,
          'Search',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Header/Search/SearchAdornment.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => d }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Search'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/InputAdornment/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1skelk0', label: 'StyledInputAdornment' })(function (e) {
          var t;
          return { color: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.white };
        }, ''),
        l = function () {
          return r.createElement(
            i,
            { position: 'start' },
            r.createElement(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@material-ui/icons/Search'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              ),
              null
            )
          );
        },
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'StyledInputAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/SearchAdornment.tsx'
        ),
        c.register(
          l,
          'SearchAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/SearchAdornment.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/SearchAdornment.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/App/Header/Search/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/Search/Search.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/Header.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          InnerNavBar: () => u,
          Greetings: () => g,
          RightSide: () => p,
          LeftSide: () => m,
          MobileNavBar: () => C,
          InnerMobileNavBar: () => A,
          IconSearchButton: () => I,
          SearchWrapper: () => f,
          NavBar: () => b,
          StyledLink: () => v,
        });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/core'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var r,
        n = o('./src/components/AppBar.tsx'),
        i = o('./src/components/IconButton.tsx'),
        l = o('./src/components/Link.tsx'),
        s = o('./src/components/Toolbar.tsx');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        c,
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e1onlrbh0', label: 'InnerNavBar' })({
          name: '1bjere7',
          styles: 'justify-content:space-between;align-items:center;padding:0 15px;',
        }),
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'e1onlrbh1', label: 'Greetings' })({
          name: '1n523ko',
          styles: 'margin:0 5px 0 0;',
        }),
        p = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e1onlrbh2', label: 'RightSide' })({
          name: '1qii1b7',
          styles: 'display:flex;padding:0;',
        }),
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(p, { target: 'e1onlrbh3', label: 'LeftSide' })({ name: '1rr4qq7', styles: 'flex:1;' }),
        C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1onlrbh4', label: 'MobileNavBar' })(function (e) {
          var t;
          return {
            alignItems: 'center',
            display: 'flex',
            borderBottom: '1px solid '.concat(
              null === (t = e.theme) || void 0 === t ? void 0 : t.palette.greyLight
            ),
            padding: '8px',
            position: 'relative',
          };
        }, ''),
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1onlrbh5', label: 'InnerMobileNavBar' })(function (e) {
          var t, o;
          return {
            borderRadius: '4px',
            backgroundColor: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.greyLight,
            color: null === (o = e.theme) || void 0 === o ? void 0 : o.palette.white,
            width: '100%',
            padding: '0 5px',
            margin: '0 10px 0 0',
          };
        }, ''),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e1onlrbh6', label: 'IconSearchButton' })({
          name: '13o7eu2',
          styles: 'display:block;',
        }),
        f = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1onlrbh7', label: 'SearchWrapper' })({
          name: '1xh5hcv',
          styles: 'display:none;width:100%;',
        }),
        b = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1onlrbh8', label: 'NavBar' })(function (e) {
          var t,
            o = e.theme;
          return (
            (t = {
              backgroundColor:
                'light' === (null == o ? void 0 : o.palette.type)
                  ? null == o
                    ? void 0
                    : o.palette.primary.main
                  : null == o
                  ? void 0
                  : o.palette.cyanBlue,
              color: null == o ? void 0 : o.palette.white,
              minHeight: 60,
              display: 'flex',
              justifyContent: 'center',
            }),
            (0, a.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.medium, 'px)'),
              Object(
                (function () {
                  var e = new Error("Cannot find module '@emotion/core'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              )(f, '{display:flex;}', I, '{display:none;}', C, '{display:none;};label:NavBar;')
            ),
            (0, a.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.large, 'px)'),
              Object(
                (function () {
                  var e = new Error("Cannot find module '@emotion/core'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              )(u, '{padding:0 20px;};label:NavBar;')
            ),
            (0, a.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.xlarge, 'px)'),
              Object(
                (function () {
                  var e = new Error("Cannot find module '@emotion/core'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              )(u, '{max-width:1240px;width:100%;margin:0 auto;};label:NavBar;')
            ),
            t
          );
        }, ''),
        v = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'e1onlrbh9', label: 'StyledLink' })(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.white };
        }, '');
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          u,
          'InnerNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          g,
          'Greetings',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          p,
          'RightSide',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          m,
          'LeftSide',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          C,
          'MobileNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          A,
          'InnerMobileNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          I,
          'IconSearchButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          f,
          'SearchWrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          b,
          'NavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        d.register(
          v,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/App/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/App.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/utils/loadable.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n = function (e) {
        var t = (0, r.lazy)(e);
        return function (e) {
          return r.createElement(r.Suspense, { fallback: null }, r.createElement(t, e));
        };
      };
      const i = n;
      var l, s;
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        l.register(
          n,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/utils/loadable.tsx'
        ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/ActionBar/ActionBar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/utils/url.ts'),
        l = o('./src/pages/Version/index.ts'),
        s = o('./src/components/Box.tsx'),
        d = o('./src/components/ActionBar/ActionBarAction.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function () {
          var e = n.useContext(l.DetailContext).packageMeta;
          if (null == e || !e.latest) return null;
          var t = e.latest,
            o = t.homepage,
            a = t.bugs,
            c = t.dist,
            u = [];
          return (
            o && (0, i.isURL)(o) && u.push({ type: 'VISIT_HOMEPAGE', link: o }),
            null != a &&
              a.url &&
              (0, i.isURL)(a.url) &&
              u.push({ type: 'OPEN_AN_ISSUE', link: a.url }),
            null != c &&
              c.tarball &&
              (0, i.isURL)(c.tarball) &&
              u.push({ type: 'DOWNLOAD_TARBALL', link: c.tarball }),
            n.createElement(
              s.default,
              { alignItems: 'center', display: 'flex', marginBottom: '14px' },
              u.map(function (e) {
                return n.createElement(d.default, (0, r.default)({ key: e.link }, e));
              })
            )
          );
        };
      c(u, 'useContext{detailContext}');
      var g = u;
      const p = g;
      var m, C;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'ActionBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBar.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBar.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/ActionBar/ActionBarAction.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Fab: () => m, default: () => I });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        n = o.n(r);
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/icons/BugReport'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/CloudDownload'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Home'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var i,
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        c = o('./src/components/FloatingActionButton.tsx'),
        u = o('./src/components/Link.tsx'),
        g = o('./src/components/Tooltip.tsx');
      (e = o.hmd(e)),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          i(e);
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(c.default, { target: 'eouwtqf0', label: 'Fab' })(function (e) {
          var t = e.theme;
          return {
            backgroundColor:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.primary.main
                : null == t
                ? void 0
                : t.palette.cyanBlue,
            color: null == t ? void 0 : t.palette.white,
            marginRight: 10,
            ':hover': {
              color:
                'light' === (null == t ? void 0 : t.palette.type)
                  ? null == t
                    ? void 0
                    : t.palette.primary.main
                  : null == t
                  ? void 0
                  : t.palette.cyanBlue,
              background: null == t ? void 0 : t.palette.white,
            },
          };
        }, ''),
        C = function (e) {
          var t = e.type,
            o = e.link,
            r = (0, s.useTranslation)().t,
            i = (0, d.useDispatch)(),
            c = (0, l.useCallback)(
              (0, a.default)(
                n().mark(function e() {
                  return n().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          i.download.getTarball({ link: o });
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [i, o]
            );
          switch (t) {
            case 'VISIT_HOMEPAGE':
              return l.createElement(
                g.default,
                { title: r('action-bar-action.visit-home-page') },
                l.createElement(
                  u.default,
                  { external: !0, to: o },
                  l.createElement(
                    m,
                    { size: 'small' },
                    l.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/icons/Home'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      null
                    )
                  )
                )
              );
            case 'OPEN_AN_ISSUE':
              return l.createElement(
                g.default,
                { title: r('action-bar-action.open-an-issue') },
                l.createElement(
                  u.default,
                  { external: !0, to: o },
                  l.createElement(
                    m,
                    { size: 'small' },
                    l.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/icons/BugReport'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      null
                    )
                  )
                )
              );
            case 'DOWNLOAD_TARBALL':
              return l.createElement(
                g.default,
                { title: r('action-bar-action.download-tarball') },
                l.createElement(
                  m,
                  { 'data-testid': 'download-tarball-btn', onClick: c, size: 'small' },
                  l.createElement(
                    Object(
                      (function () {
                        var e = new Error("Cannot find module '@material-ui/icons/CloudDownload'");
                        throw ((e.code = 'MODULE_NOT_FOUND'), e);
                      })()
                    ),
                    null
                  )
                )
              );
          }
        };
      p(
        C,
        'useTranslation{{ t }}\nuseDispatch{dispatch}\nuseCallback{handleDownload}',
        function () {
          return [s.useTranslation, d.useDispatch];
        }
      );
      var A = C;
      const I = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          m,
          'Fab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBarAction.tsx'
        ),
        f.register(
          C,
          'ActionBarAction',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBarAction.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBarAction.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/components/ActionBar/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/ActionBar/ActionBar.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/AppBar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/AppBar'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/AppBar'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'AppBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AppBar.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AppBar.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Author/Author.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => m }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Avatar'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/utils/package.ts'),
        l = o('./src/utils/url.ts'),
        s = o('./src/pages/Version/index.ts'),
        d = o('./src/components/List.tsx'),
        c = o('./src/components/Author/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function () {
          var e = (0, r.useContext)(s.DetailContext).packageMeta,
            t = (0, n.useTranslation)().t;
          if (!e) return null;
          var o = e.latest,
            a = o.author,
            u = o.name,
            g = o.version;
          if (!a) return null;
          var p = a.email,
            m = a.name,
            C = r.createElement(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@material-ui/core/Avatar'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              ),
              { alt: a.name, src: a.avatar }
            );
          return r.createElement(
            d.default,
            {
              subheader: r.createElement(
                c.StyledText,
                { variant: 'subtitle1' },
                t('sidebar.author.title')
              ),
            },
            r.createElement(
              c.AuthorListItem,
              { button: !0 },
              p && (0, l.isEmail)(p)
                ? r.createElement(
                    'a',
                    {
                      href: 'mailto:'.concat(p, '?subject=').concat(u, '@').concat(g),
                      target: '_top',
                    },
                    C
                  )
                : C,
              m && r.createElement(c.AuthorListItemText, { primary: (0, i.getAuthorName)(m) })
            )
          );
        };
      u(g, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var p = g;
      const m = p;
      var C, A;
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          g,
          'Author',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/Author.tsx'
        ),
        C.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/Author.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/components/Author/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Author/Author.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Author/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { StyledText: () => d, AuthorListItem: () => c, AuthorListItemText: () => u }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/ListItem.tsx'),
        n = o('./src/components/ListItemText.tsx'),
        i = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e1xuehjw0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'e1xuehjw1', label: 'AuthorListItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1xuehjw2', label: 'AuthorListItemText' })({
          name: 'fipixf',
          styles: 'padding:0 10px;margin:0;',
        });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          d,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/styles.ts'
        ),
        l.register(
          c,
          'AuthorListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/styles.ts'
        ),
        l.register(
          u,
          'AuthorListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/styles.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/AutoComplete/AutoComplete.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => O });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var n = o(
          '../../../node_modules/.pnpm/autosuggest-highlight@3.1.1/node_modules/autosuggest-highlight/match/index.js'
        ),
        i = o.n(n),
        l = o(
          '../../../node_modules/.pnpm/autosuggest-highlight@3.1.1/node_modules/autosuggest-highlight/parse/index.js'
        ),
        s = o.n(l),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        c = o(
          '../../../node_modules/.pnpm/react-autosuggest@10.1.0_react@17.0.2/node_modules/react-autosuggest/dist/index.js'
        ),
        u = o.n(c),
        g = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        p = o('./src/components/MenuItem.tsx'),
        m = o('./src/components/AutoComplete/styles.tsx');
      e = o.hmd(e);
      var C,
        A = ['ref', 'startAdornment', 'disableUnderline', 'onKeyDown'];
      (C =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        C(e);
      var I =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('a', { target: 'e1c61cvw0', label: 'StyledAnchor' })(function (e) {
          return {
            fontWeight:
              e.theme && e.highlight ? e.theme.fontWeight.semiBold : e.theme.fontWeight.light,
          };
        }, ''),
        b = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(p.default, { target: 'e1c61cvw1', label: 'StyledMenuItem' })({
          name: '4g6ai3',
          styles: 'cursor:pointer;',
        }),
        v = function (e) {
          var t = e.ref,
            o = e.startAdornment,
            n = e.disableUnderline,
            i = e.onKeyDown,
            l = (0, r.default)(e, A);
          return d.createElement(
            m.InputField,
            (0, a.default)(
              {
                fullWidth: !0,
                InputProps: {
                  inputRef: function (e) {
                    t(e);
                  },
                  startAdornment: o,
                  disableUnderline: n,
                  onKeyDown: i,
                },
              },
              l
            )
          );
        },
        h = function (e) {
          return e.name;
        },
        L = function (e, t) {
          var o = t.query,
            a = t.isHighlighted,
            r = i()(e.name, o),
            n = s()(e.name, r);
          return d.createElement(
            b,
            { component: 'div', selected: a },
            d.createElement(
              'div',
              null,
              n.map(function (e, t) {
                return d.createElement(f, { highlight: e.highlight, key: String(t) }, e.text);
              })
            )
          );
        },
        j = function (e) {
          return d.createElement(
            p.default,
            { component: 'div', selected: !1 },
            d.createElement('div', null, e)
          );
        },
        y = (0, d.memo)(
          I(
            function (e) {
              var t = e.suggestions,
                o = e.startAdornment,
                r = e.onChange,
                n = e.onSuggestionsFetch,
                i = e.onCleanSuggestions,
                l = e.value,
                s = void 0 === l ? '' : l,
                c = e.placeholder,
                p = void 0 === c ? '' : c,
                C = e.disableUnderline,
                A = void 0 !== C && C,
                I = e.onClick,
                f = e.onKeyDown,
                b = e.onBlur,
                y = e.suggestionsLoading,
                x = void 0 !== y && y,
                O = e.suggestionsLoaded,
                D = void 0 !== O && O,
                H = e.suggestionsError,
                G = void 0 !== H && H,
                E = (0, g.useTranslation)().t,
                w = {
                  value: s,
                  onChange: r,
                  placeholder: p,
                  startAdornment: o,
                  disableUnderline: A,
                  onKeyDown: f,
                  onBlur: b,
                };
              return d.createElement(
                m.Wrapper,
                null,
                d.createElement(u(), {
                  renderInputComponent: v,
                  suggestions: t,
                  getSuggestionValue: h,
                  renderSuggestion: L,
                  onSuggestionsFetchRequested: n,
                  onSuggestionsClearRequested: i,
                  inputProps: w,
                  onSuggestionSelected: I,
                  renderSuggestionsContainer: function (e) {
                    var t = e.containerProps,
                      o = e.children,
                      r = e.query;
                    return d.createElement(
                      m.SuggestionContainer,
                      (0, a.default)({}, t, { square: !0 }),
                      D && null === o && r && j(E('autoComplete.no-results-found')),
                      x && r && j(E('autoComplete.loading')),
                      G && j(E('error.unspecific')),
                      o
                    );
                  },
                })
              );
            },
            'useTranslation{{ t }}',
            function () {
              return [g.useTranslation];
            }
          )
        ),
        x = y;
      const O = x;
      var D, H;
      (D = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (D.register(
          f,
          'StyledAnchor',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          b,
          'StyledMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          v,
          'renderInputComponent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          h,
          'getSuggestionValue',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          L,
          'renderSuggestion',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          j,
          'renderMessage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          y,
          'AutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        D.register(
          x,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/components/AutoComplete/AutoCompleteV2.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { AutoComplete: () => b });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Close'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/ExpandMore'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var n,
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o('./src/design-tokens/useOnClickOutside.ts'),
        d = o('./src/components/IconButton.tsx'),
        c = o('./src/components/MenuItem.tsx'),
        u = o('./src/components/Paper.tsx'),
        g = o('./src/components/TextField/index.ts'),
        p = o('./src/components/AutoComplete/useAutoComplete.tsx');
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      var m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = (0, p.createFilterOptions)(),
        A = function (e) {
          var t = e.placeholder,
            o = e.defaultValue,
            a = void 0 === o ? '' : o,
            n = e.label,
            u = e.variant,
            g = e.inputStartAdornment,
            p = e.options,
            m = e.getOptionLabel,
            A = e.renderOption,
            I = e.className,
            f = e.onClick,
            b = e.hasClearIcon,
            O = (0, l.useTranslation)().t,
            D = (0, i.useState)(a),
            H = (0, r.default)(D, 2),
            G = H[0],
            E = H[1],
            w = (0, i.useState)(p),
            M = (0, r.default)(w, 2),
            _ = M[0],
            N = M[1],
            k = (0, i.useState)(0),
            T = (0, r.default)(k, 2),
            U = T[0],
            S = T[1],
            P = (0, i.useState)(!1),
            F = (0, r.default)(P, 2),
            R = F[0],
            B = F[1],
            V = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            Z = (0, i.useRef)(null),
            W = (0, i.useCallback)(
              function () {
                B(!1), G.trim() || E(a);
              },
              [G, a]
            ),
            Y = (0, i.useCallback)(
              function () {
                var e = C(p, { inputValue: G, getOptionLabel: m });
                N(e);
              },
              [p, G, m]
            ),
            Q = (0, i.useCallback)(
              function () {
                var e,
                  t =
                    null == Z || null === (e = Z.current) || void 0 === e ? void 0 : e.children[U];
                t && t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              },
              [U]
            );
          (0, s.useOnClickOutside)(V, (0, i.useCallback)(W, [V, G])),
            (0, i.useEffect)(Y, [G]),
            (0, i.useEffect)(Q, [U]),
            (0, i.useEffect)(
              function () {
                E(a);
              },
              [a]
            );
          var X = (0, i.useCallback)(function (e) {
              E(e.target.value);
            }, []),
            J = (0, i.useCallback)(
              function () {
                B(!R);
              },
              [R]
            ),
            K = (0, i.useCallback)(function () {
              E(''), N([]), B(!0), z.current && z.current.focus();
            }, []),
            q = (0, i.useCallback)(
              function (e) {
                return function () {
                  f && f(e), E(m(e)), B(!1), z.current && z.current.blur();
                };
              },
              [m, f]
            ),
            $ = (0, i.useCallback)(function () {
              B(!0);
            }, []),
            ee = (0, i.useCallback)(
              function (e) {
                if (13 === e.keyCode) return S(0), B(!1), void q(_[U])();
                if (38 !== e.keyCode)
                  if (40 !== e.keyCode);
                  else {
                    if (U + 1 >= _.length) return;
                    S(U + 1);
                  }
                else {
                  if (0 === U) return;
                  S(U - 1);
                }
              },
              [U, q, _]
            ),
            te = (0, i.useCallback)(
              function () {
                return A
                  ? _.map(function (e, t) {
                      return i.createElement(
                        y,
                        { isSelected: t === U, key: t, onClick: q(e), tabIndex: 0 },
                        A(e)
                      );
                    })
                  : _.map(function (e, t) {
                      return i.createElement(
                        c.default,
                        { component: 'div', key: t, onClick: q(e), selected: t === U, tabIndex: 0 },
                        m(e)
                      );
                    });
              },
              [_, U, m, A, q]
            );
          return i.createElement(
            v,
            { className: I, ref: V },
            i.createElement(L, {
              autoComplete: 'off',
              InputProps: {
                startAdornment: g,
                endAdornment: i.createElement(
                  h,
                  null,
                  b &&
                    G.length > 0 &&
                    i.createElement(
                      d.default,
                      {
                        color: 'inherit',
                        onClick: K,
                        size: 'small',
                        title: O('autoComplete.clear'),
                      },
                      i.createElement(
                        Object(
                          (function () {
                            var e = new Error("Cannot find module '@material-ui/icons/Close'");
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        { fontSize: 'small' }
                      )
                    ),
                  i.createElement(
                    j,
                    {
                      color: 'inherit',
                      onClick: J,
                      showOptions: R,
                      size: 'small',
                      title: O(R ? 'autoComplete.collapse' : 'autoComplete.expand'),
                    },
                    i.createElement(
                      Object(
                        (function () {
                          var e = new Error("Cannot find module '@material-ui/icons/ExpandMore'");
                          throw ((e.code = 'MODULE_NOT_FOUND'), e);
                        })()
                      ),
                      { fontSize: 'small' }
                    )
                  )
                ),
              },
              inputRef: z,
              label: n,
              onChange: X,
              onFocus: $,
              onKeyDown: ee,
              placeholder: t,
              value: G,
              variant: u,
            }),
            R && i.createElement(x, { ref: Z, square: !0 }, te())
          );
        };
      m(
        A,
        'useTranslation{{ t }}\nuseState{[searchTerm, setSearchTerm](defaultValue)}\nuseState{[options, setOptions](suggestions)}\nuseState{[activeOption, setActiveOption](0)}\nuseState{[showOptions, setShowOptions](false)}\nuseRef{wrapperRef}\nuseRef{inputRef}\nuseRef{contentRef}\nuseCallback{clickOutside}\nuseCallback{filterOptions}\nuseCallback{scrollIntoOption}\nuseOnClickOutside{}\nuseCallback{}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseCallback{handleChange}\nuseCallback{handleToggleShowOptions}\nuseCallback{handleClear}\nuseCallback{handleClickOption}\nuseCallback{handleFocus}\nuseCallback{onKeyDown}\nuseCallback{renderOptions}',
        function () {
          return [l.useTranslation, s.useOnClickOutside];
        }
      );
      var I,
        f,
        b = (0, i.memo)(A),
        v = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1s7m15r0', label: 'Wrapper' })({
          name: '16kiram',
          styles: 'position:relative;height:40px;',
        }),
        h = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1s7m15r1', label: 'EndAdornment' })({
          name: 'k008qs',
          styles: 'display:flex;',
        }),
        L = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(g.default, { target: 'e1s7m15r2', label: 'StyledTextField' })(function (e) {
          var t,
            o = e.theme;
          return (
            (t = { height: 40, color: null == o ? void 0 : o.palette.white }),
            (0, a.default)(t, '& .MuiInputBase-root', {
              height: 40,
              color: null == o ? void 0 : o.palette.white,
            }),
            (0, a.default)(t, '& .MuiInputBase-inputAdornedStart', {
              paddingLeft: null == o ? void 0 : o.spacing(2),
            }),
            (0, a.default)(t, '& .MuiInputBase-input', {
              paddingTop: null == o ? void 0 : o.spacing(1),
              paddingBottom: null == o ? void 0 : o.spacing(1),
            }),
            (0, a.default)(t, '& .MuiOutlinedInput-notchedOutline', { borderColor: 'transparent' }),
            (0, a.default)(t, '& :hover .MuiOutlinedInput-notchedOutline', {
              borderColor: null == o ? void 0 : o.palette.white,
            }),
            (0, a.default)(t, '& :active .MuiOutlinedInput-notchedOutline', {
              borderColor: null == o ? void 0 : o.palette.white,
            }),
            t
          );
        }, ''),
        j = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d.default, {
          shouldForwardProp: function (e) {
            return 'showOptions' !== e;
          },
          target: 'e1s7m15r3',
          label: 'ExpandButton',
        })(function (e) {
          return { transform: e.showOptions ? 'rotate(180deg)' : 'none' };
        }, ''),
        y = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1s7m15r4', label: 'Option' })(function (e) {
          return { background: e.isSelected ? 'rgba(0, 0, 0, 0.08)' : 'none' };
        }, ''),
        x = Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(function (e) {
          return {
            root: {
              marginTop: null == e ? void 0 : e.spacing(0.5),
              borderRadius: 3,
              maxHeight: 165,
              overflowY: 'scroll',
              overflowX: 'hidden',
            },
          };
        })(u.default);
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          C,
          'defaultFilterOptions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          A,
          'AutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          b,
          'MemoizedAutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          v,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          h,
          'EndAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          L,
          'StyledTextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          j,
          'ExpandButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          y,
          'Option',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        I.register(
          x,
          'StyledPaper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/components/AutoComplete/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/AutoComplete/AutoComplete.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/AutoComplete/styles.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          Wrapper: () => u,
          StyledTextField: () => g,
          InputField: () => p,
          SuggestionContainer: () => m,
        });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var n,
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/components/Paper.tsx'),
        s = o('./src/components/TextField/index.ts');
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        c,
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1rflf270', label: 'Wrapper' })({
          name: '1h0dbja',
          styles: 'width:100%;height:32px;position:relative;z-index:1;',
        }),
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e1rflf271', label: 'StyledTextField' })(function (e) {
          var t, o, a, n;
          return {
            '& .MuiInputBase-root': (0, r.default)(
              {
                ':before': { content: "''", border: 'none' },
                ':after': {
                  borderColor: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.white,
                },
                ':hover:before': { content: 'none' },
                ':hover:after': { content: 'none', transform: 'scaleX(1)' },
              },
              '@media screen and (min-width: '.concat(
                null === (o = e.theme) || void 0 === o ? void 0 : o.breakPoints.medium,
                'px)'
              ),
              { ':hover:after': { content: "''" } }
            ),
            '& .MuiInputBase-input': (0, r.default)(
              {},
              '@media screen and (min-width: '.concat(
                null === (a = e.theme) || void 0 === a ? void 0 : a.breakPoints.medium,
                'px)'
              ),
              { color: null === (n = e.theme) || void 0 === n ? void 0 : n.palette.white }
            ),
          };
        }, ''),
        p = function (e) {
          var t = (0, a.default)({}, e);
          return i.createElement(g, t);
        },
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'e1rflf272', label: 'SuggestionContainer' })({
          name: 'g31ddt',
          styles: 'max-height:500px;overflow-y:auto;',
        });
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          u,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        d.register(
          g,
          'StyledTextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        d.register(
          p,
          'InputField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        d.register(
          m,
          'SuggestionContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/AutoComplete/useAutoComplete.tsx': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { createFilterOptions: () => l }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var r, n;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function i(e) {
        return void 0 !== e.normalize ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : e;
      }
      function l(e) {
        var t = e || {},
          o = t.ignoreAccents,
          a = void 0 === o || o,
          r = t.ignoreCase,
          n = void 0 === r || r,
          l = t.trim,
          s = void 0 !== l && l,
          d = t.limit,
          c = t.matchFrom,
          u = void 0 === c ? 'any' : c;
        return function (e, t) {
          var o = t.inputValue,
            r = t.getOptionLabel,
            l = s ? o.trim() : o;
          n && (l = l.toLowerCase()), a && (l = i(l));
          var c = e.filter(function (e) {
            var t = r(e);
            return (
              n && (t = t.toLowerCase()),
              a && (t = i(t)),
              'start' === u ? 0 === t.indexOf(l) : t.indexOf(l) > -1
            );
          });
          return 'number' == typeof d ? c.slice(0, d) : c;
        };
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'stripDiacritics',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/useAutoComplete.tsx'
        ),
        r.register(
          l,
          'createFilterOptions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/useAutoComplete.tsx'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/components/Avatar.tsx': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { default: () => n }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Avatar'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r = Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Avatar'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      const n = r;
      var i, l;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        i.register(
          r,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Avatar.tsx'
        ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Box.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => l }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Box'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function n(e) {
        return r.createElement(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/Box'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          e
        );
      }
      var i = n;
      const l = i;
      var s, d;
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          n,
          'Box',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Box.tsx'
        ),
        s.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Box.tsx'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/components/Button.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Button'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Button'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Button',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Button.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Button.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Card.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Card'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Card'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Card',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Card.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Card.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/CardActions.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/CardActions'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/CardActions'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'CardActions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardActions.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardActions.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/CardContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/CardContent'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/CardContent'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'CardContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardContent.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardContent.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Chip.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Chip'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Chip'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Chip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Chip.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Chip.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/CircularProgress.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/CircularProgress'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/CircularProgress'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'CircularProgress',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CircularProgress.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CircularProgress.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/CopyToClipBoard.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/FileCopy'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/utils/cli-utils.ts'),
        l = o('./src/components/IconButton.tsx'),
        s = o('./src/components/Tooltip.tsx');
      e = o.hmd(e);
      var d,
        c = ['text', 'children'];
      function u(e) {
        var t = e.text,
          o = e.children,
          d = (0, a.default)(e, c),
          u = (0, n.useTranslation)().t;
        return r.createElement(
          A,
          d,
          r.createElement(I, null, null != o ? o : t),
          r.createElement(
            s.default,
            { disableFocusListener: !0, title: u('copy-to-clipboard') },
            r.createElement(
              l.default,
              { onClick: (0, i.copyToClipBoardUtility)(t), 'data-testid': 'copy-icon' },
              r.createElement(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@material-ui/icons/FileCopy'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })()
                ),
                null
              )
            )
          )
        );
      }
      (d =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        d(e),
        ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            })(u, 'useTranslation{{ t }}', function () {
          return [n.useTranslation];
        });
      var g = u;
      const p = g;
      var m,
        C,
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'ee5tpkh0', label: 'Wrapper' })({
          name: '1lekzkb',
          styles: 'display:flex;align-items:center;justify-content:space-between;',
        }),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'ee5tpkh1', label: 'Content' })({
          name: 'pvp01g',
          styles:
            'display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:21px;font-size:1rem;',
        });
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'CopyToClipBoard',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        m.register(
          A,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        m.register(
          I,
          'Content',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/Dialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Dialog'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Dialog'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Dialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Dialog.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Dialog.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/DialogActions.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/DialogActions'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/DialogActions'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'DialogActions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogActions.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogActions.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/DialogContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/DialogContent'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/DialogContent'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'DialogContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogContent.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogContent.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/DialogTitle.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/DialogTitle'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/DialogTitle'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'DialogTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogTitle.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogTitle.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Divider.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Divider'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Divider'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Divider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Divider.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Divider.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/FloatingActionButton.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Fab'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Fab'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t, 'data-testid': 'fab' })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'FloatingActionButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/FloatingActionButton.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/FloatingActionButton.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Grid.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Grid'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Grid'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Grid',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Grid.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Grid.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Heading.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Typography'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var i,
        l = ['variant'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = (0, n.forwardRef)(function (e, t) {
          var o = e.variant,
            i = void 0 === o ? 'h6' : o,
            s = (0, r.default)(e, l);
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Typography'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, s, { variant: i, ref: t })
          );
        }),
        d = s;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'Heading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Heading.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Heading.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/components/IconButton.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/IconButton'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/IconButton'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'IconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/IconButton.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/IconButton.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Icons/Earth.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Earth: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = n.forwardRef(function (e, t) {
          return n.createElement(
            i.SvgIcon,
            (0, r.default)({ viewBox: '0 0 45 45' }, e, { ref: t }),
            n.createElement(
              'defs',
              null,
              n.createElement(
                'clipPath',
                { id: 'prefix__a' },
                n.createElement('path', { d: 'M0 36h36V0H0v36z' })
              ),
              n.createElement(
                'clipPath',
                { id: 'prefix__b' },
                n.createElement('path', {
                  d: 'M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0s18 8.059 18 18-8.059 18-18 18z',
                })
              )
            ),
            n.createElement(
              'g',
              { clipPath: 'url(#prefix__a)', transform: 'matrix(1.25 0 0 -1.25 0 45)' },
              n.createElement('path', {
                d: 'M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18 18-8.059 18-18',
                fill: '#88c9f9',
              })
            ),
            n.createElement(
              'g',
              { clipPath: 'url(#prefix__b)', transform: 'matrix(1.25 0 0 -1.25 0 45)' },
              n.createElement('path', {
                d: 'M3.627 28.952c-.45 2.93 2.195 4.156 3.607 4.47 1.412.314 2.776.62 2.933-.006.156-.628.311-1.46 1.173-1.148.862.314 3.043.56 4.063 1.342 1.02.783 2.244.787 3.264.473 1.02-.313 3.877-.227 3.25-1.167-.627-.94-1.825-.827-2.45-1.924-.628-1.099.171-1.826 1.033-1.826.865 0 1.71-.135 2.26.727.548.863-.383 2.463.324 2.357.706-.106 1.477-.866 2.03-2.043.547-1.176 1.408-.47 1.723-1.176.313-.705 2.04-2.039 1.177-1.804-.864.236-1.726.392-1.96-.47-.237-.863.388-1.726-.237-1.647-.627.08-.86-.089-1.725-.004-.862.083-1.333.631-2.039-.545-.705-1.175-1.254-1.96-1.567-2.509-.315-.549-.785-.86-.55-1.96.235-1.099-.628-.785-.628.156 0 .94-.548 1.098-1.253.942-.706-.157-1.803-.313-1.724-1.098.077-.784-.315-1.725.313-2.352.627-.629 1.33.076 1.723-.158.393-.237 1.525-.023 1.133-.416-.393-.39-1.76-.88-.976-1.509a4.831 4.831 0 011.893-.907c.313-.08.062.774 1.083 1.166 1.017.392 2.608 1.29 3 .584.391-.705.338-.595 1.75-.75 1.41-.156 1.79-.585 2.417-1.917.626-1.333.446-1.192 1.462-1.58 1.021-.394 1.678-.223.737-1.087-.94-.86-1.65-.814-2.199-1.833-.55-1.017-.153-1.73-1.25-2.75A20.755 20.755 0 0024 4c-.618-.37-2.162-2.07-3.083-2.667-.834-.54-1.083 0-1.083 0s.256 1.667.964 2.372c.704.705 1.105 3.344.87 4.128-.235.783-1.36 1.02-1.75 1.333-.393.312-1.418 1.548-1.418 2.334 0 .784 1.71 2.81 1.71 2.81.218-1.089-1.039.328-1.627.523-.47.157-1.542 1.656-2.459 1.814-.916.16-1.363.7-2.068 1.25-.706.55-2.43 1.332-2.353 2.195.08.862-1.725 1.568-2.038 1.568-.314 0-1.019 0-1.647 1.098-.627 1.098-1.725 2.196-1.41 2.98.312.783.391 1.726.233 2.588-.156.862-1.332 1.176-1.567.941-.235-.236-1.489-1.335-1.647-.315',
                fill: '#5c913b',
              })
            )
          );
        });
      (d.displayName = 'Earth'),
        (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          l.register(
            d,
            'Earth',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Earth.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/FileBinary.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { FileBinary: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = n.forwardRef(function (e, t) {
          return n.createElement(
            i.SvgIcon,
            (0, r.default)({}, e, { ref: t }),
            n.createElement('path', {
              d: 'M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z',
            })
          );
        });
      (d.displayName = 'FileBinary'),
        (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          l.register(
            d,
            'FileBinary',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/FileBinary.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/Law.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Law: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = n.forwardRef(function (e, t) {
          return n.createElement(
            i.SvgIcon,
            (0, r.default)({}, e, { ref: t }),
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z',
            })
          );
        });
      (d.displayName = 'Law'),
        (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          l.register(
            d,
            'Law',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Law.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/Time.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Time: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = n.forwardRef(function (e, t) {
          return n.createElement(
            i.SvgIcon,
            (0, r.default)({ viewBox: '0 0 24 24' }, e, { ref: t }),
            n.createElement('path', {
              d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            }),
            n.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            n.createElement('path', { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
          );
        });
      (d.displayName = 'Time'),
        (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          l.register(
            d,
            'Time',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Time.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/Version.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Version: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = n.forwardRef(function (e, t) {
          return n.createElement(
            i.SvgIcon,
            (0, r.default)({ viewBox: '0 0 14 16', height: 16, width: 14 }, e, { ref: t }),
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z',
            })
          );
        });
      (d.displayName = 'Version'),
        (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          l.register(
            d,
            'Version',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Version.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/index.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          Version: () => a.Version,
          Time: () => r.Time,
          FileBinary: () => n.FileBinary,
          Law: () => i.Law,
          Earth: () => l.Earth,
        });
      var a = o('./src/components/Icons/Version.tsx'),
        r = o('./src/components/Icons/Time.tsx'),
        n = o('./src/components/Icons/FileBinary.tsx'),
        i = o('./src/components/Icons/Law.tsx'),
        l = o('./src/components/Icons/Earth.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/InputAdornment/InputAdornment.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/InputAdornment'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/InputAdornment'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'InputAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/InputAdornment/InputAdornment.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/InputAdornment/InputAdornment.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/InputAdornment/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/InputAdornment/InputAdornment.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Label/Label.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var i,
        l = ['text', 'capitalize', 'weight'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'esyufg60', label: 'Wrapper' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight[e.weight],
            textTransform: e.capitalize ? 'capitalize' : 'none',
          };
        }, ''),
        d = function (e) {
          var t = e.text,
            o = void 0 === t ? '' : t,
            i = e.capitalize,
            d = void 0 !== i && i,
            c = e.weight,
            u = void 0 === c ? 'regular' : c,
            g = (0, r.default)(e, l);
          return n.createElement(s, (0, a.default)({ capitalize: d, weight: u }, g), o);
        },
        c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          s,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        ),
        g.register(
          d,
          'Label',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/Label/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Label/Label.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Link.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => g });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        l = o('./src/components/Text/index.ts');
      e = o.hmd(e);
      var s,
        d = ['external', 'to', 'children', 'variant', 'className'];
      (s =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        s(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c = n.forwardRef(function (e, t) {
          var o = e.external,
            s = e.to,
            c = e.children,
            u = e.variant,
            g = e.className,
            p = (0, r.default)(e, d),
            m = n.createElement(l.default, { variant: u }, c);
          return o
            ? n.createElement(
                'a',
                (0, a.default)(
                  { className: g, href: s, ref: t, rel: 'noopener noreferrer', target: '_blank' },
                  p
                ),
                m
              )
            : n.createElement(i.Link, (0, a.default)({ className: g, innerRef: t, to: s }, p), m);
        }),
        u = c;
      const g = u;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          c,
          'Link',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Link.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Link.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/components/List.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/List'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/List'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'List',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/List.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/List.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/ListItem.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/ListItem'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var i,
        l = ['button'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = (0, n.forwardRef)(function (e, t) {
        var o = e.button,
          i = (0, r.default)(e, l);
        return n.createElement(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/ListItem'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          (0, a.default)({}, i, { button: o, innerRef: t })
        );
      });
      s.defaultProps = { button: !1 };
      var d = s;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'ListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItem.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItem.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/components/ListItemText.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/ListItemText'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/ListItemText'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItemText.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItemText.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Loading/Loading.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/Logo/index.ts'),
        i = o('./src/components/Loading/Spinner/index.tsx'),
        l = o('./src/components/Loading/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function () {
          return r.createElement(
            l.Wrapper,
            { 'data-testid': 'loading' },
            r.createElement(l.Badge, null, r.createElement(n.default, { size: 'big' })),
            r.createElement(i.default, { 'data-testid': 'spinnerLogo' })
          );
        },
        d = s;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'Loading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Loading.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Loading.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/components/Loading/Spinner/Spinner.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/CircularProgress.tsx');
      function l(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function (e) {
          var t = e.size,
            o = void 0 === t ? 50 : t,
            a = e.centered,
            r = void 0 !== a && a;
          return n.createElement(p, { centered: r }, n.createElement(m, { size: o }));
        },
        d = s;
      const c = d;
      var u,
        g,
        p = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1y5sxxq0', label: 'Wrapper' })(function (e) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(o), !0).forEach(function (t) {
                    (0, a.default)(e, t, o[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                : l(Object(o)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                  });
            }
            return e;
          })(
            { display: 'flex', alignItems: 'center', justifyContent: 'center' },
            e.centered && {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }
          );
        }, ''),
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e1y5sxxq1', label: 'Circular' })(function (e) {
          var t = e.theme;
          return {
            color:
              'dark' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.white
                : null == t
                ? void 0
                : t.palette.primary.main,
          };
        }, '');
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'Spinner',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        u.register(
          p,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        u.register(
          m,
          'Circular',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/components/Loading/Spinner/index.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Loading/Spinner/Spinner.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Loading/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Loading/Loading.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Loading/styles.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { Wrapper: () => i, Badge: () => l }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'eimgwje0', label: 'Wrapper' })({
          name: '1aq6k0v',
          styles: 'transform:translate(-50%, -50%);top:50%;left:50%;position:absolute;',
        }),
        l = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'eimgwje1', label: 'Badge' })(function (e) {
          var t = e.theme;
          return {
            margin: '0 0 30px 0',
            borderRadius: 25,
            boxShadow: '0 10px 20px 0 rgba(69, 58, 100, 0.2)',
            background:
              'dark' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.black
                : '#f7f8f6',
          };
        }, '');
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/styles.ts'
        ),
        r.register(
          l,
          'Badge',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/styles.ts'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/components/Logo/Logo.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => p }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/providers/config/index.ts'),
        i = o('./src/components/Logo/img/logo-black-and-white.svg'),
        l = o('./src/components/Logo/img/logo.svg');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = { 'x-small': '30px', small: '40px', big: '90px' },
        c = { light: l, dark: i },
        u = function (e) {
          var t = e.size,
            o = e.onClick,
            a = e.className,
            i = (0, n.useConfig)().configOptions;
          return null != i && i.logo
            ? r.createElement(
                A,
                { onClick: o, className: a },
                r.createElement('img', { alt: 'logo', height: '40px', src: i.logo })
              )
            : r.createElement(I, { size: t, onClick: o, className: a });
        };
      s(u, 'useConfig{{ configOptions }}', function () {
        return [n.useConfig];
      });
      var g = u;
      const p = g;
      var m,
        C,
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'em793ed0', label: 'ImageLogo' })({
          name: 'jodbou',
          styles: 'font-size:0;',
        }),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'em793ed1', label: 'StyledLogo' })(function (e) {
          var t = e.size,
            o = void 0 === t ? 'small' : t,
            a = e.theme;
          return {
            display: 'inline-block',
            verticalAlign: 'middle',
            boxSizing: 'border-box',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: 'url('.concat(c[null == a ? void 0 : a.palette.type], ')'),
            backgroundRepeat: ' no-repeat',
            width: d[o],
            height: d[o],
          };
        }, '');
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          d,
          'sizes',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        m.register(
          c,
          'logos',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        m.register(
          u,
          'Logo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        m.register(
          A,
          'ImageLogo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        m.register(
          I,
          'StyledLogo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/Logo/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Logo/Logo.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Menu.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Menu'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Menu'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Menu',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Menu.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Menu.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/MenuItem.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/MenuItem'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
        return n.createElement(u, (0, a.default)({}, e, { ref: t }));
      });
      i.defaultProps = { component: 'li' };
      var l = i;
      const s = l;
      var d,
        c,
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/MenuItem'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          { target: 'ed8xj0i0', label: 'StyledMaterialUIMenuItem' }
        )({ name: '10b12fz', styles: 'outline:none;' });
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'MenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        ),
        d.register(
          u,
          'StyledMaterialUIMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/NotFound/NotFound.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => m }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        l = o('./src/components/Box.tsx'),
        s = o('./src/components/Button.tsx'),
        d = o('./src/components/Heading.tsx'),
        c = o('./src/components/NotFound/img/package.svg');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function () {
          var e = (0, i.useHistory)(),
            t = (0, n.useTranslation)().t,
            o = (0, r.useCallback)(
              function () {
                e.push('/');
              },
              [e]
            );
          return r.createElement(
            l.default,
            {
              alignItems: 'center',
              'data-testid': '404',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'center',
              p: 2,
            },
            r.createElement(I, { alt: t('error.404.page-not-found'), src: c }),
            r.createElement(
              f,
              { className: 'not-found-text', variant: 'h4' },
              t('error.404.sorry-we-could-not-find-it')
            ),
            r.createElement(
              s.default,
              { 'data-testid': 'not-found-go-to-home-button', onClick: o, variant: 'contained' },
              t('button.go-to-the-home-page')
            )
          );
        };
      u(g, 'useHistory{history}\nuseTranslation{{ t }}\nuseCallback{handleGoHome}', function () {
        return [i.useHistory, n.useTranslation];
      });
      var p = g;
      const m = p;
      var C,
        A,
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('img', { target: 'e11qlk1z0', label: 'EmptyPackage' })({
          name: '17y48z2',
          styles: 'width:150px;margin:0 auto;',
        }),
        f = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d.default, { target: 'e11qlk1z1', label: 'StyledHeading' })(function (e) {
          var t = e.theme;
          return {
            color:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.primary.main
                : null == t
                ? void 0
                : t.palette.white,
            marginBottom: 16,
          };
        }, '');
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          g,
          'NotFound',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        C.register(
          I,
          'EmptyPackage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        C.register(
          f,
          'StyledHeading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        C.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/components/NotFound/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/NotFound/NotFound.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Paper.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Paper'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Paper'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Paper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Paper.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Paper.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/SnackbarContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/SnackbarContent'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/SnackbarContent'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'SnackbarContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SnackbarContent.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SnackbarContent.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/SvgIcon.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { SvgIcon: () => g });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/SvgIcon'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var l,
        s = ['size', 'title'];
      function d(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      (l =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        l(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c,
        u,
        g = i.forwardRef(function (e, t) {
          var o = e.size,
            a = void 0 === o ? 'md' : o,
            l = e.title,
            d = (0, n.default)(e, s);
          return i.createElement(m, (0, r.default)({ size: a, titleAccess: l }, d, { ref: t }));
        }),
        p = function (e) {
          return 'md' === e ? { width: 18, height: 18 } : { width: 14, height: 16 };
        },
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/SvgIcon'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          { target: 'et6id9r0', label: 'StyledMaterialUISvgIcon' }
        )(function (e) {
          var t = e.size;
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? d(Object(o), !0).forEach(function (t) {
                    (0, a.default)(e, t, o[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                : d(Object(o)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                  });
            }
            return e;
          })({}, p(t));
        }, '');
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          g,
          'SvgIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        ),
        c.register(
          p,
          'getSize',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        ),
        c.register(
          m,
          'StyledMaterialUISvgIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Tab.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Tab'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Tab'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Tab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tab.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tab.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Tabs.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Tabs'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Tabs'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { innerRef: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Tabs',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tabs.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tabs.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Text/Text.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Typography'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
        return n.createElement(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/Typography'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          (0, a.default)({}, e, { component: 'span', ref: t })
        );
      });
      i.defaultProps = { variant: 'subtitle1' };
      var l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Text',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Text/Text.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Text/Text.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Text/TextConfig.ts': (e, t, o) => {
      'use strict';
      o.r(t);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Text/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default, TextProps: () => r.TextProps });
      var a = o('./src/components/Text/Text.tsx'),
        r = o('./src/components/Text/TextConfig.ts');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/TextField/TextField.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/TextField'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var l,
        s = ['InputProps', 'classes'];
      function d(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(o), !0).forEach(function (t) {
                (0, r.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : d(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (l =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        l(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var u = (0, i.forwardRef)(function (e, t) {
          var o = e.InputProps,
            r = e.classes,
            l = (0, n.default)(e, s);
          return i.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/TextField'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, l, { innerRef: t, InputProps: c(c({}, o), {}, { classes: r }) })
          );
        }),
        g = u;
      const p = g;
      var m, C;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'TextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/TextField/TextField.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/TextField/TextField.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/TextField/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/TextField/TextField.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Toolbar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Toolbar'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.forwardRef)(function (e, t) {
          return n.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Toolbar'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            (0, a.default)({}, e, { ref: t })
          );
        }),
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Toolbar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Toolbar.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Toolbar.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Tooltip.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/Tooltip'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var i,
        l = ['title', 'children'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = (0, n.forwardRef)(function (e, t) {
          var o = e.title,
            i = e.children,
            s = (0, r.default)(e, l);
          return o
            ? n.createElement(
                Object(
                  (function () {
                    var e = new Error("Cannot find module '@material-ui/core/Tooltip'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })()
                ),
                (0, a.default)({}, s, { title: o, innerRef: t }),
                i
              )
            : i;
        }),
        d = s;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'Tooltip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tooltip.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tooltip.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/design-tokens/ResetStyles.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/styles'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/styles'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(function (e) {
          var t = e.theme;
          return {
            '@global': {
              'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
                { fontFamily: '"Roboto", Helvetica Neue, Arial, sans-serif' },
              strong: { fontWeight: null == t ? void 0 : t.fontWeight.semiBold },
              'html, body, #root': { height: '100%' },
              ul: { margin: 0, padding: 0, listStyle: 'none' },
              '.container': (0, a.default)(
                { padding: 15, flex: 1, height: '100%' },
                '@media screen and (min-width: '.concat(
                  null == t ? void 0 : t.breakPoints.container,
                  'px)'
                ),
                {
                  maxWidth: null == t ? void 0 : t.breakPoints.container,
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }
              ),
            },
          };
        }),
        l = function (e) {
          var t = e.children;
          return i(), n.createElement(n.Fragment, null, t);
        },
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'resetStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        ),
        c.register(
          l,
          'ResetStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/design-tokens/StyleBaseline.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => s }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/CssBaseline'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      o('../../../node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css');
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/design-tokens/ResetStyles.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function () {
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@material-ui/core/CssBaseline'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              ),
              null
            ),
            r.createElement(n.default, null)
          );
        },
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'StyleBaseline',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/StyleBaseline.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/StyleBaseline.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/design-tokens/ThemeContext.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => l });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n = (0, r.createContext)(void 0),
        i = n;
      const l = i;
      var s, d;
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          n,
          'ThemeContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeContext.ts'
        ),
        s.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeContext.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/design-tokens/ThemeProvider.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => b });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = o.n(n);
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/styles'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var l,
        s = o(
          '../../../node_modules/.pnpm/emotion-theming@10.0.27_33bb31e1d857102242df3642b32eda18/node_modules/emotion-theming/dist/emotion-theming.browser.esm.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        c = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = o('./src/providers/config/index.ts'),
        g = o('./src/design-tokens/ThemeContext.ts'),
        p = o('./src/design-tokens/load-dayjs-locale.ts'),
        m = o('./src/design-tokens/theme.ts'),
        C = o('./src/design-tokens/useLocalStorage.ts');
      (e = o.hmd(e)),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          l(e);
      var A =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        I = function (e) {
          var t,
            o,
            n,
            l,
            A,
            I = e.children,
            f =
              null === (t = (o = window).matchMedia) || void 0 === t
                ? void 0
                : t.call(o, '(prefers-color-scheme:dark)').matches,
            b =
              (null === (n = window) ||
              void 0 === n ||
              null === (l = n.__VERDACCIO_BASENAME_UI_OPTIONS) ||
              void 0 === l
                ? void 0
                : l.darkMode) || f,
            v = null === (A = d.default.languages) || void 0 === A ? void 0 : A[0],
            h = (0, u.useConfig)().configOptions,
            L = (0, C.default)('darkMode', !!b),
            j = (0, r.default)(L, 2),
            y = j[0],
            x = j[1],
            O = (0, C.default)('language', v),
            D = (0, r.default)(O, 2),
            H = D[0],
            G = D[1],
            E = y ? 'dark' : 'light',
            w = (0, c.useCallback)(
              (0, a.default)(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), d.default.changeLanguage(H);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [H]
            ),
            M = (0, m.getTheme)(E, null == h ? void 0 : h.primaryColor);
          return (
            (0, c.useEffect)(
              function () {
                w(), (0, p.default)();
              },
              [H, w]
            ),
            c.createElement(
              g.default.Provider,
              { value: { isDarkMode: y, setIsDarkMode: x, language: H, setLanguage: G } },
              c.createElement(
                s.ThemeProvider,
                { theme: M },
                c.createElement(
                  Object(
                    (function () {
                      var e = new Error("Cannot find module '@material-ui/core/styles'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    })()
                  ),
                  { theme: M },
                  I
                )
              )
            )
          );
        };
      A(
        I,
        'useConfig{{ configOptions }}\nuseLocalStorage{[isDarkMode, setIsDarkMode]}\nuseLocalStorage{[language, setLanguage]}\nuseCallback{changeLanguage}\nuseEffect{}',
        function () {
          return [u.useConfig, C.default, C.default];
        }
      );
      var f = I;
      const b = f;
      var v, h;
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          I,
          'ThemeProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeProvider.tsx'
        ),
        v.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeProvider.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/design-tokens/load-dayjs-locale.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/dayjs.min.js'),
        n = o.n(r),
        i = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function l() {
        var e = i.default.options.fallbackLng;
        return Array.isArray(e) ? e[0] : 'string' == typeof e ? e : void 0;
      }
      function s() {
        var e = l(),
          t = i.default.language || e;
        switch (null == t ? void 0 : t.toLowerCase()) {
          case 'pt-br':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/pt-br.js'),
              n().locale('pt-br');
            break;
          case 'de-de':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/de.js'),
              n().locale('de');
            break;
          case 'es-es':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/es.js'),
              n().locale('es');
            break;
          case 'fr-fr':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/fr.js'),
              n().locale('fr');
            break;
          case 'zh-cn':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/zh-cn.js'),
              n().locale('zh-cn');
            break;
          case 'ja-jp':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/ja.js'),
              n().locale('ja');
            break;
          case 'ru-ru':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/ru.js'),
              n().locale('ru');
            break;
          case 'tr-tr':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/tr.js'),
              n().locale('tr');
            break;
          case 'uk-ua':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/uk.js'),
              n().locale('uk');
            break;
          case 'zh-tw':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/zh-tw.js'),
              n().locale('zh-tw');
            break;
          case 'cs-cz':
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/cs.js'),
              n().locale('cs');
            break;
          default:
            o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/locale/en.js'),
              n().locale('en');
        }
      }
      var d = s;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          l,
          'getFallFackLanguage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        ),
        u.register(
          s,
          'loadDayJSLocale',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/design-tokens/theme.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { breakPoints: () => C, getTheme: () => I });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@material-ui/core/styles/createMuiTheme'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('./src/utils/colors.ts');
      function i(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(o), !0).forEach(function (t) {
                (0, a.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : i(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = {
          black: '#000',
          white: '#fff',
          red: '#d32f2f',
          orange: '#CD4000',
          greySuperLight: '#f5f5f5',
          greyLight: '#d3d3d3',
          greyLight2: '#908ba1',
          greyLight3: '#f3f4f240',
          greyDark: '#a9a9a9',
          greyDark2: '#586069',
          greyChateau: '#95989a',
          greyGainsboro: '#e3e3e3',
          greyAthens: '#d3dddd',
          eclipse: '#3c3c3c',
          paleNavy: '#e4e8f1',
          saltpan: '#f7f8f6',
          snow: '#f9f9f9',
          love: '#e25555',
          nobel01: '#999999',
          nobel02: '#9f9f9f',
          primary: n.PRIMARY_COLOR,
          secondary: '#20232a',
          background: '#fff',
          dodgerBlue: '#1ba1f2',
          cyanBlue: '#253341',
        },
        d = {
          light: l({}, s),
          dark: l(
            l({}, s),
            {},
            { primary: '#24394e', secondary: '#424242', background: '#1A202C' }
          ),
        };
      function c(e, t) {
        return 'light' === e && (d.light.primary = t), d[e];
      }
      var u,
        g,
        p = { xxl: 26, xl: 24, lg: 21, md: 18, default: 16, sm: 14 },
        m = { light: 300, regular: 400, semiBold: 500, bold: 700 },
        C = { small: 576, medium: 768, large: 1024, container: 1240, xlarge: 1275 },
        A = { fontSize: p, fontWeight: m, breakPoints: C },
        I = function (e, t) {
          var o = c(e, t);
          return Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/styles/createMuiTheme'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          )(
            l(
              {
                typography: {
                  fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                  ].join(','),
                },
                palette: l(
                  l({ type: e }, o),
                  {},
                  {
                    primary: { main: o.primary },
                    secondary: { main: o.secondary },
                    error: { main: o.red },
                    background: { default: o.background },
                  }
                ),
              },
              A
            )
          );
        };
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'colors',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          d,
          'themeModes',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          c,
          'applyPrimaryColor',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          p,
          'fontSize',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          m,
          'fontWeight',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          C,
          'breakPoints',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          A,
          'customizedTheme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        u.register(
          I,
          'getTheme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/design-tokens/useLocalStorage.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var i =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        l = function (e, t) {
          var o = (0, n.useState)(function () {
              try {
                var o = window.localStorage.getItem(e);
                return o ? JSON.parse(o) : t;
              } catch (e) {
                return console.error('An error occurred getting a sessionStorage key', e), t;
              }
            }),
            a = (0, r.default)(o, 2),
            i = a[0],
            l = a[1];
          return [
            i,
            function (t) {
              try {
                var o = t instanceof Function ? t(i) : t;
                l(o), window.localStorage.setItem(e, JSON.stringify(o));
              } catch (e) {
                console.error('An error occurred writing to sessionStorage', e);
              }
            },
          ];
        };
      i(
        l,
        "useState{[storedValue, setStoredValue](() => {\n    try {\n      // Get from local storage by key\n      const item = window.localStorage.getItem(key);\n      // Parse stored json or if none return initialValue\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error: any) {\n      // If error also return initialValue\n      // eslint-disable-next-line no-console\n      console.error('An error occurred getting a sessionStorage key', error);\n      return initialValue;\n    }\n  })}"
      );
      var s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          l,
          'useLocalStorage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/useLocalStorage.ts'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/useLocalStorage.ts'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/design-tokens/useOnClickOutside.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { useOnClickOutside: () => l });
      var a,
        r,
        n,
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      function l(e, t) {
        (0, i.useEffect)(
          function () {
            var o = function (o) {
              e.current && !e.current.contains(o.target) && t(o);
            };
            return (
              document.addEventListener('mousedown', o),
              document.addEventListener('touchstart', o),
              function () {
                document.removeEventListener('mousedown', o),
                  document.removeEventListener('touchstart', o);
              }
            );
          },
          [e, t]
        );
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e),
        ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            })(l, 'useEffect{}'),
        (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          r.register(
            l,
            'useOnClickOutside',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/useOnClickOutside.ts'
          ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/i18n/config.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a,
        r,
        n,
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/context.js'
        ),
        d = o('./src/i18n/enabledLanguages.ts');
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function c(e) {
        try {
          return o('./src/i18n/download_translations sync recursive ^\\.\\/.*\\/ui\\.json$')(
            './'.concat(e, '/ui.json')
          );
        } catch (t) {
          return (
            console.warn('language '.concat(e, ' file not found, fallback to en-US')),
            o('./src/i18n/crowdin/ui.json')
          );
        }
      }
      var u = d.listLanguages.reduce(function (e, t) {
        return (
          (e[t.lng] = {
            translation: t.lng === d.DEFAULT_LANGUAGE ? o('./src/i18n/crowdin/ui.json') : c(t.lng),
          }),
          e
        );
      }, {});
      l.default
        .use(s.initReactI18next)
        .init({
          lng:
            (null === (a = window) ||
            void 0 === a ||
            null === (r = a.__VERDACCIO_BASENAME_UI_OPTIONS) ||
            void 0 === r
              ? void 0
              : r.language) || d.DEFAULT_LANGUAGE,
          fallbackLng: d.DEFAULT_LANGUAGE,
          whitelist: (0, i.default)(d.listLanguagesAsString),
          load: 'currentOnly',
          resources: u,
          debug: !1,
          interpolation: { escapeValue: !1 },
        });
      var g = l.default;
      const p = g;
      var m, C;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          c,
          'loadTranslationFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/config.ts'
        ),
        m.register(
          u,
          'languages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/config.ts'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/config.ts'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/i18n/enabledLanguages.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          DEFAULT_LANGUAGE: () => l,
          listLanguages: () => s,
          listLanguagesAsString: () => c,
        });
      var a,
        r = o(
          '../../../node_modules/.pnpm/country-flag-icons@1.4.11/node_modules/country-flag-icons/react/3x2/index.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        i,
        l = 'en-US',
        s = [
          { lng: l, icon: r.default.US, menuKey: 'lng.english' },
          { lng: 'cs-CZ', icon: r.default.CZ, menuKey: 'lng.czech' },
          { lng: 'pt-BR', icon: r.default.BR, menuKey: 'lng.portuguese' },
          { lng: 'es-ES', icon: r.default.ES, menuKey: 'lng.spanish' },
          { lng: 'de-DE', icon: r.default.DE, menuKey: 'lng.german' },
          { lng: 'fr-FR', icon: r.default.FR, menuKey: 'lng.french' },
          { lng: 'zh-CN', icon: r.default.CN, menuKey: 'lng.chinese' },
          { lng: 'ja-JP', icon: r.default.JP, menuKey: 'lng.japanese' },
          { lng: 'ru-RU', icon: r.default.RU, menuKey: 'lng.russian' },
          { lng: 'tr-TR', icon: r.default.TR, menuKey: 'lng.turkish' },
          { lng: 'uk-UA', icon: r.default.UA, menuKey: 'lng.ukraine' },
          { lng: 'km-KH', icon: r.default.KH, menuKey: 'lng.khme' },
          { lng: 'zh-TW', icon: r.default.TW, menuKey: 'lng.chineseTraditional' },
        ],
        d = s.reduce(function (e, t) {
          return e.push(t.lng), e;
        }, []),
        c = d;
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          l,
          'DEFAULT_LANGUAGE',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        n.register(
          s,
          'listLanguages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        n.register(
          d,
          'languages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        n.register(
          c,
          'listLanguagesAsString',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/index.tsx': (e, t, o) => {
      'use strict';
      o.r(t);
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-hot-loader@4.13.0_c8c53a2a5a2c84791ce34d6dbdd05753/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        s = o('./src/providers/config/index.ts'),
        d = o('./src/App/index.ts'),
        c = o('./src/design-tokens/StyleBaseline.tsx'),
        u = o('./src/design-tokens/ThemeProvider.tsx'),
        g = o('./src/store/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        C = document.getElementById('root'),
        A = function (e) {
          n.render(
            r.createElement(
              l.Provider,
              { store: g.store },
              r.createElement(
                i.AppContainer,
                null,
                r.createElement(
                  s.default,
                  null,
                  r.createElement(
                    u.default,
                    null,
                    r.createElement(c.default, null),
                    r.createElement(e, null)
                  )
                )
              )
            ),
            C
          );
        };
      A(d.default),
        (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (p.register(
            C,
            'rootNode',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/index.tsx'
          ),
          p.register(
            A,
            'renderApp',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/index.tsx'
          )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/lib/constants.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { DIST_TAGS: () => i, HEADERS: () => l, API_ERROR: () => s }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = 'dist-tags',
        l = { JSON: 'application/json' },
        s = { BAD_USERNAME_PASSWORD: 'bad username/password, access denied' };
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'DIST_TAGS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/lib/constants.ts'
        ),
        r.register(
          l,
          'HEADERS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/lib/constants.ts'
        ),
        r.register(
          s,
          'API_ERROR',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/lib/constants.ts'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => I });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        s = o('./src/components/CardContent.tsx'),
        d = o('./src/pages/Version/context.ts'),
        c = o('./src/pages/Version/DetailContainer/NoItems/index.ts'),
        u = o('./src/pages/Version/DetailContainer/Dependencies/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function (e) {
          var t = e.title,
            o = e.dependencies,
            a = (0, n.useContext)(d.DetailContext).enableLoading,
            c = (0, l.useHistory)(),
            g = (0, i.useTranslation)().t,
            p = Object.entries(o);
          return n.createElement(
            u.CardWrap,
            null,
            n.createElement(
              s.default,
              null,
              n.createElement(
                u.StyledText,
                { variant: 'subtitle1' },
                ''.concat(t, ' (').concat(p.length, ')')
              ),
              n.createElement(
                u.Tags,
                null,
                p.map(function (e) {
                  var t = (0, r.default)(e, 2),
                    o = t[0],
                    i = t[1];
                  return n.createElement(u.Tag, {
                    className: 'dep-tag',
                    clickable: !0,
                    key: o,
                    label: g('dependencies.dependency-block', { package: o, version: i }),
                    onClick: function () {
                      return (function (e) {
                        null == a || a(), c.push('/-/web/detail/'.concat(e));
                      })(o);
                    },
                  });
                })
              )
            )
          );
        };
      function m(e) {
        return !!e && Object.keys(e).length > 0;
      }
      g(
        p,
        'useContext{{ enableLoading }}\nuseHistory{history}\nuseTranslation{{ t }}',
        function () {
          return [l.useHistory, i.useTranslation];
        }
      );
      var C = function () {
        var e = (0, n.useContext)(d.DetailContext).packageMeta,
          t = (0, i.useTranslation)().t;
        if (!e) throw new Error(t('error.package-meta-is-required-at-detail-context'));
        var o = e.latest,
          a = o.dependencies,
          l = o.devDependencies,
          s = o.peerDependencies,
          u = o.name,
          g = { dependencies: a, devDependencies: l, peerDependencies: s };
        return m(a) || m(l) || m(s)
          ? n.createElement(
              n.Fragment,
              null,
              Object.entries(g).map(function (e) {
                var t = (0, r.default)(e, 2),
                  o = t[0],
                  a = t[1];
                return a && 0 !== Object.keys(a).length
                  ? n.createElement(p, { dependencies: a, key: o, title: o })
                  : null;
              })
            )
          : n.createElement(c.default, {
              className: 'no-dependencies',
              text: t('dependencies.has-no-dependencies', { package: u }),
            });
      };
      g(C, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [i.useTranslation];
      });
      var A = C;
      const I = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          p,
          'DependencyBlock',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx'
        ),
        f.register(
          m,
          'hasKeys',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx'
        ),
        f.register(
          C,
          'Dependencies',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/pages/Version/DetailContainer/Dependencies/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/Dependencies/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { CardWrap: () => d, StyledText: () => c, Tags: () => u, Tag: () => g }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/Card.tsx'),
        n = o('./src/components/Chip.tsx'),
        i = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'e12vbvs0', label: 'CardWrap' })({
          name: 'mzpff5',
          styles: 'margin:0 0 16px;',
        }),
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e12vbvs1', label: 'StyledText' })(function (e) {
          return { fontWeight: e.theme && e.theme.fontWeight.bold, textTransform: 'capitalize' };
        }, ''),
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e12vbvs2', label: 'Tags' })({
          name: '1hbvsum',
          styles: 'display:flex;justify-content:start;flex-wrap:wrap;margin:0 -5px;',
        }),
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e12vbvs3', label: 'Tag' })({
          name: '1522hk',
          styles: 'margin:5px;',
        });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          d,
          'CardWrap',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        ),
        l.register(
          c,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        ),
        l.register(
          u,
          'Tags',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        ),
        l.register(
          g,
          'Tag',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { CardStyled: () => n, default: () => s }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Card'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/CardContent'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/core/Card'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          { target: 'e1ae6n00', label: 'CardStyled' }
        )(function (e) {
          var t,
            o,
            a = e.theme;
          return {
            marginTop: null == a ? void 0 : a.spacing(1),
            marginBottom: null == a ? void 0 : a.spacing(0.5),
            backgroundColor:
              null == a || null === (t = a.palette) || void 0 === t ? void 0 : t.error.light,
            opacity: '0.9',
            color:
              null == a || null === (o = a.palette) || void 0 === o ? void 0 : o.error.contrastText,
            fontWeight: 'bold',
          };
        }, ''),
        i = function (e) {
          var t = e.message;
          return r.createElement(
            n,
            null,
            r.createElement(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@material-ui/core/CardContent'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              ),
              null,
              t
            )
          );
        },
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          n,
          'CardStyled',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx'
        ),
        d.register(
          i,
          'Deprecated',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/Version/DetailContainer/Deprecated/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/DetailContainer.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { TabPosition: () => u, default: () => C });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/Box.tsx'),
        l = o('./src/pages/Version/context.ts'),
        s = o('./src/pages/Version/DetailContainer/Deprecated/index.ts'),
        d = o('./src/pages/Version/DetailContainer/DetailContainerContent.tsx'),
        c = o('./src/pages/Version/DetailContainer/DetailContainerTabs.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u,
        g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              };
      !(function (e) {
        (e.README = 'readme'),
          (e.DEPENDENCIES = 'dependencies'),
          (e.VERSIONS = 'versions'),
          (e.UPLINKS = 'uplinks');
      })(u || (u = {}));
      var p = function () {
        var e,
          t,
          o = Object.values(u),
          a = (0, n.useState)(0),
          g = (0, r.default)(a, 2),
          p = g[0],
          m = g[1],
          C = (0, n.useContext)(l.DetailContext),
          A = C.readMe,
          I = C.packageMeta;
        return n.createElement(
          i.default,
          { component: 'div', display: 'flex', flexDirection: 'column', padding: 2 },
          n.createElement(c.default, {
            onChange: function (e, t) {
              m(t);
            },
            tabPosition: p,
          }),
          (null == I || null === (e = I.latest) || void 0 === e ? void 0 : e.deprecated) &&
            n.createElement(s.default, {
              message: null == I || null === (t = I.latest) || void 0 === t ? void 0 : t.deprecated,
            }),
          n.createElement(d.default, { readDescription: A, tabPosition: o[p] })
        );
      };
      g(p, 'useState{[tabPosition, setTabPosition](0)}\nuseContext{detailContext}');
      var m = p;
      const C = m;
      var A, I;
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          p,
          'DetailContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainer.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainer.tsx'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/Version/DetailContainer/DetailContainerContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { TabPosition: () => c, default: () => A });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/typeof.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/App/utils/loadable.tsx'),
        l = o('./src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx');
      function s(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          o = new WeakMap();
        return (s = function (e) {
          return e ? o : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== (0, r.default)(e) && 'function' != typeof e))
          return { default: e };
        var o = s(t);
        if (o && o.has(e)) return o.get(e);
        var a = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var l = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            l && (l.get || l.set) ? Object.defineProperty(a, i, l) : (a[i] = e[i]);
          }
        return (a.default = e), o && o.set(e, a), a;
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      !(function (e) {
        (e.README = 'readme'),
          (e.DEPENDENCIES = 'dependencies'),
          (e.VERSIONS = 'versions'),
          (e.UPLINKS = 'uplinks');
      })(c || (c = {}));
      var u = (0, i.default)(function () {
          return Promise.resolve().then(function () {
            return d(o('./src/pages/Version/DetailContainer/Versions/index.ts'));
          });
        }),
        g = (0, i.default)(function () {
          return Promise.resolve().then(function () {
            return d(o('./src/pages/Version/DetailContainer/UpLinks/index.ts'));
          });
        }),
        p = (0, i.default)(function () {
          return Promise.resolve().then(function () {
            return d(o('./src/pages/Version/DetailContainer/Dependencies/index.ts'));
          });
        }),
        m = function (e) {
          var t = e.tabPosition,
            o = e.readDescription;
          switch (t) {
            case c.README:
              return n.createElement(l.default, { description: o });
            case c.UPLINKS:
              return n.createElement(g, null);
            case c.VERSIONS:
              return n.createElement(u, null);
            case c.DEPENDENCIES:
              return n.createElement(p, null);
            default:
              return null;
          }
        },
        C = m;
      const A = C;
      var I, f;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          u,
          'Versions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        I.register(
          g,
          'UpLinks',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        I.register(
          p,
          'Dependencies',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        I.register(
          m,
          'DetailContainerContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        I.register(
          C,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/utils/sec-utils.ts'),
        i = o('./src/pages/Version/DetailContainer/Readme/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function (e) {
          var t = e.description;
          if (!t) return null;
          var o = (0, n.preventXSS)(t);
          return r.createElement(i.default, { description: o });
        },
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          l,
          'DetailContainerContentReadme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/pages/Version/DetailContainer/DetailContainerTabs.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => u }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Tab.tsx'),
        l = o('./src/components/Tabs.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function (e) {
          var t = e.tabPosition,
            o = e.onChange,
            a = (0, n.useTranslation)().t;
          return r.createElement(
            m,
            {
              color: 'primary',
              indicatorColor: 'primary',
              onChange: o,
              value: t,
              variant: 'fullWidth',
            },
            r.createElement(i.default, {
              'data-testid': 'readme-tab',
              id: 'readme-tab',
              label: a('tab.readme'),
            }),
            r.createElement(i.default, {
              'data-testid': 'dependencies-tab',
              id: 'dependencies-tab',
              label: a('tab.dependencies'),
            }),
            r.createElement(i.default, {
              'data-testid': 'versions-tab',
              id: 'versions-tab',
              label: a('tab.versions'),
            }),
            r.createElement(i.default, {
              'data-testid': 'uplinks-tab',
              id: 'uplinks-tab',
              label: a('tab.uplinks'),
            })
          );
        };
      s(d, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var c = d;
      const u = c;
      var g,
        p,
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'e4hvfps0', label: 'Tabs' })({
          name: '1qm1lh',
          styles: 'margin-bottom:16px;',
        });
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'DetailContainerTabs',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerTabs.tsx'
        ),
        g.register(
          m,
          'Tabs',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerTabs.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerTabs.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/pages/Version/DetailContainer/NoItems/NoItems.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function (e) {
          var t = e.className,
            o = e.text;
          return r.createElement(
            n.default,
            { className: t, gutterBottom: !0, variant: 'subtitle1' },
            o
          );
        },
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'NoItems',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/NoItems/NoItems.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/NoItems/NoItems.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/Version/DetailContainer/NoItems/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/NoItems/NoItems.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/Readme/Readme.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => l }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      o(
        '../../../node_modules/.pnpm/github-markdown-css@4.0.0/node_modules/github-markdown-css/github-markdown.css'
      );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n = function (e) {
          var t = e.description;
          return r.createElement(c, {
            className: 'markdown-body',
            dangerouslySetInnerHTML: { __html: t },
          });
        },
        i = n;
      const l = i;
      var s,
        d,
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'esdleg90', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return {
            background: null == t ? void 0 : t.palette.white,
            color: null == t ? void 0 : t.palette.black,
            padding: null == t ? void 0 : t.spacing(2, 3),
            ul: { listStyle: 'disc' },
          };
        }, '');
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          n,
          'Readme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Readme/Readme.tsx'
        ),
        s.register(
          c,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Readme/Readme.tsx'
        ),
        s.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Readme/Readme.tsx'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/pages/Version/DetailContainer/Readme/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/Readme/Readme.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => C });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/List.tsx'),
        l = o('./src/components/ListItem.tsx'),
        s = o('./src/utils/package.ts'),
        d = o('./src/pages/Version/index.ts'),
        c = o('./src/pages/Version/DetailContainer/NoItems/index.ts'),
        u = o('./src/pages/Version/DetailContainer/UpLinks/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function () {
          var e = (0, r.useContext)(d.DetailContext).packageMeta,
            t = (0, n.useTranslation)().t;
          if (!e || !e._uplinks || !e.latest) return null;
          var o = e._uplinks,
            a = e.latest;
          return 0 === Object.keys(o).length
            ? r.createElement(c.default, { text: t('uplinks.no-items', { name: a.name }) })
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(u.StyledText, { variant: 'subtitle1' }, t('uplinks.title')),
                r.createElement(
                  i.default,
                  null,
                  Object.keys(o)
                    .reverse()
                    .map(function (e) {
                      return r.createElement(
                        l.default,
                        { key: e },
                        r.createElement(u.ListItemText, null, e),
                        r.createElement(u.Spacer, null),
                        r.createElement(
                          u.ListItemText,
                          null,
                          (0, s.formatDateDistance)(o[e].fetched)
                        )
                      );
                    })
                )
              );
        };
      g(p, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var m = p;
      const C = m;
      var A, I;
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          p,
          'UpLinks',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/Version/DetailContainer/UpLinks/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { StyledText: () => s, Spacer: () => d, ListItemText: () => c }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/ListItemText.tsx'),
        n = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1lovynm0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'e1lovynm1', label: 'Spacer' })(function (e) {
          var t = e.theme;
          return {
            flex: '1 1 auto',
            borderBottom: '1px dotted '.concat(
              'light' == (null == t ? void 0 : t.palette.type)
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(255, 255, 255, 0.2)',
              ' '
            ),
            whiteSpace: 'nowrap',
            height: '0.5em',
          };
        }, ''),
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'e1lovynm2', label: 'ListItemText' })(function (e) {
          var t = e.theme;
          return {
            flex: 'none',
            color:
              'light' == (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.black
                : null == t
                ? void 0
                : t.palette.white,
            opacity: 0.6,
          };
        }, '');
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          s,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        i.register(
          d,
          'Spacer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        i.register(
          c,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/Version/DetailContainer/Versions/Versions.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => m });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./lib/constants.ts'),
        l = o('./src/pages/Version/context.ts'),
        s = o('./src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx'),
        d = o('./src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx'),
        c = o('./src/pages/Version/DetailContainer/Versions/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function () {
          var e = (0, r.useContext)(l.DetailContext),
            t = (0, n.useTranslation)().t,
            o = e.packageMeta,
            a = e.packageName;
          if (!o) return null;
          var u = o.versions,
            g = void 0 === u ? {} : u,
            p = o.time,
            m = void 0 === p ? {} : p,
            C = o[i.DIST_TAGS],
            A = void 0 === C ? {} : C;
          return r.createElement(
            r.Fragment,
            null,
            A &&
              Object.keys(A).length > 0 &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(c.StyledText, { variant: 'subtitle1' }, t('versions.current-tags')),
                r.createElement(d.default, { tags: A })
              ),
            g &&
              Object.keys(g).length > 0 &&
              a &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  c.StyledText,
                  { variant: 'subtitle1' },
                  t('versions.version-history')
                ),
                r.createElement(s.default, { packageName: a, time: m, versions: g })
              )
          );
        };
      u(g, 'useContext{detailContext}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var p = g;
      const m = p;
      var C, A;
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          g,
          'Versions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/Versions.tsx'
        ),
        C.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/Versions.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/List.tsx'),
        l = o('./src/components/ListItem.tsx'),
        s = o('./src/utils/package.ts'),
        d = o('./src/pages/Version/DetailContainer/Versions/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var t = e.versions,
            o = e.packageName,
            a = e.time,
            c = (0, n.useTranslation)().t;
          return r.createElement(
            i.default,
            { dense: !0 },
            Object.keys(t)
              .reverse()
              .map(function (e) {
                return r.createElement(
                  l.default,
                  { className: 'version-item', key: e },
                  r.createElement(
                    d.StyledLink,
                    { to: '/-/web/detail/'.concat(o, '/v/').concat(e) },
                    r.createElement(d.ListItemText, null, e)
                  ),
                  r.createElement(d.Spacer, null),
                  r.createElement(
                    d.ListItemText,
                    null,
                    a[e] ? (0, s.formatDateDistance)(a[e]) : c('versions.not-available')
                  )
                );
              })
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var g = u;
      const p = g;
      var m, C;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'VersionsHistoryList',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/List.tsx'),
        i = o('./src/components/ListItem.tsx'),
        l = o('./src/pages/Version/DetailContainer/Versions/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function (e) {
          var t = e.tags;
          return r.createElement(
            n.default,
            { dense: !0 },
            Object.keys(t)
              .reverse()
              .map(function (e) {
                return r.createElement(
                  i.default,
                  { className: 'version-item', key: e },
                  r.createElement(l.ListItemText, null, e),
                  r.createElement(l.Spacer, null),
                  r.createElement(l.ListItemText, null, t[e])
                );
              })
          );
        },
        d = s;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'VersionsTagList',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/pages/Version/DetailContainer/Versions/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/Versions/Versions.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/Versions/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          StyledText: () => d,
          Spacer: () => c,
          ListItemText: () => u,
          StyledLink: () => g,
        }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/Link.tsx'),
        n = o('./src/components/ListItemText.tsx'),
        i = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'ei59c890', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'ei59c891', label: 'Spacer' })(function (e) {
          var t = e.theme;
          return {
            flex: '1 1 auto',
            borderBottom: '1px dotted '.concat(
              'light' == (null == t ? void 0 : t.palette.type)
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(255, 255, 255, 0.2)',
              ' '
            ),
            whiteSpace: 'nowrap',
            height: '0.5em',
            margin: '0 16px',
          };
        }, ''),
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'ei59c892', label: 'ListItemText' })(function (e) {
          var t = e.theme;
          return {
            flex: 'none',
            opacity: 0.6,
            color:
              'light' == (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.black
                : null == t
                ? void 0
                : t.palette.white,
          };
        }, ''),
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'ei59c893', label: 'StyledLink' })({
          name: 'ytumd6',
          styles: 'text-decoration:none;',
        });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          d,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        ),
        l.register(
          c,
          'Spacer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        ),
        l.register(
          u,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        ),
        l.register(
          g,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/pages/Version/DetailContainer/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailContainer/DetailContainer.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/DetailSidebar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => y });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/typeof.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o('./src/components/ActionBar/index.ts'),
        l = o('./src/components/Author/index.ts'),
        s = o('./src/components/Paper.tsx'),
        d = o('./src/pages/Version/index.ts'),
        c = o('./src/App/utils/loadable.tsx'),
        u = o('./src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'),
        g = o('./src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'),
        p = o('./src/pages/Version/DetailSidebar/Developers/index.ts'),
        m = o('./src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx');
      function C(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          o = new WeakMap();
        return (C = function (e) {
          return e ? o : t;
        })(e);
      }
      function A(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== (0, a.default)(e) && 'function' != typeof e))
          return { default: e };
        var o = C(t);
        if (o && o.has(e)) return o.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var l = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
          }
        return (r.default = e), o && o.set(e, r), r;
      }
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      var I =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return A(o('./src/pages/Version/DetailSidebar/Engines/index.ts'));
          });
        }),
        b = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return A(o('./src/pages/Version/DetailSidebar/Dist/index.ts'));
          });
        }),
        v = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return A(o('./src/pages/Version/DetailSidebar/Install/index.ts'));
          });
        }),
        h = (0, c.default)(function () {
          return Promise.resolve().then(function () {
            return A(o('./src/pages/Version/DetailSidebar/Repository/index.ts'));
          });
        }),
        L = function () {
          var e,
            t = (0, n.useContext)(d.DetailContext),
            o = t.packageMeta,
            a = t.packageName,
            r = t.packageVersion;
          return o && a
            ? n.createElement(
                D,
                { className: 'sidebar-info' },
                n.createElement(g.default, {
                  description: null === (e = o.latest) || void 0 === e ? void 0 : e.description,
                  isLatest: void 0 === r,
                  packageName: a,
                  version: r || o.latest.version,
                }),
                n.createElement(i.default, null),
                n.createElement(v, null),
                n.createElement(u.default, null),
                n.createElement(h, null),
                n.createElement(f, null),
                n.createElement(b, null),
                n.createElement(l.default, null),
                n.createElement(p.default, { type: m.DeveloperType.MAINTAINERS }),
                n.createElement(p.default, { type: m.DeveloperType.CONTRIBUTORS })
              )
            : null;
        };
      I(L, 'useContext{detailContext}');
      var j = L;
      const y = j;
      var x,
        O,
        D = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e13qr4yu0', label: 'StyledPaper' })(function (e) {
          var t = e.theme;
          return { padding: null == t ? void 0 : t.spacing(3, 2) };
        }, '');
      (x = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (x.register(
          f,
          'Engines',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        x.register(
          b,
          'Dist',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        x.register(
          v,
          'Install',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        x.register(
          h,
          'Repository',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        x.register(
          L,
          'DetailSidebar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        x.register(
          D,
          'StyledPaper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        x.register(
          j,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        )),
        (O =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          O(e);
    },
    './src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => p }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Favorite'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/Trans.js'
        ),
        i = o('./src/components/Button.tsx'),
        l = o('./src/components/Link.tsx'),
        s = o('./src/utils/url.ts'),
        d = o('./src/pages/Version/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function () {
          var e,
            t,
            o = (0, r.useContext)(d.DetailContext).packageMeta,
            a =
              null == o ||
              null === (e = o.latest) ||
              void 0 === e ||
              null === (t = e.funding) ||
              void 0 === t
                ? void 0
                : t.url;
          return (0, s.isURL)(a)
            ? r.createElement(
                A,
                { external: !0, to: a },
                r.createElement(
                  i.default,
                  {
                    color: 'primary',
                    fullWidth: !0,
                    startIcon: r.createElement(I, null),
                    variant: 'outlined',
                  },
                  r.createElement(n.Trans, {
                    components: [r.createElement(f, { key: 'fund' })],
                    i18nKey: 'button.fund-this-package',
                  })
                )
              )
            : null;
        };
      c(u, 'useContext{detailContext}');
      var g = u;
      const p = g;
      var m,
        C,
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'ei0x75o0', label: 'StyledLink' })(function (e) {
          var t = e.theme;
          return {
            marginTop: null == t ? void 0 : t.spacing(1),
            marginBottom: null == t ? void 0 : t.spacing(1),
            textDecoration: 'none',
            display: 'block',
          };
        }, ''),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(
          Object(
            (function () {
              var e = new Error("Cannot find module '@material-ui/icons/Favorite'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          ),
          { target: 'ei0x75o1', label: 'StyledFavoriteIcon' }
        )(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.orange };
        }, ''),
        f = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('strong', { target: 'ei0x75o2', label: 'StyledFundStrong' })({
          name: '8er82g',
          styles: 'margin-right:3px;',
        });
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'DetailSidebarFundButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        m.register(
          A,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        m.register(
          I,
          'StyledFavoriteIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        m.register(
          f,
          'StyledFundStrong',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => u }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Box.tsx'),
        l = o('./src/components/Heading.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function (e) {
          var t = e.description,
            o = e.packageName,
            a = e.version,
            l = e.isLatest,
            s = (0, n.useTranslation)().t;
          return r.createElement(
            i.default,
            {
              className: 'detail-info',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '8px',
            },
            r.createElement(m, null, o),
            t && r.createElement('div', null, t),
            r.createElement(
              C,
              null,
              s(l ? 'sidebar.detail.latest-version' : 'sidebar.detail.version', { version: a })
            )
          );
        };
      s(d, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var c = d;
      const u = c;
      var g,
        p,
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'eyhpj120', label: 'StyledHeading' })({
          name: '1affg1x',
          styles: 'font-size:1rem;font-weight:700;',
        }),
        C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'eyhpj121', label: 'StyledBoxVersion' })(function (e) {
          var t = e.theme;
          return { color: t && t.palette.text.secondary };
        }, '');
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'DetailSidebarTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        ),
        g.register(
          m,
          'StyledHeading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        ),
        g.register(
          C,
          'StyledBoxVersion',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/pages/Version/DetailSidebar/Developers/Developers.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { DeveloperType: () => p, Fab: () => C, VISIBLE_MAX: () => I, default: () => v });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Avatar'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Add'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var r,
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = o('./src/components/Box.tsx'),
        s = o('./src/components/FloatingActionButton.tsx'),
        d = o('./src/components/Tooltip.tsx'),
        c = o('./src/pages/Version/index.ts'),
        u = o('./src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'),
        g = o('./src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      var p,
        m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              };
      !(function (e) {
        (e.CONTRIBUTORS = 'contributors'), (e.MAINTAINERS = 'maintainers');
      })(p || (p = {}));
      var C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'efsbdr30', label: 'Fab' })(function (e) {
          var t, o;
          return {
            backgroundColor:
              null === (t = e.theme) || void 0 === t ? void 0 : t.palette.primary.main,
            color: null === (o = e.theme) || void 0 === o ? void 0 : o.palette.white,
          };
        }, ''),
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'efsbdr31', label: 'StyledBox' })({
          name: '183y8xt',
          styles: '> *{margin:5px;}',
        }),
        I = 6,
        f = function (e) {
          var t = e.type,
            o = e.visibleMax,
            r = void 0 === o ? I : o,
            l = (0, n.useContext)(c.DetailContext),
            s = (0, i.useTranslation)().t;
          if (!l) throw Error(s('app-context-not-correct-used'));
          var p = (0, n.useMemo)(
              function () {
                var e;
                return (0, g.default)(
                  null === (e = l.packageMeta) || void 0 === e ? void 0 : e.latest[t]
                );
              },
              [l.packageMeta, t]
            ),
            m = (0, n.useState)(r),
            f = (0, a.default)(m, 2),
            b = f[0],
            v = f[1],
            h = (0, n.useState)(p),
            L = (0, a.default)(h, 2),
            j = L[0],
            y = L[1];
          (0, n.useEffect)(
            function () {
              p.length && y(p.slice(0, b));
            },
            [p, b]
          );
          var x = (0, n.useCallback)(
            function () {
              v(b + I);
            },
            [b]
          );
          return j && p.length
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(u.default, { type: t }),
                n.createElement(
                  A,
                  { display: 'flex', flexWrap: 'wrap', margin: '10px 0 10px 0' },
                  j.map(function (e) {
                    return n.createElement(
                      d.default,
                      { key: e.email, title: e.name },
                      n.createElement(
                        Object(
                          (function () {
                            var e = new Error("Cannot find module '@material-ui/core/Avatar'");
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        { alt: e.name, src: e.avatar }
                      )
                    );
                  }),
                  b < p.length &&
                    n.createElement(
                      C,
                      { onClick: x, size: 'small' },
                      n.createElement(
                        Object(
                          (function () {
                            var e = new Error("Cannot find module '@material-ui/icons/Add'");
                            throw ((e.code = 'MODULE_NOT_FOUND'), e);
                          })()
                        ),
                        null
                      )
                    )
                )
              )
            : null;
        };
      m(
        f,
        'useContext{detailContext}\nuseTranslation{{ t }}\nuseMemo{developers}\nuseState{[visibleDevelopersMax, setVisibleDevelopersMax](visibleMax)}\nuseState{[visibleDevelopers, setVisibleDevelopers](developers)}\nuseEffect{}\nuseCallback{handleSetVisibleDevelopersMax}',
        function () {
          return [i.useTranslation];
        }
      );
      var b = f;
      const v = b;
      var h, L;
      (h = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (h.register(
          C,
          'Fab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        h.register(
          A,
          'StyledBox',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        h.register(
          I,
          'VISIBLE_MAX',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        h.register(
          f,
          'Developers',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        h.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { DeveloperType: () => l, default: () => u }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var l,
        s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              };
      !(function (e) {
        (e.CONTRIBUTORS = 'contributors'), (e.MAINTAINERS = 'maintainers');
      })(l || (l = {}));
      var d = function (e) {
        var t = e.type,
          o = (0, n.useTranslation)().t;
        switch (t) {
          case l.CONTRIBUTORS:
            return r.createElement(m, { variant: 'subtitle1' }, o('sidebar.contributors.title'));
          case l.MAINTAINERS:
            return r.createElement(m, { variant: 'subtitle1' }, o('sidebar.maintainers.title'));
        }
      };
      s(d, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var c = d;
      const u = c;
      var g,
        p,
        m = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'egusi2d0', label: 'StyledText' })(function (e) {
          var t = e.theme;
          return { fontWeight: null == t ? void 0 : t.fontWeight.bold, marginBottom: '10px' };
        }, '');
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'DevelopersTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'
        ),
        g.register(
          m,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => l });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function n(e) {
        return e
          ? e.reduce(function (e, t) {
              return e.some(function (e) {
                return e.email === t.email;
              })
                ? e
                : [].concat((0, r.default)(e), [t]);
            }, [])
          : [];
      }
      var i = n;
      const l = i;
      var s, d;
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          n,
          'getUniqueDeveloperValues',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts'
        ),
        s.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/pages/Version/DetailSidebar/Developers/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailSidebar/Developers/Developers.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Dist/Dist.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => C });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/List.tsx'),
        l = o('./src/utils/file-size.ts'),
        s = o('./src/utils/package.ts'),
        d = o('./src/pages/Version/context.ts'),
        c = o('./src/pages/Version/DetailSidebar/Dist/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function (e) {
          var t = e.name,
            o = e.children;
          return o
            ? r.createElement(c.DistChips, {
                label: r.createElement(r.Fragment, null, r.createElement('b', null, t), ': ', o),
              })
            : null;
        },
        p = function () {
          var e = (0, r.useContext)(d.DetailContext).packageMeta,
            t = (0, n.useTranslation)().t;
          if (!e) return null;
          var o = e && e.latest,
            a = o.dist,
            u = o.license;
          return r.createElement(
            i.default,
            {
              subheader: r.createElement(
                c.StyledText,
                { variant: 'subtitle1' },
                t('sidebar.distribution.title')
              ),
            },
            r.createElement(
              c.DistListItem,
              { button: !0 },
              r.createElement(g, { name: t('sidebar.distribution.file-count') }, a.fileCount),
              r.createElement(
                g,
                { name: t('sidebar.distribution.size') },
                a.unpackedSize && (0, l.default)(a.unpackedSize)
              ),
              r.createElement(
                g,
                { name: t('sidebar.distribution.license') },
                (0, s.formatLicense)(u)
              )
            )
          );
        };
      u(p, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var m = p;
      const C = m;
      var A, I;
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          g,
          'DistChip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/Dist.tsx'
        ),
        A.register(
          p,
          'Dist',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/Dist.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/Dist.tsx'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/Version/DetailSidebar/Dist/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailSidebar/Dist/Dist.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Dist/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          StyledText: () => c,
          DistListItem: () => u,
          DistChips: () => g,
          DownloadButton: () => p,
        }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/Chip.tsx'),
        n = o('./src/components/FloatingActionButton.tsx'),
        i = o('./src/components/ListItem.tsx'),
        l = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s,
        d,
        c = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'emhg1mg0', label: 'StyledText' })(function (e) {
          return { fontWeight: e.theme && e.theme.fontWeight.bold, textTransform: 'capitalize' };
        }, ''),
        u = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'emhg1mg1', label: 'DistListItem' })({
          name: '1huthg8',
          styles: 'padding-left:0;padding-right:0;',
        }),
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'emhg1mg2', label: 'DistChips' })({
          name: '42zb18',
          styles: 'margin-right:5px;text-transform:capitalize;',
        }),
        p = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'emhg1mg3', label: 'DownloadButton' })(function (e) {
          return {
            backgroundColor: e.theme && e.theme.palette.primary.main,
            color: e.theme && e.theme.palette.white,
          };
        }, '');
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          c,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        s.register(
          u,
          'DistListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        s.register(
          g,
          'DistChips',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        s.register(
          p,
          'DownloadButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/pages/Version/DetailSidebar/Engines/Engines.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => I });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Avatar.tsx'),
        l = o('./src/components/Grid.tsx'),
        s = o('./src/components/List.tsx'),
        d = o('./src/components/ListItemText.tsx'),
        c = o('./src/pages/Version/context.ts'),
        u = o('./src/pages/Version/DetailSidebar/Install/img/npm.svg'),
        g = o('./src/pages/Version/DetailSidebar/Engines/img/node.png'),
        p = o('./src/pages/Version/DetailSidebar/Engines/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = function () {
          var e,
            t = (0, r.useContext)(c.DetailContext).packageMeta,
            o = (0, n.useTranslation)().t,
            a = null == t || null === (e = t.latest) || void 0 === e ? void 0 : e.engines;
          return a && (a.node || a.npm)
            ? r.createElement(
                l.default,
                { container: !0 },
                a.node &&
                  r.createElement(
                    l.default,
                    { item: !0, xs: 6 },
                    r.createElement(
                      s.default,
                      {
                        subheader: r.createElement(
                          p.StyledText,
                          { variant: 'subtitle1' },
                          o('sidebar.engines.node-js')
                        ),
                      },
                      r.createElement(
                        p.EngineListItem,
                        { button: !0 },
                        r.createElement(i.default, { src: g }),
                        r.createElement(d.default, { primary: a.node })
                      )
                    )
                  ),
                a.npm &&
                  r.createElement(
                    l.default,
                    { item: !0, xs: 6 },
                    r.createElement(
                      s.default,
                      {
                        subheader: r.createElement(
                          p.StyledText,
                          { variant: 'subtitle1' },
                          o('sidebar.engines.npm-version')
                        ),
                      },
                      r.createElement(
                        p.EngineListItem,
                        { button: !0 },
                        r.createElement(i.default, { src: u }),
                        r.createElement(d.default, { primary: a.npm })
                      )
                    )
                  )
              )
            : null;
        };
      m(C, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var A = C;
      const I = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          C,
          'Engine',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Engines/Engines.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Engines/Engines.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/pages/Version/DetailSidebar/Engines/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailSidebar/Engines/Engines.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Engines/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { StyledText: () => s, EngineListItem: () => d }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/ListItem.tsx'),
        n = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1exuqcw0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'e1exuqcw1', label: 'EngineListItem' })({
          name: '131yq1t',
          styles: 'padding-left:0;',
        });
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          s,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Engines/styles.ts'
        ),
        i.register(
          d,
          'EngineListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Engines/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/Version/DetailSidebar/Install/Install.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => C }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/List.tsx'),
        l = o('./src/components/Text/index.ts'),
        s = o('./src/providers/config/index.ts'),
        d = o('./src/pages/Version/index.ts'),
        c = o('./src/pages/Version/DetailSidebar/Install/InstallListItem.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'exr63xd0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        p = function () {
          var e,
            t,
            o,
            a,
            l = (0, n.useTranslation)().t,
            u = (0, s.useConfig)().configOptions,
            p = (0, r.useContext)(d.DetailContext),
            m = p.packageMeta,
            C = p.packageName;
          if (!m || !C) return null;
          var A =
              null == u || null === (e = u.pkgManagers) || void 0 === e
                ? void 0
                : e.includes('npm'),
            I =
              null == u || null === (t = u.pkgManagers) || void 0 === t
                ? void 0
                : t.includes('yarn'),
            f =
              null ===
                (o =
                  null == u || null === (a = u.pkgManagers) || void 0 === a
                    ? void 0
                    : a.includes('pnpm')) ||
              void 0 === o ||
              o;
          return A | f | I
            ? r.createElement(
                i.default,
                {
                  'data-testid': 'installList',
                  subheader: r.createElement(
                    g,
                    { variant: 'subtitle1' },
                    l('sidebar.installation.title')
                  ),
                },
                A &&
                  r.createElement(c.default, {
                    dependencyManager: c.DependencyManager.NPM,
                    packageName: C,
                  }),
                I &&
                  r.createElement(c.default, {
                    dependencyManager: c.DependencyManager.YARN,
                    packageName: C,
                  }),
                f &&
                  r.createElement(c.default, {
                    dependencyManager: c.DependencyManager.PNPM,
                    packageName: C,
                  })
              )
            : null;
        };
      u(
        p,
        'useTranslation{{ t }}\nuseConfig{{ configOptions }}\nuseContext{detailContext}',
        function () {
          return [n.useTranslation, s.useConfig];
        }
      );
      var m = p;
      const C = m;
      var A, I;
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          g,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        ),
        A.register(
          p,
          'Install',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/Version/DetailSidebar/Install/InstallListItem.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { DependencyManager: () => p, default: () => v }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Avatar.tsx'),
        l = o('./src/components/CopyToClipBoard.tsx'),
        s = o('./src/components/ListItem.tsx'),
        d = o('./src/components/ListItemText.tsx'),
        c = o('./src/pages/Version/DetailSidebar/Install/img/npm.svg'),
        u = o('./src/pages/Version/DetailSidebar/Install/img/pnpm.svg'),
        g = o('./src/pages/Version/DetailSidebar/Install/img/yarn.svg');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var p,
        m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e1sfautt0', label: 'InstallItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d.default, { target: 'e1sfautt1', label: 'InstallListItemText' })({
          name: 'fipixf',
          styles: 'padding:0 10px;margin:0;',
        }),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e1sfautt2', label: 'PackageMangerAvatar' })({
          name: '17x0n9v',
          styles: 'border-radius:0px;padding:0;img{background-color:transparent;}',
        });
      !(function (e) {
        (e.NPM = 'npm'), (e.YARN = 'yarn'), (e.PNPM = 'pnpm');
      })(p || (p = {}));
      var f = function (e) {
        var t = e.packageName,
          o = e.dependencyManager,
          a = (0, n.useTranslation)().t;
        switch (o) {
          case p.NPM:
            return r.createElement(
              C,
              { button: !0, 'data-testid': 'installListItem-npm' },
              r.createElement(I, { alt: 'npm', src: c }),
              r.createElement(A, {
                primary: r.createElement(l.default, {
                  text: a('sidebar.installation.install-using-npm-command', { packageName: t }),
                }),
                secondary: a('sidebar.installation.install-using-npm'),
              })
            );
          case p.YARN:
            return r.createElement(
              C,
              { button: !0, 'data-testid': 'installListItem-yarn' },
              r.createElement(I, { alt: 'yarn', src: g }),
              r.createElement(A, {
                primary: r.createElement(l.default, {
                  text: a('sidebar.installation.install-using-yarn-command', { packageName: t }),
                }),
                secondary: a('sidebar.installation.install-using-yarn'),
              })
            );
          case p.PNPM:
            return r.createElement(
              C,
              { button: !0, 'data-testid': 'installListItem-pnpm' },
              r.createElement(I, { alt: 'pnpm', src: u }),
              r.createElement(A, {
                primary: r.createElement(l.default, {
                  text: a('sidebar.installation.install-using-pnpm-command', { packageName: t }),
                }),
                secondary: a('sidebar.installation.install-using-pnpm'),
              })
            );
          default:
            return null;
        }
      };
      m(f, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var b = f;
      const v = b;
      var h, L;
      (h = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (h.register(
          C,
          'InstallItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        h.register(
          A,
          'InstallListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        h.register(
          I,
          'PackageMangerAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        h.register(
          f,
          'InstallListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        h.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/pages/Version/DetailSidebar/Install/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailSidebar/Install/Install.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Repository/Repository.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => y }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Avatar.tsx'),
        l = o('./src/components/CopyToClipBoard.tsx'),
        s = o('./src/components/Link.tsx'),
        d = o('./src/components/List.tsx'),
        c = o('./src/components/ListItem.tsx'),
        u = o('./src/components/ListItemText.tsx'),
        g = o('./src/components/Text/index.ts'),
        p = o('./src/utils/url.ts'),
        m = o('./src/pages/Version/context.ts'),
        C = o('./src/pages/Version/DetailSidebar/Repository/img/git.png');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var A =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(g.default, { target: 'e7tnhe50', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        f = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'e7tnhe51', label: 'GithubLink' })(function (e) {
          var t = e.theme;
          return {
            color:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.primary.main
                : null == t
                ? void 0
                : t.palette.white,
            ':hover': { color: null == t ? void 0 : t.palette.dodgerBlue },
          };
        }, ''),
        b = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(c.default, { target: 'e7tnhe52', label: 'RepositoryListItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        v = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(u.default, { target: 'e7tnhe53', label: 'RepositoryListItemText' })({
          name: 'fipixf',
          styles: 'padding:0 10px;margin:0;',
        }),
        h = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'e7tnhe54', label: 'RepositoryAvatar' })({
          name: '17x0n9v',
          styles: 'border-radius:0px;padding:0;img{background-color:transparent;}',
        }),
        L = function () {
          var e,
            t,
            o = r.useContext(m.DetailContext),
            a = (0, n.useTranslation)().t,
            i = o.packageMeta;
          if (
            null == i ||
            null === (e = i.latest) ||
            void 0 === e ||
            null === (t = e.repository) ||
            void 0 === t ||
            !t.url ||
            !(0, p.isURL)(i.latest.repository.url)
          )
            return null;
          var s = i.latest.repository.url,
            c = s.includes('git+') ? s.split('git+')[1] : s;
          return r.createElement(
            d.default,
            {
              dense: !0,
              subheader: r.createElement(
                I,
                { variant: 'subtitle1' },
                a('sidebar.repository.title')
              ),
            },
            r.createElement(
              b,
              { button: !0 },
              r.createElement(h, { src: C }),
              r.createElement(v, {
                primary: r.createElement(
                  l.default,
                  { text: c },
                  r.createElement(f, { external: !0, to: c }, c)
                ),
              })
            )
          );
        };
      A(L, 'useContext{detailContext}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var j = L;
      const y = j;
      var x, O;
      (x = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (x.register(
          I,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        x.register(
          f,
          'GithubLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        x.register(
          b,
          'RepositoryListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        x.register(
          v,
          'RepositoryListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        x.register(
          h,
          'RepositoryAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        x.register(
          L,
          'Repository',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        x.register(
          j,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        )),
        (O =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          O(e);
    },
    './src/pages/Version/DetailSidebar/Repository/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailSidebar/Repository/Repository.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/Version/DetailSidebar/DetailSidebar.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/Version.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => m });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        l = o('./src/components/Loading/index.ts'),
        s = o('./src/components/NotFound/index.ts'),
        d = o('./src/pages/Version/VersionLayout.tsx'),
        c = o('./src/pages/Version/get-route-package-name.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function () {
          var e = (0, i.useParams)(),
            t = e.version,
            o = e.package,
            a = e.scope,
            u = (0, n.useSelector)(function (e) {
              return e.manifest;
            }),
            g = (0, n.useSelector)(function (e) {
              var t;
              return null == e || null === (t = e.loading) || void 0 === t
                ? void 0
                : t.models.manifest;
            }),
            p = (0, n.useDispatch)();
          return (
            (0, r.useEffect)(
              function () {
                var e = (0, c.default)(o, a);
                p.manifest.getManifest({ packageName: e, packageVersion: t });
              },
              [p, o, a, t]
            ),
            g
              ? r.createElement(l.default, null)
              : u.hasNotBeenFound
              ? r.createElement(s.default, null)
              : r.createElement(d.default, null)
          );
        };
      u(
        g,
        'useParams{{ version: packageVersion, package: pkgName, scope }}\nuseSelector{manifestStore}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseEffect{}',
        function () {
          return [i.useParams, n.useSelector, n.useSelector, n.useDispatch];
        }
      );
      var p = g;
      const m = p;
      var C, A;
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          g,
          'Version',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/Version.tsx'
        ),
        C.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/Version.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/pages/Version/VersionContextProvider.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => g });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        l = o('./src/pages/Version/context.ts'),
        s = o('./src/pages/Version/get-route-package-name.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        c = function (e) {
          var t = e.children,
            o = (0, i.useParams)(),
            a = o.version,
            d = o.package,
            c = o.scope,
            u = (0, n.useSelector)(function (e) {
              return e.manifest;
            }),
            g = u.manifest,
            p = u.readme,
            m = u.packageName,
            C = u.hasNotBeenFound,
            A = (0, n.useSelector)(function (e) {
              var t;
              return null == e || null === (t = e.loading) || void 0 === t
                ? void 0
                : t.models.manifest;
            }),
            I = (0, n.useDispatch)();
          return (
            (0, r.useEffect)(
              function () {
                var e = (0, s.default)(d, c);
                I.manifest.getManifest({ packageName: e, packageVersion: a });
              },
              [I, a, d, c]
            ),
            r.createElement(
              l.DetailContext.Provider,
              {
                value: {
                  packageMeta: g,
                  packageVersion: a,
                  readMe: p,
                  packageName: m,
                  isLoading: A,
                  hasNotBeenFound: C,
                },
              },
              t
            )
          );
        };
      d(
        c,
        'useParams{{ version: packageVersion, package: pkgName, scope }}\nuseSelector{{ manifest, readme, packageName, hasNotBeenFound }}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseEffect{}',
        function () {
          return [i.useParams, n.useSelector, n.useSelector, n.useDispatch];
        }
      );
      var u = c;
      const g = u;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          c,
          'VersionContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/Version/VersionLayout.tsx': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { default: () => d }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/core/Grid'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/pages/Version/DetailContainer/index.ts'),
        i = o('./src/pages/Version/DetailSidebar/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function () {
          return r.createElement(
            Object(
              (function () {
                var e = new Error("Cannot find module '@material-ui/core/Grid'");
                throw ((e.code = 'MODULE_NOT_FOUND'), e);
              })()
            ),
            {
              className: 'container content',
              container: !0,
              'data-testid': 'version-layout',
              spacing: 0,
            },
            r.createElement(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@material-ui/core/Grid'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              ),
              { item: !0, md: 8, xs: 12 },
              r.createElement(n.default, null)
            ),
            r.createElement(
              Object(
                (function () {
                  var e = new Error("Cannot find module '@material-ui/core/Grid'");
                  throw ((e.code = 'MODULE_NOT_FOUND'), e);
                })()
              ),
              { item: !0, md: 4, xs: 12 },
              r.createElement(i.default, null)
            )
          );
        },
        s = l;
      const d = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          l,
          'VersionLayout',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionLayout.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionLayout.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/pages/Version/context.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          DetailContext: () => l,
          DetailContextProvider: () => s,
          DetailContextConsumer: () => d,
        });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        i,
        l = (0, r.createContext)({}),
        s = l.Provider,
        d = l.Consumer;
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          l,
          'DetailContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        ),
        n.register(
          s,
          'DetailContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        ),
        n.register(
          d,
          'DetailContextConsumer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/pages/Version/get-route-package-name.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { default: () => i }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function r(e, t) {
        return t ? '@'.concat(t, '/').concat(e) : e;
      }
      var n = r;
      const i = n;
      var l, s;
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          r,
          'getRouterPackageName',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/get-route-package-name.ts'
        ),
        l.register(
          n,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/get-route-package-name.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/pages/Version/index.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          DetailContext: () => a.DetailContext,
          DetailContextConsumer: () => a.DetailContextConsumer,
          DetailContextProvider: () => a.DetailContextProvider,
          VersionPageConsumerProps: () => r.VersionPageConsumerProps,
          DetailContextProps: () => r.DetailContextProps,
          default: () => n.default,
        });
      var a = o('./src/pages/Version/context.ts'),
        r = o('./src/pages/Version/version-config.ts'),
        n = o('./src/pages/Version/Version.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/version-config.ts': (e, t, o) => {
      'use strict';
      o.r(t);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/Home.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        i = o('./src/components/Loading/index.ts'),
        l = o('./src/pages/home/PackageList/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function () {
          var e = (0, n.useSelector)(function (e) {
              return e.packages.response;
            }),
            t = (0, n.useSelector)(function (e) {
              var t;
              return null == e || null === (t = e.loading) || void 0 === t
                ? void 0
                : t.models.packages;
            }),
            o = (0, n.useDispatch)();
          return (
            (0, r.useEffect)(
              function () {
                o.packages.getPackages();
              },
              [o]
            ),
            r.createElement(
              'div',
              { className: 'container content', 'data-testid': 'home-page-container' },
              t ? r.createElement(i.default, null) : r.createElement(l.PackageList, { packages: e })
            )
          );
        };
      s(
        d,
        'useSelector{packages}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseEffect{}',
        function () {
          return [n.useSelector, n.useSelector, n.useDispatch];
        }
      );
      var c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'Home',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/Home.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/Home.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/pages/home/PackageList/Help/Help.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => f });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Button.tsx'),
        l = o('./src/components/CardActions.tsx'),
        s = o('./src/components/CardContent.tsx'),
        d = o('./src/components/CopyToClipBoard.tsx'),
        c = o('./src/components/Heading.tsx'),
        u = o('./src/components/Text/index.ts'),
        g = o('./src/providers/config/index.ts'),
        p = o('./src/pages/home/PackageList/Help/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var m =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            };
      function C(e, t) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(u.default, { variant: 'body1' }, e),
          r.createElement(d.default, { text: t })
        );
      }
      var A = function () {
        var e = (0, g.useConfig)().configOptions.base,
          t = (0, n.useTranslation)().t;
        return r.createElement(
          p.CardStyled,
          { id: 'help-card' },
          r.createElement(
            s.default,
            null,
            r.createElement(
              c.default,
              { gutterBottom: !0, id: 'help-card__title', variant: 'h5' },
              t('help.title')
            ),
            r.createElement(
              p.HelpTitle,
              { color: 'textSecondary', gutterBottom: !0 },
              t('help.sub-title')
            ),
            C(t('help.first-step'), t('help.first-step-command-line', { registryUrl: e })),
            C(t('help.second-step'), t('help.second-step-command-line', { registryUrl: e })),
            r.createElement(u.default, { variant: 'body2' }, t('help.third-step'))
          ),
          r.createElement(
            l.default,
            null,
            r.createElement(
              i.default,
              {
                color: 'primary',
                href: 'https://verdaccio.org/docs/en/installation',
                size: 'small',
              },
              t('button.learn-more')
            )
          )
        );
      };
      m(A, 'useConfig{{ configOptions }}\nuseTranslation{{ t }}', function () {
        return [g.useConfig, n.useTranslation];
      });
      var I = A;
      const f = I;
      var b, v;
      (b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (b.register(
          C,
          'renderHeadingClipboardSegments',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/Help.tsx'
        ),
        b.register(
          A,
          'Help',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/Help.tsx'
        ),
        b.register(
          I,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/Help.tsx'
        )),
        (v =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          v(e);
    },
    './src/pages/home/PackageList/Help/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/home/PackageList/Help/Help.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/PackageList/Help/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, { CardStyled: () => s, HelpTitle: () => d }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var a,
        r = o('./src/components/Card.tsx'),
        n = o('./src/components/Heading.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        s = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(r.default, { target: 'e1gdaual0', label: 'CardStyled' })({
          name: '1rkew7x',
          styles: 'width:600px;margin:auto;',
        }),
        d = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.default, { target: 'e1gdaual1', label: 'HelpTitle' })({
          name: 'uewl2b',
          styles: 'margin-bottom:20px;',
        });
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          s,
          'CardStyled',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/styles.ts'
        ),
        i.register(
          d,
          'HelpTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/home/PackageList/Package/Package.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => j });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        n = o.n(r);
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/core'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/BugReport'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/CloudDownload'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        Object(
          (function () {
            var e = new Error("Cannot find module '@material-ui/icons/Home'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        );
      var i,
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        c = o('./src/components/Grid.tsx'),
        u = o('./src/components/Icons/index.ts'),
        g = o('./src/components/Link.tsx'),
        p = o('./src/components/ListItem.tsx'),
        m = o('./src/components/Tooltip.tsx'),
        C = o('./src/utils/file-size.ts'),
        A = o('./src/utils/package.ts'),
        I = o('./src/utils/url.ts'),
        f = o('./src/pages/home/PackageList/Package/Tag/index.ts'),
        b = o('./src/pages/home/PackageList/Package/styles.ts');
      (e = o.hmd(e)),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          i(e);
      var v =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        h = function (e) {
          var t,
            o,
            r = e.author,
            i = r.name,
            u = r.avatar,
            v = e.bugs,
            h = e.description,
            L = e.dist,
            j = e.homepage,
            y = e.keywords,
            x = void 0 === y ? [] : y,
            O = e.license,
            w = e.name,
            M = e.time,
            _ = e.version,
            N = (0, d.useSelector)(function (e) {
              return e.configuration;
            }),
            k = (0, d.useDispatch)(),
            T = (0, s.useTranslation)().t,
            U = (0, l.useCallback)(
              (function () {
                var e = (0, a.default)(
                  n().mark(function e(t) {
                    var o;
                    return n().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (o = t.replace('https://registry.npmjs.org/', N.base)),
                              k.download.getTarball({ link: o });
                          case 2:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [k, N]
            ),
            S = function () {
              return l.createElement(
                c.default,
                { container: !0, item: !0, xs: 12 },
                l.createElement(
                  c.default,
                  { item: !0, xs: !0 },
                  l.createElement(
                    b.WrapperLink,
                    { to: '/-/web/detail/'.concat(w) },
                    l.createElement(b.PackageTitle, { className: 'package-title' }, w)
                  )
                ),
                l.createElement(
                  b.GridRightAligned,
                  { alignItems: 'center', container: !0, item: !0, justify: 'flex-end', xs: !0 },
                  j &&
                    (0, I.isURL)(j) &&
                    l.createElement(
                      g.default,
                      { external: !0, to: j },
                      l.createElement(
                        m.default,
                        {
                          'aria-label': T('package.homepage'),
                          title: T('package.visit-home-page'),
                        },
                        l.createElement(
                          b.IconButton,
                          { 'aria-label': T('package.homepage') },
                          l.createElement(
                            Object(
                              (function () {
                                var e = new Error("Cannot find module '@material-ui/icons/Home'");
                                throw ((e.code = 'MODULE_NOT_FOUND'), e);
                              })()
                            ),
                            null
                          )
                        )
                      )
                    ),
                  (null == v ? void 0 : v.url) &&
                    (0, I.isURL)(v.url) &&
                    l.createElement(
                      g.default,
                      { external: !0, to: v.url },
                      l.createElement(
                        m.default,
                        { 'aria-label': T('package.bugs'), title: T('package.open-an-issue') },
                        l.createElement(
                          b.IconButton,
                          { 'aria-label': T('package.bugs') },
                          l.createElement(
                            Object(
                              (function () {
                                var e = new Error(
                                  "Cannot find module '@material-ui/icons/BugReport'"
                                );
                                throw ((e.code = 'MODULE_NOT_FOUND'), e);
                              })()
                            ),
                            null
                          )
                        )
                      )
                    ),
                  (null == L ? void 0 : L.tarball) &&
                    (0, I.isURL)(L.tarball) &&
                    l.createElement(
                      g.default,
                      {
                        external: !0,
                        onClick: function () {
                          U(L.tarball);
                        },
                        to: '#',
                      },
                      l.createElement(
                        m.default,
                        {
                          'aria-label': T('package.download', { what: T('package.the-tar-file') }),
                          title: T('package.tarball'),
                        },
                        l.createElement(
                          b.IconButton,
                          { 'aria-label': T('package.download') },
                          l.createElement(
                            Object(
                              (function () {
                                var e = new Error(
                                  "Cannot find module '@material-ui/icons/CloudDownload'"
                                );
                                throw ((e.code = 'MODULE_NOT_FOUND'), e);
                              })()
                            ),
                            null
                          )
                        )
                      )
                    )
                )
              );
            };
          return l.createElement(
            b.Wrapper,
            { className: 'package', 'data-testid': 'package-item-list' },
            l.createElement(
              p.default,
              { alignItems: 'flex-start' },
              l.createElement(b.PackageListItemText, {
                className: 'package-link',
                component: 'div',
                primary: S(),
                secondary:
                  ((o = x.sort().map(function (e, t) {
                    return l.createElement(f.default, { key: t }, e);
                  })),
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(b.Description, null, h),
                    o.length > 0 && l.createElement(b.TagContainer, null, o)
                  )),
              })
            ),
            l.createElement(
              p.default,
              { alignItems: 'flex-start' },
              ((t = (0, A.getAuthorName)(i)),
              l.createElement(
                b.Author,
                null,
                l.createElement(b.Avatar, { alt: t, src: u }),
                l.createElement(b.Details, null, l.createElement(b.Text, { text: t }))
              )),
              _ &&
                l.createElement(
                  b.OverviewItem,
                  null,
                  l.createElement(D, null),
                  T('package.version', { version: _ })
                ),
              M &&
                l.createElement(
                  b.OverviewItem,
                  null,
                  l.createElement(E, null),
                  l.createElement(
                    b.Published,
                    null,
                    T('package.published-on', { time: (0, A.formatDate)(M) })
                  ),
                  (0, A.formatDateDistance)(M)
                ),
              (null == L ? void 0 : L.unpackedSize) &&
                l.createElement(
                  b.OverviewItem,
                  null,
                  l.createElement(H, null),
                  (0, C.default)(L.unpackedSize)
                ),
              O && l.createElement(b.OverviewItem, null, l.createElement(G, null), O)
            )
          );
        };
      v(
        h,
        'useSelector{config}\nuseDispatch{dispatch}\nuseTranslation{{ t }}\nuseCallback{handleDownload}',
        function () {
          return [d.useSelector, d.useDispatch, s.useTranslation];
        }
      );
      var L = h;
      const j = L;
      var y,
        x,
        O = function (e) {
          var t = e.theme;
          return Object(
            (function () {
              var e = new Error("Cannot find module '@emotion/core'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })()
          )(
            'margin:2px 10px 0 0;fill:',
            'light' === (null == t ? void 0 : t.palette.type)
              ? null == t
                ? void 0
                : t.palette.greyLight2
              : null == t
              ? void 0
              : t.palette.white,
            ';'
          );
        },
        D = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(u.Version, { target: 'e1mn8d1q0', label: 'StyledVersion' })(O, ';'),
        H = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(u.FileBinary, { target: 'e1mn8d1q1', label: 'StyledFileBinary' })(O, ';'),
        G = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(u.Law, { target: 'e1mn8d1q2', label: 'StyledLaw' })(O, ';'),
        E = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(u.Time, { target: 'e1mn8d1q3', label: 'StyledTime' })(O, ';');
      (y = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (y.register(
          h,
          'Package',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        y.register(
          O,
          'iconStyle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        y.register(
          D,
          'StyledVersion',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        y.register(
          H,
          'StyledFileBinary',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        y.register(
          G,
          'StyledLaw',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        y.register(
          E,
          'StyledTime',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        y.register(
          L,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        )),
        (x =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          x(e);
    },
    './src/pages/home/PackageList/Package/Tag/Tag.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/pages/home/PackageList/Package/Tag/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function (e) {
          var t = e.children;
          return r.createElement(n.Wrapper, null, t);
        },
        l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Tag',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Tag/Tag.tsx'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Tag/Tag.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/home/PackageList/Package/Tag/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/home/PackageList/Package/Tag/Tag.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/PackageList/Package/Tag/styles.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { Wrapper: () => i }),
        Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        ),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'e1jm3tg90', label: 'Wrapper' })({
          name: '7c7ib1',
          styles:
            'vertical-align:middle;line-height:22px;border-radius:2px;color:#485a3e;background-color:#f3f4f2;padding:0.22rem 0.4rem;margin:8px 8px 0 0;',
        });
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          i,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Tag/styles.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/pages/home/PackageList/Package/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default, PackageInterface: () => a.PackageInterface });
      var a = o('./src/pages/home/PackageList/Package/Package.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/PackageList/Package/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          OverviewItem: () => C,
          Published: () => A,
          Text: () => I,
          Details: () => f,
          Author: () => b,
          Avatar: () => v,
          WrapperLink: () => h,
          PackageTitle: () => L,
          GridRightAligned: () => j,
          Wrapper: () => y,
          IconButton: () => x,
          TagContainer: () => O,
          PackageListItemText: () => D,
          Description: () => H,
        });
      var a = o(
        '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
      );
      Object(
        (function () {
          var e = new Error("Cannot find module '@emotion/styled-base'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })()
      );
      var r,
        n = o(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        i = o('./src/components/Avatar.tsx'),
        l = o('./src/components/Grid.tsx'),
        s = o('./src/components/IconButton.tsx'),
        d = o('./src/components/Label/index.ts'),
        c = o('./src/components/List.tsx'),
        u = o('./src/components/ListItemText.tsx'),
        g = o('./src/components/Text/index.ts');
      (e = o.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        C = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'enspaod0', label: 'OverviewItem' })(function (e) {
          var t,
            o = e.theme;
          return (
            (t = {
              display: 'flex',
              alignItems: 'center',
              margin: '0 0 0 16px',
              color:
                'light' === (null == o ? void 0 : o.palette.type)
                  ? null == o
                    ? void 0
                    : o.palette.greyLight2
                  : null == o
                  ? void 0
                  : o.palette.white,
              fontSize: 12,
            }),
            (0, a.default)(
              t,
              '@media (max-width: '.concat(null == o ? void 0 : o.breakPoints.medium, 'px)'),
              { ':nth-of-type(3)': { display: 'none' } }
            ),
            (0, a.default)(
              t,
              '@media (max-width: '.concat(null == o ? void 0 : o.breakPoints.small, 'px)'),
              { ':nth-of-type(4)': { display: 'none' } }
            ),
            t
          );
        }, ''),
        A = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'enspaod1', label: 'Published' })(function (e) {
          var t = e.theme;
          return {
            color:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.greyLight2
                : null == t
                ? void 0
                : t.palette.white,
            margin: '0 5px 0 0',
          };
        }, ''),
        I = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(d.default, { target: 'enspaod2', label: 'Text' })(function (e) {
          var t = e.theme;
          return {
            fontSize: '12px',
            fontWeight: null == t ? void 0 : t.fontWeight.semiBold,
            color:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.greyLight2
                : null == t
                ? void 0
                : t.palette.white,
          };
        }, ''),
        f = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'enspaod3', label: 'Details' })({
          name: '1w4wxz3',
          styles: 'margin-left:5px;line-height:1.5;display:flex;flex-direction:column;',
        }),
        b = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('div', { target: 'enspaod4', label: 'Author' })({
          name: '70qvj9',
          styles: 'display:flex;align-items:center;',
        }),
        v = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(i.default, { target: 'enspaod5', label: 'Avatar' })({
          name: '1t9pz9x',
          styles: 'width:20px;height:20px;',
        }),
        h = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(n.Link, { target: 'enspaod6', label: 'WrapperLink' })({
          name: 'ytumd6',
          styles: 'text-decoration:none;',
        }),
        L = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'enspaod7', label: 'PackageTitle' })(function (e) {
          var t = e.theme;
          return (0,
          a.default)({ fontWeight: null == t ? void 0 : t.fontWeight.bold, fontSize: 20, display: 'block', marginBottom: 12, color: 'dark' == (null == t ? void 0 : t.palette.type) ? (null == t ? void 0 : t.palette.dodgerBlue) : null == t ? void 0 : t.palette.eclipse, cursor: 'pointer' }, '@media (max-width: '.concat(null == t ? void 0 : t.breakPoints.small, 'px)'), { fontSize: 14, marginBottom: 8 });
        }, ''),
        j = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(l.default, { target: 'enspaod8', label: 'GridRightAligned' })({
          name: 's2uf1z',
          styles: 'text-align:right;',
        }),
        y = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(c.default, { target: 'enspaod9', label: 'Wrapper' })(function (e) {
          var t,
            o,
            a,
            r = e.theme;
          return {
            ':hover': {
              backgroundColor:
                'dark' == (null == r || null === (t = r.palette) || void 0 === t ? void 0 : t.type)
                  ? null == r || null === (o = r.palette) || void 0 === o
                    ? void 0
                    : o.secondary.main
                  : null == r || null === (a = r.palette) || void 0 === a
                  ? void 0
                  : a.greyLight3,
            },
          };
        }, ''),
        x = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(s.default, { target: 'enspaod10', label: 'IconButton' })({
          name: '8a08e6',
          styles: 'padding:6px;svg{font-size:16px;}',
        }),
        O = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )('span', { target: 'enspaod11', label: 'TagContainer' })(function (e) {
          var t = e.theme;
          return (0,
          a.default)({ marginTop: 8, marginBottom: 12, display: 'flex', flexWrap: 'wrap' }, '@media (max-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'none' });
        }, ''),
        D = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(u.default, { target: 'enspaod12', label: 'PackageListItemText' })({
          name: '9t8fgp',
          styles: 'padding-right:0;',
        }),
        H = Object(
          (function () {
            var e = new Error("Cannot find module '@emotion/styled-base'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })()
        )(g.default, { target: 'enspaod13', label: 'Description' })(function (e) {
          var t = e.theme;
          return {
            color:
              'light' === (null == t ? void 0 : t.palette.type)
                ? null == t
                  ? void 0
                  : t.palette.greyDark2
                : null == t
                ? void 0
                : t.palette.white,
            fontSize: '14px',
            paddingRight: 0,
          };
        }, '');
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          C,
          'OverviewItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          A,
          'Published',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          I,
          'Text',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          f,
          'Details',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          b,
          'Author',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          v,
          'Avatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          h,
          'WrapperLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          L,
          'PackageTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          j,
          'GridRightAligned',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          y,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          x,
          'IconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          O,
          'TagContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          D,
          'PackageListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        p.register(
          H,
          'Description',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/home/PackageList/PackageList.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { PackageList: () => A });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/AutoSizer/index.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/CellMeasurer/index.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/List/index.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/WindowScroller/index.js'
        ),
        d = o('./src/components/Divider.tsx'),
        c = o('./src/utils/package.ts'),
        u = o('./src/pages/home/PackageList/Help/index.ts'),
        g = o('./src/pages/home/PackageList/Package/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        C = new i.CellMeasurerCache({ fixedWidth: !0, defaultHeight: 100 }),
        A = function (e) {
          var t = e.packages,
            o = function (e) {
              var o = e.index,
                a = e.key,
                n = e.parent,
                l = e.style,
                s = t[o],
                u = s.name,
                p = s.version,
                m = s.description,
                A = s.time,
                I = s.keywords,
                f = s.dist,
                b = s.homepage,
                v = s.bugs,
                h = s.author,
                L = s.license,
                j = (0, c.formatLicense)(L);
              return r.createElement(
                i.CellMeasurer,
                { cache: C, columnIndex: 0, key: a, parent: n, rowIndex: o },
                r.createElement(
                  'div',
                  { style: l },
                  0 !== o && r.createElement(d.default, null),
                  r.createElement(g.default, {
                    author: h,
                    bugs: v,
                    description: m,
                    dist: f,
                    homepage: b,
                    keywords: I,
                    license: j,
                    name: u,
                    time: A,
                    version: p,
                  })
                )
              );
            };
          return 0 === t.length
            ? r.createElement(u.default, null)
            : r.createElement(s.WindowScroller, null, function (e) {
                var a = e.height,
                  i = e.isScrolling,
                  s = e.scrollTop,
                  d = e.onChildScroll;
                return r.createElement(n.AutoSizer, { disableHeight: !0 }, function (e) {
                  var n = e.width;
                  return r.createElement(l.List, {
                    autoHeight: !0,
                    deferredMeasurementCache: C,
                    height: a,
                    isScrolling: i,
                    onScroll: d,
                    overscanRowCount: 3,
                    rowCount: t.length,
                    rowHeight: C.rowHeight,
                    rowRenderer: o,
                    scrollTop: s,
                    width: n,
                  });
                });
              });
        };
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          C,
          'cache',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/PackageList.tsx'
        ),
        p.register(
          A,
          'PackageList',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/PackageList.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/home/PackageList/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { PackageList: () => a.PackageList });
      var a = o('./src/pages/home/PackageList/PackageList.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/pages/home/Home.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/providers/API/api.ts': (module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          handleResponseType: () => handleResponseType,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/createClass.js'
        ),
        _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./types/index.ts'),
        _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './src/providers/API/storage.ts'
        ),
        enterModule;
      function ownKeys(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(o), !0).forEach(function (t) {
                (0,
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : ownKeys(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (module = __webpack_require__.hmd(module)),
        (enterModule =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0),
        enterModule && enterModule(module);
      var __signature__ =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            };
      function handleResponseType(e) {
        if (e.headers) {
          var t = e.headers.get('Content-Type');
          if (null != t && t.includes('application/pdf')) return Promise.all([e.ok, e.blob()]);
          if (null != t && t.includes('application/json')) return Promise.all([e.ok, e.json()]);
          if (null != t && t.includes('text/')) return Promise.all([e.ok, e.text()]);
          if (e.url && !0 === e.url.endsWith('.tgz')) return Promise.all([e.ok, e.blob()]);
        }
        return Promise.all([e.ok, e.text()]);
      }
      var AuthHeader = 'Authorization',
        API = (function () {
          function API() {
            (0, _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(
              this,
              API
            );
          }
          return (
            (0, _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(API, [
              {
                key: 'request',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'GET',
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : { headers: {} },
                    a = _storage__WEBPACK_IMPORTED_MODULE_4__.default.getItem('token'),
                    r = new Headers(o.headers);
                  return (
                    a &&
                      !1 === r.has(AuthHeader) &&
                      (r.set(AuthHeader, 'Bearer '.concat(a)), (o.headers = r)),
                    r.set('x-client', 'verdaccio-ui'),
                    new Promise(function (a, r) {
                      fetch(e, _objectSpread({ method: t, credentials: 'same-origin' }, o))
                        .then(handleResponseType)
                        .then(function (e) {
                          e[0] ? a(e[1]) : (console.error(e), r(new Error('something went wrong')));
                        })
                        .catch(function (e) {
                          r(e);
                        });
                    })
                  );
                },
              },
              {
                key: '__reactstandin__regenerateByEval',
                value: function __reactstandin__regenerateByEval(key, code) {
                  this[key] = eval(code);
                },
              },
            ]),
            API
          );
        })(),
        _default = new API();
      const __WEBPACK_DEFAULT_EXPORT__ = _default;
      var reactHotLoader, leaveModule;
      (reactHotLoader =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0),
        reactHotLoader &&
          (reactHotLoader.register(
            handleResponseType,
            'handleResponseType',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/api.ts'
          ),
          reactHotLoader.register(
            AuthHeader,
            'AuthHeader',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/api.ts'
          ),
          reactHotLoader.register(
            API,
            'API',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/api.ts'
          ),
          reactHotLoader.register(
            _default,
            'default',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/api.ts'
          )),
        (leaveModule =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0),
        leaveModule && leaveModule(module);
    },
    './src/providers/API/storage.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a,
        r = o(
          '../../../node_modules/.pnpm/localstorage-memory@1.0.3/node_modules/localstorage-memory/lib/localstorage-memory.js'
        ),
        n = o.n(r);
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var i;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      try {
        localStorage.setItem('__TEST__', ''),
          localStorage.removeItem('__TEST__'),
          (i = localStorage);
      } catch (e) {
        i = n();
      }
      var l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'storage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/storage.ts'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/storage.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/providers/config/AppConfigurationProvider.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => I, useConfig: () => v });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        i = o.n(n),
        l = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        s = o.n(l),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        c = o('./src/utils/colors.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = {
          configOptions: {
            primaryColor: c.PRIMARY_COLOR,
            darkMode: !1,
            pkgManagers: ['yarn', 'pnpm', 'npm'],
            scope: '',
            base: '',
            login: !0,
            url_prefix: '',
            title: 'Verdaccio',
          },
          setConfigOptions: function () {},
        };
      function p() {
        var e,
          t,
          o =
            null !==
              (e =
                null === (t = window) || void 0 === t
                  ? void 0
                  : t.__VERDACCIO_BASENAME_UI_OPTIONS) && void 0 !== e
              ? e
              : g.configOptions;
        return (
          (s()(o.primaryColor) || i()(o.primaryColor)) && (o.primaryColor = c.PRIMARY_COLOR), o
        );
      }
      var m = (0, d.createContext)(g),
        C = function (e) {
          var t = e.children,
            o = (0, d.useState)(p()),
            a = (0, r.default)(o, 2),
            n = a[0],
            i = a[1],
            l = (0, d.useMemo)(
              function () {
                return { configOptions: n, setConfigOptions: i };
              },
              [n]
            );
          return d.createElement(m.Provider, { value: l }, t);
        };
      u(C, 'useState{[configOptions, setConfigOptions](getConfiguration())}\nuseMemo{value}');
      var A = C;
      const I = A;
      var f,
        b,
        v = function () {
          return (0, d.useContext)(m);
        };
      u(v, 'useContext{}'),
        (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (f.register(
            g,
            'defaultValues',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          f.register(
            p,
            'getConfiguration',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          f.register(
            m,
            'AppConfigurationContext',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          f.register(
            C,
            'AppConfigurationProvider',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          f.register(
            v,
            'useConfig',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          f.register(
            A,
            'default',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/providers/config/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default, useConfig: () => a.useConfig });
      var a = o('./src/providers/config/AppConfigurationProvider.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/store/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { store: () => a.store });
      var a = o('./src/store/store.ts');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/store/models/configuration.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { configuration: () => f });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = o.n(n),
        l = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        s = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        d = o.n(s),
        c = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        u = o.n(c),
        g = o('./src/utils/colors.ts'),
        p = o('./src/providers/API/api.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var m = {
        primaryColor: g.PRIMARY_COLOR,
        darkMode: !1,
        pkgManagers: ['yarn', 'pnpm', 'npm'],
        scope: '',
        base: '',
        login: !0,
        url_prefix: '',
        title: 'Verdaccio',
      };
      function C() {
        var e,
          t,
          o =
            null !==
              (e =
                null === (t = window) || void 0 === t
                  ? void 0
                  : t.__VERDACCIO_BASENAME_UI_OPTIONS) && void 0 !== e
              ? e
              : m;
        return (
          (u()(o.primaryColor) || d()(o.primaryColor)) && (o.primaryColor = g.PRIMARY_COLOR), o
        );
      }
      var A,
        I,
        f = (0, l.createModel)()({
          state: { config: C() },
          effects: function (e) {
            return {
              getPackages: function () {
                return (0, r.default)(
                  i().mark(function t() {
                    var o;
                    return i().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), p.default.request('/-/verdaccio/packages', 'GET');
                          case 2:
                            (o = t.sent), e.packages.savePackages(o);
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            };
          },
        });
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          m,
          'defaultValues',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        ),
        A.register(
          C,
          'getConfiguration',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        ),
        A.register(
          f,
          'configuration',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/store/models/download.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { download: () => p });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = o.n(i),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        d = o('./src/providers/API/api.ts'),
        c = o('./src/utils/url.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var u,
        g,
        p = (0, s.createModel)()({
          state: {},
          reducers: {},
          effects: function () {
            return {
              getTarball: function (e) {
                return (0, n.default)(
                  l().mark(function t() {
                    var o, a, n;
                    return l().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (o = e.link),
                                (t.prev = 1),
                                (t.next = 4),
                                d.default.request(o, 'GET', {
                                  headers: (0, r.default)(
                                    {},
                                    'accept',
                                    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
                                  ),
                                  credentials: 'include',
                                })
                              );
                            case 4:
                              (a = t.sent),
                                (n = (0, c.extractFileName)(o)),
                                (0, c.downloadFile)(a, n),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(1)),
                                console.error('error on download', t.t0);
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 9]]
                    );
                  })
                )();
              },
            };
          },
        });
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        u.register(
          p,
          'download',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/download.ts'
        ),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/store/models/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { models: () => g });
      var a,
        r = o('./src/store/models/configuration.ts'),
        n = o('./src/store/models/download.ts'),
        i = o('./src/store/models/login.ts'),
        l = o('./src/store/models/manifest.ts'),
        s = o('./src/store/models/packages.ts'),
        d = o('./src/store/models/search.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c,
        u,
        g = {
          packages: s.packages,
          configuration: r.configuration,
          search: d.search,
          download: n.download,
          login: i.login,
          manifest: l.manifest,
        };
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        c.register(
          g,
          'models',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/index.ts'
        ),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/store/models/login.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { login: () => v });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = o.n(i),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        c = o('./src/lib/constants.ts'),
        u = o('./src/providers/API/api.ts'),
        g = o('./src/utils/storage.ts');
      function p(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(o), !0).forEach(function (t) {
                (0, n.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : p(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var C,
        A,
        I = g.default.getItem('token'),
        f = g.default.getItem('username'),
        b = { token: I, username: f },
        v = (0, s.createModel)()({
          state: { username: b.username, token: b.token },
          reducers: {
            logOutUser: function (e) {
              return (
                g.default.removeItem('username'),
                g.default.removeItem('token'),
                m(m({}, e), {}, { username: null, token: null })
              );
            },
            addError: function (e, t) {
              return m(m({}, e), {}, { error: t });
            },
            clearError: function (e) {
              return m(m({}, e), {}, { error: void 0 });
            },
            logInUser: function (e, t) {
              return (
                g.default.setItem('username', t.username),
                g.default.setItem('token', t.token),
                m(m({}, e), {}, { token: t.token, username: t.username })
              );
            },
          },
          effects: function (e) {
            return {
              getUser: function (t, o) {
                return (0, r.default)(
                  l().mark(function a() {
                    var r, n, i, s;
                    return l().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = t.username),
                                (n = t.password),
                                (i = o.configuration.config.base),
                                (a.prev = 2),
                                (a.next = 5),
                                u.default.request(''.concat(i, '-/verdaccio/login'), 'POST', {
                                  body: JSON.stringify({ username: r, password: n }),
                                  headers: {
                                    Accept: c.HEADERS.JSON,
                                    'Content-Type': c.HEADERS.JSON,
                                  },
                                })
                              );
                            case 5:
                              (s = a.sent),
                                e.login.logInUser(s),
                                e.packages.getPackages(),
                                (a.next = 13);
                              break;
                            case 10:
                              (a.prev = 10),
                                (a.t0 = a.catch(2)),
                                e.login.addError({
                                  type: 'error',
                                  description: d.default.t('form-validation.unable-to-sign-in'),
                                });
                            case 13:
                            case 'end':
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[2, 10]]
                    );
                  })
                )();
              },
            };
          },
        });
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          I,
          'token',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        C.register(
          f,
          'username',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        C.register(
          b,
          'defaultUserState',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        C.register(
          v,
          'login',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/store/models/manifest.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { manifest: () => C });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = o.n(i),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        d = o('./src/providers/API/api.ts');
      function c(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(o), !0).forEach(function (t) {
                (0, n.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : c(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function g(e, t) {
        return !t || void 0 === t || (!!e.versions && Object.keys(e.versions).includes(t));
      }
      var p,
        m,
        C = (0, s.createModel)()({
          state: {},
          reducers: {
            notFound: function (e) {
              return u(
                u({}, e),
                {},
                {
                  hasNotBeenFound: !0,
                  manifest: void 0,
                  packageName: void 0,
                  packageVersion: void 0,
                  readme: void 0,
                }
              );
            },
            clearError: function (e) {
              return u(u({}, e), {}, { isError: null });
            },
            isError: function (e) {
              return u(
                u({}, e),
                {},
                {
                  isError: !0,
                  hasNotBeenFound: !1,
                  manifest: void 0,
                  packageName: void 0,
                  packageVersion: void 0,
                  readme: void 0,
                }
              );
            },
            saveManifest: function (e, t) {
              var o = t.packageName,
                a = t.packageVersion,
                r = t.manifest,
                n = t.readme;
              return u(
                u({}, e),
                {},
                { manifest: r, packageName: o, packageVersion: a, readme: n, hasNotBeenFound: !1 }
              );
            },
          },
          effects: function (e) {
            return {
              getManifest: function (t, o) {
                return (0, r.default)(
                  l().mark(function a() {
                    var r, n, i, s, c;
                    return l().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((r = t.packageName),
                                (n = t.packageVersion),
                                (i = o.configuration.config.base),
                                (a.prev = 2),
                                g(r, n))
                              ) {
                                a.next = 5;
                                break;
                              }
                              throw new Error('not found');
                            case 5:
                              return (
                                (a.next = 7),
                                d.default.request(
                                  ''
                                    .concat(i, '-/verdaccio/sidebar/')
                                    .concat(r)
                                    .concat(n ? '?v='.concat(n) : '')
                                )
                              );
                            case 7:
                              return (
                                (s = a.sent),
                                (a.next = 10),
                                d.default.request(
                                  ''
                                    .concat(i, '-/verdaccio/package/readme/')
                                    .concat(r)
                                    .concat(n ? '?v='.concat(n) : ''),
                                  'GET'
                                )
                              );
                            case 10:
                              (c = a.sent),
                                e.manifest.saveManifest({
                                  packageName: r,
                                  packageVersion: n,
                                  manifest: s,
                                  readme: c,
                                }),
                                (a.next = 17);
                              break;
                            case 14:
                              (a.prev = 14), (a.t0 = a.catch(2)), e.manifest.notFound();
                            case 17:
                            case 'end':
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[2, 14]]
                    );
                  })
                )();
              },
            };
          },
        });
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          g,
          'isPackageVersionValid',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/manifest.ts'
        ),
        p.register(
          C,
          'manifest',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/manifest.ts'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/store/models/packages.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { packages: () => m });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = o.n(i),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        d = o('./src/providers/API/api.ts');
      function c(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(o), !0).forEach(function (t) {
                (0, n.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : c(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var g,
        p,
        m = (0, s.createModel)()({
          state: { response: [] },
          reducers: {
            savePackages: function (e, t) {
              return u(u({}, e), {}, { response: t });
            },
          },
          effects: function (e) {
            return {
              getPackages: function (t, o) {
                return (0, r.default)(
                  l().mark(function t() {
                    var a, r;
                    return l().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = o.configuration.config.base),
                                (t.prev = 1),
                                (t.next = 4),
                                d.default.request(''.concat(a, '-/verdaccio/packages'), 'GET')
                              );
                            case 4:
                              (r = t.sent), e.packages.savePackages(r), (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                console.error({
                                  title: 'Warning',
                                  message: 'Unable to load package list: '.concat(t.t0.message),
                                });
                            case 11:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 8]]
                    );
                  })
                )();
              },
            };
          },
        });
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        g.register(
          m,
          'packages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/packages.ts'
        ),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/store/models/search.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { search: () => A });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        s = o.n(l),
        d = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        c = o('./src/providers/API/api.ts');
      function u(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, a);
        }
        return o;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(o), !0).forEach(function (t) {
                (0, i.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : u(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        C = { API_DELAY: 300, ABORT_ERROR: 'AbortError' },
        A = (0, d.createModel)()({
          state: { suggestions: [], controller: [] },
          reducers: {
            clearRequestQueue: function (e) {
              return (
                e.controller.forEach(function (e) {
                  return e.abort();
                }),
                g(g({}, e), {}, { controller: [] })
              );
            },
            addControllerToQueue: function (e, t) {
              var o = t.controller,
                a = e.controller;
              return g(g({}, e), {}, { controller: [].concat((0, n.default)(a), [o]) });
            },
            setError: function (e) {
              return g(g({}, e), {}, { isError: !0 });
            },
            saveSearch: function (e, t) {
              var o = t.suggestions;
              return g(g({}, e), {}, { suggestions: o, isError: null });
            },
          },
          effects: function (e) {
            return {
              getSuggestions: function (t, o) {
                return (0, r.default)(
                  s().mark(function a() {
                    var r, n, i, l, d;
                    return s().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = t.value),
                                (n = o.configuration.config.base),
                                (a.prev = 2),
                                (i = new window.AbortController()),
                                e.search.addControllerToQueue({ controller: i }),
                                (l = i.signal),
                                (a.next = 8),
                                c.default.request(
                                  ''.concat(n, '-/verdaccio/search/').concat(encodeURIComponent(r)),
                                  'GET',
                                  { signal: l, headers: {} }
                                )
                              );
                            case 8:
                              (d = a.sent), e.search.saveSearch({ suggestions: d }), (a.next = 15);
                              break;
                            case 12:
                              (a.prev = 12),
                                (a.t0 = a.catch(2)),
                                a.t0.name === C.ABORT_ERROR
                                  ? e.search.saveSearch({ suggestions: [] })
                                  : e.search.setError();
                            case 15:
                            case 'end':
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[2, 12]]
                    );
                  })
                )();
              },
            };
          },
        });
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          C,
          'CONSTANTS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/search.ts'
        ),
        p.register(
          A,
          'search',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/search.ts'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/store/store.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { store: () => d });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@rematch+core@2.1.1_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@rematch+loading@2.1.1_@rematch+core@2.1.1/node_modules/@rematch/loading/dist/loading.esm.js'
        ),
        i = o('./src/store/models/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        s,
        d = (0, r.init)({ models: i.models, plugins: [(0, n.default)()] });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        l.register(
          d,
          'store',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/store.ts'
        ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/utils/cli-utils.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, {
          copyToClipBoardUtility: () => i,
          getCLISetConfigRegistry: () => l,
          getCLISetRegistry: () => s,
          getCLIChangePassword: () => d,
        }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = function (e) {
          return function (t) {
            t.preventDefault();
            var o = document.createElement('div');
            if (((o.innerText = e), document.body)) {
              document.body.appendChild(o);
              var a = document.createRange(),
                r = window.getSelection();
              a.selectNodeContents(o),
                r.removeAllRanges(),
                r.addRange(a),
                document.execCommand('copy'),
                document.body.removeChild(o);
            }
          };
        };
      function l(e, t, o) {
        return ''
          .concat(e, ' ')
          .concat(t)
          .concat('' !== t ? ':' : '', 'registry ')
          .concat(o);
      }
      function s(e, t) {
        return ''.concat(e, ' --registry ').concat(t);
      }
      function d(e, t) {
        return ''.concat(e, ' profile set password --registry ').concat(t);
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'copyToClipBoardUtility',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        r.register(
          l,
          'getCLISetConfigRegistry',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        r.register(
          s,
          'getCLISetRegistry',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        r.register(
          d,
          'getCLIChangePassword',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/utils/colors.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { PRIMARY_COLOR: () => i }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = '#4b5e40';
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          i,
          'PRIMARY_COLOR',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/colors.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/utils/constants.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { NODE_MANAGER: () => i }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        i = { npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' };
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          i,
          'NODE_MANAGER',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/constants.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/utils/file-size.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { default: () => i }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var r, n;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function i(e, t, o, a, r) {
        return (
          ((t = Math), (o = t.log), 1e3, (r = (o(e) / o(1e3)) | 0), e / t.pow(1e3, r)).toFixed(2) +
          ' ' +
          (r ? 'kMGTPEZY'[--r] + 'B' : 'Bytes')
        );
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          i,
          'fileSizeSI',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/file-size.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/utils/package.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          TIMEFORMAT: () => C,
          formatLicense: () => A,
          formatRepository: () => I,
          formatDate: () => f,
          formatDateDistance: () => b,
          getLastUpdatedPackageTime: () => v,
          getRecentReleases: () => h,
          getAuthorName: () => L,
        });
      var a,
        r = o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/dayjs.min.js'),
        n = o.n(r),
        i = o(
          '../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/localizedFormat.js'
        ),
        l = o.n(i),
        s = o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/relativeTime.js'),
        d = o.n(s),
        c = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        u = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js'),
        g = o.n(u);
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        C = 'L LTS';
      function A(e) {
        return g()(e) ? e : null != e && e.type ? e.type : void 0;
      }
      function I(e) {
        return g()(e) ? e : null != e && e.url ? e.url : null;
      }
      function f(e) {
        return n()(new Date(e)).format(C);
      }
      function b(e) {
        return n()(new Date(e)).fromNow();
      }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = 0;
        return (
          Object.keys(e).forEach(function (o) {
            var a = e[o];
            a.fetched > t && (t = a.fetched);
          }),
          t ? f(t) : ''
        );
      }
      function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object.keys(e).map(function (t) {
            return { version: t, time: f(e[t]) };
          });
        return t.slice(t.length - 3, t.length).reverse();
      }
      function L(e) {
        return e
          ? 'anonymous' === e.toLowerCase()
            ? c.default.t('author-anonymous')
            : e
          : c.default.t('author-unknown');
      }
      n().extend(d()),
        n().extend(l()),
        (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (p.register(
            C,
            'TIMEFORMAT',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            A,
            'formatLicense',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            I,
            'formatRepository',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            f,
            'formatDate',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            b,
            'formatDateDistance',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            v,
            'getLastUpdatedPackageTime',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            h,
            'getRecentReleases',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            L,
            'getAuthorName',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/utils/sec-utils.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { preventXSS: () => s });
      var a,
        r = o('../../../node_modules/.pnpm/xss@1.0.10/node_modules/xss/lib/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        i,
        l = {
          onIgnoreTagAttr: function (e, t, o) {
            if (e.match(/^h[0-9]$/) && 'id' === t)
              return t + '="' + (0, r.escapeAttrValue)(o) + '"';
          },
        };
      function s(e) {
        return (0, r.filterXSS)(e, l);
      }
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          l,
          'xssOpts',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/sec-utils.ts'
        ),
        n.register(
          s,
          'preventXSS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/sec-utils.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/utils/storage.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a,
        r = o(
          '../../../node_modules/.pnpm/localstorage-memory@1.0.3/node_modules/localstorage-memory/lib/localstorage-memory.js'
        ),
        n = o.n(r);
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var i;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      try {
        localStorage.setItem('__TEST__', ''),
          localStorage.removeItem('__TEST__'),
          (i = localStorage);
      } catch (e) {
        i = n();
      }
      var l = i;
      const s = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'storage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/storage.ts'
        ),
        d.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/storage.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/utils/url.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          isURL: () => c,
          isEmail: () => u,
          extractFileName: () => g,
          downloadFile: () => m,
        });
      var a,
        r = o('../../../node_modules/.pnpm/validator@13.6.0/node_modules/validator/lib/isEmail.js'),
        n = o.n(r),
        i = o('../../../node_modules/.pnpm/validator@13.6.0/node_modules/validator/lib/isURL.js'),
        l = o.n(i);
      o('./types/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s, d;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function c(e) {
        return l()(e || '', {
          protocols: ['http', 'https', 'git+https'],
          require_protocol: !0,
          require_tld: !1,
        });
      }
      function u(e) {
        return n()(e || '');
      }
      function g(e) {
        return e.substring(e.lastIndexOf('/') + 1);
      }
      function p(e, t) {
        var o = e;
        return (o.lastModified = Date.now()), (o.name = t), o;
      }
      function m(e, t) {
        var o;
        o = navigator.msSaveBlob
          ? p(new Blob([e], { type: 'application/octet-stream' }), t)
          : new File([e], t, { type: 'application/octet-stream', lastModified: Date.now() });
        var a = URL.createObjectURL(o),
          r = document.createElement('a');
        (r.href = a),
          (r.download = t),
          document.documentElement.appendChild(r),
          r.click(),
          setTimeout(function () {
            URL.revokeObjectURL(a), document.documentElement.removeChild(r);
          }, 150);
      }
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          c,
          'isURL',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        s.register(
          u,
          'isEmail',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        s.register(
          g,
          'extractFileName',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        s.register(
          p,
          'blobToFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        s.register(
          m,
          'downloadFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/utils/windows.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { goToVerdaccioWebsite: () => i }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var r, n;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function i() {
        window.open('https://verdaccio.org', '_blank');
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          i,
          'goToVerdaccioWebsite',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/windows.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './types/index.ts': (e, t, o) => {
      'use strict';
      o.r(t);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/i18n/download_translations sync recursive ^\\.\\/.*\\/ui\\.json$': (e) => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      (t.keys = () => []),
        (t.resolve = t),
        (t.id = './src/i18n/download_translations sync recursive ^\\.\\/.*\\/ui\\.json$'),
        (e.exports = t);
    },
    './src/components/Logo/img/logo-black-and-white.svg': (e) => {
      'use strict';
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGZpbHRlciB4PSItMTkuOCUiIHk9Ii0xMS43JSIgd2lkdGg9IjEzOS42JSIgaGVpZ2h0PSIxNDAuNCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImEiPjxmZU9mZnNldCBkeT0iNCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkwNjY0NjI4NiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIvPjwvZmlsdGVyPjxmaWx0ZXIgeD0iLTMzLjklIiB5PSItNTAlIiB3aWR0aD0iMTY3LjklIiBoZWlnaHQ9IjI3Mi43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYyI+PGZlT2Zmc2V0IGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkwNjY0NjI4NiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIvPjwvZmlsdGVyPjxwYXRoIGlkPSJiIiBkPSJNNDggMTYuNzI5TDMyLjY3MiA0N2gtOC44NzRMMCAwaDE1LjMyOGwxMi45MDcgMjUuNDkyIDQuNDM3LTguNzYzSDQ4eiIvPjxwYXRoIGQ9Ik0zNS4yIDExSDI4VjguNjQzaDguNGwxLjItMi4zNTdIMzJWMy45MjloNi44bC44LTEuNTcySDM2VjBoMjBsLTUuNiAxMUgzNS4yeiIgaWQ9ImQiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjMDAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjM3Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIgMzApIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGwtb3BhY2l0eT0iLjYiIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyIDMwKSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYykiIHhsaW5rOmhyZWY9IiNkIi8+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjZCIvPjwvZz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNTQuNzg1IDc3SDQ1Ljg4TDIyIDMwaDE1LjM4TDU4IDcwLjcxOHoiLz48L2c+PC9zdmc+';
    },
    './src/components/Logo/img/logo.svg': (e) => {
      'use strict';
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9InZlcmRhY2NpbyI+PFRpdGxlPlZlcmRhY2NpbzwvVGl0bGU+PGRlZnM+PHBhdGggaWQ9ImIiIGQ9Ik00OCAxNy42TDMyLjggNDhIMjRMLjQuOGgxNS4ybDEyLjggMjUuNiA0LjQtOC44SDQ4eiIvPjxmaWx0ZXIgeD0iLTIwJSIgeT0iLTExLjclIiB3aWR0aD0iMTM5LjklIiBoZWlnaHQ9IjE0MC4zJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+PGZlT2Zmc2V0IGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOTA2NjQ2Mjg2IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PHBhdGggaWQ9ImQiIGQ9Ik01MC44IDEySDM1LjZMNDEuMi44aDE1LjJMNTAuOCAxMnoiLz48ZmlsdGVyIHg9Ii00NS43JSIgeT0iLTQ5LjElIiB3aWR0aD0iMTkxLjMlIiBoZWlnaHQ9IjI2OS42JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYyI+PGZlT2Zmc2V0IGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOTA2NjQ2Mjg2IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0Y3RjhGNiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIzNyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyIDI5KSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggc3Ryb2tlPSIjNDA1MjM2IiBzdHJva2Utd2lkdGg9IjIuNCIgZD0iTTQ2LjA1OCAxOC44SDMzLjU0MkwyOC40IDI5LjA4MyAxNC44NTggMkgyLjM0MmwyMi40IDQ0LjhoNy4zMTZsMTQtMjh6IiBzdHJva2UtbGluZWpvaW49InNxdWFyZSIgZmlsbD0iIzQwNTIzNiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMiAyOSkiPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjZCIvPjxwYXRoIHN0cm9rZT0iI0NENDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjQiIGQ9Ik01MC4wNTggMTAuOGw0LjQtOC44SDQxLjk0MmwtNC40IDguOGgxMi41MTZ6IiBzdHJva2UtbGluZWpvaW49InNxdWFyZSIgZmlsbD0iI0NENDAwMCIvPjwvZz48cGF0aCBkPSJNNTQuMDYgNzUuOGwyLjU3NS01LjExMkwzNi44NTcgMzFIMjQuMzQybDIyLjQgNDQuOGg3LjMxOXoiIHN0cm9rZT0iIzQwNTIzNiIgc3Ryb2tlLXdpZHRoPSIyLjQiIGZpbGw9IiM0QTVFM0YiLz48cGF0aCBkPSJNNTkuNiAzMWgxNS4yMjFNNTUuNiAzNWgxNS4yMjFNNTEuNiAzOS44aDE1LjIyMSIgc3Ryb2tlPSIjQ0Q0MDAwIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4K';
    },
    './src/components/NotFound/img/package.svg': (e) => {
      'use strict';
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTUuMiA0OTUuMiI+PHBhdGggZmlsbD0iI2QzOGMwZCIgZD0iTTMyNS42IDIyNC40TDQ5NS4yIDEyNiAzMjUuNiAyOC40bC0xNjguOCA5OS4yeiIvPjxnIGZpbGw9IiNlZmJiNjciPjxwYXRoIGQ9Ik0xNzAuNCAyMjQuNGwxNjgtOTcuNi0xNjgtOTguNEwwIDEyNi44eiIvPjxwYXRoIGQ9Ik00MTYgMzY4LjRsLTE2OCA5OC40LTE2OC05OC40di0xOTZMMjQ4IDc0bDE2OCA5OC40eiIvPjwvZz48cGF0aCBmaWxsPSIjZDM4YzBkIiBkPSJNMjQ4IDc0bDE2OCA5OC40djE5NmwtMTY4IDk4LjQiLz48cGF0aCBmaWxsPSIjZWZiYjY3IiBkPSJNMzI2LjQgMzE0LjhMNDk1LjIgMjE4bC0xNjkuNi05OC40TDE1NiAyMTh6Ii8+PHBhdGggZmlsbD0iI2QzOGMwZCIgZD0iTTE3MC40IDMxNi40bDE2OC44LTk5LjItMTY4LjgtOTcuNkwwIDIxOHoiLz48cGF0aCBmaWxsPSIjNzA0YTBlIiBkPSJNMjQ4LjggMjcwLjhMNDE2IDE3Mi40IDI0OC44IDc0IDc4LjQgMTcyLjR6Ii8+PHBhdGggZmlsbD0iIzUxMzMwNyIgZD0iTTI0OC44IDI3MC44TDQxNiAxNzIuNCAyNDguOCA3NCIvPjxwYXRoIGZpbGw9IiMyZDFjMDUiIGQ9Ik0yNDguOCAyNzAuOGwzNi0yMS42LTM2LTIwLjgtMzYgMjAuOHoiLz48ZyBmaWxsPSIjMGRkMzk2Ij48cGF0aCBkPSJNMzY4IDM3OS42bDQwLTIzLjJ2LTEyLjhsLTQwIDIzLjJ6TTM2OCAzNTYuNGw0MC0yMy4ydi0xMi44bC00MCAyMy4yek0zNjggMzMzLjJsNDAtMjMuMnYtMTMuNmwtNDAgMjR6Ii8+PC9nPjwvc3ZnPg==';
    },
    './src/pages/Version/DetailSidebar/Engines/img/node.png': (e) => {
      'use strict';
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAEACAYAAACqHnrXAAAACXBIWXMAABZ0AAAWdAEtIJO3AAA6J2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTctMDctMTFUMTI6NTM6MzYtMDQ6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0xMi0xMVQxMToyODozMy0wNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTctMTItMTFUMTE6Mjg6MzMtMDU6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDplZTBkZTJmMC0xMmEwLTRjOGEtYjg5OC03YzI4OTk5ZTg0MDI8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZDI4Y2U0Mi0xZjFlLTExN2ItOWUzYy05NWEyYTE2YTRmZGM8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo3NGQ0OGZlMS00YTNjLTRiMzMtOGJkYy0yNTIwNjhiNTQyMjA8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjc0ZDQ4ZmUxLTRhM2MtNGIzMy04YmRjLTI1MjA2OGI1NDIyMDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0xMi0xMVQxMToyODozMy0wNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmVlMGRlMmYwLTEyYTAtNGM4YS1iODk4LTdjMjg5OTllODQwMjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNy0xMi0xMVQxMToyODozMy0wNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+MTQ2MDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+MTQ2MDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjI0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+EXa2FQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAxAElEQVR42uy955Nc15Xg+Tv3ZRUKKPiCdwRQBAGQBL33IEVRlNSjjtEqWhET+2m/7M78PRszERuxMzHbo+6WJUWxSVGitxKNSIoUaEQLXyifPt+79+yHl5mVvny6uieCRKXPfO/+3vHniqoqXrx46YgYfwi8ePEAevHiAfTixYsH0IsXD6AXL148gF68eAC9ePHiAfTixQPoxYsXD6AXLx5AL168eAC9ePEAevHixQPoxYsH0IsXLx5AL148gF68ePEAevHiAfTixYsH0IsXD6AXL148gF68eAC9ePEAevHixQPoxYsH0IsXLx5AL176XRL+EHS/KIog5dtnJ79hIn2ZRCI+fc5BISywa9MeDo0cbvo6Lx5AL8uA76srn/P2N6/x9/EzTGYmCcQgCtY50pkcmzds59q9N3Dv1acZ3T2KIB7CLhfxuyN1v1yYusifvn2ev419QCo7gwhoFMOFAghhISJXCEFgy4atnNp3Gw+dfJS9W/f6A+gB9LJgjaeKSKyxwqjA61++xKtfPEde09jIYq0tQmdKKjL+x0E2myeyjiBhCEzA8LrNPHLicR44cZrBxLq69/fiAfRSYWqiICKoKh+df5/nP/8dV7LnMAhh3sbPKUKnJbNSS7chiizZbB4RQdSQGDQosG/LIR4/9Y/ceOjm8vsjeNPUA+gFwKnDSKzRvpn6kpc+fZYvpv6Kw+JCUKe4srnZAMAKgHO5kDCMYggxGCNIQggIuG7/TTx6/Q84PHK07nO9eADXtExMjfPmlZd57+tXKUQZnHOoi03LMmetACyeRmuVbLZQfkCQ2OQ0YMQwPLiRu699kPv3P8z2bSP+wHsA17bkwiwfnn+XFz57irSbwllFrWJRpAycLBhABQr5iLAQET9lztAUEcRAYAxbhnbw+KkfcfOR2xgaWO9PhAdwjfh5FUh8dPF93vzqD5xL/x3nIMpHZR+tGriFADj3Ceogl83jnIJUeHpFv09VGRgMEJPgyI5jPHLyMa7ff1OdL+rFA9iX4J2dPsvb5/7IRxffwUpIVLC4SCirPGXpABZvh1FEIVfSghWfXrxtFAgMwUDAAIPcfPQO7rv6Ua7afnBOo/pAjQew5+FThxQDHbP5Gd787EXevvQSeU2BAxcpiqIqlcQuAUCtADGGPp8LiUJH/PHVmrD0j4hBAsEIrB/YzP1HT3PfydNs2bC17vt78QD2pBRsgXe+eYO3vnmO8cJFAgwuUiiag/FCX1kAQYkiRz4bllOGUkne3D9lwILA4NSxe+s+Hj75PW676m4GE4P+BHoAe8vcVAVT9KHe/vZt3rvwEt/MfoyooFbLQAlSAdByAaw2QUt/5/MhNnRFCBtrwSKFccQUxSTi/OE1e67jjtGHuOOq24E4bVGOqnrxAHaznJv5luc/f5ILuc9I5ZK4CNTOVaGI1lSyrBKAqkouG+KcNjVFY/6kYlEQm6XGsGX9Fg5tu5rv3fgjDmw76E+sB7A7tV5pWSdTszz319/yd32P2dwENtRytYqolFd9WwAsPl4II8KCRZoEZMp/li4OpfuMIAJBELB14wgnN93E47f+BzZt3FT3u714ADsKX+hCPjz/Z1678ByX01/FAZZQ50xNOgegU8jnQpwtBWTqISyjV2eaglFBBgKMEfZtu4qHjj7KTUduYyAYiH+/Cp5DD2DHtN4XY2d47osn+Cr1EYEpBlhc5ULvHICl+23kyOctUkwvVKUYGviDtRCKGsQIJiGAY3T7Sb536h85tve414YewM6AdyU5zmvfPMm7428Q2ixqQZyUOSkB1x4A66OgZQCLd+bzEZF1pXgMVR5hw6BMbcCm+FtMbJ6uG9jA7Yfv4qHj32Pnpp0eRA9geyRVSPLnsy/x9qUXmQovYUOHODNnjtUA1y0AWufI56IasBbmD9YCW6ovTRjDyMbd3Hnkfu4avZ+NQ5v8AvEArrTOixeeU8e751/n9fPPcT75GSZhsPnSFb/4rErIENDGAKIm/quNACoQFixRZGugE6QWwFp/sOpxmTNhVQkGA1SVQ9tHuXf0NLcduZPAJIrasObFXjyAC8KupnH144uf8dq5J/g6/QEqlqhQ9POEImTUA9hlGjCuE1Xy+Qh1GkMnrYIyzU3RyttGBQIIEgGBBIzuuI77r3mM6/afaHo8vXgAFwTfxbGLvDL5HO+efQ5ZF8ZpBVtKpBdXYTMAW2jAtgZhKgBEIYoiwtA1NkWXAKFU6kZjGEgY1Ap3HH+IBw48wt5dezyEHsDFBVgyYZq3z7/CK+d/x0zhMgJxMr1Ks80DYBdqwDgtoYSFCGsVI80hbBUVbQphsaImCAyosnXTDh68+lFuP3oPGwaHfaDGA9gcv9Iyeu/SG7x29hm+Tn2EEYOLYni0xs9bjgbslA8Yv1Zx1lEo2AY+XuugTM2fLSEUwCQEh3J0x3Huu+YRbjl4e93x9gB6AeCLiU/4w0dP8HXwAaHL4yJFrKBSWbcpK6IBOw0gxYCMtW5eCOsAbBKUqTVbS/6hBkoiETAQDHJ4/Qkevfn7jO455hfcWgWwtj9vMjPOC18+w3szz2AHCuSTIYKJfRYqIFpBADvpA5Z+v7NKoRAtyrxc8HNrfEeR2IIY2riOhB3gtqse5MHjj7B9eHvDc+IBXAPwFaI8L3/5B96e/HeuhOcRpzgrxehmDNyyAGxrEGbxGlA1nqRmoxZacAEQSo292iq4IyIExoARRjbs4fYj9/HgNQ8zmBhckxCuGQBrc1J/Of8Wv//qF1yRz7BRvMixVNRurgCAXRqEqQQQ4hkypde3StIvSBO2em5F2kICAxL3IO4aPsCjJ3/ITYdvLatzZW2MxVhzGvB88hte+eop3ku9QKSFuGDazUEyp7HWhgYEsJElilwTH2/h/uCCaktrir9FhEQiIBEkuGnPXdx/8hH2bTvgNWC/yURmnFe/eY73Zp8lqZNEWYtUTZcuBUWkRzXg4n3A8vgKp4ShRZ02qH5ZQFR0Pgib5hkrytpQBtYl2Di4hRsP3sN9ow8ysnHEA9iT5mbleHcX8ta5V3jt0q8Zc19jQ8VZwMVrSMqgmTWrAVHFOkdUcA3bkZom6aVBoZksMKFffvnckwyCBEIwELBz/R7uufoxbj98e3ksRj8m8vsKwNoE78eXP+TFs7/g7+H7OBvFPXq2GAzQSkhWCcAe8QFLPpcNXbz3RKtAy0Jal5oGZRo9t/pJRuPZpWIEEyQ4suM4D1zzHa7be0PDC6wHsItim6UTfzF9nhe+fYK3x55DB0Jc5FAnFStY2gNgl5aiNQPQOSUqRDQuxG6m2RoXbTc2RZsBOHdDKj1PE/uHWLj16L08cOy77N2yt2FQzQPYBebmxOwkz3/8HH9LPMNkbixebG5uwVVelr0GrAcQICpqQWlY+bKE1qUFPFdqSK3VpmIMRmDr8AjHR27i9LXfZWTTSF9ow54FsMrPswXeu/A6r04+yfn8p0RZ5nYNkkY/zwPYCEAtfq4tRLiK47ug/sEaDdY6oV+jURv4g9WPmfJnDqxLsGfzQe656jQ3H76dgaC3/cOeBLDS1/vLpx/wtj7Jp9PvEkaFWONZnccy6UcAl2+Clt7DWcVGdpHpBmlQCdPaH6wHsOLdpMH7KGCEwAgDAwmu3nmKWw7ew02Hbm4YA/AArjB2lSdoLHWeF87+jj9P/B4X5LAFh9OFegT1ALY7DdENtaDNAAQIQxtPc2qo2Vr7g0spVVvMcxXFGMPAQIBoglsO3cOD13yHXZv3eA24GlK5j126kOT1s3/klbEnSLorqCouZG5fhSUC6E3QagCdU6Kw2C2xGFN0qVUyTaKiTaOrxZebhEEwDA9t5v7DD3Pn6AMMD22Mf5ZziDEewJUwNVWVty+8wWsXf8E3uc/iBVfcP09lsT/BAzgfgKUdd9Vqi3aklQjKNNOoC9CaxYuDERNP/jbCwU1XcdfoaW4/cnf5wtHNpmlPaMAvJs/wwtkn+Fv6LawtoE7jjSuXfEw7b4J2PYDFqdo2cnUBjnlL1WohXMwEtlptV/tcampEq1IXBpMQTGC4euQUp48/xuiu7m576moAx9IXeeXcM7wz8SwZl4w3r9SVyPz4IMxCAASw1sUDfZuYhU3Ny0X6g7URTJEm7zPPc1UUU+y4WDewgZsP3MW9xx5m16bdHsCFmptZm+HVT5/nT9O/Y0LOYiOFaCmmpgdwuQCqKlHooDLx3SBJX6/tFhloWUxwp+n7zj037rgQgoRh0+AINxy+m0dGv8P6deu7Km3RBQDOjSZQlI8vvssfvvk53yY+wuYULDi32CCLB3AlAVSNtzqTlj7eAvzBBXbRL7XutC6hr8RJfAODg4Ps2XyQ+44+zg0Hb6AyptrJapqOAVjbfPntzBe8+PWT/GX2RZyJ4nEQTlZQ63kAlwogxC1LpfsW5Q8ucZTFQvetaJxnlPpgkYHAGISAa3ffzIMnv8uh7YcbrsW+B7By19WJ1BXevPR7Xhv7dzJuKg6uNCwf6y8AVz4PuMoAqqLlzvmaaGaTIU0LiorOF+lcdFS0he+IYAIBEdYPbuLWq+7lnsMPMLJpR8fM0o5pwGyU4fUzr/LazK+YMudx1sUd6SsTZfFpiBUGUAFnXdwz2FK7rUKSfh6wGpuizQI48bmWIO7GHw62cde+09xz6n7WD2xYGxrwb1fe5/ff/oyLwSfkkiHOaptNcQ/gonzAOdMl7ixpZkIuZ57MYpL0DQI4TUveasbuz7113I1vAmFoeIhdA/u4/5rHObX/xv4FMGuzPHPmX3lz5ilCycVbJ5fnbbb1Z3sAlwqg06VrwSV00bfyBxesMWlSW1o6OwYSCYNIgtv23s/3bvlHhoKhtqzEttXpRK7ALz7677w49XPyLovNF7dQpjvSkNrnn7diC8ZIRYXJHPiVgMdnVasuGlp9dZh7rHINaO1j2uC5c1coVaouDpVrSSufW/3Rxddq+TLlnBIWHJENefPc8zz11s8p2EJ/AfjHL5/lnZnfIaqoZZWim8vRiV6WvGq02W2tf3w+g6vuvRaxTub5HtriBYrGZXcqvH35FV4/80L/AHhp9hJvTz6FBIpz3aP1vCzxYiVzJnr9Qm6u4rUGKq0yubXeBG9EVo1mq32uLsLmqOdVcc4RmIB3LrzOt5Pn+gPAT8b+yoXp8zjnwesbJRhIY3+VJkDoQgDVpgpMF2zIa3OFW/s+Wn/xKJnVZye+5dOLH/cHgO9+9j6ZyQBRvyfO6pm8bTyyRY0lZi4Souj8/mDVQteqRT8HqDYBVqueq7X+YI3vWAthM99Ra3xQUUEULk9P8dInr676oUy043ydufQRuZxhaBMMbiIe/e6lP64iLbpS4q3cKh6vTTWpVocntWTZ6lzUWVpkqJTixjkN3ru2Can8eIN3K44uEQQjwnQ6zeWZGXKFv/aHBsxGGayF9HgirnTxsgpesHYEQDGywCCLzhMoWcDPWEwAR+d5swafK0DkLBcmJwmtJROm+wNAAYyBfMqQmwkQA2siDiN9aoLWfGxtukErbLx50w1Fm1CbBWW0xnerMS/nnltj0jYK0Gj1s7TGbxURJpNJJlNJEiLx1tt9AaBQhi4zEWDDOPnp1VyPa8DS+TXS4Cto4yxEMx+PFs9dQFBGmz6gzb5W1XsaEXJhyIXpqWK9hbTliLYVAxNAmBGyk8Yn3vpM06s0AWJh1l9T81KbRDprgWwJqOq8qUpBGJudIZXLxtuntYuJdptiIpCbShBm14gW7Dp9tXpWji7YJdPGLlpt5UvlsxtERec7oK1yiZV/iBjS+RxXZqZpd4+uadtyEy067WBDyE4E8TH0mrB//F0p1Z42dLxaQtgQLKWhvdis/KzKH2zy2lpTVCRuj7s0NU0uDMvT9/pUAxZDTQZyswGFlKFbhhlrB9ZrvwaddD5TtImq1JYmo7YEqZmBWn0t0AaaW5jJZBhPzWA6sBhN+1ecIhJPNcuMB+Xdirpk7XhZ7oVMmlh8DSthdH6zteq1Ov8FU1t7opXvISqEkeXi1CTWuY7MiGmvBpTq/woZIT9d1IL9mJaQtXsJ0SYwNPLNdDmfscAgS22Ko5x2SCWZyWaK4yroUwAbrA8xse2QmQyI8oIEfUjgmix9VZy4xpqvYakadT5b+bk15WdVAZlWZmuD1qXa82KMkAsLXJqeqi8O70sAKzVg6WYAUV7ITZn6OLaXnhbXoN6wVXGKLuSipfP5g9o88aFVu0OiTrkyO02mkMN0cHx9m0xQba4NBbLThkJWkMAv3H4xo0sF1w1N0VZR0QbmZUtAtXUbYKPHjBHSuTxXkjPl4WD9DWAJQqmwHYraUAw4GyfntUsCMl5WxoyOtWB9ukFLLQlUNb4zX2qiNpjSMCjTsNdw7g9BiJzj8swU+SjqSOSzcyZoGTytui3FtEQ+6Stk+opdBdekJqZV42xDCFuZsQsCNv6/QZhJp5lIJwlM502uttWC1oFVqw2JAzIaeS3YNwCK4lQXpk3na1xoUvnS1B9sVPkiQmgjLs1MLce67k0NKA2CMJXaUASirJCd6Z7kvJflrVIhnnhn1TYGTZtpttaV2q38QVo8JiKMp2dJ5XMdNz074ANWpADrQFQw8bUsOxUQ5fqkTrQfLiS6/NdbVVRdk5RC89alxtPQWs+TURp30RtjyOULjM3O0E0bgrWvFhRtvDljVVpCsYU4KtoXOTQ/Aqfc4R4VAzLQqDJGF3TIFtS6VKc84657VWUsOU2uUGhrt0N3AFhndtb8KdXfKDcrFDJm7TTu9jPtxWHGzimuyTiE5mDpIoMwDSB0igGS2SyTqWRXbEnWMRO0KhVR7I4om6Y1aYnMlFnmLrgel276tYoSueLOOw1AUm3QKVtZL1rXnjR/fjCOLQjOOa4kpwltRLAmAZRmt6ujoGUfMYBCSsjN9m9AZm3FmeLhSFYV6xxVc9Hm7ftrFZSZZ75oTCBT6RRTmTSBCbruwtexWtA5+7PCP6zZoCM7bbARPiraN0grodN5ZitpEx+Pxj5ei/miglCIIsaS0117REzH10gT7SgCUU7IzRjPRM8btXNVmA5L5KKmPl3znJ8uuO+v8tGJ1CzpQr5rL+LtqwUVrbEzG/iHldrQxPdnZwxhr6YltA9ol5V8k3gEQqgOp4o0NUWpKV2r9iWbAVuZthARMoU846lkcSC0rGEAq0BsZIY2NkvFgAslTkv0cUBmrV1EVJXQ2vlN0XkS6438wdIycqqMJ6fJRyHGdO/C6UAQRlt3R9QGaYrzRPMZ6T1f0JugVO3DXXFfqJaoXCHTRAvSrPys2e25RttkNstUNt11Uc+OAFhV/SI1ZmmTbvm5bol4Q8jctMHZHgvIeBO0nAesfUtVpWCjeLPPCh9PGzbmNhpl0TjxLhJ3O4wnZ7DOdU3JWec1oCxCI9a+PIB8WsjPruE5hr16EWmy/kUgUkdYWSfa4CNbBVqa3Z5Kp0jmsiTEdH2+ta0ruorDht0Rrc3S7IxgQ5+W6CkTdJ49Ggo2quiYaNw5sdD5oiJCoVBgPDVTtyPTGgewpgm3qWZsHqQRgaggZGd7qGewH4Yyyeq+iVVHwUbzz6SYbwxasdl2Ip0kGxbaPt+zB0zQ6jSDNO2O0Mb+YTEtkZs1c1O1dcUvEW1TSj2zO5Ku7psIUHBhXKamUl9+VjuMCRo8Fnc7ZPI5JjOpuN6zRy7SHRrKpPUarpFGrO2gMOAsZKZXfnyFt2o7J06VvC3gms6FaQJhBY3WOa6kZght1PWBly4Jwmjd6m/YHVELocQBmUIvpiVWFXjp4h86/3cLnSWycYWMavPAS6NSNSNCMpdhJpfpKfg6owFrzdIGFTJls7QSVqmokCHWgtb6gEyvB2FKwRNVJW/DeZCrf1REiKxlPBk32ooHcCHg1T6ujTWi1L5+rkImzPu0RD9pwNK8lnylFtRGE3ip3uQdmMqkSYf5ntN+bdSA2qLapdYsXUjENNaI2SREBdb0Nmf9dQ0RclFYrBOV+sbcmi56g5ANQyYysz37k9u4dLVF7Wcr7dg4fygCNozTEuq75vvCMo73aI/IRfk516TFYCZFmcokyUdhz7oibQ7C1HfD1/p/ZZO0qnueqtRF5fPzaSHKyrI3eNHuXZe97QMu8rsJkItCwsiWtaBWlqoxt597Kp9jNpsqZqjEAzivd1JrRjY1RRuZpvUasZyWmJFlj6/wsZzuWZJOHdko33R6WWlvh4nMLKGzPZN076gGlIarXRfpH9aYoUUIC1npzm4JaSfwPR6EqXlN3kbkXVijRLX8lrO5DKlcFtMD9Z7d4QNKq1pQbTGyovJ28yBNZqbYLdGj/o+XuYNWGuibKWpBqeBPBEIbMZGe7YvD28bdkVr7cg1L0OYFca6szRYgl5TGgRwf7ejw11rMd5Py/8MoIhMW6k7odDZNNurNtENHNWAzX66hf7iY7vni39mkiTf7XJOaozeLsed7WTbKEzlbrO+MN9WczqYQ+iP31IFaUK2DSOYzPec9l/G+8y6CbFJ6gok1U4wtS/9AQbDOkg5zZYNnOpOOAy9G6IdLbaJ94FUc23KOR6qDNJWpn7htut6R1+YnVYySTwvrNgiDG7Tzg3213UGYLjRDdXkUiwi5KM9QYhBrLclCXO8pleuiydQ0rwGZL7CirTViXdpinohpcR+CzAw4q11dIbO28oDLE6dKqpBlMpvCqRZ9P6Gc/SsWD/eiRuyCkRQ0rAVtbpa2htAYmJmKmBqLOp+W6Ic0hKzE62VZH2gQClFI5KJyzk8qwjVStW58MfbCjq3M7x9Kq/xhgyCNGLBWSc4WGDsfUcjGQK4NDdilX1SX/4LSPYkgUTQ/pSqiHmM3pw2lh7Rh+zviW5WgVZmlWg1iy9TF3MvTqQJRpOSyjiuXwlYuY5/5gD00lnAJKlcBI5AIDJXICVKxPuZAlAoQuxlG07FVuaBoZ/2gpmYaUQyEBUc6FZueRoSpyxGZWde5bc6kbz+sY9/NYDDG1PT9zQUPpOLzpOohPxm7fiRFLYgttrCe3z9UksmQKNL46megUFDGL0TYTkVD+2EmzIp8LV2x3yEiBCU/UCo0XsXikIqF0e3+YXuKsWv9udq9AllMd0S1WYqCMUI2a8mmw6oussDA9HhEcsLGvqB2z/L1taBL/x3GCAZTbWqKlJEr35ZGpqp0lY/Ydg1YBqeZVlxQxLTyZMQph9RsiHOKmOp9sK2DsQsRYUGRoDcNuDWhAXXhv0MpNWFXL5ZKs7Ss/6ou/t2nEdtYC7pQV1vnp6NSGxrIpEPyWdtwEw5jIDVjuyMt4WVlroCl8UAV/p1UQlh1Da4p9qiNmHY4SNPGWlBtrA1p5f+1uF28CkahIzUTNr1wljTuxKWIXNp1bVrCy2JJlDmNV5GKoMIMnWOvNkhT8TkdDtK0NxFf68tVgFgfeKnpnq8NeBXvS82GhAXXsurFGMim44CMKlV+4tpUId3sAy5laTVJRVT6g2WTdJ60RZv9ww4m4rVeU7FADajFKGfekpld2GxCE8DkWERqxiKB+DkyXcu1LuuLitRrxErTVCo0onRBxNR09IQ2mA3TMEhTOy3NxMGV5HRIZHVBvp0xEIXK2PkIG2ofmqK6JokvTUirA0kaLLc6A7RxkEbaCKHp2DGuG9RE3QTsquoX5kxTEcilLdm0XTBIqhAkhNmpiJlJu+whTt2nPWTNXkhUtVyCVhlmKZmUpmGKouK+Cp+x6t42HFLTPRe85j5f1RXNgLWO1FQYtxst9mQ5YexcSCHvMIFXSqv+G5bYEb9Ysc5BuVOiUbBF6jyZ2inalT5iuy5q3WGIyfyPV07JziQt+ZxbUruRMZBJOiYuR31mMPaLCarLeKVWBRSkCi0pF25Tk7aQOjiFdm2w1D2e0HwjKYqBlCjvSE5F5V7eRX9MsUxt4nJIpoNpiTVTCbPo77b032E13l+pPCe0bkSQ1ARpqA7S1H4DWUsAtgRxLtCSmo6IQsUs4+AYA4Ws48r5MI6GSs9Q1u8xlWXqTsU5V2zObezzUeMfVqci6u9fewA2CtQUIcmlHalZi8jyzS0JhOmJiNlpG/sNuioroqeN2pX7WtqW3yEIVl0FhDVaTaQ+u1XVU1ijEdekBmwCo1MlORnGsz9XIDxlDESR4/K5PFGkYHxisB+cYlUlcnYudtAAwtqOibkYTbXeW9sasEpbQTZpya6gz6YKQSCkZi1T42HP7SvXWyakLOIpy/9Aqw7rXEUxttQ02khZG1bdK7QRvR4BMN4FSUlORKtSvaJOuXKhQD5nVz4g4/OAHbtehDZC1dX7d5W6r6ptqRSkKQVqxGvA0pFKTUUUcqtTvWICIZN2jF8KV/7K5/OAHROnrjjQt0rvzasRqypi1roPWIpWpqbd6vEt8TzR8csF0smoh+tE1X+3GgmdxVZtW11Z79koSFOpRduzx0HXAigS+2nJSUsUrt6MTy121Ieh4/KFPM72ap1ov4wlXEktqETFLa/LpmZlikEapB7qzNK1CGAx7ZBNxt0O7TAFgkCYmiwwPbGCARlp90Hzyq/28Ec2wjpbPaypos64eTJe2mKDdieAEm+8mZqy8YTrNi1kZ2HsUo4oXKFoq7Z7ufUDQCv7gU6Vgg2bmJaVzUlzEPZvP+BCl5KB9HQx7RC072AEgZCcjRgfy9F78yt63AfU1bmQiAiRtRRsVNEBUdRx0sTfa+OpN90IX1RQUtNRZ4IhAlcuF8hmLEHQSxD2+PZkq3moRQhthCsHZGo75BtNUJO25IZN160hXd20w7xa0AjZjOXKpWzxAtArG8/3y/Zkq7OsrDoKUVg1fqJS91WOtSj5gGsuCCNAPutIT7uOnTeRuOtifCxPciYkCIoNn/1mFa45U1oJXUTkXHXQpcGo9bXXD1h2mCE5GY+M6NTWYqW0RBQqly9miSKHMUsc4+SLU5a9P+DKXdwFV9aCTQb5Qt1+E2sGQDGQS1mySddygG67IAwSwtRUgamJwtJzQv0QBe2j7yYIoYsIXVQ/qLdOI/brUKYmZp+NYHbCLmnMxGrKpYs58vmaidtdaWh5e3ehRykfhWhxthBS3wEhDdqW+lsDCqSnIwpp11XRfxFIp0PGx7JLW+D9sEFnn2lLASIXUYiiqgnZjTvk14APKAYKOSU1FaFdto5K4ekrV3JkUmHD0ffdo5S0O3mQLvkdNZKPClh1CKZB53xtMKafNaBCeioizLP6U8qWcoCMkM9ZLl3Mxpu/rMkgSn9ZxoJgnSMfFhDR+r2AZI2kIcQU0w6zrqstKCMwOZlndqawuOS8tHNdSh9TvEpa0EaE1lbNi6HGLO1PADVW784qs+PdP6naGCGyyqVLGcJwEQEZPxNm1X/xUhEREVQdubBQHMw1NzGtsluiPwEs/rBsypJN2q40PWtPdCIQZmbyTE7mMLL8DV78Bp3L/x3LHW4uIhRcSGjDkidYNc7Q9KsGjNMOSnLc0kvRO1Xh4sUMuXyELERl+0R8D2hyIRsVcOqqytLalYfo2Fja1JSlkNOeWqRBIKQzBS5fzixMA3oTtOs1ealnMB+F9f2A/agBxUAha0lN27I27JmlIbE/eGUsSzIZYgLjNWA/XBwEslGe0MYzYqVuf4k+AlAVklOrO2ZiNb+7ESEfOi5eSuOs+rjIirOnHeAvrhPNhQXmCrL7sBRNBHIpR2bW9fR+7YERJqeyTE1l29ow3LvqVnrid+RtgdBG5eBL3/UDOqukJsI4od3DAIqAc8qFSynCQovxFf1ggkofXxdqtKCqki3kixu89JEPqMQaLzO7stOtOynGGJLJAlfG023bzNHbrKt9YRXytkAuKhSDE64/ANy1cS9RqCQno76JTJRGGFy+nCGTCZFGDq22c5l1aUd8l/QDLkZj58ICzjn2bt3fHwBeu/NGUtOWqCB9FRk0gZDNhVweSy+6a94n4rv1dwiRs2SjPNfvu64/ADyx5WaySTvXg9UnUkpLjE1mmJ3NE9SWqLW1FtRvT7ZS1wtFyduQaw+c6g8AT+29mdtH7yhGDPuHwFJaIipYLlxKYq1WR858GqIXL6uIMdwxejs3HLypPwAcHhzmpzf+lK1btoDRtg4+bccFPkgIk7M5JiYzCw4w+YbcrkQPjLJ141Z+ess/MbxuuD8ABLjpyK38l4f/L7YMbYEgjiJKP3VxW+XC5RT5vF18424/m6CLvjhIR8AzxkAAW4e28p9P/2duOnJrWz470c4f+ug1j7Nn2x7+67P/jTMXP0FF+8ZMMwlDKp3n8pUUh/Zv7cDFRVYHwmW3HHS/Ka4S1yQf33WC//LY/8kNe29u31lTbf/86UvJS7z05fP86t1fc2V8PB7E5LTnrSjrlHUDAddes4uNG9YVS9UqRhxoxWB0NVWKS7Xad6yKXajU3IZyH3f59Vr2S0sPaOl26bHya2ueqxXPrXlMVef4qfiM8r3la6jG96uipb9R1CkOBVVc+b3iv138AhTKf7vy60vfKf7bxT8E1fi5WrxtK94j/jyHY4GzXAXEGHZsH+FHt/yYfzj2MFs37WnvZbMTAJbki/G/8+QHv+aVr15jcmw6rg3tcY1orbJ7x0aOHRkpLn4P4IIAdFq+fzUBFASV+H22j2zlgaP386Mb/yOjO0c7Y5x3CkAtzulXlFfef5lnvn6at878qbgxYOUS6ilPsKzIj4/uZGTbcLy7U1sAnIOgqwCsAK2TGrDsEpj4+959/E4ev+r7PHDTg8XueG1bAXbXaMDKH51zOV776lV+9tL/5Kups7jIISo9CWEYWbZv3cCJo7sIgqAMSU8CWPmeSwYQULdAAOPSxZUEsKT1zIDh8JZD/Kc7/3fuO3E/QwNDdetwTQHYSKYLE/zixV/y+6+eYTw5BbZ60fSCKIpzcPXB7ezbvRXrXOwJegDbCmC5sz2AHRu289jRx/jJQz9l6/qt3XPB7hYAler84Ofjn/Fvf/5X3jr7FsmpNNJjZql1juH1g1w7uof1QwNxB8haNEGdxiXNbQRQiS0nFdi0ZZi79t3FP939U47tvKbpelvzADaSKIp48d0X+OPYH/jz52+joZYL1LsdRAFC6zi0dytHDoxgbSnpuhYBXIwPuHQAUXA4VIBAuGP0Nr6z51FO3/YwiUSiO9dJtwJYeYXKhhle+vR5fv7Or/j6yte4yNEL4hwkEsK1V+9ly8ahmoCMB3AlAQTBYjGB4dD2q/jJ7T/moeMPs35gQ1dpvJ7SgLUO8kR6kn958//juc/+wGwySdHu6GptaK1j18hGjl21CyMCusZ8wFU2QZ0CEpubGzcM8+joo/zTvf+JkeHtHQ+w9AWAjUD85Nsz/OKdf+P5z18G4gCHOu1KEF1xCPGJw7vYtX0TtjhHpmfygCsShFl5DVg8iJRqOE4ffYAf3/oTjh860RPg9RyAlX6fIIRa4G8X3uH/eelnnBn7mCjvkC7VhpFVtm4c4trRPQwOJIoBmbWUiF9ZDagKahRJGI6NnOD/ePCfOLnvVgZksGqN9IL0FICN/MPZzCzPnnmaJ9/7LeemLoJ15cRqN2lv52D04AgHdm+Lqz60OPrHJ+IXnIiX4vM0EPZs3sUPT/2AR699nE0bNne1n9d3ADYyS89OfsvvzzzFk+89SzIzWzZJu+WEWOtYPzTAdaP7GF6/DmdZYQD7pRa0sQbU4oYiw4Mb+d6Nj/DI8e9zcORQT5mbfQdgIxA/vPgBv373l7x85pVikXd3pC1KaYkDu7YyenAnqsXKGA9gUwAhPj5OHIrj3mP388Ob/gPX7T3V8+D1FYC1JyMf5fnTl6/zs1d/xmcTf8eqIq7zEKrGc2SuP7qXbRs3YG3lYx7AShMUBQ1AnHB462F+fNdPuP3IXQwmBvsGvr4CsKF/WJjl6TO/5Yk//4bLU+OoKsYZHJ3JI8b7EDhGtmzk2iN7MCZAnfogTAWAIDgcYoTtG7fx2C0/4NFrvsfmwd7189YUgI2ujufGzvLUR0/w9JlnSWcyuMh2tE/UqXLi4G727NyCjdYCgPNrQHVxFUswYBgaHOLB0Yd47MQP2b/rQNPz6gHsIRgdjve//AtP/u03vHzm1XjhRHMtUe0OyGwaHuLU0f0MDiSwTssJ+rUGoADOOSiO+L/j6jv5ztXf49ThGzGYvoRuTQFYK6ENefXzl/m3D/6Fz89+iQ1tR9IWkXMc3bODw3tHsE7XZDG2ajwOIrCG/TsO8Q+3/Ii7jt7LQDCwZtbjmgKwyj9Mz/DPb/5PXv76FS5PjMWP2bhvrF1m6GAiwamj+9i4YagqINP3GrCYSFdVtg9v59ZTd/DjEz9l87r+9PM8gDUmKcztfPPVlS/57Ye/4ZmPnyOfy2FtvDHHapulpbTEvpEtHDu0O06ZVEDVX4n4WANqsVvBJAIGBga4+8g9fPf4Dzi063DDc+MBXAO+YayNHK+/9xrPnvt33vj8LdSCWrfqQ6K0WCd68vBedmzZjLWurzUgJm6QvfHw9dy9/RHuvOluTHFPjbWk9TyATczSyEU89eGTPPfJM3x28UvCXBgHAlZJG8Za0DKyeZiTh/eTMEExMtg/AKKACAXNs3/bAU6f+A7fOfk4CTOwpsHzALbQiJemLvLrN3/Jy2df5vLUlYqFxMrnLorV/aP7d3Fg57ZiRLT3AUSL08dQNq/fyuM3/JA7j95XHgfR79FND+AKgPh16it++eYv+fcPnsFZizpdlYiptY7h9eu4/vB+hobWVZmiHfcBF9mOVDLpJYhNy7uvvo+HTjzM0ZHj5ceMGL/QPIALjVY63jn7Bv/6+i/56+WPKORCKA78WUnTNLKWq3bv5MjeHTinvdeQqw6VeGOTgTDg0N4jPHbjDzm172YPnAdw+f5h3ub57Vu/4cXzL/Dp+c+JCm5F60udKgkTcP2RA2weHiKyOucZdTmAaLypSWJdgl3bdnPTyTt5bP8PWBes8+amB3BlzdJvxr/hiVd/xWsTr3NlcjzutlihRuDIWnZv28I1B/cWp/x2AYCNfMCSz1n0i40xbN2yjaMDJ/jhrf/Inl17PXgewNWVLyY/51/f+Bde/PwlokLRP1ymWVo6FScO7mPnti3YUna+y4IwILEvZwxBwnDDgdv47g2Pc9WWUb8wPIDtkyiKeOfbP/E/Xv/vfHL+8xgCYVkTvSNr2Tq8gWuPHGAgCIrd890BoLjY2hQjiML+kf18/7r/yHUHbyJhEn5BeADb6x/GTdpCqpDiuc+e5Ym3fsU3Vy4ggSCWJbU9lSpHRvfuZP/O7YsAcHV9QBHBSHz/jk07ue3kfZw+/CjDg8NFXznWjF48gG31DePp5/HCOz99jt9++Fue+eBpUvkMNrSLPyHEhdrrBwe57vABNqxbF+cGO+YDOkAIBgPWBYPccPhuvnPNd9m7eV/Fp7Cmk+kewC4K1Dh1fHLpDP/jjf+Xd7/+C1Fo4wm9iwhGCELBRhzYMcLo/l1xaVyHTFBjDBIYRnce5x+u/wmHdx6OAyvqFZ4HsIulYAu88dkr/Oovv+av5z+OgzROqrRGK3GqBEa4/qqDbB4enkvOr7IGlJIaFkAMezcf4PS1p7n94APxTk9ePIC9og0BpnKT/P6DZ3j6o6f5dvzcXN5sXggFayNGNm/m+MF9BCaIG1dXUQOigpi4R2/7pp3cc/he7jz2AFsGt5ef77MKHsCeCtSUfKNzU9/yxPu/5qkPnyabyccKZp6yttJIvmv272P3yFZstEoAlhdDAgPccfxeTh/7Lrsr/Dzv43kA+wLID8++z5PvP8mrH71GPgiR4rZlzczSyDk2r1/PtYcOMJBIlBPgK2GC4gARTGDIRQVuOHKU09f8b1wzcp0HzgPYv2apw/Hs35/m6Vd+x8eTn8SbkDaZX1qaCn3Vrp0c2rmjol1p6Rqw9DyTiPvzdq3fxT+c+iknD12PIaj7vl48gH0pY5kxnv/rc/zi3d8ylbpczPnVm6bOOQYHBrj20AE2Dg0Vi7UXD2CpgkVEwMD2oRHuPPoANx69nd3r9/gT4gFcmzKT+ZT/++WneOOL50mlMrHPVWGWlnKDu7du5dj+PcUewsUBGO+THsM9MBRw6467uOXm+xkdutqfAA+gF6eO98+9y/9655/5y98/IIoUI3M+W8kkPHlwP9s3bSKyuiAAcRJrPHEQGEa3H+PhEz/g2O6Tvk3IA+ilDE+xoiYf5njxb8/z83d/zhfjX8eGpo1xstaxdeMwJw/ux5iBuEqlVRBGBZMwoMrm4a08cvX3ue3wvX033t0D6GXFAzUX0uf543t/4Dd/+Q3TuWnUgTrFquPqvXvZO7J9Li3RQAOaQFCEocQQtx2+h4ePfZ9N6zf7g+wB9LIY+Tb5Ff/86j/z+hevk87kiKxleHCQkwcPMTQ4WE7Oa9nPE0QgMWi4fuRm7r/uYQ5uPuYPpAfQy6K0YUXyW1V548vX+Zc//y8+OfsJmSjk0MgOjuzZDY6KidOOdYn17Nx4gIdPPM51e0+VNapPpnsAvSwTxGQ+yZ8vvsVrH7zGJ2N/Y9vGdWwYWIcT2Da8jcPbj3Fw9yHu2Hs/GwY3evA8gF5Wwz8MbcjZqW+YTE9ijDAQBGzdsJ29mw/4xlgPoBcvXhYqPhHkxYsH0IsXD6AXL148gF68eAC9ePHiAfTixQPoxYsXD6AXLx5AL168eAC9ePEAevHixQPoxYsH0IsXLx5AL148gF68ePEAevHiAfTixYsH0IsXD6AXL148gF68eAC9ePHiAfTixQPoxYsH0IsXLx5AL148gF68ePEAevHS9/L/DwDyzh9eJ8i0nQAAAABJRU5ErkJggg==';
    },
    './src/pages/Version/DetailSidebar/Install/img/npm.svg': (e) => {
      'use strict';
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjxwb2x5Z29uIGZpbGw9IiNDQzAwMDAiIHBvaW50cz0iMjMsNjUuNiAxMzAsMy4zIDIzNyw2NS42IDIzNywxOTAuMSAxMzAsMjUyLjQgMjMsMTkwLjEgIi8+Cjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTMzLDEyNy44IDIzMi41LDcwLjUgMjM2LjUsMTg2IDEzMywyNDguNSAiLz4KPGc+Cgk8cGF0aCBmaWxsPSIjQ0MwMDAwIiBkPSJNMjM0LDY3bC0wLjMsMTIyLjRsLTEwMy44LDYwLjJsLTAuNS0xMjAuM0wyMzQsNjd6IE0xNDYuNywxMzkuM2wwLjMsODAuNGwzNC41LTIwLjFsLTAuMS02MC42bDE3LjQtMTAuMwoJCWwwLDYwLjhsMTcuNC0xMC4ybDAuMS04MS40TDE0Ni43LDEzOS4zeiIvPgo8L2c+CjxwYXRoIGZpbGw9IiM5MTA1MDUiIGQ9Ik0xMzYuOCw0LjJjLTQuOC0yLjctMTIuNS0yLjctMTcuMywwTDI0LjcsNTguN2MtNC44LDIuNy04LjYsOS41LTguNiwxNC45djEwOWMwLDUuNSwzLjksMTIuMiw4LjYsMTQuOQoJbDk0LjgsNTQuNWM0LjgsMi43LDEyLjUsMi43LDE3LjMsMGw5NC44LTU0LjVjNC44LTIuNyw4LjYtOS41LDguNi0xNC45di0xMDljMC01LjUtMy45LTEyLjItOC42LTE0LjlMMTM2LjgsNC4yeiBNMjIwLjksNjEuMgoJYzQuOCwyLjcsNC44LDcuMiwwLDkuOWwtODMsNDcuN2MtNC44LDIuNy0xMi41LDIuNy0xNy4zLDBMMzYuNCw3MC40Yy00LjgtMi43LTQuOC03LjIsMC05LjlsODMtNDcuN2M0LjgtMi43LDEyLjUtMi43LDE3LjMsMAoJTDIyMC45LDYxLjJ6IE0yMy41LDgxLjVjMC01LjUsMy45LTcuNyw4LjYtNWw4NC45LDQ4LjhjNC44LDIuNyw4LjYsOS41LDguNiwxNC45VjIzN2MwLDUuNS0zLjksNy43LTguNiw1bC04NC45LTQ4LjgKCWMtNC44LTIuNy04LjYtOS41LTguNi0xNC45VjgxLjV6IE0xNDEuOCwyNDAuNWMtNC44LDIuNy04LjYsMC41LTguNi01di05NS4zYzAtNS41LDMuOS0xMi4yLDguNi0xNC45TDIyNC4yLDc4CgljNC44LTIuNyw4LjYtMC41LDguNiw1djk1LjNjMCw1LjUtMy45LDEyLjItOC42LDE0LjlMMTQxLjgsMjQwLjV6Ii8+Cjwvc3ZnPgo=';
    },
    './src/pages/Version/DetailSidebar/Install/img/pnpm.svg': (e) => {
      'use strict';
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjY2LjA5MTU3ODA5NDc0MTQyIDMzLjUgMTg0LjUgMTg0LjQ5OTk5OTk5OTk5OTk3IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PHBhdGggZD0iTTY3LjU5IDM1TDI0Ny41OSAzNUwyNDcuNTkgMjE1TDY3LjU5IDIxNUw2Ny41OSAzNVoiIGlkPSJiMkpaWmNBM2ZUIj48L3BhdGg+PHBhdGggZD0iTTIzNy42IDk1TDE4Ny42IDk1TDE4Ny42IDQ1TDIzNy42IDQ1TDIzNy42IDk1WiIgaWQ9ImJqMHRiMFk4cSI+PC9wYXRoPjxwYXRoIGQ9Ik0xODIuNTkgOTVMMTMyLjU5IDk1TDEzMi41OSA0NUwxODIuNTkgNDVMMTgyLjU5IDk1WiIgaWQ9ImRrRFNUelBqMyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjcuNTkgOTVMNzcuNTkgOTVMNzcuNTkgNDVMMTI3LjU5IDQ1TDEyNy41OSA5NVoiIGlkPSJhNHZOZGNOTHBGIj48L3BhdGg+PHBhdGggZD0iTTIzNy42IDE1MEwxODcuNiAxNTBMMTg3LjYgMTAwTDIzNy42IDEwMEwyMzcuNiAxNTBaIiBpZD0iaDJ0NFpqMWpTVSI+PC9wYXRoPjxwYXRoIGQ9Ik0xODIuNTkgMTUwTDEzMi41OSAxNTBMMTMyLjU5IDEwMEwxODIuNTkgMTAwTDE4Mi41OSAxNTBaIiBpZD0iYjR0NXBuZ3d2VCI+PC9wYXRoPjxwYXRoIGQ9Ik0xODIuNTkgMjA1TDEzMi41OSAyMDVMMTMyLjU5IDE1NUwxODIuNTkgMTU1TDE4Mi41OSAyMDVaIiBpZD0iYjlzMWdkNW0yIj48L3BhdGg+PHBhdGggZD0iTTIzNy42IDIwNUwxODcuNiAyMDVMMTg3LjYgMTU1TDIzNy42IDE1NUwyMzcuNiAyMDVaIiBpZD0iY210OVdMdno3Ij48L3BhdGg+PHBhdGggZD0iTTEyNy41OSAyMDVMNzcuNTkgMjA1TDc3LjU5IDE1NUwxMjcuNTkgMTU1TDEyNy41OSAyMDVaIiBpZD0iYkpVTnFnRlNnIj48L3BhdGg+PC9kZWZzPjxnPjxnPjx1c2UgeGxpbms6aHJlZj0iI2IySlpaY0EzZlQiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2JqMHRiMFk4cSIgb3BhY2l0eT0iMSIgZmlsbD0iI2Y5YWQwMCIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjZGtEU1R6UGozIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhNHZOZGNOTHBGIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNoMnQ0WmoxalNVIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiNHQ1cG5nd3ZUIiBvcGFjaXR5PSIxIiBmaWxsPSIjNGU0ZTRlIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiOXMxZ2Q1bTIiIG9wYWNpdHk9IjEiIGZpbGw9IiM0ZTRlNGUiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2NtdDlXTHZ6NyIgb3BhY2l0eT0iMSIgZmlsbD0iIzRlNGU0ZSIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYkpVTnFnRlNnIiBvcGFjaXR5PSIxIiBmaWxsPSIjNGU0ZTRlIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48L2c+PC9zdmc+';
    },
    './src/pages/Version/DetailSidebar/Install/img/yarn.svg': (e) => {
      'use strict';
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTE4IDUxOCI+PHN0eWxlPi5zdDB7ZmlsbDojMmM4ZWJifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OSAwYzE0MyAwIDI1OSAxMTYgMjU5IDI1OVM0MDIgNTE4IDI1OSA1MTggMCA0MDIgMCAyNTkgMTE2IDAgMjU5IDB6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTQzNS4yIDMzNy41Yy0xLjgtMTQuMi0xMy44LTI0LTI5LjItMjMuOC0yMyAuMy00Mi4zIDEyLjItNTUuMSAyMC4xLTUgMy4xLTkuMyA1LjQtMTMgNy4xLjgtMTEuNi4xLTI2LjgtNS45LTQzLjUtNy4zLTIwLTE3LjEtMzIuMy0yNC4xLTM5LjQgOC4xLTExLjggMTkuMi0yOSAyNC40LTU1LjYgNC41LTIyLjcgMy4xLTU4LTcuMi03Ny44LTIuMS00LTUuNi02LjktMTAtOC4xLTEuOC0uNS01LjItMS41LTExLjkuNEMyOTMuMSA5NiAyODkuNiA5My44IDI4Ni45IDkyYy01LjYtMy42LTEyLjItNC40LTE4LjQtMi4xLTguMyAzLTE1LjQgMTEtMjIuMSAyNS4yLTEgMi4xLTEuOSA0LjEtMi43IDYuMS0xMi43LjktMzIuNyA1LjUtNDkuNiAyMy44LTIuMSAyLjMtNi4yIDQtMTAuNSA1LjZoLjFjLTguOCAzLjEtMTIuOCAxMC4zLTE3LjcgMjMuMy02LjggMTguMi4yIDM2LjEgNy4xIDQ3LjctOS40IDguNC0yMS45IDIxLjgtMjguNSAzNy41LTguMiAxOS40LTkuMSAzOC40LTguOCA0OC43LTcgNy40LTE3LjggMjEuMy0xOSAzNi45LTEuNiAyMS44IDYuMyAzNi42IDkuOCA0MiAxIDEuNiAyLjEgMi45IDMuMyA0LjItLjQgMi43LS41IDUuNi4xIDguNiAxLjMgNyA1LjcgMTIuNyAxMi40IDE2LjMgMTMuMiA3IDMxLjYgMTAgNDUuOCAyLjkgNS4xIDUuNCAxNC40IDEwLjYgMzEuMyAxMC42aDFjNC4zIDAgNTguOS0yLjkgNzQuOC02LjggNy4xLTEuNyAxMi00LjcgMTUuMi03LjQgMTAuMi0zLjIgMzguNC0xMi44IDY1LTMwIDE4LjgtMTIuMiAyNS4zLTE0LjggMzkuMy0xOC4yIDEzLjYtMy4zIDIyLjEtMTUuNyAyMC40LTI5LjR6bS0yMy44IDE0LjdjLTE2IDMuOC0yNC4xIDcuMy00My45IDIwLjItMzAuOSAyMC02NC43IDI5LjMtNjQuNyAyOS4zcy0yLjggNC4yLTEwLjkgNi4xYy0xNCAzLjQtNjYuNyA2LjMtNzEuNSA2LjQtMTIuOS4xLTIwLjgtMy4zLTIzLTguNi02LjctMTYgOS42LTIzIDkuNi0yM3MtMy42LTIuMi01LjctNC4yYy0xLjktMS45LTMuOS01LjctNC41LTQuMy0yLjUgNi4xLTMuOCAyMS0xMC41IDI3LjctOS4yIDkuMy0yNi42IDYuMi0zNi45LjgtMTEuMy02IC44LTIwLjEuOC0yMC4xcy02LjEgMy42LTExLTMuOGMtNC40LTYuOC04LjUtMTguNC03LjQtMzIuNyAxLjItMTYuMyAxOS40LTMyLjEgMTkuNC0zMi4xcy0zLjItMjQuMSA3LjMtNDguOGM5LjUtMjIuNSAzNS4xLTQwLjYgMzUuMS00MC42cy0yMS41LTIzLjgtMTMuNS00NS4yYzUuMi0xNCA3LjMtMTMuOSA5LTE0LjUgNi0yLjMgMTEuOC00LjggMTYuMS05LjUgMjEuNS0yMy4yIDQ4LjktMTguOCA0OC45LTE4LjhzMTMtMzkuNSAyNS0zMS44YzMuNyAyLjQgMTcgMzIgMTcgMzJzMTQuMi04LjMgMTUuOC01LjJjOC42IDE2LjcgOS42IDQ4LjYgNS44IDY4LTYuNCAzMi0yMi40IDQ5LjItMjguOCA2MC0xLjUgMi41IDE3LjIgMTAuNCAyOSA0My4xIDEwLjkgMjkuOSAxLjIgNTUgMi45IDU3LjguMy41LjQuNy40LjdzMTIuNSAxIDM3LjYtMTQuNWMxMy40LTguMyAyOS4zLTE3LjYgNDcuNC0xNy44IDE3LjUtLjMgMTguNCAyMC4yIDUuMiAyMy40eiIvPjwvc3ZnPg==';
    },
    './src/pages/Version/DetailSidebar/Repository/img/git.png': (e) => {
      'use strict';
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAAF/CAMAAACWmjlVAAAAM1BMVEXwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPwUDPNJiJ+AAAAEHRSTlMA8DAQ0KDAQGCA4CCQUHCw+BUOAQAACLtJREFUeAHs0YNhRQEAwMBv4+0/bW0zxWWE3Oi3tl8vNsN548VuPx19Y1rOx8PdjntXvqvVZnikzcqZ72iyGJ5otnTny1sPz7Tz52ubHodnm009+sr9s+GFZluXkv1XjSc+BfsBBPsBBPsBZPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBtPt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7APt7AP8BAAAgAAAEAIAABAEAIAAABACAAAD4N38BpPtncwBNV28BpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsBpPsB1PsB9PsB9PsB9PsB9Ps/DnDC3n0gWYoDURR9QgaE+7n/1c6Eb28yWnGJRG8FXed28W2J1s7ee21lBvDx+wOkun1ps96fGcDB7wjws+WtAAHC8fsDSGsLEIDn9wfQWgIE4Pn9AdRngC/4gQDLHiAAz29W5+HdJL8/gGqgAH7+GQDlRwMUOADPzwbIOxqA56cDLAYG4Pn5ADcZgOfnAxQwAM/PB1gNDMDz8wEaGIDn5wOsBgSIyG92ybMGBAjJn7I824wLwPPzDwDZgAAB+e2Sbx8gQEB+y9xrMD4Az1/k3GJAgHD8dso7AwKE47cu7woQIBy/rfKuGReA5+f9TwMCROO3Rd51AwJE4zdx/nwAnt8y588H4PltBf39AXh+3v9jQIBo/LZxzz/5ADy/dXmXDAgQjd8+cu4wAwJE47ck5y7jAvD8/AuwakCAePx2y7fduAA8P/8BQDIuAM/PX4AWIEBEfquaAUB+s2MGIPmtagYA+c2WGYDkt6YZAOQ3u2cAkt9smQFIfkt5BgD5zcoMwPDPADz/DMDzm+1LgAA0/3wayvP7144IAXh+/84cIADP71+qOUAAnt+/VXED+Pl5/yVAAD8/79+2AAH8/Ly/RQjg5+f9IwTw8/P+EQL4+Xn/CAH8/Lx/hAB+ft4/QgA/P+8fIYCfn/ePEMDPz/tHCODn5/0jBPDz8/4RAvj5ef8IAfz8vH+EAH5+3j9CAD8/7x8hgJ+f948QwM/P+wcIkIsF8H9iAIAf8H9wAIAf8H9wAIAf8PcFKLVv6/+7+tmAAAP4AX9ngHau+mrruQMBcrGI/rbJsaUOCQDwo/7+ADrOEQEAftbfH0BHGxAA4If9/QG0pQEBAH7Y3x9gKQMCAPywvz9AbgMCAPyAvyMAcDtbgB/wf1gAgB/w9wcY7JOOEef08v6jAqSRf8vcLYz/qADrwBN1FovjPyzAOe5Y5RbIf1iAvI86UWezQP7jAmyjrkB7JP+BAfYx91VcLZK/IwD8C1Df55/k2phHgPQ+//qUp0BVuux9/stTbueZpP4+/yQ95wLU3uf/eczbcHZrf5//LT3lJUCVvc9/1XPeBHqjf37O/ZzTG/31HH97of8u8n5607+F8/dv+ifjNv3LgKSBr//F/vGaTuM2n/+cuozbfP6/KRu3+fr3kD6v8+9y7h5xY8vLqM33P+9Xfv6eHnM78/zG75+YXXJtGXRXxTI//2UuP4fjYT2Cf8qP+A7u6fhgP4S/3U/49GvPjtfVMfx3ObaP+yFyeZe/df7J/+04giKMf8r01b9KQADa3/8a7DOAHwjA+vu/g3sN4AcD8P5pAW+cVCU2AO9vJWN//1gdkcP5W8kcPx+A97eSOX4+AO9vJXP8fADe39JKPPQCAWh//wvhbsP4+QC8v5VVv9haRvLzAXh/s/bTAsfHBvPzAXh/s7bpB7uaAfxAANzfLNXt0BfLV00G8AMBUP8vt7fe73W9e2+7mQH8QADAH1qVuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lXiAkz/KnEBpn+VuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lXiAkz/KnEBpn+VuADTv0pcgOlfJS7A9K8SF2D6V4kLMP2rxAWY/lUKHWDv2eEP8IcMkLrk+MImwB8ywCfrV1t3nj9wgHTpN8snzR84QDkcd0wG+IMGaNn7L+T5+QDxv79dpcABmuNfCPBHDVAydlInz88HSAt3Wg/Pzwe4gKPKaX4+gP+8niMB/GEDpEN/uw7whw3QkfPyeH4+gP/Azg3gDxrglGcJ4I8Z4JBnHeAPGaDItQPgDxnglm8F4I8Y4JBvJ8AfMMAu51aAP2CAj7wD+AMG6PJuB/jjBbjkXQP44wVY5d0J8vMBeP8O8McLIMSf5+cD8P48Px9gAf15fj7A6vcH+fkAvH8D+OMF6PKugPx8AP7njcDPByhybgH4IwbI8u0G+CMG2OTbh+PnA/A/dA7CzwfI8mwD+fkA/AWoAPwxA+xybAX5+QD8L0AD+KMG2DP435/n5wN08rNfnp8PsIBvffL8fICSwasPz88HqOBfv1RpBujs/XpngO3p/DPA5OcfAw6AP1wA/wkcVxrHPwOky3H8D8AfNoC1Qz/fto/mnwGsHg59gD9sAGtb1rc7+m6T3xHAt09fv7C/zmI2+V0B/Ev/tUcXBw5AARBCiUzc+q927bTufyJQAm/x1OlfCgjQKyCA+8cDuF+AgADuHw/gfgECArh/PID7BQgI4P7xAO4XICCA+8cDuF+AgADuHw/gfgECArh/PID7BQjcKID7BQgIcKP7BQgIcKP7BQgIcKP7BQjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjFBAjfzLZz91ebza9ivwChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmAChmADhPxNgcfqwA/+brU/vt1ny39l0cXqn3YwB2fJNgWwZlE0zOT1rfpgxNAkOWTwizBe71ZYL7Q7H02m600+YOAAAAABJRU5ErkJggg==';
    },
    'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 version=%271.1%27 width=%2716%27 height=%2716%27 aria-hidden=%27true%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z%27%3E%3C/path%3E%3C/svg%3E':
      (e) => {
        'use strict';
        e.exports =
          'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 version=%271.1%27 width=%2716%27 height=%2716%27 aria-hidden=%27true%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z%27%3E%3C/path%3E%3C/svg%3E';
      },
    './src/i18n/crowdin/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      ['vendors'],
      () => (
        t('../../../node_modules/.pnpm/whatwg-fetch@3.6.2/node_modules/whatwg-fetch/fetch.js'),
        t('./src/index.tsx')
      )
    );
    e.O();
  },
]);
