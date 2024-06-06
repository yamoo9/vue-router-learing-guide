<template>
  <nav aria-label="페이지 내비게이션">
    <ul>
      <li><RouterLink to="/cart">장바구니</RouterLink></li>
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
    border-radius: 4px;
    padding: var(--space-2);

    &.router-link-active {
      background: color-mix(in hsl shorter hue, hsl(var(--primary)) 15%, hsl(var(--white)) 100%);
      font-weight: 700;
    }

    &:hover:not(.router-link-active) {
      background: color-mix(in hsl shorter hue, hsl(var(--primary)) 10%, hsl(var(--white)) 100%);
    }
  }
}
</style>
