export interface PackageMetaInterface {
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
