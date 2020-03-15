import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { asyncRoutes, constantRoutes } from '@/router'
store.state.permission.routes = constantRoutes

import './components'
import './common/styles/index.scss'
import './assets/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
