import { createApp } from 'vue';
import App from './App.vue';
import globalStore, { GlobalStoreKey } from './stores/global';

const app = createApp(App);

app.provide(GlobalStoreKey, globalStore());

app.mount('#app');
