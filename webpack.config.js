const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = (process.env.NODE_ENV === 'production') ? false : true;
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
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: isDev ? 'css-loader' : 'css-loader?-minimize',
          options: { sourceMap: isDev },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: isDev },
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: isDev },
        },
      ],
    }),
  },
];

const Config = {
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
    new ExtractTextPlugin('css/style.css'),
  ],
};

if (!isDev) {
  Config.output.filename = 'js/script.min.js';
  Config.devtool = false;
  Config.plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
    }),
    new ExtractTextPlugin('css/style.min.css'),
  ];
}

module.exports = Config;
