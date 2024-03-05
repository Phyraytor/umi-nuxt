import {defineStore} from 'pinia'
import type { IStructure } from "~/interfaces/interfaces";
import { defaultWarehouseList } from "~/data/defaultData";

export const useWarehouseStore = defineStore('warehouse', () => {
  const warehouse: Ref<IStructure[]> = ref(defaultWarehouseList);
  const getAll = () => warehouse.value
  const get = (id: number) => warehouse.value.find(product => product.product_id === id)
  const append = (product: IStructure) => warehouse.value.push(product);
  const changeWeight = (product_id: number, weight: number) => {
    const product = get(product_id)
    if (product) product.weight += Number(weight);
  }

  return { get, getAll, changeWeight, append }
})