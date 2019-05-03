/**
 * @prettier
 */

import React from 'react';

import { Wrapper } from './styles';
import { IProps } from './types';

const Tag: React.FC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Tag;
