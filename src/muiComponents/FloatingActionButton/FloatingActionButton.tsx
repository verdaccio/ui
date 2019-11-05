import React, { forwardRef } from 'react';
import { default as MaterialUIFab, FabProps } from '@material-ui/core/Fab';

type FloatingActionButtonRef = HTMLButtonElement;

const FloatingActionButton = forwardRef<FloatingActionButtonRef, FabProps>(function FloatingActionButton(props, ref) {
  return <MaterialUIFab {...props} ref={ref} />;
});

export default FloatingActionButton;
