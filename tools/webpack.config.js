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
    modules: ['node_modules'],
    alias: {
      'verdaccio-ui/components': `${env.SRC_ROOT}/components`,
      'verdaccio-ui/design-tokens': `${env.SRC_ROOT}/design-tokens`,
      'verdaccio-ui/utils': `${env.SRC_ROOT}/utils`,
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
        use: require.resolve('eslint-loader'),
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
        loader: require.resolve('url-loader'),
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
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
        ],
      },

      /* Typescript loader */
      {
        test: /\.tsx?$/,
        use: {
          loader: require.resolve(`babel-loader`),
        },
        exclude: /node_modules/,
      },
    ],
  },

  stats: {
    children: false,
  },
};
