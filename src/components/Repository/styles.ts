import styled from '@emotion/styled';

import Github from '../../icons/GitHub';
import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';
import ListItem from '../../muiComponents/ListItem';
import ListItemText from '../../muiComponents/ListItemText';
import Grid from '../../muiComponents/Grid';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const GridRepo = styled(Grid)({
  alignItems: 'center',
});

export const GithubLink = styled('a')({
  color: colors.primary,
});

export const GithubLogo = styled(Github)({
  fontSize: '40px',
  color: colors.primary,
  backgroundColor: colors.greySuperLight,
});

export const RepositoryListItem = styled(ListItem)({
  padding: 0,
  ':hover': {
    backgroundColor: 'transparent',
  },
});

export const RepositoryListItemText = styled(ListItemText)({
  padding: '0 10px',
  margin: 0,
});
