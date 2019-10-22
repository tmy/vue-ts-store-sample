import { reactive } from '@vue/composition-api';

export default function counterStore() {
  const state = reactive({
    count: 0,
  });

  return {
    get count() {
      return state.count;
    },

    increment() {
      state.count += 1;
    },

    decrement() {
      state.count -= 1;
    },
  };
}

export type CounterStore = ReturnType<typeof counterStore>;
