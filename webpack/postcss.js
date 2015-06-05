'use strict';
var env = require('./utils').env;

var autoprefixer = require('autoprefixer-core');
var csswring     = require('csswring');
var simplevars = require('postcss-simple-vars');
var cssImport = require('postcss-import');

//css variables
var variables = require('../app/components/variables');

module.exports = env({
  develop: [
    autoprefixer({browsers: ['last 2 versions']}),
    simplevars({ variables: function() { return variables; }}),
    cssImport
    ],
  production: [
    csswring,
    autoprefixer({browsers: ['last 2 versions']}),
    simplevars({ variables: function() { return variables; }}),
    cssImport
    ],
  prerender: [
    csswring,
    autoprefixer({browsers: ['last 2 versions']}),
    simplevars({ variables: function() { return variables; }}),
    cssImport
    ],
});