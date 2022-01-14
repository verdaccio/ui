import styled from '@emotion/styled';
import { Theme } from 'verdaccio-ui/design-tokens/theme';

import TextField from '../TextField';

export interface InputFieldProps {
  color: string;
}

export const Wrapper = styled('div')({
  width: '100%',
  position: 'relative',
  zIndex: 1,
});

export const StyledTextField = styled(TextField)<{ theme?: Theme }>((props) => ({
  '& .MuiInputBase-root': {
    ':before': {
      content: "''",
      border: 'none',
    },
    ':after': {
      borderColor: props.theme?.palette.white,
    },
    ':hover:before': {
      content: 'none',
    },
    ':hover:after': {
      content: 'none',
      transform: 'scaleX(1)',
    },
    [`@media screen and (min-width: ${props.theme?.breakPoints.medium}px)`]: {
      ':hover:after': {
        content: "''",
      },
    },
  },
  '& .MuiInputBase-input': {
    [`@media screen and (min-width: ${props.theme?.breakPoints.medium}px)`]: {
      color: props.theme?.palette.white,
    },
  },
}));
