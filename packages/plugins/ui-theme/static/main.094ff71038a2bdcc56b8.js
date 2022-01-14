/*! For license information please see main.094ff71038a2bdcc56b8.js.LICENSE.txt */
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['main'],
  {
    './lib/constants.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { DIST_TAGS: () => s, HEADERS: () => i, API_ERROR: () => l }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        r,
        s = 'dist-tags',
        i = { JSON: 'application/json' },
        l = { BAD_USERNAME_PASSWORD: 'bad username/password, access denied' };
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          s,
          'DIST_TAGS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/lib/constants.ts'
        ),
        n.register(
          i,
          'HEADERS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/lib/constants.ts'
        ),
        n.register(
          l,
          'API_ERROR',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/lib/constants.ts'
        )),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/App/App.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => k });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        i = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        l = a.n(i),
        d = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        c = a(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        u = a('./src/components/Box.tsx'),
        g = a('./src/components/Loading/index.ts'),
        p = a('./src/design-tokens/load-dayjs-locale.ts'),
        m = a('./src/design-tokens/StyleBaseline.tsx'),
        I = a('./src/utils/login.ts'),
        A = a('./src/utils/storage.ts'),
        C = a('./src/App/AppContextProvider.tsx'),
        f = a('./src/App/AppRoute.tsx'),
        b = a('./src/App/Footer/index.ts'),
        h = a('./src/App/Header/index.ts');
      a('./src/i18n/config.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var v =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        y = (0, s.default)(u.default, { target: 'e1qqswew0', label: 'StyledBox' })(function (e) {
          var t = e.theme;
          return { backgroundColor: null == t ? void 0 : t.palette.background.default };
        }, ''),
        L = (0, s.default)(u.default, { target: 'e1qqswew1', label: 'StyledBoxContent' })(function (
          e
        ) {
          var t = e.theme;
          return (0, r.default)(
            {},
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
          );
        },
        ''),
        j = function () {
          var e = (0, d.useState)(),
            t = (0, n.default)(e, 2),
            a = t[0],
            o = t[1],
            r = function () {
              var e = A.default.getItem('token'),
                t = A.default.getItem('username');
              if ((0, I.isTokenExpire)(e) || l()(t))
                return (
                  A.default.removeItem('username'), A.default.removeItem('token'), void o(void 0)
                );
              o({ username: t });
            };
          return (
            (0, d.useEffect)(function () {
              r(), (0, p.default)();
            }, []),
            d.createElement(
              d.Suspense,
              { fallback: d.createElement(g.default, null) },
              d.createElement(m.default, null),
              d.createElement(
                y,
                { display: 'flex', flexDirection: 'column', height: '100%' },
                d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    c.Router,
                    { history: f.history },
                    d.createElement(
                      C.default,
                      { user: a },
                      d.createElement(h.default, null),
                      d.createElement(L, { flexGrow: 1 }, d.createElement(f.default, null))
                    )
                  ),
                  d.createElement(b.default, null)
                )
              )
            )
          );
        };
      v(j, 'useState{[user, setUser]}\nuseEffect{}');
      var x = j;
      const k = x;
      var H, G;
      (H = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (H.register(
          y,
          'StyledBox',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        H.register(
          L,
          'StyledBoxContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        H.register(
          j,
          'App',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        H.register(
          x,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        )),
        (G =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          G(e);
    },
    './src/App/AppContext.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => i });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r = (0, n.createContext)(void 0),
        s = r;
      const i = s;
      var l, d;
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          r,
          'AppContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppContext.ts'
        ),
        l.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppContext.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/App/AppContextProvider.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a('./src/providers/config/index.ts'),
        l = a('./src/App/AppContext.ts');
      function d(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(a), !0).forEach(function (t) {
                (0, n.default)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : d(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function (e) {
          var t,
            a = e.children,
            o = e.user,
            n = (0, i.useConfig)().configOptions,
            d = (0, s.useState)({
              scope: null !== (t = n.scope) && void 0 !== t ? t : '',
              user: o,
            }),
            u = (0, r.default)(d, 2),
            g = u[0],
            p = u[1];
          (0, s.useEffect)(
            function () {
              p(c(c({}, g), {}, { user: o }));
            },
            [o]
          );
          return s.createElement(
            l.default.Provider,
            {
              value: c(
                c({}, g),
                {},
                {
                  setUser: function (e) {
                    p(c(c({}, g), {}, { user: e }));
                  },
                }
              ),
            },
            a
          );
        };
      u(
        g,
        "useConfig{{ configOptions }}\nuseState{[state, setState]({\n    scope: configOptions.scope ?? '',\n    user,\n  })}\nuseEffect{}",
        function () {
          return [i.useConfig];
        }
      );
      var p = g;
      const m = p;
      var I, A;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'AppContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppContextProvider.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppContextProvider.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/App/AppRoute.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { history: () => v, default: () => j });
      var o,
        n,
        r,
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/typeof.js'
        ),
        i = a('../../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js'),
        l = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        c = a(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        u = a('./src/App/AppContext.ts'),
        g = a('./src/App/utils/loadable.tsx');
      function p(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (p = function (e) {
          return e ? a : t;
        })(e);
      }
      function m(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== (0, s.default)(e) && 'function' != typeof e))
          return { default: e };
        var a = p(t);
        if (a && a.has(e)) return a.get(e);
        var o = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ('default' !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, r) : null;
            i && (i.get || i.set) ? Object.defineProperty(o, r, i) : (o[r] = e[r]);
          }
        return (o.default = e), a && a.set(e, o), o;
      }
      (e = a.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      var I,
        A =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = (0, g.default)(function () {
          return Promise.resolve().then(function () {
            return m(a('./src/components/NotFound/index.ts'));
          });
        }),
        f = (0, g.default)(function () {
          return Promise.resolve().then(function () {
            return m(a('./src/pages/Version/VersionContextProvider.tsx'));
          });
        }),
        b = (0, g.default)(function () {
          return Promise.resolve().then(function () {
            return m(a('./src/pages/Version/index.ts'));
          });
        }),
        h = (0, g.default)(function () {
          return Promise.resolve().then(function () {
            return m(a('./src/pages/home/index.ts'));
          });
        });
      !(function (e) {
        (e.ROOT = '/'),
          (e.SCOPE_PACKAGE = '/-/web/detail/@:scope/:package'),
          (e.SCOPE_PACKAGE_VERSION = '/-/web/detail/@:scope/:package/v/:version'),
          (e.PACKAGE = '/-/web/detail/:package'),
          (e.PACKAGE_VERSION = '/-/web/detail/:package/v/:version');
      })(I || (I = {}));
      var v = (0, i.createBrowserHistory)({
          basename:
            null === (o = window) ||
            void 0 === o ||
            null === (n = o.__VERDACCIO_BASENAME_UI_OPTIONS) ||
            void 0 === n
              ? void 0
              : n.url_prefix,
        }),
        y = function () {
          var e = (0, l.useContext)(u.default),
            t = (0, d.useTranslation)().t;
          if (!e) throw Error(t('app-context-not-correct-used'));
          var a = e.user,
            o = null == a ? void 0 : a.username;
          return l.createElement(
            c.Router,
            { history: v },
            l.createElement(
              c.Switch,
              null,
              l.createElement(
                c.Route,
                { exact: !0, path: I.ROOT },
                l.createElement(h, { isUserLoggedIn: !!o })
              ),
              l.createElement(
                c.Route,
                { exact: !0, path: I.PACKAGE },
                l.createElement(f, null, l.createElement(b, null))
              ),
              l.createElement(
                c.Route,
                { exact: !0, path: I.PACKAGE_VERSION },
                l.createElement(f, null, l.createElement(b, null))
              ),
              l.createElement(
                c.Route,
                { exact: !0, path: I.SCOPE_PACKAGE_VERSION },
                l.createElement(f, null, l.createElement(b, null))
              ),
              l.createElement(
                c.Route,
                { exact: !0, path: I.SCOPE_PACKAGE },
                l.createElement(f, null, l.createElement(b, null))
              ),
              l.createElement(c.Route, null, l.createElement(C, null))
            )
          );
        };
      A(y, 'useContext{appContext}\nuseTranslation{{ t }}', function () {
        return [d.useTranslation];
      });
      var L = y;
      const j = L;
      var x, k;
      (x = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (x.register(
          C,
          'NotFound',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        x.register(
          f,
          'VersionContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        x.register(
          b,
          'VersionPage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        x.register(
          h,
          'HomePage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        x.register(
          v,
          'history',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        x.register(
          y,
          'AppRoute',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        x.register(
          L,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        )),
        (k =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          k(e);
    },
    './src/App/Footer/Footer.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => f });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/country-flag-icons@1.4.10/node_modules/country-flag-icons/react/3x2/index.js'
        ),
        i = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/Trans.js'
        ),
        c = a('./src/components/Icons/index.ts'),
        u = a('./src/components/Logo/index.ts'),
        g = a('./src/providers/config/index.ts'),
        p = a('./src/utils/windows.ts'),
        m = a('./src/App/Footer/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var I =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        A = function () {
          var e = (0, l.useTranslation)().t,
            t = (0, g.useConfig)().configOptions;
          return i.createElement(
            m.Wrapper,
            null,
            i.createElement(
              m.Inner,
              null,
              i.createElement(
                m.Left,
                null,
                i.createElement(d.Trans, {
                  components: [i.createElement(m.Love, null)],
                  i18nKey: 'footer.made-with-love-on',
                }),
                i.createElement(
                  j,
                  null,
                  i.createElement(v, null),
                  i.createElement(
                    y,
                    null,
                    i.createElement(L, null, i.createElement(s.default.ES, null)),
                    i.createElement(L, null, i.createElement(s.default.NI, null)),
                    i.createElement(L, null, i.createElement(s.default.IN, null)),
                    i.createElement(L, null, i.createElement(s.default.BR, null)),
                    i.createElement(L, null, i.createElement(s.default.CN, null)),
                    i.createElement(L, null, i.createElement(s.default.AU, null)),
                    i.createElement(L, null, i.createElement(s.default.DE, null)),
                    i.createElement(L, null, i.createElement(s.default.TW, null))
                  )
                )
              ),
              i.createElement(
                m.Right,
                null,
                (null == t ? void 0 : t.version) &&
                  i.createElement(
                    i.Fragment,
                    null,
                    e('footer.powered-by'),
                    i.createElement(u.default, {
                      onClick: p.goToVerdaccioWebsite,
                      size: 'x-small',
                    }),
                    '/ '.concat(t.version)
                  )
              )
            )
          );
        };
      I(A, 'useTranslation{{ t }}\nuseConfig{{ configOptions }}', function () {
        return [l.useTranslation, g.useConfig];
      });
      var C = A;
      const f = C;
      var b,
        h,
        v = (0, r.default)(c.Earth, { target: 'ehzyum60', label: 'StyledEarth' })(function (e) {
          return { margin: e.theme.spacing(0, 1) };
        }, ''),
        y = (0, r.default)('span', { target: 'ehzyum61', label: 'Flags' })(function (e) {
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
        L = (0, r.default)('div', { target: 'ehzyum62', label: 'Icon' })({
          name: 'bosr71',
          styles: 'width:10px;',
        }),
        j = (0, r.default)('span', { target: 'ehzyum63', label: 'ToolTip' })(
          {
            position: 'relative',
            height: '18px',
            ':hover': (0, n.default)({}, ''.concat(y), { visibility: 'visible' }),
          },
          ''
        );
      (b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (b.register(
          A,
          'Footer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        b.register(
          v,
          'StyledEarth',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        b.register(
          y,
          'Flags',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        b.register(
          L,
          'Icon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        b.register(
          j,
          'ToolTip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        b.register(
          C,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/App/Footer/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/App/Footer/Footer.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Footer/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, { Wrapper: () => l, Inner: () => d, Left: () => c, Right: () => u, Love: () => g });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s,
        i,
        l = (0, r.default)('div', { target: 'e1les9sd0', label: 'Wrapper' })(function (e) {
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
        d = (0, r.default)('div', { target: 'e1les9sd1', label: 'Inner' })(function (e) {
          var t,
            a = e.theme;
          return (
            (t = {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }),
            (0, n.default)(
              t,
              '@media (min-width: '.concat(null == a ? void 0 : a.breakPoints.medium, 'px)'),
              { minWidth: 400, maxWidth: 800, margin: 'auto', justifyContent: 'space-between' }
            ),
            (0, n.default)(
              t,
              '@media (min-width: '.concat(null == a ? void 0 : a.breakPoints.large, 'px)'),
              { maxWidth: 1240 }
            ),
            t
          );
        }, ''),
        c = (0, r.default)('div', { target: 'e1les9sd2', label: 'Left' })(function (e) {
          var t = e.theme;
          return (0,
          n.default)({ alignItems: 'center', display: 'none' }, '@media (min-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'flex' });
        }, ''),
        u = (0, r.default)(c, { target: 'e1les9sd3', label: 'Right' })({
          name: 'k008qs',
          styles: 'display:flex;',
        }),
        g = (0, r.default)('span', { target: 'e1les9sd4', label: 'Love' })(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.love, padding: '0 5px' };
        }, '');
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          l,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        s.register(
          d,
          'Inner',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        s.register(
          c,
          'Left',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        s.register(
          u,
          'Right',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        s.register(
          g,
          'Love',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/App/Header/Header.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => h });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Button.tsx'),
        l = a('./src/providers/config/index.ts'),
        d = a('./src/utils/storage.ts'),
        c = a('./src/App/AppContext.ts'),
        u = a('./src/App/Header/HeaderInfoDialog.tsx'),
        g = a('./src/App/Header/HeaderLeft.tsx'),
        p = a('./src/App/Header/HeaderRight.tsx'),
        m = a('./src/App/Header/LoginDialog/index.ts'),
        I = a('./src/App/Header/Search/index.ts'),
        A = a('./src/App/Header/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var C =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = function (e) {
          var t = e.withoutSearch,
            a = (0, s.useTranslation)().t,
            o = (0, r.useContext)(c.default),
            C = (0, r.useState)(!1),
            f = (0, n.default)(C, 2),
            b = f[0],
            h = f[1],
            v = (0, r.useState)(!1),
            y = (0, n.default)(v, 2),
            L = y[0],
            j = y[1],
            x = (0, r.useState)(!1),
            k = (0, n.default)(x, 2),
            H = k[0],
            G = k[1];
          if (!o) throw Error(a('app-context-not-correct-used'));
          var w = o.user,
            D = o.scope,
            M = o.setUser,
            T = (0, l.useConfig)().configOptions;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              A.NavBar,
              { 'data-testid': 'header', position: 'static' },
              r.createElement(
                A.InnerNavBar,
                null,
                r.createElement(g.default, null),
                r.createElement(p.default, {
                  hasLogin: null == T ? void 0 : T.login,
                  onLogout: function () {
                    d.default.removeItem('username'), d.default.removeItem('token'), M(void 0);
                  },
                  onOpenRegistryInfoDialog: function () {
                    return h(!0);
                  },
                  onToggleLogin: function () {
                    return G(!H);
                  },
                  onToggleMobileNav: function () {
                    return j(!L);
                  },
                  username: null == w ? void 0 : w.username,
                  withoutSearch: t,
                })
              ),
              r.createElement(u.default, {
                isOpen: b,
                onCloseDialog: function () {
                  return h(!1);
                },
                registryUrl: T.base,
                scope: D,
              })
            ),
            L &&
              !t &&
              r.createElement(
                A.MobileNavBar,
                null,
                r.createElement(A.InnerMobileNavBar, null, r.createElement(I.default, null)),
                r.createElement(
                  i.default,
                  {
                    color: 'inherit',
                    onClick: function () {
                      return j(!1);
                    },
                  },
                  a('button.cancel')
                )
              ),
            !w &&
              r.createElement(m.default, {
                onClose: function () {
                  return G(!1);
                },
                open: H,
              })
          );
        };
      C(
        f,
        'useTranslation{{ t }}\nuseContext{appContext}\nuseState{[isInfoDialogOpen, setOpenInfoDialog](false)}\nuseState{[showMobileNavBar, setShowMobileNavBar](false)}\nuseState{[showLoginModal, setShowLoginModal](false)}\nuseConfig{{ configOptions }}',
        function () {
          return [s.useTranslation, l.useConfig];
        }
      );
      var b = f;
      const h = b;
      var v, y;
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          f,
          'Header',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Header.tsx'
        ),
        v.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Header.tsx'
        )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
    },
    './src/App/Header/HeaderGreetings.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/Label/index.ts'),
        i = a('./src/App/Header/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var l =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function (e) {
          var t = e.username,
            a = (0, r.useTranslation)().t;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(i.Greetings, null, a('header.greetings')),
            n.createElement(s.default, {
              'data-testid': 'greetings-label',
              text: t,
              weight: 'bold',
            })
          );
        };
      l(d, 'useTranslation{{ t }}', function () {
        return [r.useTranslation];
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
    './src/App/Header/HeaderInfoDialog.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/App/Header/RegistryInfoContent/index.ts'),
        s = a('./src/App/Header/RegistryInfoDialog/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function (e) {
          var t = e.onCloseDialog,
            a = e.isOpen,
            o = e.registryUrl,
            i = e.scope;
          return n.createElement(
            s.default,
            { onClose: t, open: a },
            n.createElement(r.default, { registryUrl: o, scope: i })
          );
        },
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'HeaderInfoDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderInfoDialog.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderInfoDialog.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/App/Header/HeaderLeft.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => p });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        i = a('./src/components/Logo/index.ts'),
        l = a('./src/App/Header/Search/index.ts'),
        d = a('./src/App/Header/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c = (0, n.default)(s.Link, { target: 'emyn0tj0', label: 'StyledLink' })({
          name: '1dk30lc',
          styles: 'margin-right:1em;',
        }),
        u = function (e) {
          var t = e.withoutSearch,
            a = void 0 !== t && t;
          return r.createElement(
            d.LeftSide,
            null,
            r.createElement(c, { to: '/' }, r.createElement(i.default, null)),
            !a && r.createElement(d.SearchWrapper, null, r.createElement(l.default, null))
          );
        },
        g = u;
      const p = g;
      var m, I;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          c,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        ),
        m.register(
          u,
          'HeaderLeft',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/App/Header/HeaderMenu.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/AccountCircle.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/IconButton.tsx'),
        l = a('./src/components/Menu.tsx'),
        d = a('./src/components/MenuItem.tsx'),
        c = a('./src/App/Header/HeaderGreetings.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function (e) {
          var t = e.onLogout,
            a = e.username,
            o = e.isMenuOpen,
            u = void 0 !== o && o,
            g = e.anchorEl,
            p = e.onLoggedInMenu,
            m = e.onLoggedInMenuClose,
            I = (0, s.useTranslation)().t;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              i.default,
              {
                color: 'inherit',
                'data-testid': 'header--menu-accountcircle',
                id: 'header--button-account',
                onClick: p,
              },
              r.createElement(n.default, null)
            ),
            r.createElement(
              l.default,
              {
                anchorEl: g,
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                onClose: m,
                open: u,
                transformOrigin: { vertical: 'top', horizontal: 'right' },
              },
              r.createElement(d.default, null, r.createElement(c.default, { username: a })),
              r.createElement(
                d.default,
                {
                  button: !0,
                  'data-testid': 'header--button-logout',
                  id: 'header--button-logout',
                  onClick: t,
                },
                I('button.logout')
              )
            )
          );
        };
      u(g, 'useTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var p = g;
      const m = p;
      var I, A;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'HeaderMenu',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderMenu.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderMenu.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/App/Header/HeaderRight.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => A });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Button.tsx'),
        l = a('./src/design-tokens/ThemeContext.ts'),
        d = a('./src/App/Header/HeaderMenu.tsx'),
        c = a('./src/App/Header/HeaderToolTip.tsx'),
        u = a('./src/App/Header/LanguageSwitch.tsx'),
        g = a('./src/App/Header/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = function (e) {
          var t = e.withoutSearch,
            a = void 0 !== t && t,
            o = e.username,
            p = e.onToggleLogin,
            m = e.hasLogin,
            I = e.onLogout,
            A = e.onToggleMobileNav,
            C = e.onOpenRegistryInfoDialog,
            f = (0, r.useContext)(l.default),
            b = (0, r.useState)(null),
            h = (0, n.default)(b, 2),
            v = h[0],
            y = h[1],
            L = (0, r.useState)(!1),
            j = (0, n.default)(L, 2),
            x = j[0],
            k = j[1],
            H = !1 === m,
            G = (0, s.useTranslation)().t;
          if (!f) throw Error(G('theme-context-not-correct-used'));
          (0, r.useEffect)(
            function () {
              k(Boolean(v));
            },
            [v]
          );
          return r.createElement(
            g.RightSide,
            { 'data-testid': 'header-right' },
            !a &&
              r.createElement(c.default, {
                onClick: A,
                title: G('search.packages'),
                tooltipIconType: 'search',
              }),
            r.createElement(u.default, null),
            r.createElement(c.default, {
              title: G('header.documentation'),
              tooltipIconType: 'help',
            }),
            r.createElement(c.default, {
              onClick: C,
              title: G('header.registry-info'),
              tooltipIconType: 'info',
            }),
            r.createElement(c.default, {
              onClick: function () {
                setTimeout(function () {
                  f.setIsDarkMode(!f.isDarkMode);
                }, 300);
              },
              title: G('header.documentation'),
              tooltipIconType: f.isDarkMode ? 'dark-mode' : 'light-mode',
            }),
            !H &&
              r.createElement(
                r.Fragment,
                null,
                o
                  ? r.createElement(d.default, {
                      anchorEl: v,
                      isMenuOpen: x,
                      onLoggedInMenu: function (e) {
                        y(e.currentTarget);
                      },
                      onLoggedInMenuClose: function () {
                        y(null);
                      },
                      onLogout: I,
                      username: o,
                    })
                  : r.createElement(
                      i.default,
                      {
                        color: 'inherit',
                        'data-testid': 'header--button-login',
                        onClick: function () {
                          y(null), p();
                        },
                      },
                      G('button.login')
                    )
              )
          );
        };
      p(
        m,
        'useContext{themeContext}\nuseState{[anchorEl, setAnchorEl](null)}\nuseState{[isMenuOpen, setIsMenuOpen](false)}\nuseTranslation{{ t }}\nuseEffect{}',
        function () {
          return [s.useTranslation];
        }
      );
      var I = m;
      const A = I;
      var C, f;
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          m,
          'HeaderRight',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderRight.tsx'
        ),
        C.register(
          I,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderRight.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/App/Header/HeaderToolTip.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/components/Tooltip.tsx'),
        s = a('./src/App/Header/HeaderToolTipIcon.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function (e) {
          var t = e.tooltipIconType,
            a = e.title,
            o = e.onClick;
          return n.createElement(
            r.default,
            { disableFocusListener: !0, title: a },
            n.createElement(s.default, { onClick: o, tooltipIconType: t })
          );
        },
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'HeaderToolTip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTip.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTip.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/App/Header/HeaderToolTipIcon.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Help.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Info.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/NightsStay.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Search.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/WbSunny.js'
        ),
        d = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        c = a('./src/components/IconButton.tsx'),
        u = a('./src/App/Header/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var g = (0, d.forwardRef)(function (e, t) {
          var a = e.tooltipIconType,
            o = e.onClick;
          switch (a) {
            case 'help':
              return d.createElement(
                u.StyledLink,
                {
                  'data-testid': 'header--tooltip-documentation',
                  external: !0,
                  to: 'https://verdaccio.org/docs/en/installation',
                },
                d.createElement(c.default, { color: 'inherit' }, d.createElement(n.default, null))
              );
            case 'info':
              return d.createElement(
                c.default,
                {
                  color: 'inherit',
                  'data-testid': 'header--tooltip-info',
                  id: 'header--button-registryInfo',
                  onClick: o,
                  ref: t,
                },
                d.createElement(r.default, null)
              );
            case 'search':
              return d.createElement(
                u.IconSearchButton,
                { color: 'inherit', onClick: o },
                d.createElement(i.default, null)
              );
            case 'dark-mode':
              return d.createElement(
                c.default,
                { color: 'inherit', onClick: o, ref: t },
                d.createElement(s.default, null)
              );
            case 'light-mode':
              return d.createElement(
                c.default,
                { color: 'inherit', onClick: o, ref: t },
                d.createElement(l.default, null)
              );
            default:
              return null;
          }
        }),
        p = g;
      const m = p;
      var I, A;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'HeaderToolTipIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTipIcon.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTipIcon.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/App/Header/LanguageSwitch.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => h });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/styles/withStyles.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Language.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        c = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        g = a('./src/components/AutoComplete/AutoCompleteV2.tsx'),
        p = a('./src/components/MenuItem.tsx'),
        m = a('./src/design-tokens/ThemeContext.ts'),
        I = a('./src/i18n/enabledLanguages.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var A =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        C = I.listLanguages.reduce(function (e, t) {
          return (e[t.lng] = { translation: t.menuKey, icon: t.icon }), e;
        }, {}),
        f = function () {
          var e,
            t = (0, c.useContext)(m.default),
            a = (0, c.useState)(
              Object.keys(
                (null === (e = d.default.options) || void 0 === e ? void 0 : e.resources) || {}
              )
            ),
            o = (0, r.default)(a, 1)[0],
            n = (0, u.useTranslation)().t;
          if (!t) throw Error(n('theme-context-not-correct-used'));
          var s = t.language,
            i = (0, c.useCallback)(
              function (e) {
                var a = e.language;
                t.setLanguage(a);
              },
              [t]
            ),
            l = (0, c.useCallback)(
              function (e) {
                var t = C[e] || C['en-US'];
                return { icon: c.createElement(t.icon, null), translation: n(t.translation) };
              },
              [n]
            ),
            p = (0, c.useMemo)(
              function () {
                return o.map(function (e) {
                  var t = l(e);
                  return { language: e, icon: t.icon, translation: t.translation };
                });
              },
              [o, l]
            ),
            I = (0, c.useCallback)(function (e) {
              var t = e.icon,
                a = e.translation;
              return c.createElement(x, { component: 'div' }, t, a);
            }, []),
            A = (0, c.useCallback)(function (e) {
              return e.translation;
            }, []);
          return c.createElement(
            j,
            null,
            c.createElement(g.AutoComplete, {
              defaultValue: l(s).translation,
              getOptionLabel: A,
              hasClearIcon: !0,
              inputStartAdornment: c.createElement(L, null),
              onClick: i,
              options: p,
              renderOption: I,
              variant: 'outlined',
            })
          );
        };
      A(
        f,
        'useContext{themeContext}\nuseState{[languages](Object.keys(i18next.options?.resources || {}) as Language[])}\nuseTranslation{{ t }}\nuseCallback{switchLanguage}\nuseCallback{getCurrentLngDetails}\nuseMemo{options}\nuseCallback{option}\nuseCallback{optionLabel}',
        function () {
          return [u.useTranslation];
        }
      );
      var b = f;
      const h = b;
      var v,
        y,
        L = (0, s.default)(l.default, { target: 'e1qrps3i0', label: 'StyledLanguageIcon' })(
          function (e) {
            var t = e.theme;
            return { color: null == t ? void 0 : t.palette.white };
          },
          ''
        ),
        j = (0, s.default)('div', { target: 'e1qrps3i1', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return (0,
          n.default)({ width: 220, display: 'none' }, '@media screen and (min-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'inline-block' });
        }, ''),
        x = (0, i.default)(function (e) {
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
        })(p.default);
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          C,
          'listConverted',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        v.register(
          f,
          'LanguageSwitch',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        v.register(
          L,
          'StyledLanguageIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        v.register(
          j,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        v.register(
          x,
          'StyledMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        v.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
    },
    './src/App/Header/LoginDialog/LoginDialog.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => j });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        d = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        c = a.n(d),
        u = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        g = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        p = a('./src/components/Dialog.tsx'),
        m = a('./src/components/DialogContent.tsx'),
        I = a('./src/providers/API/APIProvider.tsx'),
        A = a('./src/utils/storage.ts'),
        C = a('./src/App/AppContext.ts'),
        f = a('./src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'),
        b = a('./src/App/Header/LoginDialog/LoginDialogForm.tsx'),
        h = a('./src/App/Header/LoginDialog/LoginDialogHeader.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var v =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        y = function (e) {
          var t = e.onClose,
            a = e.open,
            o = void 0 !== a && a,
            s = (0, g.useTranslation)().t,
            d = (0, u.useContext)(C.default),
            v = (0, I.useAPI)().doLogin,
            y = (0, u.useCallback)(
              (function () {
                var e = (0, r.default)(
                  i().mark(function e(t, a) {
                    var o, n, r;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!c()(t) && !c()(a)) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (o = {
                                  type: 'error',
                                  description: l.default.t(
                                    'form-validation.username-or-password-cant-be-empty'
                                  ),
                                }),
                                e.abrupt('return', { error: o })
                              );
                            case 3:
                              return (e.prev = 3), (e.next = 6), v(t, a);
                            case 6:
                              return (n = e.sent), e.abrupt('return', n);
                            case 10:
                              return (
                                (e.prev = 10),
                                (e.t0 = e.catch(3)),
                                console.error('login error', e.t0.message),
                                (r = {
                                  type: 'error',
                                  description: l.default.t('form-validation.unable-to-sign-in'),
                                }),
                                e.abrupt('return', { error: r })
                              );
                            case 15:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 10]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              [v]
            );
          if (!d) throw Error(s('app-context-not-correct-used'));
          var L = (0, u.useState)(),
            j = (0, n.default)(L, 2),
            x = j[0],
            k = j[1],
            H = (0, u.useCallback)(
              (function () {
                var e = (0, r.default)(
                  i().mark(function e(a) {
                    var o, n, r, s;
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), y(a.username, a.password);
                          case 2:
                            (o = e.sent),
                              (n = o.username),
                              (r = o.token),
                              (s = o.error) && k(s),
                              n &&
                                r &&
                                (A.default.setItem('username', n),
                                A.default.setItem('token', r),
                                d.setUser({ username: n }),
                                t());
                          case 8:
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
              [d, t, y]
            );
          return u.createElement(
            p.default,
            {
              'data-testid': 'login--dialog',
              fullWidth: !0,
              id: 'login--dialog',
              maxWidth: 'sm',
              onClose: t,
              open: o,
            },
            u.createElement(f.default, { onClose: t }),
            u.createElement(
              m.default,
              null,
              u.createElement(h.default, null),
              u.createElement(b.default, { error: x, onSubmit: H })
            )
          );
        };
      v(
        y,
        'useTranslation{{ t }}\nuseContext{appContext}\nuseAPI{{ doLogin }}\nuseCallback{makeLogin}\nuseState{[error, setError]}\nuseCallback{handleDoLogin}',
        function () {
          return [g.useTranslation, I.useAPI];
        }
      );
      var L = y;
      const j = L;
      var x, k;
      (x = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (x.register(
          y,
          'LoginDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialog.tsx'
        ),
        x.register(
          L,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialog.tsx'
        )),
        (k =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          k(e);
    },
    './src/App/Header/LoginDialog/LoginDialogCloseButton.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Close.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = a('./src/components/DialogTitle.tsx'),
        d = a('./src/components/IconButton.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = (0, n.default)(d.default, { target: 'e5e0mp70', label: 'StyledIconButton' })(function (
          e
        ) {
          var t = e.theme;
          return {
            position: 'absolute',
            right: t.spacing() / 2,
            top: t.spacing() / 2,
            color: t.palette.grey[500],
          };
        },
        ''),
        g = function (e) {
          var t = e.onClose,
            a = (0, i.useTranslation)().t;
          return s.createElement(
            l.default,
            null,
            s.createElement(
              u,
              { 'data-testid': 'close-login-dialog-button', onClick: t },
              s.createElement(r.default, { titleAccess: a('button.close') })
            )
          );
        };
      c(g, 'useTranslation{{ t }}', function () {
        return [i.useTranslation];
      });
      var p = g;
      const m = p;
      var I, A;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          u,
          'StyledIconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        ),
        I.register(
          g,
          'LoginDialogCloseButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/App/Header/LoginDialog/LoginDialogForm.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => C });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a(
          '../../../node_modules/.pnpm/react-hook-form@7.14.2_react@17.0.2/node_modules/react-hook-form/dist/index.esm.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = a('./src/components/Button.tsx'),
        c = a('./src/components/TextField/index.ts'),
        u = a('./src/App/Header/LoginDialog/LoginDialogFormError.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = (0, r.default)('form', { target: 'e1bu7q120', label: 'StyledForm' })(function (e) {
          return { marginTop: e.theme.spacing(1) };
        }, ''),
        m = (0, r.default)(d.default, { target: 'e1bu7q121', label: 'StyledButton' })(function (e) {
          return { margin: e.theme.spacing(3, 0, 2) };
        }, ''),
        I = (0, s.memo)(
          g(
            function (e) {
              var t,
                a,
                o = e.onSubmit,
                r = e.error,
                d = (0, l.useTranslation)().t,
                g = (0, i.useForm)({ mode: 'onChange' }),
                I = g.register,
                A = g.handleSubmit,
                C = g.formState,
                f = C.isValid,
                b = C.errors;
              return s.createElement(
                p,
                {
                  noValidate: !0,
                  onSubmit: A(function (e) {
                    o(e);
                  }),
                },
                s.createElement(
                  c.default,
                  (0, n.default)(
                    {
                      autoComplete: 'username',
                      error: !!b.username,
                      fullWidth: !0,
                      helperText: null === (t = b.username) || void 0 === t ? void 0 : t.message,
                      id: 'login--dialog-username',
                    },
                    I('username', {
                      required: { value: !0, message: d('form-validation.required-field') },
                      minLength: {
                        value: 2,
                        message: d('form-validation.required-min-length', { length: 2 }),
                      },
                    }),
                    {
                      label: d('form.username'),
                      margin: 'normal',
                      name: 'username',
                      placeholder: d('form-placeholder.username'),
                      required: !0,
                      variant: 'outlined',
                    }
                  )
                ),
                s.createElement(
                  c.default,
                  (0, n.default)(
                    {
                      autoComplete: 'current-password',
                      error: !!b.password,
                      fullWidth: !0,
                      helperText: null === (a = b.password) || void 0 === a ? void 0 : a.message,
                      id: 'login--dialog-password',
                    },
                    I('password', {
                      required: { value: !0, message: d('form-validation.required-field') },
                      minLength: {
                        value: 2,
                        message: d('form-validation.required-min-length', { length: 2 }),
                      },
                    }),
                    {
                      label: d('form.password'),
                      margin: 'normal',
                      name: 'password',
                      placeholder: d('form-placeholder.password'),
                      required: !0,
                      type: 'password',
                      variant: 'outlined',
                    }
                  )
                ),
                r && s.createElement(u.default, { error: r }),
                s.createElement(
                  m,
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
                  d('button.login')
                )
              );
            },
            'useTranslation{{ t }}\nuseForm{{\n    register,\n    handleSubmit,\n    formState: { isValid, errors },\n  }}',
            function () {
              return [l.useTranslation, i.useForm];
            }
          )
        ),
        A = I;
      const C = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          p,
          'StyledForm',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        f.register(
          m,
          'StyledButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        f.register(
          I,
          'LoginDialogForm',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Header/LoginDialog/LoginDialogFormError.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => p });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Error.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a('./src/components/Box.tsx'),
        l = a('./src/components/SnackbarContent.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, n.default)(l.default, { target: 'e1vc0dug0', label: 'StyledSnackbarContent' })(
          function (e) {
            var t = e.theme;
            return {
              backgroundColor: null == t ? void 0 : t.palette.error.dark,
              color: null == t ? void 0 : t.palette.white,
            };
          },
          ''
        ),
        c = (0, n.default)(r.default, { target: 'e1vc0dug1', label: 'StyledErrorIcon' })(function (
          e
        ) {
          var t = e.theme;
          return { fontSize: 20, opacity: 0.9, marginRight: null == t ? void 0 : t.spacing(1) };
        },
        ''),
        u = (0, s.memo)(function (e) {
          var t = e.error;
          return s.createElement(d, {
            message: s.createElement(
              i.default,
              { alignItems: 'center', display: 'flex' },
              s.createElement(c, null),
              t.description
            ),
          });
        }),
        g = u;
      const p = g;
      var m, I;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          d,
          'StyledSnackbarContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        m.register(
          c,
          'StyledErrorIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        m.register(
          u,
          'LoginDialogFormError',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        m.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/App/Header/LoginDialog/LoginDialogHeader.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => A });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Close.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/LockOutlined.js'
        ),
        i = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = a('./src/components/Avatar.tsx'),
        c = a('./src/components/Box.tsx'),
        u = a('./src/components/Heading.tsx'),
        g = a('./src/components/IconButton.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = function (e) {
          var t = e.onClose,
            a = (0, l.useTranslation)().t;
          return i.createElement(
            c.default,
            {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            },
            t &&
              i.createElement(
                h,
                { 'aria-label': a('button.close'), onClick: t },
                i.createElement(r.default, null)
              ),
            i.createElement(b, null, i.createElement(s.default, null)),
            i.createElement(u.default, null, a('button.login'))
          );
        };
      p(m, 'useTranslation{{ t }}', function () {
        return [l.useTranslation];
      });
      var I = m;
      const A = I;
      var C,
        f,
        b = (0, n.default)(d.default, { target: 'enivurl0', label: 'StyledAvatar' })(function (e) {
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
        h = (0, n.default)(g.default, { target: 'enivurl1', label: 'StyledIconButton' })(function (
          e
        ) {
          var t = e.theme;
          return {
            position: 'absolute',
            right: (null == t ? void 0 : t.spacing()) / 2,
            top: (null == t ? void 0 : t.spacing()) / 2,
            color: null == t ? void 0 : t.palette.grey[500],
          };
        },
        '');
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          m,
          'LoginDialogHeader',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        C.register(
          b,
          'StyledAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        C.register(
          h,
          'StyledIconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        C.register(
          I,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/App/Header/LoginDialog/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/App/Header/LoginDialog/LoginDialog.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          AccordionContainer: () => j,
          CommandContainer: () => x,
          LinkContainer: () => k,
          default: () => w,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Accordion/Accordion.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Box/Box.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Link/Link.js'
        ),
        c = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/styles/makeStyles.js'
        ),
        u = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Typography/Typography.js'
        ),
        g = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/ExpandMore.js'
        ),
        p = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        m = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        I = a('./src/components/CopyToClipBoard.tsx'),
        A = a('./src/providers/config/index.ts'),
        C = a('./src/utils/cli-utils.ts'),
        f = a('./src/utils/constants.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var b =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        h = function (e, t) {
          return p.createElement(
            l.default,
            { display: 'flex', flexDirection: 'column', p: 1 },
            p.createElement(I.default, {
              text: (0, C.getCLISetConfigRegistry)(''.concat(f.NODE_MANAGER.npm, ' set'), e, t),
            }),
            p.createElement(I.default, {
              text: (0, C.getCLISetRegistry)(''.concat(f.NODE_MANAGER.npm, ' adduser'), t),
            }),
            p.createElement(I.default, { text: (0, C.getCLIChangePassword)(f.NODE_MANAGER.npm, t) })
          );
        },
        v = function (e, t) {
          return p.createElement(
            l.default,
            { display: 'flex', flexDirection: 'column', p: 1 },
            p.createElement(I.default, {
              text: (0, C.getCLISetConfigRegistry)(''.concat(f.NODE_MANAGER.pnpm, ' set'), e, t),
            }),
            p.createElement(I.default, {
              text: (0, C.getCLISetRegistry)(''.concat(f.NODE_MANAGER.pnpm, ' adduser'), t),
            }),
            p.createElement(I.default, {
              text: (0, C.getCLIChangePassword)(f.NODE_MANAGER.pnpm, t),
            })
          );
        },
        y = function (e, t) {
          return p.createElement(
            l.default,
            { display: 'flex', flexDirection: 'column', p: 1 },
            p.createElement(I.default, {
              text: (0, C.getCLISetConfigRegistry)(
                ''.concat(f.NODE_MANAGER.yarn, ' config set'),
                e,
                t
              ),
            })
          );
        },
        L = (0, c.default)(function (e) {
          return {
            root: { width: '100%' },
            heading: {
              fontSize: e.typography.pxToRem(15),
              fontWeight: e.typography.fontWeightBold,
            },
          };
        }),
        j = (0, n.default)('div', { target: 'eckfk9f0', label: 'AccordionContainer' })({
          name: 'hvdntx',
          styles: 'padding:30px;padding-left:0;padding-right:0;',
        }),
        x = (0, n.default)('div', { target: 'eckfk9f1', label: 'CommandContainer' })({
          name: '1g360fb',
          styles: 'padding:5px;',
        }),
        k = (0, n.default)('div', { target: 'eckfk9f2', label: 'LinkContainer' })({
          name: '5u9j9g',
          styles: 'margin:10px;margin-left:0;',
        }),
        H = function (e) {
          var t,
            a,
            o,
            n = e.scope,
            l = e.registryUrl,
            c = (0, m.useTranslation)().t,
            I = L(),
            C = (0, A.useConfig)().configOptions,
            f =
              null == C || null === (t = C.pkgManagers) || void 0 === t
                ? void 0
                : t.includes('npm'),
            b =
              null == C || null === (a = C.pkgManagers) || void 0 === a
                ? void 0
                : a.includes('yarn'),
            H =
              null == C || null === (o = C.pkgManagers) || void 0 === o
                ? void 0
                : o.includes('pnpm'),
            G = f | H | b;
          return G && n && l
            ? G
              ? p.createElement(
                  j,
                  null,
                  f &&
                    p.createElement(
                      r.default,
                      null,
                      p.createElement(
                        i.default,
                        {
                          'aria-controls': 'panel1a-content',
                          expandIcon: p.createElement(g.default, null),
                          id: 'panel1a-header',
                        },
                        p.createElement(u.default, { className: I.heading }, 'npm')
                      ),
                      p.createElement(
                        s.default,
                        null,
                        p.createElement(x, { 'data-testid': 'tab-content' }, h(n, l))
                      )
                    ),
                  b &&
                    p.createElement(
                      r.default,
                      null,
                      p.createElement(
                        i.default,
                        {
                          'aria-controls': 'panel2a-content',
                          expandIcon: p.createElement(g.default, null),
                          id: 'panel2a-header',
                        },
                        p.createElement(u.default, { className: I.heading }, 'yarn')
                      ),
                      p.createElement(
                        s.default,
                        null,
                        p.createElement(x, { 'data-testid': 'tab-content' }, y(n, l))
                      )
                    ),
                  H &&
                    p.createElement(
                      r.default,
                      null,
                      p.createElement(
                        i.default,
                        {
                          'aria-controls': 'panel3a-content',
                          expandIcon: p.createElement(g.default, null),
                          id: 'panel3a-header',
                        },
                        'pnpm'
                      ),
                      p.createElement(
                        s.default,
                        null,
                        p.createElement(x, { 'data-testid': 'tab-content' }, v(n, l))
                      )
                    ),
                  p.createElement(
                    k,
                    null,
                    p.createElement(
                      d.default,
                      { href: 'https://verdaccio.org/docs/en/cli-registry', target: '_blank' },
                      p.createElement(u.default, null, c('header.registry-info-link'))
                    )
                  )
                )
              : null
            : p.createElement(j, null, c('header.registry-no-conf'));
        };
      b(H, 'useTranslation{{ t }}\nuseStyles{classes}\nuseConfig{{ configOptions }}', function () {
        return [m.useTranslation, L, A.useConfig];
      });
      var G = H;
      const w = G;
      var D, M;
      (D = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (D.register(
          h,
          'renderNpmTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          v,
          'renderPnpmTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          y,
          'renderYarnTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          L,
          'useStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          j,
          'AccordionContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          x,
          'CommandContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          k,
          'LinkContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          H,
          'RegistryInfoContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        D.register(
          G,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        )),
        (M =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          M(e);
    },
    './src/App/Header/RegistryInfoContent/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => p });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/Button.tsx'),
        i = a('./src/components/Dialog.tsx'),
        l = a('./src/components/DialogActions.tsx'),
        d = a('./src/App/Header/RegistryInfoDialog/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var t = e.open,
            a = void 0 !== t && t,
            o = e.children,
            c = e.onClose,
            u = (0, r.useTranslation)().t;
          return n.createElement(
            i.default,
            {
              'data-testid': 'registryInfo--dialog',
              id: 'registryInfo--dialog-container',
              onClose: c,
              open: a,
            },
            n.createElement(d.Title, { disableTypography: !0 }, u('dialog.registry-info.title')),
            n.createElement(d.Content, null, o),
            n.createElement(
              l.default,
              null,
              n.createElement(
                s.default,
                { color: 'inherit', id: 'registryInfo--dialog-close', onClick: c },
                u('button.close')
              )
            )
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [r.useTranslation];
      });
      var g = u;
      const p = g;
      var m, I;
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
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/App/Header/RegistryInfoDialog/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoDialog/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Title: () => d, Content: () => c });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/DialogContent.tsx'),
        s = a('./src/components/DialogTitle.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = (0, n.default)(s.default, { target: 'e1tueu980', label: 'Title' })(function (e) {
          var t, a, o;
          return {
            backgroundColor:
              null === (t = e.theme) || void 0 === t ? void 0 : t.palette.primary.main,
            color: null === (a = e.theme) || void 0 === a ? void 0 : a.palette.white,
            fontSize: null === (o = e.theme) || void 0 === o ? void 0 : o.fontSize.lg,
          };
        }, ''),
        c = (0, n.default)(r.default, { target: 'e1tueu981', label: 'Content' })(function (e) {
          var t = e.theme;
          return {
            padding: '0 24px',
            backgroundColor: null == t ? void 0 : t.palette.background.default,
          };
        }, '');
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          d,
          'Title',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/styles.ts'
        ),
        i.register(
          c,
          'Content',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/App/Header/Search/Search.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => v });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = a.n(i),
        d = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js'),
        c = a.n(d),
        u = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        g = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        p = a(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        m = a('./src/components/AutoComplete/index.ts'),
        I = a('./src/providers/API/APIProvider.tsx'),
        A = a('./src/App/Header/Search/SearchAdornment.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var C =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = { API_DELAY: 300, ABORT_ERROR: 'AbortError' },
        b = function (e) {
          var t = e.history,
            a = (0, g.useTranslation)().t,
            o = (0, u.useState)([]),
            i = (0, s.default)(o, 2),
            d = i[0],
            p = i[1],
            C = (0, u.useState)(!1),
            b = (0, s.default)(C, 2),
            h = b[0],
            v = b[1],
            y = (0, u.useState)(''),
            L = (0, s.default)(y, 2),
            j = L[0],
            x = L[1],
            k = (0, u.useState)(!1),
            H = (0, s.default)(k, 2),
            G = H[0],
            w = H[1],
            D = (0, u.useState)(!1),
            M = (0, s.default)(D, 2),
            T = M[0],
            P = M[1],
            _ = (0, u.useRef)(!0),
            S = (0, u.useState)([]),
            E = (0, s.default)(S, 2),
            N = E[0],
            R = E[1],
            O = (0, I.useAPI)().callSearch,
            V = (0, u.useCallback)(
              function () {
                N.forEach(function (e) {
                  return e.abort();
                }),
                  R([]);
              },
              [N, R]
            ),
            z = (0, u.useCallback)(
              function (e) {
                e.stopPropagation(), v(!1), P(!1), w(!1), V();
              },
              [v, P, V, w]
            ),
            B = (0, u.useCallback)(
              function (e, t) {
                var a = t.newValue,
                  o = t.method;
                if ((e.stopPropagation(), 'type' === o)) {
                  var n = a.trim();
                  P(!0), w(!1), x(n), v(!1), 0 === (null == n ? void 0 : n.length) && V();
                }
              },
              [V]
            ),
            U = (0, u.useCallback)(
              function () {
                p([]);
              },
              [p]
            ),
            Z = (0, u.useCallback)(
              function (e, a) {
                var o = a.suggestionValue,
                  n = a.method;
                switch ((e.stopPropagation(), n)) {
                  case 'click':
                  case 'enter':
                    x(''), t.push('/-/web/detail/'.concat(o));
                }
              },
              [t]
            ),
            W = (0, u.useCallback)(
              (function () {
                var e = (0, r.default)(
                  l().mark(function e(t) {
                    var a, o, r, s;
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = t.value),
                                (e.prev = 1),
                                (o = new window.AbortController()),
                                (r = o.signal),
                                _.current)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt('return', null);
                            case 6:
                              return R([].concat((0, n.default)(N), [o])), (e.next = 9), O(a, r);
                            case 9:
                              (s = e.sent), p(s), v(!0), (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(1)),
                                e.t0.name === f.ABORT_ERROR ? (w(!1), v(!1)) : (w(!0), v(!1));
                            case 17:
                              return (e.prev = 17), _.current && P(!1), e.finish(17);
                            case 20:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 14, 17, 20]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [N, R, p, v, w, P, O]
            );
          return (
            (0, u.useEffect)(function () {
              return function () {
                _.current = !1;
              };
            }, []),
            u.createElement(m.default, {
              onBlur: z,
              onChange: B,
              onCleanSuggestions: U,
              onClick: Z,
              onSuggestionsFetch: c()(W, f.API_DELAY),
              placeholder: a('search.packages'),
              startAdornment: u.createElement(A.default, null),
              suggestions: d,
              suggestionsError: G,
              suggestionsLoaded: h,
              suggestionsLoading: T,
              value: j,
            })
          );
        };
      C(
        b,
        "useTranslation{{ t }}\nuseState{[suggestions, setSuggestions]([])}\nuseState{[loaded, setLoaded](false)}\nuseState{[search, setSearch]('')}\nuseState{[error, setError](false)}\nuseState{[loading, setLoading](false)}\nuseRef{mountedRef}\nuseState{[requestList, setRequestList]([])}\nuseAPI{{ callSearch }}\nuseCallback{cancelAllSearchRequests}\nuseCallback{handleOnBlur}\nuseCallback{handleSearch}\nuseCallback{handlePackagesClearRequested}\nuseCallback{handleClickSearch}\nuseCallback{handleFetchPackages}\nuseEffect{}",
        function () {
          return [g.useTranslation, I.useAPI];
        }
      );
      var h = (0, p.withRouter)(b);
      const v = h;
      var y, L;
      (y = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (y.register(
          f,
          'CONSTANTS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        ),
        y.register(
          b,
          'Search',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        ),
        y.register(
          h,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/App/Header/Search/SearchAdornment.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Search.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a('./src/components/InputAdornment/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = (0, n.default)(i.default, { target: 'e1skelk0', label: 'StyledInputAdornment' })(
          function (e) {
            var t;
            return { color: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.white };
          },
          ''
        ),
        d = function () {
          return s.createElement(l, { position: 'start' }, s.createElement(r.default, null));
        },
        c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          l,
          'StyledInputAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/SearchAdornment.tsx'
        ),
        g.register(
          d,
          'SearchAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/SearchAdornment.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/SearchAdornment.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/App/Header/Search/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/App/Header/Search/Search.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/App/Header/Header.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          InnerNavBar: () => p,
          Greetings: () => m,
          RightSide: () => I,
          LeftSide: () => A,
          MobileNavBar: () => C,
          InnerMobileNavBar: () => f,
          IconSearchButton: () => b,
          SearchWrapper: () => h,
          NavBar: () => v,
          StyledLink: () => y,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@emotion+core@10.1.1_react@17.0.2/node_modules/@emotion/core/dist/core.browser.esm.js'
        ),
        i = a('./src/components/AppBar.tsx'),
        l = a('./src/components/IconButton.tsx'),
        d = a('./src/components/Link.tsx'),
        c = a('./src/components/Toolbar.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var u,
        g,
        p = (0, r.default)(c.default, { target: 'e1onlrbh0', label: 'InnerNavBar' })({
          name: '1bjere7',
          styles: 'justify-content:space-between;align-items:center;padding:0 15px;',
        }),
        m = (0, r.default)('span', { target: 'e1onlrbh1', label: 'Greetings' })({
          name: '1n523ko',
          styles: 'margin:0 5px 0 0;',
        }),
        I = (0, r.default)(c.default, { target: 'e1onlrbh2', label: 'RightSide' })({
          name: '1qii1b7',
          styles: 'display:flex;padding:0;',
        }),
        A = (0, r.default)(I, { target: 'e1onlrbh3', label: 'LeftSide' })({
          name: '1rr4qq7',
          styles: 'flex:1;',
        }),
        C = (0, r.default)('div', { target: 'e1onlrbh4', label: 'MobileNavBar' })(function (e) {
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
        f = (0, r.default)('div', { target: 'e1onlrbh5', label: 'InnerMobileNavBar' })(function (
          e
        ) {
          var t, a;
          return {
            borderRadius: '4px',
            backgroundColor: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.greyLight,
            color: null === (a = e.theme) || void 0 === a ? void 0 : a.palette.white,
            width: '100%',
            padding: '0 5px',
            margin: '0 10px 0 0',
          };
        },
        ''),
        b = (0, r.default)(l.default, { target: 'e1onlrbh6', label: 'IconSearchButton' })({
          name: '13o7eu2',
          styles: 'display:block;',
        }),
        h = (0, r.default)('div', { target: 'e1onlrbh7', label: 'SearchWrapper' })({
          name: '1xh5hcv',
          styles: 'display:none;width:100%;',
        }),
        v = (0, r.default)(i.default, { target: 'e1onlrbh8', label: 'NavBar' })(function (e) {
          var t,
            a = e.theme;
          return (
            (t = {
              backgroundColor:
                'light' === (null == a ? void 0 : a.palette.type)
                  ? null == a
                    ? void 0
                    : a.palette.primary.main
                  : null == a
                  ? void 0
                  : a.palette.cyanBlue,
              color: null == a ? void 0 : a.palette.white,
              minHeight: 60,
              display: 'flex',
              justifyContent: 'center',
            }),
            (0, n.default)(
              t,
              '@media (min-width: '.concat(null == a ? void 0 : a.breakPoints.medium, 'px)'),
              (0, s.css)(
                h,
                '{display:flex;}',
                b,
                '{display:none;}',
                C,
                '{display:none;};label:NavBar;'
              )
            ),
            (0, n.default)(
              t,
              '@media (min-width: '.concat(null == a ? void 0 : a.breakPoints.large, 'px)'),
              (0, s.css)(p, '{padding:0 20px;};label:NavBar;')
            ),
            (0, n.default)(
              t,
              '@media (min-width: '.concat(null == a ? void 0 : a.breakPoints.xlarge, 'px)'),
              (0, s.css)(p, '{max-width:1240px;width:100%;margin:0 auto;};label:NavBar;')
            ),
            t
          );
        }, ''),
        y = (0, r.default)(d.default, { target: 'e1onlrbh9', label: 'StyledLink' })(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.white };
        }, '');
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          p,
          'InnerNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          m,
          'Greetings',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          I,
          'RightSide',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          A,
          'LeftSide',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          C,
          'MobileNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          f,
          'InnerMobileNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          b,
          'IconSearchButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          h,
          'SearchWrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          v,
          'NavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          y,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/App/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default, AppContextProvider: () => n.default });
      var o = a('./src/App/App.tsx'),
        n = a('./src/App/AppContextProvider.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/utils/loadable.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => s });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r = function (e) {
        var t = (0, n.lazy)(e);
        return function (e) {
          return n.createElement(n.Suspense, { fallback: null }, n.createElement(t, e));
        };
      };
      const s = r;
      var i, l;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        i.register(
          r,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/utils/loadable.tsx'
        ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/ActionBar/ActionBar.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => p });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/utils/url.ts'),
        i = a('./src/pages/Version/index.ts'),
        l = a('./src/components/Box.tsx'),
        d = a('./src/components/ActionBar/ActionBarAction.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function () {
          var e = r.useContext(i.DetailContext).packageMeta;
          if (null == e || !e.latest) return null;
          var t = e.latest,
            a = t.homepage,
            o = t.bugs,
            c = t.dist,
            u = [];
          return (
            a && (0, s.isURL)(a) && u.push({ type: 'VISIT_HOMEPAGE', link: a }),
            null != o &&
              o.url &&
              (0, s.isURL)(o.url) &&
              u.push({ type: 'OPEN_AN_ISSUE', link: o.url }),
            null != c &&
              c.tarball &&
              (0, s.isURL)(c.tarball) &&
              u.push({ type: 'DOWNLOAD_TARBALL', link: c.tarball }),
            r.createElement(
              l.default,
              { alignItems: 'center', display: 'flex', marginBottom: '14px' },
              u.map(function (e) {
                return r.createElement(d.default, (0, n.default)({ key: e.link }, e));
              })
            )
          );
        };
      c(u, 'useContext{detailContext}');
      var g = u;
      const p = g;
      var m, I;
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
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/components/ActionBar/ActionBarAction.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Fab: () => b, default: () => y });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/BugReport.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/CloudDownload.js'
        ),
        c = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Home.js'
        ),
        u = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        g = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        p = a('./src/providers/API/APIProvider.tsx'),
        m = a('./src/utils/url.ts'),
        I = a('./src/components/FloatingActionButton.tsx'),
        A = a('./src/components/Link.tsx'),
        C = a('./src/components/Tooltip.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var f =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        b = (0, r.default)(I.default, { target: 'eouwtqf0', label: 'Fab' })(function (e) {
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
        h = function (e) {
          var t = e.type,
            a = e.link,
            o = (0, g.useTranslation)().t,
            r = (0, p.useAPI)().getResource,
            s = (0, u.useCallback)(
              (0, n.default)(
                i().mark(function e() {
                  var t, o;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r(a);
                        case 2:
                          (t = e.sent), (o = (0, m.extractFileName)(a)), (0, m.downloadFile)(t, o);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [r, a]
            );
          switch (t) {
            case 'VISIT_HOMEPAGE':
              return u.createElement(
                C.default,
                { title: o('action-bar-action.visit-home-page') },
                u.createElement(
                  A.default,
                  { external: !0, to: a },
                  u.createElement(b, { size: 'small' }, u.createElement(c.default, null))
                )
              );
            case 'OPEN_AN_ISSUE':
              return u.createElement(
                C.default,
                { title: o('action-bar-action.open-an-issue') },
                u.createElement(
                  A.default,
                  { external: !0, to: a },
                  u.createElement(b, { size: 'small' }, u.createElement(l.default, null))
                )
              );
            case 'DOWNLOAD_TARBALL':
              return u.createElement(
                C.default,
                { title: o('action-bar-action.download-tarball') },
                u.createElement(
                  b,
                  { 'data-testid': 'download-tarball-btn', onClick: s, size: 'small' },
                  u.createElement(d.default, null)
                )
              );
          }
        };
      f(
        h,
        'useTranslation{{ t }}\nuseAPI{{ getResource }}\nuseCallback{handleDownload}',
        function () {
          return [g.useTranslation, p.useAPI];
        }
      );
      var v = h;
      const y = v;
      var L, j;
      (L = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (L.register(
          b,
          'Fab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBarAction.tsx'
        ),
        L.register(
          h,
          'ActionBarAction',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBarAction.tsx'
        ),
        L.register(
          v,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ActionBar/ActionBarAction.tsx'
        )),
        (j =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          j(e);
    },
    './src/components/ActionBar/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/ActionBar/ActionBar.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/AppBar.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/AppBar/AppBar.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'AppBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AppBar.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AppBar.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Author/Author.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => I });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Avatar/Avatar.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/utils/package.ts'),
        l = a('./src/utils/url.ts'),
        d = a('./src/pages/Version/index.ts'),
        c = a('./src/components/List.tsx'),
        u = a('./src/components/Author/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function () {
          var e = (0, r.useContext)(d.DetailContext).packageMeta,
            t = (0, s.useTranslation)().t;
          if (!e) return null;
          var a = e.latest,
            o = a.author,
            g = a.name,
            p = a.version;
          if (!o) return null;
          var m = o.email,
            I = o.name,
            A = r.createElement(n.default, { alt: o.name, src: o.avatar });
          return r.createElement(
            c.default,
            {
              subheader: r.createElement(
                u.StyledText,
                { variant: 'subtitle1' },
                t('sidebar.author.title')
              ),
            },
            r.createElement(
              u.AuthorListItem,
              { button: !0 },
              m && (0, l.isEmail)(m)
                ? r.createElement(
                    'a',
                    {
                      href: 'mailto:'.concat(m, '?subject=').concat(g, '@').concat(p),
                      target: '_top',
                    },
                    A
                  )
                : A,
              I && r.createElement(u.AuthorListItemText, { primary: (0, i.getAuthorName)(I) })
            )
          );
        };
      g(p, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var m = p;
      const I = m;
      var A, C;
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          p,
          'Author',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/Author.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/Author.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/Author/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/Author/Author.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Author/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { StyledText: () => c, AuthorListItem: () => u, AuthorListItemText: () => g });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/ListItem.tsx'),
        s = a('./src/components/ListItemText.tsx'),
        i = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        d,
        c = (0, n.default)(i.default, { target: 'e1xuehjw0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        u = (0, n.default)(r.default, { target: 'e1xuehjw1', label: 'AuthorListItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        g = (0, n.default)(s.default, { target: 'e1xuehjw2', label: 'AuthorListItemText' })({
          name: 'fipixf',
          styles: 'padding:0 10px;margin:0;',
        });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          c,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/styles.ts'
        ),
        l.register(
          u,
          'AuthorListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/styles.ts'
        ),
        l.register(
          g,
          'AuthorListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Author/styles.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/components/AutoComplete/AutoComplete.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => H });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/autosuggest-highlight@3.1.1/node_modules/autosuggest-highlight/match/index.js'
        ),
        i = a.n(s),
        l = a(
          '../../../node_modules/.pnpm/autosuggest-highlight@3.1.1/node_modules/autosuggest-highlight/parse/index.js'
        ),
        d = a.n(l),
        c = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = a(
          '../../../node_modules/.pnpm/react-autosuggest@10.1.0_react@17.0.2/node_modules/react-autosuggest/dist/index.js'
        ),
        g = a.n(u),
        p = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        m = a('./src/components/MenuItem.tsx'),
        I = a('./src/components/AutoComplete/styles.tsx');
      e = a.hmd(e);
      var A,
        C = ['ref', 'startAdornment', 'disableUnderline', 'onKeyDown'];
      (A =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        A(e);
      var f =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        b = (0, r.default)('a', { target: 'e1c61cvw0', label: 'StyledAnchor' })(function (e) {
          return {
            fontWeight:
              e.theme && e.highlight ? e.theme.fontWeight.semiBold : e.theme.fontWeight.light,
          };
        }, ''),
        h = (0, r.default)(m.default, { target: 'e1c61cvw1', label: 'StyledMenuItem' })({
          name: '4g6ai3',
          styles: 'cursor:pointer;',
        }),
        v = function (e) {
          var t = e.ref,
            a = e.startAdornment,
            r = e.disableUnderline,
            s = e.onKeyDown,
            i = (0, n.default)(e, C);
          return c.createElement(
            I.InputField,
            (0, o.default)(
              {
                fullWidth: !0,
                InputProps: {
                  inputRef: function (e) {
                    t(e);
                  },
                  startAdornment: a,
                  disableUnderline: r,
                  onKeyDown: s,
                },
              },
              i
            )
          );
        },
        y = function (e) {
          return e.name;
        },
        L = function (e, t) {
          var a = t.query,
            o = t.isHighlighted,
            n = i()(e.name, a),
            r = d()(e.name, n);
          return c.createElement(
            h,
            { component: 'div', selected: o },
            c.createElement(
              'div',
              null,
              r.map(function (e, t) {
                return c.createElement(b, { highlight: e.highlight, key: String(t) }, e.text);
              })
            )
          );
        },
        j = function (e) {
          return c.createElement(
            m.default,
            { component: 'div', selected: !1 },
            c.createElement('div', null, e)
          );
        },
        x = (0, c.memo)(
          f(
            function (e) {
              var t = e.suggestions,
                a = e.startAdornment,
                n = e.onChange,
                r = e.onSuggestionsFetch,
                s = e.onCleanSuggestions,
                i = e.value,
                l = void 0 === i ? '' : i,
                d = e.placeholder,
                u = void 0 === d ? '' : d,
                m = e.disableUnderline,
                A = void 0 !== m && m,
                C = e.onClick,
                f = e.onKeyDown,
                b = e.onBlur,
                h = e.suggestionsLoading,
                x = void 0 !== h && h,
                k = e.suggestionsLoaded,
                H = void 0 !== k && k,
                G = e.suggestionsError,
                w = void 0 !== G && G,
                D = (0, p.useTranslation)().t,
                M = {
                  value: l,
                  onChange: n,
                  placeholder: u,
                  startAdornment: a,
                  disableUnderline: A,
                  onKeyDown: f,
                  onBlur: b,
                };
              return c.createElement(
                I.Wrapper,
                null,
                c.createElement(g(), {
                  renderInputComponent: v,
                  suggestions: t,
                  getSuggestionValue: y,
                  renderSuggestion: L,
                  onSuggestionsFetchRequested: r,
                  onSuggestionsClearRequested: s,
                  inputProps: M,
                  onSuggestionSelected: C,
                  renderSuggestionsContainer: function (e) {
                    var t = e.containerProps,
                      a = e.children,
                      n = e.query;
                    return c.createElement(
                      I.SuggestionContainer,
                      (0, o.default)({}, t, { square: !0 }),
                      H && null === a && n && j(D('autoComplete.no-results-found')),
                      x && n && j(D('autoComplete.loading')),
                      w && j(D('error.unspecific')),
                      a
                    );
                  },
                })
              );
            },
            'useTranslation{{ t }}',
            function () {
              return [p.useTranslation];
            }
          )
        ),
        k = x;
      const H = k;
      var G, w;
      (G = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (G.register(
          b,
          'StyledAnchor',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          h,
          'StyledMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          v,
          'renderInputComponent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          y,
          'getSuggestionValue',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          L,
          'renderSuggestion',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          j,
          'renderMessage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          x,
          'AutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        G.register(
          k,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        )),
        (w =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          w(e);
    },
    './src/components/AutoComplete/AutoCompleteV2.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { AutoComplete: () => L });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/styles/withStyles.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Close.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/ExpandMore.js'
        ),
        c = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        g = a('./src/design-tokens/useOnClickOutside.ts'),
        p = a('./src/components/IconButton.tsx'),
        m = a('./src/components/MenuItem.tsx'),
        I = a('./src/components/Paper.tsx'),
        A = a('./src/components/TextField/index.ts'),
        C = a('./src/components/AutoComplete/useAutoComplete.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var f =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        b = (0, C.createFilterOptions)(),
        h = function (e) {
          var t = e.placeholder,
            a = e.defaultValue,
            o = void 0 === a ? '' : a,
            n = e.label,
            s = e.variant,
            i = e.inputStartAdornment,
            I = e.options,
            A = e.getOptionLabel,
            C = e.renderOption,
            f = e.className,
            h = e.onClick,
            v = e.hasClearIcon,
            y = (0, u.useTranslation)().t,
            L = (0, c.useState)(o),
            D = (0, r.default)(L, 2),
            M = D[0],
            T = D[1],
            P = (0, c.useState)(I),
            _ = (0, r.default)(P, 2),
            S = _[0],
            E = _[1],
            N = (0, c.useState)(0),
            R = (0, r.default)(N, 2),
            O = R[0],
            V = R[1],
            z = (0, c.useState)(!1),
            B = (0, r.default)(z, 2),
            U = B[0],
            Z = B[1],
            W = (0, c.useRef)(null),
            F = (0, c.useRef)(null),
            Y = (0, c.useRef)(null),
            Q = (0, c.useCallback)(
              function () {
                Z(!1), M.trim() || T(o);
              },
              [M, o]
            ),
            q = (0, c.useCallback)(
              function () {
                var e = b(I, { inputValue: M, getOptionLabel: A });
                E(e);
              },
              [I, M, A]
            ),
            J = (0, c.useCallback)(
              function () {
                var e,
                  t =
                    null == Y || null === (e = Y.current) || void 0 === e ? void 0 : e.children[O];
                t && t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              },
              [O]
            );
          (0, g.useOnClickOutside)(W, (0, c.useCallback)(Q, [W, M])),
            (0, c.useEffect)(q, [M]),
            (0, c.useEffect)(J, [O]),
            (0, c.useEffect)(
              function () {
                T(o);
              },
              [o]
            );
          var X = (0, c.useCallback)(function (e) {
              T(e.target.value);
            }, []),
            K = (0, c.useCallback)(
              function () {
                Z(!U);
              },
              [U]
            ),
            $ = (0, c.useCallback)(function () {
              T(''), E([]), Z(!0), F.current && F.current.focus();
            }, []),
            ee = (0, c.useCallback)(
              function (e) {
                return function () {
                  h && h(e), T(A(e)), Z(!1), F.current && F.current.blur();
                };
              },
              [A, h]
            ),
            te = (0, c.useCallback)(function () {
              Z(!0);
            }, []),
            ae = (0, c.useCallback)(
              function (e) {
                if (13 === e.keyCode) return V(0), Z(!1), void ee(S[O])();
                if (38 !== e.keyCode)
                  if (40 !== e.keyCode);
                  else {
                    if (O + 1 >= S.length) return;
                    V(O + 1);
                  }
                else {
                  if (0 === O) return;
                  V(O - 1);
                }
              },
              [O, ee, S]
            ),
            oe = (0, c.useCallback)(
              function () {
                return C
                  ? S.map(function (e, t) {
                      return c.createElement(
                        G,
                        { isSelected: t === O, key: t, onClick: ee(e), tabIndex: 0 },
                        C(e)
                      );
                    })
                  : S.map(function (e, t) {
                      return c.createElement(
                        m.default,
                        {
                          component: 'div',
                          key: t,
                          onClick: ee(e),
                          selected: t === O,
                          tabIndex: 0,
                        },
                        A(e)
                      );
                    });
              },
              [S, O, A, C, ee]
            );
          return c.createElement(
            j,
            { className: f, ref: W },
            c.createElement(k, {
              autoComplete: 'off',
              InputProps: {
                startAdornment: i,
                endAdornment: c.createElement(
                  x,
                  null,
                  v &&
                    M.length > 0 &&
                    c.createElement(
                      p.default,
                      {
                        color: 'inherit',
                        onClick: $,
                        size: 'small',
                        title: y('autoComplete.clear'),
                      },
                      c.createElement(l.default, { fontSize: 'small' })
                    ),
                  c.createElement(
                    H,
                    {
                      color: 'inherit',
                      onClick: K,
                      showOptions: U,
                      size: 'small',
                      title: y(U ? 'autoComplete.collapse' : 'autoComplete.expand'),
                    },
                    c.createElement(d.default, { fontSize: 'small' })
                  )
                ),
              },
              inputRef: F,
              label: n,
              onChange: X,
              onFocus: te,
              onKeyDown: ae,
              placeholder: t,
              value: M,
              variant: s,
            }),
            U && c.createElement(w, { ref: Y, square: !0 }, oe())
          );
        };
      f(
        h,
        'useTranslation{{ t }}\nuseState{[searchTerm, setSearchTerm](defaultValue)}\nuseState{[options, setOptions](suggestions)}\nuseState{[activeOption, setActiveOption](0)}\nuseState{[showOptions, setShowOptions](false)}\nuseRef{wrapperRef}\nuseRef{inputRef}\nuseRef{contentRef}\nuseCallback{clickOutside}\nuseCallback{filterOptions}\nuseCallback{scrollIntoOption}\nuseOnClickOutside{}\nuseCallback{}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseCallback{handleChange}\nuseCallback{handleToggleShowOptions}\nuseCallback{handleClear}\nuseCallback{handleClickOption}\nuseCallback{handleFocus}\nuseCallback{onKeyDown}\nuseCallback{renderOptions}',
        function () {
          return [u.useTranslation, g.useOnClickOutside];
        }
      );
      var v,
        y,
        L = (0, c.memo)(h),
        j = (0, s.default)('div', { target: 'e1s7m15r0', label: 'Wrapper' })({
          name: '16kiram',
          styles: 'position:relative;height:40px;',
        }),
        x = (0, s.default)('div', { target: 'e1s7m15r1', label: 'EndAdornment' })({
          name: 'k008qs',
          styles: 'display:flex;',
        }),
        k = (0, s.default)(A.default, { target: 'e1s7m15r2', label: 'StyledTextField' })(function (
          e
        ) {
          var t,
            a = e.theme;
          return (
            (t = { height: 40, color: null == a ? void 0 : a.palette.white }),
            (0, n.default)(t, '& .MuiInputBase-root', {
              height: 40,
              color: null == a ? void 0 : a.palette.white,
            }),
            (0, n.default)(t, '& .MuiInputBase-inputAdornedStart', {
              paddingLeft: null == a ? void 0 : a.spacing(2),
            }),
            (0, n.default)(t, '& .MuiInputBase-input', {
              paddingTop: null == a ? void 0 : a.spacing(1),
              paddingBottom: null == a ? void 0 : a.spacing(1),
            }),
            (0, n.default)(t, '& .MuiOutlinedInput-notchedOutline', { borderColor: 'transparent' }),
            (0, n.default)(t, '& :hover .MuiOutlinedInput-notchedOutline', {
              borderColor: null == a ? void 0 : a.palette.white,
            }),
            (0, n.default)(t, '& :active .MuiOutlinedInput-notchedOutline', {
              borderColor: null == a ? void 0 : a.palette.white,
            }),
            t
          );
        },
        ''),
        H = (0, s.default)(p.default, {
          shouldForwardProp: function (e) {
            return 'showOptions' !== e;
          },
          target: 'e1s7m15r3',
          label: 'ExpandButton',
        })(function (e) {
          return { transform: e.showOptions ? 'rotate(180deg)' : 'none' };
        }, ''),
        G = (0, s.default)('div', { target: 'e1s7m15r4', label: 'Option' })(function (e) {
          return { background: e.isSelected ? 'rgba(0, 0, 0, 0.08)' : 'none' };
        }, ''),
        w = (0, i.default)(function (e) {
          return {
            root: {
              marginTop: null == e ? void 0 : e.spacing(0.5),
              borderRadius: 3,
              maxHeight: 165,
              overflowY: 'scroll',
              overflowX: 'hidden',
            },
          };
        })(I.default);
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          b,
          'defaultFilterOptions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          h,
          'AutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          L,
          'MemoizedAutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          j,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          x,
          'EndAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          k,
          'StyledTextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          H,
          'ExpandButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          G,
          'Option',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        v.register(
          w,
          'StyledPaper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
    },
    './src/components/AutoComplete/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/AutoComplete/AutoComplete.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/AutoComplete/styles.tsx': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          Wrapper: () => g,
          StyledTextField: () => p,
          InputField: () => m,
          SuggestionContainer: () => I,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        i = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = a('./src/components/Paper.tsx'),
        d = a('./src/components/TextField/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c,
        u,
        g = (0, s.default)('div', { target: 'e1rflf270', label: 'Wrapper' })({
          name: '1h0dbja',
          styles: 'width:100%;height:32px;position:relative;z-index:1;',
        }),
        p = (0, s.default)(d.default, { target: 'e1rflf271', label: 'StyledTextField' })(function (
          e
        ) {
          var t, a, o, n;
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
                null === (a = e.theme) || void 0 === a ? void 0 : a.breakPoints.medium,
                'px)'
              ),
              { ':hover:after': { content: "''" } }
            ),
            '& .MuiInputBase-input': (0, r.default)(
              {},
              '@media screen and (min-width: '.concat(
                null === (o = e.theme) || void 0 === o ? void 0 : o.breakPoints.medium,
                'px)'
              ),
              { color: null === (n = e.theme) || void 0 === n ? void 0 : n.palette.white }
            ),
          };
        },
        ''),
        m = function (e) {
          var t = (0, n.default)({}, e);
          return i.createElement(p, t);
        },
        I = (0, s.default)(l.default, { target: 'e1rflf272', label: 'SuggestionContainer' })({
          name: 'g31ddt',
          styles: 'max-height:500px;overflow-y:auto;',
        });
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          g,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        c.register(
          p,
          'StyledTextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        c.register(
          m,
          'InputField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        c.register(
          I,
          'SuggestionContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/AutoComplete/useAutoComplete.tsx': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { createFilterOptions: () => i }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var n, r;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function s(e) {
        return void 0 !== e.normalize ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : e;
      }
      function i(e) {
        var t = e || {},
          a = t.ignoreAccents,
          o = void 0 === a || a,
          n = t.ignoreCase,
          r = void 0 === n || n,
          i = t.trim,
          l = void 0 !== i && i,
          d = t.limit,
          c = t.matchFrom,
          u = void 0 === c ? 'any' : c;
        return function (e, t) {
          var a = t.inputValue,
            n = t.getOptionLabel,
            i = l ? a.trim() : a;
          r && (i = i.toLowerCase()), o && (i = s(i));
          var c = e.filter(function (e) {
            var t = n(e);
            return (
              r && (t = t.toLowerCase()),
              o && (t = s(t)),
              'start' === u ? 0 === t.indexOf(i) : t.indexOf(i) > -1
            );
          });
          return 'number' == typeof d ? c.slice(0, d) : c;
        };
      }
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          s,
          'stripDiacritics',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/useAutoComplete.tsx'
        ),
        n.register(
          i,
          'createFilterOptions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/useAutoComplete.tsx'
        )),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/components/Avatar.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => s });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Avatar/Avatar.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r = n.default;
      const s = r;
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
    './src/components/Box.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => l });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Box/Box.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function s(e) {
        return r.createElement(n.default, e);
      }
      var i = s;
      const l = i;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
          'Box',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Box.tsx'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Box.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Button.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Button/Button.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Button',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Button.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Button.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Card.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Card/Card.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Card',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Card.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Card.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/CardActions.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/CardActions/CardActions.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'CardActions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardActions.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardActions.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/CardContent.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/CardContent/CardContent.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'CardContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardContent.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CardContent.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Chip.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Chip/Chip.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Chip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Chip.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Chip.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/CircularProgress.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'CircularProgress',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CircularProgress.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CircularProgress.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/CopyToClipBoard.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => I });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/FileCopy.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = a('./src/utils/cli-utils.ts'),
        d = a('./src/components/IconButton.tsx'),
        c = a('./src/components/Tooltip.tsx');
      e = a.hmd(e);
      var u,
        g = ['text', 'children'];
      function p(e) {
        var t = e.text,
          a = e.children,
          n = (0, o.default)(e, g),
          u = (0, i.useTranslation)().t;
        return s.createElement(
          f,
          n,
          s.createElement(b, null, null != a ? a : t),
          s.createElement(
            c.default,
            { disableFocusListener: !0, title: u('copy-to-clipboard') },
            s.createElement(
              d.default,
              { onClick: (0, l.copyToClipBoardUtility)(t), 'data-testid': 'copy-icon' },
              s.createElement(r.default, null)
            )
          )
        );
      }
      (u =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        u(e),
        ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            })(p, 'useTranslation{{ t }}', function () {
          return [i.useTranslation];
        });
      var m = p;
      const I = m;
      var A,
        C,
        f = (0, n.default)('div', { target: 'ee5tpkh0', label: 'Wrapper' })({
          name: '1lekzkb',
          styles: 'display:flex;align-items:center;justify-content:space-between;',
        }),
        b = (0, n.default)('span', { target: 'ee5tpkh1', label: 'Content' })({
          name: 'pvp01g',
          styles:
            'display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:21px;font-size:1rem;',
        });
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          p,
          'CopyToClipBoard',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        A.register(
          f,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        A.register(
          b,
          'Content',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/Dialog.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Dialog/Dialog.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Dialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Dialog.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Dialog.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/DialogActions.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/DialogActions/DialogActions.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'DialogActions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogActions.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogActions.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/DialogContent.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/DialogContent/DialogContent.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'DialogContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogContent.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogContent.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/DialogTitle.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'DialogTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogTitle.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogTitle.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Divider.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Divider/Divider.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Divider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Divider.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Divider.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/FloatingActionButton.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Fab/Fab.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(
            r.default,
            (0, n.default)({}, e, { ref: t, 'data-testid': 'fab' })
          );
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'FloatingActionButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/FloatingActionButton.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/FloatingActionButton.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Grid.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Grid/Grid.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Grid',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Grid.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Grid.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Heading.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Typography/Typography.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = a.hmd(e);
      var i,
        l = ['variant'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, s.forwardRef)(function (e, t) {
          var a = e.variant,
            i = void 0 === a ? 'h6' : a,
            d = (0, n.default)(e, l);
          return s.createElement(r.default, (0, o.default)({}, d, { variant: i, ref: t }));
        }),
        c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'Heading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Heading.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Heading.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/IconButton.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/IconButton/IconButton.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'IconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/IconButton.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/IconButton.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Icons/Earth.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Earth: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/components/SvgIcon.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = r.forwardRef(function (e, t) {
          return r.createElement(
            s.SvgIcon,
            (0, n.default)({ viewBox: '0 0 45 45' }, e, { ref: t }),
            r.createElement(
              'defs',
              null,
              r.createElement(
                'clipPath',
                { id: 'prefix__a' },
                r.createElement('path', { d: 'M0 36h36V0H0v36z' })
              ),
              r.createElement(
                'clipPath',
                { id: 'prefix__b' },
                r.createElement('path', {
                  d: 'M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0s18 8.059 18 18-8.059 18-18 18z',
                })
              )
            ),
            r.createElement(
              'g',
              { clipPath: 'url(#prefix__a)', transform: 'matrix(1.25 0 0 -1.25 0 45)' },
              r.createElement('path', {
                d: 'M36 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18 18-8.059 18-18',
                fill: '#88c9f9',
              })
            ),
            r.createElement(
              'g',
              { clipPath: 'url(#prefix__b)', transform: 'matrix(1.25 0 0 -1.25 0 45)' },
              r.createElement('path', {
                d: 'M3.627 28.952c-.45 2.93 2.195 4.156 3.607 4.47 1.412.314 2.776.62 2.933-.006.156-.628.311-1.46 1.173-1.148.862.314 3.043.56 4.063 1.342 1.02.783 2.244.787 3.264.473 1.02-.313 3.877-.227 3.25-1.167-.627-.94-1.825-.827-2.45-1.924-.628-1.099.171-1.826 1.033-1.826.865 0 1.71-.135 2.26.727.548.863-.383 2.463.324 2.357.706-.106 1.477-.866 2.03-2.043.547-1.176 1.408-.47 1.723-1.176.313-.705 2.04-2.039 1.177-1.804-.864.236-1.726.392-1.96-.47-.237-.863.388-1.726-.237-1.647-.627.08-.86-.089-1.725-.004-.862.083-1.333.631-2.039-.545-.705-1.175-1.254-1.96-1.567-2.509-.315-.549-.785-.86-.55-1.96.235-1.099-.628-.785-.628.156 0 .94-.548 1.098-1.253.942-.706-.157-1.803-.313-1.724-1.098.077-.784-.315-1.725.313-2.352.627-.629 1.33.076 1.723-.158.393-.237 1.525-.023 1.133-.416-.393-.39-1.76-.88-.976-1.509a4.831 4.831 0 011.893-.907c.313-.08.062.774 1.083 1.166 1.017.392 2.608 1.29 3 .584.391-.705.338-.595 1.75-.75 1.41-.156 1.79-.585 2.417-1.917.626-1.333.446-1.192 1.462-1.58 1.021-.394 1.678-.223.737-1.087-.94-.86-1.65-.814-2.199-1.833-.55-1.017-.153-1.73-1.25-2.75A20.755 20.755 0 0024 4c-.618-.37-2.162-2.07-3.083-2.667-.834-.54-1.083 0-1.083 0s.256 1.667.964 2.372c.704.705 1.105 3.344.87 4.128-.235.783-1.36 1.02-1.75 1.333-.393.312-1.418 1.548-1.418 2.334 0 .784 1.71 2.81 1.71 2.81.218-1.089-1.039.328-1.627.523-.47.157-1.542 1.656-2.459 1.814-.916.16-1.363.7-2.068 1.25-.706.55-2.43 1.332-2.353 2.195.08.862-1.725 1.568-2.038 1.568-.314 0-1.019 0-1.647 1.098-.627 1.098-1.725 2.196-1.41 2.98.312.783.391 1.726.233 2.588-.156.862-1.332 1.176-1.567.941-.235-.236-1.489-1.335-1.647-.315',
                fill: '#5c913b',
              })
            )
          );
        });
      (d.displayName = 'Earth'),
        (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          i.register(
            d,
            'Earth',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Earth.tsx'
          ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Icons/FileBinary.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { FileBinary: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/components/SvgIcon.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = r.forwardRef(function (e, t) {
          return r.createElement(
            s.SvgIcon,
            (0, n.default)({}, e, { ref: t }),
            r.createElement('path', {
              d: 'M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z',
            })
          );
        });
      (d.displayName = 'FileBinary'),
        (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          i.register(
            d,
            'FileBinary',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/FileBinary.tsx'
          ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Icons/Law.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Law: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/components/SvgIcon.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = r.forwardRef(function (e, t) {
          return r.createElement(
            s.SvgIcon,
            (0, n.default)({}, e, { ref: t }),
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z',
            })
          );
        });
      (d.displayName = 'Law'),
        (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          i.register(
            d,
            'Law',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Law.tsx'
          ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Icons/Time.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Time: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/components/SvgIcon.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = r.forwardRef(function (e, t) {
          return r.createElement(
            s.SvgIcon,
            (0, n.default)({ viewBox: '0 0 24 24' }, e, { ref: t }),
            r.createElement('path', {
              d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            }),
            r.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            r.createElement('path', { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
          );
        });
      (d.displayName = 'Time'),
        (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          i.register(
            d,
            'Time',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Time.tsx'
          ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Icons/Version.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Version: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/components/SvgIcon.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = r.forwardRef(function (e, t) {
          return r.createElement(
            s.SvgIcon,
            (0, n.default)({ viewBox: '0 0 14 16', height: 16, width: 14 }, e, { ref: t }),
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z',
            })
          );
        });
      (d.displayName = 'Version'),
        (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          i.register(
            d,
            'Version',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Version.tsx'
          ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Icons/index.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          Version: () => o.Version,
          Time: () => n.Time,
          FileBinary: () => r.FileBinary,
          Law: () => s.Law,
          Earth: () => i.Earth,
        });
      var o = a('./src/components/Icons/Version.tsx'),
        n = a('./src/components/Icons/Time.tsx'),
        r = a('./src/components/Icons/FileBinary.tsx'),
        s = a('./src/components/Icons/Law.tsx'),
        i = a('./src/components/Icons/Earth.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/InputAdornment/InputAdornment.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'InputAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/InputAdornment/InputAdornment.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/InputAdornment/InputAdornment.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/InputAdornment/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/InputAdornment/InputAdornment.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Label/Label.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => g });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = a.hmd(e);
      var i,
        l = ['text', 'capitalize', 'weight'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, r.default)('div', { target: 'esyufg60', label: 'Wrapper' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight[e.weight],
            textTransform: e.capitalize ? 'capitalize' : 'none',
          };
        }, ''),
        c = function (e) {
          var t = e.text,
            a = void 0 === t ? '' : t,
            r = e.capitalize,
            i = void 0 !== r && r,
            c = e.weight,
            u = void 0 === c ? 'regular' : c,
            g = (0, n.default)(e, l);
          return s.createElement(d, (0, o.default)({ capitalize: i, weight: u }, g), a);
        },
        u = c;
      const g = u;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          d,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        ),
        p.register(
          c,
          'Label',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/components/Label/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/Label/Label.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Link.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => g });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        i = a('./src/components/Text/index.ts');
      e = a.hmd(e);
      var l,
        d = ['external', 'to', 'children', 'variant', 'className'];
      (l =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        l(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c = r.forwardRef(function (e, t) {
          var a = e.external,
            l = e.to,
            c = e.children,
            u = e.variant,
            g = e.className,
            p = (0, n.default)(e, d),
            m = r.createElement(i.default, { variant: u }, c);
          return a
            ? r.createElement(
                'a',
                (0, o.default)(
                  { className: g, href: l, ref: t, rel: 'noopener noreferrer', target: '_blank' },
                  p
                ),
                m
              )
            : r.createElement(s.Link, (0, o.default)({ className: g, innerRef: t, to: l }, p), m);
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
    './src/components/List.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/List/List.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'List',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/List.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/List.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/ListItem.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/ListItem/ListItem.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = a.hmd(e);
      var i,
        l = ['button'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, s.forwardRef)(function (e, t) {
        var a = e.button,
          i = (0, n.default)(e, l);
        return s.createElement(r.default, (0, o.default)({}, i, { button: a, innerRef: t }));
      });
      d.defaultProps = { button: !1 };
      var c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'ListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItem.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItem.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/ListItemText.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/ListItemText/ListItemText.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItemText.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/ListItemText.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Loading/Loading.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/components/Logo/index.ts'),
        s = a('./src/components/Loading/Spinner/index.tsx'),
        i = a('./src/components/Loading/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function () {
          return n.createElement(
            i.Wrapper,
            { 'data-testid': 'loading' },
            n.createElement(i.Badge, null, n.createElement(r.default, { size: 'big' })),
            n.createElement(s.default, { 'data-testid': 'spinnerLogo' })
          );
        },
        d = l;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          l,
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
    './src/components/Loading/Spinner/Spinner.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a('./src/components/CircularProgress.tsx');
      function l(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = function (e) {
          var t = e.size,
            a = void 0 === t ? 50 : t,
            o = e.centered,
            n = void 0 !== o && o;
          return s.createElement(m, { centered: n }, s.createElement(I, { size: a }));
        },
        c = d;
      const u = c;
      var g,
        p,
        m = (0, r.default)('div', { target: 'e1y5sxxq0', label: 'Wrapper' })(function (e) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? l(Object(a), !0).forEach(function (t) {
                    (0, n.default)(e, t, a[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                : l(Object(a)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
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
        I = (0, r.default)(i.default, { target: 'e1y5sxxq1', label: 'Circular' })(function (e) {
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
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'Spinner',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        g.register(
          m,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        g.register(
          I,
          'Circular',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/Loading/Spinner/index.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/Loading/Spinner/Spinner.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Loading/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/Loading/Loading.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Loading/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Wrapper: () => i, Badge: () => l });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        s,
        i = (0, n.default)('div', { target: 'eimgwje0', label: 'Wrapper' })({
          name: '1aq6k0v',
          styles: 'transform:translate(-50%, -50%);top:50%;left:50%;position:absolute;',
        }),
        l = (0, n.default)('div', { target: 'eimgwje1', label: 'Badge' })(function (e) {
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
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Logo/Logo.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/providers/config/index.ts'),
        i = a('./src/components/Logo/img/logo-black-and-white.svg'),
        l = a('./src/components/Logo/img/logo.svg');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        c = { 'x-small': '30px', small: '40px', big: '90px' },
        u = { light: l, dark: i },
        g = function (e) {
          var t = e.size,
            a = e.onClick,
            o = e.className,
            n = (0, s.useConfig)().configOptions;
          return null != n && n.logo
            ? r.createElement(
                C,
                { onClick: a, className: o },
                r.createElement('img', { alt: 'logo', height: '40px', src: n.logo })
              )
            : r.createElement(f, { size: t, onClick: a, className: o });
        };
      d(g, 'useConfig{{ configOptions }}', function () {
        return [s.useConfig];
      });
      var p = g;
      const m = p;
      var I,
        A,
        C = (0, n.default)('div', { target: 'em793ed0', label: 'ImageLogo' })({
          name: 'jodbou',
          styles: 'font-size:0;',
        }),
        f = (0, n.default)('div', { target: 'em793ed1', label: 'StyledLogo' })(function (e) {
          var t = e.size,
            a = void 0 === t ? 'small' : t,
            o = e.theme;
          return {
            display: 'inline-block',
            verticalAlign: 'middle',
            boxSizing: 'border-box',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: 'url('.concat(u[null == o ? void 0 : o.palette.type], ')'),
            backgroundRepeat: ' no-repeat',
            width: c[a],
            height: c[a],
          };
        }, '');
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          c,
          'sizes',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        I.register(
          u,
          'logos',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        I.register(
          g,
          'Logo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        I.register(
          C,
          'ImageLogo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        I.register(
          f,
          'StyledLogo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/components/Logo/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/Logo/Logo.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Menu.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Menu/Menu.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Menu',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Menu.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Menu.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/MenuItem.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/MenuItem/MenuItem.js'
        ),
        i = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = (0, i.forwardRef)(function (e, t) {
        return i.createElement(p, (0, n.default)({}, e, { ref: t }));
      });
      l.defaultProps = { component: 'li' };
      var d = l;
      const c = d;
      var u,
        g,
        p = (0, r.default)(s.default, { target: 'ed8xj0i0', label: 'StyledMaterialUIMenuItem' })({
          name: '10b12fz',
          styles: 'outline:none;',
        });
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          l,
          'MenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        ),
        u.register(
          p,
          'StyledMaterialUIMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/components/NotFound/NotFound.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => I });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        l = a('./src/components/Box.tsx'),
        d = a('./src/components/Button.tsx'),
        c = a('./src/components/Heading.tsx'),
        u = a('./src/components/NotFound/img/package.svg');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function () {
          var e = (0, i.useHistory)(),
            t = (0, s.useTranslation)().t,
            a = (0, r.useCallback)(
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
            r.createElement(f, { alt: t('error.404.page-not-found'), src: u }),
            r.createElement(
              b,
              { className: 'not-found-text', variant: 'h4' },
              t('error.404.sorry-we-could-not-find-it')
            ),
            r.createElement(
              d.default,
              { 'data-testid': 'not-found-go-to-home-button', onClick: a, variant: 'contained' },
              t('button.go-to-the-home-page')
            )
          );
        };
      g(p, 'useHistory{history}\nuseTranslation{{ t }}\nuseCallback{handleGoHome}', function () {
        return [i.useHistory, s.useTranslation];
      });
      var m = p;
      const I = m;
      var A,
        C,
        f = (0, n.default)('img', { target: 'e11qlk1z0', label: 'EmptyPackage' })({
          name: '17y48z2',
          styles: 'width:150px;margin:0 auto;',
        }),
        b = (0, n.default)(c.default, { target: 'e11qlk1z1', label: 'StyledHeading' })(function (
          e
        ) {
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
        },
        '');
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          p,
          'NotFound',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        A.register(
          f,
          'EmptyPackage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        A.register(
          b,
          'StyledHeading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/components/NotFound/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/NotFound/NotFound.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Paper.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Paper/Paper.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Paper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Paper.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Paper.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/SnackbarContent.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'SnackbarContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SnackbarContent.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SnackbarContent.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/SvgIcon.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { SvgIcon: () => m });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js'
        ),
        l = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = a.hmd(e);
      var d,
        c = ['size', 'title'];
      function u(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      (d =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        d(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var g,
        p,
        m = l.forwardRef(function (e, t) {
          var a = e.size,
            o = void 0 === a ? 'md' : a,
            s = e.title,
            i = (0, r.default)(e, c);
          return l.createElement(A, (0, n.default)({ size: o, titleAccess: s }, i, { ref: t }));
        }),
        I = function (e) {
          return 'md' === e ? { width: 18, height: 18 } : { width: 14, height: 16 };
        },
        A = (0, s.default)(i.default, { target: 'et6id9r0', label: 'StyledMaterialUISvgIcon' })(
          function (e) {
            var t = e.size;
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? u(Object(a), !0).forEach(function (t) {
                      (0, o.default)(e, t, a[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                  : u(Object(a)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
              }
              return e;
            })({}, I(t));
          },
          ''
        );
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          m,
          'SvgIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        ),
        g.register(
          I,
          'getSize',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        ),
        g.register(
          A,
          'StyledMaterialUISvgIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/Tab.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Tab/Tab.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Tab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tab.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tab.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Tabs.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Tabs/Tabs.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { innerRef: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Tabs',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tabs.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tabs.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Text/Text.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Typography/Typography.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
        return s.createElement(r.default, (0, n.default)({}, e, { component: 'span', ref: t }));
      });
      i.defaultProps = { variant: 'subtitle1' };
      var l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Text',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Text/Text.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Text/Text.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Text/TextConfig.ts': (e, t, a) => {
      'use strict';
      a.r(t);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Text/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default, TextProps: () => n.TextProps });
      var o = a('./src/components/Text/Text.tsx'),
        n = a('./src/components/Text/TextConfig.ts');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/TextField/TextField.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/TextField/TextField.js'
        ),
        i = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = a.hmd(e);
      var l,
        d = ['InputProps', 'classes'];
      function c(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(a), !0).forEach(function (t) {
                (0, n.default)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      (l =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        l(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var g = (0, i.forwardRef)(function (e, t) {
          var a = e.InputProps,
            n = e.classes,
            l = (0, r.default)(e, d);
          return i.createElement(
            s.default,
            (0, o.default)({}, l, { innerRef: t, InputProps: u(u({}, a), {}, { classes: n }) })
          );
        }),
        p = g;
      const m = p;
      var I, A;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'TextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/TextField/TextField.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/TextField/TextField.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/components/TextField/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/components/TextField/TextField.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Toolbar.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Toolbar/Toolbar.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, s.forwardRef)(function (e, t) {
          return s.createElement(r.default, (0, n.default)({}, e, { ref: t }));
        }),
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'Toolbar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Toolbar.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Toolbar.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Tooltip.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Tooltip/Tooltip.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = a.hmd(e);
      var i,
        l = ['title', 'children'];
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, s.forwardRef)(function (e, t) {
          var a = e.title,
            i = e.children,
            d = (0, n.default)(e, l);
          return a
            ? s.createElement(r.default, (0, o.default)({}, d, { title: a, innerRef: t }), i)
            : i;
        }),
        c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'Tooltip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tooltip.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tooltip.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/design-tokens/ResetStyles.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+styles@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, r.default)(function (e) {
          var t = e.theme;
          return {
            '@global': {
              'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
                { fontFamily: '"Roboto", Helvetica Neue, Arial, sans-serif' },
              strong: { fontWeight: null == t ? void 0 : t.fontWeight.semiBold },
              'html, body, #root': { height: '100%' },
              ul: { margin: 0, padding: 0, listStyle: 'none' },
              '.container': (0, n.default)(
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
          return i(), s.createElement(s.Fragment, null, t);
        },
        d = l;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          i,
          'resetStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        ),
        u.register(
          l,
          'ResetStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/design-tokens/StyleBaseline.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s =
          (a(
            '../../../node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css'
          ),
          a('./src/design-tokens/ResetStyles.tsx'));
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function () {
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(n.default, null),
            r.createElement(s.default, null)
          );
        },
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'StyleBaseline',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/StyleBaseline.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/StyleBaseline.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/design-tokens/ThemeContext.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => i });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r = (0, n.createContext)(void 0),
        s = r;
      const i = s;
      var l, d;
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          r,
          'ThemeContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeContext.ts'
        ),
        l.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeContext.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/design-tokens/ThemeProvider.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => h });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a(
          '../../../node_modules/.pnpm/@material-ui+styles@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/emotion-theming@10.0.27_33bb31e1d857102242df3642b32eda18/node_modules/emotion-theming/dist/emotion-theming.browser.esm.js'
        ),
        c = a(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        u = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        g = a('./src/providers/config/index.ts'),
        p = a('./src/design-tokens/load-dayjs-locale.ts'),
        m = a('./src/design-tokens/theme.ts'),
        I = a('./src/design-tokens/ThemeContext.ts'),
        A = a('./src/design-tokens/useLocalStorage.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var C =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = function (e) {
          var t,
            a,
            o,
            s,
            C,
            f = e.children,
            b =
              null === (t = (a = window).matchMedia) || void 0 === t
                ? void 0
                : t.call(a, '(prefers-color-scheme:dark)').matches,
            h =
              (null === (o = window) ||
              void 0 === o ||
              null === (s = o.__VERDACCIO_BASENAME_UI_OPTIONS) ||
              void 0 === s
                ? void 0
                : s.darkMode) || b,
            v = null === (C = c.default.languages) || void 0 === C ? void 0 : C[0],
            y = (0, g.useConfig)().configOptions,
            L = (0, A.default)('darkMode', !!h),
            j = (0, r.default)(L, 2),
            x = j[0],
            k = j[1],
            H = (0, A.default)('language', v),
            G = (0, r.default)(H, 2),
            w = G[0],
            D = G[1],
            M = x ? 'dark' : 'light',
            T = (0, u.useCallback)(
              (0, n.default)(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c.default.changeLanguage(w);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [w]
            ),
            P = (0, m.getTheme)(M, null == y ? void 0 : y.primaryColor);
          return (
            (0, u.useEffect)(
              function () {
                T(), (0, p.default)();
              },
              [w, T]
            ),
            u.createElement(
              I.default.Provider,
              { value: { isDarkMode: x, setIsDarkMode: k, language: w, setLanguage: D } },
              u.createElement(
                d.ThemeProvider,
                { theme: P },
                u.createElement(l.default, { theme: P }, f)
              )
            )
          );
        };
      C(
        f,
        'useConfig{{ configOptions }}\nuseLocalStorage{[isDarkMode, setIsDarkMode]}\nuseLocalStorage{[language, setLanguage]}\nuseCallback{changeLanguage}\nuseEffect{}',
        function () {
          return [g.useConfig, A.default, A.default];
        }
      );
      var b = f;
      const h = b;
      var v, y;
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          f,
          'ThemeProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeProvider.tsx'
        ),
        v.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeProvider.tsx'
        )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
    },
    './src/design-tokens/load-dayjs-locale.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var o,
        n = a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/dayjs.min.js'),
        r = a.n(n),
        s = a(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function i() {
        var e = s.default.options.fallbackLng;
        return Array.isArray(e) ? e[0] : 'string' == typeof e ? e : void 0;
      }
      function l() {
        var e = i(),
          t = s.default.language || e;
        switch (null == t ? void 0 : t.toLowerCase()) {
          case 'pt-br':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/pt-br.js'),
              r().locale('pt-br');
            break;
          case 'de-de':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/de.js'),
              r().locale('de');
            break;
          case 'es-es':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/es.js'),
              r().locale('es');
            break;
          case 'fr-fr':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/fr.js'),
              r().locale('fr');
            break;
          case 'zh-cn':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/zh-cn.js'),
              r().locale('zh-cn');
            break;
          case 'ja-jp':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/ja.js'),
              r().locale('ja');
            break;
          case 'ru-ru':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/ru.js'),
              r().locale('ru');
            break;
          case 'tr-tr':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/tr.js'),
              r().locale('tr');
            break;
          case 'uk-ua':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/uk.js'),
              r().locale('uk');
            break;
          case 'zh-tw':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/zh-tw.js'),
              r().locale('zh-tw');
            break;
          case 'cs-cz':
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/cs.js'),
              r().locale('cs');
            break;
          default:
            a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/locale/en.js'),
              r().locale('en');
        }
      }
      var d = l;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          i,
          'getFallFackLanguage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        ),
        u.register(
          l,
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
    './src/design-tokens/theme.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { breakPoints: () => A, getTheme: () => f });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/styles/createMuiTheme.js'
        ),
        s = a('./src/utils/colors.ts');
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                (0, n.default)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = {
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
          primary: s.PRIMARY_COLOR,
          secondary: '#20232a',
          background: '#fff',
          dodgerBlue: '#1ba1f2',
          cyanBlue: '#253341',
        },
        c = {
          light: l({}, d),
          dark: l(
            l({}, d),
            {},
            { primary: '#24394e', secondary: '#424242', background: '#1A202C' }
          ),
        };
      function u(e, t) {
        return 'light' === e && (c.light.primary = t), c[e];
      }
      var g,
        p,
        m = { xxl: 26, xl: 24, lg: 21, md: 18, default: 16, sm: 14 },
        I = { light: 300, regular: 400, semiBold: 500, bold: 700 },
        A = { small: 576, medium: 768, large: 1024, container: 1240, xlarge: 1275 },
        C = { fontSize: m, fontWeight: I, breakPoints: A },
        f = function (e, t) {
          var a = u(e, t);
          return (0, r.default)(
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
                  l({ type: e }, a),
                  {},
                  {
                    primary: { main: a.primary },
                    secondary: { main: a.secondary },
                    error: { main: a.red },
                    background: { default: a.background },
                  }
                ),
              },
              C
            )
          );
        };
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          d,
          'colors',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          c,
          'themeModes',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          u,
          'applyPrimaryColor',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          m,
          'fontSize',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          I,
          'fontWeight',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          A,
          'breakPoints',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          C,
          'customizedTheme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        g.register(
          f,
          'getTheme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/design-tokens/useLocalStorage.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var s =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        i = function (e, t) {
          var a = (0, r.useState)(function () {
              try {
                var a = window.localStorage.getItem(e);
                return a ? JSON.parse(a) : t;
              } catch (e) {
                return console.error('An error occurred getting a sessionStorage key', e), t;
              }
            }),
            o = (0, n.default)(a, 2),
            s = o[0],
            i = o[1];
          return [
            s,
            function (t) {
              try {
                var a = t instanceof Function ? t(s) : t;
                i(a), window.localStorage.setItem(e, JSON.stringify(a));
              } catch (e) {
                console.error('An error occurred writing to sessionStorage', e);
              }
            },
          ];
        };
      s(
        i,
        "useState{[storedValue, setStoredValue](() => {\n    try {\n      // Get from local storage by key\n      const item = window.localStorage.getItem(key);\n      // Parse stored json or if none return initialValue\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error: any) {\n      // If error also return initialValue\n      // eslint-disable-next-line no-console\n      console.error('An error occurred getting a sessionStorage key', error);\n      return initialValue;\n    }\n  })}"
      );
      var l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'useLocalStorage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/useLocalStorage.ts'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/useLocalStorage.ts'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/design-tokens/useOnClickOutside.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { useOnClickOutside: () => i });
      var o,
        n,
        r,
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      function i(e, t) {
        (0, s.useEffect)(
          function () {
            var a = function (a) {
              e.current && !e.current.contains(a.target) && t(a);
            };
            return (
              document.addEventListener('mousedown', a),
              document.addEventListener('touchstart', a),
              function () {
                document.removeEventListener('mousedown', a),
                  document.removeEventListener('touchstart', a);
              }
            );
          },
          [e, t]
        );
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e),
        ('undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            })(i, 'useEffect{}'),
        (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          n.register(
            i,
            'useOnClickOutside',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/useOnClickOutside.ts'
          ),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/i18n/config.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => p });
      var o,
        n,
        r,
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/context.js'
        ),
        d = a('./src/i18n/enabledLanguages.ts');
      (e = a.hmd(e)),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          r(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function c(e) {
        try {
          return a('./src/i18n/download_translations sync recursive ^\\.\\/.*\\/ui\\.json$')(
            './'.concat(e, '/ui.json')
          );
        } catch (t) {
          return (
            console.warn('language '.concat(e, ' file not found, fallback to en-US')),
            a('./src/i18n/crowdin/ui.json')
          );
        }
      }
      var u = d.listLanguages.reduce(function (e, t) {
        return (
          (e[t.lng] = {
            translation: t.lng === d.DEFAULT_LANGUAGE ? a('./src/i18n/crowdin/ui.json') : c(t.lng),
          }),
          e
        );
      }, {});
      i.default
        .use(l.initReactI18next)
        .init({
          lng:
            (null === (o = window) ||
            void 0 === o ||
            null === (n = o.__VERDACCIO_BASENAME_UI_OPTIONS) ||
            void 0 === n
              ? void 0
              : n.language) || d.DEFAULT_LANGUAGE,
          fallbackLng: d.DEFAULT_LANGUAGE,
          whitelist: (0, s.default)(d.listLanguagesAsString),
          load: 'currentOnly',
          resources: u,
          debug: !1,
          interpolation: { escapeValue: !1 },
        });
      var g = i.default;
      const p = g;
      var m, I;
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
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/i18n/enabledLanguages.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          DEFAULT_LANGUAGE: () => i,
          listLanguages: () => l,
          listLanguagesAsString: () => c,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/country-flag-icons@1.4.10/node_modules/country-flag-icons/react/3x2/index.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        s,
        i = 'en-US',
        l = [
          { lng: i, icon: n.default.US, menuKey: 'lng.english' },
          { lng: 'cs-CZ', icon: n.default.CZ, menuKey: 'lng.czech' },
          { lng: 'pt-BR', icon: n.default.BR, menuKey: 'lng.portuguese' },
          { lng: 'es-ES', icon: n.default.ES, menuKey: 'lng.spanish' },
          { lng: 'de-DE', icon: n.default.DE, menuKey: 'lng.german' },
          { lng: 'fr-FR', icon: n.default.FR, menuKey: 'lng.french' },
          { lng: 'zh-CN', icon: n.default.CN, menuKey: 'lng.chinese' },
          { lng: 'ja-JP', icon: n.default.JP, menuKey: 'lng.japanese' },
          { lng: 'ru-RU', icon: n.default.RU, menuKey: 'lng.russian' },
          { lng: 'tr-TR', icon: n.default.TR, menuKey: 'lng.turkish' },
          { lng: 'uk-UA', icon: n.default.UA, menuKey: 'lng.ukraine' },
          { lng: 'km-KH', icon: n.default.KH, menuKey: 'lng.khme' },
          { lng: 'zh-TW', icon: n.default.TW, menuKey: 'lng.chineseTraditional' },
        ],
        d = l.reduce(function (e, t) {
          return e.push(t.lng), e;
        }, []),
        c = d;
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'DEFAULT_LANGUAGE',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        r.register(
          l,
          'listLanguages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        r.register(
          d,
          'languages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        r.register(
          c,
          'listLanguagesAsString',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/index.tsx': (e, t, a) => {
      'use strict';
      a.r(t);
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/react-hot-loader@4.13.0_9c6a8df88c2691f81f37725d5b4de033/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/react-redux@7.2.1_e084f946920a04d85390aa355643c4d5/node_modules/react-redux/es/index.js'
        ),
        l = a('./src/providers/API/APIProvider.tsx'),
        d = a('./src/providers/config/index.ts'),
        c = a('./src/App/index.ts'),
        u = a('./src/design-tokens/StyleBaseline.tsx'),
        g = a('./src/design-tokens/ThemeProvider.tsx'),
        p = a('./src/store/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var m,
        I,
        A = document.getElementById('root'),
        C = function (e) {
          r.render(
            n.createElement(
              i.Provider,
              { store: p.store },
              n.createElement(
                s.AppContainer,
                null,
                n.createElement(
                  d.default,
                  null,
                  n.createElement(
                    g.default,
                    null,
                    n.createElement(u.default, null),
                    n.createElement(l.default, null, n.createElement(e, null))
                  )
                )
              )
            ),
            A
          );
        };
      C(c.default),
        (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (m.register(
            A,
            'rootNode',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/index.tsx'
          ),
          m.register(
            C,
            'renderApp',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/index.tsx'
          )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => C });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        l = a('./src/components/CardContent.tsx'),
        d = a('./src/pages/Version/context.ts'),
        c = a('./src/pages/Version/DetailContainer/NoItems/index.ts'),
        u = a('./src/pages/Version/DetailContainer/Dependencies/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function (e) {
          var t = e.title,
            a = e.dependencies,
            o = (0, r.useContext)(d.DetailContext).enableLoading,
            c = (0, i.useHistory)(),
            g = (0, s.useTranslation)().t,
            p = Object.entries(a);
          return r.createElement(
            u.CardWrap,
            null,
            r.createElement(
              l.default,
              null,
              r.createElement(
                u.StyledText,
                { variant: 'subtitle1' },
                ''.concat(t, ' (').concat(p.length, ')')
              ),
              r.createElement(
                u.Tags,
                null,
                p.map(function (e) {
                  var t = (0, n.default)(e, 2),
                    a = t[0],
                    s = t[1];
                  return r.createElement(u.Tag, {
                    className: 'dep-tag',
                    clickable: !0,
                    key: a,
                    label: g('dependencies.dependency-block', { package: a, version: s }),
                    onClick: function () {
                      return (function (e) {
                        null == o || o(), c.push('/-/web/detail/'.concat(e));
                      })(a);
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
          return [i.useHistory, s.useTranslation];
        }
      );
      var I = function () {
        var e = (0, r.useContext)(d.DetailContext).packageMeta,
          t = (0, s.useTranslation)().t;
        if (!e) throw new Error(t('error.package-meta-is-required-at-detail-context'));
        var a = e.latest,
          o = a.dependencies,
          i = a.devDependencies,
          l = a.peerDependencies,
          u = a.name,
          g = { dependencies: o, devDependencies: i, peerDependencies: l };
        return m(o) || m(i) || m(l)
          ? r.createElement(
              r.Fragment,
              null,
              Object.entries(g).map(function (e) {
                var t = (0, n.default)(e, 2),
                  a = t[0],
                  o = t[1];
                return o && 0 !== Object.keys(o).length
                  ? r.createElement(p, { dependencies: o, key: a, title: a })
                  : null;
              })
            )
          : r.createElement(c.default, {
              className: 'no-dependencies',
              text: t('dependencies.has-no-dependencies', { package: u }),
            });
      };
      g(I, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var A = I;
      const C = A;
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
          I,
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
    './src/pages/Version/DetailContainer/Dependencies/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/Dependencies/Dependencies.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/Dependencies/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { CardWrap: () => c, StyledText: () => u, Tags: () => g, Tag: () => p });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/Card.tsx'),
        s = a('./src/components/Chip.tsx'),
        i = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        d,
        c = (0, n.default)(r.default, { target: 'e12vbvs0', label: 'CardWrap' })({
          name: 'mzpff5',
          styles: 'margin:0 0 16px;',
        }),
        u = (0, n.default)(i.default, { target: 'e12vbvs1', label: 'StyledText' })(function (e) {
          return { fontWeight: e.theme && e.theme.fontWeight.bold, textTransform: 'capitalize' };
        }, ''),
        g = (0, n.default)('div', { target: 'e12vbvs2', label: 'Tags' })({
          name: '1hbvsum',
          styles: 'display:flex;justify-content:start;flex-wrap:wrap;margin:0 -5px;',
        }),
        p = (0, n.default)(s.default, { target: 'e12vbvs3', label: 'Tag' })({
          name: '1522hk',
          styles: 'margin:5px;',
        });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          c,
          'CardWrap',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        ),
        l.register(
          u,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        ),
        l.register(
          g,
          'Tags',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        ),
        l.register(
          p,
          'Tag',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Dependencies/styles.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { CardStyled: () => l, default: () => u });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Card/Card.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/CardContent/CardContent.js'
        ),
        i = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = (0, n.default)(r.default, { target: 'e1ae6n00', label: 'CardStyled' })(function (e) {
          var t,
            a,
            o = e.theme;
          return {
            marginTop: null == o ? void 0 : o.spacing(1),
            marginBottom: null == o ? void 0 : o.spacing(0.5),
            backgroundColor:
              null == o || null === (t = o.palette) || void 0 === t ? void 0 : t.error.light,
            opacity: '0.9',
            color:
              null == o || null === (a = o.palette) || void 0 === a ? void 0 : a.error.contrastText,
            fontWeight: 'bold',
          };
        }, ''),
        d = function (e) {
          var t = e.message;
          return i.createElement(l, null, i.createElement(s.default, null, t));
        },
        c = d;
      const u = c;
      var g, p;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          l,
          'CardStyled',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx'
        ),
        g.register(
          d,
          'Deprecated',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx'
        ),
        g.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/pages/Version/DetailContainer/Deprecated/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/Deprecated/Deprecated.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/DetailContainer.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { TabPosition: () => u, default: () => I });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/components/Box.tsx'),
        i = a('./src/pages/Version/context.ts'),
        l = a('./src/pages/Version/DetailContainer/Deprecated/index.ts'),
        d = a('./src/pages/Version/DetailContainer/DetailContainerContent.tsx'),
        c = a('./src/pages/Version/DetailContainer/DetailContainerTabs.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
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
          a = Object.values(u),
          o = (0, r.useState)(0),
          g = (0, n.default)(o, 2),
          p = g[0],
          m = g[1],
          I = (0, r.useContext)(i.DetailContext),
          A = I.readMe,
          C = I.packageMeta;
        return r.createElement(
          s.default,
          { component: 'div', display: 'flex', flexDirection: 'column', padding: 2 },
          r.createElement(c.default, {
            onChange: function (e, t) {
              m(t);
            },
            tabPosition: p,
          }),
          (null == C || null === (e = C.latest) || void 0 === e ? void 0 : e.deprecated) &&
            r.createElement(l.default, {
              message: null == C || null === (t = C.latest) || void 0 === t ? void 0 : t.deprecated,
            }),
          r.createElement(d.default, { readDescription: A, tabPosition: a[p] })
        );
      };
      g(p, 'useState{[tabPosition, setTabPosition](0)}\nuseContext{detailContext}');
      var m = p;
      const I = m;
      var A, C;
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
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailContainer/DetailContainerContent.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { TabPosition: () => c, default: () => A });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/typeof.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/App/utils/loadable.tsx'),
        i = a('./src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx');
      function l(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (l = function (e) {
          return e ? a : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== (0, n.default)(e) && 'function' != typeof e))
          return { default: e };
        var a = l(t);
        if (a && a.has(e)) return a.get(e);
        var o = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
          if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, s) : null;
            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : (o[s] = e[s]);
          }
        return (o.default = e), a && a.set(e, o), o;
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var c;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      !(function (e) {
        (e.README = 'readme'),
          (e.DEPENDENCIES = 'dependencies'),
          (e.VERSIONS = 'versions'),
          (e.UPLINKS = 'uplinks');
      })(c || (c = {}));
      var u = (0, s.default)(function () {
          return Promise.resolve().then(function () {
            return d(a('./src/pages/Version/DetailContainer/Versions/index.ts'));
          });
        }),
        g = (0, s.default)(function () {
          return Promise.resolve().then(function () {
            return d(a('./src/pages/Version/DetailContainer/UpLinks/index.ts'));
          });
        }),
        p = (0, s.default)(function () {
          return Promise.resolve().then(function () {
            return d(a('./src/pages/Version/DetailContainer/Dependencies/index.ts'));
          });
        }),
        m = function (e) {
          var t = e.tabPosition,
            a = e.readDescription;
          switch (t) {
            case c.README:
              return r.createElement(i.default, { description: a });
            case c.UPLINKS:
              return r.createElement(g, null);
            case c.VERSIONS:
              return r.createElement(u, null);
            case c.DEPENDENCIES:
              return r.createElement(p, null);
            default:
              return null;
          }
        },
        I = m;
      const A = I;
      var C, f;
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          u,
          'Versions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        C.register(
          g,
          'UpLinks',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        C.register(
          p,
          'Dependencies',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        C.register(
          m,
          'DetailContainerContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        ),
        C.register(
          I,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContent.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => d });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/utils/sec-utils.ts'),
        s = a('./src/pages/Version/DetailContainer/Readme/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function (e) {
          var t = e.description;
          if (!t) return null;
          var a = (0, r.preventXSS)(t);
          return n.createElement(s.default, { description: a });
        },
        l = i;
      const d = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          i,
          'DetailContainerContentReadme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx'
        ),
        c.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerContentReadme.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/pages/Version/DetailContainer/DetailContainerTabs.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => g });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Tab.tsx'),
        l = a('./src/components/Tabs.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        c = function (e) {
          var t = e.tabPosition,
            a = e.onChange,
            o = (0, s.useTranslation)().t;
          return r.createElement(
            I,
            {
              color: 'primary',
              indicatorColor: 'primary',
              onChange: a,
              value: t,
              variant: 'fullWidth',
            },
            r.createElement(i.default, {
              'data-testid': 'readme-tab',
              id: 'readme-tab',
              label: o('tab.readme'),
            }),
            r.createElement(i.default, {
              'data-testid': 'dependencies-tab',
              id: 'dependencies-tab',
              label: o('tab.dependencies'),
            }),
            r.createElement(i.default, {
              'data-testid': 'versions-tab',
              id: 'versions-tab',
              label: o('tab.versions'),
            }),
            r.createElement(i.default, {
              'data-testid': 'uplinks-tab',
              id: 'uplinks-tab',
              label: o('tab.uplinks'),
            })
          );
        };
      d(c, 'useTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var u = c;
      const g = u;
      var p,
        m,
        I = (0, n.default)(l.default, { target: 'e4hvfps0', label: 'Tabs' })({
          name: '1qm1lh',
          styles: 'margin-bottom:16px;',
        });
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          c,
          'DetailContainerTabs',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerTabs.tsx'
        ),
        p.register(
          I,
          'Tabs',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerTabs.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/DetailContainerTabs.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/Version/DetailContainer/NoItems/NoItems.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => l });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function (e) {
          var t = e.className,
            a = e.text;
          return n.createElement(
            r.default,
            { className: t, gutterBottom: !0, variant: 'subtitle1' },
            a
          );
        },
        i = s;
      const l = i;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
          'NoItems',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/NoItems/NoItems.tsx'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/NoItems/NoItems.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/Version/DetailContainer/NoItems/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/NoItems/NoItems.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/Readme/Readme.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => l });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      a(
        '../../../node_modules/.pnpm/github-markdown-css@4.0.0/node_modules/github-markdown-css/github-markdown.css'
      );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function (e) {
          var t = e.description;
          return r.createElement(u, {
            className: 'markdown-body',
            dangerouslySetInnerHTML: { __html: t },
          });
        },
        i = s;
      const l = i;
      var d,
        c,
        u = (0, n.default)('div', { target: 'esdleg90', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return {
            background: null == t ? void 0 : t.palette.white,
            color: null == t ? void 0 : t.palette.black,
            padding: null == t ? void 0 : t.spacing(2, 3),
            ul: { listStyle: 'disc' },
          };
        }, '');
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
          'Readme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Readme/Readme.tsx'
        ),
        d.register(
          u,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Readme/Readme.tsx'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Readme/Readme.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/Version/DetailContainer/Readme/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/Readme/Readme.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => I });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/List.tsx'),
        i = a('./src/components/ListItem.tsx'),
        l = a('./src/utils/package.ts'),
        d = a('./src/pages/Version/index.ts'),
        c = a('./src/pages/Version/DetailContainer/NoItems/index.ts'),
        u = a('./src/pages/Version/DetailContainer/UpLinks/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function () {
          var e = (0, n.useContext)(d.DetailContext).packageMeta,
            t = (0, r.useTranslation)().t;
          if (!e || !e._uplinks || !e.latest) return null;
          var a = e._uplinks,
            o = e.latest;
          return 0 === Object.keys(a).length
            ? n.createElement(c.default, { text: t('uplinks.no-items', { name: o.name }) })
            : n.createElement(
                n.Fragment,
                null,
                n.createElement(u.StyledText, { variant: 'subtitle1' }, t('uplinks.title')),
                n.createElement(
                  s.default,
                  null,
                  Object.keys(a)
                    .reverse()
                    .map(function (e) {
                      return n.createElement(
                        i.default,
                        { key: e },
                        n.createElement(u.ListItemText, null, e),
                        n.createElement(u.Spacer, null),
                        n.createElement(
                          u.ListItemText,
                          null,
                          (0, l.formatDateDistance)(a[e].fetched)
                        )
                      );
                    })
                )
              );
        };
      g(p, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [r.useTranslation];
      });
      var m = p;
      const I = m;
      var A, C;
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
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailContainer/UpLinks/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { StyledText: () => d, Spacer: () => c, ListItemText: () => u });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/ListItemText.tsx'),
        s = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = (0, n.default)(s.default, { target: 'e1lovynm0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        c = (0, n.default)('div', { target: 'e1lovynm1', label: 'Spacer' })(function (e) {
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
        u = (0, n.default)(r.default, { target: 'e1lovynm2', label: 'ListItemText' })(function (e) {
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
          d,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        i.register(
          c,
          'Spacer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        i.register(
          u,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/Version/DetailContainer/Versions/Versions.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => m });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./lib/constants.ts'),
        i = a('./src/pages/Version/context.ts'),
        l = a('./src/pages/Version/DetailContainer/Versions/styles.ts'),
        d = a('./src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx'),
        c = a('./src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function () {
          var e = (0, n.useContext)(i.DetailContext),
            t = (0, r.useTranslation)().t,
            a = e.packageMeta,
            o = e.packageName;
          if (!a) return null;
          var u = a.versions,
            g = void 0 === u ? {} : u,
            p = a.time,
            m = void 0 === p ? {} : p,
            I = a[s.DIST_TAGS],
            A = void 0 === I ? {} : I;
          return n.createElement(
            n.Fragment,
            null,
            A &&
              Object.keys(A).length > 0 &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(l.StyledText, { variant: 'subtitle1' }, t('versions.current-tags')),
                n.createElement(c.default, { tags: A })
              ),
            g &&
              Object.keys(g).length > 0 &&
              o &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  l.StyledText,
                  { variant: 'subtitle1' },
                  t('versions.version-history')
                ),
                n.createElement(d.default, { packageName: o, time: m, versions: g })
              )
          );
        };
      u(g, 'useContext{detailContext}\nuseTranslation{{ t }}', function () {
        return [r.useTranslation];
      });
      var p = g;
      const m = p;
      var I, A;
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'Versions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/Versions.tsx'
        ),
        I.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/Versions.tsx'
        )),
        (A =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          A(e);
    },
    './src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => p });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/List.tsx'),
        i = a('./src/components/ListItem.tsx'),
        l = a('./src/utils/package.ts'),
        d = a('./src/pages/Version/DetailContainer/Versions/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var c =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var t = e.versions,
            a = e.packageName,
            o = e.time,
            c = (0, r.useTranslation)().t;
          return n.createElement(
            s.default,
            { dense: !0 },
            Object.keys(t)
              .reverse()
              .map(function (e) {
                return n.createElement(
                  i.default,
                  { className: 'version-item', key: e },
                  n.createElement(
                    d.StyledLink,
                    { to: '/-/web/detail/'.concat(a, '/v/').concat(e) },
                    n.createElement(d.ListItemText, null, e)
                  ),
                  n.createElement(d.Spacer, null),
                  n.createElement(
                    d.ListItemText,
                    null,
                    o[e] ? (0, l.formatDateDistance)(o[e]) : c('versions.not-available')
                  )
                );
              })
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [r.useTranslation];
      });
      var g = u;
      const p = g;
      var m, I;
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
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/components/List.tsx'),
        s = a('./src/components/ListItem.tsx'),
        i = a('./src/pages/Version/DetailContainer/Versions/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function (e) {
          var t = e.tags;
          return n.createElement(
            r.default,
            { dense: !0 },
            Object.keys(t)
              .reverse()
              .map(function (e) {
                return n.createElement(
                  s.default,
                  { className: 'version-item', key: e },
                  n.createElement(i.ListItemText, null, e),
                  n.createElement(i.Spacer, null),
                  n.createElement(i.ListItemText, null, t[e])
                );
              })
          );
        },
        d = l;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          l,
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
    './src/pages/Version/DetailContainer/Versions/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/Versions/Versions.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/Versions/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          StyledText: () => c,
          Spacer: () => u,
          ListItemText: () => g,
          StyledLink: () => p,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/Link.tsx'),
        s = a('./src/components/ListItemText.tsx'),
        i = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        d,
        c = (0, n.default)(i.default, { target: 'ei59c890', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        u = (0, n.default)('div', { target: 'ei59c891', label: 'Spacer' })(function (e) {
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
        g = (0, n.default)(s.default, { target: 'ei59c892', label: 'ListItemText' })(function (e) {
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
        p = (0, n.default)(r.default, { target: 'ei59c893', label: 'StyledLink' })({
          name: 'ytumd6',
          styles: 'text-decoration:none;',
        });
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          c,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        ),
        l.register(
          u,
          'Spacer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        ),
        l.register(
          g,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        ),
        l.register(
          p,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/pages/Version/DetailContainer/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/DetailContainer.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/DetailSidebar.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => x });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/typeof.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a('./src/components/ActionBar/index.ts'),
        l = a('./src/components/Author/index.ts'),
        d = a('./src/components/Paper.tsx'),
        c = a('./src/pages/Version/index.ts'),
        u = a('./src/App/utils/loadable.tsx'),
        g = a('./src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'),
        p = a('./src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'),
        m = a('./src/pages/Version/DetailSidebar/Developers/index.ts'),
        I = a('./src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx');
      function A(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (A = function (e) {
          return e ? a : t;
        })(e);
      }
      function C(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== (0, n.default)(e) && 'function' != typeof e))
          return { default: e };
        var a = A(t);
        if (a && a.has(e)) return a.get(e);
        var o = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
          if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, s) : null;
            i && (i.get || i.set) ? Object.defineProperty(o, s, i) : (o[s] = e[s]);
          }
        return (o.default = e), a && a.set(e, o), o;
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var f =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        b = (0, u.default)(function () {
          return Promise.resolve().then(function () {
            return C(a('./src/pages/Version/DetailSidebar/Engines/index.ts'));
          });
        }),
        h = (0, u.default)(function () {
          return Promise.resolve().then(function () {
            return C(a('./src/pages/Version/DetailSidebar/Dist/index.ts'));
          });
        }),
        v = (0, u.default)(function () {
          return Promise.resolve().then(function () {
            return C(a('./src/pages/Version/DetailSidebar/Install/index.ts'));
          });
        }),
        y = (0, u.default)(function () {
          return Promise.resolve().then(function () {
            return C(a('./src/pages/Version/DetailSidebar/Repository/index.ts'));
          });
        }),
        L = function () {
          var e,
            t = (0, s.useContext)(c.DetailContext),
            a = t.packageMeta,
            o = t.packageName,
            n = t.packageVersion;
          return a && o
            ? s.createElement(
                G,
                { className: 'sidebar-info' },
                s.createElement(p.default, {
                  description: null === (e = a.latest) || void 0 === e ? void 0 : e.description,
                  isLatest: void 0 === n,
                  packageName: o,
                  version: n || a.latest.version,
                }),
                s.createElement(i.default, null),
                s.createElement(v, null),
                s.createElement(g.default, null),
                s.createElement(y, null),
                s.createElement(b, null),
                s.createElement(h, null),
                s.createElement(l.default, null),
                s.createElement(m.default, { type: I.DeveloperType.MAINTAINERS }),
                s.createElement(m.default, { type: I.DeveloperType.CONTRIBUTORS })
              )
            : null;
        };
      f(L, 'useContext{detailContext}');
      var j = L;
      const x = j;
      var k,
        H,
        G = (0, r.default)(d.default, { target: 'e13qr4yu0', label: 'StyledPaper' })(function (e) {
          var t = e.theme;
          return { padding: null == t ? void 0 : t.spacing(3, 2) };
        }, '');
      (k = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (k.register(
          b,
          'Engines',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        k.register(
          h,
          'Dist',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        k.register(
          v,
          'Install',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        k.register(
          y,
          'Repository',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        k.register(
          L,
          'DetailSidebar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        k.register(
          G,
          'StyledPaper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        ),
        k.register(
          j,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebar.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => I });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Favorite.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/Trans.js'
        ),
        l = a('./src/components/Button.tsx'),
        d = a('./src/components/Link.tsx'),
        c = a('./src/utils/url.ts'),
        u = a('./src/pages/Version/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = function () {
          var e,
            t,
            a = (0, s.useContext)(u.DetailContext).packageMeta,
            o =
              null == a ||
              null === (e = a.latest) ||
              void 0 === e ||
              null === (t = e.funding) ||
              void 0 === t
                ? void 0
                : t.url;
          return (0, c.isURL)(o)
            ? s.createElement(
                f,
                { external: !0, to: o },
                s.createElement(
                  l.default,
                  {
                    color: 'primary',
                    fullWidth: !0,
                    startIcon: s.createElement(b, null),
                    variant: 'outlined',
                  },
                  s.createElement(i.Trans, {
                    components: [s.createElement(h, { key: 'fund' })],
                    i18nKey: 'button.fund-this-package',
                  })
                )
              )
            : null;
        };
      g(p, 'useContext{detailContext}');
      var m = p;
      const I = m;
      var A,
        C,
        f = (0, n.default)(d.default, { target: 'ei0x75o0', label: 'StyledLink' })(function (e) {
          var t = e.theme;
          return {
            marginTop: null == t ? void 0 : t.spacing(1),
            marginBottom: null == t ? void 0 : t.spacing(1),
            textDecoration: 'none',
            display: 'block',
          };
        }, ''),
        b = (0, n.default)(r.default, { target: 'ei0x75o1', label: 'StyledFavoriteIcon' })(
          function (e) {
            var t = e.theme;
            return { color: null == t ? void 0 : t.palette.orange };
          },
          ''
        ),
        h = (0, n.default)('strong', { target: 'ei0x75o2', label: 'StyledFundStrong' })({
          name: '8er82g',
          styles: 'margin-right:3px;',
        });
      (A = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (A.register(
          p,
          'DetailSidebarFundButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        A.register(
          f,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        A.register(
          b,
          'StyledFavoriteIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        A.register(
          h,
          'StyledFundStrong',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        ),
        A.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarFundButton.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => g });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Box.tsx'),
        l = a('./src/components/Heading.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        c = function (e) {
          var t = e.description,
            a = e.packageName,
            o = e.version,
            n = e.isLatest,
            l = (0, s.useTranslation)().t;
          return r.createElement(
            i.default,
            {
              className: 'detail-info',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '8px',
            },
            r.createElement(I, null, a),
            t && r.createElement('div', null, t),
            r.createElement(
              A,
              null,
              l(n ? 'sidebar.detail.latest-version' : 'sidebar.detail.version', { version: o })
            )
          );
        };
      d(c, 'useTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var u = c;
      const g = u;
      var p,
        m,
        I = (0, n.default)(l.default, { target: 'eyhpj120', label: 'StyledHeading' })({
          name: '1affg1x',
          styles: 'font-size:1rem;font-weight:700;',
        }),
        A = (0, n.default)(i.default, { target: 'eyhpj121', label: 'StyledBoxVersion' })(function (
          e
        ) {
          var t = e.theme;
          return { color: t && t.palette.text.secondary };
        },
        '');
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          c,
          'DetailSidebarTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        ),
        p.register(
          I,
          'StyledHeading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        ),
        p.register(
          A,
          'StyledBoxVersion',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/DetailSidebarTitle.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/Version/DetailSidebar/Developers/Developers.tsx': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, { DeveloperType: () => A, Fab: () => f, VISIBLE_MAX: () => h, default: () => L });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Avatar/Avatar.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Add.js'
        ),
        l = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        c = a('./src/components/Box.tsx'),
        u = a('./src/components/FloatingActionButton.tsx'),
        g = a('./src/components/Tooltip.tsx'),
        p = a('./src/pages/Version/index.ts'),
        m = a('./src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'),
        I = a('./src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var A,
        C =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              };
      !(function (e) {
        (e.CONTRIBUTORS = 'contributors'), (e.MAINTAINERS = 'maintainers');
      })(A || (A = {}));
      var f = (0, r.default)(u.default, { target: 'efsbdr30', label: 'Fab' })(function (e) {
          var t, a;
          return {
            backgroundColor:
              null === (t = e.theme) || void 0 === t ? void 0 : t.palette.primary.main,
            color: null === (a = e.theme) || void 0 === a ? void 0 : a.palette.white,
          };
        }, ''),
        b = (0, r.default)(c.default, { target: 'efsbdr31', label: 'StyledBox' })({
          name: '183y8xt',
          styles: '> *{margin:5px;}',
        }),
        h = 6,
        v = function (e) {
          var t = e.type,
            a = e.visibleMax,
            o = void 0 === a ? h : a,
            r = (0, l.useContext)(p.DetailContext),
            c = (0, d.useTranslation)().t;
          if (!r) throw Error(c('app-context-not-correct-used'));
          var u = (0, l.useMemo)(
              function () {
                var e;
                return (0, I.default)(
                  null === (e = r.packageMeta) || void 0 === e ? void 0 : e.latest[t]
                );
              },
              [r.packageMeta, t]
            ),
            A = (0, l.useState)(o),
            C = (0, n.default)(A, 2),
            v = C[0],
            y = C[1],
            L = (0, l.useState)(u),
            j = (0, n.default)(L, 2),
            x = j[0],
            k = j[1];
          (0, l.useEffect)(
            function () {
              u.length && k(u.slice(0, v));
            },
            [u, v]
          );
          var H = (0, l.useCallback)(
            function () {
              y(v + h);
            },
            [v]
          );
          return x && u.length
            ? l.createElement(
                l.Fragment,
                null,
                l.createElement(m.default, { type: t }),
                l.createElement(
                  b,
                  { display: 'flex', flexWrap: 'wrap', margin: '10px 0 10px 0' },
                  x.map(function (e) {
                    return l.createElement(
                      g.default,
                      { key: e.email, title: e.name },
                      l.createElement(s.default, { alt: e.name, src: e.avatar })
                    );
                  }),
                  v < u.length &&
                    l.createElement(
                      f,
                      { onClick: H, size: 'small' },
                      l.createElement(i.default, null)
                    )
                )
              )
            : null;
        };
      C(
        v,
        'useContext{detailContext}\nuseTranslation{{ t }}\nuseMemo{developers}\nuseState{[visibleDevelopersMax, setVisibleDevelopersMax](visibleMax)}\nuseState{[visibleDevelopers, setVisibleDevelopers](developers)}\nuseEffect{}\nuseCallback{handleSetVisibleDevelopersMax}',
        function () {
          return [d.useTranslation];
        }
      );
      var y = v;
      const L = y;
      var j, x;
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          f,
          'Fab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        j.register(
          b,
          'StyledBox',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        j.register(
          h,
          'VISIBLE_MAX',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        j.register(
          v,
          'Developers',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        ),
        j.register(
          y,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/Developers.tsx'
        )),
        (x =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          x(e);
    },
    './src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { DeveloperType: () => l, default: () => g });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var l,
        d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              };
      !(function (e) {
        (e.CONTRIBUTORS = 'contributors'), (e.MAINTAINERS = 'maintainers');
      })(l || (l = {}));
      var c = function (e) {
        var t = e.type,
          a = (0, s.useTranslation)().t;
        switch (t) {
          case l.CONTRIBUTORS:
            return r.createElement(I, { variant: 'subtitle1' }, a('sidebar.contributors.title'));
          case l.MAINTAINERS:
            return r.createElement(I, { variant: 'subtitle1' }, a('sidebar.maintainers.title'));
        }
      };
      d(c, 'useTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var u = c;
      const g = u;
      var p,
        m,
        I = (0, n.default)(i.default, { target: 'egusi2d0', label: 'StyledText' })(function (e) {
          var t = e.theme;
          return { fontWeight: null == t ? void 0 : t.fontWeight.bold, marginBottom: '10px' };
        }, '');
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          c,
          'DevelopersTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'
        ),
        p.register(
          I,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/DevelopersTitle.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => i });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function r(e) {
        return e
          ? e.reduce(function (e, t) {
              return e.some(function (e) {
                return e.email === t.email;
              })
                ? e
                : [].concat((0, n.default)(e), [t]);
            }, [])
          : [];
      }
      var s = r;
      const i = s;
      var l, d;
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          r,
          'getUniqueDeveloperValues',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts'
        ),
        l.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Developers/get-unique-developer-values.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/pages/Version/DetailSidebar/Developers/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/Developers/Developers.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Dist/Dist.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => I });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/List.tsx'),
        i = a('./src/utils/file-size.ts'),
        l = a('./src/utils/package.ts'),
        d = a('./src/pages/Version/context.ts'),
        c = a('./src/pages/Version/DetailSidebar/Dist/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var u =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        g = function (e) {
          var t = e.name,
            a = e.children;
          return a
            ? n.createElement(c.DistChips, {
                label: n.createElement(n.Fragment, null, n.createElement('b', null, t), ': ', a),
              })
            : null;
        },
        p = function () {
          var e = (0, n.useContext)(d.DetailContext).packageMeta,
            t = (0, r.useTranslation)().t;
          if (!e) return null;
          var a = e && e.latest,
            o = a.dist,
            u = a.license;
          return n.createElement(
            s.default,
            {
              subheader: n.createElement(
                c.StyledText,
                { variant: 'subtitle1' },
                t('sidebar.distribution.title')
              ),
            },
            n.createElement(
              c.DistListItem,
              { button: !0 },
              n.createElement(g, { name: t('sidebar.distribution.file-count') }, o.fileCount),
              n.createElement(
                g,
                { name: t('sidebar.distribution.size') },
                o.unpackedSize && (0, i.default)(o.unpackedSize)
              ),
              n.createElement(
                g,
                { name: t('sidebar.distribution.license') },
                (0, l.formatLicense)(u)
              )
            )
          );
        };
      u(p, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [r.useTranslation];
      });
      var m = p;
      const I = m;
      var A, C;
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
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailSidebar/Dist/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/Dist/Dist.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Dist/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          StyledText: () => u,
          DistListItem: () => g,
          DistChips: () => p,
          DownloadButton: () => m,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/Chip.tsx'),
        s = a('./src/components/FloatingActionButton.tsx'),
        i = a('./src/components/ListItem.tsx'),
        l = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        c,
        u = (0, n.default)(l.default, { target: 'emhg1mg0', label: 'StyledText' })(function (e) {
          return { fontWeight: e.theme && e.theme.fontWeight.bold, textTransform: 'capitalize' };
        }, ''),
        g = (0, n.default)(i.default, { target: 'emhg1mg1', label: 'DistListItem' })({
          name: '1huthg8',
          styles: 'padding-left:0;padding-right:0;',
        }),
        p = (0, n.default)(r.default, { target: 'emhg1mg2', label: 'DistChips' })({
          name: '42zb18',
          styles: 'margin-right:5px;text-transform:capitalize;',
        }),
        m = (0, n.default)(s.default, { target: 'emhg1mg3', label: 'DownloadButton' })(function (
          e
        ) {
          return {
            backgroundColor: e.theme && e.theme.palette.primary.main,
            color: e.theme && e.theme.palette.white,
          };
        },
        '');
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          u,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        d.register(
          g,
          'DistListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        d.register(
          p,
          'DistChips',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        d.register(
          m,
          'DownloadButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/Version/DetailSidebar/Engines/Engines.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => C });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/Avatar.tsx'),
        i = a('./src/components/Grid.tsx'),
        l = a('./src/components/List.tsx'),
        d = a('./src/components/ListItemText.tsx'),
        c = a('./src/pages/Version/context.ts'),
        u = a('./src/pages/Version/DetailSidebar/Install/img/npm.svg'),
        g = a('./src/pages/Version/DetailSidebar/Engines/img/node.png'),
        p = a('./src/pages/Version/DetailSidebar/Engines/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        I = function () {
          var e,
            t = (0, n.useContext)(c.DetailContext).packageMeta,
            a = (0, r.useTranslation)().t,
            o = null == t || null === (e = t.latest) || void 0 === e ? void 0 : e.engines;
          return o && (o.node || o.npm)
            ? n.createElement(
                i.default,
                { container: !0 },
                o.node &&
                  n.createElement(
                    i.default,
                    { item: !0, xs: 6 },
                    n.createElement(
                      l.default,
                      {
                        subheader: n.createElement(
                          p.StyledText,
                          { variant: 'subtitle1' },
                          a('sidebar.engines.node-js')
                        ),
                      },
                      n.createElement(
                        p.EngineListItem,
                        { button: !0 },
                        n.createElement(s.default, { src: g }),
                        n.createElement(d.default, { primary: o.node })
                      )
                    )
                  ),
                o.npm &&
                  n.createElement(
                    i.default,
                    { item: !0, xs: 6 },
                    n.createElement(
                      l.default,
                      {
                        subheader: n.createElement(
                          p.StyledText,
                          { variant: 'subtitle1' },
                          a('sidebar.engines.npm-version')
                        ),
                      },
                      n.createElement(
                        p.EngineListItem,
                        { button: !0 },
                        n.createElement(s.default, { src: u }),
                        n.createElement(d.default, { primary: o.npm })
                      )
                    )
                  )
              )
            : null;
        };
      m(I, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [r.useTranslation];
      });
      var A = I;
      const C = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          I,
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
    './src/pages/Version/DetailSidebar/Engines/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/Engines/Engines.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Engines/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { StyledText: () => d, EngineListItem: () => c });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/ListItem.tsx'),
        s = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = (0, n.default)(s.default, { target: 'e1exuqcw0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        c = (0, n.default)(r.default, { target: 'e1exuqcw1', label: 'EngineListItem' })({
          name: '131yq1t',
          styles: 'padding-left:0;',
        });
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          d,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Engines/styles.ts'
        ),
        i.register(
          c,
          'EngineListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Engines/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/Version/DetailSidebar/Install/Install.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => A });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/List.tsx'),
        l = a('./src/components/Text/index.ts'),
        d = a('./src/providers/config/index.ts'),
        c = a('./src/pages/Version/index.ts'),
        u = a('./src/pages/Version/DetailSidebar/Install/InstallListItem.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = (0, n.default)(l.default, { target: 'exr63xd0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        m = function () {
          var e,
            t,
            a,
            o,
            n = (0, s.useTranslation)().t,
            l = (0, d.useConfig)().configOptions,
            g = (0, r.useContext)(c.DetailContext),
            m = g.packageMeta,
            I = g.packageName;
          if (!m || !I) return null;
          var A =
              null == l || null === (e = l.pkgManagers) || void 0 === e
                ? void 0
                : e.includes('npm'),
            C =
              null == l || null === (t = l.pkgManagers) || void 0 === t
                ? void 0
                : t.includes('yarn'),
            f =
              null ===
                (a =
                  null == l || null === (o = l.pkgManagers) || void 0 === o
                    ? void 0
                    : o.includes('pnpm')) ||
              void 0 === a ||
              a;
          return A | f | C
            ? r.createElement(
                i.default,
                {
                  'data-testid': 'installList',
                  subheader: r.createElement(
                    p,
                    { variant: 'subtitle1' },
                    n('sidebar.installation.title')
                  ),
                },
                A &&
                  r.createElement(u.default, {
                    dependencyManager: u.DependencyManager.NPM,
                    packageName: I,
                  }),
                C &&
                  r.createElement(u.default, {
                    dependencyManager: u.DependencyManager.YARN,
                    packageName: I,
                  }),
                f &&
                  r.createElement(u.default, {
                    dependencyManager: u.DependencyManager.PNPM,
                    packageName: I,
                  })
              )
            : null;
        };
      g(
        m,
        'useTranslation{{ t }}\nuseConfig{{ configOptions }}\nuseContext{detailContext}',
        function () {
          return [s.useTranslation, d.useConfig];
        }
      );
      var I = m;
      const A = I;
      var C, f;
      (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (C.register(
          p,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        ),
        C.register(
          m,
          'Install',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        ),
        C.register(
          I,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/pages/Version/DetailSidebar/Install/InstallListItem.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { DependencyManager: () => m, default: () => v });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Avatar.tsx'),
        l = a('./src/components/CopyToClipBoard.tsx'),
        d = a('./src/components/ListItem.tsx'),
        c = a('./src/components/ListItemText.tsx'),
        u = a('./src/pages/Version/DetailSidebar/Install/img/npm.svg'),
        g = a('./src/pages/Version/DetailSidebar/Install/img/pnpm.svg'),
        p = a('./src/pages/Version/DetailSidebar/Install/img/yarn.svg');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var m,
        I =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        A = (0, n.default)(d.default, { target: 'e1sfautt0', label: 'InstallItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        C = (0, n.default)(c.default, { target: 'e1sfautt1', label: 'InstallListItemText' })({
          name: 'fipixf',
          styles: 'padding:0 10px;margin:0;',
        }),
        f = (0, n.default)(i.default, { target: 'e1sfautt2', label: 'PackageMangerAvatar' })({
          name: '17x0n9v',
          styles: 'border-radius:0px;padding:0;img{background-color:transparent;}',
        });
      !(function (e) {
        (e.NPM = 'npm'), (e.YARN = 'yarn'), (e.PNPM = 'pnpm');
      })(m || (m = {}));
      var b = function (e) {
        var t = e.packageName,
          a = e.dependencyManager,
          o = (0, s.useTranslation)().t;
        switch (a) {
          case m.NPM:
            return r.createElement(
              A,
              { button: !0, 'data-testid': 'installListItem-npm' },
              r.createElement(f, { alt: 'npm', src: u }),
              r.createElement(C, {
                primary: r.createElement(l.default, {
                  text: o('sidebar.installation.install-using-npm-command', { packageName: t }),
                }),
                secondary: o('sidebar.installation.install-using-npm'),
              })
            );
          case m.YARN:
            return r.createElement(
              A,
              { button: !0, 'data-testid': 'installListItem-yarn' },
              r.createElement(f, { alt: 'yarn', src: p }),
              r.createElement(C, {
                primary: r.createElement(l.default, {
                  text: o('sidebar.installation.install-using-yarn-command', { packageName: t }),
                }),
                secondary: o('sidebar.installation.install-using-yarn'),
              })
            );
          case m.PNPM:
            return r.createElement(
              A,
              { button: !0, 'data-testid': 'installListItem-pnpm' },
              r.createElement(f, { alt: 'pnpm', src: g }),
              r.createElement(C, {
                primary: r.createElement(l.default, {
                  text: o('sidebar.installation.install-using-pnpm-command', { packageName: t }),
                }),
                secondary: o('sidebar.installation.install-using-pnpm'),
              })
            );
          default:
            return null;
        }
      };
      I(b, 'useTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var h = b;
      const v = h;
      var y, L;
      (y = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (y.register(
          A,
          'InstallItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        y.register(
          C,
          'InstallListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        y.register(
          f,
          'PackageMangerAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        y.register(
          b,
          'InstallListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        y.register(
          h,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/pages/Version/DetailSidebar/Install/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/Install/Install.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Repository/Repository.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => x });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = a('./src/components/Avatar.tsx'),
        l = a('./src/components/CopyToClipBoard.tsx'),
        d = a('./src/components/Link.tsx'),
        c = a('./src/components/List.tsx'),
        u = a('./src/components/ListItem.tsx'),
        g = a('./src/components/ListItemText.tsx'),
        p = a('./src/components/Text/index.ts'),
        m = a('./src/utils/url.ts'),
        I = a('./src/pages/Version/context.ts'),
        A = a('./src/pages/Version/DetailSidebar/Repository/img/git.png');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var C =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        f = (0, n.default)(p.default, { target: 'e7tnhe50', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        b = (0, n.default)(d.default, { target: 'e7tnhe51', label: 'GithubLink' })(function (e) {
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
        h = (0, n.default)(u.default, { target: 'e7tnhe52', label: 'RepositoryListItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        v = (0, n.default)(g.default, { target: 'e7tnhe53', label: 'RepositoryListItemText' })({
          name: 'fipixf',
          styles: 'padding:0 10px;margin:0;',
        }),
        y = (0, n.default)(i.default, { target: 'e7tnhe54', label: 'RepositoryAvatar' })({
          name: '17x0n9v',
          styles: 'border-radius:0px;padding:0;img{background-color:transparent;}',
        }),
        L = function () {
          var e,
            t,
            a = r.useContext(I.DetailContext),
            o = (0, s.useTranslation)().t,
            n = a.packageMeta;
          if (
            null == n ||
            null === (e = n.latest) ||
            void 0 === e ||
            null === (t = e.repository) ||
            void 0 === t ||
            !t.url ||
            !(0, m.isURL)(n.latest.repository.url)
          )
            return null;
          var i = n.latest.repository.url,
            d = i.includes('git+') ? i.split('git+')[1] : i;
          return r.createElement(
            c.default,
            {
              dense: !0,
              subheader: r.createElement(
                f,
                { variant: 'subtitle1' },
                o('sidebar.repository.title')
              ),
            },
            r.createElement(
              h,
              { button: !0 },
              r.createElement(y, { src: A }),
              r.createElement(v, {
                primary: r.createElement(
                  l.default,
                  { text: d },
                  r.createElement(b, { external: !0, to: d }, d)
                ),
              })
            )
          );
        };
      C(L, 'useContext{detailContext}\nuseTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var j = L;
      const x = j;
      var k, H;
      (k = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (k.register(
          f,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        k.register(
          b,
          'GithubLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        k.register(
          h,
          'RepositoryListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        k.register(
          v,
          'RepositoryListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        k.register(
          y,
          'RepositoryAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        k.register(
          L,
          'Repository',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        k.register(
          j,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/pages/Version/DetailSidebar/Repository/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/Repository/Repository.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/DetailSidebar.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/Version.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => g });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/components/Loading/index.ts'),
        s = a('./src/components/NotFound/index.ts'),
        i = a('./src/pages/Version/context.ts'),
        l = a('./src/pages/Version/VersionLayout.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        c = function () {
          var e = (0, n.useContext)(i.DetailContext),
            t = e.isLoading,
            a = e.hasNotBeenFound;
          return t
            ? n.createElement(r.default, null)
            : a
            ? n.createElement(s.default, null)
            : n.createElement(l.default, null);
        };
      d(c, 'useContext{detailContext}');
      var u = c;
      const g = u;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          c,
          'Version',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/Version.tsx'
        ),
        p.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/Version.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/Version/VersionContextProvider.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => C });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = a(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        c = a('./src/providers/API/APIProvider.tsx'),
        u = a('./src/pages/Version/context.ts'),
        g = a('./src/pages/Version/get-route-package-name.ts'),
        p = a('./src/pages/Version/is-package-version-valid.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var m =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        I = function (e) {
          var t = e.children,
            a = (0, d.useParams)(),
            o = a.version,
            s = a.package,
            m = a.scope,
            I = (0, l.useState)((0, g.default)(s, m)),
            A = (0, r.default)(I, 2),
            C = A[0],
            f = A[1],
            b = (0, l.useState)(o),
            h = (0, r.default)(b, 2),
            v = h[0],
            y = h[1],
            L = (0, l.useState)(),
            j = (0, r.default)(L, 2),
            x = j[0],
            k = j[1],
            H = (0, l.useState)(),
            G = (0, r.default)(H, 2),
            w = G[0],
            D = G[1],
            M = (0, l.useState)(!0),
            T = (0, r.default)(M, 2),
            P = T[0],
            _ = T[1],
            S = (0, l.useState)(),
            E = (0, r.default)(S, 2),
            N = E[0],
            R = E[1],
            O = (0, c.useAPI)(),
            V = O.callDetailPage,
            z = O.callReadme;
          (0, l.useEffect)(
            function () {
              var e = (0, g.default)(s, m);
              f(e);
            },
            [s, m]
          ),
            (0, l.useEffect)(
              function () {
                y(o);
              },
              [o]
            );
          var B = (0, l.useCallback)(
            (0, n.default)(
              i().mark(function e() {
                var t, a;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), V(C, v);
                        case 3:
                          return (t = e.sent), (e.next = 6), z(C, v);
                        case 6:
                          (a = e.sent),
                            (0, p.default)(t, v) ? (D(a), k(t), _(!1)) : (_(!1), R(!0)),
                            (e.next = 14);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(0)), R(!0), _(!1);
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            ),
            [C, v, V, z]
          );
          return (
            (0, l.useEffect)(
              function () {
                B();
              },
              [B]
            ),
            l.createElement(
              u.DetailContext.Provider,
              {
                value: {
                  packageMeta: x,
                  packageVersion: v,
                  readMe: w,
                  packageName: C,
                  isLoading: P,
                  hasNotBeenFound: N,
                },
              },
              t
            )
          );
        };
      m(
        I,
        'useParams{{ version, package: pkgName, scope }}\nuseState{[packageName, setPackageName](getRouterPackageName(pkgName, scope))}\nuseState{[packageVersion, setPackageVersion](version)}\nuseState{[packageMeta, setPackageMeta]}\nuseState{[readMe, setReadme]}\nuseState{[isLoading, setIsLoading](true)}\nuseState{[hasNotBeenFound, setHasNotBeenFound]}\nuseAPI{{ callDetailPage, callReadme }}\nuseEffect{}\nuseEffect{}\nuseCallback{doCalls}\nuseEffect{}',
        function () {
          return [d.useParams, c.useAPI];
        }
      );
      var A = I;
      const C = A;
      var f, b;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          I,
          'VersionContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        ),
        f.register(
          A,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/pages/Version/VersionLayout.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@material-ui+core@4.11.4_9c6a8df88c2691f81f37725d5b4de033/node_modules/@material-ui/core/esm/Grid/Grid.js'
        ),
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = a('./src/pages/Version/DetailContainer/index.ts'),
        i = a('./src/pages/Version/DetailSidebar/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l = function () {
          return r.createElement(
            n.default,
            {
              className: 'container content',
              container: !0,
              'data-testid': 'version-layout',
              spacing: 0,
            },
            r.createElement(
              n.default,
              { item: !0, md: 8, xs: 12 },
              r.createElement(s.default, null)
            ),
            r.createElement(
              n.default,
              { item: !0, md: 4, xs: 12 },
              r.createElement(i.default, null)
            )
          );
        },
        d = l;
      const c = d;
      var u, g;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          l,
          'VersionLayout',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionLayout.tsx'
        ),
        u.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionLayout.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/pages/Version/context.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          DetailContext: () => i,
          DetailContextProvider: () => l,
          DetailContextConsumer: () => d,
        });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        s,
        i = (0, n.createContext)({}),
        l = i.Provider,
        d = i.Consumer;
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'DetailContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        ),
        r.register(
          l,
          'DetailContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        ),
        r.register(
          d,
          'DetailContextConsumer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/pages/Version/get-route-package-name.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { default: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function n(e, t) {
        return t ? '@'.concat(t, '/').concat(e) : e;
      }
      var r = n;
      const s = r;
      var i, l;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          n,
          'getRouterPackageName',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/get-route-package-name.ts'
        ),
        i.register(
          r,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/get-route-package-name.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/Version/index.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          DetailContext: () => o.DetailContext,
          DetailContextConsumer: () => o.DetailContextConsumer,
          DetailContextProvider: () => o.DetailContextProvider,
          VersionPageConsumerProps: () => n.VersionPageConsumerProps,
          DetailContextProps: () => n.DetailContextProps,
          default: () => r.default,
        });
      var o = a('./src/pages/Version/context.ts'),
        n = a('./src/pages/Version/version-config.ts'),
        r = a('./src/pages/Version/Version.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/is-package-version-valid.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { default: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function n(e, t) {
        return !t || void 0 === t || (!!e.versions && Object.keys(e.versions).includes(t));
      }
      var r = n;
      const s = r;
      var i, l;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          n,
          'isPackageVersionValid',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/is-package-version-valid.ts'
        ),
        i.register(
          r,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/is-package-version-valid.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/Version/version-config.ts': (e, t, a) => {
      'use strict';
      a.r(t);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/Home.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => u });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-redux@7.2.1_e084f946920a04d85390aa355643c4d5/node_modules/react-redux/es/index.js'
        ),
        s = a('./src/components/Loading/index.ts'),
        i = a('./src/pages/home/PackageList/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var l =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function (e) {
          e.isUserLoggedIn;
          var t = (0, r.useSelector)(function (e) {
              return e.packages;
            }),
            a = (0, r.useSelector)(function (e) {
              var t;
              return null == e || null === (t = e.loading) || void 0 === t
                ? void 0
                : t.models.packages;
            }),
            o = (0, r.useDispatch)(),
            l = null == t ? void 0 : t.response;
          return (
            (0, n.useEffect)(
              function () {
                o.packages.getPackages();
              },
              [o]
            ),
            n.createElement(
              'div',
              { className: 'container content', 'data-testid': 'home-page-container' },
              a ? n.createElement(s.default, null) : n.createElement(i.PackageList, { packages: l })
            )
          );
        };
      l(
        d,
        'useSelector{packageStore}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseEffect{}',
        function () {
          return [r.useSelector, r.useSelector, r.useDispatch];
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
    './src/pages/home/PackageList/Help/Help.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => f });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/Button.tsx'),
        i = a('./src/components/CardActions.tsx'),
        l = a('./src/components/CardContent.tsx'),
        d = a('./src/components/CopyToClipBoard.tsx'),
        c = a('./src/components/Heading.tsx'),
        u = a('./src/components/Text/index.ts'),
        g = a('./src/providers/config/index.ts'),
        p = a('./src/pages/home/PackageList/Help/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var m =
        'undefined' != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e;
            };
      function I(e, t) {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(u.default, { variant: 'body1' }, e),
          n.createElement(d.default, { text: t })
        );
      }
      var A = function () {
        var e = (0, g.useConfig)().configOptions.base,
          t = (0, r.useTranslation)().t;
        return n.createElement(
          p.CardStyled,
          { id: 'help-card' },
          n.createElement(
            l.default,
            null,
            n.createElement(
              c.default,
              { gutterBottom: !0, id: 'help-card__title', variant: 'h5' },
              t('help.title')
            ),
            n.createElement(
              p.HelpTitle,
              { color: 'textSecondary', gutterBottom: !0 },
              t('help.sub-title')
            ),
            I(t('help.first-step'), t('help.first-step-command-line', { registryUrl: e })),
            I(t('help.second-step'), t('help.second-step-command-line', { registryUrl: e })),
            n.createElement(u.default, { variant: 'body2' }, t('help.third-step'))
          ),
          n.createElement(
            i.default,
            null,
            n.createElement(
              s.default,
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
        return [g.useConfig, r.useTranslation];
      });
      var C = A;
      const f = C;
      var b, h;
      (b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (b.register(
          I,
          'renderHeadingClipboardSegments',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/Help.tsx'
        ),
        b.register(
          A,
          'Help',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/Help.tsx'
        ),
        b.register(
          C,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/Help.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/pages/home/PackageList/Help/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/home/PackageList/Help/Help.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/PackageList/Help/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { CardStyled: () => d, HelpTitle: () => c });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        r = a('./src/components/Card.tsx'),
        s = a('./src/components/Heading.tsx');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = (0, n.default)(r.default, { target: 'e1gdaual0', label: 'CardStyled' })({
          name: '1rkew7x',
          styles: 'width:600px;margin:auto;',
        }),
        c = (0, n.default)(s.default, { target: 'e1gdaual1', label: 'HelpTitle' })({
          name: 'uewl2b',
          styles: 'margin-bottom:20px;',
        });
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          d,
          'CardStyled',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/styles.ts'
        ),
        i.register(
          c,
          'HelpTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Help/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/pages/home/PackageList/Package/Package.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => w });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a(
          '../../../node_modules/.pnpm/@emotion+core@10.1.1_react@17.0.2/node_modules/@emotion/core/dist/core.browser.esm.js'
        ),
        d = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/BugReport.js'
        ),
        c = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/CloudDownload.js'
        ),
        u = a(
          '../../../node_modules/.pnpm/@material-ui+icons@4.11.2_842d6fd0a208aabbcab28b4283e0161f/node_modules/@material-ui/icons/Home.js'
        ),
        g = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        p = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        m = a('./src/components/Grid.tsx'),
        I = a('./src/components/Icons/index.ts'),
        A = a('./src/components/Link.tsx'),
        C = a('./src/components/ListItem.tsx'),
        f = a('./src/components/Tooltip.tsx'),
        b = a('./src/providers/API/APIProvider.tsx'),
        h = a('./src/providers/config/index.ts'),
        v = a('./src/utils/file-size.ts'),
        y = a('./src/utils/package.ts'),
        L = a('./src/utils/url.ts'),
        j = a('./src/pages/home/PackageList/Package/styles.ts'),
        x = a('./src/pages/home/PackageList/Package/Tag/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var k =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        H = function (e) {
          var t,
            a,
            o = e.author,
            r = o.name,
            s = o.avatar,
            l = e.bugs,
            I = e.description,
            k = e.dist,
            H = e.homepage,
            G = e.keywords,
            w = void 0 === G ? [] : G,
            D = e.license,
            M = e.name,
            T = e.time,
            N = e.version,
            R = (0, p.useTranslation)().t,
            O = (0, b.useAPI)().getResource,
            V = (0, h.useConfig)().configOptions,
            z = (0, g.useCallback)(
              (function () {
                var e = (0, n.default)(
                  i().mark(function e(t) {
                    var a, o, n;
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.replace('https://registry.npmjs.org/', V.base)),
                              (e.next = 3),
                              O(a)
                            );
                          case 3:
                            (o = e.sent),
                              (n = (0, L.extractFileName)(a)),
                              (0, L.downloadFile)(o, n);
                          case 6:
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
              [O, V]
            ),
            B = function () {
              return g.createElement(
                m.default,
                { container: !0, item: !0, xs: 12 },
                g.createElement(
                  m.default,
                  { item: !0, xs: !0 },
                  g.createElement(
                    j.WrapperLink,
                    { to: '/-/web/detail/'.concat(M) },
                    g.createElement(j.PackageTitle, { className: 'package-title' }, M)
                  )
                ),
                g.createElement(
                  j.GridRightAligned,
                  { alignItems: 'center', container: !0, item: !0, justify: 'flex-end', xs: !0 },
                  H &&
                    (0, L.isURL)(H) &&
                    g.createElement(
                      A.default,
                      { external: !0, to: H },
                      g.createElement(
                        f.default,
                        {
                          'aria-label': R('package.homepage'),
                          title: R('package.visit-home-page'),
                        },
                        g.createElement(
                          j.IconButton,
                          { 'aria-label': R('package.homepage') },
                          g.createElement(u.default, null)
                        )
                      )
                    ),
                  (null == l ? void 0 : l.url) &&
                    (0, L.isURL)(l.url) &&
                    g.createElement(
                      A.default,
                      { external: !0, to: l.url },
                      g.createElement(
                        f.default,
                        { 'aria-label': R('package.bugs'), title: R('package.open-an-issue') },
                        g.createElement(
                          j.IconButton,
                          { 'aria-label': R('package.bugs') },
                          g.createElement(d.default, null)
                        )
                      )
                    ),
                  (null == k ? void 0 : k.tarball) &&
                    (0, L.isURL)(k.tarball) &&
                    g.createElement(
                      A.default,
                      {
                        external: !0,
                        onClick: function () {
                          z(k.tarball);
                        },
                        to: '#',
                      },
                      g.createElement(
                        f.default,
                        {
                          'aria-label': R('package.download', { what: R('package.the-tar-file') }),
                          title: R('package.tarball'),
                        },
                        g.createElement(
                          j.IconButton,
                          { 'aria-label': R('package.download') },
                          g.createElement(c.default, null)
                        )
                      )
                    )
                )
              );
            };
          return g.createElement(
            j.Wrapper,
            { className: 'package', 'data-testid': 'package-item-list' },
            g.createElement(
              C.default,
              { alignItems: 'flex-start' },
              g.createElement(j.PackageListItemText, {
                className: 'package-link',
                component: 'div',
                primary: B(),
                secondary:
                  ((a = w.sort().map(function (e, t) {
                    return g.createElement(x.default, { key: t }, e);
                  })),
                  g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(j.Description, null, I),
                    a.length > 0 && g.createElement(j.TagContainer, null, a)
                  )),
              })
            ),
            g.createElement(
              C.default,
              { alignItems: 'flex-start' },
              ((t = (0, y.getAuthorName)(r)),
              g.createElement(
                j.Author,
                null,
                g.createElement(j.Avatar, { alt: t, src: s }),
                g.createElement(j.Details, null, g.createElement(j.Text, { text: t }))
              )),
              N &&
                g.createElement(
                  j.OverviewItem,
                  null,
                  g.createElement(P, null),
                  R('package.version', { version: N })
                ),
              T &&
                g.createElement(
                  j.OverviewItem,
                  null,
                  g.createElement(E, null),
                  g.createElement(
                    j.Published,
                    null,
                    R('package.published-on', { time: (0, y.formatDate)(T) })
                  ),
                  (0, y.formatDateDistance)(T)
                ),
              (null == k ? void 0 : k.unpackedSize) &&
                g.createElement(
                  j.OverviewItem,
                  null,
                  g.createElement(_, null),
                  (0, v.default)(k.unpackedSize)
                ),
              D && g.createElement(j.OverviewItem, null, g.createElement(S, null), D)
            )
          );
        };
      k(
        H,
        'useTranslation{{ t }}\nuseAPI{{ getResource }}\nuseConfig{{ configOptions }}\nuseCallback{handleDownload}',
        function () {
          return [p.useTranslation, b.useAPI, h.useConfig];
        }
      );
      var G = H;
      const w = G;
      var D,
        M,
        T = function (e) {
          var t = e.theme;
          return (0, l.css)(
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
        P = (0, r.default)(I.Version, { target: 'e1mn8d1q0', label: 'StyledVersion' })(T, ';'),
        _ = (0, r.default)(I.FileBinary, { target: 'e1mn8d1q1', label: 'StyledFileBinary' })(
          T,
          ';'
        ),
        S = (0, r.default)(I.Law, { target: 'e1mn8d1q2', label: 'StyledLaw' })(T, ';'),
        E = (0, r.default)(I.Time, { target: 'e1mn8d1q3', label: 'StyledTime' })(T, ';');
      (D = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (D.register(
          H,
          'Package',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        D.register(
          T,
          'iconStyle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        D.register(
          P,
          'StyledVersion',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        D.register(
          _,
          'StyledFileBinary',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        D.register(
          S,
          'StyledLaw',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        D.register(
          E,
          'StyledTime',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        ),
        D.register(
          G,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Package.tsx'
        )),
        (M =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          M(e);
    },
    './src/pages/home/PackageList/Package/Tag/Tag.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => l });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a('./src/pages/home/PackageList/Package/Tag/styles.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function (e) {
          var t = e.children;
          return n.createElement(r.Wrapper, null, t);
        },
        i = s;
      const l = i;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
          'Tag',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Tag/Tag.tsx'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/Tag/Tag.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/home/PackageList/Package/Tag/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/home/PackageList/Package/Tag/Tag.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/PackageList/Package/Tag/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { Wrapper: () => i });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        );
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        s,
        i = (0, n.default)('span', { target: 'e1jm3tg90', label: 'Wrapper' })({
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
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/pages/home/PackageList/Package/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default, PackageInterface: () => o.PackageInterface });
      var o = a('./src/pages/home/PackageList/Package/Package.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/PackageList/Package/styles.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          OverviewItem: () => A,
          Published: () => C,
          Text: () => f,
          Details: () => b,
          Author: () => h,
          Avatar: () => v,
          WrapperLink: () => y,
          PackageTitle: () => L,
          GridRightAligned: () => j,
          Wrapper: () => x,
          IconButton: () => k,
          TagContainer: () => H,
          PackageListItemText: () => G,
          Description: () => w,
        });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled-base@10.0.31_33bb31e1d857102242df3642b32eda18/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        i = a('./src/components/Avatar.tsx'),
        l = a('./src/components/Grid.tsx'),
        d = a('./src/components/IconButton.tsx'),
        c = a('./src/components/Label/index.ts'),
        u = a('./src/components/List.tsx'),
        g = a('./src/components/ListItemText.tsx'),
        p = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var m,
        I,
        A = (0, r.default)('span', { target: 'enspaod0', label: 'OverviewItem' })(function (e) {
          var t,
            a = e.theme;
          return (
            (t = {
              display: 'flex',
              alignItems: 'center',
              margin: '0 0 0 16px',
              color:
                'light' === (null == a ? void 0 : a.palette.type)
                  ? null == a
                    ? void 0
                    : a.palette.greyLight2
                  : null == a
                  ? void 0
                  : a.palette.white,
              fontSize: 12,
            }),
            (0, n.default)(
              t,
              '@media (max-width: '.concat(null == a ? void 0 : a.breakPoints.medium, 'px)'),
              { ':nth-of-type(3)': { display: 'none' } }
            ),
            (0, n.default)(
              t,
              '@media (max-width: '.concat(null == a ? void 0 : a.breakPoints.small, 'px)'),
              { ':nth-of-type(4)': { display: 'none' } }
            ),
            t
          );
        }, ''),
        C = (0, r.default)('span', { target: 'enspaod1', label: 'Published' })(function (e) {
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
        f = (0, r.default)(c.default, { target: 'enspaod2', label: 'Text' })(function (e) {
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
        b = (0, r.default)('span', { target: 'enspaod3', label: 'Details' })({
          name: '1w4wxz3',
          styles: 'margin-left:5px;line-height:1.5;display:flex;flex-direction:column;',
        }),
        h = (0, r.default)('div', { target: 'enspaod4', label: 'Author' })({
          name: '70qvj9',
          styles: 'display:flex;align-items:center;',
        }),
        v = (0, r.default)(i.default, { target: 'enspaod5', label: 'Avatar' })({
          name: '1t9pz9x',
          styles: 'width:20px;height:20px;',
        }),
        y = (0, r.default)(s.Link, { target: 'enspaod6', label: 'WrapperLink' })({
          name: 'ytumd6',
          styles: 'text-decoration:none;',
        }),
        L = (0, r.default)('span', { target: 'enspaod7', label: 'PackageTitle' })(function (e) {
          var t = e.theme;
          return (0,
          n.default)({ fontWeight: null == t ? void 0 : t.fontWeight.bold, fontSize: 20, display: 'block', marginBottom: 12, color: 'dark' == (null == t ? void 0 : t.palette.type) ? (null == t ? void 0 : t.palette.dodgerBlue) : null == t ? void 0 : t.palette.eclipse, cursor: 'pointer' }, '@media (max-width: '.concat(null == t ? void 0 : t.breakPoints.small, 'px)'), { fontSize: 14, marginBottom: 8 });
        }, ''),
        j = (0, r.default)(l.default, { target: 'enspaod8', label: 'GridRightAligned' })({
          name: 's2uf1z',
          styles: 'text-align:right;',
        }),
        x = (0, r.default)(u.default, { target: 'enspaod9', label: 'Wrapper' })(function (e) {
          var t,
            a,
            o,
            n = e.theme;
          return {
            ':hover': {
              backgroundColor:
                'dark' == (null == n || null === (t = n.palette) || void 0 === t ? void 0 : t.type)
                  ? null == n || null === (a = n.palette) || void 0 === a
                    ? void 0
                    : a.secondary.main
                  : null == n || null === (o = n.palette) || void 0 === o
                  ? void 0
                  : o.greyLight3,
            },
          };
        }, ''),
        k = (0, r.default)(d.default, { target: 'enspaod10', label: 'IconButton' })({
          name: '8a08e6',
          styles: 'padding:6px;svg{font-size:16px;}',
        }),
        H = (0, r.default)('span', { target: 'enspaod11', label: 'TagContainer' })(function (e) {
          var t = e.theme;
          return (0,
          n.default)({ marginTop: 8, marginBottom: 12, display: 'flex', flexWrap: 'wrap' }, '@media (max-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'none' });
        }, ''),
        G = (0, r.default)(g.default, { target: 'enspaod12', label: 'PackageListItemText' })({
          name: '9t8fgp',
          styles: 'padding-right:0;',
        }),
        w = (0, r.default)(p.default, { target: 'enspaod13', label: 'Description' })(function (e) {
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
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          A,
          'OverviewItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          C,
          'Published',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          f,
          'Text',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          b,
          'Details',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          h,
          'Author',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          v,
          'Avatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          y,
          'WrapperLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          L,
          'PackageTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          j,
          'GridRightAligned',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          x,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          k,
          'IconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          H,
          'TagContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          G,
          'PackageListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        ),
        m.register(
          w,
          'Description',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/home/PackageList/Package/styles.ts'
        )),
        (I =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          I(e);
    },
    './src/pages/home/PackageList/PackageList.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { PackageList: () => A });
      var o,
        n = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        r = a(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/AutoSizer/index.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/CellMeasurer/index.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/List/index.js'
        ),
        l = a(
          '../../../node_modules/.pnpm/react-virtualized@9.22.3_react-dom@17.0.2+react@17.0.2/node_modules/react-virtualized/dist/commonjs/WindowScroller/index.js'
        ),
        d = a('./src/components/Divider.tsx'),
        c = a('./src/utils/package.ts'),
        u = a('./src/pages/home/PackageList/Help/index.ts'),
        g = a('./src/pages/home/PackageList/Package/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        I = new s.CellMeasurerCache({ fixedWidth: !0, defaultHeight: 100 }),
        A = function (e) {
          var t = e.packages,
            a = function (e) {
              var a = e.index,
                o = e.key,
                r = e.parent,
                i = e.style,
                l = t[a],
                u = l.name,
                p = l.version,
                m = l.description,
                A = l.time,
                C = l.keywords,
                f = l.dist,
                b = l.homepage,
                h = l.bugs,
                v = l.author,
                y = l.license,
                L = (0, c.formatLicense)(y);
              return n.createElement(
                s.CellMeasurer,
                { cache: I, columnIndex: 0, key: o, parent: r, rowIndex: a },
                n.createElement(
                  'div',
                  { style: i },
                  0 !== a && n.createElement(d.default, null),
                  n.createElement(g.default, {
                    author: v,
                    bugs: h,
                    description: m,
                    dist: f,
                    homepage: b,
                    keywords: C,
                    license: L,
                    name: u,
                    time: A,
                    version: p,
                  })
                )
              );
            };
          return 0 === t.length
            ? n.createElement(u.default, null)
            : n.createElement(l.WindowScroller, null, function (e) {
                var o = e.height,
                  s = e.isScrolling,
                  l = e.scrollTop,
                  d = e.onChildScroll;
                return n.createElement(r.AutoSizer, { disableHeight: !0 }, function (e) {
                  var r = e.width;
                  return n.createElement(i.List, {
                    autoHeight: !0,
                    deferredMeasurementCache: I,
                    height: o,
                    isScrolling: s,
                    onScroll: d,
                    overscanRowCount: 3,
                    rowCount: t.length,
                    rowHeight: I.rowHeight,
                    rowRenderer: a,
                    scrollTop: l,
                    width: r,
                  });
                });
              });
        };
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          I,
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
    './src/pages/home/PackageList/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { PackageList: () => o.PackageList });
      var o = a('./src/pages/home/PackageList/PackageList.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/home/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/home/Home.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/providers/API/APIProvider.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => A, useAPI: () => b });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = a('./src/providers/config/index.ts'),
        c = a('./lib/constants.ts'),
        u = a('./src/providers/API/api.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        p = (0, l.createContext)({}),
        m = function (e) {
          var t = e.children,
            a = (0, d.useConfig)().configOptions,
            o = function (e) {
              return ''.concat(null == a ? void 0 : a.base, '-/verdaccio/').concat(e);
            },
            s = (function () {
              var e = (0, r.default)(
                i().mark(function e(t, a) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            u.default.request(
                              o('package/readme/'.concat(t).concat(a ? '?v='.concat(a) : '')),
                              'GET'
                            )
                          );
                        case 2:
                          return e.abrupt('return', e.sent);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            g = (function () {
              var e = (0, r.default)(
                i().mark(function e(t, a) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            u.default.request(
                              o('sidebar/'.concat(t).concat(a ? '?v='.concat(a) : '')),
                              'GET'
                            )
                          );
                        case 2:
                          return e.abrupt('return', e.sent);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            m = (function () {
              var e = (0, r.default)(
                i().mark(function e(t, a) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            u.default.request(o('search/'.concat(encodeURIComponent(t))), 'GET', {
                              signal: a,
                              headers: {},
                            })
                          );
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = (0, r.default)(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u.default.request(o('packages'), 'GET');
                        case 2:
                          return e.abrupt('return', e.sent);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            A = (function () {
              var e = (0, r.default)(
                i().mark(function e(t, a) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            u.default.request(o('login'), 'POST', {
                              body: JSON.stringify({ username: t, password: a }),
                              headers: { Accept: c.HEADERS.JSON, 'Content-Type': c.HEADERS.JSON },
                            })
                          );
                        case 2:
                          return e.abrupt('return', e.sent);
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            C = (function () {
              var e = (0, r.default)(
                i().mark(function e(t) {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            u.default.request(t, 'GET', {
                              headers: (0, n.default)(
                                {},
                                'accept',
                                'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
                              ),
                              credentials: 'include',
                            })
                          );
                        case 2:
                          return e.abrupt('return', e.sent);
                        case 3:
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
            f = (0, l.useMemo)(
              function () {
                return {
                  callReadme: s,
                  callDetailPage: g,
                  callSearch: m,
                  getPackages: I,
                  doLogin: A,
                  getResource: C,
                };
              },
              [s, C, g, m, A]
            );
          return l.createElement(p.Provider, { value: f }, t);
        };
      g(m, 'useConfig{{ configOptions }}\nuseMemo{value}', function () {
        return [d.useConfig];
      });
      var I = m;
      const A = I;
      var C,
        f,
        b = function () {
          return (0, l.useContext)(p);
        };
      g(b, 'useContext{}'),
        (C = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (C.register(
            p,
            'AppAPIContext',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/APIProvider.tsx'
          ),
          C.register(
            m,
            'APIProvider',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/APIProvider.tsx'
          ),
          C.register(
            b,
            'useAPI',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/APIProvider.tsx'
          ),
          C.register(
            I,
            'default',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/APIProvider.tsx'
          )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
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
        _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/providers/API/storage.ts'
        ),
        _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./types/index.ts'),
        enterModule;
      function ownKeys(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(a), !0).forEach(function (t) {
                (0,
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ownKeys(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
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
      var API = (function () {
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
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : { headers: {} },
                    o = _storage__WEBPACK_IMPORTED_MODULE_3__.default.getItem('token'),
                    n = new Headers(a.headers);
                  return (
                    o &&
                      !1 === n.has('Authorization') &&
                      (n.set('Authorization', 'Bearer '.concat(o)), (a.headers = n)),
                    new Promise(function (o, n) {
                      fetch(e, _objectSpread({ method: t, credentials: 'same-origin' }, a))
                        .then(handleResponseType)
                        .then(function (e) {
                          e[0] ? o(e[1]) : (console.error(e), n(new Error('something went wrong')));
                        })
                        .catch(function (e) {
                          n(e);
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
    './src/providers/API/storage.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => l });
      var o,
        n = a(
          '../../../node_modules/.pnpm/localstorage-memory@1.0.3/node_modules/localstorage-memory/lib/localstorage-memory.js'
        ),
        r = a.n(n);
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var s;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      try {
        localStorage.setItem('__TEST__', ''),
          localStorage.removeItem('__TEST__'),
          (s = localStorage);
      } catch (e) {
        s = r();
      }
      var i = s;
      const l = i;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
          'storage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/storage.ts'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/storage.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/providers/config/AppConfigurationProvider.tsx': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => C, useConfig: () => h });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        s = a.n(r),
        i = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        l = a.n(i),
        d = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        c = a('./src/utils/colors.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
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
          a =
            null !==
              (e =
                null === (t = window) || void 0 === t
                  ? void 0
                  : t.__VERDACCIO_BASENAME_UI_OPTIONS) && void 0 !== e
              ? e
              : g.configOptions;
        return (
          (l()(a.primaryColor) || s()(a.primaryColor)) && (a.primaryColor = c.PRIMARY_COLOR), a
        );
      }
      var m = (0, d.createContext)(g),
        I = function (e) {
          var t = e.children,
            a = (0, d.useState)(p()),
            o = (0, n.default)(a, 2),
            r = o[0],
            s = o[1],
            i = (0, d.useMemo)(
              function () {
                return { configOptions: r, setConfigOptions: s };
              },
              [r]
            );
          return d.createElement(m.Provider, { value: i }, t);
        };
      u(I, 'useState{[configOptions, setConfigOptions](getConfiguration())}\nuseMemo{value}');
      var A = I;
      const C = A;
      var f,
        b,
        h = function () {
          return (0, d.useContext)(m);
        };
      u(h, 'useContext{}'),
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
            I,
            'AppConfigurationProvider',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          f.register(
            h,
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
    './src/providers/config/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => o.default, useConfig: () => o.useConfig });
      var o = a('./src/providers/config/AppConfigurationProvider.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/store/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { store: () => o.store });
      var o = a('./src/store/store.ts');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/store/models/configuration.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { configuration: () => f });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        s = a.n(r),
        i = a(
          '../../../node_modules/.pnpm/@rematch+core@2.1.0_redux@4.1.1/node_modules/@rematch/core/dist/core.esm.js'
        ),
        l = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        d = a.n(l),
        c = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        u = a.n(c),
        g = a('./src/utils/colors.ts'),
        p = a('./src/providers/API/api.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
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
      function I() {
        var e,
          t,
          a =
            null !==
              (e =
                null === (t = window) || void 0 === t
                  ? void 0
                  : t.__VERDACCIO_BASENAME_UI_OPTIONS) && void 0 !== e
              ? e
              : m;
        return (
          (u()(a.primaryColor) || d()(a.primaryColor)) && (a.primaryColor = g.PRIMARY_COLOR), a
        );
      }
      var A,
        C,
        f = (0, i.createModel)()({
          state: { config: I() },
          effects: function (e) {
            return {
              getPackages: function () {
                return (0, n.default)(
                  s().mark(function t() {
                    var a;
                    return s().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), p.default.request('/-/verdaccio/packages', 'GET');
                          case 2:
                            (a = t.sent), e.packages.savePackages(a);
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
          I,
          'getConfiguration',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        ),
        A.register(
          f,
          'configuration',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/store/models/index.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { models: () => l });
      var o,
        n = a('./src/store/models/configuration.ts'),
        r = a('./src/store/models/packages.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s,
        i,
        l = { packages: r.packages, configuration: n.configuration };
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        s.register(
          l,
          'models',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/index.ts'
        ),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/store/models/packages.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { packages: () => m });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        s = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/regenerator/index.js'
        ),
        i = a.n(s),
        l = a(
          '../../../node_modules/.pnpm/@rematch+core@2.1.0_redux@4.1.1/node_modules/@rematch/core/dist/core.esm.js'
        ),
        d = a('./src/providers/API/api.ts');
      function c(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(a), !0).forEach(function (t) {
                (0, r.default)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var g,
        p,
        m = (0, l.createModel)()({
          state: { response: [] },
          reducers: {
            savePackages: function (e, t) {
              return u(u({}, e), {}, { response: t });
            },
          },
          effects: function (e) {
            return {
              getPackages: function (t, a) {
                return (0, n.default)(
                  i().mark(function t() {
                    var o, n;
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (o = a.configuration.config.base),
                                (t.prev = 1),
                                (t.next = 4),
                                d.default.request(''.concat(o, '-/verdaccio/packages'), 'GET')
                              );
                            case 4:
                              (n = t.sent), e.packages.savePackages(n), (t.next = 11);
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
    './src/store/store.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { store: () => d });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@rematch+core@2.1.0_redux@4.1.1/node_modules/@rematch/core/dist/core.esm.js'
        ),
        r = a(
          '../../../node_modules/.pnpm/@rematch+loading@2.1.0_@rematch+core@2.1.0/node_modules/@rematch/loading/dist/loading.esm.js'
        ),
        s = a('./src/store/models/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = (0, n.init)({ models: s.models, plugins: [(0, r.default)()] });
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        i.register(
          d,
          'store',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/store.ts'
        ),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/utils/cli-utils.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, {
          copyToClipBoardUtility: () => s,
          getCLISetConfigRegistry: () => i,
          getCLISetRegistry: () => l,
          getCLIChangePassword: () => d,
        }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        r,
        s = function (e) {
          return function (t) {
            t.preventDefault();
            var a = document.createElement('div');
            if (((a.innerText = e), document.body)) {
              document.body.appendChild(a);
              var o = document.createRange(),
                n = window.getSelection();
              o.selectNodeContents(a),
                n.removeAllRanges(),
                n.addRange(o),
                document.execCommand('copy'),
                document.body.removeChild(a);
            }
          };
        };
      function i(e, t, a) {
        return ''
          .concat(e, ' ')
          .concat(t)
          .concat('' !== t ? ':' : '', 'registry ')
          .concat(a);
      }
      function l(e, t) {
        return ''.concat(e, ' --registry ').concat(t);
      }
      function d(e, t) {
        return ''.concat(e, ' profile set password --registry ').concat(t);
      }
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          s,
          'copyToClipBoardUtility',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        n.register(
          i,
          'getCLISetConfigRegistry',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        n.register(
          l,
          'getCLISetRegistry',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        n.register(
          d,
          'getCLIChangePassword',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        )),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/utils/colors.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { PRIMARY_COLOR: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        r,
        s = '#4b5e40';
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        n.register(
          s,
          'PRIMARY_COLOR',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/colors.ts'
        ),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/utils/constants.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { NODE_MANAGER: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        r,
        s = { npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' };
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        n.register(
          s,
          'NODE_MANAGER',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/constants.ts'
        ),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/utils/file-size.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { default: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var n, r;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function s(e, t, a, o, n) {
        return (
          ((t = Math), (a = t.log), 1e3, (n = (a(e) / a(1e3)) | 0), e / t.pow(1e3, n)).toFixed(2) +
          ' ' +
          (n ? 'kMGTPEZY'[--n] + 'B' : 'Bytes')
        );
      }
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        n.register(
          s,
          'fileSizeSI',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/file-size.ts'
        ),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './src/utils/login.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { isTokenExpire: () => g });
      var o,
        n = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        r = a('../../../node_modules/.pnpm/js-base64@3.6.1/node_modules/js-base64/base64.mjs'),
        s = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNumber.js'),
        i = a.n(s),
        l = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js'),
        d = a.n(l);
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var c, u;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function g(e) {
        if (!d()(e)) return !0;
        var t,
          a = e.split('.'),
          o = (0, n.default)(a, 2)[1];
        if (!o) return !0;
        try {
          t = JSON.parse(r.Base64.decode(o)).exp;
        } catch (t) {
          return console.error('Invalid token:', t, e), !0;
        }
        if (!t || !i()(t)) return !0;
        var s = 1e3 * t - 3e4;
        return Date.now() >= s;
      }
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        c.register(
          g,
          'isTokenExpire',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/login.ts'
        ),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/utils/package.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          TIMEFORMAT: () => I,
          formatLicense: () => A,
          formatRepository: () => C,
          formatDate: () => f,
          formatDateDistance: () => b,
          getLastUpdatedPackageTime: () => h,
          getRecentReleases: () => v,
          getAuthorName: () => y,
        });
      var o,
        n = a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/dayjs.min.js'),
        r = a.n(n),
        s = a(
          '../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/plugin/localizedFormat.js'
        ),
        i = a.n(s),
        l = a('../../../node_modules/.pnpm/dayjs@1.10.6/node_modules/dayjs/plugin/relativeTime.js'),
        d = a.n(l),
        c = a(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        u = a('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isString.js'),
        g = a.n(u);
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        I = 'L LTS';
      function A(e) {
        return g()(e) ? e : null != e && e.type ? e.type : void 0;
      }
      function C(e) {
        return g()(e) ? e : null != e && e.url ? e.url : null;
      }
      function f(e) {
        return r()(new Date(e)).format(I);
      }
      function b(e) {
        return r()(new Date(e)).fromNow();
      }
      function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = 0;
        return (
          Object.keys(e).forEach(function (a) {
            var o = e[a];
            o.fetched > t && (t = o.fetched);
          }),
          t ? f(t) : ''
        );
      }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object.keys(e).map(function (t) {
            return { version: t, time: f(e[t]) };
          });
        return t.slice(t.length - 3, t.length).reverse();
      }
      function y(e) {
        return e
          ? 'anonymous' === e.toLowerCase()
            ? c.default.t('author-anonymous')
            : e
          : c.default.t('author-unknown');
      }
      r().extend(d()),
        r().extend(i()),
        (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (p.register(
            I,
            'TIMEFORMAT',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            A,
            'formatLicense',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            C,
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
            h,
            'getLastUpdatedPackageTime',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            v,
            'getRecentReleases',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          ),
          p.register(
            y,
            'getAuthorName',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/package.ts'
          )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/utils/sec-utils.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { preventXSS: () => l });
      var o,
        n = a('../../../node_modules/.pnpm/xss@1.0.9/node_modules/xss/lib/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        s,
        i = {
          onIgnoreTagAttr: function (e, t, a) {
            if (e.match(/^h[0-9]$/) && 'id' === t)
              return t + '="' + (0, n.escapeAttrValue)(a) + '"';
          },
        };
      function l(e) {
        return (0, n.filterXSS)(e, i);
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          i,
          'xssOpts',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/sec-utils.ts'
        ),
        r.register(
          l,
          'preventXSS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/sec-utils.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/utils/storage.ts': (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => l });
      var o,
        n = a(
          '../../../node_modules/.pnpm/localstorage-memory@1.0.3/node_modules/localstorage-memory/lib/localstorage-memory.js'
        ),
        r = a.n(n);
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var s;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      try {
        localStorage.setItem('__TEST__', ''),
          localStorage.removeItem('__TEST__'),
          (s = localStorage);
      } catch (e) {
        s = r();
      }
      var i = s;
      const l = i;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
          'storage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/storage.ts'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/storage.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/utils/url.ts': (e, t, a) => {
      'use strict';
      a.r(t),
        a.d(t, {
          isURL: () => c,
          isEmail: () => u,
          extractFileName: () => g,
          downloadFile: () => m,
        });
      var o,
        n = a('../../../node_modules/.pnpm/validator@13.6.0/node_modules/validator/lib/isEmail.js'),
        r = a.n(n),
        s = a('../../../node_modules/.pnpm/validator@13.6.0/node_modules/validator/lib/isURL.js'),
        i = a.n(s);
      a('./types/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var l, d;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function c(e) {
        return i()(e || '', {
          protocols: ['http', 'https', 'git+https'],
          require_protocol: !0,
          require_tld: !1,
        });
      }
      function u(e) {
        return r()(e || '');
      }
      function g(e) {
        return e.substring(e.lastIndexOf('/') + 1);
      }
      function p(e, t) {
        var a = e;
        return (a.lastModified = Date.now()), (a.name = t), a;
      }
      function m(e, t) {
        var a;
        a = navigator.msSaveBlob
          ? p(new Blob([e], { type: 'application/octet-stream' }), t)
          : new File([e], t, { type: 'application/octet-stream', lastModified: Date.now() });
        var o = URL.createObjectURL(a),
          n = document.createElement('a');
        (n.href = o),
          (n.download = t),
          document.documentElement.appendChild(n),
          n.click(),
          setTimeout(function () {
            URL.revokeObjectURL(o), document.documentElement.removeChild(n);
          }, 150);
      }
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          c,
          'isURL',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        l.register(
          u,
          'isEmail',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        l.register(
          g,
          'extractFileName',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        l.register(
          p,
          'blobToFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        l.register(
          m,
          'downloadFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/utils/windows.ts': (e, t, a) => {
      'use strict';
      var o;
      a.r(t),
        a.d(t, { goToVerdaccioWebsite: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var n, r;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function s() {
        window.open('https://verdaccio.org', '_blank');
      }
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        n.register(
          s,
          'goToVerdaccioWebsite',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/windows.ts'
        ),
        (r =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          r(e);
    },
    './types/index.ts': (e, t, a) => {
      'use strict';
      a.r(t);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/i18n/download_translations sync recursive ^\\.\\/.*\\/ui\\.json$': (e, t, a) => {
      var o = {
        './ar-SA/ui.json': './src/i18n/download_translations/ar-SA/ui.json',
        './cs-CZ/ui.json': './src/i18n/download_translations/cs-CZ/ui.json',
        './de-DE/ui.json': './src/i18n/download_translations/de-DE/ui.json',
        './es-ES/ui.json': './src/i18n/download_translations/es-ES/ui.json',
        './fi-FI/ui.json': './src/i18n/download_translations/fi-FI/ui.json',
        './fil-PH/ui.json': './src/i18n/download_translations/fil-PH/ui.json',
        './fr-FR/ui.json': './src/i18n/download_translations/fr-FR/ui.json',
        './gl-ES/ui.json': './src/i18n/download_translations/gl-ES/ui.json',
        './hi-IN/ui.json': './src/i18n/download_translations/hi-IN/ui.json',
        './it-IT/ui.json': './src/i18n/download_translations/it-IT/ui.json',
        './ja-JP/ui.json': './src/i18n/download_translations/ja-JP/ui.json',
        './ko-KR/ui.json': './src/i18n/download_translations/ko-KR/ui.json',
        './pl-PL/ui.json': './src/i18n/download_translations/pl-PL/ui.json',
        './pt-BR/ui.json': './src/i18n/download_translations/pt-BR/ui.json',
        './pt-PT/ui.json': './src/i18n/download_translations/pt-PT/ui.json',
        './ro-RO/ui.json': './src/i18n/download_translations/ro-RO/ui.json',
        './ru-RU/ui.json': './src/i18n/download_translations/ru-RU/ui.json',
        './si-LK/ui.json': './src/i18n/download_translations/si-LK/ui.json',
        './sr-CS/ui.json': './src/i18n/download_translations/sr-CS/ui.json',
        './sr-SP/ui.json': './src/i18n/download_translations/sr-SP/ui.json',
        './tg-TJ/ui.json': './src/i18n/download_translations/tg-TJ/ui.json',
        './vi-VN/ui.json': './src/i18n/download_translations/vi-VN/ui.json',
        './yo-NG/ui.json': './src/i18n/download_translations/yo-NG/ui.json',
        './zh-CN/ui.json': './src/i18n/download_translations/zh-CN/ui.json',
        './zh-TW/ui.json': './src/i18n/download_translations/zh-TW/ui.json',
      };
      function n(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return o[e];
      }
      (n.keys = function () {
        return Object.keys(o);
      }),
        (n.resolve = r),
        (e.exports = n),
        (n.id = './src/i18n/download_translations sync recursive ^\\.\\/.*\\/ui\\.json$');
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
    './src/i18n/download_translations/ar-SA/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/cs-CZ/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"Anglicky","czech":"Czech","japanese":"Japonština","portuguese":"Portuguese","spanish":"Španělsky","german":"Německy","chinese":"Čínsky","chineseTraditional":"Chinese (Traditional)","french":"Francouzsky","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/de-DE/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/es-ES/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copiar al portapapeles","author-anonymous":"Anónimo","author-unknown":"Desconocido","action-bar-action":{"visit-home-page":"Visitar página principal","open-an-issue":"Reportar un error","download-tarball":"Descargar librería"},"dialog":{"registry-info":{"title":"Información del Registro"}},"header":{"documentation":"Documentación","registry-info":"Información del Registro","registry-info-link":"Aprender mas","registry-no-conf":"No hay configuración disponible","greetings":"Hola "},"search":{"packages":"Buscar paquetes"},"autoComplete":{"loading":"Cargando...","no-results-found":"No se encontraron resultados","clear":"Borrar","expand":"Expandir","collapse":"Colapsar"},"tab":{"uplinks":"Uplinks","versions":"Versiones","dependencies":"Dependencias","readme":"Léeme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} no tiene uplinks."},"versions":{"current-tags":"Etiquetas actuales","version-history":"Historial de versiones","not-available":"No disponible"},"package":{"published-on":"Publicado en {{time}} •","version":"v{{version}}","visit-home-page":"Visitar página principal","homepage":"Página principal","open-an-issue":"Reportar un error","bugs":"Error","download":"Descargar {{what}}","the-tar-file":"el archivo tar","tarball":"Librería"},"dependencies":{"has-no-dependencies":"{{package}} no tiene dependencias.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Usuario","password":"Contraseña"},"form-placeholder":{"username":"Tu usuario","password":"Tu contraseña segura"},"form-validation":{"required-field":"Este campo es requerido","required-min-length":"Este campo es requerido y la mínima longitud es {{length}}","unable-to-sign-in":"No se pudo iniciar sesión","username-or-password-cant-be-empty":"El nombre de usuario o la contraseña no pueden estar vacíos!"},"help":{"title":"Ningún paquete ha sido publicado aún.","sub-title":"Para publicar tu primer paquete:","first-step":"1. Inicia sesión","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publica","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresca la página"},"sidebar":{"detail":{"latest-version":"Última v{{version}}","version":"v{{version}}"},"installation":{"title":"Instalación","install-using-yarn":"Instala usando yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Instala usando npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Instala usando pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repositorio"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/fi-FI/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Kopioi leikepöydälle","author-anonymous":"Anonyymi","author-unknown":"Tuntematon","action-bar-action":{"visit-home-page":"Vieraile kotisivulla","open-an-issue":"Luo virheilmoitus","download-tarball":"Lataa tarball"},"dialog":{"registry-info":{"title":"Rekistrin tiedot"}},"header":{"documentation":"Dokumentaatio","registry-info":"Rekisterin tiedot","registry-info-link":"Hei ","registry-no-conf":"Hae paketteja","greetings":"Hei "},"search":{"packages":"Hae paketteja"},"autoComplete":{"loading":"Ladataan...","no-results-found":"Ei hakutuloksia","clear":"Tyhjennä","expand":"Avaa","collapse":"Sulje"},"tab":{"uplinks":"Uplinkit","versions":"Versiot","dependencies":"Vaatimukset","readme":"Readme"},"uplinks":{"title":"Uplinkit","no-items":"{{name}}:llä ei ole uplinkkejä"},"versions":{"current-tags":"Tagit","version-history":"Versiohistoria","not-available":"Ei saatavilla"},"package":{"published-on":"Julkaistu {{time}} •","version":"v{{version}}","visit-home-page":"Vieraile kotisivulla","homepage":"Mene etusivulle","open-an-issue":"Avaa virheilmoitus","bugs":"Bugit","download":"Lataa {{what}}","the-tar-file":"tar-tiedosto","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}}:lla ei ole vaatimuksia.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Käyttäjänimi","password":"Salasana"},"form-placeholder":{"username":"Sinun käyttäjänimi","password":"Sinun vahva salasana"},"form-validation":{"required-field":"Tämä kenttä on pakollinen","required-min-length":"Tämän kentän täytyy olla vähintään {{length}} merkkiä pitkä","unable-to-sign-in":"Sisäänkirjautuminen ei ole mahdollista","username-or-password-cant-be-empty":"Käyttäjänimi tai salasana ei voi olla tyhjä!"},"help":{"title":"Ei pakettia julkaistu.","sub-title":"Julkaistaksesi paketin:","first-step":"1. Kirjaudu","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Julkaise","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Uudelleenlataa tämä sivu"},"sidebar":{"detail":{"latest-version":"Viimeisin v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Asenna käyttäen yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Asenna käyttäen npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Asenna käyttäen pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Säilö"},"author":{"title":"Luoja"},"distribution":{"title":"Latest Distribution","license":"Lisenssi","size":"Koko","file-count":"tiedostomäärä"},"maintainers":{"title":"Ylläpitäjät"},"contributors":{"title":"Avustajat"},"engines":{"npm-version":"NPM-versio","node-js":"NODE JS"}},"footer":{"powered-by":"Moottorina toimii ","made-with-love-on":"Tehty <0>♥</0> "},"button":{"close":"Sulje","cancel":"Peru","login":"Kirjaudu","logout":"Kirjaudu ulos","go-to-the-home-page":"Mene etusivulle","learn-more":"Lue lisää","fund-this-package":"<0>Tue</0> tätä pakettia"},"error":{"404":{"page-not-found":"404 - Sivua ei löytynyt","sorry-we-could-not-find-it":"Pahoittelut, emme löytäneet sitä"},"unspecific":"Jotain meni pieleen.","app-context-not-correct-used":"App contextia ei käytetä oikein","theme-context-not-correct-used":"Theme contextia ei käytetä oikein","package-meta-is-required-at-detail-context":"DetailContext vaatii packageMetan"},"lng":{"english":"Englanti","czech":"Tsekki","japanese":"Japani","portuguese":"Portugali","spanish":"Espanja","german":"Saksa","chinese":"Kiina","chineseTraditional":"Kiina (perinteinen)","french":"Ranska","russian":"Venäjä","turkish":"Turkki","ukraine":"Ukraina","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/fil-PH/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/fr-FR/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/gl-ES/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/hi-IN/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/it-IT/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplink","versions":"Versioni","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplink","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installazione","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Collaboratori"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Chiudi","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"Inglese","czech":"Czech","japanese":"Giapponese","portuguese":"Portuguese","spanish":"Spagnolo","german":"Tedesco","chinese":"Cinese","chineseTraditional":"Chinese (Traditional)","french":"Francese","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/ja-JP/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/ko-KR/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/pl-PL/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Instalacja","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/pt-BR/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Instalação","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"Inglês","czech":"Czech","japanese":"Japonês","portuguese":"Portuguese","spanish":"Espanhol","german":"Alemão","chinese":"Chinês","chineseTraditional":"Chinese (Traditional)","french":"Francês","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/pt-PT/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/ro-RO/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/ru-RU/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Аплинки","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Аплинки","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Установка","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"Английский","czech":"Czech","japanese":"Японский","portuguese":"Portuguese","spanish":"Испанский","german":"Немецкий","chinese":"Китайский","chineseTraditional":"Chinese (Traditional)","french":"Французский","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/si-LK/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/sr-CS/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Instalacija","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/sr-SP/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/tg-TJ/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/vi-VN/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Installation","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/yo-NG/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"Uplinks","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"Uplinks","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"Ifi sori ẹrọ","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"Gẹẹsi","czech":"Czech","japanese":"Japanisi","portuguese":"Portuguese","spanish":"Sipanisi","german":"Jamani","chinese":"Ṣainisi","chineseTraditional":"Chinese (Traditional)","french":"Faranse","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/zh-CN/ui.json': (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"copy-to-clipboard":"Copy to clipboard","author-anonymous":"Anonymous","author-unknown":"Unknown","action-bar-action":{"visit-home-page":"Visit homepage","open-an-issue":"Open an issue","download-tarball":"Download tarball"},"dialog":{"registry-info":{"title":"Registry Info"}},"header":{"documentation":"Documentation","registry-info":"Registry Information","registry-info-link":"Learn more","registry-no-conf":"No configurations available","greetings":"Hi "},"search":{"packages":"Search Packages"},"autoComplete":{"loading":"Loading...","no-results-found":"No results found","clear":"Clear","expand":"Expand","collapse":"Collapse"},"tab":{"uplinks":"上行链路","versions":"Versions","dependencies":"Dependencies","readme":"Readme"},"uplinks":{"title":"上行链路","no-items":"{{name}} has no uplinks."},"versions":{"current-tags":"Current Tags","version-history":"Version history","not-available":"Not available"},"package":{"published-on":"Published on {{time}} •","version":"v{{version}}","visit-home-page":"Visit homepage","homepage":"Homepage","open-an-issue":"Open an issue","bugs":"Bugs","download":"Download {{what}}","the-tar-file":"the tar file","tarball":"Tarball"},"dependencies":{"has-no-dependencies":"{{package}} has no dependencies.","dependency-block":"{{package}}@{{version}}"},"form":{"username":"Username","password":"Password"},"form-placeholder":{"username":"Your username","password":"Your strong password"},"form-validation":{"required-field":"This field is required","required-min-length":"This field required the min length of {{length}}","unable-to-sign-in":"Unable to sign in","username-or-password-cant-be-empty":"Username or password can\'t be empty!"},"help":{"title":"No Package Published Yet.","sub-title":"To publish your first package just:","first-step":"1. Login","first-step-command-line":"npm adduser --registry {{registryUrl}}","second-step":"2. Publish","second-step-command-line":"npm publish --registry {{registryUrl}}","third-step":"3. Refresh this page"},"sidebar":{"detail":{"latest-version":"Latest v{{version}}","version":"v{{version}}"},"installation":{"title":"安装","install-using-yarn":"Install using yarn","install-using-yarn-command":"yarn add {{packageName}}","install-using-npm":"Install using npm","install-using-npm-command":"npm install {{packageName}}","install-using-pnpm":"Install using pnpm","install-using-pnpm-command":"pnpm install {{packageName}}"},"repository":{"title":"Repository"},"author":{"title":"Author"},"distribution":{"title":"Latest Distribution","license":"License","size":"Size","file-count":"file count"},"maintainers":{"title":"Maintainers"},"contributors":{"title":"Contributors"},"engines":{"npm-version":"NPM Version","node-js":"NODE JS"}},"footer":{"powered-by":"Powered by","made-with-love-on":"Made with <0>♥</0> on"},"button":{"close":"Close","cancel":"Cancel","login":"Login","logout":"Logout","go-to-the-home-page":"Go to the home page","learn-more":"Learn More","fund-this-package":"<0>Fund</0> this package"},"error":{"404":{"page-not-found":"404 - Page not found","sorry-we-could-not-find-it":"Sorry, we couldn\'t find it..."},"unspecific":"Something went wrong.","app-context-not-correct-used":"The app context was not used correctly","theme-context-not-correct-used":"The theme context was not used correctly","package-meta-is-required-at-detail-context":"packageMeta is required at DetailContext"},"lng":{"english":"English","czech":"Czech","japanese":"Japanese","portuguese":"Portuguese","spanish":"Spanish","german":"German","chinese":"Chinese","chineseTraditional":"Chinese (Traditional)","french":"French","russian":"Russian","turkish":"Turkish","ukraine":"Ukraine","khmer":"Khmer"},"flag":{"austria":"Austria","brazil":"Brazil","spain":"Spain","nicaragua":"Nicaragua","india":"India","china":"China","germany":"Germany","taiwan":"Taiwan"}}'
      );
    },
    './src/i18n/download_translations/zh-TW/ui.json': (e) => {
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
