const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const prod = nodeEnv === 'production';
process.env.NODE_ENV = nodeEnv;

module.exports = {
  devtool: prod ? 'hidden-source-map' : 'cheap-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['index.js'],
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
    publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /(build)/,
        loader: prod ? ExtractTextPlugin.extract('style', 'css') : 'style!css',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel',
        query: pkg.babel,
      },
      {
        test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file',
      },
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'src'),
    ],
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      filename: '[name].js',
      minChunks: Infinity,
    }),
    prod ? new ExtractTextPlugin('styles.css') : null,
    prod ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }) : null,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${nodeEnv}"`,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
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
