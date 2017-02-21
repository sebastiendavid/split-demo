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
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
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
