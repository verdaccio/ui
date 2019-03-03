/**
 * @prettier
 */

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

interface Props {
  size?: number;
  centered?: boolean;
}

// TODO -> fixed the circularprogress color
const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    color: '#4b5e40',
  },
}));

const Spinner: React.FC<Props> = ({ size }): React.ReactElement<HTMLDivElement> => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <CircularProgress className={classes.progress} size={size} />
    </div>
  );
};

Spinner.defaultProps = {
  size: 50,
  centered: false,
};

export default Spinner;
