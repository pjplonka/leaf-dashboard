import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import toast from "@/applications/Admin/mixins/toast";
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.mixin(toast)

store.dispatch('init')

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
