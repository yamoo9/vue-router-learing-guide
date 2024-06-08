import { inject, provide, ref, type Ref } from 'vue'
import type { IProduct } from '@/api/pb'

const cartSymbol = Symbol('shoppingCart')

export function useProvideCart(initialCart: IProduct[] = []) {
  const cart = ref<IProduct[]>(initialCart)
  provide(cartSymbol, cart)
}

export function useInjectCart() {
  const cart = inject<Ref<IProduct[]>>(cartSymbol)

  const addCart = (newCart: IProduct) => {
    if (cart) {
      const cartItems = cart.value
      const hasItem = cartItems.find((cart) => cart.id === newCart.id)
      if (!hasItem) {
        cart.value.push?.(newCart)
      } else {
        alert('이미 카트에 담긴 상품입니다.')
      }
    }
  }

  const removeCart = (removeId: string) => {
    if (cart) {
      cart.value = cart.value.filter((item) => item.id !== removeId)
    }
  }

  return { cart, addCart, removeCart }
}
