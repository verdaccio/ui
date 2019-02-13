/**
 * @prettier
 */

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@emotion/styled';

interface Props {
  size?: number;
  centered?: boolean;
}

const Wrapper = styled('div')<{ centered?: boolean }>`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
      props.centered &&
      `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `};
  }
`;

const Spinner: React.FC<Props> = ({ size, centered }): React.ReactElement<HTMLDivElement> => (
  <Wrapper centered={centered}>
    <CircularProgress size={size} color="primary" />
  </Wrapper>
);

Spinner.defaultProps = {
  size: 50,
  centered: false,
};

export default Spinner;
