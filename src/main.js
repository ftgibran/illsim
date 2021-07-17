import Vue from 'vue'
import App from './App.vue'

import 'font-awesome/css/font-awesome.css'
import 'vue-select/dist/vue-select.css'
import 'vis/dist/vis.css'

import './utils/nouislider'
import './components'

import 'materialize-css'
window.$ = window.jQuery = require('jquery')
window.$.velocity = require('velocity-animate/velocity')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
