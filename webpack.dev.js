// eslint-disable-next-line
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const plugins = require('./webpack.plugins-dev');

module.exports = merge(common, {
  plugins,
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
});
