import styled, { css } from 'react-emotion';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { StyledOtherComponent } from 'create-emotion-styled';
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

const commonStyle = ({ size = 'sm' as Breakpoint, pointer, modifiers = null }): string => css`
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

export const ImgWrapper: StyledOtherComponent<
  {
    size?: Breakpoint;
    pointer: boolean;
    modifiers?: null | undefined;
    name?: string | unknown;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  {}
> = styled('span')`
  ${commonStyle};
  box-sizing: initial;
`;

export const Img = styled('img')({
  '&&': {
    width: '100%',
    height: 'auto',
  },
});
