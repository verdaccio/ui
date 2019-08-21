import React, { Component, ReactElement } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';

import ActionBar from '../ActionBar/ActionBar';
import Author from '../Author';
import Developers from '../Developers';
import Dist from '../Dist/Dist';
import Engine from '../Engines/Engines';
import Install from '../Install';
import Repository from '../Repository/Repository';

import { DetailContextConsumer } from '../../pages/version/context';
import { VersionPageConsumerProps } from '../../pages/version/types';

import { TitleListItem, TitleListItemText } from './styles';

class DetailSidebar extends Component {
  public render(): ReactElement<HTMLElement> {
    return <DetailContextConsumer>{context => this.renderSideBar(context as VersionPageConsumerProps)}</DetailContextConsumer>;
  }

  private renderSideBar = ({ packageName, packageMeta }): ReactElement<HTMLElement> => {
    return (
      <div className={'sidebar-info'}>
        <Card>
          <CardContent>
            {this.renderTitle(packageName, packageMeta)}
            {this.renderActionBar()}
            {this.renderCopyCLI()}
            {this.renderRepository()}
            {this.renderEngine()}
            {this.renderDist()}
            {this.renderAuthor()}
            {this.renderMaintainers()}
            {this.renderContributors()}
          </CardContent>
        </Card>
      </div>
    );
  };

  private renderTitle = (packageName, packageMeta) => {
    return (
      <List className="detail-info">
        <TitleListItem alignItems="flex-start">
          <TitleListItemText primary={<b>{packageName}</b>} secondary={packageMeta.latest.description} />
        </TitleListItem>
      </List>
    );
  };

  private renderCopyCLI = () => {
    return <Install />;
  };

  private renderMaintainers = () => {
    return <Developers type="maintainers" />;
  };

  private renderContributors = () => {
    return <Developers type="contributors" />;
  };

  private renderRepository = () => {
    return <Repository />;
  };

  private renderAuthor = () => {
    return <Author />;
  };

  private renderEngine = () => {
    return <Engine />;
  };

  private renderDist = () => {
    return <Dist />;
  };

  private renderActionBar = () => {
    return <ActionBar />;
  };
}

export default DetailSidebar;
