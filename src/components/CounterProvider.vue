<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { provide } from '@vue/composition-api';
import counterStore from '../stores/counter';
import CounterKey from './counter-key';

export default {
  setup() {
    provide(CounterKey, counterStore());
    return {};
  },
};
</script>
