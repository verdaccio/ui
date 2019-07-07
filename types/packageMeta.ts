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
    license: string;
  };
  _uplinks: {};
}
