import React, { Component, ReactElement, Fragment } from 'react';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
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

class DetailContainer extends Component<any, DetailContainerState> {
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

  private handleChange = (event: any, tabPosition: number) => {
    event.preventDefault();
    this.setState({ tabPosition });
  };

  private renderListTabs(): React.ReactElement<HTMLElement> {
    return (
      <Fragment>
        <Tab id={'readme-tab'} label={'Readme'} />
        <Tab id={'dependencies-tab'} label={'Dependencies'} />
        <Tab id={'versions-tab'} label={'Versions'} />
        <Tab id={'uplinks-tab'} label={'Uplinks'} />
      </Fragment>
    );
  }

  private renderTabs = ({ readMe }) => {
    const { tabPosition } = this.state;

    return (
      <Fragment>
        <Content>
          <Tabs indicatorColor={'primary'} onChange={this.handleChange} textColor={'primary'} value={tabPosition} variant={'fullWidth'}>
            {this.renderListTabs()}
          </Tabs>
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
