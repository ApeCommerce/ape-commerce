import { parseBoolean } from '@apecommerce/ape-framework/utils';

export default {
  openExchangeRatesPlugin: parseBoolean(process.env.OPEN_EXCHANGE_RATES_PLUGIN),
};
