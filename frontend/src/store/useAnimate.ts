import { inject, provide, ref, type Ref } from 'vue'

const animateSymbol = Symbol('animate')

export function useProvideAnimate(initialAimateValue: boolean = true) {
  const animate = ref<boolean>(initialAimateValue)

  provide(animateSymbol, animate)
}

export function useInjectAnimate() {
  const animate = inject<Ref<boolean>>(animateSymbol)

  const on = () => {
    if (animate) {
      animate.value = true
    }
  }

  const off = () => {
    if (animate) {
      animate.value = false
    }
  }

  const toggle = () => {
    if (animate) {
      animate.value = !animate.value
    }
  }

  return { animate, on, off, toggle }
}
