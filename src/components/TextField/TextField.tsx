import { default as TextFieldMaterialUI, TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const TextField: React.FC<TextFieldProps> = props => <TextFieldMaterialUI {...props} />;

export default TextField;
