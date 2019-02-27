/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

interface Props {
  name: string;
  version: string;
  onLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles(() => {
  return {
    container: {
      margin: 5,
    },
  };
});

const DependencyDetail: React.FC<Props> = ({ name, version, onLoading }) => {
  const classes = useStyles();

  const handleOnClick = () => {
    onLoading(true);
    // history.push(`/-/web/version/${name}`);
  };

  return <Chip clickable={true} component={'div'} label={`${name}@${version}`} className={classes.container} onClick={handleOnClick} />;
};

export default DependencyDetail;
