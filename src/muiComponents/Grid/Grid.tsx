import React, { forwardRef } from 'react';
import { default as MaterialUIGrid, GridProps } from '@material-ui/core/Grid';

type GridRef = keyof HTMLElementTagNameMap;

const Grid = forwardRef<GridRef, GridProps>(function Grid(props, ref) {
  return <MaterialUIGrid {...props} innerRef={ref} />;
});

export default Grid;
