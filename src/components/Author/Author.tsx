import React, { FC, useContext } from 'react';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

import { DetailContext } from '../../pages/Version';
import { Heading, AuthorListItem, AuthorListItemText } from './styles';
import { isEmail } from '../../utils/url';

const Authors: FC = () => {
  const { packageMeta } = useContext(DetailContext);

  if (!packageMeta) {
    return null;
  }

  const { author, name: packageName, version } = packageMeta.latest;

  if (!author) {
    return null;
  }

  const { email, name } = author;

  const avatarComponent = <Avatar alt={author.name} src={author.avatar} />;

  return (
    <List subheader={<Heading variant={'subtitle1'}>{'Author'}</Heading>}>
      <AuthorListItem button={true}>
        {!email || !isEmail(email) ? (
          avatarComponent
        ) : (
          <a href={`mailto:${email}?subject=${packageName}@${version}`} target={'_top'}>
            {avatarComponent}
          </a>
        )}

        <AuthorListItemText primary={name} />
      </AuthorListItem>
    </List>
  );
};

export default Authors;
