import React, { useEffect, useState } from 'react';

import { callDetailPage, callReadme } from '../../utils/calls';
import { buildScopePackage } from '../../utils/package';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound';

import { Layout } from './Layout';
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

function fillTitle(text: string): string {
  return `Verdaccio - ${text}`;
}

function isVersionValid(packageMeta, packageVersion): boolean {
  const hasVersion = typeof packageVersion !== 'undefined';
  if (!hasVersion) {
    // if is undefined, that means versions does not exist, we continue
    return true;
  }

  const hasMatchVersion = Object.keys(packageMeta.versions).includes(packageVersion);
  return hasMatchVersion;
}

const Version = ({ match: { params } }) => {
  const pkgName = getRouterPackageName(params);
  const [readMe, setReadme] = useState();
  const [packageName, setPackageName] = useState(pkgName);
  // eslint-disable-next-line no-unused-vars
  const [packageVersion, setPackageVersion] = useState(params.version);
  const [packageMeta, setPackageMeta] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const packageMeta = (await callDetailPage(packageName, packageVersion)) as Partial<StateInterface>;
        const readMe = (await callReadme(packageName, packageVersion)) as Partial<StateInterface>;
        if (isVersionValid(packageMeta, packageVersion)) {
          setReadme(readMe);
          setPackageMeta(packageMeta);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setNotFound(true);
        }
      } catch (error) {
        setNotFound(true);
        setIsLoading(false);
      }
    })();
  }, [packageName, packageVersion]);

  useEffect(() => {
    if (!packageVersion) {
      document.title = fillTitle(packageName);
    } else {
      document.title = fillTitle(`${packageName}@${packageVersion}`);
    }
  }, [packageName, packageVersion]);

  useEffect(() => {
    const pkgName = getRouterPackageName(params);

    setPackageName(pkgName);
    setPackageVersion(params.version);
  }, [params, setPackageName, setPackageVersion]);

  const isNotFound = notFound || typeof packageMeta === 'undefined' || typeof packageName === 'undefined' || typeof readMe === 'undefined';
  const renderContent = (): React.ReactElement<HTMLElement> => {
    if (isLoading) {
      return <Loading />;
    } else if (isNotFound) {
      return <NotFound />;
    } else {
      return <Layout />;
    }
  };

  return (
    <DetailContextProvider value={{ packageMeta, packageVersion, readMe, packageName, enableLoading: setIsLoading }}>{renderContent()}</DetailContextProvider>
  );
};

export default Version;
