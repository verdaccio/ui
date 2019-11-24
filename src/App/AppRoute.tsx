import React, { lazy, useContext, Suspense } from 'react';
import { Route as ReactRouterDomRoute, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Loading from '../components/Loading';

import AppContext from './AppContext';

const NotFound = lazy(() => import('../components/NotFound'));
const VersionContextProvider = lazy(() => import('../pages/Version/VersionContextProvider'));
const VersionPage = lazy(() => import('../pages/Version'));
const HomePage = lazy(() => import('../pages/home'));

enum Route {
  ROOT = '/',
  SCOPE_PACKAGE = '/-/web/detail/@:scope/:package',
  SCOPE_PACKAGE_VERSION = '/-/web/detail/@:scope/:package/v/:version',
  PACKAGE = '/-/web/detail/:package',
  PACKAGE_VERSION = '/-/web/detail/:package/v/:version',
}

export const history = createBrowserHistory({
  basename: window.__VERDACCIO_BASENAME_UI_OPTIONS && window.__VERDACCIO_BASENAME_UI_OPTIONS.url_prefix,
});

/* eslint react/jsx-max-depth: 0 */
const AppRoute: React.FC = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw Error('The app Context was not correct used');
  }

  const { user, packages } = appContext;

  const isUserLoggedIn = user && user.username;

  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <ReactRouterDomRoute exact={true} path={Route.ROOT}>
            <HomePage isUserLoggedIn={!!isUserLoggedIn} packages={packages || []} />
          </ReactRouterDomRoute>
          <ReactRouterDomRoute exact={true} path={Route.PACKAGE}>
            <VersionContextProvider>
              <VersionPage />
            </VersionContextProvider>
          </ReactRouterDomRoute>
          <ReactRouterDomRoute exact={true} path={Route.PACKAGE_VERSION}>
            <VersionContextProvider>
              <VersionPage />
            </VersionContextProvider>
          </ReactRouterDomRoute>
          <ReactRouterDomRoute exact={true} path={Route.SCOPE_PACKAGE_VERSION}>
            <VersionContextProvider>
              <VersionPage />
            </VersionContextProvider>
          </ReactRouterDomRoute>
          <ReactRouterDomRoute exact={true} path={Route.SCOPE_PACKAGE}>
            <VersionContextProvider>
              <VersionPage />
            </VersionContextProvider>
          </ReactRouterDomRoute>
          <ReactRouterDomRoute>
            <NotFound />
          </ReactRouterDomRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRoute;
