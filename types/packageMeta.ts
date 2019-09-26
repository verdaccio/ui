export interface PackageMetaInterface {
  versions: Versions;
  distTags: DistTags;
  time: Time;
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
  author: string | Author;
  maintainers: Maintainer[];
  name: string;
  description: string;
  license: string;
  main: string;
  version: string;
  keywords: string[];
}

interface Author {
  name: string;
  email: string;
  url?: string;
}

interface Maintainer {
  email: string;
  name: string;
}
