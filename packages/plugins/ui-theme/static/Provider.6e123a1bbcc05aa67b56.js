/*! For license information please see Provider.6e123a1bbcc05aa67b56.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['Provider'],
  {
    './src/pages/Version/VersionContextProvider.tsx': (e, a, o) => {
      o.r(a), o.d(a, { default: () => p });
      var t,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        s = o(
          '../../../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        n = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        d = o('./src/pages/Version/context.ts'),
        c = o('./src/pages/Version/get-route-package-name.ts');
      (e = o.hmd(e)),
        (t =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          t(e);
      var i =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        l = function (e) {
          var a = e.children,
            o = (0, n.useParams)(),
            t = o.version,
            i = o.package,
            l = o.scope,
            u = (0, s.useSelector)(function (e) {
              return e.manifest;
            }),
            p = u.manifest,
            g = u.readme,
            m = u.packageName,
            f = u.hasNotBeenFound,
            v = (0, s.useSelector)(function (e) {
              var a;
              return null == e || null === (a = e.loading) || void 0 === a
                ? void 0
                : a.models.manifest;
            }),
            h = (0, s.useDispatch)();
          return (
            (0, r.useEffect)(
              function () {
                var e = (0, c.default)(i, l);
                h.manifest.getManifest({ packageName: e, packageVersion: t });
              },
              [h, t, i, l]
            ),
            r.createElement(
              d.DetailContext.Provider,
              {
                value: {
                  packageMeta: p,
                  packageVersion: t,
                  readMe: g,
                  packageName: m,
                  isLoading: v,
                  hasNotBeenFound: f,
                },
              },
              a
            )
          );
        };
      i(
        l,
        'useParams{{ version: packageVersion, package: pkgName, scope }}\nuseSelector{{ manifest, readme, packageName, hasNotBeenFound }}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseEffect{}',
        function () {
          return [n.useParams, s.useSelector, s.useSelector, s.useDispatch];
        }
      );
      var u = l;
      const p = u;
      var g, m;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          l,
          'VersionContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        ),
        g.register(
          u,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        )),
        (m =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          m(e);
    },
    './src/pages/Version/context.ts': (e, a, o) => {
      o.r(a),
        o.d(a, {
          DetailContext: () => d,
          DetailContextProvider: () => c,
          DetailContextConsumer: () => i,
        });
      var t,
        r = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = o.hmd(e)),
        (t =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          t(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s,
        n,
        d = (0, r.createContext)({}),
        c = d.Provider,
        i = d.Consumer;
      (s = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (s.register(
          d,
          'DetailContext',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        ),
        s.register(
          c,
          'DetailContextProvider',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        ),
        s.register(
          i,
          'DetailContextConsumer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/context.ts'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/pages/Version/get-route-package-name.ts': (e, a, o) => {
      var t;
      o.r(a),
        o.d(a, { default: () => n }),
        (e = o.hmd(e)),
        (t =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          t(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function r(e, a) {
        return a ? '@'.concat(a, '/').concat(e) : e;
      }
      var s = r;
      const n = s;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          r,
          'getRouterPackageName',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/get-route-package-name.ts'
        ),
        d.register(
          s,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/get-route-package-name.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
  },
]);
