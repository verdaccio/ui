import styled from '@emotion/styled';

import { fontWeight } from '../../utils/styles/sizes';
import ListItem from '../../muiComponents/ListItem';
import Text from '../../muiComponents/Text';
import ListItemText from '../../muiComponents/ListItemText';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const AuthorListItem = styled(ListItem)({
  padding: 0,
  ':hover': {
    backgroundColor: 'transparent',
  },
});

export const AuthorListItemText = styled(ListItemText)({
  padding: '0 10px',
  margin: 0,
});
