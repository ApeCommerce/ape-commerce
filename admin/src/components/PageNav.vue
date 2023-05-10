<template>
  <q-list dense v-for="list in nav" :key="list.title">
    <q-item-label header v-if="list.title">{{ list.title }}</q-item-label>
    <q-item v-for="page in list.pages" :key="page.path" :to="page.path" exact>
      <q-item-section avatar><q-icon :name="page.meta?.icon" /></q-item-section>
      <q-item-section>{{ page.meta?.title }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import { getMeta } from 'router';
import { RouteMeta } from 'vue-router';

interface NavList {
  title?: string,
  pages: {
    path: string,
    meta?: RouteMeta,
  }[],
}

const nav: NavList[] = [
  {
    pages: [
      { path: '/' },
    ],
  },
  {
    title: 'Catalog',
    pages: [
      { path: '/product' },
      { path: '/category' },
    ],
  },
];

nav.forEach((list) => {
  list.pages.forEach((page) => {
    page.meta = getMeta(page.path);
  });
});
</script>
