import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Text, { TextProps } from '../../muiComponents/Text';

interface Props extends Pick<TextProps, 'variant'> {
  external?: boolean;
  className?: string;
  to: string;
}

/* eslint-disable verdaccio/jsx-spread */
const Link: React.FC<Props> = ({ external, to, children, variant, className, ...props }) => {
  const LinkTextContent = <Text variant={variant}>{children}</Text>;
  return external ? (
    <a className={className} href={to} rel="noopener noreferrer" target="_blank" {...props}>
      {LinkTextContent}
    </a>
  ) : (
    <RouterLink className={className} to={to} {...props}>
      {LinkTextContent}
    </RouterLink>
  );
};

export default Link;
