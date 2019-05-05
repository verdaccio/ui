/**
 * @prettier
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  text: string;
}

const NoItems: React.FC<IProps> = ({ text }) => (
  <Typography gutterBottom={true} variant={'subtitle1'}>
    {text}
  </Typography>
);

export default NoItems;
