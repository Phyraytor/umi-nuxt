<script setup lang="ts">
import type { IStructure } from "~/types/interfaces";

const productStore = useProductStore()
const warehouseStore = useWarehouseStore()
const productList: IStructure[] = warehouseStore.getAll
const getProductName = (id: number) => productStore.get(id)?.name
</script>

<template>
  <div class="">
    <p class="text-4xl mb-6">My product list</p>
    <ul class="flex flex-col">
      <li v-for="product in productList" :key="product.product_id" class="flex">
        <span class="basis-6/12">{{ getProductName(product.product_id) }}:</span>
        <span class="basis-6/12">{{ product.weight }} gram</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>