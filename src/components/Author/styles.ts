import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';

import ListItem from '../ListItem';

export const Heading = styled(Typography)`
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
export const AuthorListItem = styled(ListItem)`
  && {
    padding-left: 0;
    padding-right: 0;
  }
`;
