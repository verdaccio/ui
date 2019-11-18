import styled from '@emotion/styled';

import { fontWeight } from '../../utils/styles/sizes';
import ListItem from '../../muiComponents/ListItem';
import Text from '../../muiComponents/Text';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const EngineListItem = styled(ListItem)({
  paddingLeft: 0,
});
