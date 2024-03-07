<script setup lang="ts">
defineProps<{
  modelValue: string | number;
  label: string;
}>();
defineEmits(['update:modelValue']);
</script>
<template>
  <div class="flex flex-col gap-1">
    <span class="text-xs">{{ label }}:</span>
    <input
      class="rounded border border-slate-400 px-2 py-1"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
    />
  </div>
</template>
<style scoped>

</style>