import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { default as MaterialUIMenuItem, MenuItemProps } from '@material-ui/core/MenuItem';

type HTMLElementTagName = keyof HTMLElementTagNameMap;
type MenuItemRef = HTMLElementTagNameMap[HTMLElementTagName];

interface Props extends Omit<MenuItemProps, 'component'> {
  component?: HTMLElementTagName;
}

const MenuItem = forwardRef<MenuItemRef, Props>(function MenuItem({ button, ...props }, ref) {
  // it seems typescript has some discrimination type limitions. Please see: https://github.com/mui-org/material-ui/issues/14971
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <StyledMaterialUIMenuItem {...props} button={button as any} ref={ref as any} />;
});

MenuItem.defaultProps = {
  component: 'li',
};

export default MenuItem;

const StyledMaterialUIMenuItem = styled(MaterialUIMenuItem)({
  outline: 'none',
});
