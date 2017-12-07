var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDevelopment = process.argv.indexOf('--development') !== -1;

var entryPath = path.join(__dirname, 'client/index.js');
console.log(entryPath);
console.log('entryPath=-----------------------------------' + isDevelopment);
var entry = isDevelopment ? [
  'webpack-hot-middleware/client?reload=true',
  'react-hot-loader/patch',
  entryPath
] : entryPath;

var plugins = [

  new webpack.DefinePlugin({

    'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    __DEV__: isDevelopment
  }),
  new HtmlWebpackPlugin({
    template: 'client/index.html',
    minify: {
      removeComments: !isDevelopment,
      collapseWhitespace: !isDevelopment
    },
    inject: true
  })
];


!isDevelopment && plugins.push(new webpack.optimize.UglifyJsPlugin());
isDevelopment && plugins.push(new webpack.HotModuleReplacementPlugin()) && plugins.push(new webpack.LoaderOptionsPlugin({ debug: true }));
module.exports = {

  cache: isDevelopment,
  entry: entry,
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ["es2015", "stage-2", "react"]
      }
    },
    {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    }]
  },
  output: {

    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: plugins
};