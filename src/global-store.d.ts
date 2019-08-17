import Vue from 'vue';
import { GlobalStore } from './stores/global';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: Readonly<GlobalStore>;
  }
}
