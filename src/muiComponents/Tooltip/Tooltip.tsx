import React, { forwardRef } from 'react';
import { default as MuiTooltip, TooltipProps } from '@material-ui/core/Tooltip';

// The default element type of MUI's Tooltip is 'div' and the change of this prop is not allowed
type TooltipRef = HTMLElementTagNameMap['div'];

/* eslint-disable verdaccio/jsx-spread */
// eslint-disable-next-line react/display-name
const Tooltip = forwardRef<TooltipRef, TooltipProps>(function ToolTip(props, ref) {
  return <MuiTooltip {...props} innerRef={ref} />;
});

export default Tooltip;
