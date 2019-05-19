

import styled, { css } from 'react-emotion';

const getSize = (size?: 'md' | 'sm') => {
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

const commonStyle = ({ size = 'sm', pointer, modifiers }: any) => css`
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
