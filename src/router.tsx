/**
 * @prettier
 */

/* eslint  react/jsx-max-depth:0 */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AppContext } from './app';

import { asyncComponent } from './utils/asyncComponent';
import history from './history';
import Header from './components/Header';
import { Content } from './components/Layout';

const NotFound = asyncComponent(() => import('./components/NotFound'));
const DetailPackage = asyncComponent(() => import('./pages/detail'));
const VersionPackage = asyncComponent(() => import('./pages/version'));
const HomePage = asyncComponent(() => import('./pages/home'));

interface Props {
  onLogout: () => void;
  onToggleLoginModal: () => void;
}

const RouterApp: React.FC<Props> = ({ onLogout, onToggleLoginModal }) => {
  const renderHeader = () => (
    <AppContext.Consumer>
      {function renderConsumerVersionPage({ logoUrl, scope, user }: any) {
        return <Header logo={logoUrl} onLogout={onLogout} onToggleLoginModal={onToggleLoginModal} scope={scope} username={user.username} />;
      }}
    </AppContext.Consumer>
  );

  const renderHomePage = () => (
    <AppContext.Consumer>
      {function renderConsumerVersionPage({ isUserLoggedIn, packages }: any) {
        return <HomePage isUserLoggedIn={isUserLoggedIn} packages={packages} />;
      }}
    </AppContext.Consumer>
  );

  const renderDetailPage = (routerProps: any) => (
    <AppContext.Consumer>
      {function renderConsumerVersionPage({ isUserLoggedIn }: any) {
        return <DetailPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
      }}
    </AppContext.Consumer>
  );

  const renderVersionPage = (routerProps: any) => (
    <AppContext.Consumer>
      {function renderConsumerVersionPage({ isUserLoggedIn }: any) {
        return <VersionPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
      }}
    </AppContext.Consumer>
  );

  return (
    <Router history={history}>
      <>
        {renderHeader()}
        <Content>
          <Switch>
            <Route exact={true} path={'/'} render={renderHomePage} />
            {/* <Route exact={true} path={'/-/web/detail/@:scope/:package'} render={renderDetailPage} />
          <Route exact={true} path={'/-/web/version/@:scope/:package'} render={renderVersionPage} />
          <Route exact={true} path={'/-/web/version/:package'} render={renderVersionPage} /> */}
            <Route component={NotFound} />
          </Switch>
        </Content>
      </>
    </Router>
  );
};

export default RouterApp;
