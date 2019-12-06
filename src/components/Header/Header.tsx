import React, { useState, useContext } from 'react';

import storage from '../../utils/storage';
import { getRegistryURL } from '../../utils/url';
import Button from '../../muiComponents/Button';
import AppContext from '../../App/AppContext';
import LoginDialog from '../LoginDialog';
import Search from '../Search';

import { NavBar, InnerNavBar, MobileNavBar, InnerMobileNavBar } from './styles';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderInfoDialog from './HeaderInfoDialog';

interface Props {
  withoutSearch?: boolean;
}

/* eslint-disable react/jsx-no-bind*/
const Header: React.FC<Props> = ({ withoutSearch }) => {
  const appContext = useContext(AppContext);
  const [isInfoDialogOpen, setOpenInfoDialog] = useState();
  const [showMobileNavBar, setShowMobileNavBar] = useState();
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (!appContext) {
    throw Error('The app Context was not correct used');
  }

  const { user, scope, setUser } = appContext;
  const logo = window.VERDACCIO_LOGO;

  /**
   * Logouts user
   * Required by: <Header />
   */
  const handleLogout = () => {
    storage.removeItem('username');
    storage.removeItem('token');
    setUser(undefined);
  };

  return (
    <>
      <NavBar data-testid="header" position="static">
        <InnerNavBar>
          <HeaderLeft logo={logo} />
          <HeaderRight
            onLogout={handleLogout}
            onOpenRegistryInfoDialog={() => setOpenInfoDialog(true)}
            onToggleLogin={() => setShowLoginModal(!showLoginModal)}
            onToggleMobileNav={() => setShowMobileNavBar(!showMobileNavBar)}
            username={user && user.username}
            withoutSearch={withoutSearch}
          />
        </InnerNavBar>
        <HeaderInfoDialog
          isOpen={isInfoDialogOpen}
          onCloseDialog={() => setOpenInfoDialog(false)}
          registryUrl={getRegistryURL()}
          scope={scope}
        />
      </NavBar>
      {showMobileNavBar && !withoutSearch && (
        <MobileNavBar>
          <InnerMobileNavBar>
            <Search />
          </InnerMobileNavBar>
          <Button color="inherit" onClick={() => setShowMobileNavBar(false)}>
            {'Cancel'}
          </Button>
        </MobileNavBar>
      )}
      {!user && <LoginDialog onClose={() => setShowLoginModal(false)} open={showLoginModal} />}
    </>
  );
};

export default Header;
