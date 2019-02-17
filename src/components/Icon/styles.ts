/**
 * @prettier
 */

import styled from '@emotion/styled';
import { Props } from './Icon';

const getSize = (size: string) => {
  switch (size) {
    case 'md':
      return `
        width: 18px;
        height: 18px;
      `;
    case 'lg':
      return `
        width: 20px;
        height: 20px;
      `;
    default:
      return `
        width: 14px;
        height: 14px;
      `;
  }
};

const commonStyle = ({ size = 'sm', pointer, modifiers }: Pick<Props, 'size' | 'modifiers' | 'pointer'>) => `
  && {
    display: inline-block;
    cursor: ${pointer ? 'pointer' : 'default'};
    ${getSize(size)};
    ${modifiers && modifiers};
  }
`;

export const Svg = styled.svg`
  ${commonStyle};
`;

export const ImgWrapper = styled('span')`
  ${commonStyle};
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
