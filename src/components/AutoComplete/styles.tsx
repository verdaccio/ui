import React from 'react';
import styled, { css } from 'react-emotion';

import TextField from '../../muiComponents/TextField';
import Paper from '../../muiComponents/Paper';

export interface InputFieldProps {
  color: string;
}

export const Wrapper = styled('div')({
  '&&': {
    width: '100%',
    height: '32px',
    position: 'relative',
    zIndex: 1,
  },
});

/* eslint-disable verdaccio/jsx-spread */
export const InputField: React.FC<InputFieldProps> = ({ color, ...others }) => (
  <TextField
    {...others}
    classes={{
      // @ts-ignore
      input: css`
        && {
          ${color &&
            css`
              color: ${color};
            `};
        }
      `,
      root: css`
        && {
          &:before {
            content: '';
            border: none;
          }
          &:after {
            ${color &&
              css`
                border-color: ${color};
              `};
          }
          &:hover:before {
            content: none;
          }
        }
      `,
    }}
  />
);

export const SuggestionContainer = styled(Paper)({
  '&&': {
    maxHeight: '500px',
    overflowY: 'auto',
  },
});
