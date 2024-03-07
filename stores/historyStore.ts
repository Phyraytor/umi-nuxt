import { defineStore } from 'pinia'
import type { IHistory, IProductSumField } from "~/types/interfaces";
import { defaultHistory } from "~/data/defaultData";

export const useHistoryStore = defineStore('history', () => {
  const dishStore = useDishStore()
  const history: Ref<IHistory[]> = ref(defaultHistory)
  const append = (eating: IHistory) => history.value.push(eating)
  const getAll = computed(() => history.value)
  const getDay = (day: number) => history.value.filter(eating => eating.day === day).map(eating => eating.dish_id)

  const minDay = computed(() => Math.min(...history.value.map(eating => eating.day)))
  const maxDay = computed(() => Math.max(...history.value.map(eating => eating.day)))
  const getSumField = (day: number, fieldName: IProductSumField, weightConst: number = 1) =>
    getDay(day).reduce((sum: number, dish_id: number) =>
        sum + Number(dishStore.getSumField(dish_id, fieldName, weightConst))
      , 0).toFixed(2)
  const getPrice = (id: number) =>
    getSumField(id, 'price', 1 / 1000)
  const getProteins = (id: number) =>
    getSumField(id, 'proteins', 1 / 100)
  const getFats = (id: number) =>
    getSumField(id, 'fats', 1 / 100)
  const getCarbohydrates = (id: number) =>
    getSumField(id, 'carbohydrates', 1 / 100)
  const getCalories = (id: number) =>
    getSumField(id, 'calories', 1 / 100)

  return {history, getPrice, getProteins, getFats, getCarbohydrates, getCalories, append, getAll, getDay, minDay, maxDay}
})