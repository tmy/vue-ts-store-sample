import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import globalStore from './stores/global';

Vue.use(VueCompositionApi);
Vue.prototype.$store = globalStore();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
