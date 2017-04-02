const path = require('path');
const webpack = require('webpack');
const server = require('./server');
const pkg = require('../package.json');

module.exports = function baseConfig() {
  return {
    entry: {
      app: [
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve('build'),
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [
            path.resolve('node_modules'),
          ],
          loader: 'babel-loader',
          options: pkg.babel,
        },
        {
          test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/i,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({ context }) => context && context.indexOf('node_modules') !== -1,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'app',
        async: 'common',
        minChunks: 2,
      }),
    ],
    stats: {
      assets: true,
      cached: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      errors: true,
      errorDetails: true,
      hash: false,
      modules: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: false,
      version: false,
      warnings: true,
    },
    devServer: {
      port: 8080,
      inline: true,
      hot: false,
      clientLogLevel: 'warning',
      historyApiFallback: true,
      stats: 'errors-only',
      setup: server,
    },
  };
};
