/**
 * @prettier
 */

import styled from 'react-emotion';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

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
