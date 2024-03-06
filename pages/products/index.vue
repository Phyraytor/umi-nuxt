<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
import MainLayout from "~/layouts/MainLayout.vue"
import { useProductStore } from "~/stores/productsStore";
import type { IProduct } from "~/types/interfaces";
const productStore = useProductStore()
const productList: IProduct[] = productStore.getAll()
</script>

<template>
  <MainLayout>
    <NuxtLink to="/" class="rounded bg-cyan-400 px-6 py-1 text-white mb-4 inline-flex">
      Back
    </NuxtLink>
    <div class="flex gap-4 flex-wrap">
      <div v-for="product in productList" :key="product.id" class="mb-4 p-4 border border-blue-50 border-2 w-80">
        <p class="text-2xl mb-4"> {{ product.name }}</p>
        <div class="flex">
          <span class="basis-6/12">price:</span>
          <span class="basis-6/12">{{ product.price }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">proteins:</span>
          <span class="basis-6/12">{{ product.proteins }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">fats:</span>
          <span class="basis-6/12">{{ product.fats }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">carbohydrates:</span>
          <span class="basis-6/12">{{ product.carbohydrates }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">calories:</span>
          <span class="basis-6/12">{{ product.calories }}</span>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>