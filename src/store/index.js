import Vue from 'vue';
import Vuex from 'vuex';
// Import all Modules
import modules from './modules';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
});

export default store;