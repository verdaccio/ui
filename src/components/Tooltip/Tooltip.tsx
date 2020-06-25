import { default as MaterialUITooltip, TooltipProps } from '@material-ui/core/Tooltip';
import React, { forwardRef } from 'react';

// The default element type of MUI's Tooltip is 'div' and the change of this prop is not allowed
type TooltipRef = HTMLDivElement;

const Tooltip = forwardRef<TooltipRef, TooltipProps>(function ToolTip(props, ref) {
  return <MaterialUITooltip {...props} innerRef={ref} />;
});

export default Tooltip;
