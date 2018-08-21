/* eslint-disable */

 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const plugins = require('./webpack.plugins-prod');

 module.exports = merge(common, {
   entry: {
        app: './src/index.jsx'
    },
   mode: 'production',
   devtool: 'inline-source-map',
   plugins
 });