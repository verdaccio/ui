import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  to: string;
  blank?: boolean;
}

type LinkRef = HTMLElementTagNameMap['a'];

const Link = React.forwardRef<LinkRef, Props>(({ children, to = '#', blank = false, ...props }, ref) => (
  <a href={to} target={blank ? '_blank' : '_self'} {...props} ref={ref}>
    {children}
  </a>
));

export default Link;
