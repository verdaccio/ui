import React, { forwardRef } from 'react';
import { default as MaterialUIIconButton, IconButtonProps } from '@material-ui/core/IconButton';

type IconButtonRef = HTMLButtonElement;

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(function IconButton(props, ref) {
  return <MaterialUIIconButton {...props} ref={ref} />;
});

export default IconButton;
