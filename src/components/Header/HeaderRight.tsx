import React, { useState, useEffect, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../muiComponents/Button';

import { RightSide } from './styles';
import HeaderToolTip from './HeaderToolTip';
import HeaderMenu from './HeaderMenu';

interface Props {
  withoutSearch?: boolean;
  username?: string;
  onToggleLogin: () => void;
  onOpenRegistryInfoDialog: () => void;
  onToggleMobileNav: () => void;
  onLogout: () => void;
}

const HeaderRight: React.FC<Props> = ({
  withoutSearch = false,
  username,
  onToggleLogin,
  onLogout,
  onToggleMobileNav,
  onOpenRegistryInfoDialog,
}) => {
  const [anchorEl, setAnchorEl] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState();
  const { t } = useTranslation();

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
    <RightSide data-testid="header-right">
      {!withoutSearch && (
        <HeaderToolTip onClick={onToggleMobileNav} title={t('search.packages')} tooltipIconType={'search'} />
      )}
      <HeaderToolTip title={t('header.documentation')} tooltipIconType={'help'} />
      <HeaderToolTip onClick={onOpenRegistryInfoDialog} title={t('header.registry-info')} tooltipIconType={'info'} />
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
        <Button color="inherit" data-testid="header--button-login" onClick={handleToggleLogin}>
          {t('button.login')}
        </Button>
      )}
    </RightSide>
  );
};

export default HeaderRight;
