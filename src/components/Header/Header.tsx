import React, { SyntheticEvent, Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { default as IconSearch } from '@material-ui/icons/Search';

import { getRegistryURL } from '../../utils/url';
import ExternalLink from '../Link';
import Logo from '../Logo';
import RegistryInfoDialog from '../RegistryInfoDialog/RegistryInfoDialog';
import Label from '../Label/Label';
import Search from '../Search/Search';
import RegistryInfoContent from '../RegistryInfoContent/RegistryInfoContent';

import { Greetings, NavBar, InnerNavBar, MobileNavBar, InnerMobileNavBar, LeftSide, RightSide, IconSearchButton, SearchWrapper } from './styles';

interface Props {
  logo: string;
  username?: string;
  onLogout: () => void;
  onToggleLoginModal: () => void;
  scope: string;
  withoutSearch?: boolean;
}

interface State {
  anchorEl?: any;
  openInfoDialog: boolean;
  registryUrl: string;
  showMobileNavBar: boolean;
}

type ToolTipType = 'search' | 'help' | 'info';

class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openInfoDialog: false,
      registryUrl: getRegistryURL(),
      showMobileNavBar: false,
    };
  }

  /**
   * opens popover menu for logged in user.
   */
  handleLoggedInMenu = (event: SyntheticEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  /**
   * closes popover menu for logged in user
   */
  handleLoggedInMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  /**
   * opens registry information dialog.
   */
  handleOpenRegistryInfoDialog = () => {
    this.setState({
      openInfoDialog: true,
    });
  };

  /**
   * closes registry information dialog.
   */
  handleCloseRegistryInfoDialog = () => {
    this.setState({
      openInfoDialog: false,
    });
  };

  /**
   * close/open popover menu for logged in users.
   */
  handleToggleLogin = () => {
    const { onToggleLoginModal } = this.props;
    this.setState(
      {
        anchorEl: null,
      },
      onToggleLoginModal
    );
  };

  handleToggleMNav = () => {
    const { showMobileNavBar } = this.state;
    this.setState({
      showMobileNavBar: !showMobileNavBar,
    });
  };

  handleDismissMNav = () => {
    this.setState({
      showMobileNavBar: false,
    });
  };

  renderLeftSide = () => {
    const { withoutSearch = false } = this.props;
    return (
      <LeftSide>
        <Link style={{ marginRight: '1em' }} to={'/'}>
          {this.renderLogo()}
        </Link>
        {!withoutSearch && (
          <SearchWrapper>
            <Search />
          </SearchWrapper>
        )}
      </LeftSide>
    );
  };

  renderLogo = () => {
    const { logo } = this.props;

    if (logo) {
      return <img alt="logo" height="40px" src={logo} />;
    } else {
      return <Logo />;
    }
  };

  renderToolTipIcon = (title: string, type: ToolTipType) => {
    let content;
    switch (type) {
      case 'help':
        content = (
          // @ts-ignore
          <IconButton blank={true} color={'inherit'} component={ExternalLink} to={'https://verdaccio.org/docs/en/installation'}>
            <Help />
          </IconButton>
        );
        break;
      case 'info':
        content = (
          <IconButton color="inherit" id="header--button-registryInfo" onClick={this.handleOpenRegistryInfoDialog}>
            <Info />
          </IconButton>
        );
        break;
      case 'search':
        content = (
          <IconSearchButton color="inherit" onClick={this.handleToggleMNav}>
            <IconSearch />
          </IconSearchButton>
        );
        break;
    }
    return (
      <Tooltip disableFocusListener={true} title={title}>
        {content}
      </Tooltip>
    );
  };

  renderRightSide = () => {
    const { username = '', withoutSearch = false } = this.props;
    return (
      <RightSide>
        {!withoutSearch && this.renderToolTipIcon('Search packages', 'search')}
        {this.renderToolTipIcon('Documentation', 'help')}
        {this.renderToolTipIcon('Registry Information', 'info')}
        {username ? (
          this.renderMenu()
        ) : (
          <Button color="inherit" id="header--button-login" onClick={this.handleToggleLogin}>
            Login
          </Button>
        )}
      </RightSide>
    );
  };

  renderGreetings = () => {
    const { username = '' } = this.props;
    return (
      <>
        <Greetings>Hi,</Greetings>
        <Label capitalize text={username} weight="bold" />
      </>
    );
  };

  /**
   * render popover menu
   */
  renderMenu = () => {
    const { onLogout } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <>
        <IconButton color="inherit" id="header--button-account" onClick={this.handleLoggedInMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id="sidebar-menu"
          onClose={this.handleLoggedInMenuClose}
          open={open}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <MenuItem disabled={true}>{this.renderGreetings()}</MenuItem>
          <MenuItem id="header--button-logout" onClick={onLogout}>
            Logout
          </MenuItem>
        </Menu>
      </>
    );
  };

  renderInfoDialog = () => {
    const { scope } = this.props;
    const { openInfoDialog, registryUrl } = this.state;
    return (
      <RegistryInfoDialog onClose={this.handleCloseRegistryInfoDialog} open={openInfoDialog}>
        <RegistryInfoContent registryUrl={registryUrl} scope={scope} />
      </RegistryInfoDialog>
    );
  };

  render() {
    const { showMobileNavBar } = this.state;
    const { withoutSearch = false } = this.props;
    return (
      <div>
        <NavBar position="static">
          <InnerNavBar>
            {this.renderLeftSide()}
            {this.renderRightSide()}
          </InnerNavBar>
          {this.renderInfoDialog()}
        </NavBar>
        {showMobileNavBar &&
          !withoutSearch && (
            <MobileNavBar>
              <InnerMobileNavBar>
                <Search />
              </InnerMobileNavBar>
              <Button color="inherit" onClick={this.handleDismissMNav}>
                Cancel
              </Button>
            </MobileNavBar>
          )}
      </div>
    );
  }
}

export default Header;
