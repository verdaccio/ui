/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';

import Logo from '../Logo';
import Spinner from '../Spinner';

export const Wrapper = styled('div')`
  && {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  }
`;

export const Badge = styled('div')`
  && {
    margin: 0 0 30px 0;
    border-radius: 25px;
    box-shadow: 0 10px 20px 0 rgba(69, 58, 100, 0.2);
    background: #f7f8f6;
  }
`;

const Loading: React.FC = (): React.ReactElement<HTMLDivElement> => (
  <Wrapper>
    <Badge>
      <Logo md={true} />
    </Badge>
    <Spinner />
  </Wrapper>
);

export default Loading;
