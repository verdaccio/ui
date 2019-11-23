import React, { useCallback, useState, ChangeEvent, useContext } from 'react';

import { DetailContext } from '../../pages/Version';
import Box from '../../muiComponents/Box';

import DetailContainerTabs from './DetailContainerTabs';
import DetailContainerContent from './DetailContainerContent';
import { TabPosition } from './tabs';

const DetailContainer: React.FC = () => {
  const [tabPosition, setTabPosition] = useState(TabPosition.README);
  const detailContext = useContext(DetailContext);
  const { readMe } = detailContext;

  const handleChangeTabPosition = useCallback(
    (event: ChangeEvent<{}>) => {
      event.preventDefault();
      const eventTarget = event.target as HTMLSpanElement;
      const chosentab = eventTarget.innerText as TabPosition;
      setTabPosition(TabPosition[chosentab]);
    },
    [setTabPosition]
  );

  return (
    <Box component="div" display="flex" flexDirection="column" padding={2}>
      <DetailContainerTabs onChangeTabPosition={handleChangeTabPosition} tabPosition={tabPosition} />
      <DetailContainerContent readDescription={readMe} tabPosition={tabPosition} />
    </Box>
  );
};

export default DetailContainer;
