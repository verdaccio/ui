import React, { forwardRef } from 'react';
import { default as MaterialUITabs, TabsProps } from '@material-ui/core/Tabs';

type TabsRef = keyof HTMLElementTagNameMap;

const Tabs = forwardRef<TabsRef, TabsProps>(function Tabs(props, ref) {
  return <MaterialUITabs {...props} innerRef={ref} />;
});

export default Tabs;
