/* eslint-disable */

const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const plugins = require('./webpack.plugins');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(png|jpg|svg|gif})$/,
        use: [
          'file-loader?outputPath=images/',
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(path.join(__dirname, '/dist')),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
