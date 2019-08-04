import styled from 'react-emotion';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import colors from '../../utils/styles/colors';

export const TitleListItem = styled(ListItem)({
  '&&': {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
});

export const TitleListItemText = styled(ListItemText)({
  '&&': {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: '8px',
  },
});

export const TitleAvatar = styled(Avatar)({
  '&&': {
    color: colors.greySuperLight,
    backgroundColor: colors.primary,
    textTransform: 'capitalize',
  },
});
