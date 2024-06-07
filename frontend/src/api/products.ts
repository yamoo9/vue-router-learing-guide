import { onBeforeMount, ref } from 'vue'
import type { ClientResponseError, ListOptions, ListResult } from 'pocketbase'
import getPbImageURL from './getPbImageURL'
import pb, { type IProduct } from './pb'

export const useProductList = (
  page: number = 1,
  perPage: number = 10,
  options: ListOptions = {}
) => {
  const error = ref<null | Error>(null)
  const data = ref<null | ListResult<IProduct>>(null)

  onBeforeMount(async () => {
    try {
      const response = await pb.collection('products').getList(page, perPage, options)

      if (response) {
        response.items = response.items.map((product: IProduct) => ({
          ...product,
          image: getPbImageURL(product.collectionName, product.id, product.image)
        }))

        data.value = response
        console.log(data.value)
      }
    } catch (e) {
      error.value = e as ClientResponseError
    }
  })

  return { error, data }
}

export const useProductItem = (productId: string) => {
  const error = ref<null | Error>(null)
  const data = ref<null | IProduct>(null)

  onBeforeMount(async () => {
    try {
      const product = await pb.collection('products').getOne(productId)

      if (product) {
        data.value = {
          ...product,
          image: getPbImageURL(product.collectionName, product.id, product.image)
        }
      }
    } catch (e) {
      error.value = e as ClientResponseError
    }
  })

  return { error, data }
}
