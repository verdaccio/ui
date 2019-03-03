/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  margin: 5em 0;
`;

interface Props {
  text: string;
}

const NoItems: React.FC<Props> = ({ text }) => (
  <Wrapper>
    <h2>{text}</h2>
  </Wrapper>
);

export default NoItems;
