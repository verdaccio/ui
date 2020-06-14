import React, { forwardRef } from 'react';
import { default as MaterialUIFormHelperText, FormHelperTextProps } from '@material-ui/core/FormHelperText';

type FormHelperTextRef = HTMLButtonElement;

const FormHelperText = forwardRef<FormHelperTextRef, FormHelperTextProps>(function FormHelperText(props, ref) {
  return <MaterialUIFormHelperText {...props} ref={ref} />;
});

export default FormHelperText;
