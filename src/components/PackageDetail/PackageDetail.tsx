import React from 'react';
import isNil from 'lodash/isNil';

import Readme from '../Readme/Readme';

// @ts-ignore
import classes from './packageDetail.scss';

interface Props {
  readMe?: string
  packageName: string
}
const PackageDetail: React.FC<Props> = ({ packageName, readMe }) => {

  const displayState = (description: string) => !isNil(description) ? <Readme description={description} /> : ''

  return (
    <div className={classes.pkgDetail}>
      <h1 className={classes.title}>
        {packageName}
      </h1>
      <div className={classes.readme}>
        {displayState(readMe!)}
      </div>
    </div>
  );
};

export default PackageDetail;
