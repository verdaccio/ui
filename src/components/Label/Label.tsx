import React from 'react';
import styled from '@emotion/styled';

import { fontWeight } from '../../utils/styles/sizes';

interface Props {
  text: string;
  capitalize?: boolean;
  weight?: string;
  modifiers?: null | undefined;
}

interface WrapperProps {
  capitalize: boolean;
  weight: string;
  modifiers?: null;
}
const Wrapper = styled('div')`
  font-weight: ${({ weight }: WrapperProps) => fontWeight[weight]};
  text-transform: ${({ capitalize }: WrapperProps) => (capitalize ? 'capitalize' : 'none')};
  ${({ modifiers }: WrapperProps) => modifiers};
`;

const Label: React.FC<Props> = ({ text = '', capitalize = false, weight = 'regular', ...props }) => {
  return (
    <Wrapper capitalize={capitalize} weight={weight} {...props}>
      {text}
    </Wrapper>
  );
};

export default Label;
