import PocketBase, { type RecordService } from 'pocketbase'

export interface IUser {
  id: string
  collectionId: string
  collectionName: string
  username: string
  verified: boolean
  emailVisibility: boolean
  email: string
  created: string
  updated: string
  name: string
  avatar: string
  token?: string
}

export interface IProduct {
  collectionId: string
  collectionName: string
  created: string
  id: string
  image: string
  name: string
  price: number
  updated: string
}

interface TypedPocketBase extends PocketBase {
  collection(idOrName: string): RecordService
  collection(idOrName: 'users'): RecordService<IUser>
  collection(idOrName: 'products'): RecordService<IProduct>
}

const pb = new PocketBase(import.meta.env.VITE_PB) as TypedPocketBase

export default pb
