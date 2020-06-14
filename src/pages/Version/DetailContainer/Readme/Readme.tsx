import React from 'react';
import 'github-markdown-css';
import styled from '@emotion/styled';

import { Theme } from '../../design-tokens/theme';

import { Props } from './types';

const Readme: React.FC<Props> = ({ description }) => (
  <Wrapper className="markdown-body" dangerouslySetInnerHTML={{ __html: description }} />
);

export default Readme;

const Wrapper = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  background: theme?.palette.white,
  color: theme?.palette.black,
  padding: theme?.spacing(2, 3),
}));
