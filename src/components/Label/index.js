/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import { fontWeight } from '../../utils/styles/sizes';
import { IProps } from './types';

const Wrapper = styled('div')`
  font-weight: ${({ weight }) => fontWeight[weight]};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  ${({ modifiers }: IProps) => modifiers && modifiers};
`;

const Label = ({ text = '', capitalize = false, weight = 'regular', ...props }: IProps) => {
  return (
    <Wrapper capitalize={capitalize} weight={weight} {...props}>
      {text}
    </Wrapper>
  );
};

export default Label;
