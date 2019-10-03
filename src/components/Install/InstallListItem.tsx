import React from 'react';
import styled from 'react-emotion';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import CopyToClipBoard from '../CopyToClipBoard';

// logos of package managers
import npmLogo from './img/npm.svg';
import pnpmLogo from './img/pnpm.svg';
import yarnLogo from './img/yarn.svg';

const InstallItem = styled(ListItem)({
  padding: 0,
  ':hover': {
    backgroundColor: 'transparent',
  },
});

const InstallListItemText = styled(ListItemText)({
  padding: '0 10px',
  margin: 0,
});

const PackageMangerAvatar = styled(Avatar)({
  borderRadius: '0px',
  padding: '0',
});

export enum DependencyManager {
  NPM = 'npm',
  YARN = 'yarn',
  PNPM = 'pnpm',
}

interface Interface {
  packageName: string;
  dependencyManager: DependencyManager;
}

const InstallListItem: React.FC<Interface> = ({ packageName, dependencyManager }) => {
  switch (dependencyManager) {
    case DependencyManager.NPM:
      return (
        <InstallItem button={true} data-testid={'installListItem-npm'}>
          <PackageMangerAvatar alt="npm" src={npmLogo} />
          <InstallListItemText primary={<CopyToClipBoard text={`npm install ${packageName}`} />} secondary={'Install using npm'} />
        </InstallItem>
      );
    case DependencyManager.YARN:
      return (
        <InstallItem button={true} data-testid={'installListItem-yarn'}>
          <PackageMangerAvatar alt="yarn" src={pnpmLogo} />
          <InstallListItemText primary={<CopyToClipBoard text={`npm install ${packageName}`} />} secondary={'Install using yarn'} />
        </InstallItem>
      );
    case DependencyManager.PNPM:
      return (
        <InstallItem button={true} data-testid={'installListItem-pnpm'}>
          <PackageMangerAvatar alt={'pnpm'} src={yarnLogo} />
          <InstallListItemText primary={<CopyToClipBoard text={`npm install ${packageName}`} />} secondary={'Install using pnpm'} />
        </InstallItem>
      );
    default:
      return null;
  }
};

export default InstallListItem;
