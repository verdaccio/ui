import React, { useState, ChangeEvent, useContext } from 'react';
import Box from '@material-ui/core/Box';

import { DetailContext } from '../../pages/Version';

import DetailContainerTabs from './DetailContainerTabs';
import DetailContainerContent from './DetailContainerContent';
import { TabPosition } from './tabs';

const DetailContainer: React.FC = () => {
  const [tabPosition, setTabPosition] = useState(TabPosition.README);
  const detailContext = useContext(DetailContext);
  const { readMe } = detailContext;

  const handleChangeTabPosition = (event: ChangeEvent<{}>) => {
    const eventTarget = event.target as HTMLSpanElement;
    const chosentab = eventTarget.innerText as TabPosition;
    setTabPosition(TabPosition[chosentab]);
  };

  return (
    <Box component="div" display="flex" flexDirection="column" padding={2}>
      <DetailContainerTabs onChangeTabPosition={handleChangeTabPosition} tabPosition={tabPosition} />
      <DetailContainerContent readDescription={readMe} tabPosition={tabPosition} />
    </Box>
  );
};

export default DetailContainer;
