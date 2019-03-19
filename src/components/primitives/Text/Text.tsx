/**
 * @prettier
 */

import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import { Colors } from '../../../theme-utils/theme';

interface Props extends Omit<TypographyProps, 'color'> {
  color?: Colors;
  is?: 'p' | 'span' | 'a' | 'div';
}

const useStyles = makeStyles(({ colors }: Theme) => ({
  textClass: ({ color }: Props) => ({
    color: colors[color!],
  }),
}));

const Text: React.FC<Props> = ({ is, color, ...props }) => {
  const classes = useStyles({ color });
  return <Typography {...props} component={is} className={classes.textClass} />;
};

Text.defaultProps = {
  color: 'primary',
};

export default Text;
