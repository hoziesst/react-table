/* eslint-disable */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const uglifyJSPlugin = new UglifyJSPlugin({
  sourceMap: true,
});

const plugins = [uglifyJSPlugin];

module.exports = plugins;
