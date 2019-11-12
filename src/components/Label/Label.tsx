import React, { ComponentType } from 'react';
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

const Wrapper = styled('div')<WrapperProps>(({ weight, capitalize, modifiers }) => ({
  fontWeight: fontWeight[weight],
  textTransform: capitalize ? 'capitalize' : 'none',
  modifiers,
}));

const Label: React.FC<Props> = ({ text = '', capitalize = false, weight = 'regular', ...props }) => {
  return (
    <Wrapper capitalize={capitalize} weight={weight} {...props}>
      {text}
    </Wrapper>
  );
};

export default Label;
