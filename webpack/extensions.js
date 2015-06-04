var env = require('./utils').env;

module.exports = env({
  develop: ['', '.web.js', '.js', '.jsx'],
  production:  ['', '.js', '.jsx'],
  prerender:  ['', '.js', '.jsx']
});