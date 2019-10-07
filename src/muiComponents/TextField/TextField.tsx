import React, { forwardRef } from 'react';
import { default as MaterialUITextField, TextFieldProps } from '@material-ui/core/TextField';

// The default element type of MUI's TextField is 'div'
type TextFieldRef = HTMLElementTagNameMap['div'];

/* eslint-disable verdaccio/jsx-spread */
// eslint-disable-next-line react/display-name
const TextField = forwardRef<TextFieldRef, TextFieldProps>(function ToolTip({ InputProps, classes, ...props }, ref) {
  return (
    <MaterialUITextField
      {...props}
      innerRef={ref}
      InputProps={{
        ...InputProps,
        classes,
      }}
    />
  );
});

export default TextField;
