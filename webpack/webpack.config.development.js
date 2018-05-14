const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const baseConfig = require('./webpack.config.base');
const {
  app, dll, dist, manifest,
} = require('./helpers');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  entry: {
    app,
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest,
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: dll,
      includeSourcemap: false,
    }),
  ],
  devServer: {
    contentBase: join(process.cwd(), 'dist'),
    publicPath: '/',
    historyApiFallback: true,
  },
});
