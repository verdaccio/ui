import styled from '@emotion/styled';
import React from 'react';

import { Theme } from 'verdaccio-ui/design-tokens/theme';

import Paper from '../Paper';
import TextField from '../TextField';

export interface InputFieldProps {
  color: string;
}

export const Wrapper = styled('div')({
  width: '100%',
  height: '32px',
  position: 'relative',
  zIndex: 1,
});

export const StyledTextField = styled(TextField)<{ theme?: Theme }>(props => ({
  '& .MuiInputBase-root': {
    ':before': {
      content: "''",
      border: 'none',
    },
    ':after': {
      borderColor: props.theme && props.theme.palette.white,
    },
    ':hover:before': {
      content: 'none',
    },
  },
  '& .MuiInputBase-input': {
    color: props.theme && props.theme.palette.white,
  },
}));

/* eslint-disable verdaccio/jsx-spread */
// @ts-ignore types of color are incompatible
export const InputField: React.FC<InputFieldProps> = ({ ...others }) => <StyledTextField {...others} />;

export const SuggestionContainer = styled(Paper)({
  maxHeight: '500px',
  overflowY: 'auto',
});
