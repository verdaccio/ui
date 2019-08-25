import React, { Component, ReactElement, Fragment } from 'react';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/Version';
import Readme from '../Readme';
import Versions from '../Versions';
import { preventXSS } from '../../utils/sec-utils';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Content } from './styles';
import Dependencies from '../Dependencies';
import UpLinks from '../UpLinks';

interface DetailContainerState {
  tabPosition: number;
}

export const README_LABEL = 'Readme';
export const DEPS_LABEL = 'Dependencies';
export const VERSION_LABEL = 'Versions';
export const UPLINKS_LABEL = 'Uplinks';

class DetailContainer<P> extends Component<P, DetailContainerState> {
  public state = {
    tabPosition: 0,
  };

  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return this.renderTabs(context as VersionPageConsumerProps);
        }}
      </DetailContextConsumer>
    );
  }

  private handleChange = (event: React.ChangeEvent<{}>, tabPosition: number) => {
    event.preventDefault();
    this.setState({ tabPosition });
  };

  private renderListTabs(tabPosition: number): React.ReactElement<HTMLElement> {
    return (
      <Tabs indicatorColor={'primary'} onChange={this.handleChange} textColor={'primary'} value={tabPosition} variant={'fullWidth'}>
        <Tab data-testid={'readme-tab'} id={'readme-tab'} label={README_LABEL} />
        <Tab data-testid={'dependencies-tab'} id={'dependencies-tab'} label={DEPS_LABEL} />
        <Tab data-testid={'versions-tab'} id={'versions-tab'} label={VERSION_LABEL} />
        <Tab data-testid={'uplinks-tab'} id={'uplinks-tab'} label={UPLINKS_LABEL} />
      </Tabs>
    );
  }

  private renderTabs = ({ readMe }) => {
    const { tabPosition } = this.state;

    return (
      <Fragment>
        <Content>
          {this.renderListTabs(tabPosition)}
          <br />
          {tabPosition === 0 && this.renderReadme(readMe)}
          {tabPosition === 1 && <Dependencies />}
          {tabPosition === 2 && <Versions />}
          {tabPosition === 3 && <UpLinks />}
        </Content>
      </Fragment>
    );
  };

  private renderReadme = (readMe: string): ReactElement<HTMLElement> => {
    const encodedReadme = preventXSS(readMe);

    return <Readme description={encodedReadme} />;
  };
}

export default DetailContainer;
