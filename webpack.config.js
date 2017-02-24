const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const banner = `/*!\n` +
` * ${pkg.name} - ${pkg.description}\n` +
` * @version v${pkg.version}\n` +
` * @link ${pkg.homepage}\n` +
` * @license ${pkg.license}\n` +
` */\n`;

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
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin({
      banner: banner,
      raw: true
    })
  ]
};
