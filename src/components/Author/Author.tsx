import React, { Component, ReactNode } from 'react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { DetailContextConsumer } from '../../pages/version/Version';
import { Heading, AuthorListItem } from './styles';
import { isEmail } from '../../utils/url';

class Authors extends Component<any, any> {
  render() {
    return (
      <DetailContextConsumer>
        {(context: any) => {
          return context && context.packageMeta && this.renderAuthor(context.packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  renderLinkForMail(email: string, avatarComponent: ReactNode, packageName: string, version: string) {
    if (!email || isEmail(email) === false) {
      return avatarComponent;
    }

    return (
      <a href={`mailto:${email}?subject=${packageName}@${version}`} target={'_top'}>
        {avatarComponent}
      </a>
    );
  }

  renderAuthor = packageMeta => {
    const { author, name: packageName, version } = packageMeta.latest;

    if (!author) {
      return null;
    }

    const avatarComponent = <Avatar alt={author.name} src={author.avatar} />;
    return (
      <List subheader={<Heading variant={'subheading'}>{'Author'}</Heading>}>
        <AuthorListItem>
          {this.renderLinkForMail(author.email, avatarComponent, packageName, version)}
          <ListItemText primary={author.name} />
        </AuthorListItem>
      </List>
    );
  };
}

export default Authors;
