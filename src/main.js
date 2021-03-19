import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCurrency from 'vue-currency-filter'

Vue.use(VueAxios, axios)

Vue.use(VueCurrency, {
  name: 'rupiah',
  symbol : 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
