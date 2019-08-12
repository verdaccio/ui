import styled from 'react-emotion';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { fontWeight } from '../../utils/styles/sizes';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: fontWeight.bold,
    textTransform: 'capitalize',
  },
});
export const AuthorListItem = styled(ListItem)({
  '&&': {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
