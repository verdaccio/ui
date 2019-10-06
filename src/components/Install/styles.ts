import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';
import { fontWeight } from '../../utils/styles/sizes';

import Avatar from '../../muiComponents/Avatar';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: fontWeight.bold,
    textTransform: 'capitalize',
  },
});

export const InstallItem = styled(ListItem)({
  '&&': {
    padding: 0,
  },
  '&&:hover': {
    backgroundColor: 'transparent',
  },
});

export const InstallListItemText = styled(ListItemText)({
  '&&': {
    padding: '0 10px',
    margin: 0,
  },
});

export const PackageMangerAvatar = styled(Avatar)({
  '&&': {
    borderRadius: '0px',
    padding: '0',
  },
});
