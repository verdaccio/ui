import React from 'react';

import Logo from '../Logo';

import Spinner from './Spinner';
import { Wrapper, Badge } from './styles';

const Loading: React.FC = () => (
  <Wrapper data-testid="loading">
    <Badge>
      <Logo size="big" />
    </Badge>
    <Spinner />
  </Wrapper>
);

export default Loading;
