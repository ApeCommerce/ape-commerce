const parseString = (s?: string) => s || '';

export default {
  nodeEnv: parseString(process.env.NODE_ENV),

  appName: parseString(process.env.APP_NAME),
  appVersion: parseString(process.env.APP_VERSION),

  apiUrl: parseString(process.env.API_URL),
};
