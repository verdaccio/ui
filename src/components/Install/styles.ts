import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: 700,
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
