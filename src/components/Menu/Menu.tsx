import React, { forwardRef } from 'react';
import { default as MaterialUIMenu, MenuProps } from '@material-ui/core/Menu';

type MenuRef = HTMLDivElement;

const Menu = forwardRef<MenuRef, MenuProps>(function Menu(props, ref) {
  return <MaterialUIMenu {...props} ref={ref} />;
});

export default Menu;
