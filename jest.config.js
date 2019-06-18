module.exports = {
  name: 'verdaccio-ui-jest',
  verbose: true,
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom-global',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testURL: 'http://localhost',
  rootDir: '..',
  setupFiles: ['<rootDir>/test/setup.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-syntax-highlighter)'],
  modulePathIgnorePatterns: ['<rootDir>/coverage', '<rootDir>/scripts', '<rootDir>/.circleci', '<rootDir>/tools', '<rootDir>/build', '<rootDir>/.vscode/'],
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
  moduleNameMapper: {
    '\\.(s?css)$': '<rootDir>/node_modules/identity-obj-proxy',
    'github-markdown-css': '<rootDir>/node_modules/identity-obj-proxy',
    '\\.(png)$': '<rootDir>/node_modules/identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/test/unit/empty.ts',
  },
};

// module.exports = {
//   name: 'verdaccio-unit-jest',
//   verbose: true,
//   collectCoverage: true,
//   testEnvironment: 'jest-environment-jsdom-global',
//   testURL: 'http://localhost',
//   testRegex: '../src/components/CopyToClipBoard/CopyToClipBoard.test.tsx',
//   setupFiles: ['./setup.ts'],
//   // Some unit tests rely on data folders that look like packages.  This confuses jest-hast-map
//   // when it tries to scan for package.json files.
//   modulePathIgnorePatterns: ['<rootDir>/coverage', '<rootDir>/scripts', '<rootDir>/.circleci', '<rootDir>/tools', '<rootDir>/build', '<rootDir>/.vscode/'],
//   // testPathIgnorePatterns: ['__snapshots__', '<rootDir>/build'],
//   snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
//   // coveragePathIgnorePatterns: ['node_modules', 'fixtures', '<rootDir>/src/api/debug', '<rootDir>/test'],
//   // transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-syntax-highlighter)'],
// };
