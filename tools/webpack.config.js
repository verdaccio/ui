const path = require("path");

const SRC_ROOT = path.resolve(__dirname, "../src/");
const APP_ROOT = path.resolve(__dirname, "../static/");

module.exports = {
  entry: `${SRC_ROOT}/index.js`,

  output: {
    path: `${APP_ROOT}/static/`,
    filename: "[name].[hash].js"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },

  module: {
    rules: [
      /* Normal loader */
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "url-loader",
        options: {
          name: "fonts/[name].[ext]",
          limit: 50
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: `style-loader!css-loader?module&sourceMap=false&localIdentName=[path][name]__[local]--[hash:base64:5]
        !resolve-url-loader?keepQuery!sass-loader?sourceMap`
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },

  stats: {
    children: false
  }
};
