import Vue from 'vue';
import App from './App.vue';
import router from './router';
import globalStore from './global_store';

Vue.config.productionTip = false
Vue.use(globalStore);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
