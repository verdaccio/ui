import { css } from '@emotion/core';
import styled from '@emotion/styled';

import colors from '../../utils/styles/colors';

export const Content = styled('div')({
  '&&': {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },
});

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled('div')`
  && {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    ${({ isLoading }: ContainerProps) =>
      isLoading &&
      css`
        ${Content} {
          background-color: #f5f6f8;
        }
      `}
`;
