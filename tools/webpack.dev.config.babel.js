import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import webpack from 'webpack';

import env from '../config/env';

import getPackageJson from './getPackageJson';
import baseConfig from './webpack.config';

export default {
  ...baseConfig,
  mode: 'development',
  entry: {
    main: [
      'whatwg-fetch',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4872',
      'webpack/hot/only-dev-server',
      `${env.SRC_ROOT}/index.tsx`,
    ],
  },

  output: {
    ...baseConfig.output,
    publicPath: '/',
  },

  devtool: 'inline-cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true,
      __APP_VERSION__: `"${getPackageJson('version')}"`,
    }),
    new HTMLWebpackPlugin({
      basePath: 'http://localhost:4872',
      __UI_OPTIONS: JSON.stringify({
        base: 'http://localhost:4872',
        protocol: 'http',
        host: 'localhost',
        primaryColor: '#4b5e40',
        url_prefix: '',
        darkMode: false,
        language: 'en-US',
        uri: 'http://localhost:4872',
        title: 'Verdaccio Dev UI',
        scope: '',
        version: 'v1.0.0',
      }),
      title: 'Verdaccio Dev UI',
      filename: 'index.html',
      faviIcoPath: '/-/static/favicon.ico',
      template: `${env.SRC_ROOT}/template/index.html`,
      debug: true,
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new StyleLintPlugin({
      files: ['src/**/styles.ts'],
      failOnError: false,
      emitErrors: false,
    }),
  ],
};
