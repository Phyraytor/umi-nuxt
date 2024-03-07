import { defineStore } from 'pinia'
import type { IProduct } from "~/types/interfaces";
import { defaultProductsList } from "~/data/defaultData";

export const useProductStore = defineStore('products', () => {
  const products: Ref<IProduct[]> = ref(defaultProductsList);
  const getAll = computed(() => products.value)
  const append = (product: Omit<IProduct, 'id'>) => products.value.push({
    ...product,
    id: Math.max(...products.value.map(product => product.id)) + 1,
  })
  const get = (id: number) =>
    products.value.find(product => product.id === id)

  return {products, append, get, getAll}
})