import pb, { type IUser } from './pb'

type INewUser = Partial<IUser> & { password: string; passwordConfirm: string }

export async function signUp(userData: INewUser) {
  const newUserData = {
    name: userData.name,
    username: userData.email?.split('@')[0],
    email: userData.email,
    password: userData.password,
    passwordConfirm: userData.passwordConfirm,
    emailVisibility: true
  }

  return await pb.collection('users').create(newUserData)
}

export async function signIn(email: string, password: string) {
  const user = await pb.collection('users').authWithPassword(email, password)

  return { ...user.record, token: user.token }
}

export function signOut() {
  pb.authStore.clear()
}
