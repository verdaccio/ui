import styled from 'react-emotion';
import ListItem from '@material-ui/core/ListItem';

import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const EngineListItem = styled(ListItem)({
  '&&': {
    paddingLeft: 0,
  },
});
