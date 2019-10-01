import React, { MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
const HeaderMenu: React.FC<Props> = ({ onLogout, username, isMenuOpen, anchorEl, onLoggedInMenu, onLoggedInMenuClose }) => (
  <>
    <IconButton color="inherit" id="header--button-account" onClick={onLoggedInMenu}>
      <AccountCircle />
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="sidebar-menu"
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
