'use strict';
//Custom Plugins and Utilities

var fs = require('fs');

//All Environments:
//Return object for environment
var env = function(config) {
  var NODE_ENV = process.env.NODE_ENV;
  return config[NODE_ENV];
};

//Production:
//when compile finished, write index.
var makeIndex = function() {
  this.plugin("done", function(){
    var prerender = require('../dist/prerender.js');
    var location = './dist/index.html';
    fs.writeFile( location, prerender, function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log('\n'+'Successfully wrote index.html');
      }
    });
  });
};

//Prerender:
// when compile is finished, write stats.
var makeStats = function() {
  this.plugin('done', function(stats) {
   fs.writeFileSync(
      './app/stats.json',
      JSON.stringify(stats.toJson()));
  });
};

module.exports = {
  makeIndex: makeIndex,
  makeStats: makeStats,
  env: env
};