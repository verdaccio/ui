const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const _ = require("lodash");
const SRC_ROOT = path.resolve(__dirname, "../src/");

const prodConf = {
  mode: "production",

  entry: {
    main: ["@babel/polyfill", "whatwg-fetch", `${SRC_ROOT}/index.js`]
  },

  module: {
    rules: []
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new HTMLWebpackPlugin({
      title: "ToReplaceByTitle",
      scope: "ToReplaceByScope",
      filename: "index.html",
      favicon: `${SRC_ROOT}/template/favicon.ico`,
      verdaccioURL: "ToReplaceByVerdaccio",
      template: `${SRC_ROOT}/template/index.html`,
      debug: false,
      inject: true
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};

prodConf.module.rules = baseConfig.module.rules
  .filter(
    loader =>
      Array.isArray(loader.use) &&
      loader.use.find(v => /css/.test(v.loader.split("-")[0]))
  )
  .forEach(loader => {
    loader.use = [MiniCssExtractPlugin.loader].concat(_.tail(loader.use));
  });

module.exports = merge(baseConfig, prodConf);
