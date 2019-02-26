/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    maxWidth: 1240,
    minWidth: 400,
    width: '100%',
  },
}));

const Content: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default Content;
