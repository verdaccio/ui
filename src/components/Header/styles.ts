import styled, { css } from 'react-emotion';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import colors from '../../utils/styles/colors';
import mq from '../../utils/styles/media';

export const InnerNavBar = styled(Toolbar)`
  && {
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
`;

export const Greetings = styled('span')`
  && {
    margin: 0 5px 0 0;
  }
`;

export const RightSide = styled(Toolbar)`
  && {
    display: flex;
    padding: 0;
  }
`;

export const LeftSide = styled(RightSide)`
  && {
    flex: 1;
  }
`;

export const MobileNavBar = styled('div')`
  && {
    align-items: center;
    display: flex;
    border-bottom: 1px solid ${colors.greyLight};
    padding: 8px;
    position: relative;
  }
`;

export const InnerMobileNavBar = styled('div')`
  && {
    border-radius: 4px;
    background-color: ${colors.greyLight};
    color: ${colors.white};
    width: 100%;
    padding: 0px 5px;
    margin: 0 10px 0 0;
  }
`;

export const IconSearchButton = styled(IconButton)`
  && {
    display: block;
  }
`;

export const SearchWrapper = styled('div')`
  && {
    display: none;
    max-width: 393px;
    width: 100%;
  }
`;

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
