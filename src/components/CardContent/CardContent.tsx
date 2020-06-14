import React, { forwardRef } from 'react';
import { default as MaterialUICardContent, CardContentProps } from '@material-ui/core/CardContent';

type CardContentRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const CardContent = forwardRef<CardContentRef, CardContentProps>(function CardContent(props, ref) {
  return <MaterialUICardContent {...props} innerRef={ref} />;
});

export default CardContent;
