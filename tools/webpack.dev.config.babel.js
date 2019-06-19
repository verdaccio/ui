import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import baseConfig from './webpack.config';
import env from '../config/env';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import getPackageJson from './getPackageJson';

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

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true,
      __APP_VERSION__: `"${getPackageJson('version')}"`,
    }),
    new HTMLWebpackPlugin({
      __UI_OPTIONS: JSON.stringify({
        base: '/',
      }),
      title: 'Verdaccio Dev UI',
      scope: '',
      logo: 'https://verdaccio.org/img/logo/symbol/svg/verdaccio-tiny.svg',
      filename: 'index.html',
      verdaccioURL: '//localhost:8080',
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
