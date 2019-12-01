/* eslint react/jsx-max-depth: 0 */

import React from 'react';
import styled from '@emotion/styled';

import Avatar from '../../muiComponents/Avatar';
import Text from '../../muiComponents/Text';
import ListItem from '../../muiComponents/ListItem';
import ListItemText from '../../muiComponents/ListItemText';
import { isURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';
import List from '../../muiComponents/List';
import { DetailContext } from '../../pages/Version';
import { Theme } from '../../design-tokens/theme';
import { fontWeight } from '../../utils/styles/sizes';

import git from './img/git.png';

const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

const GithubLink = styled('a')<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.primary.main,
}));

const RepositoryListItem = styled(ListItem)({
  padding: 0,
  ':hover': {
    backgroundColor: 'transparent',
  },
});

const RepositoryListItemText = styled(ListItemText)({
  padding: '0 10px',
  margin: 0,
});

/* eslint-disable react/jsx-wrap-multilines */
const Repository: React.FC = () => {
  const detailContext = React.useContext(DetailContext);

  const { packageMeta } = detailContext;

  if (!packageMeta?.latest?.repository?.url || !isURL(packageMeta.latest.repository.url)) {
    return null;
  }

  const { url } = packageMeta.latest.repository;

  const getCorrectRepositoryURL = (): string => {
    if (!url.includes('git+')) {
      return url;
    }

    return url.split('git+')[1];
  };

  const repositoryURL = getCorrectRepositoryURL();

  return (
    <List dense={true} subheader={<StyledText variant="subtitle1">{'Repository'}</StyledText>}>
      <RepositoryListItem button={true}>
        <Avatar src={git} />
        <RepositoryListItemText
          primary={
            <CopyToClipBoard text={repositoryURL}>
              <GithubLink href={repositoryURL} target="_blank">
                {repositoryURL}
              </GithubLink>
            </CopyToClipBoard>
          }
        />
      </RepositoryListItem>
    </List>
  );
};

export default Repository;
