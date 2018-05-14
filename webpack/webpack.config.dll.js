const { join } = require('path');
const webpack = require('webpack');
const { libraries, dist } = require('./helpers');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  entry: {
    libraries,
  },
  output: {
    filename: '[name].js',
    path: dist,
    publicPath: '/',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: join(dist, '[name]-manifest.json'),
      name: '[name]',
    }),
  ],
};
