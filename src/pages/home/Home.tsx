import React from 'react';

import PackageList from '../../components/PackageList';

interface Props {
  isUserLoggedIn: boolean;
  packages: [];
}

const Home: React.FC<Props> = ({ packages }) => (
  <div className={'container content'}>
    <PackageList packages={packages} />
  </div>
);

export default Home;
