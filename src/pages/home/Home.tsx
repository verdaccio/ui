import React, { useEffect, useState } from 'react';

import { PackageList } from '../../components/PackageList';
import API from '../../utils/api';
import Loading from '../../components/Loading';

interface Props {
  isUserLoggedIn: boolean;
}

const Home: React.FC<Props> = ({ isUserLoggedIn }) => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadPackages = async () => {
    try {
      const packages = await API.request('packages', 'GET');
      // FIXME add correct type for package
      setPackages(packages as never[]);
    } catch (error) {
      // FIXME: add dialog
      console.error({
        title: 'Warning',
        message: `Unable to load package list: ${error.message}`,
      });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    loadPackages().then();
  }, [isUserLoggedIn]);

  return <div className="container content">{isLoading ? <Loading /> : <PackageList packages={packages} />}</div>;
};

export default Home;
