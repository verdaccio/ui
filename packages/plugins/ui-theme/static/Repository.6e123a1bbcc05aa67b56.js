/*! For license information please see Repository.6e123a1bbcc05aa67b56.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['Repository'],
  {
    './src/pages/Version/DetailSidebar/Repository/Repository.tsx': (e, t, A) => {
      A.r(t), A.d(t, { default: () => b });
      var s,
        r = A(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_3d8bae71cea7a7ccc2d524c8303aad06/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        o = A('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        a = A(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        i = A('./src/components/Avatar.tsx'),
        n = A('./src/components/CopyToClipBoard.tsx'),
        c = A('./src/components/Link.tsx'),
        p = A('./src/components/List.tsx'),
        l = A('./src/components/ListItem.tsx'),
        P = A('./src/components/ListItemText.tsx'),
        d = A('./src/components/Text/index.ts'),
        u = A('./src/utils/url.ts'),
        g = A('./src/pages/Version/context.ts'),
        B = A('./src/pages/Version/DetailSidebar/Repository/img/git.png');
      (e = A.hmd(e)),
        (s =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          s(e);
      var f =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        D = (0, r.default)(d.default, { target: 'e7tnhe54', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        m = (0, r.default)(c.default, { target: 'e7tnhe53', label: 'GithubLink' })(function (e) {
          var t = e.theme;
          return {
            color:
              'light' === (null == t ? void 0 : t.palette.mode)
                ? null == t
                  ? void 0
                  : t.palette.primary.main
                : null == t
                ? void 0
                : t.palette.white,
            ':hover': { color: null == t ? void 0 : t.palette.dodgerBlue },
          };
        }, ''),
        w = (0, r.default)(l.default, { target: 'e7tnhe52', label: 'RepositoryListItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        v = (0, r.default)(P.default, { target: 'e7tnhe51', label: 'RepositoryListItemText' })({
          name: '1o2edpc',
          styles: 'padding:0 10px;margin:0',
        }),
        y = (0, r.default)(i.default, { target: 'e7tnhe50', label: 'RepositoryAvatar' })({
          name: '17x0n9v',
          styles: 'border-radius:0px;padding:0;img{background-color:transparent;}',
        }),
        x = function () {
          var e,
            t,
            A = o.useContext(g.DetailContext),
            s = (0, a.useTranslation)().t,
            r = A.packageMeta;
          if (
            null == r ||
            null === (e = r.latest) ||
            void 0 === e ||
            null === (t = e.repository) ||
            void 0 === t ||
            !t.url ||
            !(0, u.isURL)(r.latest.repository.url)
          )
            return null;
          var i = r.latest.repository.url,
            c = i.includes('git+') ? i.split('git+')[1] : i;
          return o.createElement(
            p.default,
            {
              dense: !0,
              subheader: o.createElement(
                D,
                { variant: 'subtitle1' },
                s('sidebar.repository.title')
              ),
            },
            o.createElement(
              w,
              { button: !0 },
              o.createElement(y, { src: B }),
              o.createElement(v, {
                primary: o.createElement(
                  n.default,
                  { text: c },
                  o.createElement(m, { external: !0, to: c }, c)
                ),
              })
            )
          );
        };
      f(x, 'useContext{detailContext}\nuseTranslation{{ t }}', function () {
        return [a.useTranslation];
      });
      var h = x;
      const b = h;
      var j, C;
      (j = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (j.register(
          D,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        j.register(
          m,
          'GithubLink',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        j.register(
          w,
          'RepositoryListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        j.register(
          v,
          'RepositoryListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        j.register(
          y,
          'RepositoryAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        j.register(
          x,
          'Repository',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        ),
        j.register(
          h,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Repository/Repository.tsx'
        )),
        (C =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          C(e);
    },
    './src/pages/Version/DetailSidebar/Repository/index.ts': (e, t, A) => {
      A.r(t), A.d(t, { default: () => s.default });
      var s = A('./src/pages/Version/DetailSidebar/Repository/Repository.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Repository/img/git.png': (e) => {
      e.exports =
        'data:image/png;base64,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';
    },
  },
]);
