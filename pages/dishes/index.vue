<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
import MainLayout from "~/layouts/MainLayout.vue"
const dishStore = useDishStore()
const dishList = dishStore.getAll
const isShowAppend = ref(false)
const toggleShow = () => isShowAppend.value = !isShowAppend.value
</script>
<template>
  <MainLayout>
    <div class="flex justify-between">
      <NuxtLink to="/" class="rounded bg-cyan-400 px-6 py-1 text-white mb-4 inline-flex">
        Back
      </NuxtLink>
      <UIButton :action="toggleShow">Append</UIButton>
    </div>
    <FormDishCreate v-if="isShowAppend">
      <UIButton :action="toggleShow">Cancel</UIButton>
    </FormDishCreate>
    <div class="flex gap-4 flex-wrap mt-4">
      <div v-for="dish in dishList" :key="dish.id" class="mb-4 p-4 border border-blue-50 border-2 w-80">
        <p class="text-2xl mb-4"> {{ dish.name }}</p>
        <div class="flex">
          <span class="basis-6/12">price:</span>
          <span class="basis-6/12">{{ dishStore.getPrice(dish.id) }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">proteins:</span>
          <span class="basis-6/12">{{ dishStore.getProteins(dish.id) }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">fats:</span>
          <span class="basis-6/12">{{ dishStore.getFats(dish.id) }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">carbohydrates:</span>
          <span class="basis-6/12">{{ dishStore.getCarbohydrates(dish.id) }}</span>
        </div>
        <div class="flex">
          <span class="basis-6/12">calories:</span>
          <span class="basis-6/12">{{ dishStore.getCalories(dish.id) }}</span>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>