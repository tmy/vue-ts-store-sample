<template>
  <button @click="increment">
    +
  </button>
</template>

<script lang="ts">
import CounterKey from './counter-key';
import injectOrError from './inject-or-error';

export default {
  setup() {
    const counter = injectOrError(CounterKey);

    return {
      increment: counter.increment,
    };
  },
};
</script>
