import { Bundle } from 'framework/boot';
import commands from 'bundle/admin/command';
import queues from 'bundle/admin/queue';
import routes from 'bundle/admin/router';

const bundle: Bundle = {
  bundleId: 'admin',
  name: 'Admin',
  commands,
  migrations: [],
  queues,
  routes,
  translations: [],
};

export default bundle;
