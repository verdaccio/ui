/**
 * @prettier
 */

import React from 'react';

interface Props {
  to?: string;
  blank?: boolean;
}

const Link: React.FC<Props> = ({ children, to = '#', blank = false, ...props }): React.ReactElement<HTMLAnchorElement> => (
  <a href={to} target={blank ? '_blank' : '_self'} {...props}>
    {children}
  </a>
);

export default Link;
