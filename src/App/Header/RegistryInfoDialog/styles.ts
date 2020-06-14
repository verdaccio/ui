import styled from '@emotion/styled';

import DialogTitle from '../../../components/DialogTitle';
import DialogContent from '../../../components/DialogContent';
import { Theme } from '../../../design-tokens/theme';

export const Title = styled(DialogTitle)<{ theme?: Theme }>(props => ({
  backgroundColor: props.theme && props.theme.palette.primary.main,
  color: props.theme && props.theme.palette.white,
  fontSize: props.theme && props.theme.fontSize.lg,
}));

export const Content = styled(DialogContent)<{ theme?: Theme }>(({ theme }) => ({
  padding: '0 24px',
  backgroundColor: theme?.palette.background.default,
}));
