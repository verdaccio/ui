import React from 'react';

import styled from 'react-emotion';
import logo from './img/logo.svg';

const StyledLogo = styled.div`
  && {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    background-position: center;
    background-size: contain;
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;`;

const Logo: React.FC = () => {
  return <StyledLogo />;
};

export default Logo;
