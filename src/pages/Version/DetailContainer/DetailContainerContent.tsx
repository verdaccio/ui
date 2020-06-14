import React from 'react';

import Dependencies from './Dependencies';
import UpLinks from './UpLinks';
import Versions from './Versions';
import DetailContainerContentReadme from './DetailContainerContentReadme';
import { TabPosition } from './tabs';

interface Props {
  tabPosition: TabPosition;
  readDescription?: string;
}

const DetailContainerContent: React.FC<Props> = ({ tabPosition, readDescription }) => {
  switch (tabPosition) {
    case TabPosition.README:
      return <DetailContainerContentReadme description={readDescription} />;
    case TabPosition.UPLINKS:
      return <UpLinks />;
    case TabPosition.VERSIONS:
      return <Versions />;
    case TabPosition.DEPENDENCIES:
      return <Dependencies />;
    default:
      return null;
  }
};

export default DetailContainerContent;
