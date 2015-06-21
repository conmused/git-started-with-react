'use strict';

var env = require('./utils').env;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonLoaders = [
  { test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader?stage=0',
  },
  { test: /\.png$/, loader: 'url-loader' },
    // Copy precomposed image files over to assets path
  { test: /.*precomposed\.png$/, loader: 'file-loader?name=images/[name].[ext]'},
  { test: /\.jpg$/, loader: 'file-loader' },
  {test: /\.json$/, loader: "json"}
];

module.exports = env({
  develop: {
    loaders: commonLoaders.concat(
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css?localIdentName=[name]__[local]!postcss') }
    )
  },

  production:{
    loaders: commonLoaders.concat(
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css?localIdentName=[name]_[local]!postcss') }
    )
  },

  prerender: {
    loaders:[
    { test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?stage=0',
    },
    {
      test:  /\.json$/,
      loader:'json-loader'
    },
    { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
      loader: 'file-loader?name=[path][name].[ext]',
    },
    {
      test: /\.css$/,
      loader: 'css/locals?localIdentName=[name]_[local]!postcss'
    }
    ]
  },
});