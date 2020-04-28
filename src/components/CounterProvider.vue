<script lang="ts">
import { provide, defineComponent } from 'vue';
import counterStore from '@/stores/counter';
import CounterKey from './counter-key';

export default defineComponent({
  setup() {
    provide(CounterKey, counterStore());
    return {};
  },
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>
