/**
 * @prettier
 */

import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  subheading: {
    marginBottom: 20,
  },
});

const HelpSegmentLogin: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Typography component="h2" variant="headline" gutterBottom>
        No Package Published Yet.
      </Typography>
      <Typography color="textSecondary" variant="subheading" gutterBottom className={classes.subheading}>
        To publish your first package just:
      </Typography>
    </>
  );
};

export default HelpSegmentLogin;
