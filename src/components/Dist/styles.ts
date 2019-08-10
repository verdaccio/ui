import styled from 'react-emotion';
import { default as MuiFab } from '@material-ui/core/Fab';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: fontWeight.bold,
    textTransform: 'capitalize',
  },
});

export const DistListItem = styled(ListItem)({
  '&&': {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const DistChips = styled(Chip)({
  '&&': {
    marginRight: '5px',
    textTransform: 'capitalize',
  },
});

export const DownloadButton = styled(MuiFab)({
  '&&': {
    backgroundColor: colors.primary,
    color: colors.white,
  },
});
