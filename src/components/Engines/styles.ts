import styled from 'react-emotion';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: 700,
    textTransform: 'capitalize',
  },
});

export const EngineListItem = styled(ListItem)({
  '&&': {
    paddingLeft: 0,
  },
});
