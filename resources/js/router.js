import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/portfolio',
      name: 'portfolio',
      component: require('./pages/portfolio/index').default
    },
    {
      path: '/skills',
      name: 'skills',
      component: require('./pages/skills/index').default,
      children: [
        {
          path: 'languages',
          name: 'languages',
          component: require('./pages/skills/languages/index').default
        },
        {
          path: 'frameworks',
          name: 'frameworks',
          component: require('./pages/skills/frameworks/index').default
        },
        {
          path: 'technologies',
          name: 'technologies',
          component: require('./pages/skills/technologies/index').default
        }
      ]
    }
  ],
  mode: 'history'
})