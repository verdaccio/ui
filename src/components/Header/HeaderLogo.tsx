import React from 'react';
import styled from '@emotion/styled';

import Logo from '../Logo';

interface Props {
  logo?: string;
}

const HeaderLogo: React.FC<Props> = ({ logo }) => {
  if (logo) {
    const Wrapper = styled('div')({
      fontSize: 0,
    });
    return (
      <Wrapper>
        <img alt="logo" height="40px" src={logo} />
      </Wrapper>
    );
  }

  return <Logo />;
};

export default HeaderLogo;
