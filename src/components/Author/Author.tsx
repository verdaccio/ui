import React, { Component, ReactNode, ReactElement } from 'react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { DetailContextConsumer } from '../../pages/Version';
import { Heading, AuthorListItem } from './styles';
import { isEmail } from '../../utils/url';

class Authors extends Component {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return context && context.packageMeta && this.renderAuthor(context.packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  public renderLinkForMail(email: string, avatarComponent: ReactNode, packageName: string, version: string): ReactElement<HTMLElement> | ReactNode {
    if (!email || isEmail(email) === false) {
      return avatarComponent;
    }

    return (
      <a href={`mailto:${email}?subject=${packageName}@${version}`} target={'_top'}>
        {avatarComponent}
      </a>
    );
  }

  public renderAuthor = packageMeta => {
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
