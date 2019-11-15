import styled from '@emotion/styled';

import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';
import ListItem from '../../muiComponents/ListItem';
import Text from '../../muiComponents/Text';
import FloatingActionButton from '../../muiComponents/FloatingActionButton';
import Chip from '../../muiComponents/Chip';

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const DistListItem = styled(ListItem)({
  paddingLeft: 0,
  paddingRight: 0,
});

export const DistChips = styled(Chip)({
  marginRight: '5px',
  textTransform: 'capitalize',
});

export const DownloadButton = styled(FloatingActionButton)({
  backgroundColor: colors.primary,
  color: colors.white,
});
