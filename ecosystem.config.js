const pkg = require('./package.json');

module.exports = {
  apps: [
    {
      version: pkg.version,
      name: 'pwa-prod',
      script: 'yarn start',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      version: pkg.version,
      name: 'pwa-dev',
      script: 'yarn develop --host',
      env: {
        NODE_ENV: 'development',
      },
      // watch: true,
    },
  ],
};
