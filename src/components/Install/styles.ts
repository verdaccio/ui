import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';

import ListItem from '../ListItem'

export const Heading = styled(Typography)`
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const InstallItem = styled(ListItem)`
  && {
    padding: 0;
  }
`;

export const PackageMangerAvatar = styled(Avatar)`
  && {
    border-radius: 0px;
  }
`;
