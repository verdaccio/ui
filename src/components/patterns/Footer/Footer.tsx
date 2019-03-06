/**
 * @prettier
 */

import React from 'react';
import { unstable_Box as Box } from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import Icon from '../../primitives/Icon';
// @ts-ignore
import { version } from '../../../../package.json';
import { goToVerdaccioWebsite } from '../../../utils/windows.js';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderTop: '1px solid rgb(227, 227, 227);',
    width: '100%',
  },
  inner: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  const renderTooltip = () => (
    <Box>
      <Icon name={'earth'} size={'md'} />
      <Fade>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Icon name={'spain'} size={'md'} />
          <Icon name={'nicaragua'} size={'md'} />
          <Icon name={'india'} size={'md'} />
          <Icon name={'brazil'} size={'md'} />
          <Icon name={'pakistan'} size={'md'} />
          <Icon name={'china'} size={'md'} />
          <Icon name={'austria'} size={'md'} />
        </Box>
      </Fade>
    </Box>
  );

  const renderLeft = () => (
    <Box display="flex" alignItems="center">
      Made with ♥ on
      <Icon img={true} name={'earth'} onClick={goToVerdaccioWebsite} />
    </Box>
  );

  const renderRight = () => (
    <Box display="flex" alignItems="center">
      Powered by
      <Icon img={true} name={'verdaccio'} onClick={goToVerdaccioWebsite} pointer={true} size={'md'} />
      {`/ ${version}`}
    </Box>
  );

  return (
    <BottomNavigation className={classes.container}>
      <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.inner}>
        {renderLeft()}
        {renderRight()}
      </Box>
    </BottomNavigation>
  );
};

export default Footer;
