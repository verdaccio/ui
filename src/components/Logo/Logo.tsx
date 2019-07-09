import React from 'react';

import styled from 'react-emotion';
import logo from './img/logo.svg';

interface Props {
  md?: boolean;
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
    width: ${({ md }) => (md ? '90px' : '40px')};
    height: ${({ md }) => (md ? '90px' : '40px')};
`;
const Logo: React.FC<Props> = ({ md = false }) => {
  return <StyledLogo md={md} />;
};

export default Logo;
