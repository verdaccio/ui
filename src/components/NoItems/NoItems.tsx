import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  text: string;
  className?: string;
}

const NoItems: React.FC<Props> = ({ className, text }) => (
  <Typography className={className} gutterBottom={true} variant="subtitle1">
    {text}
  </Typography>
);

export default NoItems;
