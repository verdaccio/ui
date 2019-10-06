import React, { useState } from 'react';

import Search from '../Search';
import { getRegistryURL } from '../../utils/url';

import { NavBar, InnerNavBar, MobileNavBar, InnerMobileNavBar } from './styles';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderInfoDialog from './HeaderInfoDialog';
import Button from '../../muiComponents/Button';

interface Props {
  logo?: string;
  username?: string;
  onLogout: () => void;
  onToggleLoginModal: () => void;
  scope: string;
  withoutSearch?: boolean;
}

/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-no-bind*/
const Header: React.FC<Props> = ({ logo, withoutSearch, username, onLogout, onToggleLoginModal, scope }) => {
  const [isInfoDialogOpen, setOpenInfoDialog] = useState();
  const [showMobileNavBar, setShowMobileNavBar] = useState();

  return (
    <>
      <NavBar position="static">
        <InnerNavBar>
          <HeaderLeft logo={logo} />
          <HeaderRight
            onLogout={onLogout}
            onOpenRegistryInfoDialog={() => setOpenInfoDialog(true)}
            onToggleLogin={onToggleLoginModal}
            onToggleMNav={() => setShowMobileNavBar(!showMobileNavBar)}
            username={username}
            withoutSearch={withoutSearch}
          />
        </InnerNavBar>
        <HeaderInfoDialog isOpen={isInfoDialogOpen} onCloseDialog={() => setOpenInfoDialog(false)} registryUrl={getRegistryURL()} scope={scope} />
      </NavBar>
      {showMobileNavBar && !withoutSearch && (
        <MobileNavBar>
          <InnerMobileNavBar>
            <Search />
          </InnerMobileNavBar>
          <Button color="inherit">{'Cancel'}</Button>
        </MobileNavBar>
      )}
    </>
  );
};

export default Header;
