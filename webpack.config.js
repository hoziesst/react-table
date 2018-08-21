const webpackDev = require('./webpack.dev');
const webpackProd = require('./webpack.prod');

module.exports = [process.env.NODE_ENV === 'production' ? webpackProd : webpackDev];