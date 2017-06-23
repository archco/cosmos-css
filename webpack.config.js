const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('css/style.css');
const Rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: [
        [
          'env',
          {
            targets: { browsers: ['> 1%'] },
          },
        ],
      ],
    },
  },
  {
    test: /\.scss$/,
    use: extractCss.extract({
      use: [
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    }),
  },
];

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/js/script.js'),
    path.resolve(__dirname, 'src/scss/cosmos.scss'),
  ],
  output: {
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  module: {
    loaders: Rules,
  },
  devtool: 'source-map',
  plugins: [
    extractCss,
  ],
};
