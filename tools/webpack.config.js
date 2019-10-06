const env = require('../config/env');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const PacktrackerPlugin = require('@packtracker/webpack-plugin');

module.exports = {
  entry: `${env.SRC_ROOT}/index.tsx`,

  output: {
    path: `${env.APP_ROOT}/static/`,
    filename: '[name].[hash].js',
    publicPath: '/-/static',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new StyleLintPlugin({
      files: ['src/**/styles.ts'],
      failOnError: false,
      emitErrors: true,
    }),
    new PacktrackerPlugin({
      project_token: process.env.PACKTRACKER_TOKEN || '0cd636f0-f282-48b7-8437-4b693938d1a3',
      upload: true,
    }),
  ],

  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -20,
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      /* Pre loader */
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },

      /* Normal loader */
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          name: '/fonts/[name].[ext]',
          limit: 50,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },

      /* Typescript loader */
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  stats: {
    children: false,
  },
};
