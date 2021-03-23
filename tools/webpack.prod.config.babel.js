const _ = require('lodash');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { merge } = require('webpack-merge');

const env = require('../config/env');

const getPackageJson = require('./getPackageJson');
const baseConfig = require('./webpack.config');

const { version, name, license } = getPackageJson('version', 'name', 'license');

const banner = `
    Name: [name]
    Generated on: ${Date.now()}
    Package: ${name}
    Version: v${version}
    License: ${license}
    https://www.verdaccio.org
    `;

const prodConf = {
  mode: 'production',

  entry: {
    main: ['@babel/polyfill', 'whatwg-fetch', `${env.SRC_ROOT}/index.tsx`],
  },

  module: {
    rules: [],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: false,
      'process.env.NODE_ENV': '"production"',
      __APP_VERSION__: `"${version}"`,
    }),
    new WebpackManifestPlugin({
      removeKeyHash: true,
    }),
    new webpack.BannerPlugin(banner),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = merge(baseConfig, prodConf);
