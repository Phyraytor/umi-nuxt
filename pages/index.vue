<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
import { FormWarehouseBuy } from "#components"
import type { IDish, IHistory, IStructure } from "~/types/interfaces"
import MainLayout from "~/layouts/MainLayout.vue"


const dishStore = useDishStore()
const historyStore = useHistoryStore()
const dishList: IDish[] = dishStore.getAll
const isShowBuyForm = ref(false)
const dishId: Ref<number | undefined> = ref()
const day = ref(1)

const getDishName = (id: number) => dishStore.get(id)?.name
const prev = () => historyStore.minDay <= day.value - 1 && day.value--
const next = () => historyStore.maxDay >= day.value && day.value++
const toggleShowBuyForm = () => isShowBuyForm.value = !isShowBuyForm.value

const makeDish = () => {
  if (!dishId) return
  dishStore.makeDish(day.value, Number(dishId.value))
}
</script>

<template>
  <MainLayout>
    <NuxtLink to="/" class="rounded bg-cyan-400 px-6 py-1 text-white mb-4 inline-flex">
      Back
    </NuxtLink>
    <div class="flex justify-between p-4 border border-blue-50 border-2">
      <WarehouseList />
      <div>
        <FormWarehouseBuy v-if="isShowBuyForm">
          <UIButton :action="toggleShowBuyForm">Cancel</UIButton>
        </FormWarehouseBuy>
        <UIButton v-if="!isShowBuyForm" :action="toggleShowBuyForm">Buy product</UIButton>
      </div>
    </div>
    <div class="flex justify-between border-blue-50 border-2 p-4  mt-6">
      <div class="">
        <div class="flex justify-between gap-4 mb-2">
          <p class="text-4xl">Day: {{ day }}</p>
          <UIButton :action="prev">Prev</UIButton>
          <UIButton :action="next">Next</UIButton>
        </div>
        <DaySum :day="day" />
        <p class="text-xl mt-2">Dishes list</p>
        <div v-for="(dish_id, index) in historyStore.getDay(day)" :key="index">
          <p> {{ getDishName(dish_id) }}</p>
        </div>
      </div>
      <div class="">
        <p class="text-4xl mb-6">Make dish</p>
        <div class="flex gap-4">
          <UISelect v-model="dishId" :list="dishList" />
          <UIButton :action="makeDish">Make</UIButton>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>