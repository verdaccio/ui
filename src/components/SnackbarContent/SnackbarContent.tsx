import React, { forwardRef } from 'react';
import { default as MaterialUISnackbarContent, SnackbarContentProps } from '@material-ui/core/SnackbarContent';

type SnackbarContentRef = HTMLDivElement;

const SnackbarContent = forwardRef<SnackbarContentRef, SnackbarContentProps>(function SnackbarContent(props, ref) {
  return <MaterialUISnackbarContent {...props} ref={ref} />;
});

export default SnackbarContent;
