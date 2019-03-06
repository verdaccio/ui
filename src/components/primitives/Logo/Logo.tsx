/**
 * @prettier
 */

// @ts-ignore
import React from 'react';
import logo from './img/logo.svg';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { url } from 'inspector';

interface Props {
  md?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'inline-block',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 90,
      height: 90,
    },
  },
}));

const Logo: React.FC<Props> = () => {
  const classes = useStyles();
  return <div className={classes.container} />;
};

export default Logo;
