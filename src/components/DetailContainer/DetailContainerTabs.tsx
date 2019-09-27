import React, { ChangeEvent, useState, useEffect } from 'react';
import { default as MuiTabs } from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'react-emotion';

import { TabPosition } from './tabs';

interface Props {
  tabPosition: TabPosition;
  onChangeTabPosition: (event: ChangeEvent<{}>) => void;
}

const Tabs = styled(MuiTabs)({
  marginBottom: 16,
});

const DetailContainerTabs: React.FC<Props> = ({ tabPosition, onChangeTabPosition }) => {
  const [tabPositionIndex, setTabPositionIndex] = useState(0);

  useEffect(() => {
    const tabIndex = Object.keys(TabPosition).findIndex(position => position === String(tabPosition).toUpperCase());
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
