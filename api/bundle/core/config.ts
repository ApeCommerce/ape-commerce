import env from 'bundle/core/env';

if (!env.adminUrl) throw new Error('Core: admin url not provided');
if (!env.storeUrl) throw new Error('Core: store url not provided');

export default {
  adminUrl: env.adminUrl,
  storeUrl: env.storeUrl,
};
