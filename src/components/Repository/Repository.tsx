/* eslint react/jsx-max-depth: 0 */

import List from '@material-ui/core/List';
import React, { Component, Fragment, ReactElement } from 'react';

import Avatar from '../../muiComponents/Avatar';
import { DetailContextConsumer } from '../../pages/Version';
import { isURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';

import git from './img/git.png';
import { GithubLink, StyledText, RepositoryListItem, RepositoryListItemText } from './styles';

class Repository extends Component {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return context && context.packageMeta && this.renderRepository(context.packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  private renderRepositoryText(url: string): ReactElement<HTMLElement> {
    return (
      <GithubLink href={url} target="_blank">
        {url}
      </GithubLink>
    );
  }

  private renderRepository = packageMeta => {
    const { repository: { url = null } = {} } = packageMeta.latest;

    if (!url || isURL(url) === false) {
      return null;
    }

    return (
      <Fragment>
        <List dense={true} subheader={<StyledText variant="subtitle1">{'Repository'}</StyledText>}>
          <RepositoryListItem button={true}>
            <Avatar src={git} />
            <RepositoryListItemText primary={this.renderContent(url)} />
          </RepositoryListItem>
        </List>
      </Fragment>
    );
  };

  private renderContent(url: string): ReactElement<HTMLElement> {
    return <CopyToClipBoard text={url}>{this.renderRepositoryText(url)}</CopyToClipBoard>;
  }
}

export default Repository;
