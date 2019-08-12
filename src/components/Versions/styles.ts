import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';
import { default as MuiListItemText } from '@material-ui/core/ListItemText';
import { fontWeight } from '../../utils/styles/sizes';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: fontWeight.bold,
  },
});

export const Spacer = styled('div')({
  flex: '1 1 auto',
  borderBottom: '1px dotted rgba(0, 0, 0, 0.2)',
  whiteSpace: 'nowrap',
  height: '0.5em',
});

export const ListItemText = styled(MuiListItemText)({
  '&&': {
    flex: 'none',
    color: 'black',
    opacity: 0.6,
  },
});
