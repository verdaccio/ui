import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const getSize = (size: Breakpoint): string => {
  switch (size) {
    case 'md':
      return `
        width: 18px;
        height: 18px;
      `;
    default:
      return `
        width: 14px;
        height: 16px;
      `;
  }
};

const commonStyle = ({ size = 'sm' as Breakpoint, pointer, modifiers = null }) => css`
  && {
    display: inline-block;
    cursor: ${pointer ? 'pointer' : 'Developers'};
    ${getSize(size)};
    ${modifiers && modifiers};
  }
`;

export const Svg = styled('svg')`
  ${commonStyle};
  box-sizing: initial;
`;

export const ImgWrapper = styled('span')`
  ${commonStyle};
  box-sizing: initial;
`;

export const Img = styled('img')({
  '&&': {
    width: '100%',
    height: 'auto',
  },
});
