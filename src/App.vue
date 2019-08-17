<template>
  <div id="app">
    <h1>TypeScript + ストアパターン</h1>
    <h2>Data で状態管理</h2>
    <SimpleCounter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SimpleCounter from './components/SimpleCounter.vue';

export default Vue.extend({
  name: 'App',
  components: {
    SimpleCounter,
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .count {
  margin: 0 0.5em;
  font-size: 2em;
}
</style>
