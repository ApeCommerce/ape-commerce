import { parseString } from '@apecommerce/ape-framework/utils';

export default {
  openExchangeRatesAppId: parseString(process.env.OPEN_EXCHANGE_RATES_APP_ID),
};
