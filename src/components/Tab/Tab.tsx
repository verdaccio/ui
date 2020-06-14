import React, { forwardRef } from 'react';
import { default as MaterialUITab, TabProps } from '@material-ui/core/Tab';

type TabRef = HTMLButtonElement;

const Tab = forwardRef<TabRef, TabProps>(function Tab(props, ref) {
  return <MaterialUITab {...props} innerRef={ref} />;
});

export default Tab;
