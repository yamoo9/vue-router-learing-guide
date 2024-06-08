import { useProvideAnimate } from './useAnimate'
import { useProvideCart } from './useCart'

export default function useStore() {
  useProvideCart()
  useProvideAnimate()
}
