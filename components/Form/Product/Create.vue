<script setup lang="ts">
const productStore = useProductStore()
const name = ref('')
const price = ref(0)
const proteins = ref(0)
const fats = ref(0)
const carbohydrates = ref(0)
const calories = ref(0)
const create = () => {
  productStore.append({
    name: name.value,
    price: price.value,
    proteins: proteins.value,
    fats: fats.value,
    carbohydrates: carbohydrates.value,
    calories: calories.value,
  })
}
</script>
<template>
<div class="mt-4 border rounded p-4 flex flex-col gap-4">
  <p class="text-2xl">Create product</p>
  <UIInput label="Name" v-model="name" />
  <UIInput label="Price" v-model="price" />
  <UIInput label="Proteins" v-model="proteins" />
  <UIInput label="Fats" v-model="fats" />
  <UIInput label="Carbohydrates" v-model="carbohydrates" />
  <UIInput label="Calories" v-model="calories" />
  <div class="flex justify-between">
    <slot/>
    <UIButton :action="create">Sign in</UIButton>
  </div>
</div>
</template>

<style scoped>

</style>