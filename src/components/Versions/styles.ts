import styled from 'react-emotion';

import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';
import { default as MuiListItemText } from '../../muiComponents/ListItemText';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
});

export const Spacer = styled('div')({
  flex: '1 1 auto',
  borderBottom: '1px dotted rgba(0, 0, 0, 0.2)',
  whiteSpace: 'nowrap',
  height: '0.5em',
  margin: '0 16px',
});

export const ListItemText = styled(MuiListItemText)({
  flex: 'none',
  color: 'black',
  opacity: 0.6,
});
