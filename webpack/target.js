var env = require('./utils').env;

module.exports = env({
  develop:'web',
  production:'web',
  prerender:'node',
});