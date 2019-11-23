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

const StyledLogo = styled('div')<Props>(props => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundImage: `url(${logo})`,
  backgroundRepeat: ' no-repeat',
  width: props.size,
  height: props.size,
}));

const Logo: React.FC<Props> = ({ size = Size.Small }) => {
  return <StyledLogo size={size} />;
};

export default Logo;
