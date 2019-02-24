/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    //   ${({ isLoading }: { isLoading: boolean }) =>
    //     isLoading &&
    //     `
    //     ${Content} {
    //       background-color: #f5f6f8;
    //     }
    //   `};
    //   },
  },
}));

interface Props {
  isLoading: boolean;
}

const Container: React.FC<Props> = ({ children, isLoading }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default Container;
