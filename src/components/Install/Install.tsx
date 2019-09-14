import List from '@material-ui/core/List';
import React, { Component } from 'react';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/Version';

import CopyToClipBoard from '../CopyToClipBoard';

// logos of package managers
import npm from './img/npm.svg';
import pnpm from './img/pnpm.svg';
import yarn from './img/yarn.svg';

import { Heading, InstallItem, PackageMangerAvatar, InstallListItemText } from './styles';

class Install extends Component {
  public render(): JSX.Element {
    return (
      <DetailContextConsumer>
        {(context: Partial<VersionPageConsumerProps>) => {
          return context && context.packageName && this.renderCopyCLI(context);
        }}
      </DetailContextConsumer>
    );
  }

  public renderCopyCLI = ({ packageName = '' }: Partial<VersionPageConsumerProps>) => {
    return (
      <>
        <List subheader={<Heading variant={'subtitle1'}>{'Installation'}</Heading>}>{this.renderListItems(packageName)}</List>
      </>
    );
  };

  public renderListItems = (packageName: string) => {
    return (
      <>
        <InstallItem button={true}>
          <PackageMangerAvatar alt={'npm logo'} src={npm} />
          <InstallListItemText primary={<CopyToClipBoard text={`npm install ${packageName}`} />} secondary={'Install using NPM'} />
        </InstallItem>
        <InstallItem button={true}>
          <PackageMangerAvatar alt={'yarn logo'} src={yarn} />
          <InstallListItemText primary={<CopyToClipBoard text={`yarn add ${packageName}`} />} secondary={'Install using Yarn'} />
        </InstallItem>
        <InstallItem button={true}>
          <PackageMangerAvatar alt={'pnpm logo'} src={pnpm} />
          <InstallListItemText primary={<CopyToClipBoard text={`pnpm install ${packageName}`} />} secondary={'Install using PNPM'} />
        </InstallItem>
      </>
    );
  };
}

export default Install;
