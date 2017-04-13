const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base');
const pkg = require('../package.json');

module.exports = function prodConfig() {
  return webpackMerge(commonConfig(), {
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: false,
              },
            }],
          }),
        },
        {
          test: /\.(gif|png|jpe?g|svg)(\?[a-z0-9]+)?$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                gifsicle: {
                  interlaced: true,
                  optimizationLevel: 3,
                },
                optipng: {
                  optimizationLevel: 4,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false,
      }),
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false,
      //   },
      //   sourceMap: false,
      //   exclude: ['src/**/*'],
      // }),
      new BabiliPlugin(),
      new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        allChunks: true,
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html',
        filename: 'index.html',
        title: pkg.name,
        hash: false,
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
          useShortDoctype: false,
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
