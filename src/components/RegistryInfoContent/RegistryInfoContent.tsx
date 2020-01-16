import React, { useState } from 'react';

import CopyToClipBoard from '../CopyToClipBoard';
import { getCLISetRegistry, getCLIChangePassword, getCLISetConfigRegistry } from '../../utils/cli-utils';
import { NODE_MANAGER } from '../../utils/constants';
import { default as Typography } from '../../muiComponents/Heading';
import Tabs from '../../muiComponents/Tabs';
import Tab from '../../muiComponents/Tab';

import { CommandContainer } from './styles';
import { Props, State } from './types';

const RegistryInfoContent: React.FC<Props> = props => {
  const [tabPosition, setTabPosition] = useState<State['tabPosition']>(0);
  const handleChange = (event: React.ChangeEvent<{}>, tabPosition: number): void => {
    event.preventDefault();
    setTabPosition(tabPosition);
  };

  const renderNpmTab = (scope: string, registryUrl: string): JSX.Element => {
    return (
      <>
        <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.npm} set`, scope, registryUrl)} />
        <CopyToClipBoard text={getCLISetRegistry(`${NODE_MANAGER.npm} adduser`, registryUrl)} />
        <CopyToClipBoard text={getCLIChangePassword(NODE_MANAGER.npm, registryUrl)} />
      </>
    );
  };

  const renderPnpmTab = (scope: string, registryUrl: string): JSX.Element => {
    return (
      <>
        <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.pnpm} set`, scope, registryUrl)} />
        <CopyToClipBoard text={getCLISetRegistry(`${NODE_MANAGER.pnpm} adduser`, registryUrl)} />
        <CopyToClipBoard text={getCLIChangePassword(NODE_MANAGER.pnpm, registryUrl)} />
      </>
    );
  };

  const renderYarnTab = (scope: string, registryUrl: string): JSX.Element => {
    return <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.yarn} config set`, scope, registryUrl)} />;
  };

  const renderTabs = (): JSX.Element => {
    const { scope, registryUrl } = props;

    return (
      <>
        <Tabs
          data-testid={'tabs-el'}
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          value={tabPosition}
          variant="fullWidth">
          <Tab data-testid={'npm-tab'} label={NODE_MANAGER.npm} />
          <Tab data-testid={'pnpm-tab'} label={NODE_MANAGER.pnpm} />
          <Tab data-testid={'yarn-tab'} label={NODE_MANAGER.yarn} />
        </Tabs>
        {tabPosition === 0 && <TabContainer>{renderNpmTab(scope, registryUrl)}</TabContainer>}
        {tabPosition === 1 && <TabContainer>{renderPnpmTab(scope, registryUrl)}</TabContainer>}
        {tabPosition === 2 && <TabContainer>{renderYarnTab(scope, registryUrl)}</TabContainer>}
      </>
    );
  };

  /* eslint react/prop-types:0 */
  const TabContainer = ({ children }): JSX.Element => {
    return (
      <CommandContainer>
        <Typography
          // className={css`
          //   padding: 0;
          //   min-height: 170;
          // `}
          component="div">
          {children}
        </Typography>
      </CommandContainer>
    );
  };

  return <div>{renderTabs()}</div>;
};

export default RegistryInfoContent;
