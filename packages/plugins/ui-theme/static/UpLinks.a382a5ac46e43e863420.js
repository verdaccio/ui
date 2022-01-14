/*! For license information please see UpLinks.a382a5ac46e43e863420.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['UpLinks'],
  {
    './src/pages/Version/DetailContainer/NoItems/NoItems.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var o,
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
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
        l = s;
      const i = l;
      var d, c;
      (d = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (d.register(
          s,
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
    './src/pages/Version/DetailContainer/NoItems/index.ts': (e, t, a) => {
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailContainer/NoItems/NoItems.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => g });
      var o,
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        n = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/List.tsx'),
        l = a('./src/components/ListItem.tsx'),
        i = a('./src/utils/package.ts'),
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
                        l.default,
                        { key: e },
                        r.createElement(u.ListItemText, null, e),
                        r.createElement(u.Spacer, null),
                        r.createElement(
                          u.ListItemText,
                          null,
                          (0, i.formatDateDistance)(a[e].fetched)
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
      const g = f;
      var L, v;
      (L = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (L.register(
          m,
          'UpLinks',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx'
        ),
        L.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/UpLinks.tsx'
        )),
        (v =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          v(e);
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
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        n = a('./src/components/ListItemText.tsx'),
        s = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var l,
        i,
        d = (0, r.default)(s.default, { target: 'e1lovynm2', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
          };
        }, ''),
        c = (0, r.default)('div', { target: 'e1lovynm1', label: 'Spacer' })(function (e) {
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
        u = (0, r.default)(n.default, { target: 'e1lovynm0', label: 'ListItemText' })(function (e) {
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
      (l = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (l.register(
          d,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        l.register(
          c,
          'Spacer',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        ),
        l.register(
          u,
          'ListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailContainer/UpLinks/styles.ts'
        )),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
  },
]);
