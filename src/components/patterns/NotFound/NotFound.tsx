/**
 * @prettier
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import Flex from '../../primitives/Flex';

import NotFoundGoToList from './NotFoundGoToList';
import NotFoundMessage from './NotFoundMessage';
import PackageImg from './img/package.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 16,
    maxWidth: 650,
  },
  emptyPackage: {
    width: 150,
    margin: '0 auto',
  },
  heading: {
    color: theme.colors.primary,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.colors.primary,
  },
  card: {
    marginTop: 24,
  },
}));

const NotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" className={classes.root}>
      <img className={classes.emptyPackage} alt="404 - Page not found" src={PackageImg} />
      <Typography className={classes.heading} variant="h2">
        Sorry, we couldn't find it...
      </Typography>
      <NotFoundMessage className={classes.heading} />
      <NotFoundGoToList />
    </Flex>
  );
};

export default NotFound;
