const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./base');
const pkg = require('../package.json');

module.exports = function devConfig() {
  return webpackMerge(commonConfig(), {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg)(\?[a-z0-9]+)?$/i,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: true,
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html',
        filename: 'index.html',
        title: pkg.name,
        hash: false,
        minify: false,
      }),
    ],
  });
};
