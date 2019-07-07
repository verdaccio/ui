import { default as IconButtonMUI, IconButtonProps } from '@material-ui/core/IconButton';
import React from 'react';

type IconButtonRef = HTMLElementTagNameMap['button'];

const IconButton = React.forwardRef<IconButtonRef, IconButtonProps>((props, ref) => {
  return <IconButtonMUI {...props} ref={ref} />;
});

export default IconButton;
