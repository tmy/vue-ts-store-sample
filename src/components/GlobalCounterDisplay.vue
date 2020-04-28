<template>
  <span class="count">
    {{ count }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useGlobalStore } from '@/stores/global';

export default defineComponent({
  setup() {
    const { counter } = useGlobalStore();
    const count = computed(() => counter.count);

    return {
      count,
    };
  },
});
</script>
