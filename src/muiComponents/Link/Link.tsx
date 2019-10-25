import React, { forwardRef } from 'react';
import { default as MaterialUILink, LinkProps } from '@material-ui/core/Link';

// Attention: Needs to be able to hold a ref.
type LinkRef = keyof HTMLElementTagNameMap;

const Link = forwardRef<LinkRef, LinkProps>(function Link(props, ref) {
  return <MaterialUILink {...props} ref={ref} />;
});

export default Link;
