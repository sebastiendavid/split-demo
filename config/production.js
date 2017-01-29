const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base');
const pkg = require('../package.json');

module.exports = function prodConfig() {
  return webpackMerge(commonConfig(), {
    devtool: 'hidden-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader',
          }),
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: false,
      }),
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html',
        filename: 'index.html',
        title: `${pkg.name}`,
        hash: true,
        minify: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          removeCDATASectionsFromCDATA: true,
          collapseWhitespace: true,
          conservativeCollapse: false,
          collapseInlineTagWhitespace: true,
          preserveLineBreaks: false,
          collapseBooleanAttributes: true,
          removeTagWhitespace: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          preventAttributesEscaping: false,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeOptionalTags: true,
          removeEmptyElements: false,
        },
      }),
    ],
  });
};
