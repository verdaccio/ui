import styled from '@emotion/styled';

import { fontSize } from '../../utils/styles/sizes';
import DialogTitle from '../../muiComponents/DialogTitle';
import DialogContent from '../../muiComponents/DialogContent';
import { Theme } from '../../design-tokens/theme';

export const Title = styled(DialogTitle)<{ theme: Theme }>(props => ({
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.white,
  fontSize: fontSize.lg,
}));

export const Content = styled(DialogContent)({
  padding: '0 24px',
});
