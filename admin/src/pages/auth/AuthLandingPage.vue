<template>
  <q-form class="column q-gutter-md" @submit="onSubmit">
    <string-input v-model="email" label="Email" autofocus />
    <form-button type="submit" label="Continue" />
  </q-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormButton from 'components/form/basic/FormButton.vue';
import StringInput from 'components/form/basic/StringInput.vue';

const email = ref('');

const onSubmit = () => {
  console.log(email.value);
};
</script>
