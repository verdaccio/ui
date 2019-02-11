/**
 * @prettier
 */

import React from 'react';
import { Wrapper, Circular } from './styles';

interface Props {
  size?: number;
  centered?: boolean;
}

const Spinner: React.FC<Props> = ({ size, centered }): React.ReactElement<HTMLDivElement> => (
  // @ts-ignore
  <Wrapper centered={centered}>
    // @ts-ignore
    <Circular size={size} />
  </Wrapper>
);

Spinner.defaultProps = {
  size: 50,
  centered: false,
};

export default Spinner;
