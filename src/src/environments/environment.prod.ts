import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  signInSignOut: 'https://d2ipl7agpvjw7m.cloudfront.net/',
  portalApiName: 'ea-api-gateway',
  usagePlan: '9esq4a'
};
