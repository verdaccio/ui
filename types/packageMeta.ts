export interface PackageMetaInterface {
  latest: {
    name: string;
    dist: {
      fileCount: number;
      unpackedSize: number;
    };
    license: string;
  };
  _uplinks: {};
}
