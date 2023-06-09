import { Bundle } from '@apecommerce/ape-framework/boot/bundle';
import routes from 'bundle/auth/router';
import translations from 'bundle/auth/translation';

const bundle: Bundle = {
  bundleId: 'auth',
  name: 'Auth',
  commands: [],
  migrations: [],
  queues: [],
  routes,
  translations,
};

export default bundle;
