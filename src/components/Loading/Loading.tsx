

import React from 'react';

import Logo from '../Logo';
import Spinner from '../Spinner';

import { Wrapper, Badge } from './styles';

const Loading: React.FC = () => (
  <Wrapper>
    <Badge>
      <Logo size="md" />
    </Badge>
    <Spinner />
  </Wrapper>
);

export default Loading;
