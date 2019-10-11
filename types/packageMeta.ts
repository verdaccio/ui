export interface PackageMetaInterface {
  versions?: Versions;
  distTags?: DistTags;
  time?: Time;
  latest: {
    author?: Author;
    name: string;
    dist: {
      fileCount: number;
      unpackedSize: number;
    };
    license?: Partial<LicenseInterface> | string;
    version: string;
  };
  _uplinks: {};
}

interface LicenseInterface {
  type: string;
  url: string;
}

export interface DistTags {
  [key: string]: string;
}

export interface Time {
  [key: string]: string;
}

export interface Versions {
  [key: string]: Version;
}

export interface Version {
  name: string;
  version: string;
  author?: string | Author;
  description?: string;
  license?: string;
  main?: string;
  keywords?: string[];
}

export interface Author {
  name?: string;
  email?: string;
  url?: string;
  avatar?: string;
}

export interface PackageDependencies {
  [key: string]: string;
}
