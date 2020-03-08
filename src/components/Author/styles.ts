import styled from '@emotion/styled';

import ListItem from '../../muiComponents/ListItem';
import Text from '../../muiComponents/Text';
import ListItemText from '../../muiComponents/ListItemText';
import { Theme } from '../../design-tokens/theme';

export const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
}));

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
