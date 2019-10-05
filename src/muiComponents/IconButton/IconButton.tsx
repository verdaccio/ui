import React, { forwardRef } from 'react';
import { default as MuiIconButton, IconButtonProps } from '@material-ui/core/IconButton';

type IconButtonRef = HTMLElementTagNameMap['button'];

/* eslint-disable verdaccio/jsx-spread */
// eslint-disable-next-line react/display-name
const IconButton = forwardRef<IconButtonRef, IconButtonProps>(function IconButton(props, ref) {
  return <MuiIconButton {...props} ref={ref} />;
});

export default IconButton;
