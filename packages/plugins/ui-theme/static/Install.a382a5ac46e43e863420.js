/*! For license information please see Install.a382a5ac46e43e863420.js.LICENSE.txt */
'use strict';
(self.webpackChunk_verdaccio_ui_theme = self.webpackChunk_verdaccio_ui_theme || []).push([
  ['Install'],
  {
    './src/pages/Version/DetailSidebar/Install/Install.tsx': (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      var i,
        M = a(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        I = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        n = a('./src/components/List.tsx'),
        l = a('./src/components/Text/index.ts'),
        L = a('./src/providers/config/index.ts'),
        u = a('./src/pages/Version/index.ts'),
        j = a('./src/pages/Version/DetailSidebar/Install/InstallListItem.tsx');
      (e = a.hmd(e)),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          i(e);
      var g =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        r = (0, M.default)(l.default, { target: 'exr63xd0', label: 'StyledText' })(function (e) {
          var t;
          return {
            fontWeight: null === (t = e.theme) || void 0 === t ? void 0 : t.fontWeight.bold,
            textTransform: 'capitalize',
          };
        }, ''),
        N = function () {
          var e,
            t,
            a,
            i,
            M = (0, I.useTranslation)().t,
            l = (0, L.useConfig)().configOptions,
            g = (0, s.useContext)(u.DetailContext),
            N = g.packageMeta,
            d = g.packageName;
          if (!N || !d) return null;
          var o =
              null == l || null === (e = l.pkgManagers) || void 0 === e
                ? void 0
                : e.includes('npm'),
            c =
              null == l || null === (t = l.pkgManagers) || void 0 === t
                ? void 0
                : t.includes('yarn'),
            y =
              null ===
                (a =
                  null == l || null === (i = l.pkgManagers) || void 0 === i
                    ? void 0
                    : i.includes('pnpm')) ||
              void 0 === a ||
              a;
          return o | y | c
            ? s.createElement(
                n.default,
                {
                  'data-testid': 'installList',
                  subheader: s.createElement(
                    r,
                    { variant: 'subtitle1' },
                    M('sidebar.installation.title')
                  ),
                },
                o &&
                  s.createElement(j.default, {
                    dependencyManager: j.DependencyManager.NPM,
                    packageName: d,
                  }),
                c &&
                  s.createElement(j.default, {
                    dependencyManager: j.DependencyManager.YARN,
                    packageName: d,
                  }),
                y &&
                  s.createElement(j.default, {
                    dependencyManager: j.DependencyManager.PNPM,
                    packageName: d,
                  })
              )
            : null;
        };
      g(
        N,
        'useTranslation{{ t }}\nuseConfig{{ configOptions }}\nuseContext{detailContext}',
        function () {
          return [I.useTranslation, L.useConfig];
        }
      );
      var d = N;
      const o = d;
      var c, y;
      (c = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (c.register(
          r,
          'StyledText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        ),
        c.register(
          N,
          'Install',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        ),
        c.register(
          d,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/Install.tsx'
        )),
        (y =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          y(e);
    },
    './src/pages/Version/DetailSidebar/Install/InstallListItem.tsx': (e, t, a) => {
      a.r(t), a.d(t, { DependencyManager: () => N, default: () => x });
      var i,
        M = a(
          '../../../node_modules/.pnpm/@emotion+styled@11.3.0_e7204ebcf00e81fee75ee97be46f9738/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js'
        ),
        s = a('../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'),
        I = a(
          '../../../node_modules/.pnpm/react-i18next@11.12.0_i18next@20.6.1+react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        n = a('./src/components/Avatar.tsx'),
        l = a('./src/components/CopyToClipBoard.tsx'),
        L = a('./src/components/ListItem.tsx'),
        u = a('./src/components/ListItemText.tsx'),
        j = a('./src/pages/Version/DetailSidebar/Install/img/npm.svg'),
        g = a('./src/pages/Version/DetailSidebar/Install/img/pnpm.svg'),
        r = a('./src/pages/Version/DetailSidebar/Install/img/yarn.svg');
      (e = a.hmd(e)),
        (i =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0) &&
          i(e);
      var N,
        d =
          'undefined' != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default.signature
            : function (e) {
                return e;
              },
        o = (0, M.default)(L.default, { target: 'e1sfautt2', label: 'InstallItem' })({
          name: 'zw46c6',
          styles: 'padding:0;:hover{background-color:transparent;}',
        }),
        c = (0, M.default)(u.default, { target: 'e1sfautt1', label: 'InstallListItemText' })({
          name: '1o2edpc',
          styles: 'padding:0 10px;margin:0',
        }),
        y = (0, M.default)(n.default, { target: 'e1sfautt0', label: 'PackageMangerAvatar' })({
          name: '17x0n9v',
          styles: 'border-radius:0px;padding:0;img{background-color:transparent;}',
        });
      !(function (e) {
        (e.NPM = 'npm'), (e.YARN = 'yarn'), (e.PNPM = 'pnpm');
      })(N || (N = {}));
      var T = function (e) {
        var t = e.packageName,
          a = e.dependencyManager,
          i = (0, I.useTranslation)().t;
        switch (a) {
          case N.NPM:
            return s.createElement(
              o,
              { button: !0, 'data-testid': 'installListItem-npm' },
              s.createElement(y, { alt: 'npm', src: j }),
              s.createElement(c, {
                primary: s.createElement(l.default, {
                  text: i('sidebar.installation.install-using-npm-command', { packageName: t }),
                }),
                secondary: i('sidebar.installation.install-using-npm'),
              })
            );
          case N.YARN:
            return s.createElement(
              o,
              { button: !0, 'data-testid': 'installListItem-yarn' },
              s.createElement(y, { alt: 'yarn', src: r }),
              s.createElement(c, {
                primary: s.createElement(l.default, {
                  text: i('sidebar.installation.install-using-yarn-command', { packageName: t }),
                }),
                secondary: i('sidebar.installation.install-using-yarn'),
              })
            );
          case N.PNPM:
            return s.createElement(
              o,
              { button: !0, 'data-testid': 'installListItem-pnpm' },
              s.createElement(y, { alt: 'pnpm', src: g }),
              s.createElement(c, {
                primary: s.createElement(l.default, {
                  text: i('sidebar.installation.install-using-pnpm-command', { packageName: t }),
                }),
                secondary: i('sidebar.installation.install-using-pnpm'),
              })
            );
          default:
            return null;
        }
      };
      d(T, 'useTranslation{{ t }}', function () {
        return [I.useTranslation];
      });
      var D = T;
      const x = D;
      var m, p;
      (m = 'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0) &&
        (m.register(
          o,
          'InstallItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        m.register(
          c,
          'InstallListItemText',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        m.register(
          y,
          'PackageMangerAvatar',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        m.register(
          T,
          'InstallListItem',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        ),
        m.register(
          D,
          'default',
          '/home/jpicado/projects/verdaccio/packages/plugins/ui-theme/src/pages/Version/DetailSidebar/Install/InstallListItem.tsx'
        )),
        (p =
          'undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0) &&
          p(e);
    },
    './src/pages/Version/DetailSidebar/Install/index.ts': (e, t, a) => {
      a.r(t), a.d(t, { default: () => i.default });
      var i = a('./src/pages/Version/DetailSidebar/Install/Install.tsx');
      'undefined' != typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
    },
    './src/pages/Version/DetailSidebar/Install/img/npm.svg': (e) => {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cjxwb2x5Z29uIGZpbGw9IiNDQzAwMDAiIHBvaW50cz0iMjMsNjUuNiAxMzAsMy4zIDIzNyw2NS42IDIzNywxOTAuMSAxMzAsMjUyLjQgMjMsMTkwLjEgIi8+Cjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTMzLDEyNy44IDIzMi41LDcwLjUgMjM2LjUsMTg2IDEzMywyNDguNSAiLz4KPGc+Cgk8cGF0aCBmaWxsPSIjQ0MwMDAwIiBkPSJNMjM0LDY3bC0wLjMsMTIyLjRsLTEwMy44LDYwLjJsLTAuNS0xMjAuM0wyMzQsNjd6IE0xNDYuNywxMzkuM2wwLjMsODAuNGwzNC41LTIwLjFsLTAuMS02MC42bDE3LjQtMTAuMwoJCWwwLDYwLjhsMTcuNC0xMC4ybDAuMS04MS40TDE0Ni43LDEzOS4zeiIvPgo8L2c+CjxwYXRoIGZpbGw9IiM5MTA1MDUiIGQ9Ik0xMzYuOCw0LjJjLTQuOC0yLjctMTIuNS0yLjctMTcuMywwTDI0LjcsNTguN2MtNC44LDIuNy04LjYsOS41LTguNiwxNC45djEwOWMwLDUuNSwzLjksMTIuMiw4LjYsMTQuOQoJbDk0LjgsNTQuNWM0LjgsMi43LDEyLjUsMi43LDE3LjMsMGw5NC44LTU0LjVjNC44LTIuNyw4LjYtOS41LDguNi0xNC45di0xMDljMC01LjUtMy45LTEyLjItOC42LTE0LjlMMTM2LjgsNC4yeiBNMjIwLjksNjEuMgoJYzQuOCwyLjcsNC44LDcuMiwwLDkuOWwtODMsNDcuN2MtNC44LDIuNy0xMi41LDIuNy0xNy4zLDBMMzYuNCw3MC40Yy00LjgtMi43LTQuOC03LjIsMC05LjlsODMtNDcuN2M0LjgtMi43LDEyLjUtMi43LDE3LjMsMAoJTDIyMC45LDYxLjJ6IE0yMy41LDgxLjVjMC01LjUsMy45LTcuNyw4LjYtNWw4NC45LDQ4LjhjNC44LDIuNyw4LjYsOS41LDguNiwxNC45VjIzN2MwLDUuNS0zLjksNy43LTguNiw1bC04NC45LTQ4LjgKCWMtNC44LTIuNy04LjYtOS41LTguNi0xNC45VjgxLjV6IE0xNDEuOCwyNDAuNWMtNC44LDIuNy04LjYsMC41LTguNi01di05NS4zYzAtNS41LDMuOS0xMi4yLDguNi0xNC45TDIyNC4yLDc4CgljNC44LTIuNyw4LjYtMC41LDguNiw1djk1LjNjMCw1LjUtMy45LDEyLjItOC42LDE0LjlMMTQxLjgsMjQwLjV6Ii8+Cjwvc3ZnPgo=';
    },
    './src/pages/Version/DetailSidebar/Install/img/pnpm.svg': (e) => {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjY2LjA5MTU3ODA5NDc0MTQyIDMzLjUgMTg0LjUgMTg0LjQ5OTk5OTk5OTk5OTk3IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PHBhdGggZD0iTTY3LjU5IDM1TDI0Ny41OSAzNUwyNDcuNTkgMjE1TDY3LjU5IDIxNUw2Ny41OSAzNVoiIGlkPSJiMkpaWmNBM2ZUIj48L3BhdGg+PHBhdGggZD0iTTIzNy42IDk1TDE4Ny42IDk1TDE4Ny42IDQ1TDIzNy42IDQ1TDIzNy42IDk1WiIgaWQ9ImJqMHRiMFk4cSI+PC9wYXRoPjxwYXRoIGQ9Ik0xODIuNTkgOTVMMTMyLjU5IDk1TDEzMi41OSA0NUwxODIuNTkgNDVMMTgyLjU5IDk1WiIgaWQ9ImRrRFNUelBqMyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjcuNTkgOTVMNzcuNTkgOTVMNzcuNTkgNDVMMTI3LjU5IDQ1TDEyNy41OSA5NVoiIGlkPSJhNHZOZGNOTHBGIj48L3BhdGg+PHBhdGggZD0iTTIzNy42IDE1MEwxODcuNiAxNTBMMTg3LjYgMTAwTDIzNy42IDEwMEwyMzcuNiAxNTBaIiBpZD0iaDJ0NFpqMWpTVSI+PC9wYXRoPjxwYXRoIGQ9Ik0xODIuNTkgMTUwTDEzMi41OSAxNTBMMTMyLjU5IDEwMEwxODIuNTkgMTAwTDE4Mi41OSAxNTBaIiBpZD0iYjR0NXBuZ3d2VCI+PC9wYXRoPjxwYXRoIGQ9Ik0xODIuNTkgMjA1TDEzMi41OSAyMDVMMTMyLjU5IDE1NUwxODIuNTkgMTU1TDE4Mi41OSAyMDVaIiBpZD0iYjlzMWdkNW0yIj48L3BhdGg+PHBhdGggZD0iTTIzNy42IDIwNUwxODcuNiAyMDVMMTg3LjYgMTU1TDIzNy42IDE1NUwyMzcuNiAyMDVaIiBpZD0iY210OVdMdno3Ij48L3BhdGg+PHBhdGggZD0iTTEyNy41OSAyMDVMNzcuNTkgMjA1TDc3LjU5IDE1NUwxMjcuNTkgMTU1TDEyNy41OSAyMDVaIiBpZD0iYkpVTnFnRlNnIj48L3BhdGg+PC9kZWZzPjxnPjxnPjx1c2UgeGxpbms6aHJlZj0iI2IySlpaY0EzZlQiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2JqMHRiMFk4cSIgb3BhY2l0eT0iMSIgZmlsbD0iI2Y5YWQwMCIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjZGtEU1R6UGozIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhNHZOZGNOTHBGIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNoMnQ0WmoxalNVIiBvcGFjaXR5PSIxIiBmaWxsPSIjZjlhZDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiNHQ1cG5nd3ZUIiBvcGFjaXR5PSIxIiBmaWxsPSIjNGU0ZTRlIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiOXMxZ2Q1bTIiIG9wYWNpdHk9IjEiIGZpbGw9IiM0ZTRlNGUiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2NtdDlXTHZ6NyIgb3BhY2l0eT0iMSIgZmlsbD0iIzRlNGU0ZSIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjYkpVTnFnRlNnIiBvcGFjaXR5PSIxIiBmaWxsPSIjNGU0ZTRlIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48L2c+PC9zdmc+';
    },
    './src/pages/Version/DetailSidebar/Install/img/yarn.svg': (e) => {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTE4IDUxOCI+PHN0eWxlPi5zdDB7ZmlsbDojMmM4ZWJifS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OSAwYzE0MyAwIDI1OSAxMTYgMjU5IDI1OVM0MDIgNTE4IDI1OSA1MTggMCA0MDIgMCAyNTkgMTE2IDAgMjU5IDB6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTQzNS4yIDMzNy41Yy0xLjgtMTQuMi0xMy44LTI0LTI5LjItMjMuOC0yMyAuMy00Mi4zIDEyLjItNTUuMSAyMC4xLTUgMy4xLTkuMyA1LjQtMTMgNy4xLjgtMTEuNi4xLTI2LjgtNS45LTQzLjUtNy4zLTIwLTE3LjEtMzIuMy0yNC4xLTM5LjQgOC4xLTExLjggMTkuMi0yOSAyNC40LTU1LjYgNC41LTIyLjcgMy4xLTU4LTcuMi03Ny44LTIuMS00LTUuNi02LjktMTAtOC4xLTEuOC0uNS01LjItMS41LTExLjkuNEMyOTMuMSA5NiAyODkuNiA5My44IDI4Ni45IDkyYy01LjYtMy42LTEyLjItNC40LTE4LjQtMi4xLTguMyAzLTE1LjQgMTEtMjIuMSAyNS4yLTEgMi4xLTEuOSA0LjEtMi43IDYuMS0xMi43LjktMzIuNyA1LjUtNDkuNiAyMy44LTIuMSAyLjMtNi4yIDQtMTAuNSA1LjZoLjFjLTguOCAzLjEtMTIuOCAxMC4zLTE3LjcgMjMuMy02LjggMTguMi4yIDM2LjEgNy4xIDQ3LjctOS40IDguNC0yMS45IDIxLjgtMjguNSAzNy41LTguMiAxOS40LTkuMSAzOC40LTguOCA0OC43LTcgNy40LTE3LjggMjEuMy0xOSAzNi45LTEuNiAyMS44IDYuMyAzNi42IDkuOCA0MiAxIDEuNiAyLjEgMi45IDMuMyA0LjItLjQgMi43LS41IDUuNi4xIDguNiAxLjMgNyA1LjcgMTIuNyAxMi40IDE2LjMgMTMuMiA3IDMxLjYgMTAgNDUuOCAyLjkgNS4xIDUuNCAxNC40IDEwLjYgMzEuMyAxMC42aDFjNC4zIDAgNTguOS0yLjkgNzQuOC02LjggNy4xLTEuNyAxMi00LjcgMTUuMi03LjQgMTAuMi0zLjIgMzguNC0xMi44IDY1LTMwIDE4LjgtMTIuMiAyNS4zLTE0LjggMzkuMy0xOC4yIDEzLjYtMy4zIDIyLjEtMTUuNyAyMC40LTI5LjR6bS0yMy44IDE0LjdjLTE2IDMuOC0yNC4xIDcuMy00My45IDIwLjItMzAuOSAyMC02NC43IDI5LjMtNjQuNyAyOS4zcy0yLjggNC4yLTEwLjkgNi4xYy0xNCAzLjQtNjYuNyA2LjMtNzEuNSA2LjQtMTIuOS4xLTIwLjgtMy4zLTIzLTguNi02LjctMTYgOS42LTIzIDkuNi0yM3MtMy42LTIuMi01LjctNC4yYy0xLjktMS45LTMuOS01LjctNC41LTQuMy0yLjUgNi4xLTMuOCAyMS0xMC41IDI3LjctOS4yIDkuMy0yNi42IDYuMi0zNi45LjgtMTEuMy02IC44LTIwLjEuOC0yMC4xcy02LjEgMy42LTExLTMuOGMtNC40LTYuOC04LjUtMTguNC03LjQtMzIuNyAxLjItMTYuMyAxOS40LTMyLjEgMTkuNC0zMi4xcy0zLjItMjQuMSA3LjMtNDguOGM5LjUtMjIuNSAzNS4xLTQwLjYgMzUuMS00MC42cy0yMS41LTIzLjgtMTMuNS00NS4yYzUuMi0xNCA3LjMtMTMuOSA5LTE0LjUgNi0yLjMgMTEuOC00LjggMTYuMS05LjUgMjEuNS0yMy4yIDQ4LjktMTguOCA0OC45LTE4LjhzMTMtMzkuNSAyNS0zMS44YzMuNyAyLjQgMTcgMzIgMTcgMzJzMTQuMi04LjMgMTUuOC01LjJjOC42IDE2LjcgOS42IDQ4LjYgNS44IDY4LTYuNCAzMi0yMi40IDQ5LjItMjguOCA2MC0xLjUgMi41IDE3LjIgMTAuNCAyOSA0My4xIDEwLjkgMjkuOSAxLjIgNTUgMi45IDU3LjguMy41LjQuNy40LjdzMTIuNSAxIDM3LjYtMTQuNWMxMy40LTguMyAyOS4zLTE3LjYgNDcuNC0xNy44IDE3LjUtLjMgMTguNCAyMC4yIDUuMiAyMy40eiIvPjwvc3ZnPg==';
    },
  },
]);
