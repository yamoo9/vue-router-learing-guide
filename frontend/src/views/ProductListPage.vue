<script setup lang="ts">
import { useProductList } from '@/api/products'
import useDocumentTitle from '@/composables/useDocumentTitle'
import numberWithComma from '@/utils/numberWithComma'
import slug from '@/utils/slug'

useDocumentTitle('상품 목록')
const { data, error } = useProductList()
</script>

<template>
  <h2>두나무 올리브 오일</h2>

  <Suspense>
    <ul v-if="data">
      <li v-for="product in data.items" :key="product.id">
        <RouterLink
          :to="{
            name: 'bottleItem',
            params: { slug: slug(product.name) },
            state: {
              productId: product.id
            }
          }"
        >
          <img :src="product.image" :alt="product.name" height="240" />
          <p>{{ product.name }}</p>
          <span>{{ numberWithComma(product.price) }}원</span>
        </RouterLink>
      </li>
    </ul>
    <template #fallback>
      <p class="loading">상품 정보를 읽어오는 중입니다.</p>
    </template>
  </Suspense>

  <p v-if="error" class="error">오류 발생: {{ error.message }}</p>
</template>

<style scoped>
h2 {
  --color: hsl(var(--white));

  padding-block: 20px 30px;
  border-block-end: 0.1px solid hsla(var(--white), 0.5);
  color: var(--color);
  font-weight: 300;
}

ul {
  list-style: none;
  margin: 40px 0;
  padding-left: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 20px;

  li {
    flex: 1 1 calc(25% - 20px);

    a {
      display: flex;
      flex-flow: column;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 28px 0;
      background: color-mix(
        in hsl increasing hue,
        hsl(var(--secondary)) 100%,
        hsl(var(--black)) 15%
      );
      color: color-mix(in hsl increasing hue, hsl(var(--secondary)) 100%, hsl(var(--white)) 100%);
      text-decoration: none;
      transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

      &:hover,
      &:focus {
        background: color-mix(
          in hsl increasing hue,
          hsl(var(--secondary)) 100%,
          hsl(var(--black)) 90%
        );
        border-color: currentColor;
        box-shadow: 0 0 40px hsla(var(--white), 0.06);

        img {
          scale: 1.2;
          translate: 0 -24px;
        }
      }

      img {
        margin-block-end: 12px;
        transition: all var(--speed-normal) var(--ease-out-back);
      }

      p {
        margin-block-end: 8px;
        font-size: 16px;
        font-weight: 600;
      }

      span {
        font-size: 14px;
        font-weight: 400;
      }
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
