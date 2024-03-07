<script setup lang="ts">
import { useProductStore } from "~/stores/productsStore";
import { useWarehouseStore } from "~/stores/warehouseStore";

const warehouseStore = useWarehouseStore();
const productStore = useProductStore();
const productList = productStore.getAll
const productId = ref()
const weight = ref(0)
const onSubmit = () => {
  warehouseStore.buy({
    product_id: Number(productId.value),
    weight: weight.value,
  })
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <UISelect v-model="productId" :list="productList" />
    <UIInput label="Weight" v-model="weight" />
    <div class="flex justify-between">
      <slot />
      <UIButton :action="onSubmit">Buy</UIButton>
    </div>
  </div>
</template>

<style scoped>

</style>