import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/authentication/Login.page'),
  },
  {
    path: '',
    redirect: { name: 'HomePage' },
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/Dashboard.layout'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('../views/Dashboard/Home.page'),
      },
      {
        path: 'customers/all-customers',
        name: 'AllCustomersPage',
        component: () => import('../views/Dashboard/Customers/AllCustomers.page'),
      },
      {
        path: 'customers/add-customers',
        name: 'AddNewCustomer',
        component: () => import('../views/Dashboard/Customers/AddNewCustomers.page'),
      },
      {
        path: 'consultations/all-consultations',
        name: 'AllConsultationsPage',
        component: () => import('../views/Dashboard/Consultations/AllConsultations.page'),
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
  const user = localStorage.getItem('user');
  const accessToken = localStorage.getItem('access_token');

  if (to.path === '/login' && accessToken) {
    return next('/dashboard');
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
