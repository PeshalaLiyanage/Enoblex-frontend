import Vuex from 'vuex';
import Vue from 'vue';
import todos from './todoModule';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos,
  },
});
