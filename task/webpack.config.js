const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const banner = `/*!
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */`;

module.exports = {
  entry: path.join(__dirname, '../src/js/cosmos.js'),
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, '../dist/js/'),
    library: 'Cosmos',
    libraryTarget: 'window',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['> 1%'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin({
      banner: banner,
      raw: true,
    }),
  ],
};
