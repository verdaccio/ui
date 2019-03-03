/**
 * @prettier
 */

import React from 'react';

import PackageList from '../components/patterns/PackageList';

interface Props {
  packages: Array<any>;
  isUserLoggedIn?: boolean;
}

const Home: React.FC<Props> = ({ packages, isUserLoggedIn }): React.ReactElement<HTMLDivElement> => (
  <PackageList packages={packages} isUserLoggedIn={isUserLoggedIn} />
);

Home.defaultProps = {
  isUserLoggedIn: false,
};

export default Home;
