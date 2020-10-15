const BROWSER_TARGETS = {
  browsers: ['last 5 versions', 'FireFox >= 44', 'Safari >= 7', 'Explorer 11', 'last 4 Edge versions'],
};

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: BROWSER_TARGETS,
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    'babel-plugin-dynamic-import-node',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'react-hot-loader/babel',
    '@babel/transform-runtime',
    '@babel/syntax-dynamic-import',
    'emotion',
  ],
  ignore: ['**/*.d.ts'],
};
