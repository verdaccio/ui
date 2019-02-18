/**
 * @prettier
 */

import React from 'react';

import Package from '../Package/Package';
import Help from '../Help';
import { formatAuthor, formatLicense } from '../../utils/package';

// @ts-ignore
import classes from './packageList.scss';

interface Props {
  packages: Array<any>;
  isUserLoggedIn?: boolean;
}

const PackageList: React.FC<Props> = ({ packages, isUserLoggedIn }) => {
  const hasPackages = () => packages && packages.length > 0;

  const renderList = () =>
    packages.map((pkg, i) => {
      const { name, version, description, time, keywords } = pkg;
      const author = formatAuthor(pkg.author);
      const license = formatLicense(pkg.license);
      return <Package key={i} {...{ name, version, author, description, license, time, keywords }} />;
    });

  return (
    <div className={'package-list-items'}>
      <div className={classes.pkgContainer}>{hasPackages() ? renderList() : <Help />}</div>
    </div>
  );
};

export default PackageList;
