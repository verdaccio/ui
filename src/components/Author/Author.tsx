import React, { Component, ReactNode, ReactElement } from 'react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import { DetailContextConsumer } from '../../pages/Version';
import { Heading, AuthorListItem, AuthorListItemText } from './styles';
import { isEmail } from '../../utils/url';

class Authors extends Component {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          const { packageMeta } = context;

          if (!packageMeta) {
            return null;
          }

          return this.renderAuthor(packageMeta);
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

  public renderAuthor = ({ latest }) => {
    const { author, name: packageName, version } = latest;

    if (!author) {
      return null;
    }

    const avatarComponent = <Avatar alt={author.name} src={author.avatar} />;
    return (
      <List subheader={<Heading variant={'subtitle1'}>{'Author'}</Heading>}>
        <AuthorListItem button={true}>
          {this.renderLinkForMail(author.email, avatarComponent, packageName, version)}
          <AuthorListItemText primary={author.name} />
        </AuthorListItem>
      </List>
    );
  };
}

export default Authors;
