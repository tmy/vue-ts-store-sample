import counterStore from './counter';

export default function globalStore() {
  return {
    counter: counterStore(),
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;
