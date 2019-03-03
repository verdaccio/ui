/**
 * @prettier
 */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import { AppContext } from './app';
import { asyncComponent } from './utils/asyncComponent';
import history from './history';
import Header from './components/patterns/Header';
import Footer from './components/patterns/Footer';

// const NotFound = asyncComponent(() => import('./components/patterns/NotFound'));
// const DetailPackage = asyncComponent(() => import('./pages/Detail'));
// const VersionPackage = asyncComponent(() => import('./pages/Version'));
const HomePage = asyncComponent(() => import('./pages/Home'));

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxHeight: '100%',
    overflowY: 'scroll',
    minWidth: 400,
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  },
}));

interface Props {
  onLogout: () => void;
  onToggleLoginModal: () => void;
}

const RouterApp: React.FC<Props> = ({ onLogout, onToggleLoginModal }) => {
  const classes = useStyles();

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

  // const renderDetailPage = (routerProps: any) => (
  //   <AppContext.Consumer>
  //     {function renderConsumerVersionPage({ isUserLoggedIn }: any) {
  //       return <DetailPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
  //     }}
  //   </AppContext.Consumer>
  // );

  // const renderVersionPage = (routerProps: any) => (
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
        <div className={classes.content}>
          <Switch>
            <Route exact={true} path={'/'} render={renderHomePage} />
            {/* <Route exact={true} path={'/-/web/version/@:scope/:package'} render={renderVersionPage} />
            <Route component={NotFound} /> */}
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
};

export default RouterApp;
