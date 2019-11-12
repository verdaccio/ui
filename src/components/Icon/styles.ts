import styled from '@emotion/styled';
import { css } from '@emotion/core';
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

interface CommonStyle {
  size?: Breakpoint;
  pointer?: boolean;
  modifiers?: any;
}

const commonStyle = ({ size = 'sm' as Breakpoint, pointer, modifiers = null }: CommonStyle) => css`
  display: inline-block;
  cursor: ${pointer ? 'pointer' : 'Developers'};
  ${getSize(size)};
  ${modifiers && modifiers};
`;

export const Svg = styled('svg')<CommonStyle>`
  ${commonStyle};
  box-sizing: initial;
`;

export const ImgWrapper = styled('span')<CommonStyle>`
  ${commonStyle};
  box-sizing: initial;
`;

export const Img = styled('img')({
  width: '100%',
  height: 'auto',
});
