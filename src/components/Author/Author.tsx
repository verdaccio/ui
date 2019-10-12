import React, { FC, useContext } from 'react';
import List from '@material-ui/core/List';

import { DetailContext } from '../../pages/Version';
import { isEmail } from '../../utils/url';
import Avatar from '../../muiComponents/Avatar';

import { StyledText, AuthorListItem, AuthorListItemText } from './styles';

const Author: FC = () => {
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
    <List subheader={<StyledText variant={'subtitle1'}>{'Author'}</StyledText>}>
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

export default Author;
