const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const prod = nodeEnv === 'production';
process.env.NODE_ENV = nodeEnv;

module.exports = {
  devtool: prod ? 'hidden-source-map' : 'eval',
  entry: {
    app: ['./src/index.js'],
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [
          path.resolve('build'),
        ],
        loader: prod ? ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader',
        }) : 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        exclude: [
          path.resolve('build'),
          path.resolve('node_modules'),
        ],
        loader: 'babel-loader',
        options: pkg.babel,
      },
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: '[name].js',
      minChunks: Infinity,
    }),
    prod ? new ExtractTextPlugin('styles.css') : null,
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html',
      title: `${pkg.name}`,
      hash: prod,
      minify: prod ? {
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
      } : false,
    }),
  ].filter(p => !!p),
};
