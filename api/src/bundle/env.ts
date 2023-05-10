import { parseBoolean } from 'framework/env';

export default {
  openExchangeRatesPlugin: parseBoolean(process.env.OPEN_EXCHANGE_RATES_PLUGIN),
};
