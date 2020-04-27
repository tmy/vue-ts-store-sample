import Vue, { createApp } from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import globalStore from './stores/global';

Vue.prototype.$store = globalStore();

createApp(App).mount('#app');
