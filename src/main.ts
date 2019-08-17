import Vue from 'vue';
import { plugin } from 'vue-function-api';
import App from './App.vue';
import globalStore from './stores/global';

Vue.use(plugin);
Vue.prototype.$store = globalStore();
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
