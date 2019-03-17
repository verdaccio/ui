/**
 * @prettier
 */

import React from 'react';
import classnames from 'classnames';
import { Theme } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import { Colors } from '../../../theme-utils/theme';

interface Props extends Omit<TypographyProps, 'color'> {
  bold?: boolean;
  color?: Colors;
  className?: string;
}

const useStyles = makeStyles(({ colors }: Theme) => ({
  headingClass: ({ bold, color }: Props) => ({
    fontWeight: bold ? 700 : 400,
    color: colors[color!],
  }),
}));

const Heading: React.FC<Props> = ({ className, bold, color, ...props }) => {
  const classes = useStyles(props);
  return <Typography className={classnames(className, classes.headingClass)} {...props} />;
};

Heading.defaultProps = {
  bold: false,
  color: 'primary',
};

export default Heading;
