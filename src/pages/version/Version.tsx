import React, { useEffect, useState, useCallback } from 'react';

import { callDetailPage } from '../../utils/calls';
import { buildScopePackage } from '../../utils/package';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound';

import { VersionRender } from './VersionRender';
import { DetailContextProvider } from './context';
import { StateInterface } from './types';

export function getRouterPackageName(params): string {
  const packageName = params.package;
  const { scope } = params;
  if (scope) {
    return buildScopePackage(scope, packageName);
  }

  return packageName;
}

const Version = ({ match: { params } }) => {
  const handleRouterPackageName = useCallback(() => getRouterPackageName(params), [params]);

  const [readMe, setReadme] = useState();
  const [packageName] = useState(handleRouterPackageName);
  const [packageMeta, setPackageMeta] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { readMe, packageMeta } = (await callDetailPage(packageName)) as Partial<StateInterface>;
        setReadme(readMe);
        setPackageMeta(packageMeta);
        setIsLoading(false);
      } catch (error) {
        setNotFound(true);
        setIsLoading(false);
      }
    })();
  }, [packageName]);

  useEffect(() => {
    document.title = `Verdaccio - ${packageName}`;
  });

  if (isLoading) {
    return <Loading />;
  } else if (notFound || typeof packageMeta === 'undefined' || typeof packageName === 'undefined' || typeof readMe === 'undefined') {
    return <NotFound />;
  } else {
    return (
      <DetailContextProvider value={{ packageMeta, readMe, packageName, enableLoading: setIsLoading }}>
        <VersionRender />
      </DetailContextProvider>
    );
  }
};

export default Version;
