import { Bundle } from 'framework/boot';
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
