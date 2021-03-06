const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackMerge = require('webpack-merge');
const prodConfig = require('./production');

module.exports = function analyzeConfig() {
  return webpackMerge(prodConfig(), {
    plugins: [new BundleAnalyzerPlugin()],
  });
};
