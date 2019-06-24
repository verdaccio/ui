import styled, { css } from 'react-emotion';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

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

const commonStyle = ({ size = 'sm' as Breakpoint, pointer, modifiers = null }): string => css`
  && {
    display: inline-block;
    cursor: ${pointer ? 'pointer' : 'default'};
    ${getSize(size)};
    ${modifiers && modifiers};
  }
`;

export const Svg = styled('svg')`
  && {
    ${commonStyle};
  }
`;

export const ImgWrapper = styled('span')`
  && {
    ${commonStyle};
  }
`;

export const Img = styled('img')`
  && {
    width: 100%;
    height: auto;
  }
`;
