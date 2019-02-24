/**
 * @prettier
 */

/* eslint  react/jsx-max-depth:0 */

import React from 'react';
import { Router, Route, Switch, BrowserRouterProps } from 'react-router-dom';
import { AppContext } from './app';

import { asyncComponent } from './utils/asyncComponent';
import history from './history';
import Header from './components/Header/Header';
import HomePage from './pages/home/Home';
import NotFound from './components/NotFound';
// const NotFound = asyncComponent(() => import("./components/NotFound"));
// const DetailPackage = asyncComponent(() => import('./pages/detail'));
const VersionPackage = asyncComponent(() => import('./pages/version'));
// const HomePage = asyncComponent(() => import("./pages/home"));

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

  // const renderDetailPage = (routerProps: BrowserRouterProps) => (
  //   <AppContext.Consumer>
  //     {function renderConsumerVersionPage({ isUserLoggedIn }: any) {
  //       return <DetailPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
  //     }}
  //   </AppContext.Consumer>
  // );

  // const renderVersionPage = (routerProps: BrowserRouterProps) => (
  //   <AppContext.Consumer>
  //     {function renderConsumerVersionPage({ isUserLoggedIn }: any) {
  //       return <VersionPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
  //     }}
  //   </AppContext.Consumer>
  // );

  return (
    <Router history={history}>
      <>
        {renderHeader()}
        <Switch>
          <Route exact={true} path={'/'} render={renderHomePage} />
          {/* <Route exact={true} path={'/-/web/detail/@:scope/:package'} render={this.renderDetailPage} />
          <Route exact={true} path={'/-/web/detail/:package'} render={this.renderDetailPage} />
          <Route exact={true} path={'/-/web/version/@:scope/:package'} render={this.renderVersionPage} />
          <Route exact={true} path={'/-/web/version/:package'} render={this.renderVersionPage} /> */}
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
};

export default RouterApp;
