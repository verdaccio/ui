import React, { useContext } from 'react';

import Loading from '@verdaccio/components/Loading/Loading';
import NotFound from '@verdaccio/components/NotFound';

import { DetailContext } from './context';
import VersionLayout from './VersionLayout';

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
