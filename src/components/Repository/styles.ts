import styled from 'react-emotion';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import Github from '../../icons/GitHub';
import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: fontWeight.bold,
    textTransform: 'capitalize',
  },
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
    paddingLeft: 0,
    paddingRight: 0,
  },
});
