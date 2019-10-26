import React, { forwardRef } from 'react';
import { default as MaterialUIAppBar, AppBarProps } from '@material-ui/core/AppBar';

type AppBarRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const AppBar = forwardRef<AppBarRef, AppBarProps>(function AppBar(props, ref) {
  return <MaterialUIAppBar {...props} ref={ref} />;
});

export default AppBar;
