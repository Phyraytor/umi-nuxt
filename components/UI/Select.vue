<script setup lang="ts">
  interface ISelectItem {
    name: string | number;
    id: string | number;
  }
  defineProps<{
    modelValue: string | number;
    list: Array<ISelectItem>;
  }>();
  defineEmits(['update:modelValue']);
</script>

<template>
  <select
    class="px-2 py-1"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)">
    <option v-for="item in list" :value="item.id" class="px-2 py-1">
      {{ item.name }}
    </option>
  </select>
</template>

<style scoped>

</style>