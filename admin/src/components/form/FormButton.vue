<template>
  <q-btn :type="type" outline square />
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  type?: string,
}>(), {
  type: 'button',
});
</script>
