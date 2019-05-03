/**
 * @prettier
 */

import { default as TextFieldMaterialUI, TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const TextField: React.FC<TextFieldProps> = ({ InputProps, classes, ...other }) => (
  <TextFieldMaterialUI
    {...other}
    InputProps={{
      ...InputProps,
      classes,
    }}
  />
);

export default TextField;
