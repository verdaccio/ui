import { default as MaterialUIInputAdornment, InputAdornmentProps } from '@material-ui/core/InputAdornment';
import React, { forwardRef } from 'react';

type InputAdornmentRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const InputAdornment = forwardRef<InputAdornmentRef, InputAdornmentProps>(function InputAdornment(props, ref) {
  return <MaterialUIInputAdornment {...props} ref={ref} />;
});

export default InputAdornment;
