<script setup lang="ts">
import { useInjectAnimate } from '@/store/useAnimate'
import AppContainer from './AppContainer.vue'
import AppAnimate from './AppAnimate.vue'
import { onBeforeMount } from 'vue'
import { useInjectAuth } from '@/store/useAuth'
import pb, { type IUser } from '@/api/pb'

const { animate } = useInjectAnimate()

const htmlElement = document.documentElement

const handleScrollBarHide = () => {
  htmlElement.style.overflowX = 'hidden'
}

const handleScrollBarAuto = () => {
  htmlElement.style.removeProperty('overflow-x')
}

const { auth } = useInjectAuth()

onBeforeMount(() => {
  if (auth && !auth.value) {
    auth.value = pb.authStore.model as IUser
  }
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <transition
      :name="animate ? (route.meta.transitionName as string) ?? 'fade' : undefined"
      mode="out-in"
      appear
      @enter="handleScrollBarHide"
      @after-enter="handleScrollBarAuto"
      @leave="handleScrollBarHide"
      @after-leave="handleScrollBarAuto"
    >
      <AppContainer :key="route?.name || undefined">
        <component :is="Component" />
      </AppContainer>
    </transition>
  </RouterView>
  <AppAnimate size="32" />
</template>

<style scoped>
/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--speed-normal) var(--ease-in-out-sine);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scale Up */
.scale-up-enter-active,
.scale-up-leave-active {
  transition: all var(--speed-normal) var(--ease-in-out-sine);
}

.scale-up-enter-from {
  opacity: 0;
  scale: 0.9;
}

.scale-up-leave-to {
  opacity: 0;
  scale: 1.1;
}

/* Scale Down */
.scale-down-enter-active,
.scale-down-leave-active {
  transition: all var(--speed-normal) var(--ease-in-out-sine);
}

.scale-down-enter-from {
  opacity: 0;
  scale: 1.1;
}

.scale-down-leave-to {
  opacity: 0;
  scale: 0.9;
}

/* slide Left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all var(--speed-normal) var(--ease-in-out-sine);
}

.slide-left-enter-from {
  opacity: 0;
  translate: -40px 0;
}

.slide-left-leave-to {
  opacity: 0;
  translate: 40px 0;
}

/* Slide Right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all var(--speed-normal) var(--ease-in-out-sine);
}

.slide-right-enter-from {
  opacity: 0;
  translate: 40px 0;
}

.slide-right-leave-to {
  opacity: 0;
  translate: -40px 0;
}

/* Slide Up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all var(--speed-normal) var(--ease-in-out-sine);
}

.slide-up-enter-from {
  opacity: 0;
  translate: 0 40px;
}

.slide-up-leave-to {
  opacity: 0;
  translate: 0 -40px;
}

/* Slide Down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--speed-normal) var(--ease-in-out-sine);
}

.slide-down-enter-from {
  opacity: 0;
  translate: 0 -40px;
}

.slide-down-leave-to {
  opacity: 0;
  translate: 0 40px;
}
</style>
