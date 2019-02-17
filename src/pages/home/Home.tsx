/**
 * @prettier
 */

import React from 'react';

import PackageList from '../../components/PackageList';

interface Props {
  packages: Array<any>;
  isUserLoggedIn?: boolean;
}

const Home: React.FC<Props> = ({ packages, isUserLoggedIn }): React.ReactElement<HTMLDivElement> => (
  <div className={'container content'}>
    <PackageList packages={packages} isUserLoggedIn={isUserLoggedIn} />
  </div>
);

Home.defaultProps = {
  isUserLoggedIn: false,
};

export default Home;
