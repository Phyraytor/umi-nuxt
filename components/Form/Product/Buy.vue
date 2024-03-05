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
  <div>
    <select v-model="productId">
      <option v-for="option in productList" :value="option.id">
        {{ option.name }}
      </option>
    </select>
    <input v-model="weight"/>
    <button @click="onSubmit">Buy</button>
  </div>
</template>

<style scoped>

</style>