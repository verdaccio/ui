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
    height: '100%',
  },
  img: {
    width: 150,
  },
  heading: {
    color: theme.colors.primary,
  },
}));

const NotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" className={classes.root}>
      <img className={classes.img} alt="404 - Page not found" src={PackageImg} />
      <Flex flexDirection="column" spacingY="byte">
        <Typography className={classes.heading} variant="h4">
          Sorry, we couldn't find it...
        </Typography>
        <NotFoundMessage />
      </Flex>
      <NotFoundGoToList />
    </Flex>
  );
};

export default NotFound;
