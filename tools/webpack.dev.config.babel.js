const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const baseConfig = require("./webpack.config");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const SRC_ROOT = path.resolve(__dirname, "../src/");

export default {
  ...baseConfig,

  mode: "development",

  entry: {
    main: [
      "whatwg-fetch",
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:4872",
      "webpack/hot/only-dev-server",
      `${SRC_ROOT}/index.js`
    ]
  },

  output: {
    ...baseConfig.output,
    publicPath: "/"
  },

  devtool: "cheap-module-eval-source-map",

  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: true
    }),
    new HTMLWebpackPlugin({
      title: "Verdaccio Dev UI",
      scope: "",
      logo: "https://verdaccio.org/img/logo/symbol/svg/verdaccio-tiny.svg",
      filename: "index.html",
      verdaccioURL: "//localhost:4873",
      template: `${SRC_ROOT}/template/index.html`,
      debug: true,
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new StyleLintPlugin({
      files: ["src/**/styles.js"],
      failOnError: false,
      emitErrors: false
    })
  ]
};
