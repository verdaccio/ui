export interface PackageMetaInterface {
  latest: {
    author: {
      name: string;
      email?: string;
      avatar: string;
    };
    version: string;
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
