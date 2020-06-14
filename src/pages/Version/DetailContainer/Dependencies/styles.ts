import styled from '@emotion/styled';

import Card from '@verdaccio/components/Card';
import Chip from '@verdaccio/components/Chip';
import Text from '@verdaccio/components/Text';
import { Theme } from '@verdaccio/design-tokens/theme';

export const CardWrap = styled(Card)({
  margin: '0 0 16px',
});

export const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  textTransform: 'capitalize',
}));

export const Tags = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  flexWrap: 'wrap',
  margin: '0 -5px',
});

export const Tag = styled(Chip)({
  margin: '5px',
});
