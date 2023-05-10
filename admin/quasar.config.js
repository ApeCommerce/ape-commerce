// https://quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = configure(() => ({
  framework: {
    config: {
      dark: 'auto',
    },
    plugins: ['Dark', 'Meta', 'Notify'],
  },
  extras: ['material-icons', 'roboto-font'],
  sourceFiles: {
    rootComponent: 'src/App.vue',
    router: 'src/router/index',
    store: 'src/stores/index',
  },
  css: ['app.scss'],
  build: {
    vueRouterMode: 'hash',
    target: {
      browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
      node: 'node18',
    },
    alias: {
      config: path.join(__dirname, 'src/config'),
      env: path.join(__dirname, 'src/env'),
      notify: path.join(__dirname, 'src/notify'),
      router: path.join(__dirname, 'src/router'),
      utils: path.join(__dirname, 'src/utils'),
    },
    env: {
      APP_NAME: process.env.APP_NAME,
      APP_VERSION: process.env.APP_VERSION,
      API_URL: process.env.API_URL,
    },
  },
  devServer: {
    port: 3001,
    open: false,
  },
}));
