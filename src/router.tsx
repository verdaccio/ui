/**
 * @prettier
 */

import React, { useContext } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import { AppContext } from './app';
import { asyncComponent } from './utils/asyncComponent';
import history from './history';
import Header from './components/patterns/Header';
import Footer from './components/patterns/Footer';
import NotFound from './components/patterns/NotFound';
import Flex from './components/primitives/Flex';

const VersionPackage = asyncComponent(() => import('./pages/Version'));
const HomePage = asyncComponent(() => import('./pages/Home'));

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxHeight: '100%',
    overflowY: 'scroll',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
      minWidth: 400,
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
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('An error occurred on AppContext');
  }

  return (
    <Router history={history}>
      <>
        <Header logo={context.logoUrl} onLogout={onLogout} onToggleLoginModal={onToggleLoginModal} scope={context.scope} username={context.user.username} />
        <Flex flexDirection="column" flexGrow={1} alignItems="center" className={classes.root}>
          <Switch>
            <Route exact path={'/'} render={() => <HomePage isUserLoggedIn={context.isUserLoggedIn} packages={context.packages} />} />
            <Route exact path={'/-/web/version/@:scope/:package'} render={() => <VersionPackage isUserLoggedIn={context.isUserLoggedIn} />} />
            <Route exact path={'/-/web/detail/:package'} render={() => <VersionPackage isUserLoggedIn={context.isUserLoggedIn} />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </Flex>
        <Footer />
      </>
    </Router>
  );
};

export default RouterApp;
