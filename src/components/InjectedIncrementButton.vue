<template>
  <button @click="increment">
    +
  </button>
</template>

<script lang="ts">
import { computed, inject } from 'vue-function-api';
import CounterKey from './counter-key';

export default {
  setup() {
    const wrapper = inject(CounterKey);
    if (!wrapper) {
      throw new Error(`${CounterKey} is not provided`);
    }
    const counter = wrapper.value;

    return {
      increment: counter.increment,
    };
  },
};
</script>
