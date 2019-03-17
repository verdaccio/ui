/**
 * @prettier
 */

import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import Flex from '../../primitives/Flex';

import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderTop: 1,
    borderTopStyle: 'solid',
    borderColor: theme.palette.divider,
    width: '100%',
  },
  inner: {
    width: '100%',
    paddingTop: theme.spacings.byte,
    paddingBottom: theme.spacings.byte,
    paddingRight: theme.spacings.kilo,
    paddingLeft: theme.spacings.kilo,
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
  return (
    <BottomNavigation className={classes.root}>
      <Flex alignItems={['flex-start', 'center']} justifyContent="space-between" flexDirection={['column', 'row']} className={classes.inner}>
        <FooterLeft />
        <FooterRight />
      </Flex>
    </BottomNavigation>
  );
};

export default Footer;
