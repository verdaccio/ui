/* eslint  react/jsx-max-depth:0 */

import React, { Component, ReactElement } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AppContextConsumer } from './App/App';

import { asyncComponent } from './utils/asyncComponent';
import history from './history';
import Header from './components/Header';

const NotFound = asyncComponent(() => import('./components/NotFound'));
const VersionPackage = asyncComponent(() => import('./pages/version/Version'));
const HomePage = asyncComponent(() => import('./pages/home'));

interface RouterAppProps {
  onLogout: () => void;
  onToggleLoginModal: () => void;
}

class RouterApp extends Component<RouterAppProps> {
  public render(): ReactElement<HTMLDivElement> {
    return (
      <Router history={history}>
        <>
          {this.renderHeader()}
          <Switch>
            <Route exact={true} path={'/'} render={this.renderHomePage} />
            <Route exact={true} path={'/-/web/detail/@:scope/:package'} render={this.renderVersionPage} />
            <Route exact={true} path={'/-/web/detail/:package'} render={this.renderVersionPage} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    );
  }

  public renderHeader = (): ReactElement<HTMLDivElement> => {
    const { onLogout, onToggleLoginModal } = this.props;

    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ logoUrl, scope, user }: any) {
          return <Header logo={logoUrl} onLogout={onLogout} onToggleLoginModal={onToggleLoginModal} scope={scope} username={user.username} />;
        }}
      </AppContextConsumer>
    );
  };

  public renderHomePage = (): ReactElement<HTMLDivElement> => {
    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ isUserLoggedIn, packages }: any) {
          // @ts-ignore
          return <HomePage isUserLoggedIn={isUserLoggedIn} packages={packages} />;
        }}
      </AppContextConsumer>
    );
  };

  public renderVersionPage = (routerProps: any): ReactElement<HTMLDivElement> => {
    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ isUserLoggedIn }: any) {
          return <VersionPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
        }}
      </AppContextConsumer>
    );
  };
}

export default RouterApp;
