import styled from 'react-emotion';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: 700,
    textTransform: 'capitalize',
  },
});
export const AuthorListItem = styled(ListItem)({
  '&&': {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
