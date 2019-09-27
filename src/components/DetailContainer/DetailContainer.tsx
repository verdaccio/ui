import React, { useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';

import { DetailContextConsumer } from '../../pages/Version';

import DetailContainerTabs from './DetailContainerTabs';
import DetailContainerContent from './DetailContainerContent';
import { TabPosition } from './tabs';

const DetailContainer: React.FC = () => {
  const [tabPosition, setTabPosition] = useState(TabPosition.README);

  const handleChangeTabPosition = (event: ChangeEvent<{}>) => {
    const eventTarget = event.target as HTMLSpanElement;
    const chosentab = eventTarget.innerText as TabPosition;
    setTabPosition(TabPosition[chosentab]);
  };

  return (
    <DetailContextConsumer>
      {({ readMe }) => (
        <Box component="div" display="flex" flexDirection="column" padding={2}>
          <DetailContainerTabs onChangeTabPosition={handleChangeTabPosition} tabPosition={tabPosition} />
          <DetailContainerContent readDescription={readMe} tabPosition={tabPosition} />
        </Box>
      )}
    </DetailContextConsumer>
  );
};

export default DetailContainer;
