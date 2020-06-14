import React, { forwardRef } from 'react';
import { default as MaterialUIDialogTitle, DialogTitleProps } from '@material-ui/core/DialogTitle';

type DialogTitleRef = HTMLDivElement;

const DialogTitle = forwardRef<DialogTitleRef, DialogTitleProps>(function DialogTitle(props, ref) {
  return <MaterialUIDialogTitle {...props} ref={ref} />;
});

export default DialogTitle;
