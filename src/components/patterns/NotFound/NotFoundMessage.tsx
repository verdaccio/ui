/**
 * @prettier
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  className?: string;
}
// TODO -> add translations
const NotFoundMessage: React.FC<Props> = ({ className }) => (
  <Typography variant="subtitle1" className={className}>
    <div>The page you're looking for doesn't exist.</div>
    <div>Perhaps these links will help find what you are looking for:</div>
  </Typography>
);

export default NotFoundMessage;
