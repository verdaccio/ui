import React from 'react';
import styled from '@emotion/styled';

import { fontWeight } from '../../utils/styles/sizes';

interface Props {
  text: string;
  capitalize?: boolean;
  weight?: string;
}

interface WrapperProps {
  capitalize: boolean;
  weight: string;
}

const Wrapper = styled('div')<WrapperProps>(props => ({
  fontWeight: fontWeight[props.weight],
  textTransform: props.capitalize ? 'capitalize' : 'none',
}));

const Label: React.FC<Props> = ({ text = '', capitalize = false, weight = 'regular', ...props }) => {
  return (
    <Wrapper capitalize={capitalize} weight={weight} {...props}>
      {text}
    </Wrapper>
  );
};

export default Label;
