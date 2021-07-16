import Vue from 'vue'
import App from './App.vue'

import 'font-awesome/css/font-awesome.css'
import 'nouislider/src/nouislider.css'
import 'vis/dist/vis.css'

import './utils/nouislider'
import './components'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  events: {
    simulate(config) {
      this.$refs.network.init(config)
    },
  },
}).$mount('#app')
