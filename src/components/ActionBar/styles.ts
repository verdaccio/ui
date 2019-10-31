import styled from 'react-emotion';

import colors from '../../utils/styles/colors';
import ListItem from '../../muiComponents/ListItem';
import FloatingActionButton from '../../muiComponents/FloatingActionButton';

export const ActionListItem = styled(ListItem)({
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
});

export const Fab = styled(FloatingActionButton)({
  backgroundColor: colors.primary,
  color: colors.white,
  marginRight: '10px',
});
