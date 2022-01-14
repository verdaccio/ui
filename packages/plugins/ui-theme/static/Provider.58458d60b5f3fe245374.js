/*! For license information please see Provider.58458d60b5f3fe245374.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['Provider'],
  {
    './src/pages/Version/VersionContextProvider.tsx': (e, o, t) => {
      t.r(o), t.d(o, { default: () => p });
      var a,
        r = t('../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = t(
          '../node_modules/.pnpm/react-redux@7.2.6_react-dom@17.0.2+react@17.0.2/node_modules/react-redux/es/index.js'
        ),
        n = t(
          '../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        c = t('./src/pages/Version/context.ts'),
        s = t('./src/pages/Version/get-route-package-name.ts');
      (e = t.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      var i =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        u = function (e) {
          var o = e.children,
            t = (0, n.useParams)(),
            a = t.version,
            i = t.package,
            u = t.scope,
            l = (0, d.useSelector)(function (e) {
              return e.manifest;
            }),
            p = l.manifest,
            m = l.readme,
            f = l.packageName,
            g = l.hasNotBeenFound,
            v = (0, d.useSelector)(function (e) {
              var o;
              return null == e || null === (o = e.loading) || void 0 === o
                ? void 0
                : o.models.manifest;
            }),
            h = (0, d.useDispatch)();
          return (
            (0, r.useEffect)(
              function () {
                var e = (0, s.default)(i, u);
                h.manifest.getManifest({ packageName: e, packageVersion: a });
              },
              [h, a, i, u]
            ),
            r.createElement(
              c.DetailContext.Provider,
              {
                value: {
                  packageMeta: p,
                  packageVersion: a,
                  readMe: m,
                  packageName: f,
                  isLoading: v,
                  hasNotBeenFound: g,
                },
              },
              o
            )
          );
        };
      i(
        u,
        'useParams{{ version: packageVersion, package: pkgName, scope }}\nuseSelector{{ manifest, readme, packageName, hasNotBeenFound }}\nuseSelector{isLoading}\nuseDispatch{dispatch}\nuseEffect{}',
        function () {
          return [n.useParams, d.useSelector, d.useSelector, d.useDispatch];
        }
      );
      var l = u;
      const p = l;
      var m, f;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          u,
          'VersionContextProvider',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        ),
        m.register(
          l,
          'default',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/VersionContextProvider.tsx'
        )),
        (f =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          f(e);
    },
    './src/pages/Version/context.ts': (e, o, t) => {
      t.r(o),
        t.d(o, {
          DetailContext: () => c,
          DetailContextProvider: () => s,
          DetailContextConsumer: () => i,
        });
      var a,
        r = t('../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = t.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d,
        n,
        c = (0, r.createContext)({}),
        s = c.Provider,
        i = c.Consumer;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          c,
          'DetailContext',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/context.ts'
        ),
        d.register(
          s,
          'DetailContextProvider',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/context.ts'
        ),
        d.register(
          i,
          'DetailContextConsumer',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/context.ts'
        )),
        (n =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          n(e);
    },
    './src/pages/Version/get-route-package-name.ts': (e, o, t) => {
      var a;
      t.r(o),
        t.d(o, { default: () => n }),
        (e = t.hmd(e)),
        (a =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          a(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function r(e, o) {
        return o ? '@'.concat(o, '/').concat(e) : e;
      }
      var d = r;
      const n = d;
      var c, s;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          r,
          'getRouterPackageName',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/get-route-package-name.ts'
        ),
        c.register(
          d,
          'default',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/get-route-package-name.ts'
        )),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          s(e);
    },
  },
]);
