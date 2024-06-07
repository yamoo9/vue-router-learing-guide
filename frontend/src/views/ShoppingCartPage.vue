<script setup lang="ts">
import { computed } from 'vue'
import useDocumentTitle from '@/composables/useDocumentTitle'
import numberWithComma from '@/utils/numberWithComma'
import { useInjectCart } from '@/store/useCart'

useDocumentTitle('장바구니')

const { cart, removeCart } = useInjectCart()

const isCartEmpty = computed(() => !cart || cart.value.length === 0)

const cartTotalPrice = computed(() =>
  numberWithComma(cart?.value?.reduce((total, item) => total + item.price, 0) ?? 0)
)

const handleRemoveCartItem = (removeId: string) => {
  removeCart(removeId)
}
</script>

<template>
  <article>
    <h2>장바구니</h2>

    <ul>
      <li v-if="isCartEmpty" class="empty">장바구니가 비었습니다. 😳</li>
      <template v-else>
        <li v-for="item in cart" :key="item.id">
          <div>
            <img :src="item.image" :alt="item.name" height="80" />
            <p>
              <em>{{ item.name }}</em>
              <span>{{ numberWithComma(item.price) }}원</span>
            </p>
          </div>
          <button type="button" @click="handleRemoveCartItem(item.id)">삭제</button>
        </li>
      </template>
    </ul>

    <div class="foot">
      <output>
        결제 총액 <b>{{ cartTotalPrice }}원</b></output
      >
      <button type="button" :disabled="isCartEmpty">결제</button>
    </div>
  </article>
</template>

<style scoped>
article {
  border-radius: 8px;
  border: 1px solid hsl(var(--primary) / 0.1);
  box-shadow: 0 0 8px hsla(var(--primary) / 0.6);
  background: hsl(var(--white));

  h2 {
    margin-block: 0 var(--space-5);
    padding: var(--space-5);
    border-bottom: 1px solid color-mix(in srgb, hsl(var(--primary)) 50%, hsl(var(--white)) 50%);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0 0 var(--space-2);

    .empty {
      padding: 20px 48px;
      font-size: 18px;

      &:hover {
        background: transparent;
      }
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-4) var(--space-5);

      &:hover {
        background: hsla(var(--primary), 0.05);
      }

      div {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        flex: 1;

        img {
          flex: 0 0 80px;
        }

        p {
          display: flex;
          flex-flow: column;
          gap: 4px;
          translate: 0 6px;

          em {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
          }

          span {
            font-size: 14px;
            font-weight: 800;
            color: hsla(var(--secondary), 0.7);
          }
        }
      }

      button {
        --color: 220, 8%, 26%;
        background: hsl(var(--color));
        color: hsl(var(--white));
        border: 0;
        border-radius: 4px;
        padding: 12px 16px;
        font-size: 12px;
        font-weight: 700;
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &:hover:not(:disabled) {
          background: color-mix(
            in hsl increasing hue,
            hsl(var(--color)) 100%,
            hsl(var(--black)) 40%
          );
        }
      }
    }
  }

  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-4) var(--space-5);
    color: hsl(var(--secondary));
    background: linear-gradient(to top, hsla(var(--secondary), 0.2) 1%, hsla(var(--white), 1) 30%);

    output {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      translate: 24px -2px;
      color: hsla(var(--secondary), 0.9);

      b {
        font-size: 24px;
        font-weight: 800;
      }
    }

    button {
      background: hsl(var(--primary));
      color: hsl(var(--white));
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 700;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      translate: 0 -4px;

      &:hover:not(:disabled) {
        background: color-mix(in srgb, hsl(var(--primary)) 100%, hsl(var(--black)) 20%);
      }

      &:disabled {
        opacity: 0.7;
      }
    }
  }
}
</style>
