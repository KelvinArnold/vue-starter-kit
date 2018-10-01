import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewHome from './../views/views.home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ViewHome,
  }
]

const router = new VueRouter({
  routes,
})

export default router;