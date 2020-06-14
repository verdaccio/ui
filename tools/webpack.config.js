const StyleLintPlugin = require('stylelint-webpack-plugin');

const env = require('../config/env');

module.exports = {
  entry: `${env.SRC_ROOT}/index.tsx`,

  output: {
    path: `${env.APP_ROOT}/static/`,
    filename: '[name].[hash].js',
    publicPath: '/-/static/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@verdaccio/components/*': `${env.SRC_ROOT}/components/*`,
      '@verdaccio/design-tokens/*': `${env.SRC_ROOT}/design-tokens/*`,
      '@verdaccio/utils/*': `${env.SRC_ROOT}/utils/*`,
    },
  },

  plugins: [
    new StyleLintPlugin({
      files: ['src/**/styles.ts'],
      failOnError: false,
      emitErrors: true,
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
          name: '[name].[ext]',
          outputPath: 'fonts',
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
