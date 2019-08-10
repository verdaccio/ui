import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';
import { fontWeight } from '../../utils/styles/sizes';

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
});

export const PackageMangerAvatar = styled(Avatar)({
  '&&': {
    borderRadius: '0px',
  },
});
