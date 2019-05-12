/**
 * @prettier
 * @flow
 */

import React from 'react';
import styled, { css } from 'react-emotion';
import Paper from '@material-ui/core/Paper';

import TextField from '../TextField';
import { IInputField } from './types';

export const Wrapper = styled.div`
  && {
    width: 100%;
    height: 32px;
    position: relative;
    z-index: 1;
  }
`;

export const InputField = ({ color, ...others }: IInputField) => (
  <TextField
    {...others}
    classes={{
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

export const SuggestionContainer = styled(Paper)`
  && {
    max-height: 500px;
    overflow-y: auto;
  }
`;
