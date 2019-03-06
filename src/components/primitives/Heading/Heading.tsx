/**
 * @prettier
 */

import React from 'react';
import classnames from 'classnames';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import { getColor } from '../../../theme-utils/design-utils';

interface Props extends Omit<TypographyProps, 'color'> {
  bold?: boolean;
  color?: string;
  className?: string;
}

const useStyles = (props: Props) =>
  makeStyles(() => ({
    container: {
      fontWeight: props.bold ? 700 : 400,
      color: getColor(props.color!),
    },
  }));

const Heading: React.FC<Props> = ({ className, bold, color, ...props }) => {
  const classes = useStyles({ bold, color })();
  return <Typography className={classnames(className, classes.container)} {...props} />;
};

Heading.defaultProps = {
  bold: false,
  color: 'text.primary',
};

export default Heading;
