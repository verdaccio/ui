import React, { forwardRef } from 'react';
import { default as MaterialUIMenuItem, MenuItemProps } from '@material-ui/core/MenuItem';

type MenuItemRef = keyof HTMLElementTagNameMap;

const MenuItem = forwardRef<MenuItemRef, MenuItemProps>(function MenuItem({ button, ...props }, ref) {
  // it seems typescript has some discrimination type limitions. Please see: https://github.com/mui-org/material-ui/issues/14971
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MaterialUIMenuItem {...props} button={button as any} innerRef={ref} />;
});

export default MenuItem;
