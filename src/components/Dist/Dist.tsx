import React, { Component } from 'react';

import List from '@material-ui/core/List';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
import { Heading, DistListItem, DistChips } from './styles';
import fileSizeSI from '../../utils/file-size';
import { PackageMetaInterface } from 'types/packageMeta';

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

  private renderChips(dist, license: string): JSX.Element | never[] {
    const distDict = {
      'file-count': dist.fileCount,
      size: dist.unpackedSize && fileSizeSI(dist.unpackedSize),
      license,
    };

    const chipsList = Object.keys(distDict).reduce((componentList, title, key) => {
      // @ts-ignore
      const value = distDict[title];
      if (value) {
        const label = (
          <span>
            {/* eslint-disable-next-line */}
            <b>{title.split('-').join(' ')}</b>:{value}
          </span>
        );
        // @ts-ignore is not assignable to parameter of type 'never'
        componentList.push(<DistChips key={key} label={label} />);
      }
      return componentList;
    }, []);

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
