import { useProvideAnimate } from './useAnimate'
import { useProvideAuth } from './useAuth'
import { useProvideCart } from './useCart'

export default function useStore() {
  useProvideAuth()
  useProvideCart()
  useProvideAnimate()
}
