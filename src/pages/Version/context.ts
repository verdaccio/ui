import { createContext } from 'react';

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

export const DetailContext = createContext<Partial<DetailContextProps>>({});
export const DetailContextProvider = DetailContext.Provider;
export const DetailContextConsumer = DetailContext.Consumer;
