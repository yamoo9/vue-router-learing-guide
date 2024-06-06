<script setup lang="ts">
import AppContainer from './AppContainer.vue'

const HEADER_SIZE = 44
</script>

<template>
  <header>
    <AppContainer>
      <h1>
        <RouterLink to="/" aria-label="Vue Router 펀더멘탈">
          <img
            src="@/assets/vue-router-logo.svg"
            alt=""
            :height="HEADER_SIZE"
            :width="HEADER_SIZE"
          />
          Vue Router
        </RouterLink>
      </h1>
      <nav aria-label="페이지 내비게이션">
        <ul>
          <li><RouterLink to="/cart">장바구니</RouterLink></li>
        </ul>
      </nav>
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
    --size: v-bind(HEADER_SIZE + 'px');

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

  nav {
    ul {
      list-style: none;
      padding-left: 0;
    }

    a {
      border-radius: 4px;
      padding: var(--space-2);

      &:hover {
        background: color-mix(in hsl shorter hue, hsl(var(--primary)) 10%, hsl(var(--white)) 100%);
      }
    }
  }
}
</style>
