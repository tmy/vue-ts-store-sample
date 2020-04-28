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
import { computed, defineComponent } from 'vue';
import counterStore from '@/stores/counter';

export default defineComponent({
  setup() {
    const counter = counterStore();
    const count = computed(() => counter.count);

    return {
      count,
      increment: counter.increment,
      decrement: counter.decrement,
    };
  },
});
</script>
