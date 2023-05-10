<template>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import config from 'config';

const route = useRoute();

const title = ref(config.appName);

useMeta(() => ({
  title: `${title.value} | ${config.appName}`,
}));

watch(() => route.meta, (meta) => {
  title.value = meta.title;
});
</script>
