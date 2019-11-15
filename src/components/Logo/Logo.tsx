import React from 'react';
import styled from '@emotion/styled';

import logo from './img/logo.svg';

export enum Size {
  Small = '40px',
  Big = '90px',
}

interface Props {
  size?: Size;
}

const StyledLogo = styled('div')<Props>`
  && {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-position: center;
    background-size: contain;
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`;
const Logo: React.FC<Props> = ({ size = Size.Small }) => {
  return <StyledLogo size={size} />;
};

export default Logo;
