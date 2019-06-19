import React from 'react';
import { makeStyles } from '@material-ui/styles';

import logo from './img/logo.svg';

export interface LogoSizing {
  md: number;
  sm: number;
}

const sizing: LogoSizing = {
  md: 90,
  sm: 40,
};

interface Props {
  size?: keyof LogoSizing;
}

const useStyles = makeStyles({
  logo: ({ size }: Props) => ({
    display: 'inline-block',
    width: sizing[size as string],
    height: sizing[size as string],
  }),
});

const Logo: React.FC<Props> = ({ size }) => {
  const classes = useStyles({ size });
  return <img alt="Verdaccio" className={classes.logo} src={logo} />;
};

Logo.defaultProps = {
  size: 'sm',
};

export default Logo;
