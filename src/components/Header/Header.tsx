/**
 * @prettier
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { default as IconSearch } from '@material-ui/icons/Search';

import { getRegistryURL } from '../../utils/url';
import ExternalLink from '../Link/Link';
import Logo from '../Logo/Logo';
import RegistryInfoDialog from '../RegistryInfoDialog/RegistryInfoDialog';
import Label from '../Label';
import Search from '../Search';
import RegistryInfoContent from '../RegistryInfoContent';

import { useStyles } from './styles';

interface Props {
  logo: string;
  username?: string;
  onLogout?: () => void;
  onToggleLoginModal: () => void;
  scope: string;
  withoutSearch?: boolean;
}

type ToolTipType = 'search' | 'help' | 'info';

const Header: React.FC<Props> = ({ withoutSearch, logo, username, scope, onLogout, onToggleLoginModal }) => {
  const [openInfoDialog, setOpenInfoDialog] = React.useState(false);
  const [registryUrl] = React.useState(getRegistryURL());
  const [showMobileNavBar, setShowMobileNavBar] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleToggleMNav = () => {
    setShowMobileNavBar(!showMobileNavBar);
  };

  /**
   * closes popover menu for logged in user
   */
  const handleLoggedInMenuClose = () => {
    setAnchorEl(anchorEl);
  };

  /**
   * close/open popover menu for logged in users.
   */
  const handleToggleLogin = () => {
    setAnchorEl(null);
    onToggleLoginModal();
  };

  /**
   * opens registry information dialog.
   */
  const handleOpenRegistryInfoDialog = () => {
    setOpenInfoDialog(true);
  };

  /**
   * opens popover menu for logged in user.
   */
  const handleLoggedInMenu = (event: React.MouseEvent<HTMLElement | MouseEvent>) => {
    // setAnchorEl(event.currentTarget);
  };

  /**
   * closes registry information dialog.
   */
  const handleCloseRegistryInfoDialog = () => {
    setOpenInfoDialog(false);
  };

  /**
   * render popover menu
   */
  const renderMenu = () => {
    const open = Boolean(anchorEl);
    return (
      <>
        <IconButton color={'inherit'} id={'header--button-account'} onClick={handleLoggedInMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={'sidebar-menu'}
          onClose={handleLoggedInMenuClose}
          open={open}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <MenuItem disabled={true}>{renderGreetings()}</MenuItem>
          <MenuItem id={'header--button-logout'} onClick={onLogout}>
            {'Logout'}
          </MenuItem>
        </Menu>
      </>
    );
  };

  const renderLeftSide = () => (
    <>
      <Link style={{ marginRight: '1em' }} to={'/'}>
        {renderLogo()}
      </Link>
      {!withoutSearch && (
        <div className={classes.searchWrapper}>
          <Search />
        </div>
      )}
    </>
  );

  const renderLogo = () => (logo ? <img alt={'logo'} height={'40px'} src={logo} /> : <Logo />);

  const renderInfoDialog = () => (
    <RegistryInfoDialog onClose={handleCloseRegistryInfoDialog} open={openInfoDialog}>
      <RegistryInfoContent registryUrl={registryUrl} scope={scope} />
    </RegistryInfoDialog>
  );

  const renderRightSide = () => (
    <div className={classes.rightSide}>
      {!withoutSearch && renderToolTipIcon('Search packages', 'search')}
      {renderToolTipIcon('Documentation', 'help')}
      {renderToolTipIcon('Registry Information', 'info')}
      {username ? (
        renderMenu()
      ) : (
        <Button color={'inherit'} id={'header--button-login'} onClick={handleToggleLogin}>
          {'Login'}
        </Button>
      )}
    </div>
  );

  const renderGreetings = () => (
    <>
      <span className={classes.greetings}>{`Hi,`}</span>
      <Label capitalize={true} text={username!} weight={'bold'} />
    </>
  );

  const renderToolTipIcon = (title: string, type: ToolTipType) => {
    let content;
    switch (type) {
      case 'help':
        content = (
          <IconButton color={'inherit'}>
            <Help />
          </IconButton>
        );
        break;
      case 'info':
        content = (
          <IconButton color={'inherit'} id={'header--button-registryInfo'} onClick={handleOpenRegistryInfoDialog}>
            <Info />
          </IconButton>
        );
        break;
      case 'search':
        content = (
          <IconButton color={'inherit'} onClick={handleToggleMNav} className={classes.iconSearchButton}>
            <IconSearch />
          </IconButton>
        );
        break;
    }
    return (
      <Tooltip disableFocusListener={true} title={title}>
        <div>{content}</div>
      </Tooltip>
    );
  };

  return (
    <>
      <AppBar position={'static'} color={'primary'} className={classes.navBar}>
        <Toolbar className={classes.innerNavBar} disableGutters={true}>
          {renderLeftSide()}
          {renderRightSide()}
        </Toolbar>
        {renderInfoDialog()}
      </AppBar>
      {showMobileNavBar &&
        !withoutSearch && (
          <div className={classes.mobileNavBar}>
            <div className={classes.innerMobileNavBar}>
              <Search />
            </div>
            <Button color={'inherit'} onClick={handleToggleMNav}>
              {'Cancel'}
            </Button>
          </div>
        )}
    </>
  );
};

Header.defaultProps = {
  withoutSearch: false,
  username: '',
};

export default Header;
