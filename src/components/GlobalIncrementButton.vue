<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/stores/global';

export default defineComponent({
  setup() {
    const { counter } = useGlobalStore();

    return {
      increment: counter.increment,
    };
  },
});
</script>

<template>
  <button @click="increment">
    +
  </button>
</template>
