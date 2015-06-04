'use strict';
var env = require('./utils').env;

module.exports = env({
    develop: '',
    production: '',
    prerender:  [/^[a-z\/\-0-9]$/]
});
