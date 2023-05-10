<template>
  <q-input type="text" v-model="model" outlined square />
</template>

<script lang="ts" setup>

import { ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  modelValue: string,
}>(), {
  modelValue: '',
});

const emit = defineEmits(['update:modelValue']);

const model = ref(props.modelValue);

watch(() => props.modelValue, (value) => {
  model.value = value;
});

watch(model, (value) => {
  emit('update:modelValue', value);
});
</script>
