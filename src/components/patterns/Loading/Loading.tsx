/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Logo from '../../primitives/Logo';
import Spinner from '../../primitives/Spinner';

const useStyles = makeStyles(() => ({
  wrapper: {
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  badge: {
    margin: '0 0 30px 0',
    borderRadius: 25,
    boxShadow: '0 10px 20px 0 rgba(69, 58, 100, 0.2)',
    background: '#f7f8f6',
  },
}));

const Loading: React.FC = (): React.ReactElement<HTMLDivElement> => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.badge}>
        <Logo md={true} />
      </div>
      <Spinner />
    </div>
  );
};

export default Loading;
