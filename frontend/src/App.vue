<script setup lang="ts">
import useStore from '@/store'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AnimateRouterView from '@/components/AnimateRouterView.vue'

useStore()
</script>

<template>
  <AppHeader />
  <main>
    <AnimateRouterView />
  </main>
  <AppFooter />
</template>

<style>
#app {
  display: flex;
  flex-flow: column;
  min-block-size: 100vh;

  main {
    flex: 1;
    padding-block: var(--space-7);
    background: color-mix(in hsl shorter hue, hsl(var(--secondary)) 100%, hsl(var(--black)) 15%);
    color: hsl(var(--primary));
  }
}
</style>
