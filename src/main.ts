import Vue from 'vue';
import { plugin } from 'vue-function-api';
import App from './App.vue';

Vue.use(plugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
