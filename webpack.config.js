'use strict';

var chalk = require('chalk');
var entry = require('./webpack/entry');
var modules = require('./webpack/module');
var output = require('./webpack/output');
var plugins = require('./webpack/plugins');
var extensions = require('./webpack/extensions');
var target = require('./webpack/target');
var postcss = require('./webpack/postcss');
var externals = require('./webpack/externals');

var makeConfig = function() {
  //Pretty terminal output.
  console.log("\n" + new Array(80).join("\u2500"));
  console.log(chalk.white("Starting webpack configuation for:"), chalk.green.bold(process.env.NODE_ENV));
  console.log(new Array(80).join("\u2500") + "\n");
  return {
    name: process.env.NODE_ENV,
    entry: entry,
    externals: externals,
    module: modules,
    output: output,
    plugins: plugins,
    postcss: postcss,
    resolve: {
      extensions: extensions,
    },
    modulesDirectories: ["web_modules", "node_modules"],
    target: target,
  };
};
module.exports = makeConfig();
