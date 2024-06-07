<script setup lang="ts">
import AppContainer from './AppContainer.vue'
import AppNavigation from './AppNavigation.vue'

const { size } = withDefaults(defineProps<{ size?: number }>(), { size: 44 })
</script>

<template>
  <header>
    <AppContainer>
      <h1>
        <RouterLink to="/" aria-label="Vue Router 펀더멘탈">
          <img src="@/assets/vue-router-logo.svg" alt="" :height="size" :width="size" />
          Vue Router
        </RouterLink>
      </h1>
      <AppNavigation />
    </AppContainer>
  </header>
</template>

<style scoped>
header {
  padding-block: var(--space);
  background: color-mix(in hsl shorter hue, hsl(var(--primary)) 5%, hsl(var(--white)) 100%);
  color: color-mix(in hsl shorter hue, hsl(var(--primary)) 100%, hsl(var(--black)) 10%);

  div {
    display: flex;
    align-items: center;
    column-gap: var(--space-10);
  }

  h1 {
    --size: v-bind(size + 'px');

    margin: 0;
    font-size: 20px;
    line-height: 1;
    translate: -10px 0;

    img {
      translate: 0 -1px;
      scale: 0.85;
    }

    a {
      display: block;
      block-size: var(--size);
      padding-inline: 4px;
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
