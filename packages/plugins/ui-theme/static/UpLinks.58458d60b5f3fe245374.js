/*! For license information please see UpLinks.58458d60b5f3fe245374.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['UpLinks'],
  {
    './src/pages/Version/DetailContainer/NoItems/NoItems.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var o,
        r = a('../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var s = function (e) {
          var t = e.className,
            a = e.text;
          return r.createElement(
            n.default,
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
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/NoItems/NoItems.tsx'
        ),
        d.register(
          i,
          'default',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/NoItems/NoItems.tsx'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/pages/Version/DetailContainer/NoItems/index.ts': (e, t, a) => {
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/NoItems/NoItems.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => v });
      var o,
        r = a('../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = a(
          '../node_modules/.pnpm/react-i18next@11.15.3_ad209b3ec0793904285d43906e66750b/node_modules/react-i18next/dist/es/useTranslation.js'
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
      var p =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        m = function () {
          var e = (0, r.useContext)(d.DetailContext).packageMeta,
            t = (0, n.useTranslation)().t;
          if (!e || !e._uplinks || !e.latest) return null;
          var a = e._uplinks,
            o = e.latest;
          return 0 === Object.keys(a).length
            ? r.createElement(c.default, { text: t('uplinks.no-items', { name: o.name }) })
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(u.StyledText, { variant: 'subtitle1' }, t('uplinks.title')),
                r.createElement(
                  s.default,
                  null,
                  Object.keys(a)
                    .reverse()
                    .map(function (e) {
                      return r.createElement(
                        i.default,
                        { key: e },
                        r.createElement(u.ListItemText, null, e),
                        r.createElement(u.Spacer, null),
                        r.createElement(
                          u.ListItemText,
                          null,
                          (0, l.formatDateDistance)(a[e].fetched)
                        )
                      );
                    })
                )
              );
        };
      p(m, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [n.useTranslation];
      });
      var f = m;
      const v = f;
      var L, b;
      (L = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (L.register(
          m,
          'UpLinks',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx'
        ),
        L.register(
          f,
          'default',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx'
        )),
        (b =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          b(e);
    },
    './src/pages/Version/DetailContainer/UpLinks/index.ts': (e, t, a) => {
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/styles.ts': (e, t, a) => {
      a.r(t), a.d(t, { StyledText: () => d, Spacer: () => c, ListItemText: () => u });
      var o,
        r = a(
          '../node_modules/.pnpm/@emotion+styled@11.6.0_023218a630dedcfdc5aa065bf93ff9d7/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = a('./src/components/ListItemText.tsx'),
        s = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var i,
        l,
        d = (0, r.default)(s.default, { target: 'e1lovynm2' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        c = (0, r.default)('div', { target: 'e1lovynm1' })(function (e) {
          var t = e.theme;
          return {
            flex: '1 1 auto',
            borderBottom: '1px dotted '.concat(
              'light' == (null == t ? void 0 : t.palette.mode)
                ? 'rgba(0, 0, 0, 0.2)'
                : 'rgba(255, 255, 255, 0.2)',
              ' '
            ),
            whiteSpace: 'nowrap',
            height: '0.5em',
          };
        }, ''),
        u = (0, r.default)(n.default, { target: 'e1lovynm0' })(function (e) {
          var t = e.theme;
          return {
            flex: 'none',
            color:
              'light' == (null == t ? void 0 : t.palette.mode)
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
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        i.register(
          c,
          'Spacer',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        i.register(
          u,
          'ListItemText',
          '/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        )),
        (l =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          l(e);
    },
  },
]);
