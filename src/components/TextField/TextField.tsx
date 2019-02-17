/**
 * @prettier
 */

import React from 'react';
import { TextFieldProps, default as TextFieldMui } from '@material-ui/core/TextField';

const TextField: React.FC<TextFieldProps> = ({ InputProps, classes, ...props }) => (
  <TextFieldMui
    {...props}
    InputProps={{
      ...InputProps,
      classes,
    }}
  />
);

export default TextField;
