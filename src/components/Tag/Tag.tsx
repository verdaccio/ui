/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
// import { ellipsis } from '../../utils/styles/mixings';

export const Wrapper = styled('span')`
  && {
    vertical-align: middle;
    line-height: 22px;
    border-radius: 2px;
    color: #9f9f9f;
    background-color: hsla(0, 0%, 51%, 0.1);
    padding: 0.22rem 0.4rem;
    margin: 5px 10px 0 0;
  }
`;

const Tag: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Tag;
