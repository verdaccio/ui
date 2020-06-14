import styled from '@emotion/styled';
import React, { Fragment, ReactNode } from 'react';

import Divider from '@verdaccio/components/Divider';
import { formatLicense } from '@verdaccio/utils/package';

import Help from './Help';
import Package, { PackageInterface } from './Package';

const PkgContainer = styled('div')({
  margin: 0,
  padding: 0,
});

interface Props {
  packages: PackageInterface[];
}

export const PackageList: React.FC<Props> = ({ packages }) => {
  const renderPackages: () => ReactNode[] = () => {
    return packages.map(({ name, version, description, time, keywords, dist, homepage, bugs, author, license }, i) => {
      // TODO: move format license to API side.
      const _license = formatLicense(license);
      return (
        <Fragment key={i}>
          {i !== 0 && <Divider />}
          <Package
            {...{ name, dist, version, author, description, license: _license, time, keywords, homepage, bugs }}
          />
        </Fragment>
      );
    });
  };

  const hasPackages: () => boolean = () => packages.length > 0;

  return (
    <div className={'package-list-items'}>
      <PkgContainer>{hasPackages() ? renderPackages() : <Help />}</PkgContainer>
    </div>
  );
};
