const path = require('path');
const webpack = require('webpack');
const server = require('./server');

module.exports = function baseConfig() {
  return {
    devtool: 'source-map',
    entry: {
      app: './src/index.js',
      serviceWorker: './src/utils/service-worker.js',
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
          exclude: [/node_modules/],
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/i,
          loader: 'file-loader',
        },
      ],
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
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
      before: server,
    },
  };
};
