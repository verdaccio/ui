import styled from '@emotion/styled';

import ListItem from '../../muiComponents/ListItem';
import FloatingActionButton from '../../muiComponents/FloatingActionButton';
import { Theme } from '../../design-tokens/theme';

export const ActionListItem = styled(ListItem)({
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
});

export const Fab = styled(FloatingActionButton)<{ theme: Theme }>(props => ({
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.white,
  marginRight: '10px',
}));
