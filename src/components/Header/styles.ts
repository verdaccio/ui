import styled, { css } from 'react-emotion';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import colors from '../../utils/styles/colors';
import mq from '../../utils/styles/media';
import ExternalLink from '../Link';

import IconButton from '../../muiComponents/IconButton';

export const InnerNavBar = styled(Toolbar)({
  '&&': {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
  },
});

export const Greetings = styled('span')({
  '&&': {
    margin: '0 5px 0 0',
  },
});

export const RightSide = styled(Toolbar)({
  '&&': {
    display: 'flex',
    padding: 0,
  },
});

export const LeftSide = styled(RightSide)({
  '&&': {
    flex: 1,
  },
});

export const MobileNavBar = styled('div')({
  '&&': {
    alignItems: 'center',
    display: 'flex',
    borderBottom: `1px solid ${colors.greyLight}`,
    padding: '8px',
    position: 'relative',
  },
});

export const InnerMobileNavBar = styled('div')({
  '&&': {
    borderRadius: '4px',
    backgroundColor: colors.greyLight,
    color: colors.white,
    width: '100%',
    padding: '0 5px',
    margin: '0 10px 0 0',
  },
});

export const IconSearchButton = styled(IconButton)({
  '&&': {
    display: 'block',
  },
});

export const SearchWrapper = styled('div')({
  '&&': {
    display: 'none',
    maxWidth: '393px',
    width: '100%',
  },
});

export const NavBar = styled(AppBar)`
  && {
    background-color: ${colors.primary};
    min-height: 60px;
    display: flex;
    justify-content: center;
    ${() => {
      // @ts-ignore
      return mq.medium(css`
        ${SearchWrapper} {
          display: flex;
        }
        ${IconSearchButton} {
          display: none;
        }
        ${MobileNavBar} {
          display: none;
        }
      `);
    }};
    ${() => {
      // @ts-ignore
      return mq.large(css`
        ${InnerNavBar} {
          padding: 0 20px;
        }
      `);
    }};
    ${() => {
      // @ts-ignore
      return mq.xlarge(css`
        ${InnerNavBar} {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }
      `);
    }};
  }
`;

export const StyledExternalLink = styled(ExternalLink)({
  '&&': {
    color: 'white',
  },
});
