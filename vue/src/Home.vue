<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { add } from '@laboratory/common/utils';
console.log('add', add(1, 1));
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <p>RouterLink tag</p>
    <RouterLink to="/vue/" class="mr-2">Home</RouterLink>
    <RouterLink to="/vue/foo" class="mr-2">Foo</RouterLink>
    <RouterLink to="/vue/bar" class="mr-2">Bar</RouterLink>
    <page-anchor href="/react" class="mr-2">React</page-anchor>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
