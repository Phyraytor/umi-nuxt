<script setup lang="ts">
  const name = ref('')
  const dishStore = useDishStore();
  const create = () => {
    dishStore.append(name.value)
    name.value = ''
  }
</script>
<template>
  <div class="flex flex-col gap-3">
    <UIInput label="Name" v-model="name" />
    <div class="flex justify-between">
      <slot />
      <UIButton :action="create">Create</UIButton>
    </div>
  </div>
</template>
<style scoped>

</style>