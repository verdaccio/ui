/*! For license information please see NotFound.6e123a1bbcc05aa67b56.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['NotFound'],
  {
    './src/components/NotFound/NotFound.tsx': (e, t, o) => {
      o.r(t), o.d(t, { default: () => p });
      var a,
        n = o(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_3d8bae71cea7a7ccc2d524c8303aad06/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        i = o('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        d = o(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        s = o(
          '../../../node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js'
        ),
        r = o('./src/components/Box.tsx'),
        c = o('./src/components/Button.tsx'),
        u = o('./src/components/Heading.tsx'),
        l = o('./src/components/NotFound/img/package.svg');
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
        g = function () {
          var e = (0, s.useHistory)(),
            t = (0, d.useTranslation)().t,
            o = (0, i.useCallback)(
              function () {
                e.push('/');
              },
              [e]
            );
          return i.createElement(
            r.default,
            {
              alignItems: 'center',
              'data-testid': '404',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'center',
              p: 2,
            },
            i.createElement(M, { alt: t('error.404.page-not-found'), src: l }),
            i.createElement(
              y,
              { className: 'not-found-text', variant: 'h4' },
              t('error.404.sorry-we-could-not-find-it')
            ),
            i.createElement(
              c.default,
              { 'data-testid': 'not-found-go-to-home-button', onClick: o, variant: 'contained' },
              t('button.go-to-the-home-page')
            )
          );
        };
      m(g, 'useHistory{history}\nuseTranslation{{ t }}\nuseCallback{handleGoHome}', function () {
        return [s.useHistory, d.useTranslation];
      });
      var N = g;
      const p = N;
      var I,
        j,
        M = (0, n.default)('img', { target: 'e11qlk1z1', label: 'EmptyPackage' })({
          name: '178ibc5',
          styles: 'width:150px;margin:0 auto',
        }),
        y = (0, n.default)(u.default, { target: 'e11qlk1z0', label: 'StyledHeading' })(function (
          e
        ) {
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
            marginBottom: 16,
          };
        },
        '');
      (I = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (I.register(
          g,
          'NotFound',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        I.register(
          M,
          'EmptyPackage',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        I.register(
          y,
          'StyledHeading',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        ),
        I.register(
          N,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/components/NotFound/NotFound.tsx'
        )),
        (j =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          j(e);
    },
    './src/components/NotFound/index.ts': (e, t, o) => {
      o.r(t), o.d(t, { default: () => a.default });
      var a = o('./src/components/NotFound/NotFound.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/components/NotFound/img/package.svg': (e) => {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTUuMiA0OTUuMiI+PHBhdGggZmlsbD0iI2QzOGMwZCIgZD0iTTMyNS42IDIyNC40TDQ5NS4yIDEyNiAzMjUuNiAyOC40bC0xNjguOCA5OS4yeiIvPjxnIGZpbGw9IiNlZmJiNjciPjxwYXRoIGQ9Ik0xNzAuNCAyMjQuNGwxNjgtOTcuNi0xNjgtOTguNEwwIDEyNi44eiIvPjxwYXRoIGQ9Ik00MTYgMzY4LjRsLTE2OCA5OC40LTE2OC05OC40di0xOTZMMjQ4IDc0bDE2OCA5OC40eiIvPjwvZz48cGF0aCBmaWxsPSIjZDM4YzBkIiBkPSJNMjQ4IDc0bDE2OCA5OC40djE5NmwtMTY4IDk4LjQiLz48cGF0aCBmaWxsPSIjZWZiYjY3IiBkPSJNMzI2LjQgMzE0LjhMNDk1LjIgMjE4bC0xNjkuNi05OC40TDE1NiAyMTh6Ii8+PHBhdGggZmlsbD0iI2QzOGMwZCIgZD0iTTE3MC40IDMxNi40bDE2OC44LTk5LjItMTY4LjgtOTcuNkwwIDIxOHoiLz48cGF0aCBmaWxsPSIjNzA0YTBlIiBkPSJNMjQ4LjggMjcwLjhMNDE2IDE3Mi40IDI0OC44IDc0IDc4LjQgMTcyLjR6Ii8+PHBhdGggZmlsbD0iIzUxMzMwNyIgZD0iTTI0OC44IDI3MC44TDQxNiAxNzIuNCAyNDguOCA3NCIvPjxwYXRoIGZpbGw9IiMyZDFjMDUiIGQ9Ik0yNDguOCAyNzAuOGwzNi0yMS42LTM2LTIwLjgtMzYgMjAuOHoiLz48ZyBmaWxsPSIjMGRkMzk2Ij48cGF0aCBkPSJNMzY4IDM3OS42bDQwLTIzLjJ2LTEyLjhsLTQwIDIzLjJ6TTM2OCAzNTYuNGw0MC0yMy4ydi0xMi44bC00MCAyMy4yek0zNjggMzMzLjJsNDAtMjMuMnYtMTMuNmwtNDAgMjR6Ii8+PC9nPjwvc3ZnPg==';
    },
  },
]);
