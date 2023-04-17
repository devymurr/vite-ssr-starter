<script setup lang="ts">
import Link from "./components/Link.vue"
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href=https://vite-plugin-ssr.com/ target="_blank">
      <img src="./assets/vite-plugin-ssr.svg" class="logo ssr-plugin" alt="Vue logo" />
    </a>
    
    <div class="navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  </div>
  <slot />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover, .logo.ssr-plugin:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
