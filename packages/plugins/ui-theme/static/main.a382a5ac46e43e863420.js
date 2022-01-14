/*! For license information please see main.a382a5ac46e43e863420.js.LICENSE.txt */
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['main'],
  {
    './src/App/App.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        s = o('./src/components/Box.tsx'),
        i = o('./src/components/Loading/index.ts'),
        c = o('./src/design-tokens/StyleBaseline.tsx'),
        u = o('./src/design-tokens/load-dayjs-locale.ts'),
        p = (o('./src/i18n/config.ts'), o('./src/App/AppRoute.tsx')),
        m = o('./src/App/Footer/index.ts'),
        f = o('./src/App/Header/index.ts');
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
        b = (0, n.default)(s.default, { target: 'e1qqswew1', label: 'StyledBox' })(function (e) {
          var t = e.theme;
          return { backgroundColor: null == t ? void 0 : t.palette.background.default };
        }, ''),
        v = (0, n.default)(s.default, { target: 'e1qqswew0', label: 'StyledBoxContent' })(function (
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
        h = function () {
          return (
            (0, l.useEffect)(function () {
              (0, u.default)();
            }, []),
            l.createElement(
              l.Suspense,
              { fallback: l.createElement(i.default, null) },
              l.createElement(c.default, null),
              l.createElement(
                b,
                { display: 'flex', flexDirection: 'column', height: '100%' },
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    d.Router,
                    { history: p.history },
                    l.createElement(f.default, null),
                    l.createElement(v, { flexGrow: 1 }, l.createElement(p.default, null))
                  ),
                  l.createElement(m.default, null)
                )
              )
            )
          );
        };
      g(h, 'useEffect{}');
      var y = h;
      const L = y;
      var j, H;
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          b,
          'StyledBox',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        j.register(
          v,
          'StyledBoxContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        j.register(
          h,
          'App',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        ),
        j.register(
          y,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/App.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/App/AppRoute.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { history: () => g, default: () => h });
      var a,
        r,
        n,
        l = o('../../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js'),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        i = o('./src/App/utils/loadable.tsx');
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c,
        u = (0, i.default)(function () {
          return o.e('NotFound').then(o.bind(o, './src/components/NotFound/index.ts'));
        }),
        p = (0, i.default)(function () {
          return o.e('Provider').then(o.bind(o, './src/pages/Version/VersionContextProvider.tsx'));
        }),
        m = (0, i.default)(function () {
          return Promise.all([
            o.e(
              'vendors-node_modules_pnpm_mui_icons-material_5_0_5_667c40b637419e5f7ad8e738f1f34677_node_modu-dac7dc'
            ),
            o.e(
              'vendors-node_modules_pnpm_mui_icons-material_5_0_5_667c40b637419e5f7ad8e738f1f34677_node_modu-cdb6dc'
            ),
            o.e('Version'),
          ]).then(o.bind(o, './src/pages/Version/index.ts'));
        }),
        f = (0, i.default)(function () {
          return Promise.all([
            o.e(
              'vendors-node_modules_pnpm_mui_icons-material_5_0_5_667c40b637419e5f7ad8e738f1f34677_node_modu-dac7dc'
            ),
            o.e(
              'vendors-node_modules_pnpm_mui_material_5_0_6_f8d419d8b6c9429771d4cf60ccbff692_node_modules_mu-366585'
            ),
            o.e('Home'),
          ]).then(o.bind(o, './src/pages/home/index.ts'));
        });
      !(function (e) {
        (e.ROOT = '/'),
          (e.SCOPE_PACKAGE = '/-/web/detail/@:scope/:package'),
          (e.SCOPE_PACKAGE_VERSION = '/-/web/detail/@:scope/:package/v/:version'),
          (e.PACKAGE = '/-/web/detail/:package'),
          (e.PACKAGE_VERSION = '/-/web/detail/:package/v/:version');
      })(c || (c = {}));
      var g = (0, l.createBrowserHistory)({
          basename:
            null === (a = window) ||
            void 0 === a ||
            null === (r = a.__VERDACCIO_BASENAME_UI_OPTIONS) ||
            void 0 === r
              ? void 0
              : r.url_prefix,
        }),
        b = function () {
          return d.createElement(
            s.Router,
            { history: g },
            d.createElement(
              s.Switch,
              null,
              d.createElement(s.Route, { exact: !0, path: c.ROOT }, d.createElement(f, null)),
              d.createElement(
                s.Route,
                { exact: !0, path: c.PACKAGE },
                d.createElement(p, null, d.createElement(m, null))
              ),
              d.createElement(
                s.Route,
                { exact: !0, path: c.PACKAGE_VERSION },
                d.createElement(p, null, d.createElement(m, null))
              ),
              d.createElement(
                s.Route,
                { exact: !0, path: c.SCOPE_PACKAGE_VERSION },
                d.createElement(p, null, d.createElement(m, null))
              ),
              d.createElement(
                s.Route,
                { exact: !0, path: c.SCOPE_PACKAGE },
                d.createElement(p, null, d.createElement(m, null))
              ),
              d.createElement(s.Route, null, d.createElement(u, null))
            )
          );
        },
        v = b;
      const h = v;
      var y, L;
      (y = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (y.register(
          u,
          'NotFound',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        y.register(
          p,
          'VersionContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        y.register(
          m,
          'VersionPage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        y.register(
          f,
          'HomePage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        y.register(
          g,
          'history',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        y.register(
          b,
          'AppRoute',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        ),
        y.register(
          v,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/AppRoute.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
    },
    './src/App/Footer/Footer.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => h });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/country-flag-icons@1.4.16/node_modules/country-flag-icons/react/3x2/index.js'
        ),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/Trans.js'
        ),
        c = o('./src/components/Icons/index.ts'),
        u = o('./src/components/Logo/index.ts'),
        p = o('./src/providers/config/index.ts'),
        m = o('./src/utils/windows.ts'),
        f = o('./src/App/Footer/styles.ts');
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
        b = function () {
          var e = (0, s.useTranslation)().t,
            t = (0, p.useConfig)().configOptions;
          return d.createElement(
            f.Wrapper,
            null,
            d.createElement(
              f.Inner,
              null,
              d.createElement(
                f.Left,
                null,
                d.createElement(i.Trans, {
                  components: [d.createElement(f.Love, null)],
                  i18nKey: 'footer.made-with-love-on',
                }),
                d.createElement(
                  G,
                  null,
                  d.createElement(j, null),
                  d.createElement(
                    H,
                    null,
                    d.createElement(_, null, d.createElement(l.default.ES, null)),
                    d.createElement(_, null, d.createElement(l.default.NI, null)),
                    d.createElement(_, null, d.createElement(l.default.IN, null)),
                    d.createElement(_, null, d.createElement(l.default.BR, null)),
                    d.createElement(_, null, d.createElement(l.default.CN, null)),
                    d.createElement(_, null, d.createElement(l.default.AU, null)),
                    d.createElement(_, null, d.createElement(l.default.DE, null)),
                    d.createElement(_, null, d.createElement(l.default.TW, null))
                  )
                )
              ),
              d.createElement(
                f.Right,
                null,
                (null == t ? void 0 : t.version) &&
                  d.createElement(
                    d.Fragment,
                    null,
                    e('footer.powered-by'),
                    d.createElement(u.default, {
                      onClick: m.goToVerdaccioWebsite,
                      size: 'x-small',
                    }),
                    '/ '.concat(t.version)
                  )
              )
            )
          );
        };
      g(b, 'useTranslation{{ t }}\nuseConfig{{ configOptions }}', function () {
        return [s.useTranslation, p.useConfig];
      });
      var v = b;
      const h = v;
      var y,
        L,
        j = (0, n.default)(c.Earth, { target: 'ehzyum63', label: 'StyledEarth' })(function (e) {
          return { margin: e.theme.spacing(0, 1) };
        }, ''),
        H = (0, n.default)('span', { target: 'ehzyum62', label: 'Flags' })(function (e) {
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
        _ = (0, n.default)('div', { target: 'ehzyum61', label: 'Icon' })({
          name: '1g2l0a9',
          styles: 'width:10px',
        }),
        G = (0, n.default)('span', { target: 'ehzyum60', label: 'ToolTip' })(
          {
            position: 'relative',
            height: '18px',
            ':hover': (0, r.default)({}, ''.concat(H), { visibility: 'visible' }),
          },
          ''
        );
      (y = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (y.register(
          b,
          'Footer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        y.register(
          j,
          'StyledEarth',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        y.register(
          H,
          'Flags',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        y.register(
          _,
          'Icon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        y.register(
          G,
          'ToolTip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        ),
        y.register(
          v,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/Footer.tsx'
        )),
        (L =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          L(e);
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
        o.d(t, { Wrapper: () => s, Inner: () => i, Left: () => c, Right: () => u, Love: () => p });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        d,
        s = (0, n.default)('div', { target: 'e1les9sd4', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return {
            background:
              'light' === (null == t ? void 0 : t.palette.mode)
                ? null == t
                  ? void 0
                  : t.palette.snow
                : null == t
                ? void 0
                : t.palette.cyanBlue,
            borderTop: '1px solid '.concat(null == t ? void 0 : t.palette.greyGainsboro),
            color:
              'dark' === (null == t ? void 0 : t.palette.mode)
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
        i = (0, n.default)('div', { target: 'e1les9sd3', label: 'Inner' })(function (e) {
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
        c = (0, n.default)('div', { target: 'e1les9sd2', label: 'Left' })(function (e) {
          var t = e.theme;
          return (0,
          r.default)({ alignItems: 'center', display: 'none' }, '@media (min-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'flex' });
        }, ''),
        u = (0, n.default)(c, { target: 'e1les9sd1', label: 'Right' })({
          name: 'zjik7',
          styles: 'display:flex',
        }),
        p = (0, n.default)('span', { target: 'e1les9sd0', label: 'Love' })(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.love, padding: '0 5px' };
        }, '');
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          s,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        l.register(
          i,
          'Inner',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        l.register(
          c,
          'Left',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        l.register(
          u,
          'Right',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        ),
        l.register(
          p,
          'Love',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Footer/styles.ts'
        )),
        (d =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          d(e);
    },
    './src/App/Header/Header.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => y });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        s = o('./src/components/Button.tsx'),
        i = o('./src/providers/config/index.ts'),
        c = o('./src/App/Header/HeaderInfoDialog.tsx'),
        u = o('./src/App/Header/HeaderLeft.tsx'),
        p = o('./src/App/Header/HeaderRight.tsx'),
        m = o('./src/App/Header/LoginDialog/index.ts'),
        f = o('./src/App/Header/Search/index.ts'),
        g = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var b =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        v = function (e) {
          var t = e.withoutSearch,
            o = (0, l.useTranslation)().t,
            a = (0, n.useState)(!1),
            b = (0, r.default)(a, 2),
            v = b[0],
            h = b[1],
            y = (0, n.useState)(!1),
            L = (0, r.default)(y, 2),
            j = L[0],
            H = L[1],
            _ = (0, n.useState)(!1),
            G = (0, r.default)(_, 2),
            x = G[0],
            k = G[1],
            I = (0, d.useSelector)(function (e) {
              return e.login;
            }),
            C = (0, d.useSelector)(function (e) {
              return e.configuration.config;
            }),
            A = (0, i.useConfig)().configOptions,
            E = (0, d.useDispatch)();
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              g.NavBar,
              { 'data-testid': 'header', position: 'static' },
              n.createElement(
                g.InnerNavBar,
                null,
                n.createElement(u.default, null),
                n.createElement(p.default, {
                  hasLogin: null == A ? void 0 : A.login,
                  onLogout: function () {
                    E.login.logOutUser();
                  },
                  onOpenRegistryInfoDialog: function () {
                    return h(!0);
                  },
                  onToggleLogin: function () {
                    return k(!x);
                  },
                  onToggleMobileNav: function () {
                    return H(!j);
                  },
                  username: null == I ? void 0 : I.username,
                  withoutSearch: t,
                })
              ),
              n.createElement(c.default, {
                isOpen: v,
                onCloseDialog: function () {
                  return h(!1);
                },
                registryUrl: A.base,
                scope: C.scope,
              })
            ),
            j &&
              !t &&
              n.createElement(
                g.MobileNavBar,
                null,
                n.createElement(g.InnerMobileNavBar, null, n.createElement(f.default, null)),
                n.createElement(
                  s.default,
                  {
                    color: 'inherit',
                    onClick: function () {
                      return H(!1);
                    },
                  },
                  o('button.cancel')
                )
              ),
            !I.username &&
              n.createElement(m.default, {
                onClose: function () {
                  return k(!1);
                },
                open: x,
              })
          );
        };
      b(
        v,
        'useTranslation{{ t }}\nuseState{[isInfoDialogOpen, setOpenInfoDialog](false)}\nuseState{[showMobileNavBar, setShowMobileNavBar](false)}\nuseState{[showLoginModal, setShowLoginModal](false)}\nuseSelector{loginStore}\nuseSelector{configStore}\nuseConfig{{ configOptions }}\nuseDispatch{dispatch}',
        function () {
          return [l.useTranslation, d.useSelector, d.useSelector, i.useConfig, d.useDispatch];
        }
      );
      var h = v;
      const y = h;
      var L, j;
      (L = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (L.register(
          v,
          'Header',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Header.tsx'
        ),
        L.register(
          h,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Header.tsx'
        )),
        (j =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          j(e);
    },
    './src/App/Header/HeaderGreetings.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = o('./src/components/Label/index.ts'),
        d = o('./src/App/Header/styles.ts');
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
        i = function (e) {
          var t = e.username,
            o = (0, n.useTranslation)().t;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(d.Greetings, null, o('header.greetings')),
            r.createElement(l.default, {
              'data-testid': 'greetings-label',
              text: t,
              weight: 'bold',
            })
          );
        };
      s(i, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var c = i;
      const u = c;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          i,
          'HeaderGreetings',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderGreetings.tsx'
        ),
        p.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderGreetings.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/App/Header/HeaderInfoDialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/App/Header/RegistryInfoContent/index.ts'),
        l = o('./src/App/Header/RegistryInfoDialog/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = function (e) {
          var t = e.onCloseDialog,
            o = e.isOpen,
            a = e.registryUrl,
            d = e.scope;
          return r.createElement(
            l.default,
            { onClose: t, open: o },
            r.createElement(n.default, { registryUrl: a, scope: d })
          );
        },
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
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
      o.r(t), o.d(t, { default: () => m });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        d = o('./src/components/Logo/index.ts'),
        s = o('./src/App/Header/Search/index.ts'),
        i = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c = (0, r.default)(l.Link, { target: 'emyn0tj0', label: 'StyledLink' })({
          name: '19y5u9z',
          styles: 'margin-right:1em',
        }),
        u = function (e) {
          var t = e.withoutSearch,
            o = void 0 !== t && t;
          return n.createElement(
            i.LeftSide,
            null,
            n.createElement(c, { to: '/' }, n.createElement(d.default, null)),
            !o && n.createElement(i.SearchWrapper, null, n.createElement(s.default, null))
          );
        },
        p = u;
      const m = p;
      var f, g;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          c,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        ),
        f.register(
          u,
          'HeaderLeft',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        ),
        f.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderLeft.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/App/Header/HeaderMenu.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => f });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/AccountCircle.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o('./src/components/IconButton.tsx'),
        s = o('./src/components/Menu.tsx'),
        i = o('./src/components/MenuItem.tsx'),
        c = o('./src/App/Header/HeaderGreetings.tsx');
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
        p = function (e) {
          var t = e.onLogout,
            o = e.username,
            a = e.isMenuOpen,
            u = void 0 !== a && a,
            p = e.anchorEl,
            m = e.onLoggedInMenu,
            f = e.onLoggedInMenuClose,
            g = (0, l.useTranslation)().t;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              d.default,
              {
                color: 'inherit',
                'data-testid': 'logInDialogIcon',
                id: 'header--button-account',
                onClick: m,
                size: 'large',
              },
              n.createElement(r.default, null)
            ),
            n.createElement(
              s.default,
              {
                anchorEl: p,
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                onClose: f,
                open: u,
                transformOrigin: { vertical: 'top', horizontal: 'right' },
              },
              n.createElement(i.default, null, n.createElement(c.default, { username: o })),
              n.createElement(
                i.default,
                {
                  button: !0,
                  'data-testid': 'logOutDialogIcon',
                  id: 'logOutDialogIcon',
                  onClick: t,
                },
                g('button.logout')
              )
            )
          );
        };
      u(p, 'useTranslation{{ t }}', function () {
        return [l.useTranslation];
      });
      var m = p;
      const f = m;
      var g, b;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          p,
          'HeaderMenu',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderMenu.tsx'
        ),
        g.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderMenu.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Header/HeaderRight.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => b });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        d = o('./src/components/Button.tsx'),
        s = o('./src/design-tokens/ThemeContext.ts'),
        i = o('./src/App/Header/HeaderMenu.tsx'),
        c = o('./src/App/Header/HeaderToolTip.tsx'),
        u = o('./src/App/Header/LanguageSwitch.tsx'),
        p = o('./src/App/Header/styles.ts');
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
        f = function (e) {
          var t = e.withoutSearch,
            o = void 0 !== t && t,
            a = e.username,
            m = e.onToggleLogin,
            f = e.hasLogin,
            g = e.onLogout,
            b = e.onToggleMobileNav,
            v = e.onOpenRegistryInfoDialog,
            h = (0, n.useContext)(s.default),
            y = (0, n.useState)(null),
            L = (0, r.default)(y, 2),
            j = L[0],
            H = L[1],
            _ = (0, n.useState)(!1),
            G = (0, r.default)(_, 2),
            x = G[0],
            k = G[1],
            I = !1 === f,
            C = (0, l.useTranslation)().t;
          if (!h) throw Error(C('theme-context-not-correct-used'));
          (0, n.useEffect)(
            function () {
              k(Boolean(j));
            },
            [j]
          );
          return n.createElement(
            p.RightSide,
            { 'data-testid': 'header-right' },
            !o &&
              n.createElement(c.default, {
                onClick: b,
                title: C('search.packages'),
                tooltipIconType: 'search',
              }),
            n.createElement(u.default, null),
            n.createElement(c.default, {
              title: C('header.documentation'),
              tooltipIconType: 'help',
            }),
            n.createElement(c.default, {
              onClick: v,
              title: C('header.registry-info'),
              tooltipIconType: 'info',
            }),
            n.createElement(c.default, {
              onClick: function () {
                setTimeout(function () {
                  h.setIsDarkMode(!h.isDarkMode);
                }, 300);
              },
              title: C('header.documentation'),
              tooltipIconType: h.isDarkMode ? 'dark-mode' : 'light-mode',
            }),
            !I &&
              n.createElement(
                n.Fragment,
                null,
                a
                  ? n.createElement(i.default, {
                      anchorEl: j,
                      isMenuOpen: x,
                      onLoggedInMenu: function (e) {
                        H(e.currentTarget);
                      },
                      onLoggedInMenuClose: function () {
                        H(null);
                      },
                      onLogout: g,
                      username: a,
                    })
                  : n.createElement(
                      d.default,
                      {
                        color: 'inherit',
                        'data-testid': 'header--button-login',
                        onClick: function () {
                          H(null), m();
                        },
                      },
                      C('button.login')
                    )
              )
          );
        };
      m(
        f,
        'useContext{themeContext}\nuseState{[anchorEl, setAnchorEl](null)}\nuseState{[isMenuOpen, setIsMenuOpen](false)}\nuseTranslation{{ t }}\nuseEffect{}',
        function () {
          return [l.useTranslation];
        }
      );
      var g = f;
      const b = g;
      var v, h;
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          f,
          'HeaderRight',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderRight.tsx'
        ),
        v.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderRight.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/App/Header/HeaderToolTip.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/Tooltip.tsx'),
        l = o('./src/App/Header/HeaderToolTipIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = function (e) {
          var t = e.tooltipIconType,
            o = e.title,
            a = e.onClick;
          return r.createElement(
            n.default,
            { disableFocusListener: !0, title: o },
            r.createElement(l.default, { onClick: a, tooltipIconType: t })
          );
        },
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
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
      o.r(t), o.d(t, { default: () => f });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Help.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Info.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/NightsStay.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Search.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/WbSunny.js'
        ),
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        c = o('./src/components/IconButton.tsx'),
        u = o('./src/App/Header/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p = (0, i.forwardRef)(function (e, t) {
          var o = e.tooltipIconType,
            a = e.onClick;
          switch (o) {
            case 'help':
              return i.createElement(
                u.StyledLink,
                {
                  'data-testid': 'header--tooltip-documentation',
                  external: !0,
                  to: 'https://verdaccio.org/docs/en/installation',
                },
                i.createElement(
                  c.default,
                  { color: 'inherit', size: 'large' },
                  i.createElement(r.default, null)
                )
              );
            case 'info':
              return i.createElement(
                c.default,
                {
                  color: 'inherit',
                  'data-testid': 'header--tooltip-info',
                  id: 'header--button-registryInfo',
                  onClick: a,
                  ref: t,
                  size: 'large',
                },
                i.createElement(n.default, null)
              );
            case 'search':
              return i.createElement(
                u.IconSearchButton,
                { color: 'inherit', onClick: a },
                i.createElement(d.default, null)
              );
            case 'dark-mode':
              return i.createElement(
                c.default,
                { color: 'inherit', onClick: a, ref: t, size: 'large' },
                i.createElement(l.default, null)
              );
            case 'light-mode':
              return i.createElement(
                c.default,
                { color: 'inherit', onClick: a, ref: t, size: 'large' },
                i.createElement(s.default, null)
              );
            default:
              return null;
          }
        }),
        m = p;
      const f = m;
      var g, b;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          p,
          'HeaderToolTipIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTipIcon.tsx'
        ),
        g.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/HeaderToolTipIcon.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Header/LanguageSwitch.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Language.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/@mui+styles@5.0.2_bb8e79a4a12a744c3dc48cdef194d579/node_modules/@mui/styles/withStyles/withStyles.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        c = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        p = o('./src/components/AutoComplete/AutoCompleteV2.tsx'),
        m = o('./src/components/MenuItem.tsx'),
        f = o('./src/design-tokens/ThemeContext.ts'),
        g = o('./src/i18n/enabledLanguages.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var b =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        v = g.listLanguages.reduce(function (e, t) {
          return (e[t.lng] = { translation: t.menuKey, icon: t.icon }), e;
        }, {}),
        h = function () {
          var e,
            t = (0, c.useContext)(f.default),
            o = (0, c.useState)(
              Object.keys(
                (null === (e = i.default.options) || void 0 === e ? void 0 : e.resources) || {}
              )
            ),
            a = (0, n.default)(o, 1)[0],
            r = (0, u.useTranslation)().t;
          if (!t) throw Error(r('theme-context-not-correct-used'));
          var l = t.language,
            d = (0, c.useCallback)(
              function (e) {
                var o = e.language;
                t.setLanguage(o);
              },
              [t]
            ),
            s = (0, c.useCallback)(
              function (e) {
                var t = v[e] || v['en-US'];
                return { icon: c.createElement(t.icon, null), translation: r(t.translation) };
              },
              [r]
            ),
            m = (0, c.useMemo)(
              function () {
                return a.map(function (e) {
                  var t = s(e);
                  return { language: e, icon: t.icon, translation: t.translation };
                });
              },
              [a, s]
            ),
            g = (0, c.useCallback)(function (e) {
              var t = e.icon,
                o = e.translation;
              return c.createElement(x, { component: 'div' }, t, o);
            }, []),
            b = (0, c.useCallback)(function (e) {
              return e.translation;
            }, []);
          return c.createElement(
            G,
            null,
            c.createElement(p.AutoComplete, {
              defaultValue: s(l).translation,
              getOptionLabel: b,
              hasClearIcon: !0,
              inputStartAdornment: c.createElement(_, null),
              onClick: d,
              options: m,
              renderOption: g,
              variant: 'outlined',
            })
          );
        };
      b(
        h,
        'useContext{themeContext}\nuseState{[languages](Object.keys(i18next.options?.resources || {}) as Language[])}\nuseTranslation{{ t }}\nuseCallback{switchLanguage}\nuseCallback{getCurrentLngDetails}\nuseMemo{options}\nuseCallback{option}\nuseCallback{optionLabel}',
        function () {
          return [u.useTranslation];
        }
      );
      var y = h;
      const L = y;
      var j,
        H,
        _ = (0, l.default)(d.default, { target: 'e1qrps3i1', label: 'StyledLanguageIcon' })(
          function (e) {
            var t = e.theme;
            return { color: null == t ? void 0 : t.palette.white };
          },
          ''
        ),
        G = (0, l.default)('div', { target: 'e1qrps3i0', label: 'Wrapper' })(function (e) {
          var t = e.theme;
          return (0,
          r.default)({ width: 220, display: 'none' }, '@media screen and (min-width: '.concat(null == t ? void 0 : t.breakPoints.medium, 'px)'), { display: 'inline-block' });
        }, ''),
        x = (0, s.default)(function (e) {
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
        })(m.default);
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          v,
          'listConverted',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        j.register(
          h,
          'LanguageSwitch',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        j.register(
          _,
          'StyledLanguageIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        j.register(
          G,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        j.register(
          x,
          'StyledMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        ),
        j.register(
          y,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LanguageSwitch.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/App/Header/LoginDialog/LoginDialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = o.n(n),
        d = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        s = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        i = o.n(s),
        c = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        p = o('./src/components/Dialog.tsx'),
        m = o('./src/components/DialogContent.tsx'),
        f = o('./src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'),
        g = o('./src/App/Header/LoginDialog/LoginDialogForm.tsx'),
        b = o('./src/App/Header/LoginDialog/LoginDialogHeader.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var v =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        h = function (e) {
          var t = e.onClose,
            o = e.open,
            a = void 0 !== o && o,
            n = (0, u.useSelector)(function (e) {
              return e.login;
            }),
            s = (0, u.useDispatch)(),
            v = (0, c.useCallback)(
              (function () {
                var e = (0, r.default)(
                  l().mark(function e(t, o) {
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!i()(t) && !i()(o)) {
                              e.next = 3;
                              break;
                            }
                            return (
                              s.login.addError({
                                type: 'error',
                                description: d.default.t(
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
                                description: d.default.t('form-validation.unable-to-sign-in'),
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
            h = (0, c.useCallback)(
              (function () {
                var e = (0, r.default)(
                  l().mark(function e(t) {
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v(t.username, t.password);
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
              [v]
            );
          return (
            (0, c.useEffect)(
              function () {
                n.token && void 0 === n.error && t();
              },
              [n, t]
            ),
            c.createElement(
              p.default,
              {
                'data-testid': 'login--dialog',
                fullWidth: !0,
                id: 'login--dialog',
                maxWidth: 'sm',
                onClose: t,
                open: a,
              },
              c.createElement(f.default, { onClose: t }),
              c.createElement(
                m.default,
                { 'data-testid': 'dialogContentLogin' },
                c.createElement(b.default, null),
                c.createElement(g.default, { error: n.error, onSubmit: h })
              )
            )
          );
        };
      v(
        h,
        'useSelector{loginStore}\nuseDispatch{dispatch}\nuseCallback{makeLogin}\nuseCallback{handleDoLogin}\nuseEffect{}',
        function () {
          return [u.useSelector, u.useDispatch];
        }
      );
      var y = h;
      const L = y;
      var j, H;
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          h,
          'LoginDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialog.tsx'
        ),
        j.register(
          y,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialog.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/App/Header/LoginDialog/LoginDialogCloseButton.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => f });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Close.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o('./src/components/DialogTitle.tsx'),
        i = o('./src/components/IconButton.tsx');
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
        u = (0, r.default)(i.default, { target: 'e5e0mp70', label: 'StyledIconButton' })(function (
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
        p = function (e) {
          var t = e.onClose,
            o = (0, d.useTranslation)().t;
          return l.createElement(
            s.default,
            null,
            l.createElement(
              u,
              { 'data-testid': 'close-login-dialog-button', onClick: t },
              l.createElement(n.default, { titleAccess: o('button.close') })
            )
          );
        };
      c(p, 'useTranslation{{ t }}', function () {
        return [d.useTranslation];
      });
      var m = p;
      const f = m;
      var g, b;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          u,
          'StyledIconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        ),
        g.register(
          p,
          'LoginDialogCloseButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        ),
        g.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogCloseButton.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/App/Header/LoginDialog/LoginDialogForm.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => v });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-hook-form@7.15.3_react@17.0.2/node_modules/react-hook-form/dist/index.esm.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Button.tsx'),
        c = o('./src/components/TextField/index.ts'),
        u = o('./src/App/Header/LoginDialog/LoginDialogFormError.tsx');
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
        m = (0, n.default)('form', { target: 'e1bu7q121', label: 'StyledForm' })(function (e) {
          return { marginTop: e.theme.spacing(1) };
        }, ''),
        f = (0, n.default)(i.default, { target: 'e1bu7q120', label: 'StyledButton' })(function (e) {
          return { margin: e.theme.spacing(3, 0, 2) };
        }, ''),
        g = (0, l.memo)(
          p(
            function (e) {
              var t,
                o,
                a = e.onSubmit,
                n = e.error,
                i = (0, s.useTranslation)().t,
                p = (0, d.useForm)({ mode: 'onChange' }),
                g = p.register,
                b = p.handleSubmit,
                v = p.formState,
                h = v.isValid,
                y = v.errors;
              return l.createElement(
                m,
                {
                  noValidate: !0,
                  onSubmit: b(function (e) {
                    a(e);
                  }),
                },
                l.createElement(
                  c.default,
                  (0, r.default)(
                    {
                      autoComplete: 'username',
                      error: !!y.username,
                      fullWidth: !0,
                      helperText: null === (t = y.username) || void 0 === t ? void 0 : t.message,
                      id: 'login--dialog-username',
                    },
                    g('username', {
                      required: { value: !0, message: i('form-validation.required-field') },
                      minLength: {
                        value: 2,
                        message: i('form-validation.required-min-length', { length: 2 }),
                      },
                    }),
                    {
                      label: i('form.username'),
                      margin: 'normal',
                      name: 'username',
                      placeholder: i('form-placeholder.username'),
                      required: !0,
                      variant: 'outlined',
                    }
                  )
                ),
                l.createElement(
                  c.default,
                  (0, r.default)(
                    {
                      autoComplete: 'current-password',
                      error: !!y.password,
                      fullWidth: !0,
                      helperText: null === (o = y.password) || void 0 === o ? void 0 : o.message,
                      id: 'login--dialog-password',
                    },
                    g('password', {
                      required: { value: !0, message: i('form-validation.required-field') },
                      minLength: {
                        value: 2,
                        message: i('form-validation.required-min-length', { length: 2 }),
                      },
                    }),
                    {
                      label: i('form.password'),
                      margin: 'normal',
                      name: 'password',
                      placeholder: i('form-placeholder.password'),
                      required: !0,
                      type: 'password',
                      variant: 'outlined',
                    }
                  )
                ),
                n && l.createElement(u.default, { error: n }),
                l.createElement(
                  f,
                  {
                    color: 'primary',
                    'data-testid': 'login-dialog-form-login-button',
                    disabled: !h,
                    fullWidth: !0,
                    id: 'login--dialog-button-submit',
                    size: 'large',
                    type: 'submit',
                    variant: 'contained',
                  },
                  i('button.login')
                )
              );
            },
            'useTranslation{{ t }}\nuseForm{{\n    register,\n    handleSubmit,\n    formState: { isValid, errors },\n  }}',
            function () {
              return [s.useTranslation, d.useForm];
            }
          )
        ),
        b = g;
      const v = b;
      var h, y;
      (h = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (h.register(
          m,
          'StyledForm',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        h.register(
          f,
          'StyledButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        h.register(
          g,
          'LoginDialogForm',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        ),
        h.register(
          b,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogForm.tsx'
        )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
    },
    './src/App/Header/LoginDialog/LoginDialogFormError.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => m });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Error.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o('./src/components/Box.tsx'),
        s = o('./src/components/SnackbarContent.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, r.default)(s.default, { target: 'e1vc0dug1', label: 'StyledSnackbarContent' })(
          function (e) {
            var t = e.theme;
            return {
              backgroundColor: null == t ? void 0 : t.palette.error.dark,
              color: null == t ? void 0 : t.palette.white,
            };
          },
          ''
        ),
        c = (0, r.default)(n.default, { target: 'e1vc0dug0', label: 'StyledErrorIcon' })(function (
          e
        ) {
          var t = e.theme;
          return { fontSize: 20, opacity: 0.9, marginRight: null == t ? void 0 : t.spacing(1) };
        },
        ''),
        u = (0, l.memo)(function (e) {
          var t = e.error;
          return l.createElement(i, {
            message: l.createElement(
              d.default,
              { alignItems: 'center', display: 'flex' },
              l.createElement(c, null),
              t.description
            ),
          });
        }),
        p = u;
      const m = p;
      var f, g;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          i,
          'StyledSnackbarContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        f.register(
          c,
          'StyledErrorIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        f.register(
          u,
          'LoginDialogFormError',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        ),
        f.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogFormError.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/App/Header/LoginDialog/LoginDialogHeader.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => b });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Close.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/LockOutlined.js'
        ),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = o('./src/components/Avatar.tsx'),
        c = o('./src/components/Box.tsx'),
        u = o('./src/components/Heading.tsx'),
        p = o('./src/components/IconButton.tsx');
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
        f = function (e) {
          var t = e.onClose,
            o = (0, s.useTranslation)().t;
          return d.createElement(
            c.default,
            {
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            },
            t &&
              d.createElement(
                L,
                { 'aria-label': o('button.close'), onClick: t },
                d.createElement(n.default, null)
              ),
            d.createElement(y, null, d.createElement(l.default, null)),
            d.createElement(u.default, null, o('button.login'))
          );
        };
      m(f, 'useTranslation{{ t }}', function () {
        return [s.useTranslation];
      });
      var g = f;
      const b = g;
      var v,
        h,
        y = (0, r.default)(i.default, { target: 'enivurl1', label: 'StyledAvatar' })(function (e) {
          var t = e.theme;
          return {
            margin: null == t ? void 0 : t.spacing(1),
            backgroundColor:
              'light' === (null == t ? void 0 : t.palette.mode)
                ? null == t
                  ? void 0
                  : t.palette.primary.main
                : null == t
                ? void 0
                : t.palette.cyanBlue,
            color: null == t ? void 0 : t.palette.white,
          };
        }, ''),
        L = (0, r.default)(p.default, { target: 'enivurl0', label: 'StyledIconButton' })(function (
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
      (v = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (v.register(
          f,
          'LoginDialogHeader',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        v.register(
          y,
          'StyledAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        v.register(
          L,
          'StyledIconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        ),
        v.register(
          g,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/LoginDialog/LoginDialogHeader.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
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
          AccordionContainer: () => G,
          CommandContainer: () => x,
          LinkContainer: () => k,
          default: () => A,
        });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/ExpandMore.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Accordion/Accordion.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/AccordionDetails/AccordionDetails.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/AccordionSummary/AccordionSummary.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Box/Box.js'
        ),
        c = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Link/Link.js'
        ),
        u = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Typography/Typography.js'
        ),
        p = o(
          '../../../node_modules/.pnpm/@mui+styles@5.0.2_bb8e79a4a12a744c3dc48cdef194d579/node_modules/@mui/styles/makeStyles/makeStyles.js'
        ),
        m = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        f = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        g = o('./src/components/CopyToClipBoard.tsx'),
        b = o('./src/providers/config/index.ts'),
        v = o('./src/utils/cli-utils.ts'),
        h = o('./src/utils/constants.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var y =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        L = function (e, t) {
          return m.createElement(
            i.default,
            { display: 'flex', flexDirection: 'column', p: 1 },
            m.createElement(g.default, {
              text: (0, v.getCLISetConfigRegistry)(''.concat(h.NODE_MANAGER.npm, ' set'), e, t),
            }),
            m.createElement(g.default, {
              text: (0, v.getCLISetRegistry)(''.concat(h.NODE_MANAGER.npm, ' adduser'), t),
            }),
            m.createElement(g.default, { text: (0, v.getCLIChangePassword)(h.NODE_MANAGER.npm, t) })
          );
        },
        j = function (e, t) {
          return m.createElement(
            i.default,
            { display: 'flex', flexDirection: 'column', p: 1 },
            m.createElement(g.default, {
              text: (0, v.getCLISetConfigRegistry)(''.concat(h.NODE_MANAGER.pnpm, ' set'), e, t),
            }),
            m.createElement(g.default, {
              text: (0, v.getCLISetRegistry)(''.concat(h.NODE_MANAGER.pnpm, ' adduser'), t),
            }),
            m.createElement(g.default, {
              text: (0, v.getCLIChangePassword)(h.NODE_MANAGER.pnpm, t),
            })
          );
        },
        H = function (e, t) {
          return m.createElement(
            i.default,
            { display: 'flex', flexDirection: 'column', p: 1 },
            m.createElement(g.default, {
              text: (0, v.getCLISetConfigRegistry)(
                ''.concat(h.NODE_MANAGER.yarn, ' config set'),
                e,
                t
              ),
            })
          );
        },
        _ = (0, p.default)(function (e) {
          return {
            root: { width: '100%' },
            heading: {
              fontSize: e.typography.pxToRem(15),
              fontWeight: e.typography.fontWeightBold,
            },
          };
        }),
        G = (0, r.default)('div', { target: 'eckfk9f2', label: 'AccordionContainer' })({
          name: 'iq3flb',
          styles: 'padding:30px;padding-left:0;padding-right:0',
        }),
        x = (0, r.default)('div', { target: 'eckfk9f1', label: 'CommandContainer' })({
          name: 'pha8e7',
          styles: 'padding:5px',
        }),
        k = (0, r.default)('div', { target: 'eckfk9f0', label: 'LinkContainer' })({
          name: 'o73zj6',
          styles: 'margin:10px;margin-left:0',
        }),
        I = function (e) {
          var t,
            o,
            a,
            r = e.scope,
            i = e.registryUrl,
            p = (0, f.useTranslation)().t,
            g = _(),
            v = (0, b.useConfig)().configOptions,
            h =
              null == v || null === (t = v.pkgManagers) || void 0 === t
                ? void 0
                : t.includes('npm'),
            y =
              null == v || null === (o = v.pkgManagers) || void 0 === o
                ? void 0
                : o.includes('yarn'),
            I =
              null == v || null === (a = v.pkgManagers) || void 0 === a
                ? void 0
                : a.includes('pnpm'),
            C = h | I | y;
          return C && r && i
            ? C
              ? m.createElement(
                  G,
                  null,
                  h &&
                    m.createElement(
                      l.default,
                      null,
                      m.createElement(
                        s.default,
                        {
                          'aria-controls': 'panel1a-content',
                          expandIcon: m.createElement(n.default, null),
                          id: 'panel1a-header',
                        },
                        m.createElement(u.default, { className: g.heading }, 'npm')
                      ),
                      m.createElement(
                        d.default,
                        null,
                        m.createElement(x, { 'data-testid': 'tab-content' }, L(r, i))
                      )
                    ),
                  y &&
                    m.createElement(
                      l.default,
                      null,
                      m.createElement(
                        s.default,
                        {
                          'aria-controls': 'panel2a-content',
                          expandIcon: m.createElement(n.default, null),
                          id: 'panel2a-header',
                        },
                        m.createElement(u.default, { className: g.heading }, 'yarn')
                      ),
                      m.createElement(
                        d.default,
                        null,
                        m.createElement(x, { 'data-testid': 'tab-content' }, H(r, i))
                      )
                    ),
                  I &&
                    m.createElement(
                      l.default,
                      null,
                      m.createElement(
                        s.default,
                        {
                          'aria-controls': 'panel3a-content',
                          expandIcon: m.createElement(n.default, null),
                          id: 'panel3a-header',
                        },
                        'pnpm'
                      ),
                      m.createElement(
                        d.default,
                        null,
                        m.createElement(x, { 'data-testid': 'tab-content' }, j(r, i))
                      )
                    ),
                  m.createElement(
                    k,
                    null,
                    m.createElement(
                      c.default,
                      { href: 'https://verdaccio.org/docs/en/cli-registry', target: '_blank' },
                      m.createElement(u.default, null, p('header.registry-info-link'))
                    )
                  )
                )
              : null
            : m.createElement(G, null, p('header.registry-no-conf'));
        };
      y(I, 'useTranslation{{ t }}\nuseStyles{classes}\nuseConfig{{ configOptions }}', function () {
        return [f.useTranslation, _, b.useConfig];
      });
      var C = I;
      const A = C;
      var E, M;
      (E = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (E.register(
          L,
          'renderNpmTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          j,
          'renderPnpmTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          H,
          'renderYarnTab',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          _,
          'useStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          G,
          'AccordionContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          x,
          'CommandContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          k,
          'LinkContainer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          I,
          'RegistryInfoContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        ),
        E.register(
          C,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx'
        )),
        (M =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          M(e);
    },
    './src/App/Header/RegistryInfoContent/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/RegistryInfoContent/RegistryInfoContent.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => m });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        l = o('./src/components/Button.tsx'),
        d = o('./src/components/Dialog.tsx'),
        s = o('./src/components/DialogActions.tsx'),
        i = o('./src/App/Header/RegistryInfoDialog/styles.ts');
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
            d.default,
            {
              'data-testid': 'registryInfo--dialog',
              id: 'registryInfo--dialog-container',
              onClose: c,
              open: o,
            },
            r.createElement(i.Title, { disableTypography: !0 }, u('dialog.registry-info.title')),
            r.createElement(i.Content, null, a),
            r.createElement(
              s.default,
              null,
              r.createElement(
                l.default,
                { color: 'inherit', id: 'registryInfo--dialog-close', onClick: c },
                u('button.close')
              )
            )
          );
        };
      c(u, 'useTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var p = u;
      const m = p;
      var f, g;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          u,
          'RegistryInfoDialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx'
        ),
        f.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/App/Header/RegistryInfoDialog/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/Header/RegistryInfoDialog/RegistryInfoDialog.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/Header/RegistryInfoDialog/styles.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Title: () => i, Content: () => c });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o('./src/components/DialogContent.tsx'),
        l = o('./src/components/DialogTitle.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = (0, r.default)(l.default, { target: 'e1tueu981', label: 'Title' })(function (e) {
          var t, o, a;
          return {
            backgroundColor:
              null === (t = e.theme) || void 0 === t ? void 0 : t.palette.primary.main,
            color: null === (o = e.theme) || void 0 === o ? void 0 : o.palette.white,
            fontSize: null === (a = e.theme) || void 0 === a ? void 0 : a.fontSize.lg,
          };
        }, ''),
        c = (0, r.default)(n.default, { target: 'e1tueu980', label: 'Content' })(function (e) {
          var t = e.theme;
          return {
            padding: '0 24px',
            backgroundColor: null == t ? void 0 : t.palette.background.default,
          };
        }, '');
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Title',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/styles.ts'
        ),
        d.register(
          c,
          'Content',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/RegistryInfoDialog/styles.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/App/Header/Search/Search.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => g });
      var a,
        r = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js'),
        n = o.n(r),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        c = o('./src/components/AutoComplete/index.ts');
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
        p = { API_DELAY: 300, ABORT_ERROR: 'AbortError' },
        m = function (e) {
          var t = e.history,
            o = (0, d.useTranslation)().t,
            a = (0, s.useSelector)(function (e) {
              return e.search;
            }).suggestions,
            r = (0, s.useSelector)(function (e) {
              var t;
              return null == e || null === (t = e.loading) || void 0 === t
                ? void 0
                : t.models.search;
            }),
            i = (0, s.useDispatch)(),
            u = (0, l.useCallback)(
              function () {
                i.search.clearRequestQueue(), i.search.saveSearch({ suggestions: [] });
              },
              [i]
            ),
            m = (0, l.useCallback)(
              function (e) {
                e.stopPropagation(), u();
              },
              [u]
            ),
            f = (0, l.useCallback)(
              function (e, o, a) {
                switch ((e.stopPropagation(), a)) {
                  case 'selectOption':
                    t.push('/-/web/detail/'.concat(o.name));
                }
              },
              [t]
            ),
            g = (0, l.useCallback)(
              function (e) {
                var t = e.value;
                '' !== (null == t ? void 0 : t.trim()) && i.search.getSuggestions({ value: t });
              },
              [i]
            );
          return l.createElement(c.default, {
            onCleanSuggestions: m,
            onSelectItem: f,
            onSuggestionsFetch: n()(g, p.API_DELAY),
            placeholder: o('search.packages'),
            suggestions: a,
            suggestionsLoading: r,
          });
        };
      u(
        m,
        'useTranslation{{ t }}\nuseSelector{{ suggestions }}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseCallback{cancelAllSearchRequests}\nuseCallback{handleOnBlur}\nuseCallback{handleClickSearch}\nuseCallback{handleFetchPackages}',
        function () {
          return [d.useTranslation, s.useSelector, s.useSelector, s.useDispatch];
        }
      );
      var f = (0, i.withRouter)(m);
      const g = f;
      var b, v;
      (b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (b.register(
          p,
          'CONSTANTS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        ),
        b.register(
          m,
          'Search',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        ),
        b.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/Search/Search.tsx'
        )),
        (v =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          v(e);
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
          InnerNavBar: () => m,
          Greetings: () => f,
          RightSide: () => g,
          LeftSide: () => b,
          MobileNavBar: () => v,
          InnerMobileNavBar: () => h,
          IconSearchButton: () => y,
          SearchWrapper: () => L,
          NavBar: () => j,
          StyledLink: () => H,
        });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@emotion+react@11.5.0_ae0aa6f62664a7cb3b2f54c37ede002d/node_modules/@emotion/react/dist/emotion-react.browser.esm.js'
        ),
        d = o('./src/components/AppBar.tsx'),
        s = o('./src/components/IconButton.tsx'),
        i = o('./src/components/Link.tsx'),
        c = o('./src/components/Toolbar.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var u,
        p,
        m = (0, n.default)(c.default, { target: 'e1onlrbh9', label: 'InnerNavBar' })({
          name: 'ggfo6s',
          styles: 'justify-content:space-between;align-items:center;padding:0 15px',
        }),
        f = (0, n.default)('span', { target: 'e1onlrbh8', label: 'Greetings' })({
          name: '1qmpjbv',
          styles: 'margin:0 5px 0 0',
        }),
        g = (0, n.default)(c.default, { target: 'e1onlrbh7', label: 'RightSide' })({
          name: 'vkbzc7',
          styles: 'display:flex;padding:0',
        }),
        b = (0, n.default)(g, { target: 'e1onlrbh6', label: 'LeftSide' })({
          name: '82a6rk',
          styles: 'flex:1',
        }),
        v = (0, n.default)('div', { target: 'e1onlrbh5', label: 'MobileNavBar' })(function (e) {
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
        h = (0, n.default)('div', { target: 'e1onlrbh4', label: 'InnerMobileNavBar' })(function (
          e
        ) {
          var t, o;
          return {
            borderRadius: '4px',
            backgroundColor: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.greyLight,
            color: null === (o = e.theme) || void 0 === o ? void 0 : o.palette.white,
            width: '100%',
            padding: '0 5px',
            margin: '0 10px 0 0',
          };
        },
        ''),
        y = (0, n.default)(s.default, { target: 'e1onlrbh3', label: 'IconSearchButton' })({
          name: '4zleql',
          styles: 'display:block',
        }),
        L = (0, n.default)('div', { target: 'e1onlrbh2', label: 'SearchWrapper' })({
          name: 'qga9hg',
          styles: 'display:none;width:100%',
        }),
        j = (0, n.default)(d.default, { target: 'e1onlrbh1', label: 'NavBar' })(function (e) {
          var t,
            o = e.theme;
          return (
            (t = {
              backgroundColor:
                'light' === (null == o ? void 0 : o.palette.mode)
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
            (0, r.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.medium, 'px)'),
              (0, l.css)(L, '{display:flex;}', y, '{display:none;}', v, '{display:none;}', '')
            ),
            (0, r.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.large, 'px)'),
              (0, l.css)(m, '{padding:0 20px;}', '')
            ),
            (0, r.default)(
              t,
              '@media (min-width: '.concat(null == o ? void 0 : o.breakPoints.xlarge, 'px)'),
              (0, l.css)(m, '{max-width:1240px;width:100%;margin:0 auto;}', '')
            ),
            t
          );
        }, ''),
        H = (0, n.default)(i.default, { target: 'e1onlrbh0', label: 'StyledLink' })(function (e) {
          var t = e.theme;
          return { color: null == t ? void 0 : t.palette.white };
        }, '');
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          m,
          'InnerNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          f,
          'Greetings',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          g,
          'RightSide',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          b,
          'LeftSide',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          v,
          'MobileNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          h,
          'InnerMobileNavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          y,
          'IconSearchButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          L,
          'SearchWrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          j,
          'NavBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        ),
        u.register(
          H,
          'StyledLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/Header/styles.ts'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/App/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/App/App.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/App/utils/loadable.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => l });
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
      const l = n;
      var d, s;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        d.register(
          n,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/App/utils/loadable.tsx'
        ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/AppBar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/AppBar/AppBar.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'AppBar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AppBar.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AppBar.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/AutoComplete/AutoComplete.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Search.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Autocomplete/Autocomplete.js'
        ),
        c = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/InputAdornment/InputAdornment.js'
        ),
        u = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        p = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        m = o('./src/components/AutoComplete/styles.tsx');
      function f(e, t) {
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
            ? f(Object(o), !0).forEach(function (t) {
                (0, n.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : f(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var b =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        v = (0, d.default)(c.default, { target: 'e1c61cvw0', label: 'StyledInputAdornment' })(
          function (e) {
            var t;
            return { color: null === (t = e.theme) || void 0 === t ? void 0 : t.palette.white };
          },
          ''
        ),
        h = function (e) {
          var t = e.suggestions,
            o = e.startAdornment,
            a = e.onSuggestionsFetch,
            n = e.onCleanSuggestions,
            d = e.placeholder,
            c = void 0 === d ? '' : d,
            f = e.onSelectItem,
            b = e.suggestionsLoading,
            h = void 0 !== b && b,
            y = (0, p.useTranslation)().t,
            L = (0, u.useState)(''),
            j = (0, l.default)(L, 2),
            H = j[0],
            _ = j[1];
          return u.createElement(
            m.Wrapper,
            null,
            u.createElement(i.default, {
              disablePortal: !0,
              freeSolo: !0,
              onChange: f,
              autoHighlight: !0,
              id: 'search-header-suggest',
              options: t,
              inputValue: H,
              clearOnBlur: !0,
              loading: h,
              renderTags: function () {
                return null;
              },
              onClose: function (e) {
                n(e), _('');
              },
              loadingText: y('autoComplete.loading'),
              onInputChange: function (e, t, o) {
                'input' === o
                  ? (e.preventDefault(), a({ value: t }), _(t))
                  : 'clear' === o && (n(e), _(''));
              },
              getOptionLabel: function (e) {
                return e.name;
              },
              fullWidth: !0,
              renderInput: function (e) {
                return u.createElement(
                  m.StyledTextField,
                  (0, r.default)({}, e, {
                    placeholder: c,
                    InputProps: g(
                      g({}, e.InputProps),
                      {},
                      {
                        startAdornment:
                          o ||
                          u.createElement(
                            v,
                            { position: 'start' },
                            u.createElement(s.default, null)
                          ),
                      }
                    ),
                    label: '',
                    variant: 'standard',
                  })
                );
              },
            })
          );
        };
      b(h, "useTranslation{{ t }}\nuseState{[inputValue, setInputValue]('')}", function () {
        return [p.useTranslation];
      });
      var y = h;
      const L = y;
      var j, H;
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          v,
          'StyledInputAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        j.register(
          h,
          'AutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        ),
        j.register(
          y,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoComplete.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/components/AutoComplete/AutoCompleteV2.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { AutoComplete: () => _ });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/Close.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/ExpandMore.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@mui+styles@5.0.2_bb8e79a4a12a744c3dc48cdef194d579/node_modules/@mui/styles/withStyles/withStyles.js'
        ),
        c = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        u = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        p = o('./src/hooks/useOnClickOutside.ts'),
        m = o('./src/components/IconButton.tsx'),
        f = o('./src/components/MenuItem.tsx'),
        g = o('./src/components/Paper.tsx'),
        b = o('./src/components/TextField/index.ts'),
        v = o('./src/components/AutoComplete/useAutoComplete.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var h =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        y = (0, v.createFilterOptions)(),
        L = function (e) {
          var t = e.placeholder,
            o = e.defaultValue,
            a = void 0 === o ? '' : o,
            r = e.label,
            l = e.variant,
            i = e.inputStartAdornment,
            g = e.options,
            b = e.getOptionLabel,
            v = e.renderOption,
            h = e.className,
            L = e.onClick,
            j = e.hasClearIcon,
            H = (0, u.useTranslation)().t,
            _ = (0, c.useState)(a),
            E = (0, n.default)(_, 2),
            M = E[0],
            w = E[1],
            S = (0, c.useState)(g),
            T = (0, n.default)(S, 2),
            O = T[0],
            P = T[1],
            D = (0, c.useState)(0),
            R = (0, n.default)(D, 2),
            N = R[0],
            B = R[1],
            z = (0, c.useState)(!1),
            F = (0, n.default)(z, 2),
            V = F[0],
            W = F[1],
            Z = (0, c.useRef)(null),
            U = (0, c.useRef)(null),
            J = (0, c.useRef)(null),
            Q = (0, c.useCallback)(
              function () {
                W(!1), M.trim() || w(a);
              },
              [M, a]
            ),
            X = (0, c.useCallback)(
              function () {
                var e = y(g, { inputValue: M, getOptionLabel: b });
                P(e);
              },
              [g, M, b]
            ),
            Y = (0, c.useCallback)(
              function () {
                var e,
                  t =
                    null == J || null === (e = J.current) || void 0 === e ? void 0 : e.children[N];
                t && t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              },
              [N]
            );
          (0, p.useOnClickOutside)(Z, (0, c.useCallback)(Q, [Z, M])),
            (0, c.useEffect)(X, [M]),
            (0, c.useEffect)(Y, [N]),
            (0, c.useEffect)(
              function () {
                w(a);
              },
              [a]
            );
          var q = (0, c.useCallback)(function (e) {
              w(e.target.value);
            }, []),
            K = (0, c.useCallback)(
              function () {
                W(!V);
              },
              [V]
            ),
            $ = (0, c.useCallback)(function () {
              w(''), P([]), W(!0), U.current && U.current.focus();
            }, []),
            ee = (0, c.useCallback)(
              function (e) {
                return function () {
                  L && L(e), w(b(e)), W(!1), U.current && U.current.blur();
                };
              },
              [b, L]
            ),
            te = (0, c.useCallback)(function () {
              W(!0);
            }, []),
            oe = (0, c.useCallback)(
              function (e) {
                if (13 === e.keyCode) return B(0), W(!1), void ee(O[N])();
                if (38 !== e.keyCode)
                  if (40 !== e.keyCode);
                  else {
                    if (N + 1 >= O.length) return;
                    B(N + 1);
                  }
                else {
                  if (0 === N) return;
                  B(N - 1);
                }
              },
              [N, ee, O]
            ),
            ae = (0, c.useCallback)(
              function () {
                return v
                  ? O.map(function (e, t) {
                      return c.createElement(
                        C,
                        { isSelected: t === N, key: t, onClick: ee(e), tabIndex: 0 },
                        v(e)
                      );
                    })
                  : O.map(function (e, t) {
                      return c.createElement(
                        f.default,
                        {
                          component: 'div',
                          key: t,
                          onClick: ee(e),
                          selected: t === N,
                          tabIndex: 0,
                        },
                        b(e)
                      );
                    });
              },
              [O, N, b, v, ee]
            );
          return c.createElement(
            G,
            { className: h, ref: Z },
            c.createElement(k, {
              autoComplete: 'off',
              InputProps: {
                startAdornment: i,
                endAdornment: c.createElement(
                  x,
                  null,
                  j &&
                    M.length > 0 &&
                    c.createElement(
                      m.default,
                      {
                        color: 'inherit',
                        onClick: $,
                        size: 'small',
                        title: H('autoComplete.clear'),
                      },
                      c.createElement(d.default, { fontSize: 'small' })
                    ),
                  c.createElement(
                    I,
                    {
                      color: 'inherit',
                      onClick: K,
                      showOptions: V,
                      size: 'small',
                      title: H(V ? 'autoComplete.collapse' : 'autoComplete.expand'),
                    },
                    c.createElement(s.default, { fontSize: 'small' })
                  )
                ),
              },
              inputRef: U,
              label: r,
              onChange: q,
              onFocus: te,
              onKeyDown: oe,
              placeholder: t,
              value: M,
              variant: l,
            }),
            V && c.createElement(A, { ref: J, square: !0 }, ae())
          );
        };
      h(
        L,
        'useTranslation{{ t }}\nuseState{[searchTerm, setSearchTerm](defaultValue)}\nuseState{[options, setOptions](suggestions)}\nuseState{[activeOption, setActiveOption](0)}\nuseState{[showOptions, setShowOptions](false)}\nuseRef{wrapperRef}\nuseRef{inputRef}\nuseRef{contentRef}\nuseCallback{clickOutside}\nuseCallback{filterOptions}\nuseCallback{scrollIntoOption}\nuseOnClickOutside{}\nuseCallback{}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseCallback{handleChange}\nuseCallback{handleToggleShowOptions}\nuseCallback{handleClear}\nuseCallback{handleClickOption}\nuseCallback{handleFocus}\nuseCallback{onKeyDown}\nuseCallback{renderOptions}',
        function () {
          return [u.useTranslation, p.useOnClickOutside];
        }
      );
      var j,
        H,
        _ = (0, c.memo)(L),
        G = (0, l.default)('div', { target: 'e1s7m15r4', label: 'Wrapper' })({
          name: '1wii3q8',
          styles: 'position:relative;height:40px',
        }),
        x = (0, l.default)('div', { target: 'e1s7m15r3', label: 'EndAdornment' })({
          name: 'zjik7',
          styles: 'display:flex',
        }),
        k = (0, l.default)(b.default, { target: 'e1s7m15r2', label: 'StyledTextField' })(function (
          e
        ) {
          var t,
            o = e.theme;
          return (
            (t = { height: 40, color: null == o ? void 0 : o.palette.white }),
            (0, r.default)(t, '& .MuiInputBase-root', {
              height: 40,
              color: null == o ? void 0 : o.palette.white,
            }),
            (0, r.default)(t, '& .MuiInputBase-inputAdornedStart', {
              paddingLeft: null == o ? void 0 : o.spacing(2),
            }),
            (0, r.default)(t, '& .MuiInputBase-input', {
              paddingTop: null == o ? void 0 : o.spacing(1),
              paddingBottom: null == o ? void 0 : o.spacing(1),
            }),
            (0, r.default)(t, '& .MuiOutlinedInput-notchedOutline', { borderColor: 'transparent' }),
            (0, r.default)(t, '& :hover .MuiOutlinedInput-notchedOutline', {
              borderColor: null == o ? void 0 : o.palette.white,
            }),
            (0, r.default)(t, '& :active .MuiOutlinedInput-notchedOutline', {
              borderColor: null == o ? void 0 : o.palette.white,
            }),
            t
          );
        },
        ''),
        I = (0, l.default)(m.default, {
          shouldForwardProp: function (e) {
            return 'showOptions' !== e;
          },
          target: 'e1s7m15r1',
          label: 'ExpandButton',
        })(function (e) {
          return { transform: e.showOptions ? 'rotate(180deg)' : 'none' };
        }, ''),
        C = (0, l.default)('div', { target: 'e1s7m15r0', label: 'Option' })(function (e) {
          return { background: e.isSelected ? 'rgba(0, 0, 0, 0.08)' : 'none' };
        }, ''),
        A = (0, i.default)(function (e) {
          return {
            root: {
              marginTop: null == e ? void 0 : e.spacing(0.5),
              borderRadius: 3,
              maxHeight: 165,
              overflowY: 'scroll',
              overflowX: 'hidden',
            },
          };
        })(g.default);
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          y,
          'defaultFilterOptions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          L,
          'AutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          _,
          'MemoizedAutoComplete',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          G,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          x,
          'EndAdornment',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          k,
          'StyledTextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          I,
          'ExpandButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          C,
          'Option',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        ),
        j.register(
          A,
          'StyledPaper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/AutoCompleteV2.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/components/AutoComplete/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/AutoComplete/AutoComplete.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/AutoComplete/styles.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Wrapper: () => i, StyledTextField: () => c });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o('./src/components/TextField/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = (0, n.default)('div', { target: 'e1rflf271', label: 'Wrapper' })({
          name: '1ayuow2',
          styles: 'width:100%;position:relative;z-index:1',
        }),
        c = (0, n.default)(l.default, { target: 'e1rflf270', label: 'StyledTextField' })(function (
          e
        ) {
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
        },
        '');
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          i,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        ),
        d.register(
          c,
          'StyledTextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/styles.tsx'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/AutoComplete/useAutoComplete.tsx': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { createFilterOptions: () => d }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var r, n;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function l(e) {
        return void 0 !== e.normalize ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : e;
      }
      function d(e) {
        var t = e || {},
          o = t.ignoreAccents,
          a = void 0 === o || o,
          r = t.ignoreCase,
          n = void 0 === r || r,
          d = t.trim,
          s = void 0 !== d && d,
          i = t.limit,
          c = t.matchFrom,
          u = void 0 === c ? 'any' : c;
        return function (e, t) {
          var o = t.inputValue,
            r = t.getOptionLabel,
            d = s ? o.trim() : o;
          n && (d = d.toLowerCase()), a && (d = l(d));
          var c = e.filter(function (e) {
            var t = r(e);
            return (
              n && (t = t.toLowerCase()),
              a && (t = l(t)),
              'start' === u ? 0 === t.indexOf(d) : t.indexOf(d) > -1
            );
          });
          return 'number' == typeof i ? c.slice(0, i) : c;
        };
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          l,
          'stripDiacritics',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/useAutoComplete.tsx'
        ),
        r.register(
          d,
          'createFilterOptions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/AutoComplete/useAutoComplete.tsx'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/components/Avatar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => l });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Avatar/Avatar.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n = r.default;
      const l = n;
      var d, s;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        d.register(
          n,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Avatar.tsx'
        ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Box.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Box/Box.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function l(e) {
        return n.createElement(r.default, e);
      }
      var d = l;
      const s = d;
      var i, c;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          l,
          'Box',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Box.tsx'
        ),
        i.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Box.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/components/Button.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Button/Button.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'Button',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Button.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Button.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/CircularProgress.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/CircularProgress/CircularProgress.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'CircularProgress',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CircularProgress.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CircularProgress.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/CopyToClipBoard.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => g });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+icons-material@5.0.5_667c40b637419e5f7ad8e738f1f34677/node_modules/@mui/icons-material/FileCopy.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o('./src/utils/cli-utils.ts'),
        i = o('./src/components/IconButton.tsx'),
        c = o('./src/components/Tooltip.tsx');
      e = o.hmd(e);
      var u,
        p = ['text', 'children'];
      function m(e) {
        var t = e.text,
          o = e.children,
          r = (0, a.default)(e, p),
          u = (0, d.useTranslation)().t;
        return l.createElement(
          h,
          r,
          l.createElement(y, null, null != o ? o : t),
          l.createElement(
            c.default,
            { disableFocusListener: !0, title: u('copy-to-clipboard') },
            l.createElement(
              i.default,
              {
                onClick: (0, s.copyToClipBoardUtility)(t),
                'data-testid': 'copy-icon',
                size: 'large',
              },
              l.createElement(n.default, null)
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
            })(m, 'useTranslation{{ t }}', function () {
          return [d.useTranslation];
        });
      var f = m;
      const g = f;
      var b,
        v,
        h = (0, r.default)('div', { target: 'ee5tpkh1', label: 'Wrapper' })({
          name: 'bcffy2',
          styles: 'display:flex;align-items:center;justify-content:space-between',
        }),
        y = (0, r.default)('span', { target: 'ee5tpkh0', label: 'Content' })({
          name: '82yiqa',
          styles:
            'display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:21px;font-size:1rem',
        });
      (b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (b.register(
          m,
          'CopyToClipBoard',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        b.register(
          h,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        b.register(
          y,
          'Content',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        ),
        b.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/CopyToClipBoard.tsx'
        )),
        (v =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          v(e);
    },
    './src/components/Dialog.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Dialog/Dialog.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'Dialog',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Dialog.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Dialog.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/DialogActions.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/DialogActions/DialogActions.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'DialogActions',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogActions.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogActions.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/DialogContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/DialogContent/DialogContent.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'DialogContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogContent.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogContent.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/DialogTitle.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/DialogTitle/DialogTitle.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'DialogTitle',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogTitle.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/DialogTitle.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Heading.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Typography/Typography.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var d,
        s = ['variant'];
      (d =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        d(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, l.forwardRef)(function (e, t) {
          var o = e.variant,
            d = void 0 === o ? 'h6' : o,
            i = (0, r.default)(e, s);
          return l.createElement(n.default, (0, a.default)({}, i, { variant: d, ref: t }));
        }),
        c = i;
      const u = c;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          i,
          'Heading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Heading.tsx'
        ),
        p.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Heading.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/components/IconButton.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/IconButton/IconButton.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'IconButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/IconButton.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/IconButton.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Icons/Earth.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Earth: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = n.forwardRef(function (e, t) {
          return n.createElement(
            l.SvgIcon,
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
      (i.displayName = 'Earth'),
        (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          d.register(
            i,
            'Earth',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Earth.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/FileBinary.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { FileBinary: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = n.forwardRef(function (e, t) {
          return n.createElement(
            l.SvgIcon,
            (0, r.default)({}, e, { ref: t }),
            n.createElement('path', {
              d: 'M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z',
            })
          );
        });
      (i.displayName = 'FileBinary'),
        (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          d.register(
            i,
            'FileBinary',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/FileBinary.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/Law.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Law: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = n.forwardRef(function (e, t) {
          return n.createElement(
            l.SvgIcon,
            (0, r.default)({}, e, { ref: t }),
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z',
            })
          );
        });
      (i.displayName = 'Law'),
        (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          d.register(
            i,
            'Law',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Law.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/Time.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Time: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = n.forwardRef(function (e, t) {
          return n.createElement(
            l.SvgIcon,
            (0, r.default)({ viewBox: '0 0 24 24' }, e, { ref: t }),
            n.createElement('path', {
              d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            }),
            n.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            n.createElement('path', { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
          );
        });
      (i.displayName = 'Time'),
        (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          d.register(
            i,
            'Time',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Icons/Time.tsx'
          ),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
    './src/components/Icons/Version.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Version: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/components/SvgIcon.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = n.forwardRef(function (e, t) {
          return n.createElement(
            l.SvgIcon,
            (0, r.default)({ viewBox: '0 0 14 16', height: 16, width: 14 }, e, { ref: t }),
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z',
            })
          );
        });
      (i.displayName = 'Version'),
        (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          d.register(
            i,
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
          Law: () => l.Law,
          Earth: () => d.Earth,
        });
      var a = o('./src/components/Icons/Version.tsx'),
        r = o('./src/components/Icons/Time.tsx'),
        n = o('./src/components/Icons/FileBinary.tsx'),
        l = o('./src/components/Icons/Law.tsx'),
        d = o('./src/components/Icons/Earth.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Label/Label.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var d,
        s = ['text', 'capitalize', 'weight'];
      (d =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        d(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, n.default)('div', { target: 'esyufg60', label: 'Wrapper' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight[e.weight],
            textTransform: e.capitalize ? 'capitalize' : 'none',
          };
        }, ''),
        c = function (e) {
          var t = e.text,
            o = void 0 === t ? '' : t,
            n = e.capitalize,
            d = void 0 !== n && n,
            c = e.weight,
            u = void 0 === c ? 'regular' : c,
            p = (0, r.default)(e, s);
          return l.createElement(i, (0, a.default)({ capitalize: d, weight: u }, p), o);
        },
        u = c;
      const p = u;
      var m, f;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          i,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        ),
        m.register(
          c,
          'Label',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        ),
        m.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Label/Label.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/components/Label/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Label/Label.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Link.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => p });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o(
          '../../../node_modules/.pnpm/react-router-dom@5.3.0_react@17.0.2/node_modules/react-router-dom/esm/react-router-dom.js'
        ),
        d = o('./src/components/Text/index.ts');
      e = o.hmd(e);
      var s,
        i = ['external', 'to', 'children', 'variant', 'className'];
      (s =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        s(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c = n.forwardRef(function (e, t) {
          var o = e.external,
            s = e.to,
            c = e.children,
            u = e.variant,
            p = e.className,
            m = (0, r.default)(e, i),
            f = n.createElement(d.default, { variant: u }, c);
          return o
            ? n.createElement(
                'a',
                (0, a.default)(
                  { className: p, href: s, ref: t, rel: 'noopener noreferrer', target: '_blank' },
                  m
                ),
                f
              )
            : n.createElement(l.Link, (0, a.default)({ className: p, innerRef: t, to: s }, m), f);
        }),
        u = c;
      const p = u;
      var m, f;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          c,
          'Link',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Link.tsx'
        ),
        m.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Link.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/components/Loading/Loading.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o('./src/components/Logo/index.ts'),
        l = o('./src/components/Loading/Spinner/index.tsx'),
        d = o('./src/components/Loading/styles.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function () {
          return r.createElement(
            d.Wrapper,
            { 'data-testid': 'loading' },
            r.createElement(d.Badge, null, r.createElement(n.default, { size: 'big' })),
            r.createElement(l.default, { 'data-testid': 'spinnerLogo' })
          );
        },
        i = s;
      const c = i;
      var u, p;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'Loading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Loading.tsx'
        ),
        u.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Loading.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/Loading/Spinner/Spinner.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o('./src/components/CircularProgress.tsx');
      function s(e, t) {
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
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = function (e) {
          var t = e.size,
            o = void 0 === t ? 50 : t,
            a = e.centered,
            r = void 0 !== a && a;
          return l.createElement(f, { centered: r }, l.createElement(g, { size: o }));
        },
        c = i;
      const u = c;
      var p,
        m,
        f = (0, n.default)('div', { target: 'e1y5sxxq1', label: 'Wrapper' })(function (e) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? s(Object(o), !0).forEach(function (t) {
                    (0, r.default)(e, t, o[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                : s(Object(o)).forEach(function (t) {
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
        g = (0, n.default)(d.default, { target: 'e1y5sxxq0', label: 'Circular' })(function (e) {
          var t = e.theme;
          return {
            color:
              'dark' === (null == t ? void 0 : t.palette.mode)
                ? null == t
                  ? void 0
                  : t.palette.white
                : null == t
                ? void 0
                : t.palette.primary.main,
          };
        }, '');
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          i,
          'Spinner',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        p.register(
          f,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        p.register(
          g,
          'Circular',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        ),
        p.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/Spinner/Spinner.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
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
      o.r(t), o.d(t, { Wrapper: () => d, Badge: () => s });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        l,
        d = (0, r.default)('div', { target: 'eimgwje1', label: 'Wrapper' })({
          name: '10utkse',
          styles: 'transform:translate(-50%, -50%);top:50%;left:50%;position:absolute',
        }),
        s = (0, r.default)('div', { target: 'eimgwje0', label: 'Badge' })(function (e) {
          var t = e.theme;
          return {
            margin: '0 0 30px 0',
            borderRadius: 25,
            boxShadow: '0 10px 20px 0 rgba(69, 58, 100, 0.2)',
            background:
              'dark' === (null == t ? void 0 : t.palette.mode)
                ? null == t
                  ? void 0
                  : t.palette.black
                : '#f7f8f6',
          };
        }, '');
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          d,
          'Wrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/styles.ts'
        ),
        n.register(
          s,
          'Badge',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Loading/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/components/Logo/Logo.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => f });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        l = o('./src/providers/config/index.ts'),
        d = o('./src/components/Logo/img/logo-black-and-white.svg'),
        s = o('./src/components/Logo/img/logo.svg');
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
        c = { 'x-small': '30px', small: '40px', big: '90px' },
        u = { light: s, dark: d },
        p = function (e) {
          var t = e.size,
            o = e.onClick,
            a = e.className,
            r = (0, l.useConfig)().configOptions;
          return null != r && r.logo
            ? n.createElement(
                v,
                { onClick: o, className: a },
                n.createElement('img', { alt: 'logo', height: '40px', src: r.logo })
              )
            : n.createElement(h, { size: t, onClick: o, className: a });
        };
      i(p, 'useConfig{{ configOptions }}', function () {
        return [l.useConfig];
      });
      var m = p;
      const f = m;
      var g,
        b,
        v = (0, r.default)('div', { target: 'em793ed1', label: 'ImageLogo' })({
          name: 'lyel5l',
          styles: 'font-size:0',
        }),
        h = (0, r.default)('div', { target: 'em793ed0', label: 'StyledLogo' })(function (e) {
          var t = e.size,
            o = void 0 === t ? 'small' : t,
            a = e.theme;
          return {
            display: 'inline-block',
            verticalAlign: 'middle',
            boxSizing: 'border-box',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: 'url('.concat(u[null == a ? void 0 : a.palette.mode], ')'),
            backgroundRepeat: ' no-repeat',
            width: c[o],
            height: c[o],
          };
        }, '');
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          c,
          'sizes',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        g.register(
          u,
          'logos',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        g.register(
          p,
          'Logo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        g.register(
          v,
          'ImageLogo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        g.register(
          h,
          'StyledLogo',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        ),
        g.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Logo/Logo.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/components/Logo/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/Logo/Logo.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Menu.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Menu/Menu.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'Menu',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Menu.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Menu.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/MenuItem.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/MenuItem/MenuItem.js'
        ),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = (0, d.forwardRef)(function (e, t) {
        return d.createElement(m, (0, r.default)({}, e, { ref: t }));
      });
      s.defaultProps = { component: 'li' };
      var i = s;
      const c = i;
      var u,
        p,
        m = (0, n.default)(l.default, { target: 'ed8xj0i0', label: 'StyledMaterialUIMenuItem' })({
          name: '12mkfdx',
          styles: 'outline:none',
        });
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          s,
          'MenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        ),
        u.register(
          m,
          'StyledMaterialUIMenuItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        ),
        u.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/MenuItem.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/components/Paper.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Paper/Paper.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'Paper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Paper.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Paper.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/SnackbarContent.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/SnackbarContent/SnackbarContent.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'SnackbarContent',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SnackbarContent.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SnackbarContent.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/SvgIcon.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { SvgIcon: () => f });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/SvgIcon/SvgIcon.js'
        ),
        s = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var i,
        c = ['size', 'title'];
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
      (i =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        i(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p,
        m,
        f = s.forwardRef(function (e, t) {
          var o = e.size,
            a = void 0 === o ? 'md' : o,
            l = e.title,
            d = (0, n.default)(e, c);
          return s.createElement(b, (0, r.default)({ size: a, titleAccess: l }, d, { ref: t }));
        }),
        g = function (e) {
          return 'md' === e ? { width: 18, height: 18 } : { width: 14, height: 16 };
        },
        b = (0, l.default)(d.default, { target: 'et6id9r0', label: 'StyledMaterialUISvgIcon' })(
          function (e) {
            var t = e.size;
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? u(Object(o), !0).forEach(function (t) {
                      (0, a.default)(e, t, o[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
                  : u(Object(o)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    });
              }
              return e;
            })({}, g(t));
          },
          ''
        );
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          f,
          'SvgIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        ),
        p.register(
          g,
          'getSize',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        ),
        p.register(
          b,
          'StyledMaterialUISvgIcon',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/SvgIcon.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/components/Text/Text.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Typography/Typography.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
        return l.createElement(n.default, (0, r.default)({}, e, { component: 'span', ref: t }));
      });
      d.defaultProps = { variant: 'subtitle1' };
      var s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'Text',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Text/Text.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Text/Text.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
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
      o.r(t), o.d(t, { default: () => f });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/TextField/TextField.js'
        ),
        d = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var s,
        i = ['InputProps', 'classes'];
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
                (0, r.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : c(Object(o)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
              });
        }
        return e;
      }
      (s =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        s(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var p = (0, d.forwardRef)(function (e, t) {
          var o = e.InputProps,
            r = e.classes,
            s = (0, n.default)(e, i);
          return d.createElement(
            l.default,
            (0, a.default)({}, s, { ref: t, InputProps: u(u({}, o), {}, { classes: r }) })
          );
        }),
        m = p;
      const f = m;
      var g, b;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          p,
          'TextField',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/TextField/TextField.tsx'
        ),
        g.register(
          m,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/TextField/TextField.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/components/TextField/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/TextField/TextField.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/Toolbar.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Toolbar/Toolbar.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, l.forwardRef)(function (e, t) {
          return l.createElement(n.default, (0, r.default)({}, e, { ref: t }));
        }),
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'Toolbar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Toolbar.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Toolbar.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/components/Tooltip.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => u });
      var a = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/Tooltip/Tooltip.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      e = o.hmd(e);
      var d,
        s = ['title', 'children'];
      (d =
        'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
        d(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i = (0, l.forwardRef)(function (e, t) {
          var o = e.title,
            d = e.children,
            i = (0, r.default)(e, s);
          return o
            ? l.createElement(n.default, (0, a.default)({}, i, { title: o, innerRef: t }), d)
            : d;
        }),
        c = i;
      const u = c;
      var p, m;
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (p.register(
          i,
          'Tooltip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tooltip.tsx'
        ),
        p.register(
          c,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/Tooltip.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/design-tokens/ResetStyles.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+styles@5.0.2_bb8e79a4a12a744c3dc48cdef194d579/node_modules/@mui/styles/makeStyles/makeStyles.js'
        ),
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, n.default)(function (e) {
          var t = e.theme;
          return {
            '@global': {
              'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
                { fontFamily: '"Roboto", Helvetica Neue, Arial, sans-serif' },
              strong: { fontWeight: null == t ? void 0 : t.fontWeight.semiBold },
              'html, body, #root': { height: '100%' },
              ul: { margin: 0, padding: 0, listStyle: 'none' },
              '.container': (0, r.default)(
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
        s = function (e) {
          var t = e.children;
          return d(), l.createElement(l.Fragment, null, t);
        },
        i = s;
      const c = i;
      var u, p;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          d,
          'resetStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        ),
        u.register(
          s,
          'ResetStyles',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        ),
        u.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ResetStyles.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/design-tokens/StyleBaseline.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/CssBaseline/CssBaseline.js'
        ),
        n =
          (o(
            '../../../node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css'
          ),
          o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js')),
        l = o('./src/design-tokens/ResetStyles.tsx');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = function () {
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(r.default, null),
            n.createElement(l.default, null)
          );
        },
        s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'StyleBaseline',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/StyleBaseline.tsx'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/StyleBaseline.tsx'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/design-tokens/ThemeContext.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n = (0, r.createContext)(void 0),
        l = n;
      const d = l;
      var s, i;
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          n,
          'ThemeContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeContext.ts'
        ),
        s.register(
          l,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeContext.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/design-tokens/ThemeProvider.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        d = o.n(l),
        s = o(
          '../../../node_modules/.pnpm/@mui+styled-engine@5.0.2_5a47a31437ffba27a84f7efb2b21ce86/node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/@mui+system@5.0.6_2878a7b1139098c7d22a204491c179a6/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js'
        ),
        c = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        u = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        p = o('./src/providers/config/index.ts'),
        m = o('./src/hooks/useLocalStorage.ts'),
        f = o('./src/design-tokens/ThemeContext.ts'),
        g = o('./src/design-tokens/load-dayjs-locale.ts'),
        b = o('./src/design-tokens/theme.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var v =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        h = function (e) {
          var t,
            o,
            a,
            l,
            v,
            h = e.children,
            y =
              null === (t = (o = window).matchMedia) || void 0 === t
                ? void 0
                : t.call(o, '(prefers-color-scheme:dark)').matches,
            L =
              (null === (a = window) ||
              void 0 === a ||
              null === (l = a.__VERDACCIO_BASENAME_UI_OPTIONS) ||
              void 0 === l
                ? void 0
                : l.darkMode) || y,
            j = null === (v = c.default.languages) || void 0 === v ? void 0 : v[0],
            H = (0, p.useConfig)().configOptions,
            _ = (0, m.default)('darkMode', !!L),
            G = (0, n.default)(_, 2),
            x = G[0],
            k = G[1],
            I = (0, m.default)('language', j),
            C = (0, n.default)(I, 2),
            A = C[0],
            E = C[1],
            M = x ? 'dark' : 'light',
            w = (0, u.useCallback)(
              (0, r.default)(
                d().mark(function e() {
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c.default.changeLanguage(A);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [A]
            ),
            S = (0, b.getTheme)(M, null == H ? void 0 : H.primaryColor);
          return (
            (0, u.useEffect)(
              function () {
                w(), (0, g.default)();
              },
              [A, w]
            ),
            u.createElement(
              f.default.Provider,
              { value: { isDarkMode: x, setIsDarkMode: k, language: A, setLanguage: E } },
              u.createElement(
                s.default,
                { injectFirst: !0 },
                u.createElement(i.default, { theme: S }, h)
              )
            )
          );
        };
      v(
        h,
        'useConfig{{ configOptions }}\nuseLocalStorage{[isDarkMode, setIsDarkMode]}\nuseLocalStorage{[language, setLanguage]}\nuseCallback{changeLanguage}\nuseEffect{}',
        function () {
          return [p.useConfig, m.default, m.default];
        }
      );
      var y = h;
      const L = y;
      var j, H;
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          h,
          'ThemeProviderWrapper',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeProvider.tsx'
        ),
        j.register(
          y,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/ThemeProvider.tsx'
        )),
        (H =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          H(e);
    },
    './src/design-tokens/load-dayjs-locale.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var a,
        r = o('../../../node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/dayjs.min.js'),
        n = o.n(r),
        l = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function d() {
        var e = l.default.options.fallbackLng;
        return Array.isArray(e) ? e[0] : 'string' == typeof e ? e : void 0;
      }
      function s() {
        var e = d(),
          t = l.default.language || e;
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
      var i = s;
      const c = i;
      var u, p;
      (u = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (u.register(
          d,
          'getFallFackLanguage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        ),
        u.register(
          s,
          'loadDayJSLocale',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        ),
        u.register(
          i,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/load-dayjs-locale.ts'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/design-tokens/theme.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { breakPoints: () => v, getTheme: () => y });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/styles/createTheme.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_f8d419d8b6c9429771d4cf60ccbff692/node_modules/@mui/material/styles/adaptV4Theme.js'
        ),
        d = o('./src/utils/colors.ts');
      function s(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(o), !0).forEach(function (t) {
                (0, r.default)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : s(Object(o)).forEach(function (t) {
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
      var c = {
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
          primary: d.PRIMARY_COLOR,
          secondary: '#20232a',
          background: '#fff',
          dodgerBlue: '#1ba1f2',
          cyanBlue: '#253341',
        },
        u = {
          light: i({}, c),
          dark: i(
            i({}, c),
            {},
            { primary: '#24394e', secondary: '#424242', background: '#1A202C' }
          ),
        };
      function p(e, t) {
        return 'light' === e && (u.light.primary = t), u[e];
      }
      var m,
        f,
        g = { xxl: 26, xl: 24, lg: 21, md: 18, default: 16, sm: 14, ssm: 12 },
        b = { light: 300, regular: 400, semiBold: 500, bold: 700 },
        v = { small: 576, medium: 768, large: 1024, container: 1240, xlarge: 1275 },
        h = { fontSize: g, fontWeight: b, breakPoints: v },
        y = function (e, t) {
          var o = p(e, t);
          return (0, n.default)(
            (0, l.default)(
              i(
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
                  palette: i(
                    i({ mode: e }, o),
                    {},
                    {
                      primary: { main: o.primary },
                      secondary: { main: o.secondary },
                      error: { main: o.red },
                      background: { default: o.background },
                    }
                  ),
                },
                h
              )
            )
          );
        };
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          c,
          'colors',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          u,
          'themeModes',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          p,
          'applyPrimaryColor',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          g,
          'fontSize',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          b,
          'fontWeight',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          v,
          'breakPoints',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          h,
          'customizedTheme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        ),
        m.register(
          y,
          'getTheme',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/design-tokens/theme.ts'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/hooks/useLocalStorage.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var l =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        d = function (e, t) {
          var o = (0, n.useState)(function () {
              try {
                var o = window.localStorage.getItem(e);
                return o ? JSON.parse(o) : t;
              } catch (e) {
                return console.error('An error occurred getting a sessionStorage key', e), t;
              }
            }),
            a = (0, r.default)(o, 2),
            l = a[0],
            d = a[1];
          return [
            l,
            function (t) {
              try {
                var o = t instanceof Function ? t(l) : t;
                d(o), window.localStorage.setItem(e, JSON.stringify(o));
              } catch (e) {
                console.error('An error occurred writing to sessionStorage', e);
              }
            },
          ];
        };
      l(
        d,
        "useState{[storedValue, setStoredValue](() => {\n    try {\n      // Get from local storage by key\n      const item = window.localStorage.getItem(key);\n      // Parse stored json or if none return initialValue\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error: any) {\n      // If error also return initialValue\n      // eslint-disable-next-line no-console\n      console.error('An error occurred getting a sessionStorage key', error);\n      return initialValue;\n    }\n  })}"
      );
      var s = d;
      const i = s;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
          'useLocalStorage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/hooks/useLocalStorage.ts'
        ),
        c.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/hooks/useLocalStorage.ts'
        )),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/hooks/useOnClickOutside.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { useOnClickOutside: () => d });
      var a,
        r,
        n,
        l = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      function d(e, t) {
        (0, l.useEffect)(
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
            })(d, 'useEffect{}'),
        (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          r.register(
            d,
            'useOnClickOutside',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/hooks/useOnClickOutside.ts'
          ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/i18n/config.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => m });
      var a,
        r,
        n,
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/context.js'
        ),
        i = o('./src/i18n/enabledLanguages.ts'),
        c = o('./src/i18n/loadTranslationFile.ts');
      (e = o.hmd(e)),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          n(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var u = i.listLanguages.reduce(function (e, t) {
        return (
          (e[t.lng] = {
            translation:
              t.lng === i.DEFAULT_LANGUAGE
                ? o('./src/i18n/crowdin/ui.json')
                : (0, c.loadTranslationFile)(t.lng),
          }),
          e
        );
      }, {});
      d.default
        .use(s.initReactI18next)
        .init({
          lng:
            (null === (a = window) ||
            void 0 === a ||
            null === (r = a.__VERDACCIO_BASENAME_UI_OPTIONS) ||
            void 0 === r
              ? void 0
              : r.language) || i.DEFAULT_LANGUAGE,
          fallbackLng: i.DEFAULT_LANGUAGE,
          whitelist: (0, l.default)(i.listLanguagesAsString),
          load: 'currentOnly',
          resources: u,
          debug: !1,
          interpolation: { escapeValue: !1 },
        });
      var p = d.default;
      const m = p;
      var f, g;
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          u,
          'languages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/config.ts'
        ),
        f.register(
          p,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/config.ts'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/i18n/enabledLanguages.ts': (e, t, o) => {
      'use strict';
      o.r(t),
        o.d(t, {
          DEFAULT_LANGUAGE: () => d,
          listLanguages: () => s,
          listLanguagesAsString: () => c,
        });
      var a,
        r = o(
          '../../../node_modules/.pnpm/country-flag-icons@1.4.16/node_modules/country-flag-icons/react/3x2/index.js'
        );
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        l,
        d = 'en-US',
        s = [
          { lng: d, icon: r.default.US, menuKey: 'lng.english' },
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
        i = s.reduce(function (e, t) {
          return e.push(t.lng), e;
        }, []),
        c = i;
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          d,
          'DEFAULT_LANGUAGE',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        n.register(
          s,
          'listLanguages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        n.register(
          i,
          'languages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        ),
        n.register(
          c,
          'listLanguagesAsString',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/enabledLanguages.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
    './src/i18n/loadTranslationFile.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { loadTranslationFile: () => l }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var r, n;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function l(e) {
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
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          l,
          'loadTranslationFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/i18n/loadTranslationFile.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/index.tsx': (e, t, o) => {
      'use strict';
      o.r(t);
      var a,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = o(
          '../../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/react-hot-loader@4.13.0_597cb904b9c9ac48becb27bac7a6c943/node_modules/react-hot-loader/dist/react-hot-loader.production.min.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        s = o('./src/providers/config/index.ts'),
        i = o('./src/App/index.ts'),
        c = o('./src/design-tokens/StyleBaseline.tsx'),
        u = o('./src/design-tokens/ThemeProvider.tsx'),
        p = o('./src/store/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var m,
        f,
        g = document.getElementById('root'),
        b = function (e) {
          n.render(
            r.createElement(
              d.Provider,
              { store: p.store },
              r.createElement(
                l.AppContainer,
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
            g
          );
        };
      b(i.default),
        (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (m.register(
            g,
            'rootNode',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/index.tsx'
          ),
          m.register(
            b,
            'renderApp',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/index.tsx'
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
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/createClass.js'
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
      var l;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      try {
        localStorage.setItem('__TEST__', ''),
          localStorage.removeItem('__TEST__'),
          (l = localStorage);
      } catch (e) {
        l = n();
      }
      var d = l;
      const s = d;
      var i, c;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          l,
          'storage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/storage.ts'
        ),
        i.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/API/storage.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/providers/config/AppConfigurationProvider.tsx': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => v, useConfig: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        n = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        l = o.n(n),
        d = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        s = o.n(d),
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
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
        p = {
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
      function m() {
        var e,
          t,
          o =
            null !==
              (e =
                null === (t = window) || void 0 === t
                  ? void 0
                  : t.__VERDACCIO_BASENAME_UI_OPTIONS) && void 0 !== e
              ? e
              : p.configOptions;
        return (
          (s()(o.primaryColor) || l()(o.primaryColor)) && (o.primaryColor = c.PRIMARY_COLOR), o
        );
      }
      var f = (0, i.createContext)(p),
        g = function (e) {
          var t = e.children,
            o = (0, i.useState)(m()),
            a = (0, r.default)(o, 2),
            n = a[0],
            l = a[1],
            d = (0, i.useMemo)(
              function () {
                return { configOptions: n, setConfigOptions: l };
              },
              [n]
            );
          return i.createElement(f.Provider, { value: d }, t);
        };
      u(g, 'useState{[configOptions, setConfigOptions](getConfiguration())}\nuseMemo{value}');
      var b = g;
      const v = b;
      var h,
        y,
        L = function () {
          return (0, i.useContext)(f);
        };
      u(L, 'useContext{}'),
        (h = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
          (h.register(
            p,
            'defaultValues',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          h.register(
            m,
            'getConfiguration',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          h.register(
            f,
            'AppConfigurationContext',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          h.register(
            g,
            'AppConfigurationProvider',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          h.register(
            L,
            'useConfig',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          ),
          h.register(
            b,
            'default',
            '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/providers/config/AppConfigurationProvider.tsx'
          )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
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
      o.r(t), o.d(t, { configuration: () => h });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        l = o.n(n),
        d = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        s = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js'),
        i = o.n(s),
        c = o('../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js'),
        u = o.n(c),
        p = o('./src/utils/colors.ts'),
        m = o('./src/providers/API/api.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var f = {
        primaryColor: p.PRIMARY_COLOR,
        darkMode: !1,
        pkgManagers: ['yarn', 'pnpm', 'npm'],
        scope: '',
        base: '',
        login: !0,
        url_prefix: '',
        title: 'Verdaccio',
      };
      function g() {
        var e,
          t,
          o =
            null !==
              (e =
                null === (t = window) || void 0 === t
                  ? void 0
                  : t.__VERDACCIO_BASENAME_UI_OPTIONS) && void 0 !== e
              ? e
              : f;
        return (
          (u()(o.primaryColor) || i()(o.primaryColor)) && (o.primaryColor = p.PRIMARY_COLOR), o
        );
      }
      var b,
        v,
        h = (0, d.createModel)()({
          state: { config: g() },
          effects: function (e) {
            return {
              getPackages: function () {
                return (0, r.default)(
                  l().mark(function t() {
                    var o;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), m.default.request('/-/verdaccio/packages', 'GET');
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
      (b = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (b.register(
          f,
          'defaultValues',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        ),
        b.register(
          g,
          'getConfiguration',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        ),
        b.register(
          h,
          'configuration',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/configuration.ts'
        )),
        (v =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          v(e);
    },
    './src/store/models/download.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { download: () => m });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        d = o.n(l),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        i = o('./src/providers/API/api.ts'),
        c = o('./src/utils/url.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var u,
        p,
        m = (0, s.createModel)()({
          state: {},
          reducers: {},
          effects: function () {
            return {
              getTarball: function (e) {
                return (0, n.default)(
                  d().mark(function t() {
                    var o, a, n;
                    return d().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (o = e.link),
                                (t.prev = 1),
                                (t.next = 4),
                                i.default.request(o, 'GET', {
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
          m,
          'download',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/download.ts'
        ),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/store/models/index.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { models: () => p });
      var a,
        r = o('./src/store/models/configuration.ts'),
        n = o('./src/store/models/download.ts'),
        l = o('./src/store/models/login.ts'),
        d = o('./src/store/models/manifest.ts'),
        s = o('./src/store/models/packages.ts'),
        i = o('./src/store/models/search.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var c,
        u,
        p = {
          packages: s.packages,
          configuration: r.configuration,
          search: i.search,
          download: n.download,
          login: l.login,
          manifest: d.manifest,
        };
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        c.register(
          p,
          'models',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/index.ts'
        ),
        (u =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          u(e);
    },
    './src/store/models/login.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { HEADERS: () => b, login: () => L });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        d = o.n(l),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        i = o(
          '../../../node_modules/.pnpm/i18next@20.6.1/node_modules/i18next/dist/esm/i18next.js'
        ),
        c = o('./src/providers/API/api.ts'),
        u = o('./src/utils/storage.ts');
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
      var f,
        g,
        b = { JSON: 'application/json' },
        v = u.default.getItem('token'),
        h = u.default.getItem('username'),
        y = { token: v, username: h },
        L = (0, s.createModel)()({
          state: { username: y.username, token: y.token },
          reducers: {
            logOutUser: function (e) {
              return (
                u.default.removeItem('username'),
                u.default.removeItem('token'),
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
                u.default.setItem('username', t.username),
                u.default.setItem('token', t.token),
                m(m({}, e), {}, { token: t.token, username: t.username })
              );
            },
          },
          effects: function (e) {
            return {
              getUser: function (t, o) {
                return (0, r.default)(
                  d().mark(function a() {
                    var r, n, l, s;
                    return d().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = t.username),
                                (n = t.password),
                                (l = o.configuration.config.base),
                                (a.prev = 2),
                                (a.next = 5),
                                c.default.request(''.concat(l, '-/verdaccio/login'), 'POST', {
                                  body: JSON.stringify({ username: r, password: n }),
                                  headers: { Accept: b.JSON, 'Content-Type': b.JSON },
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
                                  description: i.default.t('form-validation.unable-to-sign-in'),
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
      (f = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (f.register(
          b,
          'HEADERS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        f.register(
          v,
          'token',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        f.register(
          h,
          'username',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        f.register(
          y,
          'defaultUserState',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        ),
        f.register(
          L,
          'login',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/login.ts'
        )),
        (g =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          g(e);
    },
    './src/store/models/manifest.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { manifest: () => g });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        d = o.n(l),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        i = o('./src/providers/API/api.ts');
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
      function p(e, t) {
        return !t || void 0 === t || (!!e.versions && Object.keys(e.versions).includes(t));
      }
      var m,
        f,
        g = (0, s.createModel)()({
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
                  d().mark(function a() {
                    var r, n, l, s, c;
                    return d().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((r = t.packageName),
                                (n = t.packageVersion),
                                (l = o.configuration.config.base),
                                (a.prev = 2),
                                p(r, n))
                              ) {
                                a.next = 5;
                                break;
                              }
                              throw new Error('not found');
                            case 5:
                              return (
                                (a.next = 7),
                                i.default.request(
                                  ''
                                    .concat(l, '-/verdaccio/sidebar/')
                                    .concat(r)
                                    .concat(n ? '?v='.concat(n) : '')
                                )
                              );
                            case 7:
                              return (
                                (s = a.sent),
                                (a.next = 10),
                                i.default.request(
                                  ''
                                    .concat(l, '-/verdaccio/package/readme/')
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
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          p,
          'isPackageVersionValid',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/manifest.ts'
        ),
        m.register(
          g,
          'manifest',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/manifest.ts'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/store/models/packages.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { packages: () => f });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        d = o.n(l),
        s = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        i = o('./src/providers/API/api.ts');
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
      var p,
        m,
        f = (0, s.createModel)()({
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
                  d().mark(function t() {
                    var a, r;
                    return d().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = o.configuration.config.base),
                                (t.prev = 1),
                                (t.next = 4),
                                i.default.request(''.concat(a, '-/verdaccio/packages'), 'GET')
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
      (p = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        p.register(
          f,
          'packages',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/packages.ts'
        ),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/store/models/search.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { search: () => b });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        l = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        d = o(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/regenerator/index.js'
        ),
        s = o.n(d),
        i = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(o), !0).forEach(function (t) {
                (0, l.default)(e, t, o[t]);
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
      var m,
        f,
        g = { API_DELAY: 300, ABORT_ERROR: 'AbortError' },
        b = (0, i.createModel)()({
          state: { suggestions: [], controller: [] },
          reducers: {
            clearRequestQueue: function (e) {
              return (
                e.controller.forEach(function (e) {
                  return e.abort();
                }),
                p(p({}, e), {}, { controller: [] })
              );
            },
            addControllerToQueue: function (e, t) {
              var o = t.controller,
                a = e.controller;
              return p(p({}, e), {}, { controller: [].concat((0, n.default)(a), [o]) });
            },
            setError: function (e) {
              return p(p({}, e), {}, { isError: !0 });
            },
            saveSearch: function (e, t) {
              var o = t.suggestions;
              return p(p({}, e), {}, { suggestions: o, isError: null });
            },
          },
          effects: function (e) {
            return {
              getSuggestions: function (t, o) {
                return (0, r.default)(
                  s().mark(function a() {
                    var r, n, l, d, i;
                    return s().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = t.value),
                                (n = o.configuration.config.base),
                                (a.prev = 2),
                                (l = new window.AbortController()),
                                e.search.addControllerToQueue({ controller: l }),
                                (d = l.signal),
                                (a.next = 8),
                                c.default.request(
                                  ''.concat(n, '-/verdaccio/search/').concat(encodeURIComponent(r)),
                                  'GET',
                                  { signal: d, headers: {} }
                                )
                              );
                            case 8:
                              (i = a.sent), e.search.saveSearch({ suggestions: i }), (a.next = 15);
                              break;
                            case 12:
                              (a.prev = 12),
                                (a.t0 = a.catch(2)),
                                a.t0.name === g.ABORT_ERROR
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
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          g,
          'CONSTANTS',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/search.ts'
        ),
        m.register(
          b,
          'search',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/store/models/search.ts'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/store/store.ts': (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { store: () => i });
      var a,
        r = o(
          '../../../node_modules/.pnpm/@rematch+core@2.2.0_redux@4.1.2/node_modules/@rematch/core/dist/core.esm.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/@rematch+loading@2.1.2_@rematch+core@2.2.0/node_modules/@rematch/loading/dist/loading.esm.js'
        ),
        l = o('./src/store/models/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        s,
        i = (0, r.init)({ models: l.models, plugins: [(0, n.default)()] });
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        d.register(
          i,
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
          copyToClipBoardUtility: () => l,
          getCLISetConfigRegistry: () => d,
          getCLISetRegistry: () => s,
          getCLIChangePassword: () => i,
        }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        l = function (e) {
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
      function d(e, t, o) {
        return ''
          .concat(e, ' ')
          .concat(t)
          .concat('' !== t ? ':' : '', 'registry ')
          .concat(o);
      }
      function s(e, t) {
        return ''.concat(e, ' --registry ').concat(t);
      }
      function i(e, t) {
        return ''.concat(e, ' profile set password --registry ').concat(t);
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (r.register(
          l,
          'copyToClipBoardUtility',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        r.register(
          d,
          'getCLISetConfigRegistry',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        r.register(
          s,
          'getCLISetRegistry',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/cli-utils.ts'
        ),
        r.register(
          i,
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
        o.d(t, { PRIMARY_COLOR: () => l }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        l = '#4b5e40';
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          l,
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
        o.d(t, { NODE_MANAGER: () => l }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var r,
        n,
        l = { npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' };
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          l,
          'NODE_MANAGER',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/constants.ts'
        ),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
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
      var l;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      try {
        localStorage.setItem('__TEST__', ''),
          localStorage.removeItem('__TEST__'),
          (l = localStorage);
      } catch (e) {
        l = n();
      }
      var d = l;
      const s = d;
      var i, c;
      (i = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (i.register(
          l,
          'storage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/storage.ts'
        ),
        i.register(
          d,
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
          extractFileName: () => p,
          downloadFile: () => f,
        });
      var a,
        r = o('../../../node_modules/.pnpm/validator@13.7.0/node_modules/validator/lib/isEmail.js'),
        n = o.n(r),
        l = o('../../../node_modules/.pnpm/validator@13.7.0/node_modules/validator/lib/isURL.js'),
        d = o.n(l);
      o('./types/index.ts');
      (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var s, i;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function c(e) {
        return d()(e || '', {
          protocols: ['http', 'https', 'git+https'],
          require_protocol: !0,
          require_tld: !1,
        });
      }
      function u(e) {
        return n()(e || '');
      }
      function p(e) {
        return e.substring(e.lastIndexOf('/') + 1);
      }
      function m(e, t) {
        var o = e;
        return (o.lastModified = Date.now()), (o.name = t), o;
      }
      function f(e, t) {
        var o;
        o = navigator.msSaveBlob
          ? m(new Blob([e], { type: 'application/octet-stream' }), t)
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
          p,
          'extractFileName',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        s.register(
          m,
          'blobToFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        ),
        s.register(
          f,
          'downloadFile',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/url.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
    './src/utils/windows.ts': (e, t, o) => {
      'use strict';
      var a;
      o.r(t),
        o.d(t, { goToVerdaccioWebsite: () => l }),
        (e = o.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var r, n;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function l() {
        window.open('https://verdaccio.org', '_blank');
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          l,
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
