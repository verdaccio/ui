import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Github from '../../icons/GitHub';
import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const GridRepo = styled(Grid)({
  '&&': {
    alignItems: 'center',
  },
});

export const GithubLink = styled('a')({
  '&&': {
    color: colors.primary,
  },
});

export const GithubLogo = styled(Github)({
  '&&': {
    fontSize: '40px',
    color: colors.primary,
    backgroundColor: colors.greySuperLight,
  },
});

export const RepositoryListItem = styled(ListItem)({
  '&&': {
    padding: 0,
  },
  '&&:hover': {
    backgroundColor: 'transparent',
  },
});

export const RepositoryListItemText = styled(ListItemText)({
  '&&': {
    padding: '0 10px',
    margin: 0,
  },
});
