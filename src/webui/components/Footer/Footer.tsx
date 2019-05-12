/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

import colors from '../../utils/styles/colors';

import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: colors.snow,
    borderTop: `1px solid ${colors.greyGainsboro}`,
    color: colors.nobel01,
    fontSize: 14,
    padding: 20,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FooterLeft />
      <FooterRight />
    </div>
  );
};

export default Footer;
