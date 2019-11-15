import styled from '@emotion/styled';
import { css } from '@emotion/core';

import colors from '../../utils/styles/colors';
import CircularProgress from '../../muiComponents/CircularProgress';

interface WrapperProps {
  centered: boolean;
}

export const Wrapper = styled('div')`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props: WrapperProps) =>
      props.centered &&
      css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `};
  }
`;

export const Circular = styled(CircularProgress)({
  '&&': {
    color: colors.primary,
  },
});
