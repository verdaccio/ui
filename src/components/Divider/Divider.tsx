import React, { forwardRef } from 'react';
import { default as MaterialUIDivider, DividerProps } from '@material-ui/core/Divider';

type DividerRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const Divider = forwardRef<DividerRef, DividerProps>(function Divider(props, ref) {
  return <MaterialUIDivider {...props} innerRef={ref} />;
});

export default Divider;
