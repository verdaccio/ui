export interface Author {
  name: string;
  avatar?: string;
  email?: string;
}

export interface PackageMetaInterface {
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
