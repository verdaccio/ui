import React, { useContext } from 'react';

import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound';

import VersionLayout from './VersionLayout';
import { DetailContext } from './context';

const Version: React.FC = () => {
  const detailContext = useContext(DetailContext);
  const { isLoading, hasNotBeenFound } = detailContext;

  if (isLoading) {
    return <Loading />;
  }

  if (hasNotBeenFound) {
    return <NotFound />;
  }

  return <VersionLayout />;
};

export default Version;
