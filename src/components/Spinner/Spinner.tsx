

import React from 'react';

import { Circular, Wrapper } from './styles';
import { IProps } from './types';

const Spinner: React.FC<IProps> = ({ size = 50, centered = false }) => (
  // @ts-ignore
  <Wrapper centered={centered}>
    <Circular size={size} />
  </Wrapper>
);

export default Spinner;
