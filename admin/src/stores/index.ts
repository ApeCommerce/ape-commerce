// https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties

import { createPinia } from 'pinia';
import { Router } from 'vue-router';
import { store } from 'quasar/wrappers';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router,
  }
}

export default store(() => createPinia());
