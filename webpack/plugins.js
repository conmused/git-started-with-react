'use strict';

//utils
var env = require('./utils').env;
var makeStats = require('./utils').makeStats;
var makeIndex = require('./utils').makeIndex;

//plugins
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = env({
  develop: [
    //Clean out build directory
    new Clean(['/assets']),
    //Create commons chunk
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    //Hot reloader
    new webpack.HotModuleReplacementPlugin(),
    //Required for Hot reloader
    new webpack.NoErrorsPlugin(),
    //extract css text.
    new ExtractTextPlugin('[name].css'),
  ],

  production:[
    //clean out assets directory.
    new Clean(['../dist/assets']), //Clean out build directory
    //hashed commons package.
    new webpack.optimize.CommonsChunkPlugin('vendor', '[hash].vendor.js'),
    new webpack.optimize.DedupePlugin(),
    //minify everything
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    //get hashed css
    new ExtractTextPlugin('[hash].[name].css'),
    //GZip assets
    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    //Create Statsfile (needed for prerender);
    makeStats
  ],

  prerender:[
    //Uglify
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false  }
    }),
    //use smaller react library.
    new webpack.DefinePlugin(
      { 'process.env': { 'NODE_ENV': JSON.stringify('production') }
      }),
    makeIndex,
  ],
});

