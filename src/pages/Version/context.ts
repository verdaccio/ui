import { createContext, Consumer, Provider } from 'react';

import { PackageMetaInterface } from '../../../types/packageMeta';
export interface DetailContextProps {
  packageMeta: PackageMetaInterface;
  packageVersion?: string;
  readMe: string;
  packageName: string;
  enableLoading: () => void;
  isLoading: boolean;
  hasNotBeenFound: boolean;
}

export interface VersionPageConsumerProps {
  packageMeta: PackageMetaInterface;
  readMe: string;
  packageName: string;
  packageVersion?: string;
  // FIXME: looking for the appropiated type here
  enableLoading: any;
}

export const DetailContext = createContext<Partial<DetailContextProps>>({});

export const DetailContextProvider: Provider<Partial<VersionPageConsumerProps>> = DetailContext.Provider;
export const DetailContextConsumer: Consumer<Partial<VersionPageConsumerProps>> = DetailContext.Consumer;
