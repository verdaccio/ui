import styled from '@emotion/styled';

import ListItem from '../../muiComponents/ListItem';
import Text from '../../muiComponents/Text';
import { Theme } from '../../design-tokens/theme';

export const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  textTransform: 'capitalize',
}));

export const EngineListItem = styled(ListItem)({
  paddingLeft: 0,
});
