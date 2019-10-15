import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import Search from '../Search/';

import HeaderLogo from './HeaderLogo';
import { LeftSide, SearchWrapper } from './styles';

interface Props {
  withoutSearch?: boolean;
  logo?: string;
}

const HeaderLeft: React.FC<Props> = ({ withoutSearch = false, logo }) => (
  <LeftSide>
    <Link
      className={css`
        margin-right: 1em;
      `}
      to={'/'}>
      <HeaderLogo logo={logo} />
    </Link>
    {!withoutSearch && (
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    )}
  </LeftSide>
);

export default HeaderLeft;
