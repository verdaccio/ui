/**
 * @prettier
 */

import React, { Component, ReactNode } from 'react';

import Avatar from '@material-ui/core/Avatar/index';
import List from '@material-ui/core/List/index';
import ListItemText from '@material-ui/core/ListItemText/index';

import { DetailContextConsumer } from '../../pages/version/Version';
import { Heading, AuthorListItem } from './styles';
import { isEmail } from '../../utils/url';

class Authors extends Component<any, any> {
  render() {
    return (
      <DetailContextConsumer>
        {(context: any) => {
          return this.renderAuthor(context);
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

  renderAuthor = ({ packageMeta }: any) => {
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
