import styled from '@emotion/styled';
import React from 'react';

import { Theme } from 'verdaccio-ui/design-tokens/theme';
import { useConfig } from 'verdaccio-ui/providers/config';

import blackAndWithLogo from './img/logo-black-and-white.svg';
import defaultLogo from './img/logo.svg';

const sizes = {
  'x-small': '30px',
  small: '40px',
  big: '90px',
};

const logos = {
  light: defaultLogo,
  dark: blackAndWithLogo,
};

interface Props {
  size?: keyof typeof sizes;
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<Props> = ({ size, onClick, className }) => {
  const { configOptions } = useConfig();
  if (configOptions?.logo) {
    return (
      <ImageLogo onClick={onClick} className={className}>
        <img alt="logo" height="40px" src={configOptions.logo} />
      </ImageLogo>
    );
  }
  return <StyledLogo size={size} onClick={onClick} className={className} />;
};

export default Logo;

const ImageLogo = styled('div')({
  fontSize: 0,
});

const StyledLogo = styled('div')<Props & { theme?: Theme }>(({ size = 'small', theme }) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundImage: `url(${logos[theme?.palette.type]})`,
  backgroundRepeat: ' no-repeat',
  width: sizes[size],
  height: sizes[size],
}));
