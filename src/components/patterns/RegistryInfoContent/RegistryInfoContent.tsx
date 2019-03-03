/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import CopyToClipBoard from '../CopyToClipBoard';
import { getCLISetRegistry, getCLIChangePassword, getCLISetConfigRegistry } from '../../../utils/cli-utils';
import { NODE_MANAGER } from '../../../utils/constants';

const CommandContainer = styled('div')`
  padding-top: 20px;
`;

interface Props {
  scope: string;
  registryUrl: string;
}

const RegistryInfoContent: React.FC<Props> = ({ scope, registryUrl }) => {
  const [tabPosition, setTabPosition] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    event.preventDefault();
    setTabPosition(value);
  };

  const renderNpmTab = () => (
    <>
      <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.npm} set`, scope, registryUrl)} />
      <CopyToClipBoard text={getCLISetRegistry(`${NODE_MANAGER.npm} adduser`, registryUrl)} />
      <CopyToClipBoard text={getCLIChangePassword(NODE_MANAGER.npm, registryUrl)} />
    </>
  );

  const renderPNpmTab = () => (
    <>
      <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.pnpm} set`, scope, registryUrl)} />
      <CopyToClipBoard text={getCLISetRegistry(`${NODE_MANAGER.pnpm} adduser`, registryUrl)} />
      <CopyToClipBoard text={getCLIChangePassword(NODE_MANAGER.pnpm, registryUrl)} />
    </>
  );

  const renderYarnTab = () => <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.yarn} config set`, scope, registryUrl)} />;

  /* eslint react/prop-types:0 */
  const TabContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <CommandContainer>
      <Typography component={'div'} style={{ padding: 0, minHeight: 170 }}>
        {children}
      </Typography>
    </CommandContainer>
  );

  return (
    <>
      <Tabs indicatorColor={'primary'} onChange={handleChange} textColor={'primary'} value={tabPosition} variant={'fullWidth'}>
        <Tab label={NODE_MANAGER.npm} />
        <Tab label={NODE_MANAGER.pnpm} />
        <Tab label={NODE_MANAGER.yarn} />
      </Tabs>
      {tabPosition === 0 && <TabContainer>{renderNpmTab()}</TabContainer>}
      {tabPosition === 1 && <TabContainer>{renderPNpmTab()}</TabContainer>}
      {tabPosition === 2 && <TabContainer>{renderYarnTab()}</TabContainer>}
    </>
  );
};

export default RegistryInfoContent;
