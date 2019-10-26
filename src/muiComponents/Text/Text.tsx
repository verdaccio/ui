import React, { forwardRef } from 'react';
import { default as MaterialUITypography, TypographyProps } from '@material-ui/core/Typography';

type TextType = 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
type TextRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

interface Props extends Omit<TypographyProps, 'variant'> {
  variant?: TextType;
}

// The reference is already from type of the Component, so the any below is not a problem
const Text = forwardRef<TextRef, Props>(function Text(props, ref) {
  return <MaterialUITypography {...props} ref={ref} />;
});

Text.defaultProps = {
  variant: 'subtitle1',
};

export default Text;
