import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
