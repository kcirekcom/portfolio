'use strict';

const dotenv = require('dotenv');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

dotenv.load();

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
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
  }),
];

let optimizedPlugins = [
  new CompressionPlugin({
    test: /\.js$|\.css$|\.html$|\.jpg$|\.png$/,
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 8192,
    minRatio: 0.8
  }),
  new CleanWebpackPlugin(),
  new OptimizeCssAssetsPlugin({}),
];

module.exports = {
  mode: production ? 'production' : 'development',
  entry: './src/index.jsx',
  devtool: production ? 'source-map' : 'cheap-module-source-map',
  plugins,
  optimization: {
    minimizer: optimizedPlugins,
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        use: { loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } }
      },
      {
        test: /\.(jpg|jpeg|svg|bmp|tiff|gif|png)$/,
        use: { loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          production ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};