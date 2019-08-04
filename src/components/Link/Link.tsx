import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  to: string;
  blank?: boolean;
}

const Link: React.FC<Props> = ({ children, to = '#', blank = false, ...props }) => (
  <a href={to} target={blank ? '_blank' : '_self'} {...props}>
    {children}
  </a>
);

export default Link;
