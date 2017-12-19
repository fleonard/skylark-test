const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    points: [
      './src/index.js',
      './src/styles/main.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, './public/'),
    publicPath: '/',
    filename: 'scripts/main.bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /^(?!.*?\.module).*\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.module\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]-[local]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles/main.bundle.css'),
    HtmlWebpackPluginConfig
  ]
};