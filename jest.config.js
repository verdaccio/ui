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
  }
};
