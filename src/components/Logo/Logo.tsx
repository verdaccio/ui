import styled from '@emotion/styled';
import React from 'react';

import { Theme } from '@verdaccio/design-tokens/theme';

import blackAndWithLogo from './img/logo-black-and-white.svg';
import defaultLogo from './img/logo.svg';

export enum Size {
  Small = '40px',
  Big = '90px',
}

const logos = {
  light: defaultLogo,
  dark: blackAndWithLogo,
};

const logo = window.VERDACCIO_LOGO;

interface Props {
  size?: Size;
}

const Logo: React.FC<Props> = ({ size = Size.Small }) => {
  if (logo) {
    return (
      <ImageLogo>
        <img alt="logo" height="40px" src={logo} />
      </ImageLogo>
    );
  }
  return <StyledLogo size={size} />;
};

export default Logo;

const ImageLogo = styled('div')({
  fontSize: 0,
});

const StyledLogo = styled('div')<Props & { theme?: Theme }>(({ size, theme }) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundImage: `url(${logos[theme?.palette.type]})`,
  backgroundRepeat: ' no-repeat',
  width: size,
  height: size,
}));
