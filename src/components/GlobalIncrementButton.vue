<template>
  <button @click="increment">
    +
  </button>
</template>

<script lang="ts">
import { SetupContext } from '@vue/composition-api';

export default {
  setup(props: {}, context: SetupContext) {
    const { counter } = context.root.$store;

    return {
      increment: counter.increment,
    };
  },
};
</script>
