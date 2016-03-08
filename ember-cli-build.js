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

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
