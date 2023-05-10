<template>
  <div class="absolute-full flex flex-center bg-primary">
    <div class="width q-mx-xl q-mb-xl text-center text-white">
      <div class="text-h4">{{ title }}</div>
      <div class="q-mt-md">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.width {
  width: 320px;
}
</style>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = ref(route.meta.title);

watch(() => route.meta, (meta) => {
  title.value = meta.title;
});
</script>
