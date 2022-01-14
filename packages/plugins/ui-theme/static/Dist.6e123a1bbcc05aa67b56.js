/*! For license information please see Dist.6e123a1bbcc05aa67b56.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['Dist'],
  {
    './src/components/Chip.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => n });
      var o,
        r = a(
          '../../../node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js'
        ),
        i = a(
          '../../../node_modules/.pnpm/@mui+material@5.0.6_033766d34292bd5d464212fd95cb4b6d/node_modules/@mui/material/Chip/Chip.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var d = (0, s.forwardRef)(function (e, t) {
          return s.createElement(i.default, (0, r.default)({}, e, { innerRef: t }));
        }),
        l = d;
      const n = l;
      var c, u;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          d,
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
    './src/pages/Version/DetailSidebar/Dist/Dist.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => b });
      var o,
        r = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        i = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = a('./src/components/List.tsx'),
        d = a('./src/utils/file-size.ts'),
        l = a('./src/utils/package.ts'),
        n = a('./src/pages/Version/context.ts'),
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
        p = function (e) {
          var t = e.name,
            a = e.children;
          return a
            ? r.createElement(c.DistChips, {
                label: r.createElement(r.Fragment, null, r.createElement('b', null, t), ': ', a),
              })
            : null;
        },
        m = function () {
          var e = (0, r.useContext)(n.DetailContext).packageMeta,
            t = (0, i.useTranslation)().t;
          if (!e) return null;
          var a = e && e.latest,
            o = a.dist,
            u = a.license;
          return r.createElement(
            s.default,
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
              r.createElement(p, { name: t('sidebar.distribution.file-count') }, o.fileCount),
              r.createElement(
                p,
                { name: t('sidebar.distribution.size') },
                o.unpackedSize && (0, d.default)(o.unpackedSize)
              ),
              r.createElement(
                p,
                { name: t('sidebar.distribution.license') },
                (0, l.formatLicense)(u)
              )
            )
          );
        };
      u(m, 'useContext{{ packageMeta }}\nuseTranslation{{ t }}', function () {
        return [i.useTranslation];
      });
      var f = m;
      const b = f;
      var g, h;
      (g = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (g.register(
          p,
          'DistChip',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/Dist.tsx'
        ),
        g.register(
          m,
          'Dist',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/Dist.tsx'
        ),
        g.register(
          f,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/Dist.tsx'
        )),
        (h =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          h(e);
    },
    './src/pages/Version/DetailSidebar/Dist/index.ts': (e, t, a) => {
      a.r(t), a.d(t, { default: () => o.default });
      var o = a('./src/pages/Version/DetailSidebar/Dist/Dist.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Dist/styles.ts': (e, t, a) => {
      a.r(t),
        a.d(t, {
          StyledText: () => u,
          DistListItem: () => p,
          DistChips: () => m,
          DownloadButton: () => f,
        });
      var o,
        r = a(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_3d8bae71cea7a7ccc2d524c8303aad06/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        i = a('./src/components/Chip.tsx'),
        s = a('./src/components/FloatingActionButton.tsx'),
        d = a('./src/components/ListItem.tsx'),
        l = a('./src/components/Text/index.ts');
      (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      var n,
        c,
        u = (0, r.default)(l.default, { target: 'emhg1mg3', label: 'StyledText' })(function (e) {
          return { fontWeight: e.theme && e.theme.fontWeight.bold, textTransform: 'capitalize' };
        }, ''),
        p = (0, r.default)(d.default, { target: 'emhg1mg2', label: 'DistListItem' })({
          name: '8a1gtu',
          styles: 'padding-left:0;padding-right:0;flex-wrap:wrap',
        }),
        m = (0, r.default)(i.default, { target: 'emhg1mg1', label: 'DistChips' })({
          name: '186t8fy',
          styles: 'margin-right:5px;text-transform:capitalize;margin-top:5px',
        }),
        f = (0, r.default)(s.default, { target: 'emhg1mg0', label: 'DownloadButton' })(function (
          e
        ) {
          return {
            backgroundColor: e.theme && e.theme.palette.primary.main,
            color: e.theme && e.theme.palette.white,
          };
        },
        '');
      (n = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (n.register(
          u,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        n.register(
          p,
          'DistListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        n.register(
          m,
          'DistChips',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        ),
        n.register(
          f,
          'DownloadButton',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Dist/styles.ts'
        )),
        (c =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          c(e);
    },
    './src/utils/file-size.ts': (e, t, a) => {
      var o;
      a.r(t),
        a.d(t, { default: () => s }),
        (e = a.hmd(e)),
        (o =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          o(e);
      var r, i;
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
      function s(e, t, a, o, r) {
        return (
          ((t = Math), (a = t.log), 1e3, (r = (a(e) / a(1e3)) | 0), e / t.pow(1e3, r)).toFixed(2) +
          ' ' +
          (r ? 'kMGTPEZY'[--r] + 'B' : 'Bytes')
        );
      }
      (r = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        r.register(
          s,
          'fileSizeSI',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/utils/file-size.ts'
        ),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          i(e);
    },
  },
]);
