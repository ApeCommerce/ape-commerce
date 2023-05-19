import config from 'bundle/config';

const paths = [
  ...config.bundleIds.map((bundleId) => `${config.bundleDirectory}/${bundleId}`),
  ...config.pluginIds.map((pluginId) => `${config.pluginDirectory}/${pluginId}`),
];

export default paths;
