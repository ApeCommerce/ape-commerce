import { parseString } from 'framework/env';

export default {
  openExchangeRatesAppId: parseString(process.env.OPEN_EXCHANGE_RATES_APP_ID),
};
