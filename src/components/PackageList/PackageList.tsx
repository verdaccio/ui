/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Package from '../Package/Package';
import Help from '../Help';
import { formatAuthor, formatLicense } from '../../utils/package';

const useStyles = makeStyles(() => ({
  pkgContainer: {
    margin: 0,
    padding: 0,
  },
}));

interface Props {
  packages: Array<any>;
  isUserLoggedIn?: boolean;
}

const PackageList: React.FC<Props> = ({ packages, isUserLoggedIn }) => {
  const classes = useStyles();
  const hasPackages = () => packages && packages.length > 0;

  const renderList = () =>
    packages.map((pkg, i) => {
      const { name, version, description, time, keywords } = pkg;
      const author = formatAuthor(pkg.author);
      const license = formatLicense(pkg.license);
      return <Package key={i} {...{ name, version, author, description, license, time, keywords }} />;
    });

  return <div className={classes.pkgContainer}>{hasPackages() ? renderList() : <Help />}</div>;
};

export default PackageList;
