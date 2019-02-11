/**
 * @prettier
 */

import React from 'react';
import { Wrapper, Circular } from './styles';

interface Props {
  size?: number;
  centered?: boolean;
}

// @ts-ignore-start
const Spinner: React.FC<Props> = ({ size, centered }): React.ReactElement<HTMLDivElement> => (
  <Wrapper centered={centered}>
    <Circular size={size} />
  </Wrapper>
);
// @ts-ignore-end

Spinner.defaultProps = {
  size: 50,
  centered: false,
};

export default Spinner;
