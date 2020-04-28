<script lang="ts">
import { reactive, computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    });
    const count = computed(() => state.count);

    return {
      count,
      increment() {
        state.count += 1;
      },
      decrement() {
        state.count -= 1;
      },
    };
  },
});
</script>

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
