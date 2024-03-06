<script setup lang="ts">
import { useProductStore } from "~/stores/productsStore";
import { useWarehouseStore } from "~/stores/warehouseStore";

const warehouseStore = useWarehouseStore();
const productStore = useProductStore();
const productList = productStore.getAll()
const productId = ref()
const weight = ref(0)
const onSubmit = () => {
  warehouseStore.buy({
    product_id: productId.value,
    weight: weight.value,
  })
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <select class="px-2 py-1" v-model="productId">
      <option v-for="option in productList" :value="option.id" class="px-2 py-1">
        {{ option.name }}
      </option>
    </select>
    <label for="" class="flex flex-col gap-1">
      <span class="text-xs">Weight:</span>
      <input class="border-2 border-blue-50" v-model="weight"/>
    </label>
    <div class="flex justify-between">
      <slot />
      <button class="rounded bg-cyan-400 px-6 py-1 text-white" @click="onSubmit">Buy</button>
    </div>
  </div>
</template>

<style scoped>

</style>