<template>
  <button @click="decrement">
    -
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/stores/global';

export default defineComponent({
  setup() {
    const { counter } = useGlobalStore();

    return {
      decrement: counter.decrement,
    };
  },
});
</script>
