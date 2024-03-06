<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
import { FormWarehouseBuy } from "#components"
import { useWarehouseStore } from "~/stores/warehouseStore"
import { useProductStore } from "~/stores/productsStore"
import { useDishStore } from "~/stores/dishStore"
import type { IDish, IStructure } from "~/types/interfaces"
import MainLayout from "~/layouts/MainLayout.vue"

const warehouseStore = useWarehouseStore()
const productStore = useProductStore()
const dishStore = useDishStore()
const productList: IStructure[] = warehouseStore.getAll()
const dishList: IDish[] = dishStore.getAll()
const isShowBuyForm = ref(false)
const toggleShowBuyForm = () => isShowBuyForm.value = !isShowBuyForm.value
const getProductName = (id: number) => productStore.get(id)?.name
const dishId: Ref<number | undefined> = ref()
const makeDish = () => {
  if (!dishId) return
  dishStore.makeDish(dishId.value)
}
</script>

<template>
  <MainLayout>
    <NuxtLink to="/" class="rounded bg-cyan-400 px-6 py-1 text-white mb-4 inline-flex">
      Back
    </NuxtLink>
    <div class="flex justify-between p-4 border border-blue-50 border-2">
      <div class="">
        <p class="text-4xl mb-6">My product list</p>
        <ul class="flex flex-col">
          <li v-for="product in productList" :key="product.product_id" class="flex">
            <span class="basis-6/12">{{ getProductName(product.product_id) }}:</span>
            <span class="basis-6/12">{{ product.weight }} gram</span>
          </li>
        </ul>
      </div>
      <div>
        <FormWarehouseBuy v-if="isShowBuyForm">
          <button
            @click="toggleShowBuyForm"
            class="rounded bg-cyan-400 px-6 py-1 text-white"
          >Cancel
          </button>
        </FormWarehouseBuy>
        <button
          v-if="!isShowBuyForm"
          class="rounded bg-cyan-400 px-6 py-1 text-white"
          @click="toggleShowBuyForm"
        >Buy product
        </button>
      </div>
    </div>
    <div class="p-4 border border-blue-50 border-2 mt-6">
      <p class="text-4xl mb-6">Make dish</p>
      <select class="px-2 py-1" v-model="dishId">
        <option v-for="dish in dishList" :value="dish.id" class="px-2 py-1">
          {{ dish.name }}
        </option>
      </select>
      <button @click="makeDish" class="ml-4 rounded bg-cyan-400 px-6 py-1 text-white">Make</button>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>