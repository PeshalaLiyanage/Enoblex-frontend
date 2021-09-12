import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './auhModule';
import dashboardModule from './dashboardModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule,
    dashboard: dashboardModule,
  },
});
