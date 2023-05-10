<template>
  <q-list dense>
    <q-item-label header>Dark mode</q-item-label>
    <q-item>
      <q-item-section avatar><q-icon name="dark_mode" /></q-item-section>
      <q-item-section><q-btn-toggle v-model="model" :options="options" size="sm" flat square /></q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const model = ref($q.dark.mode);

const options = [
  { label: 'Auto', value: 'auto' },
  { label: 'On', value: true },
  { label: 'Off', value: false },
];

watch(model, (value) => {
  $q.dark.set(value);
});
</script>
