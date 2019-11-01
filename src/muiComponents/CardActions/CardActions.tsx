import React, { forwardRef } from 'react';
import { default as MaterialUICardActions, CardActionsProps } from '@material-ui/core/CardActions';

type CardActionsRef = HTMLDivElement;

const CardActions = forwardRef<CardActionsRef, CardActionsProps>(function CardContentActions(props, ref) {
  return <MaterialUICardActions {...props} innerRef={ref} />;
});

export default CardActions;
