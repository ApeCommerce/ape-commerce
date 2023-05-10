import { createRouter, createWebHashHistory, RouteMeta } from 'vue-router';
import routes from 'router/routes';

export const getMeta = (path: string) => {
  let meta: RouteMeta | undefined;
  routes.forEach((route) => {
    if (route.children) {
      route.children.forEach((child) => {
        if (route.path + child.path === path) {
          meta = child.meta;
        }
      });
    }
  });
  return meta;
};

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log('from', from);
  // console.log('to', to);
  next();
});

export default router;
