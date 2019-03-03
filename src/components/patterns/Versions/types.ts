/**
 * @prettier
 */

export interface Versions {
  [name: string]: {
    author: string;
    dependencies: Array<{ [key: string]: string }>;
    description: string;
    keywords: Array<string>;
    license: string;
    main: string;
    name: string;
    version: string;
    scripts: Array<{ [key: string]: string }>;
    dist: Array<{ [key: string]: string }>;
  };
}

export interface DistTag {
  [key: string]: {
    [key: string]: string;
  };
}
