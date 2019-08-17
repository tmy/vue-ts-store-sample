<template>
  <div>
    <button @click="decrement">
      -
    </button>
    <span class="count">
      {{ count }}
    </span>
    <button @click="increment">
      +
    </button>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue-function-api';
import counterStore from '@/stores/counter';

export default {
  setup() {
    const counter = counterStore();
    const count = computed(() => counter.count);

    return {
      count,
      increment: counter.increment,
      decrement: counter.decrement,
    };
  },
};
</script>
