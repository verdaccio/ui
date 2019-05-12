/**
 * @prettier
 */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import Icon from '../Icon';
import colors from '../../utils/styles/colors';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: 18,
    '& > *': {
      marginRight: 8,
    },
    '& > *:last-child': {
      marginRight: 0,
    },
  },
  flags: {
    position: 'absolute',
    background: colors.greyAthens,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 4,
    paddingLeft: 4,
    borderRadius: 3,
    height: 20,
    display: 'inline-flex',
    alignItems: 'center',
    top: -2,
    '& > *': {
      marginRight: 4,
    },
    '& > *:last-child': {
      marginRight: 0,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '29%',
      left: -4,
      marginLeft: -5,
      border: '5px solid',
      borderColor: `${colors.greyAthens} transparent transparent transparent`,
      transform: 'rotate(90deg)',
    },
  },
});

const FooterToolTip: React.FC = () => {
  const classes = useStyles();
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <div className={classes.container} onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
      <Icon name="earth" size="md" />
      {showToolTip && (
        <div className={classes.flags}>
          <Icon name="spain" size="md" />
          <Icon name="nicaragua" size="md" />
          <Icon name="india" size="md" />
          <Icon name="brazil" size="md" />
          <Icon name="china" size="md" />
          <Icon name="austria" size="md" />
        </div>
      )}
    </div>
  );
};

export default FooterToolTip;
