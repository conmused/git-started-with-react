'use strict';

var chalk = require('chalk');
var entry = require('./webpack/entry');
var externals = require('./webpack/externals');
var modules = require('./webpack/module');
var output = require('./webpack/output');
var plugins = require('./webpack/plugins');
var resolve = require('./webpack/resolve');
var target = require('./webpack/target');

var makeConfig = function() {
  //Pretty terminal output.
  console.log("\n" + new Array(80).join("\u2500"));
  console.log(chalk.white("Starting webpack configuation for:"), chalk.green.bold(process.env.NODE_ENV));
  console.log(new Array(80).join("\u2500") + "\n");

  return {
    entry: entry,
    target: target,
    module: modules,
    moduleDirectories: ['node_modules'],
    externals: externals,
    output: output,
    resolve: resolve,
    plugins: plugins,
  };
};
module.exports = makeConfig();
