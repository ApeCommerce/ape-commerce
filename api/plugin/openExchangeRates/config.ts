import env from 'plugin/openExchangeRates/env';

if (!env.openExchangeRatesAppId) throw new Error('Open Exchange Rates: app id not provided');

export default {
  appId: env.openExchangeRatesAppId,
};
