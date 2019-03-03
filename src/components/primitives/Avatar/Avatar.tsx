/**
 * @prettier
 */

import React from 'react';
import classnames from 'classnames';
import { default as MuiAvatar, AvatarProps } from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  normal: {
    width: 30,
    height: 30,
    background: theme.palette.primary.main,
  },
}));

interface Props extends AvatarProps {
  variant?: keyof ReturnType<typeof useStyles>;
  className?: string;
}

const Avatar: React.FC<Props> = ({ className, variant, ...props }) => {
  const classes = useStyles();
  return <MuiAvatar {...props} className={classnames(className, classes[variant!])} />;
};

Avatar.defaultProps = {
  variant: 'normal',
};

export default Avatar;
