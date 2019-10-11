import styled from 'react-emotion';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const AuthorListItem = styled(ListItem)({
  '&&': {
    padding: 0,
  },
  '&&:hover': {
    backgroundColor: 'transparent',
  },
});

export const AuthorListItemText = styled(ListItemText)({
  '&&': {
    padding: '0 10px',
    margin: 0,
  },
});
