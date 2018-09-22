'use strict';

const dotenv = require('dotenv');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

dotenv.load();

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new ExtractTextPlugin('bundle.css'),
  new HTMLPlugin({
    template: `${__dirname}/src/index.html`
  }),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
    __DEBUG__: JSON.stringify(!production)
  }),
  new webpack.LoaderOptionsPlugin({
    sassLoader: {
      includePaths: [`${__dirname}/src/scss`]
    }
  })
];

if(production) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true,
      compress: {
        warnings: true
      }
    }),
    new CleanPlugin()
  ]);
}

module.exports = {
  entry: './src/index.jsx',
  devtool: production ? false : 'eval',
  plugins,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.(jpg|jpeg|svg|bmp|tiff|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!resolve-url-loader!sass-loader?sourceMap',
        })
      }
    ]
  }
};