const VALID_DEPLOY_TARGETS = [
  'development',
  'production',
  'development-postbuild'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    pipeline: {},
    redis: {
      url: process.env.REDIS_URL,
      allowOverwrite: true,
      keyPrefix: 'record-keeper-client:index'
    },
    s3: {
      prefix: 'record-keeper-client'
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.pipeline.activateOnDeploy = true;
    ENV.plugins = ['build', 'redis'];
    ENV.redis.revisionKey = 'development';
  }

  if (deployTarget === 'development-postbuild') {
    ENV.plugins = ['redis'];

    ENV.build = {
      environment: 'development'
    };

    ENV.redis = {
      keyPrefix: 'record-keeper-client:index',
      revisionKey: '__development__',
      allowOverwrite: true,
      distDir: function(context) {
        return context.commandOptions.buildDir;
      }
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env.AWS_KEY;
    ENV.s3.secretAccessKey = process.env.AWS_SECRET;
    ENV.s3.bucket = 'record-keeper-assets';
    ENV.s3.region = 'us-west-2';
    ENV.pipeline = {
      activateOnDeploy: true
    };
  }

  return ENV;
}
