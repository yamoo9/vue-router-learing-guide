<script setup lang="ts">
import { useInjectAnimate } from '@/store/useAnimate'
import AppContainer from './AppContainer.vue'
import AppAnimate from './AppAnimate.vue'

const { animate } = useInjectAnimate()
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <transition :name="animate ? 'scale-up' : undefined" mode="out-in" appear>
      <AppContainer :key="route?.name || undefined">
        <component :is="Component" />
      </AppContainer>
    </transition>
  </RouterView>
  <AppAnimate size="32" />
</template>

<style scoped>
.scale-up-enter-active,
.scale-up-leave-active {
  transition: all 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.scale-up-enter-from {
  opacity: 0;
  scale: 0.9;
}

.scale-up-leave-to {
  opacity: 0;
  scale: 1.1;
}
</style>
