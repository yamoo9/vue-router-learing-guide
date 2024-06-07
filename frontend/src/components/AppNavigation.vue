<script setup lang="ts">
import { computed } from 'vue'
import { useInjectCart } from '@/store/useCart'

const { cart } = useInjectCart()

const cartCount = computed(() => cart?.value?.length ?? 0)
</script>

<template>
  <nav aria-label="페이지 내비게이션">
    <ul>
      <li>
        <RouterLink to="/cart">
          장바구니
          <span>{{ cartCount }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    display: flex;
    gap: 4px;
    border-radius: 4px;
    padding: var(--space-2);

    &.active-link,
    &.exact-active-link {
      background: color-mix(in hsl shorter hue, hsl(var(--primary)) 15%, hsl(var(--white)) 100%);
      font-weight: 700;
    }

    &:hover:not(.router-link-active) {
      background: color-mix(in hsl shorter hue, hsl(var(--primary)) 10%, hsl(var(--white)) 100%);
    }

    span {
      font-size: 12px;
      font-weight: 800;
      display: grid;
      place-content: center;
      background: hsl(var(--primary));
      color: hsl(var(--white));
      border-radius: 50%;
      padding: 1px 0 0;
      line-height: 1;
      translate: 0 -1px;
      inline-size: 1rem;
      block-size: 1rem;
    }
  }
}
</style>
