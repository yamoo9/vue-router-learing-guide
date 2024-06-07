import PocketBase, { type RecordService } from 'pocketbase'

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
  collection(idOrName: 'products'): RecordService<IProduct>
}

const pb = new PocketBase(import.meta.env.VITE_PB) as TypedPocketBase

export default pb
