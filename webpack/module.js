'use strict';

var env = require('./utils').env;
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var sassLoaders = [
'css-loader',
'autoprefixer-loader?browsers=last 2 version',
'sass-loader?includePaths[]=' + path.resolve(__dirname, './app/components/'),
];


module.exports = env({
  develop: {
    loaders:[
    { test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
    },
    { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
      loader: 'file-loader?name=[path][name].[ext]'
    },
    { test: /\.scss$/,
      loaders: sassLoaders,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
    }]
  },

  production:{
    loaders:[
    { test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
      loader: 'file-loader?name=[path][name].[ext]'
    },
    { test: /\.scss$/,
      loaders: sassLoaders,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
    }]
  },

  prerender: {
    loaders:[
    { test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
      test:  /\.json$/,
      loader:'json-loader'
    },
    { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
      loader: 'file-loader?name=[path][name].[ext]',
    },
    {
      test: /\.scss$/,
      loader: 'null-loader'
    }
    ]
  },
});