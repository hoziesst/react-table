/* eslint-disable */
const webpack = require('webpack');

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const plugins = [hotModuleReplacementPlugin];

module.exports = plugins;
