<script setup lang="ts">
import AppContainer from './AppContainer.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <AppContainer>
      <small lang="en"> Copyright 2014−{{ currentYear }} &copy; Vue. All Rights Reserved. </small>
    </AppContainer>
  </footer>
</template>

<style scoped>
footer {
  padding-block: var(--space-5);
  background: color-mix(in hsl shorter hue, hsl(var(--secondary)) 100%, hsl(var(--black)) 60%);
  color: hsl(var(--primary));

  small {
    font-weight: 700;
  }
}
</style>
