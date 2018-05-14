const { join } = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'web',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.pug', '.css'],
    alias: {
      actions: join(process.cwd(), 'src', 'actions'),
      atoms: join(process.cwd(), 'src', 'components', 'atoms'),
      molecules: join(process.cwd(), 'src', 'components', 'molecules'),
      organisms: join(process.cwd(), 'src', 'components', 'organisms'),
      templates: join(process.cwd(), 'src', 'components', 'templates'),
      containers: join(process.cwd(), 'src', 'containers'),
      helpers: join(process.cwd(), 'src', 'helpers'),
      types: join(process.cwd(), 'src', 'types'),
      constants: join(process.cwd(), 'src', 'constants'),
    },
  },
  plugins: [
    new Dotenv({ path: './.env' }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new ExtractTextWebpackPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
};
