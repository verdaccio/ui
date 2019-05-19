
import React from 'react';
import { makeStyles } from '@material-ui/styles';

import logo from './img/logo.svg'

const sizing = {
  md: 90,
  sm: 40,
};

interface Props {
  size?: keyof typeof sizing;
}

const useStyles = makeStyles({
  logo: ({ size }: Props) => ({
    display: 'inline-block',
    width: sizing[size!],
    height: sizing[size!]
  }),
});

const Logo: React.FC<Props> = ({ size }) => {
  const classes = useStyles({ size });
  return <img src={logo} alt="Verdaccio" className={classes.logo} />;
};

Logo.defaultProps = {
  size: 'sm',
};

export default Logo;
