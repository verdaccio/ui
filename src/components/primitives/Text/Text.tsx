/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import { fontWeight } from '../../../utils/styles/sizes';

const Wrapper = styled('div')`
  font-weight: ${({ weight }) => fontWeight[weight as keyof typeof fontWeight]};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  ${({ modifiers }: Pick<Props, Exclude<keyof Props, 'text'>>) => modifiers && modifiers};
`;

interface Props {
  text: string;
  capitalize?: boolean;
  weight?: string;
  // TODO -> replace any by some proper type
  modifiers?: any;
}

const Text: React.FC<Props> = ({ text, ...props }) => <Wrapper {...props}>{text}</Wrapper>;

Text.defaultProps = {
  text: '',
  capitalize: false,
  weight: 'regular',
};

export default Text;
