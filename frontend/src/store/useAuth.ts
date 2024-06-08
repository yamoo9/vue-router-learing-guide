import { provide, inject, ref, type Ref } from 'vue'
import { signUp, signIn, signOut } from '@/api/auth'
import type { IUser } from '@/api/pb'
import pb from '@/api/pb'

const authSymbol = Symbol('auth')

export function useProvideAuth() {
  const auth = ref<null | IUser>(null)

  provide(authSymbol, auth)
}

export function useInjectAuth() {
  const auth = inject<Ref<IUser | null>>(authSymbol)

  const handleSignIn = async (email: string, password: string) => {
    await signIn(email, password)

    if (auth) {
      auth.value = pb.authStore.model as IUser
    }
  }

  const handleSignOut = () => {
    signOut()

    if (auth) {
      auth.value = null
    }
  }

  return { auth, signUp, signIn: handleSignIn, signOut: handleSignOut }
}
