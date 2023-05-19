import { Bundle } from '@apecommerce/ape-framework/boot/bundle';
import routes from 'plugin/openExchangeRates/router';

const bundle: Bundle = {
  bundleId: 'openExchangeRates',
  name: 'Open Exchange Rates',
  commands: [],
  migrations: [],
  queues: [],
  routes,
  translations: [],
};

export default bundle;
