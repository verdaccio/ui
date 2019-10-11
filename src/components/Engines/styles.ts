import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';

import { fontWeight } from '../../utils/styles/sizes';
import ListItem from '../../muiComponents/ListItem';

export const Heading = styled(Typography)({
  '&&': {
    fontWeight: fontWeight.bold,
    textTransform: 'capitalize',
  },
});

export const EngineListItem = styled(ListItem)({
  paddingLeft: 0,
});
