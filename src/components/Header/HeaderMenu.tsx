import React, { MouseEvent } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';

import IconButton from '../../muiComponents/IconButton';
import MenuItem from '../../muiComponents/MenuItem';
import Menu from '../../muiComponents/Menu';

import HeaderGreetings from './HeaderGreetings';

interface Props {
  username: string;
  isMenuOpen: boolean;
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  onLogout: () => void;
  onLoggedInMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  onLoggedInMenuClose: () => void;
}

/* eslint-disable react/jsx-max-depth */
const HeaderMenu: React.FC<Props> = ({ onLogout, username, isMenuOpen = false, anchorEl, onLoggedInMenu, onLoggedInMenuClose }) => (
  <>
    <IconButton color="inherit" data-testid="header--menu-acountcircle" id="header--button-account" onClick={onLoggedInMenu}>
      <AccountCircle />
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="header--button-account"
      onClose={onLoggedInMenuClose}
      open={isMenuOpen}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <MenuItem disabled={true}>
        <HeaderGreetings username={username} />
      </MenuItem>
      <MenuItem id="header--button-logout" onClick={onLogout}>
        {'Logout'}
      </MenuItem>
    </Menu>
  </>
);

export default HeaderMenu;
