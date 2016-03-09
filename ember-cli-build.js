/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var env = EmberApp.env() || 'development';
  var fingerprintOptions = {
    enabled: true
  };

  switch (env) {
    case 'development':
      fingerprintOptions.prepend = 'http://localhost:4200/';
    break;
    case 'production':
      fingerprintOptions.prepend = 'https://s3-us-west-2.amazonaws.com/record-keeper-assets/record-keeper-client/';
    break;
  };

  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'app/styles'
      ]
    },
    dotEnv: {
      clientAllowedKeys: ['AWS_KEY', 'AWS_SECRET', 'REDIS_URL'],
      path: {
        development: '.env.deploy.development',
        production: 'env.deploy.production'
      }
    },

    fingerprint: fingerprintOptions,

    emberCLIDeploy: {
      runOnPostBuild: (env === 'development') ? 'development-postbuild' : false,
      shouldActivate: true
    }
  });

  // custom bootstrap build
  app.import('vendor/bootstrap/css/bootstrap.css');

  return app.toTree();
};
