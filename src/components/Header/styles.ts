import styled from '@emotion/styled';
import { css } from '@emotion/core';

import colors from '../../utils/styles/colors';
import { breakpoints } from '../../utils/styles/media';
import IconButton from '../../muiComponents/IconButton';
import AppBar from '../../muiComponents/AppBar';
import Toolbar from '../../muiComponents/Toolbar';
import Link from '../Link';

export const InnerNavBar = styled(Toolbar)({
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 15px',
});

export const Greetings = styled('span')({
  margin: '0 5px 0 0',
});

export const RightSide = styled(Toolbar)({
  display: 'flex',
  padding: 0,
});

export const LeftSide = styled(RightSide)({
  flex: 1,
});

export const MobileNavBar = styled('div')({
  alignItems: 'center',
  display: 'flex',
  borderBottom: `1px solid ${colors.greyLight}`,
  padding: '8px',
  position: 'relative',
});

export const InnerMobileNavBar = styled('div')({
  borderRadius: '4px',
  backgroundColor: colors.greyLight,
  color: colors.white,
  width: '100%',
  padding: '0 5px',
  margin: '0 10px 0 0',
});

export const IconSearchButton = styled(IconButton)({
  display: 'block',
});

export const SearchWrapper = styled('div')({
  display: 'none',
  maxWidth: '393px',
  width: '100%',
});

export const NavBar = styled(AppBar)({
  backgroundColor: colors.primary,
  minHeight: 60,
  display: 'flex',
  justifyContent: 'center',
  [`@media (min-width: ${breakpoints.medium}px)`]: css`
    ${SearchWrapper} {
      display: flex;
    }
    ${IconSearchButton} {
      display: none;
    }
    ${MobileNavBar} {
      display: none;
    }
  `,
  [`@media (min-width: ${breakpoints.large}px)`]: css`
    ${InnerNavBar} {
      padding: 0 20px;
    }
  `,
  [`@media (min-width: ${breakpoints.xlarge}px)`]: css`
    ${InnerNavBar} {
      max-width: 1240px;
      width: 100%;
      margin: 0 auto;
    }
  `,
});

export const StyledLink = styled(Link)({
  color: 'white',
});
