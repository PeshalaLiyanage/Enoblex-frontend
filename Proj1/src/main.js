import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Fragment from 'vue-fragment';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import './utilities/validationRules';

Vue.config.productionTip = false;

Vue.use(Fragment.Plugin);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
