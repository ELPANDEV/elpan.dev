import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

import Lang from './modules/lang'
import portfolio from './modules/portfolio'

const store = new Vuex.Store({
  modules: {
    Lang,
    portfolio
  },
  mutations: {

  },
  getters: {

  }
})

export default store