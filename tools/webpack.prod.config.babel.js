const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const _ = require('lodash');
const merge = require('webpack-merge');

const env = require('../config/env');

const baseConfig = require('./webpack.config');
const getPackageJson = require('./getPackageJson');

const { version, name, license } = getPackageJson('version', 'name', 'license');

const banner = `
    Name: [name]
    Generated on: ${Date.now()}
    Package: ${name}
    Version: v${version}
    License: ${license}
    `;

const prodConf = {
  mode: 'production',

  entry: {
    main: ['babel-polyfill', 'whatwg-fetch', `${env.SRC_ROOT}/index.tsx`],
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
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HTMLWebpackPlugin({
      title: 'ToReplaceByTitle',
      __UI_OPTIONS: 'ToReplaceByVerdaccioUI',
      scope: 'ToReplaceByScope',
      basename: 'ToReplaceByPrefix',
      logo: 'ToReplaceByLogo',
      primary_color: 'ToReplaceByPrimaryColor',
      filename: 'index.html',
      favicon: `${env.SRC_ROOT}/template/favicon.ico`,
      verdaccioURL: 'ToReplaceByVerdaccio',
      version_app: 'ToReplaceByVersion',
      template: `${env.SRC_ROOT}/template/index.html`,
      debug: false,
      inject: true,
    }),
    new webpack.BannerPlugin(banner),
  ],

  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};

prodConf.module.rules = baseConfig.module.rules
  .filter(loader => Array.isArray(loader.use) && loader.use.find(v => /css/.test(v.loader.split('-')[0])))
  .forEach(loader => {
    loader.use = [MiniCssExtractPlugin.loader].concat(_.tail(loader.use));
  });

module.exports = merge(baseConfig, prodConf);
