/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(props => ({
  wrapper: {
    backgroundColor: props.isLoading ? '#f5f6f8' : '#ffffff',
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    maxWidth: 800,
    minWidth: 1240,
    width: '100%',
  },
}));

interface Props {
  isLoading: boolean;
}

const Container: React.FC<Props> = ({ children, isLoading }) => {
  const classes = useStyles({ isLoading });
  return <div className={classes.wrapper}>{children}</div>;
};

export default Container;
