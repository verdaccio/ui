

import styled from 'react-emotion';
import { default as MuiFab } from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import colors from '../../utils/styles/colors';

export const Heading = styled(Typography)`
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const DistListItem = styled(ListItem)`
  && {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const DistChips = styled(Chip)`
  && {
    margin-right: 5px;
    text-transform: capitalize;
  }
`;

export const DownloadButton = styled(MuiFab)`
  && {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;
