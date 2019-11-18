import styled from '@emotion/styled';

import Github from '../../icons/GitHub';
import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';
import ListItem from '../../muiComponents/ListItem';
import ListItemText from '../../muiComponents/ListItemText';
import Grid from '../../muiComponents/Grid';
import { Theme } from '../../design-tokens/theme';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const GridRepo = styled(Grid)({
  alignItems: 'center',
});

export const GithubLink = styled('a')<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.primary.main,
}));

export const GithubLogo = styled(Github)<{ theme?: Theme }>(props => ({
  fontSize: 40,
  color: props.theme && props.theme.palette.primary.main,
  backgroundColor: props.theme && props.theme.palette.greySuperLight,
}));

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
