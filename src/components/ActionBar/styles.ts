import styled from 'react-emotion';
import { default as MuiFab } from '@material-ui/core/Fab';
import ListItem from '@material-ui/core/ListItem';

import colors from '../../utils/styles/colors';

export const ActionListItem = styled(ListItem)({
  '&&': {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const Fab = styled(MuiFab)({
  '&&': {
    backgroundColor: colors.primary,
    color: colors.white,
    marginRight: '10px',
  },
});
