<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppContainer from '@/components/AppContainer.vue'
</script>

<template>
  <AppHeader />
  <main>
    <AppContainer>
      <RouterView />
    </AppContainer>
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
