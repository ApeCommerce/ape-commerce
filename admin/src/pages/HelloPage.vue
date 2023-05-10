<template>
  <div>Hello</div>
  <q-form class="column q-gutter-md" @submit="onSubmit">
    <string-input v-model="email" label="Email" />
    <form-button type="submit" label="Let's go!" />
  </q-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormButton from 'components/form/FormButton.vue';
import StringInput from 'components/form/StringInput.vue';

const email = ref('');

const onSubmit = () => {
  console.log(email.value);
};
</script>
