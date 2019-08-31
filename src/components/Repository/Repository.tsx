/* eslint react/jsx-max-depth: 0 */

import React, { Component, Fragment, ReactElement } from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import { DetailContextConsumer } from '../../pages/Version';
import CopyToClipBoard from '../CopyToClipBoard';

import { Heading, GithubLink, RepositoryListItem, RepositoryListItemText } from './styles';

import git from './img/git.png';
import { isURL } from '../../utils/url';

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
        <List dense={true} subheader={<Heading variant="subtitle1">{'Repository'}</Heading>}>
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
