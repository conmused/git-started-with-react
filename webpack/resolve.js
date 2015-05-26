var env = require('./utils').env;

module.exports = env({
  develop: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  production:{
    extensions: ['', '.js', '.jsx']
  },
  prerender:{
    extensions: ['', '.js', '.jsx']
  },
});