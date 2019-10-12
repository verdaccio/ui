import React, { forwardRef } from 'react';
import { default as MaterialUISvgIcon, SvgIconProps } from '@material-ui/core/SvgIcon';

type SvgIconRef = SVGSVGElement;

const SvgIcon = forwardRef<SvgIconRef, SvgIconProps>(function SvgIcon(props, ref) {
  return <MaterialUISvgIcon {...props} ref={ref} />;
});

export default SvgIcon;
