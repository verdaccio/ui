

import styled from 'react-emotion';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import colors from '../../utils/styles/colors';

export const TitleListItem = styled(ListItem)`
  && {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const TitleListItemText = styled(ListItemText)`
  && {
    padding-left: 0;
    padding-right: 0;
    padding-top: 8px;
  }
`;

export const TitleAvatar = styled(Avatar)`
  && {
    color: ${colors.greySuperLight};
    background-color: ${colors.primary};
    text-transform: capitalize;
  }
`;
