import React, { Component } from 'react';

import List from '@material-ui/core/List';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
import { Heading, DistListItem, DistChips } from './styles';
import fileSizeSI from '../../utils/file-size';
import { PackageMetaInterface } from 'types/packageMeta';
import { formatLicense } from '../../utils/package';

class Dist extends Component {
  public render(): JSX.Element {
    return (
      <DetailContextConsumer>
        {(context: Partial<VersionPageConsumerProps>) => {
          return context && context.packageMeta && this.renderDist(context.packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  private renderChips(dist, license: PackageMetaInterface['latest']['license']): (JSX.Element | undefined)[] {
    const distDict = {
      'file-count': dist.fileCount,
      size: dist.unpackedSize && fileSizeSI(dist.unpackedSize),
      license,
    };

    const chipsList = Object.keys(distDict).map((dist, key) => {
      if (!distDict[dist]) return;

      const value = dist === 'license' ? formatLicense(distDict[dist]) : distDict[dist];
      const label = (
        <span>
          {/* eslint-disable-next-line */}
          <b>{dist.replace('-', ' ')}</b>: {value}
        </span>
      );
      return <DistChips key={key} label={label} />;
    });

    return chipsList;
  }

  private renderDist = (packageMeta: PackageMetaInterface) => {
    const { dist, license } = packageMeta && packageMeta.latest;

    return (
      <List subheader={<Heading variant="subheading">{'Latest Distribution'}</Heading>}>
        <DistListItem>{this.renderChips(dist, license)}</DistListItem>
      </List>
    );
  };
}

export default Dist;
