import { defineStore } from 'pinia'
import type { IProduct } from "~/types/interfaces";
import { defaultProductsList } from "~/data/defaultData";

export const useProductStore = defineStore('products', () => {
  const products: Ref<IProduct[]> = ref(defaultProductsList);

  const getAll = () => products.value
  const append = (product: IProduct) => products.value.push(product)
  const get = (id: number) =>
    products.value.find(product => product.id === id)
  return {append, get, getAll}
})