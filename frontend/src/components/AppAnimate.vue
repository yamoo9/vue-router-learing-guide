<script setup lang="ts">
import { computed } from 'vue'
import { useInjectAnimate } from '@/store/useAnimate'

const { size } = defineProps<{ size?: number | string }>()

const { animate, toggle } = useInjectAnimate()

const animateLabel = computed(() => (animate?.value ? '애니메이션 끄기' : '애니메이션 켜기'))
const pathDValue = computed(() =>
  !animate?.value
    ? 'M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21'
    : 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z'
)
</script>

<template>
  <Teleport to="body">
    <button type="button" :aria-label="animateLabel" :title="animateLabel" @click="toggle">
      <svg
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="pathDValue" />
      </svg>
    </button>
  </Teleport>
</template>

<style scoped>
button {
  --size: v-bind('size ? size + "px" : "24px"');

  position: fixed;
  bottom: 24px;
  right: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  padding: 4px;
  background: none;
  cursor: pointer;
  color: v-bind('animate ? "hsl(var(--animate-on))" : "hsl(var(--animate-off))"');

  &:hover {
    background: hsla(var(--animate-on), 0.1);
  }

  svg {
    inline-size: var(--size);
    block-size: var(--size);
  }
}
</style>
