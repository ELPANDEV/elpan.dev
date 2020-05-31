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
      component: require('./pages/about/index').default,
      children: [
        {
          path: 'education',
          name: 'education',
          component: require('./pages/about/education/index').default
        },
        {
          path: 'experience',
          name: 'experience',
          component: require('./pages/about/experience/index').default
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: require('./pages/contact/index').default,
      children: [
        {
          path: 'whatsapp',
          name: 'whatsapp',
          component: require('./pages/contact/whatsapp/index').default
        },
        {
          path: 'form',
          name: 'form',
          component: require('./pages/contact/form/index').default
        },
        {
          path: 'email',
          name: 'email',
          component: require('./pages/contact/email/index').default
        }
      ]
    }
  ],
  mode: 'history'
})