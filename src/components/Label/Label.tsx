import React from 'react';
import styled from 'react-emotion';
import { fontWeight } from '../../utils/styles/sizes';

interface Props {
  text: string;
  capitalize?: boolean;
  weight?: string;
  modifiers?: any;
}

const Wrapper = styled('div')`
  font-weight: ${({ weight }) => {
    // @ts-ignore
    return fontWeight[weight];
  }};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  ${({ modifiers }: Props) => modifiers && modifiers};
`;

const Label: React.FC<Props> = ({ text = '', capitalize = false, weight = 'regular', ...props }) => {
  return (
    // @ts-ignore
    <Wrapper capitalize={capitalize} weight={weight} {...props}>
      {text}
    </Wrapper>
  );
};

export default Label;
