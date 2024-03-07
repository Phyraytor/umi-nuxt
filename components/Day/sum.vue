<script setup lang="ts">
defineProps<{ day: number }>()
const historyStore = useHistoryStore()
</script>

<template>

  <div>
    <div class="flex">
      <span class="basis-6/12">price:</span>
      <span class="basis-6/12">{{ historyStore.getPrice(day) }}</span>
    </div>
    <div class="flex">
      <span class="basis-6/12">proteins:</span>
      <span class="basis-6/12">{{ historyStore.getProteins(day) }}</span>
    </div>
    <div class="flex">
      <span class="basis-6/12">fats:</span>
      <span class="basis-6/12">{{ historyStore.getFats(day) }}</span>
    </div>
    <div class="flex">
      <span class="basis-6/12">carbohydrates:</span>
      <span class="basis-6/12">{{ historyStore.getCarbohydrates(day) }}</span>
    </div>
    <div class="flex">
      <span class="basis-6/12">calories:</span>
      <span class="basis-6/12">{{ historyStore.getCalories(day) }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>