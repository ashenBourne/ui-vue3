<!--
 * @Date: 2024-07-05 17:04:11
 * @LastEditors: aliushen 774779341@qq.com
 * @LastEditTime: 2024-07-10 23:43:26
 * @FilePath: \Vue3UI\src\App.vue
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Demo from "./components/demo.tsx"
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
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Demo />
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
