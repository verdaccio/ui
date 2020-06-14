import React, { forwardRef } from 'react';
import { default as MaterialUIPaper, PaperProps } from '@material-ui/core/Paper';

type PaperRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const Paper = forwardRef<PaperRef, PaperProps>(function Paper(props, ref) {
  return <MaterialUIPaper {...props} ref={ref} />;
});

export default Paper;
