import React from 'react';

import Logo from '../Logo';

interface Props {
  logo?: string;
}

const HeaderLogo: React.FC<Props> = ({ logo }) => {
  if (logo) {
    return <img alt="logo" height="40px" src={logo} />;
  }

  return <Logo />;
};

export default HeaderLogo;
