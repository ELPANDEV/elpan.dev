import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('./pages/home/index').default
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: require('./pages/portfolio/index').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('./pages/about/index').default
    },
    {
      path: '/contact',
      name: 'contact',
      component: require('./pages/contact/index').default
    }
  ],
  mode: 'history'
})