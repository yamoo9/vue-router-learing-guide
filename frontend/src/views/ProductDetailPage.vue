<script setup lang="ts">
import { computed, defineAsyncComponent, watch } from 'vue'
import { useProductItem } from '@/api/products'
import numberWithComma from '@/utils/numberWithComma'
import useDocumentTitle from '@/composables/useDocumentTitle'
import { useInjectCart } from '@/store/useCart'
import type { IProduct } from '@/api/pb'
import { useRouter } from 'vue-router'

const NotFound = defineAsyncComponent(() => import('./NotFound.vue'))

const productId = computed(() => history.state.productId)
const { data, error } = useProductItem(productId.value as string)

watch(data, (value) => {
  if (value) {
    const { name } = value
    useDocumentTitle(name)
  }
})

const router = useRouter()

const { addCart } = useInjectCart()

const handleAddCart = (cartItem: IProduct) => {
  addCart(cartItem)
  router.push({ name: 'bottleList' })
}
</script>

<template>
  <Suspense>
    <section v-if="data">
      <img :src="data.image" alt="" height="480" />
      <h2>{{ data.name }}</h2>
      <span>{{ numberWithComma(data.price) }}원</span>
      <button type="button" @click="handleAddCart(data)">장바구니에 추가</button>
    </section>
    <template #fallback>
      <p class="loading">상품 정보를 읽어오고 있습니다.</p>
    </template>
  </Suspense>
  <NotFound v-if="error" />
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-block-size: 80vh;

  img {
    filter: drop-shadow(0 12px 20px hsla(var(--black), 0.2));
    margin-block-end: 20px;
  }

  h2 {
    margin-block-end: 12px;
    color: hsl(var(--white));
    font-weight: 400;
  }

  span {
    margin-block-end: 24px;
    color: hsl(var(--white), 0.7);
    font-size: 20px;
  }

  button {
    --color: 350, 6%, 18%;
    background: hsl(var(--color));
    color: hsl(var(--white));
    border: 0;
    border-radius: 4px;
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 700;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      background: color-mix(in hsl increasing hue, hsl(var(--color)) 100%, hsl(var(--black)) 40%);
    }
  }
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 50px;
  padding: 12px 24px;
  background: color-mix(in hsl shorter hue, hsl(var(--primary)) 10%, hsl(var(--black)) 0%);
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  filter: drop-shadow(0 0 10px hsla(var(--black), 0.5));
}

.error {
  color: #e43f3f;
}
</style>
