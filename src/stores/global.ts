import { inject, InjectionKey } from 'vue';
import counterStore from './counter';

export default function globalStore() {
  return {
    counter: counterStore(),
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;

export const GlobalStoreKey: InjectionKey<GlobalStore> = Symbol('GlobalStore');

export function useGlobalStore() {
  const store = inject(GlobalStoreKey);
  if (!store) {
    throw new Error(`${GlobalStoreKey} is not provided`);
  }
  return store;
}
