import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import {required, min, numeric} from "vee-validate/dist/rules";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import toast from "@/mixins/toast";

extend('required', {...required, message: 'This field is required'});
extend('min', {...min, message: 'Minimum 3 characters required'});
extend('numeric', {...numeric, message: 'The field may only contain numeric characters'});

Vue.config.productionTip = false
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.mixin(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
