<script setup lang="ts">
import AppContainer from './AppContainer.vue'
import AppNavigation from './AppNavigation.vue'

const { size } = withDefaults(defineProps<{ size?: number }>(), { size: 120 })
</script>

<template>
  <header>
    <AppContainer>
      <h1>
        <RouterLink :to="{ name: 'home' }">
          <img
            src="@/assets/logo-hexagon.svg"
            alt="두나무 올리브 오일"
            :height="size"
            :width="size"
          />
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

  > div {
    position: relative;
    display: flex;
    justify-content: space-between;
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
      position: absolute;
      top: -38px;
      left: -4px;
      block-size: var(--size);
      inline-size: var(--size);
      translate: 0 -1px;
      scale: 0.85;
      transition: all var(--speed-normal) var(--ease-out-back);
      filter: drop-shadow(0 12px 4px hsla(var(--black), 0.2));

      &:hover {
        scale: 1;
        translate: 0 8px;
      }
    }

    a {
      display: flex;
      align-items: center;
      padding-inline: 100px 4px;
      color: inherit;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>
