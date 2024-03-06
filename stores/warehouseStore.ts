import {defineStore} from 'pinia'
import type { IStructure } from "~/types/interfaces";
import { defaultWarehouseList } from "~/data/defaultData";
import { useProductStore } from "~/stores/productsStore";
import { notify } from "~/services/notifiesService";

const productStore = useProductStore()
export const useWarehouseStore = defineStore('warehouse', () => {
  const warehouse: Ref<IStructure[]> = ref(defaultWarehouseList);
  const getAll = () => warehouse.value
  const get = (id: number) => warehouse.value.find(product => product.product_id === id)
  const append = (product: IStructure) => warehouse.value.push(product);
  const changeWeight = (product_id: number, weight: number) => {
    const product = get(product_id)
    if (product) product.weight += Number(weight);
  }
  const add = (product: IStructure) => {
    if (!productStore.get(product.product_id)) {
      notify(`Product ${product.product_id} is not found`, 'error')
      return
    }
    append(product)
  }
  const buy = (product: IStructure) => {
    if (!get(product.product_id)) {
      append(product)
      return
    }
    changeWeight(product.product_id, product.weight);
  }
  const spend = (productId: number, weight: number) => {
    if (!get(productId)) {
      notify(`Product ${productId} is not found`, 'error')
      return
    }
    changeWeight(productId, -weight);
  }
  return { get, getAll, changeWeight, buy, spend }
})