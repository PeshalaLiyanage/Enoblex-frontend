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
    path: '/todo',
    name: 'TodoPage',
    component: () => import('../views/Todo.page'),
  },
  {
    path: '',
    redirect: { name: 'TodoPage' },
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
    // todo send a token verification request before redirect
    return next('/todo');
  }

  if (to.path === from.path) {
    return null;
  }

  if (authRequired && !accessToken) {
    return next('/login');
  }

  if (!authRequired && accessToken) {
    return next('/dashboard');
  }

  return next();
});

export default router;