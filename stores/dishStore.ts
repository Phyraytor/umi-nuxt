import { defineStore } from 'pinia'
import type { IDish, IProductSumField, IStructure } from "~/types/interfaces";
import { defaultDishesList } from "~/data/defaultData";
import { notify } from "~/services/notifiesService";

export const useDishStore = defineStore('dishes', () => {
  const productStore = useProductStore()
  const warehouseStore = useWarehouseStore()
  const dishes: Ref<IDish[]> = ref(defaultDishesList)
  const append = (name: string) => dishes.value.push({
    id: Math.max(...dishes.value.map(dish => dish.id)) + 1,
    name,
    structure: [],
  });
  const get = (id: number) => dishes.value.find(dish => dish.id === id)
  const getAll = computed(() => dishes.value)

  const getSumField = (id: number, fieldName: IProductSumField, weightConst: number = 1) =>
    get(id)?.structure.reduce((acc: number, product: IStructure) =>
        acc + weightConst * product.weight * (productStore.get(product.product_id)?.[fieldName] || 0)
      , 0).toFixed(2)

  const isMakeDish = (dish: IDish) => {
    return dish.structure.every(product =>
      product.weight <= (warehouseStore.get(product.product_id)?.weight || 0)
    )
  }
  const getPrice = (id: number) =>
    getSumField(id, 'price', 1 / 1000);
  const getProteins = (id: number) =>
    getSumField(id, 'proteins', 1 / 100);
  const getFats = (id: number) =>
    getSumField(id, 'fats', 1 / 100);
  const getCarbohydrates = (id: number) =>
    getSumField(id, 'carbohydrates', 1 / 100);
  const getCalories = (id: number) =>
    getSumField(id, 'calories', 1 / 100);
  const makeDish = (id?: number) => {
    if (!id) return;
    const dish = get(id);
    if (!dish) {
      notify(`Dish ${id} is not found`, 'error')
      return false;
    }
    if (!isMakeDish(dish)) {
      notify("You can't make this dish", 'error')
      return false;
    }
    dish.structure.forEach(product =>
      warehouseStore.spend(product.product_id, product.weight)
    );
  }

  return {dishes, append, get, getAll, makeDish, getPrice, getProteins, getFats, getCarbohydrates, getCalories}
})