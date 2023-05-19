import { Bundle } from '@apecommerce/ape-framework/boot/bundle';
import migrations from 'bundle/core/migration';
import routes from 'bundle/core/router';

const bundle: Bundle = {
  bundleId: 'core',
  name: 'Core',
  commands: [],
  migrations,
  queues: [],
  routes,
  translations: [],
};

export default bundle;
