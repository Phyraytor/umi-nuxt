import { defineStore } from 'pinia'
import { useProductStore } from '~/stores/productsStore'
import type { IDish, IProduct, IProductSumField, IStructure } from "~/interfaces/interfaces";
import { defaultDishesList } from "~/data/defaultData";

export const useDishStore = defineStore('dishes', () => {
  const dishes: Ref<IDish[]> = ref(defaultDishesList)
  const append = (dish: IDish) => dishes.value.push(dish);
  const get = (id: number) => dishes.value.find(dish => dish.id === id)
  const getAll = () => dishes.value

  return {append, get, getAll}
})