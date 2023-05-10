import env from 'bundle/env';

enum BundleId {
  core = 'core',
  auth = 'auth',
  admin = 'admin',
  store = 'store',
}

enum PluginId {
  openExchangeRates = 'openExchangeRates',
}

const pluginConfig: { pluginId: PluginId, isEnabled: boolean }[] = [
  { pluginId: PluginId.openExchangeRates, isEnabled: env.openExchangeRatesPlugin },
];

const bundleIds = Object.values(BundleId);

const pluginIds = pluginConfig.filter((config) => config.isEnabled).map((config) => config.pluginId);

export default {
  bundleDirectory: 'bundle',
  pluginDirectory: 'plugin',
  bundleIds,
  pluginIds,
};
