<template>
  <div id="app">
    <h1>TypeScript + ストアパターン</h1>
    <h2>Data で状態管理</h2>
    <SimpleCounter />
    <h2>ストアで状態管理</h2>
    <StoredCounter />
    <h2>Dependency Injection でストアを共有</h2>
    <CounterProvider>
      <InjectedDecrementButton />
      <InjectedCounterDisplay />
      <InjectedIncrementButton />
    </CounterProvider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SimpleCounter from './components/SimpleCounter.vue';
import StoredCounter from './components/StoredCounter.vue';
import CounterProvider from './components/CounterProvider.vue';
import InjectedCounterDisplay from './components/InjectedCounterDisplay.vue';
import InjectedIncrementButton from './components/InjectedIncrementButton.vue';
import InjectedDecrementButton from './components/InjectedDecrementButton.vue';

export default Vue.extend({
  name: 'App',
  components: {
    SimpleCounter,
    StoredCounter,
    CounterProvider,
    InjectedCounterDisplay,
    InjectedIncrementButton,
    InjectedDecrementButton,
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
