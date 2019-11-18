import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Theme } from '../../design-tokens/theme';

export const Content = styled('div')<{ theme: Theme }>(props => ({
  backgroundColor: props.theme.palette.white,
  flex: 1,
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
}));

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled('div')<ContainerProps>(props => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  overflow: 'hidden',
  ...(props.isLoading &&
    css`
      ${Content} {
        background-color: #f5f6f8;
      }
    `),
}));
