<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useInjectCart } from '@/store/useCart'
import { useInjectAuth } from '@/store/useAuth'

const { cart } = useInjectCart()
const { auth, signOut } = useInjectAuth()

const cartCount = computed(() => cart?.value?.length ?? 0)

const router = useRouter()

const handleSignOut = () => {
  signOut()
  router.push({ name: 'home' })
}
</script>

<template>
  <nav aria-label="페이지 내비게이션">
    <ul>
      <li v-if="!auth">
        <RouterLink :to="{ name: 'signin' }"> 로그인 </RouterLink>
      </li>
      <li v-else>
        <div class="userInfo">
          <p>{{ auth.username }}</p>
          <button type="button" @click="handleSignOut">로그아웃</button>
        </div>
      </li>
      <li v-if="auth">
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
    display: flex;
    gap: var(--space-4);
    list-style: none;
    padding-left: 0;
  }

  a,
  button {
    display: flex;
    gap: 4px;
    border-radius: 4px;
    padding: var(--space-2);
    color: inherit;
    line-height: 1;

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
      translate: 0 -2px;
    }
  }

  button {
    border: 0;
  }

  .userInfo {
    display: flex;
    gap: 12px;
    align-items: center;

    p {
      margin: 0;
      font-weight: 800;
      font-size: 16px;
      border-inline-end: 0.5px solid currentColor;
      padding-inline-end: 14px;
    }
  }
}
</style>
