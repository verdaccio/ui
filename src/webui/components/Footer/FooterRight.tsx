/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { goToVerdaccioWebsite } from '../../utils/windows';

import Icon from '../Icon';

interface Props {
  version?: string;
}

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
});

const FooterRight: React.FC<Props> = ({ version }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span>Powered by</span>
      <Icon name="verdaccio" size="sm" onClick={goToVerdaccioWebsite} pointer />
      <span>{`/ ${version}`}</span>
    </div>
  );
};

FooterRight.defaultProps = {
  // @ts-ignore : Property 'VERDACCIO_VERSION' does not exist on type 'Window'
  version: window.VERDACCIO_VERSION,
};

export default FooterRight;
