import React from 'react';

import PackageList from '../../components/PackageList';
import Welcome from '../../components/Welcome';

interface Props {
  isUserLoggedIn: boolean;
  packages: [];
}

const Home: React.FC<Props> = ({ packages }) => {
  if (window.VERDACCIO_MODE === 'slim') {
    return <Welcome />;
  }
  return (
    <div className="container content">
      <PackageList packages={packages} />
    </div>
  );
};

export default Home;
