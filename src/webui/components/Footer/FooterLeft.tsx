/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { default as Love } from '@material-ui/icons/Favorite';

import colors from '../../utils/styles/colors';

import FooterToolTip from './FooterToolTip';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginRight: 4,
    },
    '& > *:last-child': {
      marginRight: 0,
    },
  },
  loveIcon: {
    color: colors.love,
  },
});

const FooterLeft: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span>Made with</span>
      <Love fontSize="small" className={classes.loveIcon} />
      <span>on</span>
      <FooterToolTip />
    </div>
  );
};

export default FooterLeft;
