import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Search from '../Search/';

import HeaderLogo from './HeaderLogo';
import { LeftSide, SearchWrapper } from './styles';

interface Props {
  withoutSearch?: boolean;
  logo?: string;
}

const StyledLink = styled(Link)({
  marginRight: '1em',
});

const HeaderLeft: React.FC<Props> = ({ withoutSearch = false, logo }) => (
  <LeftSide>
    <StyledLink to={'/'}>
      <HeaderLogo logo={logo} />
    </StyledLink>
    {!withoutSearch && (
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    )}
  </LeftSide>
);

export default HeaderLeft;
