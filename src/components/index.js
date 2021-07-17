import Vue from 'vue'
import Welcome from './Welcome'
import Network from './Network'
import Analytics from './Analytics'
import Loader from './Loader'
import Nav from './Nav'
import SideNav from './SideNav'
import Slider from './Slider'
import Checkbox from './Checkbox'
import Select from './Select'
import Stats from './Stats'
import FormConfig from './config/FormConfig'
import FormConfigAnimation from './config/FormConfigAnimation'
import FormConfigSimulation from './config/FormConfigSimulation'
import FormConfigGenerator from './config/FormConfigGenerator'
import FormConfigUniformFormat from './config/FormConfigUniformFormat'
import FormConfigFullRandom from './config/FormConfigFullRandom'
import FormConfigAnalytics from './config/FormConfigAnalytics'

Vue.component('welcome', Welcome)
Vue.component('network', Network)
Vue.component('analytics', Analytics)

Vue.component('ui-loader', Loader)
Vue.component('ui-nav', Nav)
Vue.component('ui-sidenav', SideNav)
Vue.component('ui-slider', Slider)
Vue.component('ui-checkbox', Checkbox)
Vue.component('ui-select', Select)
Vue.component('ui-stats', Stats)

Vue.component('form-config', FormConfig)
Vue.component('form-config-animation', FormConfigAnimation)
Vue.component('form-config-simulation', FormConfigSimulation)
Vue.component('form-config-generator', FormConfigGenerator)
Vue.component('form-config-uniform-format', FormConfigUniformFormat)
Vue.component('form-config-full-random', FormConfigFullRandom)
Vue.component('form-config-analytics', FormConfigAnalytics)
