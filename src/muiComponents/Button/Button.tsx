import React, { forwardRef } from 'react';
import { default as MaterialUIButton, ButtonProps } from '@material-ui/core/Button';

type ButtonRef = HTMLElementTagNameMap['button'];

/* eslint-disable verdaccio/jsx-spread */
// eslint-disable-next-line react/display-name
const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref) {
  return <MaterialUIButton {...props} ref={ref} />;
});

export default Button;
