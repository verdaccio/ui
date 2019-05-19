

import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  text: string;
  className?: string;
}

const NoItems: React.FC<IProps> = ({ className, text }) => (
  <Typography className={className} gutterBottom={true} variant="subtitle1">
    {text}
  </Typography>
);

export default NoItems;
