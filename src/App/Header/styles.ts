import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Theme } from '../../design-tokens/theme';
import IconButton from '../../components/IconButton';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';
import Link from '../../components/Link';

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

export const MobileNavBar = styled('div')<{ theme?: Theme }>(props => ({
  alignItems: 'center',
  display: 'flex',
  borderBottom: `1px solid ${props.theme && props.theme.palette.greyLight}`,
  padding: '8px',
  position: 'relative',
}));

export const InnerMobileNavBar = styled('div')<{ theme?: Theme }>(props => ({
  borderRadius: '4px',
  backgroundColor: props.theme && props.theme.palette.greyLight,
  color: props.theme && props.theme.palette.white,
  width: '100%',
  padding: '0 5px',
  margin: '0 10px 0 0',
}));

export const IconSearchButton = styled(IconButton)({
  display: 'block',
});

export const SearchWrapper = styled('div')({
  display: 'none',
  maxWidth: '393px',
  width: '100%',
});

export const NavBar = styled(AppBar)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme?.palette.type === 'light' ? theme?.palette.primary.main : theme?.palette.cyanBlue,
  color: theme?.palette.white,
  minHeight: 60,
  display: 'flex',
  justifyContent: 'center',
  [`@media (min-width: ${theme?.breakPoints.medium}px)`]: css`
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
  [`@media (min-width: ${theme?.breakPoints.large}px)`]: css`
    ${InnerNavBar} {
      padding: 0 20px;
    }
  `,
  [`@media (min-width: ${theme?.breakPoints.xlarge}px)`]: css`
    ${InnerNavBar} {
      max-width: 1240px;
      width: 100%;
      margin: 0 auto;
    }
  `,
}));

export const StyledLink = styled(Link)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.white,
}));
