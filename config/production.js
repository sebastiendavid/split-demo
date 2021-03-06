const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base');
const pkg = require('../package.json');
const manifest = require('../src/manifest.json');

module.exports = function prodConfig() {
  return webpackMerge(commonConfig(), {
    mode: 'production',
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
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: false,
                  sourceMap: true,
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: () => [
                    autoprefixer({
                      browsers: [
                        'Chrome >= 60',
                        'Firefox >= 55',
                        'Safari >= 11',
                      ],
                    }),
                    cssnano({
                      preset: [
                        'advanced',
                        {
                          discardComments: {
                            removeAll: true,
                          },
                        },
                      ],
                    }),
                  ],
                },
              },
            ],
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
    optimization: {
      minimizer: [
        new UglifyJSPlugin({ sourceMap: true, cache: true, parallel: true }),
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
        GITHUB: false,
      }),
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
      new ManifestPlugin({
        seed: manifest,
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/offline-page.html',
        filename: 'offline-page.html',
        title: pkg.name,
        hash: false,
        minify: false,
      }),
      new CopyWebpackPlugin([
        { context: 'src/assets', from: 'favicon.ico' },
        { context: 'src/assets', from: 'icon.png' },
      ]),
      new OfflinePlugin({
        publicPath: '/',
        caches: 'all',
        autoUpdate: true,
        excludes: ['**/.*', '**/*.map', '**/manifest.json'],
        ServiceWorker: {
          navigateFallbackURL: '/',
          minify: false, // FIXME workaround
        },
        AppCache: false,
      }),
    ],
  });
};
