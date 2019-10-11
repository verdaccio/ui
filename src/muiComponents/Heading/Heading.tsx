import React, { forwardRef } from 'react';
import { default as MaterialUITypography, TypographyProps } from '@material-ui/core/Typography';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingRef = HeadingType;

interface Props extends Omit<TypographyProps, 'variant'> {
  variant?: HeadingType;
}

const Heading = forwardRef<HeadingRef, Props>(function Heading(props, ref) {
  return <MaterialUITypography {...props} ref={ref} />;
});

Heading.defaultProps = {
  variant: 'h6',
};

export default Heading;
