import env from 'env';

enum NodeEnvironment {
  development = 'development',
  production = 'production',
}

const nodeEnv = Object.values(NodeEnvironment).find((e) => e === env.nodeEnv);
if (!nodeEnv) { throw new Error(`Config: invalid node environment "${env.nodeEnv}"`); }

if (nodeEnv === NodeEnvironment.development && !env.apiUrl) {
  throw new Error('Config: api url not provided');
}

export default {
  nodeEnv,

  appName: env.appName || 'Ape Commerce Admin',
  appVersion: env.appVersion || '0.0.0',

  apiUrl: env.apiUrl || '{API_URL}',
};
