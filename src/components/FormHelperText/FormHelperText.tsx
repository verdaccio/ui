import { default as MaterialUIFormHelperText, FormHelperTextProps } from '@material-ui/core/FormHelperText';
import React, { forwardRef } from 'react';

type FormHelperTextRef = HTMLButtonElement;

const FormHelperText = forwardRef<FormHelperTextRef, FormHelperTextProps>(function FormHelperText(props, ref) {
  return <MaterialUIFormHelperText {...props} ref={ref} />;
});

export default FormHelperText;
