<template>
  <span class="count">
    {{ count }}
  </span>
</template>

<script lang="ts">
import { computed, inject } from 'vue-function-api';
import CounterKey from './counter-key';
import injectOrError from './inject-or-error';

export default {
  setup() {
    const counter = injectOrError(CounterKey);
    const count = computed(() => counter.count);

    return {
      count,
    };
  },
};
</script>
