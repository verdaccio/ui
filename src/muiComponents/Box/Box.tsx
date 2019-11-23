import React from 'react';
import { default as MaterialUIBox, BoxProps } from '@material-ui/core/Box';

const Box: React.FC<BoxProps> = props => <MaterialUIBox {...props} />;

export default Box;
