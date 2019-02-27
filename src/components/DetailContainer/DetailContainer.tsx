/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';
import Readme from '../Readme/Readme';
import Versions from '../Versions/Versions';
import { preventXSS } from '../../utils/sec-utils';
import Dependencies from '../Dependencies/Dependencies';
import UpLinks from '../UpLinks/UpLinks';

export const Content = styled('div')`
  && {
    padding: 15px;
  }
`;

interface Props {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

const DetailContainer: React.FC<Props> = () => {
  const [tabPosition, setTabPosition] = React.useState(0);

  const renderReadme = (readMe: string) => {
    const encodedReadme = preventXSS(readMe);
    return <Readme description={encodedReadme} />;
  };

  const handleChange = (event: any, tabPosition: number) => {
    event.preventDefault();
    setTabPosition(tabPosition);
  };

  const renderTabs: React.FC<DetailContextProps> = ({ readMe }) => (
    <>
      <Tabs indicatorColor={'primary'} onChange={handleChange} textColor={'primary'} value={tabPosition}>
        <Tab label={'Readme'} />
        <Tab label={'Dependencies'} />
        <Tab label={'Versions'} />
        <Tab label={'Uplinks'} />
      </Tabs>
      <Content>
        {tabPosition === 0 && renderReadme(readMe!)}
        {tabPosition === 1 && <Dependencies />}
        {tabPosition === 2 && <Versions />}
        {tabPosition === 3 && <UpLinks />}
      </Content>
    </>
  );

  return <DetailContext.Consumer>{context => context && renderTabs(context)}</DetailContext.Consumer>;
};

export default DetailContainer;
