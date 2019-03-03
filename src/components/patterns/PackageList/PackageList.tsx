/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Package from '../Package/Package';
import Help from '../Help';
import { formatAuthor, formatLicense } from '../../../utils/package';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflowY: 'scroll',
    maxHeight: '100%',
  },
}));

interface Props {
  packages: Array<any>;
  isUserLoggedIn?: boolean;
}

const PackageList: React.FC<Props> = ({ packages }) => {
  const classes = useStyles();
  return packages && packages.length > 0 ? (
    <List className={classes.container}>
      {packages.map(({ name, version, description, time, keywords, author, license }, index) => {
        const formattedAuthor = formatAuthor(author);
        const FormattedLicense = formatLicense(license);
        return <Package key={index} {...{ name, version, author: formattedAuthor, description, license: FormattedLicense, time, keywords }} />;
      })}
    </List>
  ) : (
    <Help />
  );
};

export default PackageList;
