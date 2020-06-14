import React, { forwardRef } from 'react';
import { default as MaterialUIFormControl, FormControlProps } from '@material-ui/core/FormControl';

type FormControlRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const FormControl = forwardRef<FormControlRef, FormControlProps>(function FormControl(props, ref) {
  return <MaterialUIFormControl {...props} innerRef={ref} />;
});

export default FormControl;
