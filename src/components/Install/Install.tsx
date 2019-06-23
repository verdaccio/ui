import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import React, { Component } from 'react';

// @ts-ignore
import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
import CopyToClipBoard from '../CopyToClipBoard';

// logos of package managers
import npm from './img/npm.svg';
import pnpm from './img/pnpm.svg';
import yarn from './img/yarn.svg';

import { Heading, InstallItem, PackageMangerAvatar } from './styles';

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
        <List subheader={<Heading variant={'subheading'}>{'Installation'}</Heading>}>{this.renderListItems(packageName)}</List>
      </>
    );
  };

  public renderListItems = (packageName: string) => {
    return (
      <>
        <InstallItem>
          <PackageMangerAvatar alt={'npm logo'} src={npm} />
          <ListItemText primary={<CopyToClipBoard text={`npm install ${packageName}`} />} secondary={'Install using NPM'} />
        </InstallItem>
        <InstallItem>
          <PackageMangerAvatar alt={'yarn logo'} src={yarn} />
          <ListItemText primary={<CopyToClipBoard text={`yarn add ${packageName}`} />} secondary={'Install using Yarn'} />
        </InstallItem>
        <InstallItem>
          <PackageMangerAvatar alt={'pnpm logo'} src={pnpm} />
          <ListItemText primary={<CopyToClipBoard text={`pnpm install ${packageName}`} />} secondary={'Install using PNPM'} />
        </InstallItem>
      </>
    );
  };
}

export default Install;
