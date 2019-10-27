import React, { Fragment, ReactElement } from 'react';
import Divider from '@material-ui/core/Divider';

import Package from '../Package';
import Help from '../Help';
import { formatLicense } from '../../utils/package';
import { PackageInterface } from '../Package/Package';

import * as classes from './styles';

interface Props {
  packages: PackageInterface[];
}

export const PackageList: React.FC<Props> = props => {
  const renderPackages: () => ReactElement<HTMLElement>[] = () => {
    return props.packages.map((pkg, i) => {
      const { name, version, description, time, keywords, dist, homepage, bugs, author } = pkg;
      // TODO: move format license to API side.
      const license = formatLicense(pkg.license);
      return (
        <Fragment key={i}>
          {i !== 0 && <Divider />}
          <Package {...{ name, dist, version, author, description, license, time, keywords, homepage, bugs }} />
        </Fragment>
      );
    });
  };

  const hasPackages: () => boolean = () => props.packages.length > 0;

  return (
    <div className={'package-list-items'}>
      <div className={classes.pkgContainer}>{hasPackages() ? renderPackages() : <Help />}</div>
    </div>
  );
};
