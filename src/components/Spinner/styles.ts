import styled from '@emotion/styled';

import CircularProgress from '../../muiComponents/CircularProgress';
import { Theme } from '../../design-tokens/theme';

interface WrapperProps {
  centered: boolean;
}

export const Wrapper = styled('div')<WrapperProps>(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...(props.centered && {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
}));

export const Circular = styled(CircularProgress)<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.primary.main,
}));
