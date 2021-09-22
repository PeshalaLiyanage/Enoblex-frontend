import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/Login.page'),
  },
  {
    path: '',
    redirect: { name: 'LoginPage' },
  },
  {
    path: '',
    component: () => import('../components/Layout'),
    children: [
      {
        path: 'todo',
        name: 'TodoPage',
        component: () => import('../views/Todo.page'),
      },
      {
        path: '/page2',
        name: 'Page2Page',
        component: () => import('../views/Page2.page'),
      },
      {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/NotFound.page'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const accessToken = localStorage.getItem('access_token');

  if (to.path === '/login' && accessToken) {
    // TODO - implement token verification
    return next('/todo');
  }

  if (to.path === from.path) {
    return null;
  }

  if (authRequired && !accessToken) {
    return next('/login');
  }

  if (!authRequired && accessToken) {
    return next('/todo');
  }
  return next();
});

export default router;
