import { Bundle } from 'framework/boot';
import routes from 'bundle/store/router';

const bundle: Bundle = {
  bundleId: 'store',
  name: 'Store',
  commands: [],
  migrations: [],
  queues: [],
  routes,
  translations: [],
};

export default bundle;
