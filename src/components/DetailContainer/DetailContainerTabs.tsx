import React, { ChangeEvent, useState, useEffect } from 'react';
import styled from 'react-emotion';

import { default as MuiTabs } from '../../muiComponents/Tabs';
import Tab from '../../muiComponents/Tab';

import { TabPosition } from './tabs';

interface Props {
  tabPosition: TabPosition;
  onChangeTabPosition: (event: ChangeEvent<{}>) => void;
}

const Tabs = styled(MuiTabs)({
  marginBottom: 16,
});

const getTabIndex = (tabPosition: TabPosition): number => Object.keys(TabPosition).findIndex(position => position === String(tabPosition).toUpperCase());

const DetailContainerTabs: React.FC<Props> = ({ tabPosition, onChangeTabPosition }) => {
  const [tabPositionIndex, setTabPositionIndex] = useState(0);

  useEffect(() => {
    const tabIndex = getTabIndex(tabPosition);
    setTabPositionIndex(tabIndex);
  }, [tabPosition]);

  return (
    <Tabs indicatorColor={'primary'} onChange={onChangeTabPosition} textColor={'primary'} value={tabPositionIndex} variant={'fullWidth'}>
      <Tab data-testid={'readme-tab'} id={'readme-tab'} label={TabPosition.README} />
      <Tab data-testid={'dependencies-tab'} id={'dependencies-tab'} label={TabPosition.DEPENDENCIES} />
      <Tab data-testid={'versions-tab'} id={'versions-tab'} label={TabPosition.VERSIONS} />
      <Tab data-testid={'uplinks-tab'} id={'uplinks-tab'} label={TabPosition.UPLINKS} />
    </Tabs>
  );
};

export default DetailContainerTabs;
