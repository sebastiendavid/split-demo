const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./base');
const pkg = require('../package.json');

module.exports = function devConfig() {
  return webpackMerge(commonConfig(), {
    mode: 'development',
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
    externals: {
      'offline-plugin/runtime': '{}',
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: true,
        GITHUB: false,
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
