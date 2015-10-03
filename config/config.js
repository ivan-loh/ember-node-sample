var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'blogger-nodedata'
    },
    port: 3000,
    db: 'mongodb://localhost/blogger-nodedata-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'blogger-nodedata'
    },
    port: 3000,
    db: 'mongodb://localhost/blogger-nodedata-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'blogger-nodedata'
    },
    port: 3000,
    db: 'mongodb://localhost/blogger-nodedata-production'
  }
};

module.exports = config[env];
