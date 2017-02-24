const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/load.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist/js/'),
    library: 'Cosmos'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};
