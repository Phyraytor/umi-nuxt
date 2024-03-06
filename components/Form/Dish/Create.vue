<script setup lang="ts">
  import { useDishStore } from "~/stores/dishStore";

  const name = ref('')
  const dishStore = useDishStore();
  const create = () => {
    dishStore.append(name.value)
    name.value = ''
  }
</script>
<template>
  <div class="flex flex-col gap-3">
    <label for="" class="flex flex-col gap-1">
      <span class="text-xs">Name:</span>
      <input class="border-2 border-blue-50" v-model="name"/>
      <button class="rounded bg-cyan-400 px-6 py-1 text-white" @click="create">Create</button>
    </label>
  </div>
</template>
<style scoped>

</style>