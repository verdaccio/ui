import React, { forwardRef } from 'react';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';
import Search from '@material-ui/icons/Search';

import IconButton from '../../muiComponents/IconButton';

import { IconSearchButton, StyledLink } from './styles';

export type TooltipIconType = 'search' | 'help' | 'info';

interface Props {
  tooltipIconType: TooltipIconType;
  onClick?: () => void;
}

/* eslint-disable react/display-name */
// FIXME any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderToolTipIcon = forwardRef<any, Props>(function HeaderToolTipIcon({ tooltipIconType, onClick }, ref) {
  switch (tooltipIconType) {
    case 'help':
      return (
        <StyledLink data-testid={'header--tooltip-documentation'} external={true} to={'https://verdaccio.org/docs/en/installation'}>
          <IconButton color={'inherit'}>
            <Help />
          </IconButton>
        </StyledLink>
      );
    case 'info':
      return (
        <IconButton color="inherit" data-testid={'header--tooltip-info'} id="header--button-registryInfo" onClick={onClick} ref={ref}>
          <Info />
        </IconButton>
      );
    case 'search':
      return (
        <IconSearchButton color="inherit" onClick={onClick} ref={ref}>
          <Search />
        </IconSearchButton>
      );
    default:
      return null;
  }
});

export default HeaderToolTipIcon;
