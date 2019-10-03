export interface PackageMetaInterface {
  versions?: Versions;
  distTags?: DistTags;
  time?: Time;
  latest: {
    name: string;
    dist: {
      fileCount: number;
      unpackedSize: number;
    };
    license?: Partial<LicenseInterface> | string;
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
  maintainers?: Maintainer[];
  description?: string;
  license?: string;
  main?: string;
  keywords?: string[];
}

interface Author {
  name?: string;
  email?: string;
  url?: string;
}

interface Maintainer {
  email?: string;
  name?: string;
}
