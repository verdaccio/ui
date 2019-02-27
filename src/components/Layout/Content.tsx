/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Content;
