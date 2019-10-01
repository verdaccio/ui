import React, { useState, useEffect, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';

import { RightSide } from './styles';

import HeaderToolTip from './HeaderToolTip';
import HeaderMenu from './HeaderMenu';

interface Props {
  withoutSearch?: boolean;
  username?: string;
  onToggleLogin: () => void;
  onOpenRegistryInfoDialog: () => void;
  onToggleMNav: () => void;
  onLogout: () => void;
}

const HeaderRight: React.FC<Props> = ({ withoutSearch = false, username, onToggleLogin, onLogout, onToggleMNav, onOpenRegistryInfoDialog }) => {
  const [anchorEl, setAnchorEl] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState();

  useEffect(() => {
    setIsMenuOpen(Boolean(anchorEl));
  }, [anchorEl]);

  /**
   * opens popover menu for logged in user.
   */
  const handleLoggedInMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * closes popover menu for logged in user
   */
  const handleLoggedInMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   * close/open popover menu for logged in users.
   */
  const handleToggleLogin = () => {
    setAnchorEl(null);
    onToggleLogin();
  };

  return (
    <RightSide>
      {!withoutSearch && <HeaderToolTip onClick={onToggleMNav} title={'Search packages'} tooltipIconType={'search'} />}
      <HeaderToolTip title={'Documentation'} tooltipIconType={'help'} />
      <HeaderToolTip onClick={onOpenRegistryInfoDialog} title={'Registry Information'} tooltipIconType={'info'} />
      {username ? (
        <HeaderMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          onLoggedInMenu={handleLoggedInMenu}
          onLoggedInMenuClose={handleLoggedInMenuClose}
          onLogout={onLogout}
          username={username}
        />
      ) : (
        <Button color="inherit" id="header--button-login" onClick={handleToggleLogin}>
          {'Login'}
        </Button>
      )}
    </RightSide>
  );
};

export default HeaderRight;
