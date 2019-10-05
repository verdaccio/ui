import React, { forwardRef } from 'react';
import { default as TextFieldMaterialUI, TextFieldProps } from '@material-ui/core/TextField';

// The default element type of MUI's TextField is 'div'
type TextFieldRef = HTMLElementTagNameMap['div'];

/* eslint-disable verdaccio/jsx-spread */
// eslint-disable-next-line react/display-name
const TextField = forwardRef<TextFieldRef, TextFieldProps>(function ToolTip({ InputProps, classes, ...props }, ref) {
  return (
    <TextFieldMaterialUI
      {...props}
      InputProps={{
        ...InputProps,
        classes,
      }}
      innerRef={ref}
    />
  );
});

export default TextField;
