import { RouteRecordRaw } from 'vue-router';
import AuthenticationPage from 'pages/auth/AuthenticationPage.vue';
import AuthLandingPage from 'pages/auth/AuthLandingPage.vue';
import BasicLayout from 'layouts/BasicLayout.vue';
import HelloPage from 'pages/HelloPage.vue';
import MainLayout from 'layouts/MainLayout.vue';
import NotFoundPage from 'pages/NotFoundPage.vue';
import PasswordlessAuthPage from 'pages/auth/PasswordlessAuthPage.vue';
import PasswordlessAuthRequestPage from 'pages/auth/PasswordlessAuthRequestPage.vue';
import PasswordResetPage from 'pages/auth/PasswordResetPage.vue';
import PasswordResetRequestPage from 'pages/auth/PasswordResetRequestPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: HelloPage,
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
      {
        path: 'product',
        component: HelloPage,
        meta: { title: 'Products', icon: 'inventory_2' },
      },
      {
        path: 'category',
        component: HelloPage,
        meta: { title: 'Categories', icon: 'category' },
      },
    ],
  },
  {
    path: '/auth/',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: AuthLandingPage,
        meta: { title: 'Authentication' },
      },
      {
        path: 'authentication',
        component: AuthenticationPage,
        meta: { title: 'Authentication' },
      },
      {
        path: 'password-reset-request',
        component: PasswordResetRequestPage,
        meta: { title: 'Password reset' },
      },
      {
        path: 'password-reset',
        component: PasswordResetPage,
        meta: { title: 'Password reset' },
      },
      {
        path: 'passwordless-auth-request',
        component: PasswordlessAuthRequestPage,
        meta: { title: 'Passwordless authentication' },
      },
      {
        path: 'passwordless-auth',
        component: PasswordlessAuthPage,
        meta: { title: 'Passwordless authentication' },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: NotFoundPage,
        meta: { title: 'Not found' },
      },
    ],
  },
];

export default routes;
