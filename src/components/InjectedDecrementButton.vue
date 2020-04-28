<script lang="ts">
import { defineComponent } from 'vue';
import CounterKey from './counter-key';
import injectOrError from './inject-or-error';

export default defineComponent({
  setup() {
    const counter = injectOrError(CounterKey);

    return {
      decrement: counter.decrement,
    };
  },
});
</script>

<template>
  <button @click="decrement">
    -
  </button>
</template>
