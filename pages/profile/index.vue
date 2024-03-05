<script setup lang="ts">
import { FormProductBuy } from "#components"
import { useWarehouseStore } from "~/stores/warehouseStore"
import { useProductStore } from "~/stores/productsStore";
import { useDishStore } from "~/stores/dishStore";
import { DishService } from "~/services/dishService";
import type { IDish, IStructure } from "~/interfaces/interfaces";
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
  if (!dishId) return;
  DishService.makeDish(dishId.value);
}
</script>

<template>
  <div class="flex justify-between">
    <div>
      <p>My product list</p>
      <ul>
        <li v-for="product in productList" :key="product.product_id">
          <span>{{ getProductName(product.product_id) }}</span> <span>{{ product.weight }} gram</span>
        </li>
      </ul>
      <div>
        <FormProductBuy v-if="isShowBuyForm" />
        <button @click="toggleShowBuyForm">{{ isShowBuyForm ? "cancel" : "Buy product"}}</button>
      </div>
    </div>
    <div>
      <p>Make dish</p>
      <select v-model="dishId">
        <option v-for="dish in dishList" :value="dish.id">
          {{ dish.name }}
        </option>
      </select>
      <button @click="makeDish">Make</button>
    </div>
  </div>
</template>

<style scoped>

</style>