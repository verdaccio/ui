import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';
import Search from '@material-ui/icons/Search';

import { IconSearchButton, StyledExternalLink } from './styles';

export type TooltipIconType = 'search' | 'help' | 'info';

interface Props {
  tooltipIconType: TooltipIconType;
  onClick?: () => void;
}

const HeaderToolTipIcon: React.FC<Props> = ({ tooltipIconType, onClick }) => {
  switch (tooltipIconType) {
    case 'help':
      return (
        <StyledExternalLink blank={true} to={'https://verdaccio.org/docs/en/installation'}>
          <IconButton color={'inherit'} onClick={onClick}>
            <Help />
          </IconButton>
        </StyledExternalLink>
      );
    case 'info':
      return (
        <IconButton color="inherit" id="header--button-registryInfo" onClick={onClick}>
          <Info />
        </IconButton>
      );
    case 'search':
      return (
        <IconSearchButton color="inherit" onClick={onClick}>
          <Search />
        </IconSearchButton>
      );
    default:
      return null;
  }
};

export default HeaderToolTipIcon;
