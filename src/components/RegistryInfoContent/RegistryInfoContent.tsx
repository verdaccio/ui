import React, { Component } from 'react';

import { Props, State } from './types';
import { CommandContainer } from './styles';
import CopyToClipBoard from '../CopyToClipBoard';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { getCLISetRegistry, getCLIChangePassword, getCLISetConfigRegistry } from '../../utils/cli-utils';
import { NODE_MANAGER } from '../../utils/constants';

/* eslint react/prop-types:0 */
function TabContainer({ children }): JSX.Element {
  return (
    <CommandContainer>
      <Typography component="div" style={{ padding: 0, minHeight: 170 }}>
        {children}
      </Typography>
    </CommandContainer>
  );
}

class RegistryInfoContent extends Component<Props, State> {
  public state = {
    tabPosition: 0,
  };

  public render(): JSX.Element {
    return <div>{this.renderTabs()}</div>;
  }

  private handleChange = (event: any, tabPosition: number) => {
    event.preventDefault();
    this.setState({ tabPosition });
  };

  private renderTabs(): JSX.Element {
    const { scope, registryUrl } = this.props;
    const { tabPosition } = this.state;

    return (
      <React.Fragment>
        <Tabs indicatorColor="primary" onChange={this.handleChange} textColor="primary" value={tabPosition} variant="fullWidth">
          <Tab label={NODE_MANAGER.npm} />
          <Tab label={NODE_MANAGER.pnpm} />
          <Tab label={NODE_MANAGER.yarn} />
        </Tabs>
        {tabPosition === 0 && <TabContainer>{this.renderNpmTab(scope, registryUrl)}</TabContainer>}
        {tabPosition === 1 && <TabContainer>{this.renderPNpmTab(scope, registryUrl)}</TabContainer>}
        {tabPosition === 2 && <TabContainer>{this.renderYarnTab(scope, registryUrl)}</TabContainer>}
      </React.Fragment>
    );
  }

  private renderNpmTab(scope: string, registryUrl: string): JSX.Element {
    return (
      <React.Fragment>
        <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.npm} set`, scope, registryUrl)} />
        <CopyToClipBoard text={getCLISetRegistry(`${NODE_MANAGER.npm} adduser`, registryUrl)} />
        <CopyToClipBoard text={getCLIChangePassword(NODE_MANAGER.npm, registryUrl)} />
      </React.Fragment>
    );
  }

  private renderPNpmTab(scope: string, registryUrl: string): JSX.Element {
    return (
      <React.Fragment>
        <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.pnpm} set`, scope, registryUrl)} />
        <CopyToClipBoard text={getCLISetRegistry(`${NODE_MANAGER.pnpm} adduser`, registryUrl)} />
        <CopyToClipBoard text={getCLIChangePassword(NODE_MANAGER.pnpm, registryUrl)} />
      </React.Fragment>
    );
  }

  private renderYarnTab(scope: string, registryUrl: string): JSX.Element {
    return (
      <React.Fragment>
        <CopyToClipBoard text={getCLISetConfigRegistry(`${NODE_MANAGER.yarn} config set`, scope, registryUrl)} />
      </React.Fragment>
    );
  }
}

export default RegistryInfoContent;
