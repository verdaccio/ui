const { defaults } = require('jest-config');

module.exports = {
  name: 'verdaccio-ui-jest',
  verbose: true,
  automock: false,
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom-global',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testURL: 'http://localhost',
  rootDir: '..',
  setupFiles: ['<rootDir>/jest/setup.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!react-syntax-highlighter)'],
  modulePathIgnorePatterns: [
    '<rootDir>/coverage',
    '<rootDir>/scripts',
    '<rootDir>/.circleci',
    '<rootDir>/tools',
    '<rootDir>/build',
    '<rootDir>/.vscode/',
    '<rootDir>/test/e2e/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
  moduleNameMapper: {
    '\\.(s?css)$': '<rootDir>/node_modules/identity-obj-proxy',
    'github-markdown-css': '<rootDir>/node_modules/identity-obj-proxy',
    '\\.(png)$': '<rootDir>/node_modules/identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/jest/unit/empty.ts',
    '@verdaccio/components/(.*)': '<rootDir>/src/components/$1',
    '@verdaccio/utils/(.*)': '<rootDir>/src/utils/$1',
    '@verdaccio/design-tokens/(.*)': '<rootDir>/src/design-tokens/$1',
  },
};
