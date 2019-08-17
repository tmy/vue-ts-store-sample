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
import { value } from 'vue-function-api';

export default {
  setup() {
    const count = value(0);
    return {
      count,
      increment() {
        count.value += 1;
      },
      decrement() {
        count.value -= 1;
      },
    };
  },
};
</script>
