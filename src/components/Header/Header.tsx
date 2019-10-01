import React, { SyntheticEvent, Component, Fragment, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { default as IconSearch } from '@material-ui/icons/Search';

import { getRegistryURL } from '../../utils/url';
import Logo from '../Logo';
import RegistryInfoDialog from '../RegistryInfoDialog/RegistryInfoDialog';
import Label from '../Label/Label';
import Search from '../Search/Search';
import RegistryInfoContent from '../RegistryInfoContent/RegistryInfoContent';
import Tooltip from '../../muiComponents/Tooltip';
import IconButton from '../../muiComponents/IconButton';

import {
  Greetings,
  NavBar,
  InnerNavBar,
  MobileNavBar,
  InnerMobileNavBar,
  LeftSide,
  RightSide,
  IconSearchButton,
  SearchWrapper,
  StyledExternalLink,
} from './styles';

interface Props {
  logo?: string;
  username?: string;
  onLogout: () => void;
  onToggleLoginModal: () => void;
  scope: string;
  withoutSearch?: boolean;
}

interface State {
  anchorEl?: null | Element | ((element: Element) => Element);
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

  public render(): ReactElement<HTMLElement> {
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
        {showMobileNavBar && !withoutSearch && (
          <MobileNavBar>
            <InnerMobileNavBar>
              <Search />
            </InnerMobileNavBar>
            <Button color="inherit" onClick={this.handleDismissMNav}>
              {'Cancel'}
            </Button>
          </MobileNavBar>
        )}
      </div>
    );
  }

  /**
   * opens popover menu for logged in user.
   */
  public handleLoggedInMenu = (event: SyntheticEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  /**
   * closes popover menu for logged in user
   */
  public handleLoggedInMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  /**
   * opens registry information dialog.
   */
  public handleOpenRegistryInfoDialog = () => {
    this.setState({
      openInfoDialog: true,
    });
  };

  /**
   * closes registry information dialog.
   */
  public handleCloseRegistryInfoDialog = () => {
    this.setState({
      openInfoDialog: false,
    });
  };

  /**
   * close/open popover menu for logged in users.
   */
  public handleToggleLogin = () => {
    const { onToggleLoginModal } = this.props;
    this.setState(
      {
        anchorEl: null,
      },
      onToggleLoginModal
    );
  };

  public handleToggleMNav = () => {
    const { showMobileNavBar } = this.state;
    this.setState({
      showMobileNavBar: !showMobileNavBar,
    });
  };

  public handleDismissMNav = () => {
    this.setState({
      showMobileNavBar: false,
    });
  };

  public renderLeftSide = () => {
    const { withoutSearch = false } = this.props;
    return (
      <LeftSide>
        <Link
          className={css`
            margin-right: 1em;
          `}
          to={'/'}>
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

  public renderLogo = () => {
    const { logo } = this.props;

    if (logo) {
      return <img alt="logo" height="40px" src={logo} />;
    } else {
      return <Logo />;
    }
  };

  public renderToolTipIcon = (title: string, type: ToolTipType) => {
    let content;
    switch (type) {
      case 'help':
        content = (
          // @ts-ignore
          <StyledExternalLink blank={true} to={'https://verdaccio.org/docs/en/installation'}>
            <IconButton color={'inherit'}>
              <Help />
            </IconButton>
          </StyledExternalLink>
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

  public renderRightSide = () => {
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
            {'Login'}
          </Button>
        )}
      </RightSide>
    );
  };

  private renderGreetings = () => {
    const { username = '' } = this.props;
    return (
      <Fragment>
        <Greetings>{'Hi,'}</Greetings>
        <Label capitalize={true} text={username} weight="bold" />
      </Fragment>
    );
  };

  /**
   * render popover menu
   */
  private renderMenu = () => {
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
            {'Logout'}
          </MenuItem>
        </Menu>
      </>
    );
  };

  private renderInfoDialog = () => {
    const { scope } = this.props;
    const { openInfoDialog, registryUrl } = this.state;
    return (
      <RegistryInfoDialog onClose={this.handleCloseRegistryInfoDialog} open={openInfoDialog}>
        <RegistryInfoContent registryUrl={registryUrl} scope={scope} />
      </RegistryInfoDialog>
    );
  };
}

export default Header;
