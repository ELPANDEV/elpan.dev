window.Vue = require('vue');
window.axios = require('axios');

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const registerComponents = (files) => {
  files.keys().map(key => {
    const mKey = key.split('/').slice(1).join('/').split('.')[0]
    const name = mKey.replace(/\//g, '.').replace('.index', '').toLowerCase()
    console.log(name)
    Vue.component(`v-${name}`, files(key).default)
  });
}

registerComponents(require.context('./components/', true, /\.vue$/i))
registerComponents(require.context('./layouts/', true, /\.vue$/i))


import store from './store/index'
import router from './router'

Vue.prototype.$lang = store.state.Lang
Vue.prototype.$portfolio = store.state.portfolio

const app = new Vue({
    el: '#app',
    store,
    router
});
