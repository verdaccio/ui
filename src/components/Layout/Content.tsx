/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    backgroundColor: '#ffffff',
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },
}));

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default Content;
