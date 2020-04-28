<template>
  <span class="count">
    {{ count }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import CounterKey from './counter-key';
import injectOrError from './inject-or-error';

export default defineComponent({
  setup() {
    const counter = injectOrError(CounterKey);
    const count = computed(() => counter.count);

    return {
      count,
    };
  },
});
</script>
