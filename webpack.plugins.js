/* eslint-disable */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Aram Galstyan',
    template: './src/index.html',
    filename: "./index.html"
});
const extractCssChunksPlugin = new ExtractCssChunks({
    filename: '[name].css',
    chunkFilename: "[id].css"
});

const plugins = [htmlWebpackPlugin, extractCssChunksPlugin];

module.exports = plugins;