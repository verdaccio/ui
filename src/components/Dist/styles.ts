import styled from '@emotion/styled';

import { Theme } from '../../design-tokens/theme';
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
  marginRight: 5,
  textTransform: 'capitalize',
});

export const DownloadButton = styled(FloatingActionButton)<{ theme: Theme }>(props => ({
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.white,
}));
