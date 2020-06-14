import styled from '@emotion/styled';

import Text from '../../../../components/Text';
import FloatingActionButton from '../../../../components/FloatingActionButton';
import { Theme } from '../../../../design-tokens/theme';

export const Details = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Content = styled('div')({
  margin: '10px 0 10px 0',
  display: 'flex',
  flexWrap: 'wrap',
  '> *': {
    margin: '5px',
  },
});

export const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  marginBottom: '10px',
  textTransform: 'capitalize',
}));

export const Fab = styled(FloatingActionButton)<{ theme?: Theme }>(props => ({
  backgroundColor: props.theme && props.theme.palette.primary.main,
  color: props.theme && props.theme.palette.white,
}));
