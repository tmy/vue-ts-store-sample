<template>
  <button @click="decrement">
    -
  </button>
</template>

<script lang="ts">
import { SetupContext } from 'vue-function-api';

export default {
  setup(props: {}, context: SetupContext) {
    const { counter } = context.root.$store;

    return {
      decrement: counter.decrement,
    };
  },
};
</script>
