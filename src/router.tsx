/* eslint  react/jsx-max-depth:0 */

import React, { Component, ReactElement } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { AppContextConsumer, AppStateInterface } from './App/App';
import Header from './components/Header';

const history = createBrowserHistory({
  basename: window.__VERDACCIO_BASENAME_UI_OPTIONS && window.__VERDACCIO_BASENAME_UI_OPTIONS.url_prefix,
});

const NotFound = React.lazy(() => import('./components/NotFound'));
const VersionPackage = React.lazy(() => import('./pages/Version'));
const HomePage = React.lazy(() => import('./pages/home'));

interface RouterAppProps {
  onLogout: () => void;
  onToggleLoginModal: () => void;
}

class RouterApp extends Component<RouterAppProps> {
  public render(): ReactElement<HTMLDivElement> {
    return (
      <Router history={history}>
        <React.Suspense fallback={null}>
          {this.renderHeader()}
          <Switch>
            <Route exact={true} path={'/'} render={this.renderHomePage} />
            <Route exact={true} path={'/-/web/detail/@:scope/:package'} render={this.renderVersionPage} />
            <Route exact={true} path={'/-/web/detail/:package'} render={this.renderVersionPage} />
            <Route exact={true} path={'/-/web/detail/:package/v/:version'} render={this.renderVersionPage} />
            <Route exact={true} path={'/-/web/detail/@:scope/:package/v/:version'} render={this.renderVersionPage} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }

  public renderHeader = (): ReactElement<HTMLDivElement> => {
    const { onLogout, onToggleLoginModal } = this.props;

    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ logoUrl, scope = '', user }: Partial<AppStateInterface>) {
          return <Header logo={logoUrl} onLogout={onLogout} onToggleLoginModal={onToggleLoginModal} scope={scope} username={user && user.username} />;
        }}
      </AppContextConsumer>
    );
  };

  public renderHomePage = (): ReactElement<HTMLDivElement> => {
    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ isUserLoggedIn, packages }: Partial<AppStateInterface>) {
          // @ts-ignore
          return <HomePage isUserLoggedIn={isUserLoggedIn} packages={packages} />;
        }}
      </AppContextConsumer>
    );
  };

  public renderVersionPage = (routerProps): ReactElement<HTMLDivElement> => {
    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ isUserLoggedIn }: Partial<AppStateInterface>) {
          return <VersionPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
        }}
      </AppContextConsumer>
    );
  };
}

export default RouterApp;
