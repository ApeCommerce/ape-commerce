<template>
  <q-layout view="lHr LpR lFr">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn @click="toggleDrawer" :icon=icon dense flat round />
        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawerOpen" side="left" show-if-above bordered class="q-py-md">
      <page-nav />
      <dark-mode-toggle />
      <logout-button />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import DarkModeToggle from 'components/DarkModeToggle.vue';
import LogoutButton from 'components/LogoutButton.vue';
import PageNav from 'components/PageNav.vue';

const route = useRoute();

const title = ref(route.meta.title);
const icon = ref(route.meta.icon);

watch(() => route.meta, (meta) => {
  title.value = meta.title;
  icon.value = meta.icon;
});

const drawerOpen = ref(false);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};
</script>
