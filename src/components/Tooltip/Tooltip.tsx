import React, { forwardRef } from 'react';
import { default as MaterialUITooltip, TooltipProps } from '@material-ui/core/Tooltip';

// The default element type of MUI's Tooltip is 'div' and the change of this prop is not allowed
type TooltipRef = HTMLDivElement;

const Tooltip = forwardRef<TooltipRef, TooltipProps>(function ToolTip(props, ref) {
  return <MaterialUITooltip {...props} innerRef={ref} />;
});

export default Tooltip;
