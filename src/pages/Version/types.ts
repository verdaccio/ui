import { PackageMetaInterface } from '../../../types/packageMeta';

export interface DetailContextProps {
  packageMeta: PackageMetaInterface;
  packageVersion?: string;
  readMe: string;
  packageName: string;
  enableLoading: () => void;
}

export interface VersionPageConsumerProps {
  packageMeta: PackageMetaInterface;
  readMe: string;
  packageName: string;
  packageVersion?: string;
  // FIXME: looking for the appropiated type here
  enableLoading: any;
}

export interface PropsInterface {
  match: boolean;
}

export interface StateInterface {
  readMe: string;
  packageName: string;
  packageMeta?: PackageMetaInterface;
  isLoading: boolean;
  notFound: boolean;
}
