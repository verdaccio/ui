import styled from 'react-emotion';
import { default as MuiFab } from '@material-ui/core/Fab';


import colors from '../../utils/styles/colors';
import ListItem from '../ListItem'

export const ActionListItem = styled(ListItem)`
  && {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Fab = styled(MuiFab)`
  && {
    background-color: ${colors.primary};
    color: ${colors.white};
    margin-right: 10px;
  }
`;
