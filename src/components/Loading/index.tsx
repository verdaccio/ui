/**
 * @prettier
 */

import React from 'react';

import Logo from '../Logo';
import Spinner from '../Spinner';

import { Wrapper, Badge } from './styles';

const Loading: React.FC = (): React.ReactElement<HTMLDivElement> => (
  <Wrapper>
    <Badge>
      <Logo md={true} />
    </Badge>
    <Spinner />
  </Wrapper>
);

export default Loading;
