/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';

import TextField from '../TextField/TextField';
import { IInputField } from './types';

export const Wrapper = styled('div')`
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
      input: `
        && {
          ${color &&
            `
              color: ${color};
            `};
        }
      `,
      root: `
        && {
          &:before {
            content: '';
            border: none;
          }
          &:after {
            ${color &&
              `
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
