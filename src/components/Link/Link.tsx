

import React from 'react';

interface Props {
  children?: Node;
  to?: string;
  blank?: boolean;
}

const Link: React.FC<Props> = ({ children, to = '#', blank = false, ...props }) => (
  <a href={to} target={blank ? '_blank' : '_self'} {...props}>
    {children}
  </a>
);

export default Link;
