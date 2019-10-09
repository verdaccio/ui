import React, { lazy, useContext, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Route as Routes } from '../routers';
import Loading from '../components/Loading';

import { AppContext } from './AppContext';

const NotFound = lazy(() => import('../components/NotFound'));
const VersionContextProvider = lazy(() => import('../pages/Version/VersionContextProvider'));
const VersionPage = lazy(() => import('../pages/Version'));
const HomePage = lazy(() => import('../pages/home'));

/* eslint react/jsx-max-depth: 0 */
const AppRoute: React.FC = () => {
  const appContext = useContext(AppContext);
  const { isUserLoggedIn, packages } = appContext;

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact={true} path={Routes.ROOT}>
          <HomePage isUserLoggedIn={!!isUserLoggedIn} packages={packages || []} />
        </Route>
        <Route exact={true} path={Routes.PACKAGE}>
          <VersionContextProvider>
            <VersionPage />
          </VersionContextProvider>
        </Route>
        <Route exact={true} path={Routes.PACKAGE_VERSION}>
          <VersionContextProvider>
            <VersionPage />
          </VersionContextProvider>
        </Route>
        <Route exact={true} path={Routes.SCOPE_PACKAGE_VERSION}>
          <VersionContextProvider>
            <VersionPage />
          </VersionContextProvider>
        </Route>
        <Route exact={true} path={Routes.SCOPE_PACKAGE}>
          <VersionContextProvider>
            <VersionPage />
          </VersionContextProvider>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoute;
